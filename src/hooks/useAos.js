import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function useAos() {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 760,
      easing: 'ease-out-cubic',
      once: true,
      offset: 72,
      anchorPlacement: 'top-bottom',
      debounceDelay: 50,
      throttleDelay: 90,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })

    const refresh = window.setTimeout(() => AOS.refresh(), 120)
    return () => window.clearTimeout(refresh)
  }, [])

  useEffect(() => {
    const refresh = window.setTimeout(() => AOS.refreshHard(), 80)
    return () => window.clearTimeout(refresh)
  }, [pathname])
}
