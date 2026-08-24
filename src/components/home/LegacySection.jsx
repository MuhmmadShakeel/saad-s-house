import { visualAssets } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

export default function LegacySection() {
  return (
    <section className="section-screen relative overflow-hidden bg-[#4a2118] text-white" id="story">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.08]">
        <img alt="" className="h-full w-full object-cover" loading="lazy" src={visualAssets.patternImage} />
      </div>
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d7a75f]/20" />
      <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#d7a75f]/20" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-24">
        <div data-aos="fade-right">
          <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e1b66f]">
            <span className="h-px w-8 bg-current" />
            Our story
          </div>
          <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Houston tailoring, refined since 1971.
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
            Saad’s Tailors has built its reputation by understanding the principles of classic tailoring, then combining them with modern design and a deeply personal level of service.
          </p>
          <a className="button-gold mt-9" href="#contact">
            Meet with our tailors
            <Icon name="arrow" size={17} />
          </a>
        </div>

        <div className="relative" data-aos="fade-left">
          <div className="legacy-image-wrap">
            <img alt="Custom suit displayed at Saad's Tailors" className="h-full w-full object-cover object-top" loading="lazy" src={visualAssets.mannequinImage} />
          </div>
          <div className="absolute -bottom-6 -left-4 max-w-[270px] bg-[#fffdf9] p-6 text-[#2a1710] shadow-2xl sm:-left-8 sm:p-8">
            <p className="font-display text-5xl text-[#a36d28]">1971</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em]">The year our story began</p>
          </div>
        </div>
      </div>
    </section>
  )
}
