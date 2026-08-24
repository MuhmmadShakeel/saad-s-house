import Icon from '../common/Icon.jsx'
import { contactDetails } from '../../lib/homeData.js'

export default function TopBar() {
  return (
    <div className="hidden bg-[#1b100c] text-[#eadbc9] md:block">
      <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-6 text-[0.68rem] tracking-[0.08em]">
          <a className="topbar-link" href={contactDetails.phoneHref}>
            <Icon name="phone" size={13} />
            {contactDetails.phoneDisplay}
          </a>
          <a className="topbar-link" href={contactDetails.emailHref}>
            <Icon name="mail" size={13} />
            {contactDetails.email}
          </a>
        </div>
        <a className="topbar-link text-[#d7ad6d]" href={contactDetails.mapHref} rel="noreferrer" target="_blank">
          <Icon name="pin" size={13} />
          Houston’s Galleria Area
        </a>
      </div>
    </div>
  )
}
