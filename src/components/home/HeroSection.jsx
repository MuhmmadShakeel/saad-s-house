import { useCallback, useEffect, useState } from 'react'
import { heroSlides } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

const AUTOPLAY_DELAY = 6500

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const selectSlide = useCallback((index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, AUTOPLAY_DELAY)
    return () => window.clearInterval(timer)
  }, [activeSlide, paused])

  return (
    <section
      aria-label="Saad's Tailors introduction"
      className="hero-section"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-hidden="true" className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div className={`hero-slide ${index === activeSlide ? 'is-active' : ''}`} key={slide.title}>
            <img
              alt=""
              className="h-full w-full object-cover"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              src={slide.image}
              style={{ objectPosition: slide.imagePosition }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
        <div className="hero-texture" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-116px)] max-w-[1440px] items-center px-6 py-20 lg:px-10">
        <div className="max-w-4xl pt-6 sm:pt-0">
          <div className="mb-7 flex items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-[#e3b66f]" data-aos="fade-up">
            <span className="h-px w-10 bg-current" />
            {heroSlides[activeSlide].eyebrow}
          </div>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="80">
            {heroSlides[activeSlide].title}
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8" data-aos="fade-up" data-aos-delay="160">
            {heroSlides[activeSlide].description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="240">
            <a className="button-gold" href="#contact">
              Book a fitting
              <Icon name="arrow" size={17} />
            </a>
            <a className="button-ghost" href="#services">Explore our services</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between px-6 pb-6 lg:px-10 lg:pb-8">
          <div className="hidden items-center gap-4 text-[0.65rem] uppercase tracking-[0.25em] text-white/50 sm:flex">
            <span className="text-[#e3b66f]">0{activeSlide + 1}</span>
            <span className="h-px w-14 bg-white/25" />
            <span>0{heroSlides.length}</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="carousel-arrow" aria-label="Previous slide" onClick={() => selectSlide(activeSlide - 1)} type="button">
              <Icon name="left" size={18} />
            </button>
            <div className="mx-2 flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  aria-label={`Show slide ${index + 1}: ${slide.title}`}
                  className={`carousel-dot ${index === activeSlide ? 'is-active' : ''}`}
                  key={slide.title}
                  onClick={() => selectSlide(index)}
                  type="button"
                />
              ))}
            </div>
            <button className="carousel-arrow" aria-label="Next slide" onClick={() => selectSlide(activeSlide + 1)} type="button">
              <Icon name="right" size={18} />
            </button>
          </div>
        </div>
        <div className="h-[2px] bg-white/10">
          <div className="hero-progress" key={`${activeSlide}-${paused}`} style={{ animationPlayState: paused ? 'paused' : 'running' }} />
        </div>
      </div>
    </section>
  )
}
