import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/media/saads-main-cef2b5c74a.png'
import { navigation } from '../../lib/homeData.js'
import Icon from '../common/Icon.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav aria-label="Primary navigation" className="border-b border-[#2a1710]/8 bg-[#fffdf9]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <Link aria-label="Saad's Tailors home" className="shrink-0" to="/">
            <img alt="Saad's Tailors — Houston's best tailor since 1971" className="h-auto w-[154px] sm:w-[178px]" src={logo} />
          </Link>

          <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
            {navigation.map((item) => (
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end={item.to === '/'} key={item.label} to={item.to}>{item.label}</NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link className="button-primary hidden sm:inline-flex" to="/contact">
              Book an appointment
              <Icon name="arrow" size={16} />
            </Link>
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid h-11 w-11 place-items-center border border-[#2a1710]/15 text-[#2a1710] xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu xl:hidden ${menuOpen ? 'is-open' : ''}`}>
        <div className="flex h-full flex-col justify-between px-6 pb-8 pt-7">
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <NavLink
                className="mobile-nav-link"
                key={item.label}
                onClick={closeMenu}
                to={item.to}
              >
                <span className="text-xs text-[#b67b2c]">0{index + 1}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link className="button-gold w-full justify-center" onClick={closeMenu} to="/contact">
            Book an appointment
            <Icon name="arrow" size={17} />
          </Link>
        </div>
      </div>
    </>
  )
}
