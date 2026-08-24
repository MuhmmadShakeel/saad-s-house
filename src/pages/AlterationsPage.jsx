import InteriorHero from '../components/common/InteriorHero.jsx'
import PageCta from '../components/common/PageCta.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Icon from '../components/common/Icon.jsx'
import { alterationGroups, pageHeroes, pricingGroups } from '../lib/siteData.js'

export default function AlterationsPage() {
  return (
    <>
      <InteriorHero {...pageHeroes.alterations} />

      <section className="section-screen bg-[#fffdf9]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-center">
            <SectionHeading eyebrow="Flawless fit, renewed confidence" title="Alterations for every wardrobe." description="From suit resizing and bridal fittings to leather repair and denim reconstruction, our Houston tailors bring accuracy and care to every adjustment." />
          </div>
          <div className="responsive-feature-row mt-14 grid gap-5 lg:grid-cols-3">
            {alterationGroups.map((group, index) => (
              <article className="feature-card" data-aos="fade-up" data-aos-delay={index * 90} key={group.title}>
                <span className="font-display text-5xl text-[#b57a2e]">0{index + 1}</span>
                <h2 className="mt-8 font-display text-3xl text-[#2a1710]">{group.title}</h2>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => <li className="flex gap-3 text-sm leading-6 text-[#6e625d]" key={item}><Icon className="mt-1 shrink-0 text-[#a36d28]" name="arrow" size={14} />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#f7f4ef] py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <SectionHeading align="left" eyebrow="Alteration guide" title="Clear starting prices." description="These prices reflect the published guide from Saad’s Tailors. Final quotes depend on garment construction and the work required." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pricingGroups.map((group, index) => (
              <article className="pricing-card" data-aos="fade-up" data-aos-delay={(index % 2) * 80} key={group.title}>
                <h2 className="font-display text-3xl text-[#2a1710]">{group.title}</h2>
                <div className="mt-6">
                  {group.rows.map(([service, price]) => (
                    <div className="flex items-center justify-between gap-4 border-t border-[#2a1710]/10 py-3 text-sm" key={service}>
                      <span className="text-[#665c57]">{service}</span>
                      <strong className="font-semibold text-[#8b591d]">{price}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-xs leading-6 text-[#7b706a]">Pricing is a starting guide and may change. Contact the boutique for a detailed garment-specific quote.</p>
        </div>
      </section>

      <PageCta eyebrow="A better fit" title="Bring us the garment. Leave with renewed confidence." />
    </>
  )
}
