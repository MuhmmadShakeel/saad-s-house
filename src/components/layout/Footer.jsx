import { Link } from 'react-router-dom'
import logo from '../../assets/media/saads-main-cef2b5c74a.png'
import { contactDetails, navigation } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

export default function Footer() {
  return (
    <footer className="bg-[#15100e] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
          <div data-aos="fade-up">
            <div className="inline-flex bg-white px-3 py-2">
              <img alt="Saad's Tailors" className="w-44" src={logo} />
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              Custom tailoring and expert alterations in Houston, shaped by classic craft, modern style, and personal service since 1971.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <p className="footer-title">Explore</p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <Link className="footer-link" key={item.label} to={item.to}>{item.label}</Link>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="160">
            <p className="footer-title">Visit the boutique</p>
            <div className="mt-6 space-y-4 text-sm text-white/68">
              <a className="footer-contact" href={contactDetails.mapHref} rel="noreferrer" target="_blank">
                <Icon name="pin" size={17} />
                {contactDetails.address}
              </a>
              <a className="footer-contact" href={contactDetails.phoneHref}>
                <Icon name="phone" size={17} />
                {contactDetails.phoneDisplay}
              </a>
              <a className="footer-contact" href={contactDetails.emailHref}>
                <Icon name="mail" size={17} />
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Saad’s Tailors. All rights reserved.</p>
          <p>Houston’s tailoring tradition since 1971.</p>
        </div>
      </div>
    </footer>
  )
}
