import servicesHero from '../assets/media/background-11-9eccdb354e.jpg'
import customHero from '../assets/media/service-2-1-2048x2048-68976a4079.webp'
import alterationsHero from '../assets/media/service-2-1-11e36d769e.webp'
import galleryHero from '../assets/media/8f885a6c-c843-430a-8e9e-8cc60452ad0f-32ab00edd3.jpg'
import aboutHero from '../assets/media/background-3-955cfe04c9.jpg'
import newsHero from '../assets/media/classic-suit-colors-43982ade4c.jpg'
import contactHero from '../assets/media/background-16-effe8cd150.jpg'
import threadsImage from '../assets/media/threads-f3a71cc734.webp'
import patternImage from '../assets/media/background-10-1-65f3c1dd3a.webp'
import craftsmanshipImage from '../assets/media/tailor1-8bead4444a.webp'
import founderImage from '../assets/media/saad-r1-af95c9db61.jpg'
import articleInspiration from '../assets/media/suit-custom-222-740x416-8a01543e5f.jpg'
import articleColors from '../assets/media/classic-suit-colors-43982ade4c.jpg'
import articleDetails from '../assets/media/background-17-1-0232e4ff0b.webp'
import articleFabric from '../assets/media/threads-f3a71cc734.webp'

import gallery01 from '../assets/media/8f885a6c-c843-430a-8e9e-8cc60452ad0f-32ab00edd3.jpg'
import gallery02 from '../assets/media/208a32f3-eede-47d3-9b5e-8a96ccaddff3-1eb85f20bc.jpg'
import gallery03 from '../assets/media/d8e87bcb-2195-4381-bd25-6a7a91b72d00-6cbfc70bac.jpg'
import gallery04 from '../assets/media/c85440bc-a4d4-4d9b-8e76-ee2d0531e388-3611278bad.jpg'
import gallery05 from '../assets/media/589b23e8-0556-4eed-aa9c-5f53712fb6db-c58964b702.jpg'
import gallery06 from '../assets/media/87f8f525-19f7-484e-a98d-41021714e2c1-9704921e95.jpg'
import gallery07 from '../assets/media/e569dfba-ec7b-4ca7-b072-08e2bd36db1c-8694f07e2c.jpg'
import gallery08 from '../assets/media/2a985fef-61d7-44ef-9279-764b4b844a62-57e7a1cbe4.jpg'
import gallery09 from '../assets/media/90f70b89-cc80-4352-a48c-ad9ba558e5ce-80fc9ec13d.jpg'
import gallery10 from '../assets/media/006cd6d9-6100-4726-a03e-e7c02d96bfd3-e4ac4cf7c2.jpg'
import gallery11 from '../assets/media/72e44128-561e-4080-8467-263d41ea0186-8c9dfdb57b.jpg'
import gallery12 from '../assets/media/7fe1f1c0-8107-437d-be9a-c9831a1c662d-4fbca75bdc.jpg'

export const pageHeroes = {
  services: {
    eyebrow: 'Full-service tailoring',
    title: 'Services shaped around the way you live.',
    description: 'More than fifty years of expert alterations, custom clothing, wedding tailoring, and personal service in Houston.',
    image: servicesHero,
    imagePosition: 'center',
  },
  custom: {
    eyebrow: 'Custom & bespoke suits',
    title: 'Made to measure begins here.',
    description: 'A collaborative, one-to-one experience that turns exceptional cloth into a garment made entirely for you.',
    image: customHero,
    imagePosition: 'center 30%',
  },
  alterations: {
    eyebrow: 'Precision alterations',
    title: 'The right adjustment changes everything.',
    description: 'Expert alterations and garment reconstruction for men, women, and children in Houston’s Galleria area.',
    image: alterationsHero,
    imagePosition: 'center',
  },
  gallery: {
    eyebrow: 'Saad’s gallery',
    title: 'Bring your personal style to life.',
    description: 'Explore fabrics, cuts, details, and finished garments created through a truly personalized tailoring experience.',
    image: galleryHero,
    imagePosition: 'center 25%',
  },
  about: {
    eyebrow: 'A Houston tailoring legacy',
    title: 'One sewing machine. A lifetime of craft.',
    description: 'The story of Saad Shaar and the family-owned boutique he began building in Houston in 1971.',
    image: aboutHero,
    imagePosition: 'center',
  },
  news: {
    eyebrow: 'The gentleman’s journal',
    title: 'Ideas for a sharper, more personal wardrobe.',
    description: 'Practical guidance on custom suits, timeless color, considered details, and finding a style that feels like your own.',
    image: newsHero,
    imagePosition: 'center',
  },
  contact: {
    eyebrow: 'Visit the boutique',
    title: 'Let’s begin with a conversation.',
    description: 'Plan a fitting, request an alteration, or speak with our Houston team about your next custom garment.',
    image: contactHero,
    imagePosition: 'center',
  },
}

export const serviceBenefits = [
  { number: '01', title: 'One-to-one consultation', description: 'A welcoming, collaborative process with clear guidance and transparent pricing.' },
  { number: '02', title: 'Flexible scheduling', description: 'Book online or by phone, visit the boutique, or arrange a mobile appointment.' },
  { number: '03', title: 'Experienced hands', description: 'More than five decades of tailoring knowledge applied to every garment.' },
  { number: '04', title: 'Rush service available', description: 'Same-day and next-day express alterations are available for urgent needs.' },
]

export const customOptions = [
  'Thousands of premium fabrics', 'Wool, cashmere, and wool-silk blends', 'Super 200s lightweight wool',
  'Personal lapel and button choices', 'Custom linings, collars, and cuffs', 'Home, hotel, or office appointments',
]

export const customJourney = [
  { step: '01', title: 'Consult', text: 'Meet at our boutique, your home, office, or hotel to discuss the garment and how you want it to feel.' },
  { step: '02', title: 'Select', text: 'Choose your cloth, color, cut, lapel, buttons, lining, collar, cuffs, and finishing details.' },
  { step: '03', title: 'Measure', text: 'Our tailors record the proportions and posture details that create a truly personal fit.' },
  { step: '04', title: 'Refine', text: 'From first fitting to final adjustment, we shape and finish the garment around you.' },
]

export const alterationGroups = [
  {
    title: 'Men’s tailoring',
    items: ['Suit and tuxedo resizing', 'Coat sizing and modernization', 'Dress-shirt resizing', 'Trouser tapering and hemming'],
  },
  {
    title: 'Women’s tailoring',
    items: ['Dress resizing and restyling', 'Suit and blazer resizing', 'Bridal and bridesmaid alterations', 'Skirt and gown adjustments'],
  },
  {
    title: 'Specialty repairs',
    items: ['Leather-jacket lining repair', 'Original-hem denim alterations', 'Zipper and button replacement', 'Garment reconstruction'],
  },
]

export const pricingGroups = [
  {
    title: 'Suit & tuxedo',
    rows: [['Shorten sleeves', '$45'], ['Sides in or out', '$50'], ['Lower or shorten collar', '$55'], ['Reduce chest', '$75'], ['Shorten coat', '$55'], ['Resize jacket', '$275']],
  },
  {
    title: 'Slacks & jeans',
    rows: [['Waist/seat in or out', '$30'], ['Waist, seat & crotch', '$35'], ['Plain or cuff hem', '$20'], ['Original jean hem', '$25'], ['Taper thigh/leg with hem', '$40'], ['Recut trouser', '$175']],
  },
  {
    title: 'Shirts & blouses',
    rows: [['Shorten sleeves', '$35'], ['Sides in or out', '$35'], ['Taper bicep/elbow', '$35'], ['Raise armhole', '$55'], ['Move buttons', '$5 each'], ['Sleeve buttonholes', '$10 each']],
  },
  {
    title: 'Skirts & vests',
    rows: [['Skirt waist/seat', '$30'], ['Skirt hem', '$40'], ['Lower waistband', '$80'], ['Vest sides in or out', '$30'], ['Vest collar adjustment', '$50'], ['Vest length adjustment', '$50']],
  },
]

export const galleryImages = [
  gallery01, gallery02, gallery03, gallery04, gallery05, gallery06,
  gallery07, gallery08, gallery09, gallery10, gallery11, gallery12,
]

export const aboutAssets = { founderImage, craftsmanshipImage, patternImage }

export const newsArticles = [
  {
    title: 'The Top 5 Colors for Your Custom Suit',
    date: 'May 3, 2018',
    category: 'Custom Tailoring',
    excerpt: 'Choosing the right suit color can elevate your style for a wedding, business meeting, or relaxed occasion.',
    image: articleColors,
  },
  {
    title: 'Where to Find Inspiration for Your Next Custom Suit',
    date: 'May 3, 2018',
    category: 'Gentleman',
    excerpt: 'Discover a personal direction through fabric, silhouette, occasion, and the details already present in your wardrobe.',
    image: articleInspiration,
  },
  {
    title: 'How to Wear a Black Suit Properly',
    date: 'March 9, 2018',
    category: 'Details',
    excerpt: 'A considered guide to proportion, shirt choice, accessories, and making black tailoring feel intentional.',
    image: articleDetails,
  },
  {
    title: '5 Things to Know When Purchasing a Custom Suit',
    date: 'March 1, 2018',
    category: 'Fresh Look',
    excerpt: 'What to understand about cloth, construction, fit, fittings, and the value of a relationship with your tailor.',
    image: articleFabric,
  },
]

export const supportingImages = { threadsImage, patternImage, craftsmanshipImage }
