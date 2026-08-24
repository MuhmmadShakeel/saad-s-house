import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function InteriorHero({ eyebrow, title, description, image, imagePosition = 'center' }) {
  useEffect(() => {
    document.title = `${eyebrow} | Saad's Tailors Houston`
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)
  }, [description, eyebrow])

  return (
    <section className="interior-hero">
      <img alt="" className="absolute inset-0 h-full w-full object-cover" src={image} style={{ objectPosition: imagePosition }} />
      <div className="interior-hero-overlay" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-106px)] max-w-[1440px] items-center px-6 py-20 lg:px-10">
        <div className="max-w-4xl" data-aos="fade-up">
          <div className="mb-6 flex items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-[#e3b66f]">
            <span className="h-px w-10 bg-current" />
            {eyebrow}
          </div>
          <h1 className="hero-title">{title}</h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">{description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button-gold" to="/contact">
              Book a fitting
              <Icon name="arrow" size={17} />
            </Link>
            <Link className="button-ghost" to="/">Return home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
