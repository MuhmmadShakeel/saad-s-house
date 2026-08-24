import { useEffect, useState } from 'react'
import Icon from '../components/common/Icon.jsx'
import InteriorHero from '../components/common/InteriorHero.jsx'
import PageCta from '../components/common/PageCta.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { galleryImages, pageHeroes } from '../lib/siteData.js'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedImage])

  return (
    <>
      <InteriorHero {...pageHeroes.gallery} />

      <section className="section-screen bg-[#fffdf9] py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="flex flex-col items-center">
            <SectionHeading eyebrow="Fabric, cut & character" title="A gallery of personal style." description="Luxury fabrics are our specialty. Turning them into something truly individual is what we do." />
          </div>

          <div className="gallery-grid mt-14">
            {galleryImages.map((image, index) => (
              <button
                aria-label={`Open gallery image ${index + 1}`}
                className="gallery-item group"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 55}
                key={image}
                onClick={() => setSelectedImage(image)}
                type="button"
              >
                <img alt={`Saad's Tailors custom garment example ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" src={image} />
                <span className="gallery-overlay"><Icon name="plus" size={24} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <PageCta eyebrow="Make it personal" title="See something that inspires your next garment?" description="Bring your references, explore our fabrics, and shape the details together with one of our tailors." />

      {selectedImage && (
        <div aria-label="Gallery image preview" aria-modal="true" className="gallery-modal" role="dialog">
          <button aria-label="Close gallery preview" className="gallery-close" onClick={() => setSelectedImage(null)} type="button"><Icon name="close" size={22} /></button>
          <img alt="Selected Saad's Tailors garment" className="max-h-[88svh] max-w-[90vw] object-contain" src={selectedImage} />
        </div>
      )}
    </>
  )
}
