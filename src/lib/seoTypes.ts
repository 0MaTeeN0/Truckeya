export const SITE_URL = 'https://www.truckeya.com'
export const PHONE_DISPLAY = '03021223388'
export const WHATSAPP_URL = 'https://wa.me/923021223388'
export const INSTAGRAM_URL = 'https://www.instagram.com/truckeya.pk/'
export const FACEBOOK_URL = 'https://www.facebook.com/share/1JzzGVXDD1/'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/truckeya/'

export type Faq = { q: string; a: string }
export type Section = { heading: string; body: string[] }
export type SeoPage = {
  slug: string
  group: 'city' | 'truck' | 'service'
  navLabel: string
  title: string
  description: string
  eyebrow: string
  h1: string
  intro: string
  sections: Section[]
  checklistHeading: string
  checklist: string[]
  faqs: Faq[]
}

export const fleetPrices: { name: string; price: string }[] = [
  { name: 'Loader Rickshaw', price: 'PKR 1,500' },
  { name: 'Ravi Pickup', price: 'PKR 2,500' },
  { name: 'Shehzore (Mini Truck)', price: 'PKR 4,000' },
  { name: 'Mazda (Medium Truck)', price: 'PKR 6,000' },
  { name: 'Shahzore Double Cabin', price: 'PKR 7,000' },
  { name: 'Truck (Bedford / Isuzu)', price: 'PKR 10,000' },
  { name: 'Half Body Truck', price: 'PKR 12,000' },
  { name: 'Full Body Truck', price: 'PKR 15,000' },
  { name: 'Container (20ft)', price: 'PKR 20,000' },
  { name: 'Trailer / Flatbed', price: 'PKR 25,000' },
  { name: 'Container (40ft)', price: 'PKR 30,000' },
  { name: 'Reefer (Refrigerated)', price: 'PKR 35,000' },
  ]

export const fleetLines = (): string[] =>
  fleetPrices.map((f) => f.name + ': starting from ' + f.price)

export const commonFaqs = (place: string): Faq[] => [
  {
    q: 'How can I book a truck in ' + place + '?',
    a: 'Open the quote page on Truckeya, enter your pickup and drop locations, choose the truck type and share your cargo details. Our team replies with a price, often within hours. You can also message us on WhatsApp at ' + PHONE_DISPLAY + '.',
  },
  {
    q: 'What is the starting price of a truck booking in ' + place + '?',
    a: 'The price depends on the truck type, distance and cargo. On Truckeya a Loader Rickshaw starts from PKR 1,500, a Ravi Pickup from PKR 2,500, a Shehzore from PKR 4,000 and a Mazda from PKR 6,000. Send your route for an exact quote.',
  },
  {
    q: 'Do you offer packing, loading and unloading in ' + place + '?',
    a: 'Yes. Truckeya can arrange packing with bubble wrap, wooden crating and labeling, plus skilled labour for loading and unloading. Mention it in your quote request so it is included in the price.',
  },
  {
    q: 'Can I track my cargo after booking?',
    a: 'Yes. Trips are supported by GPS tracking and WhatsApp updates, and you can also use the Track Shipment page on the website.',
  },
  ]
