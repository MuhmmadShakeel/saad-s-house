import { createHash } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'

const SITE_ORIGIN = 'https://saadtailors.com'
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap_index.xml`
const MEDIA_DIR = new URL('../src/assets/media/', import.meta.url)
const DOC_DIR = new URL('../src/assets/doc/', import.meta.url)
const USER_AGENT = 'SaadTailorsReactAssetImporter/1.0'
const MEDIA_EXTENSIONS = new Set([
  '.avif', '.gif', '.ico', '.jpeg', '.jpg', '.m4a', '.mov', '.mp3', '.mp4',
  '.ogg', '.ogv', '.pdf', '.png', '.svg', '.webm', '.webp', '.wav', '.woff', '.woff2',
])

const decodeEntities = (value) => value
  .replaceAll('&nbsp;', ' ')
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#039;', "'")
  .replaceAll('&apos;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))

const cleanText = (html) => decodeEntities(
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--([\s\S]*?)-->/g, ' ')
    .replace(/<\/(p|div|section|article|header|footer|main|aside|nav|h[1-6]|li|blockquote|tr)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' '),
)
  .replace(/[\t\f\v ]+/g, ' ')
  .replace(/ *\n */g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim()

const safeSlug = (url) => {
  const parsed = new URL(url)
  const path = parsed.pathname.replace(/^\/+|\/+$/g, '') || 'home'
  return path.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'home'
}

const fetchBuffer = async (url, attempts = 3) => {
  let lastError
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': USER_AGENT, accept: '*/*' },
        redirect: 'follow',
        signal: AbortSignal.timeout(45_000),
      })
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
      return {
        buffer: Buffer.from(await response.arrayBuffer()),
        contentType: response.headers.get('content-type') || '',
        finalUrl: response.url,
      }
    } catch (error) {
      lastError = error
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 500 * attempt))
    }
  }
  throw lastError
}

const fetchText = async (url) => {
  const result = await fetchBuffer(url)
  return { ...result, text: result.buffer.toString('utf8') }
}

const extractLocs = (xml) => [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)]
  .map((match) => decodeEntities(match[1].trim()))

const extractTitle = (html) => {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  return match ? cleanText(match[1]) : ''
}

const extractMediaUrls = (html, pageUrl) => {
  const candidates = new Set()
  const addCandidate = (rawValue) => {
    if (!rawValue) return
    for (const part of rawValue.split(',').map((item) => item.trim().split(/\s+/)[0])) {
      if (!part || part.startsWith('data:') || part.startsWith('blob:') || part.startsWith('#')) continue
      try {
        const url = new URL(decodeEntities(part.replace(/^['"]|['"]$/g, '')), pageUrl)
        if (!['http:', 'https:'].includes(url.protocol)) continue
        const extension = extname(url.pathname).toLowerCase()
        if (MEDIA_EXTENSIONS.has(extension)) {
          url.hash = ''
          candidates.add(url.href)
        }
      } catch {
        // Ignore malformed source values from third-party widgets.
      }
    }
  }

  for (const match of html.matchAll(/\b(?:src|srcset|data-src|data-srcset|data-lazy-src|data-bg|poster|content)\s*=\s*["']([^"']+)["']/gi)) {
    addCandidate(match[1])
  }
  for (const match of html.matchAll(/url\(\s*(["']?)([^)'"\s]+)\1\s*\)/gi)) addCandidate(match[2])
  return [...candidates]
}

const contentTypeExtension = (contentType) => {
  const type = contentType.split(';')[0].trim().toLowerCase()
  return {
    'image/avif': '.avif', 'image/gif': '.gif', 'image/jpeg': '.jpg',
    'image/png': '.png', 'image/svg+xml': '.svg', 'image/webp': '.webp',
    'video/mp4': '.mp4', 'video/webm': '.webm', 'application/pdf': '.pdf',
  }[type] || ''
}

const mediaFilename = (url, contentType) => {
  const parsed = new URL(url)
  const original = decodeURIComponent(basename(parsed.pathname)) || 'media'
  const extension = extname(original) || contentTypeExtension(contentType)
  const stem = original.slice(0, original.length - extname(original).length)
    .replace(/[^a-z0-9_-]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || 'media'
  const hash = createHash('sha1').update(url).digest('hex').slice(0, 10)
  return `${stem}-${hash}${extension.toLowerCase()}`
}

const runPool = async (items, concurrency, worker) => {
  const queue = [...items]
  const runners = Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length) await worker(queue.shift())
  })
  await Promise.all(runners)
}

await mkdir(MEDIA_DIR, { recursive: true })
await mkdir(DOC_DIR, { recursive: true })

console.log('Reading sitemap index...')
const sitemapIndex = await fetchText(SITEMAP_URL)
const sitemapUrls = extractLocs(sitemapIndex.text).filter((url) => url.endsWith('.xml'))
const discoveredUrls = new Set([SITE_ORIGIN + '/'])

await runPool(sitemapUrls, 4, async (sitemapUrl) => {
  try {
    const sitemap = await fetchText(sitemapUrl)
    for (const url of extractLocs(sitemap.text)) discoveredUrls.add(url)
  } catch (error) {
    console.warn(`Sitemap skipped: ${sitemapUrl} (${error.message})`)
  }
})

const pageUrls = [...discoveredUrls].filter((url) => {
  try {
    return new URL(url).hostname.endsWith('saadtailors.com') && !MEDIA_EXTENSIONS.has(extname(new URL(url).pathname).toLowerCase())
  } catch {
    return false
  }
})

console.log(`Reading ${pageUrls.length} pages...`)
const pages = []
const mediaSources = new Map()
const pageErrors = []

await runPool(pageUrls, 5, async (pageUrl) => {
  try {
    const page = await fetchText(pageUrl)
    if (!page.contentType.includes('text/html')) return
    const media = extractMediaUrls(page.text, page.finalUrl)
    for (const mediaUrl of media) {
      if (!mediaSources.has(mediaUrl)) mediaSources.set(mediaUrl, new Set())
      mediaSources.get(mediaUrl).add(pageUrl)
    }
    pages.push({
      slug: safeSlug(pageUrl),
      url: pageUrl,
      finalUrl: page.finalUrl,
      title: extractTitle(page.text),
      text: cleanText(page.text),
      media,
    })
  } catch (error) {
    pageErrors.push({ url: pageUrl, error: error.message })
  }
})

pages.sort((a, b) => a.url.localeCompare(b.url))
console.log(`Downloading ${mediaSources.size} media files...`)
const media = []
const mediaErrors = []

await runPool([...mediaSources.entries()], 6, async ([mediaUrl, sources]) => {
  try {
    const result = await fetchBuffer(mediaUrl)
    const filename = mediaFilename(mediaUrl, result.contentType)
    await writeFile(new URL(filename, MEDIA_DIR), result.buffer)
    media.push({
      filename,
      url: mediaUrl,
      finalUrl: result.finalUrl,
      contentType: result.contentType,
      bytes: result.buffer.length,
      sourcePages: [...sources].sort(),
    })
  } catch (error) {
    mediaErrors.push({ url: mediaUrl, sourcePages: [...sources].sort(), error: error.message })
  }
})

media.sort((a, b) => a.filename.localeCompare(b.filename))
const generatedAt = new Date().toISOString()
const contentDocument = {
  source: SITE_ORIGIN + '/',
  generatedAt,
  pages,
}
const manifest = {
  source: SITE_ORIGIN + '/',
  generatedAt,
  sitemapUrls,
  totals: {
    discoveredUrls: discoveredUrls.size,
    pagesSaved: pages.length,
    mediaSaved: media.length,
    pageErrors: pageErrors.length,
    mediaErrors: mediaErrors.length,
  },
  media,
  errors: { pages: pageErrors, media: mediaErrors },
}
const markdown = pages.map((page) => `# ${page.title || page.slug}\n\nSource: ${page.url}\n\n${page.text}\n`).join('\n---\n\n')

await writeFile(new URL('site-content.json', DOC_DIR), JSON.stringify(contentDocument, null, 2) + '\n')
await writeFile(new URL('site-content.md', DOC_DIR), markdown)
await writeFile(new URL('source-manifest.json', DOC_DIR), JSON.stringify(manifest, null, 2) + '\n')

console.log(JSON.stringify(manifest.totals, null, 2))
if (pageErrors.length || mediaErrors.length) console.warn('Some sources could not be imported; see source-manifest.json.')
