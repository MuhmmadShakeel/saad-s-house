import { useEffect } from 'react'
import ContactSection from '../components/home/ContactSection.jsx'
import CraftsmanshipSection from '../components/home/CraftsmanshipSection.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import LegacySection from '../components/home/LegacySection.jsx'
import MediaSection from '../components/home/MediaSection.jsx'
import ServicesSection from '../components/home/ServicesSection.jsx'
import StoryFeaturesSection from '../components/home/StoryFeaturesSection.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
export default function HomePage() {
  useEffect(() => {
    document.title = "Saad's Tailors | Custom Tailoring in Houston"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', "Custom tailoring, bespoke suits, expert alterations, wedding tailoring, and mobile services from Saad's Tailors in Houston, Texas.")
  }, [])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CraftsmanshipSection />
      <LegacySection />
      <StoryFeaturesSection />
      <MediaSection />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
    </>
  )
}
