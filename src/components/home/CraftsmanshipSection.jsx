import { craftsmanship } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

export default function CraftsmanshipSection() {
  return (
    <section className="section-screen overflow-hidden bg-[#fffdf9]" id="craftsmanship">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto w-full max-w-[620px]" data-aos="fade-right">
          <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#bd8a43]/60 sm:-left-8 sm:-top-8" />
          <img
            alt="Master tailor working alongside a finished custom suit"
            className="relative z-10 w-full object-contain"
            loading="lazy"
            src={craftsmanship.image}
          />
          <div className="absolute -bottom-8 -right-4 z-20 hidden w-44 overflow-hidden border-[6px] border-[#fffdf9] shadow-2xl sm:block lg:w-52">
            <img alt="Tailor cutting a custom garment pattern" className="aspect-square w-full object-cover" loading="lazy" src={craftsmanship.accentImage} />
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#98621f]">
            <span className="h-px w-8 bg-current" />
            The Saad’s standard
          </div>
          <h2 className="font-display text-4xl leading-[1.02] text-[#2a1710] sm:text-5xl lg:text-6xl">
            Custom tailoring that feels unmistakably yours.
          </h2>
          <p className="mt-7 text-sm leading-7 text-[#6e625d] sm:text-base">
            At Saad’s Tailors Boutique, high-quality fabrics meet experienced hands and an exacting eye. Every line, proportion, and finish is considered so your garment looks composed and feels effortless.
          </p>
          <div className="mt-8 grid gap-6 border-y border-[#2a1710]/10 py-7 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl text-[#9b6825]">50+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#6e625d]">Years of craftsmanship</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[#9b6825]">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#6e625d]">Personalized approach</p>
            </div>
          </div>
          <a className="button-primary mt-8" href="#contact">
            Begin your custom journey
            <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
