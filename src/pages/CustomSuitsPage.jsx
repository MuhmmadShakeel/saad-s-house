import InteriorHero from '../components/common/InteriorHero.jsx'
import PageCta from '../components/common/PageCta.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Icon from '../components/common/Icon.jsx'
import { customJourney, customOptions, pageHeroes, supportingImages } from '../lib/siteData.js'

export default function CustomSuitsPage() {
  return (
    <>
      <InteriorHero {...pageHeroes.custom} />

      <section className="section-screen bg-[#fffdf9]">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-24">
          <div className="relative" data-aos="fade-right">
            <div className="editorial-image min-h-[560px]">
              <img alt="Colorful premium tailoring threads" className="h-full w-full object-cover" loading="lazy" src={supportingImages.threadsImage} />
            </div>
            <div className="absolute -bottom-7 -right-3 bg-[#4a2118] px-6 py-5 text-white sm:-right-7 sm:px-8">
              <p className="font-display text-3xl text-[#e0b36d]">10 days</p>
              <p className="mt-1 text-[0.58rem] uppercase tracking-[0.18em] text-white/65">First fitting to final adjustment</p>
            </div>
          </div>
          <div data-aos="fade-left">
            <SectionHeading
              align="left"
              eyebrow="A tailoring experience built around you"
              title="A garment with your name in every decision."
              description="Your bespoke journey begins with a conversation—at our Westheimer boutique, your home, office, or hotel. Together, we shape a garment around your style, proportions, and purpose."
            />
            <p className="mt-6 text-sm leading-7 text-[#6e625d] sm:text-base">
              From fabric and silhouette to lapel, lining, buttons, collar, and cuffs, every element is selected with intention and finished by experienced hands.
            </p>
            <a className="button-primary mt-8" href="#journey">See the process <Icon name="arrow" size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#f4eee6]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-center">
            <SectionHeading eyebrow="Premium fabrics" title="Thousands of possibilities. One personal result." description="Explore cloth with the weight, movement, color, and character that suits you." />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customOptions.map((option, index) => (
              <div className="flex min-h-28 items-center gap-5 border border-[#2a1710]/10 bg-[#fffdf9] p-6" data-aos="fade-up" data-aos-delay={(index % 3) * 75} key={option}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b57a2e]/10 text-[#9a651f]"><Icon name="plus" size={16} /></span>
                <p className="font-display text-xl text-[#2a1710]">{option}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#1b100c] text-white" id="journey">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="The bespoke journey" light title="From first idea to final adjustment." />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {customJourney.map((item, index) => (
              <article className="min-h-80 bg-[#1b100c] p-7 lg:p-9" data-aos="fade-up" data-aos-delay={index * 80} key={item.step}>
                <span className="font-display text-5xl text-[#dcae67]">{item.step}</span>
                <h2 className="mt-10 font-display text-3xl">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta eyebrow="Made to measure" title="Your cloth. Your cut. Your signature." description="Begin a custom suit, dress, shirt, tuxedo, sports jacket, or overcoat with Houston’s experienced tailoring team." />
    </>
  )
}
