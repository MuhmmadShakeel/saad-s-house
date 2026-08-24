import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon.jsx'

export default function NotFoundPage() {
  return (
    <section className="page-cta section-screen">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center" data-aos="fade-up">
        <p className="font-display text-8xl text-[#e0b36d]">404</p>
        <h1 className="mt-4 font-display text-5xl text-white">This page needs an adjustment.</h1>
        <p className="mt-6 text-sm leading-7 text-white/65">The page you requested could not be found.</p>
        <Link className="button-gold mt-8" to="/">Return home <Icon name="arrow" size={17} /></Link>
      </div>
    </section>
  )
}
