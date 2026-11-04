import type { Faq, SeoPage } from './seoTypes'
import { PHONE_DISPLAY } from './seoTypes'
import { cityPages } from './seoCities'
import { truckPages } from './seoTrucks'
import { servicePages } from './seoServices'

export const seoPages: SeoPage[] = [...servicePages, ...cityPages, ...truckPages]

export const homeFaqs: Faq[] = [
  {
    q: 'What is Truckeya?',
    a: 'Truckeya is an online truck booking platform in Pakistan, often called a digital truck adda. You can book trucks, get instant quotes, arrange packing and loading, and track your cargo with GPS.',
  },
  {
    q: 'How do I book a truck in Pakistan with Truckeya?',
    a: 'Open the quote page, enter your pickup and drop locations, choose a truck type and share your cargo details. Our team replies with a price, or you can message us on WhatsApp at ' + PHONE_DISPLAY + '.',
  },
  {
    q: 'Which cities does Truckeya serve?',
    a: 'Truckeya serves all of Pakistan, including Lahore, Karachi, Islamabad, Rawalpindi, Quetta, Peshawar, Multan and Faisalabad, across Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan.',
  },
  {
    q: 'What truck types can I book?',
    a: 'You can book 12 vehicle types including Loader Rickshaw, Ravi Pickup, Shehzore, Mazda, Shahzore Double Cabin, Bedford and Isuzu trucks, Half Body, Full Body, 20ft and 40ft Container, Trailer and Flatbed, and Reefer trucks.',
  },
  {
    q: 'How much does it cost to rent a truck?',
    a: 'Prices start from PKR 1,500 for a Loader Rickshaw and PKR 4,000 for a Shehzore. The final price depends on distance, truck type and cargo, and it is confirmed in your free quote.',
  },
  ]
