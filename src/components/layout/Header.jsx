import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import TopBar from './TopBar.jsx'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_30px_rgba(35,20,12,0.06)]">
      <TopBar />
      <Navbar />
      <Link className="promo-bar" to="/contact">
        <strong>65% off Italian designer suits</strong>
        <span>In-store only</span>
      </Link>
    </header>
  )
}
