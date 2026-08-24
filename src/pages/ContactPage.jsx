import Icon from '../components/common/Icon.jsx'
import InteriorHero from '../components/common/InteriorHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { contactDetails } from '../lib/homeData.js'
import { pageHeroes } from '../lib/siteData.js'

export default function ContactPage() {
  return (
    <>
      <InteriorHero {...pageHeroes.contact} />
      <section className="section-screen bg-[#fffdf9]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-0 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
          <div className="contact-panel" data-aos="fade-right">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d9aa64]"><span className="h-px w-8 bg-current" />Contact details</div>
              <h2 className="font-display text-5xl leading-[0.98] text-white">Saad’s Tailors Boutique</h2>
              <p className="mt-6 text-sm leading-7 text-white/64">Conveniently located in Houston’s Galleria area near the 610 West Loop and Westchase District.</p>
            </div>
            <div className="mt-10 space-y-4">
              <a className="contact-row" href={contactDetails.mapHref} rel="noreferrer" target="_blank"><Icon name="pin" size={20} /><span>{contactDetails.address} 77057</span></a>
              <a className="contact-row" href={contactDetails.phoneHref}><Icon name="phone" size={20} /><span>{contactDetails.phoneDisplay}</span></a>
              <a className="contact-row" href={contactDetails.emailHref}><Icon name="mail" size={20} /><span>{contactDetails.email}</span></a>
            </div>
            <div className="mt-10 border-t border-white/10 pt-7 text-sm leading-7 text-white/70">
              <p><strong className="text-white">Monday–Friday:</strong> 10:00am–6:00pm</p>
              <p><strong className="text-white">Saturday:</strong> 10:00am–4:00pm</p>
            </div>
          </div>

          <div className="bg-[#f4eee6] p-7 sm:p-10 lg:p-16" data-aos="fade-left">
            <SectionHeading align="left" eyebrow="Send a message" title="Tell us what you have in mind." description="Share a few details and continue in your preferred email application. Our team will help you plan the next step." />
            <form action={contactDetails.emailHref} className="mt-8 grid gap-5" encType="text/plain" method="post">
              <label className="form-field"><span>Name</span><input name="name" required type="text" /></label>
              <label className="form-field"><span>Email</span><input name="email" required type="email" /></label>
              <label className="form-field"><span>Phone</span><input name="phone" type="tel" /></label>
              <label className="form-field"><span>How can we help?</span><textarea name="message" required rows="5" /></label>
              <button className="button-primary w-fit" type="submit">Continue by email <Icon name="arrow" size={17} /></button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-screen bg-[#f7f4ef]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="map-panel min-h-[70svh]" data-aos="zoom-out">
            <div className="map-grid" />
            <div className="relative z-10 flex h-full min-h-[70svh] flex-col items-center justify-center text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#4a2118] text-[#e3b66f] shadow-2xl"><Icon name="pin" size={31} /></div>
              <h2 className="mt-6 font-display text-4xl text-[#2a1710]">Visit us on Westheimer.</h2>
              <p className="mt-3 text-sm text-[#756b66]">5866 Westheimer Rd., Houston, TX 77057</p>
              <a className="button-primary mt-7" href={contactDetails.mapHref} rel="noreferrer" target="_blank">Open directions <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
