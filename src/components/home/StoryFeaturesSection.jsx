import { storyFeatures } from '../../lib/homeData.js'
import SectionHeading from '../common/SectionHeading.jsx'

export default function StoryFeaturesSection() {
  return (
    <section className="section-screen bg-[#fffdf9]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col items-center">
          <SectionHeading
            description="Great tailoring is not only about the garment. It is about listening carefully, making informed decisions, and following every detail through."
            eyebrow="Why Saad’s"
            title="The difference is in the details."
          />
        </div>

        <div className="responsive-feature-row mt-14 grid gap-5 lg:grid-cols-3">
          {storyFeatures.map((feature, index) => (
            <article className="feature-card" data-aos="fade-up" data-aos-delay={index * 100} key={feature.title}>
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-[#b57a2e]">{feature.number}</span>
                <span className="h-px w-16 bg-[#b57a2e]/35" />
              </div>
              <h3 className="mt-12 font-display text-3xl leading-tight text-[#2a1710]">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#756b66]">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl border-t border-[#2a1710]/10 pt-8 text-center" data-aos="fade-up">
          <p className="font-display text-2xl italic text-[#4a2d22] sm:text-3xl">
            “The best fit is the one that lets you forget about the garment and simply feel like yourself.”
          </p>
        </div>
      </div>
    </section>
  )
}
