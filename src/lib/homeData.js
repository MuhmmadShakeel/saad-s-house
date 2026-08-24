import heroSuit from '../assets/media/background-3-955cfe04c9.jpg'
import heroCraft from '../assets/media/background-14-7038e7a131.jpg'
import heroStyle from '../assets/media/background-16-effe8cd150.jpg'
import tailorCollage from '../assets/media/tailor1-8bead4444a.webp'
import alterationImage from '../assets/media/service-1-1-1024x1024-68c53982c1.jpg'
import customSuitImage from '../assets/media/service-2-1-1024x1024-16afa0919c.webp'
import mobileImage from '../assets/media/service-4-1-1024x1024-6df31332a9.jpg'
import weddingImage from '../assets/media/service-3-1-1024x1024-2f09fe273c.jpg'
import patternImage from '../assets/media/background-10-1-65f3c1dd3a.webp'
import mannequinImage from '../assets/media/background-17-1-0232e4ff0b.webp'
import mediaImage from '../assets/media/saad-740x416-918800620c.png'

export const contactDetails = {
  phoneDisplay: '(713) 785-2212',
  phoneHref: 'tel:+17137852212',
  email: 'info@saadtailors.com',
  emailHref: 'mailto:info@saadtailors.com',
  address: '5866 Westheimer Rd., Houston, TX',
  mapHref: 'https://maps.google.com/?q=5866+Westheimer+Rd+Houston+TX',
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Custom Suits', to: '/custom-suits' },
  { label: 'Alterations', to: '/alterations' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const heroSlides = [
  {
    eyebrow: 'Houston’s master tailors since 1971',
    title: 'A better fit begins with a better conversation.',
    description: 'Custom tailoring and precise alterations, shaped around your lifestyle and finished by experienced hands.',
    image: heroSuit,
    imagePosition: 'center 35%',
  },
  {
    eyebrow: 'Made for the way you move',
    title: 'Your measurements. Your cloth. Your signature.',
    description: 'Explore custom and bespoke suits crafted from exceptional fabrics with every detail chosen by you.',
    image: heroCraft,
    imagePosition: 'center',
  },
  {
    eyebrow: 'Craftsmanship without compromise',
    title: 'Precision you can see. Confidence you can feel.',
    description: 'From first fitting to final stitch, every garment receives the care required for a truly personal fit.',
    image: heroStyle,
    imagePosition: 'center',
  },
]

export const services = [
  {
    title: 'Alterations',
    description: 'Thoughtful adjustments that help every garment complement your lifestyle.',
    image: alterationImage,
    href: '#contact',
  },
  {
    title: 'Custom Suits',
    description: 'A fully personalized suit, from fabric and fit to the smallest finishing detail.',
    image: customSuitImage,
    href: '#craftsmanship',
  },
  {
    title: 'Mobile Services',
    description: 'An alteration specialist can meet you at home, at the office, or at your hotel.',
    image: mobileImage,
    href: '#contact',
  },
  {
    title: 'Weddings',
    description: 'Sharp suits, tuxedos, dresses, and alterations for an unforgettable day.',
    image: weddingImage,
    href: '#contact',
  },
]

export const craftsmanship = {
  image: tailorCollage,
  accentImage: patternImage,
}

export const storyFeatures = [
  {
    number: '01',
    title: 'Personal by design',
    description: 'Your preferences, proportions, and daily routine guide every decision we make.',
  },
  {
    number: '02',
    title: 'Classic craft, modern eye',
    description: 'Traditional tailoring principles meet a contemporary understanding of style and comfort.',
  },
  {
    number: '03',
    title: 'A fit worth returning to',
    description: 'We keep the focus on accuracy, lasting materials, and service that feels genuinely personal.',
  },
]

export const testimonials = [
  {
    quote: 'I have been going here for over 10 years. The alterations and custom shirts always get me compliments. Highly recommend this place!',
    name: 'Johnathan Humphries',
  },
  {
    quote: 'Saad’s Tailor is one of the best tailors I’ve ever been to. They do an amazing job and always treat you with the best service and care.',
    name: 'Arshad Lasi',
  },
  {
    quote: 'They were very patient going through hundreds of swatches to help me find the right one. The suit fits like butter.',
    name: 'Jose Calderon',
  },
]

export const faqItems = [
  {
    question: 'What tailoring services do you offer?',
    answer: 'We provide custom and bespoke suits, garment alterations, leather and denim work, wedding tailoring, and other precision fitting services.',
  },
  {
    question: 'Do you offer mobile appointments?',
    answer: 'Yes. An alteration specialist can meet you at your home, office, or hotel for a more convenient fitting experience.',
  },
  {
    question: 'Do you tailor garments for women and children?',
    answer: 'Yes. Our tailoring and alteration services are available for men, women, and children.',
  },
  {
    question: 'Where is Saad’s Tailors located?',
    answer: 'Our boutique is at 5866 Westheimer Road in Houston’s Galleria area.',
  },
]

export const visualAssets = {
  mannequinImage,
  mediaImage,
  patternImage,
}
