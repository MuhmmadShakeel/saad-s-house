import Icon from '../components/common/Icon.jsx'
import InteriorHero from '../components/common/InteriorHero.jsx'
import PageCta from '../components/common/PageCta.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { newsArticles, pageHeroes } from '../lib/siteData.js'

export default function NewsPage() {
  return (
    <>
      <InteriorHero {...pageHeroes.news} />
      <section className="section-screen bg-[#fffdf9] py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="flex flex-col items-center">
            <SectionHeading eyebrow="Style notes" title="From the gentleman’s archive." description="Considered ideas for choosing, wearing, and enjoying custom clothing with confidence." />
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {newsArticles.map((article, index) => (
              <article className="news-card group" data-aos="fade-up" data-aos-delay={(index % 2) * 80} key={article.title}>
                <div className="aspect-[16/10] overflow-hidden bg-[#eee5d7]">
                  <img alt={article.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" src={article.image} />
                </div>
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#9b6825]"><span>{article.category}</span><span>·</span><span>{article.date}</span></div>
                  <h2 className="mt-4 font-display text-3xl leading-tight text-[#2a1710] sm:text-4xl">{article.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#6e625d]">{article.excerpt}</p>
                  <a className="card-link mt-7" href="mailto:info@saadtailors.com?subject=Question about Saad's style journal">Ask our tailors <Icon name="arrow" size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta eyebrow="Your personal style" title="Turn inspiration into something made for you." />
    </>
  )
}
