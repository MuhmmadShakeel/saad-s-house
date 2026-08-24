import { useState } from 'react'
import { testimonials } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonial-section section-screen" id="testimonials">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading eyebrow="Client stories" light title="What our clients say." />

        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_auto]" data-aos="fade-up">
          <div className="max-w-4xl">
            <Icon className="text-[#d7a75f]" name="quote" size={48} strokeWidth={1.2} />
            <blockquote className="mt-6 font-display text-3xl leading-[1.25] text-white sm:text-4xl lg:text-5xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d7a75f]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{testimonial.name}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button aria-label="Previous testimonial" className="carousel-arrow border-white/20 bg-white/5" onClick={() => move(-1)} type="button">
              <Icon name="left" size={18} />
            </button>
            <button aria-label="Next testimonial" className="carousel-arrow border-white/20 bg-white/5" onClick={() => move(1)} type="button">
              <Icon name="right" size={18} />
            </button>
          </div>
        </div>

        <div className="mt-14 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              aria-label={`Read testimonial from ${item.name}`}
              className={`h-[3px] flex-1 transition ${index === active ? 'bg-[#d7a75f]' : 'bg-white/15'}`}
              key={item.name}
              onClick={() => setActive(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
