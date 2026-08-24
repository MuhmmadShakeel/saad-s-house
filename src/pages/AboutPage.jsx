import InteriorHero from '../components/common/InteriorHero.jsx'
import PageCta from '../components/common/PageCta.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { testimonials } from '../lib/homeData.js'
import { aboutAssets, pageHeroes } from '../lib/siteData.js'

const timeline = [
  { year: '1947', title: 'An eye for style', text: 'Saad Shaar was born in Lebanon and discovered a fascination with his father’s custom clothing at a young age.' },
  { year: '1960', title: 'Learning the craft', text: 'At thirteen, he began learning in his father’s tailoring world before pursuing cutting and design in Lebanon’s capital.' },
  { year: '1971', title: 'A Houston beginning', text: 'With one sewing machine and a repaired Montrose storefront, Saad opened the doors to his own tailoring business.' },
  { year: 'Today', title: 'A family legacy', text: 'Saad’s remains a family-owned Houston boutique serving people who value personal fit, exceptional cloth, and lasting craft.' },
]

export default function AboutPage() {
  return (
    <>
      <InteriorHero {...pageHeroes.about} />

      <section className="section-screen bg-[#fffdf9]">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-24">
          <div className="relative mx-auto max-w-md" data-aos="fade-right">
            <img alt="Saad Shaar, founder and master tailor" className="w-full border-[10px] border-[#f4eee6] shadow-2xl" loading="lazy" src={aboutAssets.founderImage} />
            <div className="absolute -bottom-6 -right-5 bg-[#4a2118] p-6 text-white sm:-right-8">
              <p className="font-display text-4xl text-[#e0b36d]">Saad Shaar</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-white/60">Founder & master tailor</p>
            </div>
          </div>
          <div data-aos="fade-left">
            <SectionHeading align="left" eyebrow="About Saad’s Tailors" title="Built through courage, patience, and an exacting eye." />
            <p className="mt-6 text-sm leading-7 text-[#6e625d] sm:text-base">
              Saad began as an entry-level floor boy in his father’s tailor shop in Lebanon. Eager to learn cutting and design, he pursued the craft with determination, eventually moving to the United States and settling in Houston.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#6e625d] sm:text-base">
              In 1971, he found a small Montrose space and negotiated six months without rent in exchange for repairing the store. With one sewing machine and very little money, he opened the business that became Saad’s Tailors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#4a2118] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="The journey" light title="A life measured in milestones." />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {timeline.map((item, index) => (
              <article className="min-h-80 bg-[#4a2118] p-7 lg:p-9" data-aos="fade-up" data-aos-delay={index * 75} key={item.year}>
                <p className="font-display text-5xl text-[#dcae67]">{item.year}</p>
                <h2 className="mt-9 font-display text-2xl">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#f7f4ef]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div data-aos="fade-right">
              <SectionHeading align="left" eyebrow="The boutique today" title="Classic principles. Modern perspective." description="Saad’s is one of Houston’s early hand-tailoring services for men and women, specializing in made-to-measure suits, tuxedos, sports jackets, slacks, dresses, and overcoats." />
            </div>
            <img alt="Master tailor at work" className="max-h-[620px] w-full object-contain" data-aos="fade-left" loading="lazy" src={aboutAssets.craftsmanshipImage} />
          </div>
          <div className="responsive-feature-row mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <blockquote className="feature-card" data-aos="fade-up" data-aos-delay={index * 80} key={item.name}>
                <p className="font-display text-2xl leading-9 text-[#3b2118]">“{item.quote}”</p>
                <footer className="mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9b6825]">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <PageCta eyebrow="Continue the story" title="The next chapter begins with your garment." />
    </>
  )
}
