import { services } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function ServicesSection() {
  return (
    <section className="section-screen bg-[#f7f4ef]" id="services">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col items-center">
          <SectionHeading
            description="From the first pin to the final press, our team approaches every garment with precision and respect for the person wearing it."
            eyebrow="What we do"
            title="Tailoring services, shaped around you."
          />
        </div>

        <div className="responsive-card-row mt-12 grid gap-5 lg:grid-cols-4">
          {services.map((service, index) => (
            <article className="service-card group" data-aos="fade-up" data-aos-delay={index * 80} key={service.title}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img alt={`${service.title} at Saad's Tailors`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" src={service.image} />
                <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center bg-[#fffdf9] text-[0.62rem] font-bold tracking-wider text-[#704515]">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[1.65rem] text-[#2a1710]">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#756b66]">{service.description}</p>
                <a className="card-link mt-6" href={service.href}>
                  Discover
                  <Icon name="arrow" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
