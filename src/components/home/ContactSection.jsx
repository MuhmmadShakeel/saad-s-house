import { contactDetails } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

const contactCards = [
  { label: 'Call the boutique', value: contactDetails.phoneDisplay, href: contactDetails.phoneHref, icon: 'phone' },
  { label: 'Email our team', value: contactDetails.email, href: contactDetails.emailHref, icon: 'mail' },
  { label: 'Find us in Houston', value: contactDetails.address, href: contactDetails.mapHref, icon: 'pin', external: true },
]

export default function ContactSection() {
  return (
    <section className="section-screen bg-[#fffdf9]" id="contact">
      <div className="mx-auto grid w-full max-w-[1440px] items-stretch gap-0 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div className="contact-panel" data-aos="fade-right">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d9aa64]">
              <span className="h-px w-8 bg-current" />
              Visit Saad’s
            </div>
            <h2 className="font-display text-5xl leading-[0.98] text-white sm:text-6xl">Your next great fit starts here.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/64">
              Visit our boutique in Houston’s Galleria area or contact our team to plan your fitting, alteration, wedding service, or mobile appointment.
            </p>
          </div>
          <div className="mt-12 space-y-3">
            {contactCards.map((item) => (
              <a
                className="contact-row"
                href={item.href}
                key={item.label}
                rel={item.external ? 'noreferrer' : undefined}
                target={item.external ? '_blank' : undefined}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-[#d7a75f]/35 text-[#d7a75f]">
                  <Icon name={item.icon} size={18} />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/42">{item.label}</span>
                  <span className="mt-1 block text-sm text-white/84">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="map-panel" data-aos="fade-left">
          <div className="map-grid" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-[#4a2118] text-[#e3b66f] shadow-[0_20px_45px_rgba(74,33,24,0.25)]">
              <Icon name="pin" size={31} strokeWidth={1.4} />
            </div>
            <p className="mt-6 font-display text-3xl text-[#2a1710]">5866 Westheimer Rd.</p>
            <p className="mt-2 text-sm text-[#756b66]">Houston, Texas · Galleria Area</p>
            <a className="button-primary mt-7" href={contactDetails.mapHref} rel="noreferrer" target="_blank">
              Get directions
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
