import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function PageCta({ eyebrow = 'Your next fitting', title = 'Let’s create something that feels entirely yours.', description }) {
  return (
    <section className="page-cta section-screen">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-20 text-center lg:px-10" data-aos="zoom-out">
        <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e0b36d]">
          <span className="h-px w-8 bg-current" />
          {eyebrow}
          <span className="h-px w-8 bg-current" />
        </div>
        <h2 className="max-w-4xl font-display text-4xl leading-[1] text-white sm:text-5xl lg:text-7xl">{title}</h2>
        {description && <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{description}</p>}
        <Link className="button-gold mt-9" to="/contact">
          Plan your appointment
          <Icon name="arrow" size={17} />
        </Link>
      </div>
    </section>
  )
}
