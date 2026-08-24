import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon.jsx'
import InteriorHero from '../components/common/InteriorHero.jsx'
import PageCta from '../components/common/PageCta.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { services } from '../lib/homeData.js'
import { pageHeroes, serviceBenefits, supportingImages } from '../lib/siteData.js'

const serviceRoutes = {
  Alterations: '/alterations',
  'Custom Suits': '/custom-suits',
  'Mobile Services': '/contact',
  Weddings: '/contact',
}

export default function ServicesPage() {
  return (
    <>
      <InteriorHero {...pageHeroes.services} />

      <section className="section-screen bg-[#fffdf9]">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
          <div data-aos="fade-right">
            <SectionHeading
              align="left"
              eyebrow="Houston’s full-service tailor"
              title="Tailored just for you."
              description="Why settle for generic alterations when you can enjoy a personal, professional experience built around your garment, schedule, and goals?"
            />
            <p className="mt-6 text-sm leading-7 text-[#6e625d] sm:text-base">
              Our master tailors provide one-to-one consultations, clear communication, and upfront guidance. Whether you are refining a favorite suit or beginning a custom garment, every project receives considered attention.
            </p>
            <Link className="button-primary mt-8" to="/contact">Discuss your garment <Icon name="arrow" size={17} /></Link>
          </div>
          <div className="editorial-image" data-aos="fade-left">
            <img alt="Tailor working on a custom garment" className="h-full w-full object-cover" loading="lazy" src={supportingImages.craftsmanshipImage} />
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#f7f4ef]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-center">
            <SectionHeading eyebrow="Our services" title="One boutique. Every detail considered." />
          </div>
          <div className="responsive-card-row mt-12 grid gap-5 lg:grid-cols-4">
            {services.map((service, index) => (
              <article className="service-card group" data-aos="fade-up" data-aos-delay={index * 75} key={service.title}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" src={service.image} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.62rem] font-bold tracking-[0.2em] text-[#a36d28]">0{index + 1}</span>
                  <h2 className="mt-3 font-display text-3xl text-[#2a1710]">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#756b66]">{service.description}</p>
                  <Link className="card-link mt-6" to={serviceRoutes[service.title]}>Learn more <Icon name="arrow" size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#4a2118] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="Service without compromise" light title="Convenience, clarity, and craft." />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {serviceBenefits.map((item, index) => (
              <article className="min-h-72 bg-[#4a2118] p-7 lg:p-9" data-aos="fade-up" data-aos-delay={index * 70} key={item.title}>
                <span className="font-display text-4xl text-[#dcae67]">{item.number}</span>
                <h2 className="mt-10 font-display text-2xl">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta description="Standard projects typically take 3–6 business days, with same-day and next-day express alterations available when your schedule cannot wait." />
    </>
  )
}
