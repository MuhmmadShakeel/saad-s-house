import { Outlet } from 'react-router-dom'
import { useAos } from '../../hooks/useAos.js'
import ScrollToTop from '../common/ScrollToTop.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default function SiteLayout() {
  useAos()

  return (
    <div className="min-h-screen bg-[#fffdf9]">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
