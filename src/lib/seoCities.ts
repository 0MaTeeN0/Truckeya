import type { SeoPage } from './seoTypes'
import { commonFaqs, fleetLines } from './seoTypes'

type City = {
  slug: string
  city: string
  urdu: string
  intro: string
  routes: string[]
  industries: string
  localNote: string
  faqQ: string
  faqA: string
}

const cities: City[] = [
  {
    slug: 'lahore',
    city: 'Lahore',
    urdu: 'لاہور',
    intro: 'Lahore is the busiest freight hub in Punjab, with goods moving daily between its markets, industrial estates and the rest of the country. Truckeya works as your online truck adda in Lahore, so you can book a Loader Rickshaw, Ravi Pickup, Shehzore, Mazda or a full Container without visiting a physical adda or bargaining with several drivers.',
    routes: ['Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Sialkot', 'Gujranwala'],
    industries: 'Lahore customers book trucks for textile and garment shipments, wholesale market stock, construction material, furniture, household shifting and event equipment. Many small traders use a Shehzore or Mazda for daily market deliveries, while exporters rely on 20ft and 40ft containers heading to Karachi port.',
    localNote: 'You can request pickups from areas such as DHA, Gulberg, Johar Town, Model Town, Bahria Town and the industrial areas around Kot Lakhpat and Sundar. Our team can also send labour for packing and loading.',
    faqQ: 'Can I book a container from Lahore to Karachi?',
    faqA: 'Yes. Truckeya arranges 20ft and 40ft container trucks on the Lahore to Karachi route. Share your cargo weight and pickup point on the quote page and our team will confirm the price and schedule.',
  },
  {
    slug: 'karachi',
    city: 'Karachi',
    urdu: 'کراچی',
    intro: 'Karachi is the main port city of Pakistan and the starting point for most import and export cargo. Truckeya gives you an online truck adda in Karachi where you can book container trucks, trailers, Mazda and Shehzore vehicles for port runs, factory pickups and city deliveries.',
    routes: ['Lahore', 'Islamabad', 'Hyderabad', 'Sukkur', 'Quetta', 'Multan', 'Faisalabad'],
    industries: 'Typical bookings include port to warehouse container moves, textile and garment cargo from SITE and Korangi, food and FMCG distribution, and machinery on flatbed trailers. Reefer trucks are also in demand for seafood, dairy and pharma shipments.',
    localNote: 'You can request pickups from areas such as SITE, Korangi, North Karachi, Port Qasim, Saddar and DHA. For household shifting we can add packing materials and loading labour.',
    faqQ: 'Do you move cargo from Karachi port?',
    faqA: 'Yes. You can book 20ft and 40ft container trucks or a flatbed trailer for port cargo. Tell us the container size and the drop location and we will quote the trip.',
  },
  {
    slug: 'islamabad',
    city: 'Islamabad',
    urdu: 'اسلام آباد',
    intro: 'Islamabad and nearby Rawalpindi form a busy corridor for office moves, household shifting and freight heading north to Peshawar and Gilgit Baltistan or south to Lahore. Truckeya is an online truck adda for Islamabad where you compare truck types and book in a few minutes.',
    routes: ['Lahore', 'Peshawar', 'Rawalpindi', 'Murree', 'Abbottabad', 'Karachi', 'Faisalabad'],
    industries: 'Residents and businesses in Islamabad commonly book Ravi Pickups, Shehzores and Mazda trucks for home shifting, office relocation, furniture delivery and retail stock. Closed body trucks are popular for electronics and other sensitive goods.',
    localNote: 'You can request pickups from sectors such as F-7, F-10, G-11, I-8, DHA and Bahria Town, along with Rawalpindi areas like Saddar and Satellite Town.',
    faqQ: 'Can I hire a truck from Islamabad to Lahore for house shifting?',
    faqA: 'Yes. A Mazda or Full Body truck is a common choice for a family move on this route. Add your item list on the quote page and we will suggest the right size and include packing and labour if you need them.',
  },
  {
    slug: 'quetta',
    city: 'Quetta',
    urdu: 'کوئٹہ',
    intro: 'Quetta connects Balochistan with Karachi, Punjab and the western border routes, and many shipments here are long distance. Truckeya serves Balochistan as part of its nationwide network, so you can book a truck in Quetta online and follow the trip with GPS tracking.',
    routes: ['Karachi', 'Lahore', 'Islamabad', 'Multan', 'Sukkur', 'Hyderabad'],
    industries: 'Common cargo includes fruit and dry fruit, agricultural produce, minerals, construction material and household shifting. Reefer and Full Body trucks help protect fruit and weather sensitive goods on long drives.',
    localNote: 'Long mountain routes need experienced drivers and good planning, so share your cargo details early and we will confirm a realistic schedule.',
    faqQ: 'Do you provide trucks from Quetta to Karachi?',
    faqA: 'Yes. Balochistan is part of our service area. Choose the truck type on the quote page, enter Quetta as pickup and Karachi as drop, and our team will confirm the price and timing.',
  },
  {
    slug: 'peshawar',
    city: 'Peshawar',
    urdu: 'پشاور',
    intro: 'Peshawar is the main trade gateway of Khyber Pakhtunkhwa and a key stop on freight routes to Islamabad, Lahore and Karachi. With Truckeya you can book a truck in Peshawar online, from a small Loader Rickshaw for city deliveries to heavy trucks for long haul cargo.',
    routes: ['Islamabad', 'Rawalpindi', 'Lahore', 'Mardan', 'Abbottabad', 'Karachi', 'Faisalabad'],
    industries: 'Local businesses book trucks for marble and building material, fruit, cloth, general merchandise and household goods. Families also use Ravi Pickups and Shahzore Double Cabin vehicles for house shifting.',
    localNote: 'You can request pickups from areas such as University Town, Hayatabad, Ring Road and Saddar.',
    faqQ: 'Can I book a truck in Peshawar for a same day delivery?',
    faqA: 'For local deliveries a Loader Rickshaw, Ravi Pickup or Shehzore is usually the fastest choice. Send your pickup time and address on WhatsApp or the quote page and we will confirm availability.',
  },
  {
    slug: 'multan',
    city: 'Multan',
    urdu: 'ملتان',
    intro: 'Multan sits at the centre of Pakistan and links Punjab with Sindh and Balochistan, which makes it a natural stop for freight between the north and the south. Truckeya gives you an online truck adda in Multan to book vehicles for city, intercity and long distance cargo.',
    routes: ['Lahore', 'Karachi', 'Faisalabad', 'Bahawalpur', 'Islamabad', 'Sukkur', 'Quetta'],
    industries: 'Agriculture drives most demand here, including mangoes, cotton, grains and fertilizer. Reefer trucks help keep fruit and dairy fresh, while Mazda and Shehzore trucks handle mandi and market deliveries.',
    localNote: 'Mango season brings a rush of bookings, so it is wise to reserve your truck a few days ahead.',
    faqQ: 'Can I book a reefer truck in Multan for fruit?',
    faqA: 'Yes. Reefer trucks with temperature control are available for fruit, dairy, frozen food and pharma. Tell us the product, quantity and destination so we can match the right vehicle.',
  },
  {
    slug: 'faisalabad',
    city: 'Faisalabad',
    urdu: 'فیصل آباد',
    intro: 'Faisalabad is the textile capital of Pakistan and a major source of garments, fabric and industrial goods. Truckeya works as an online truck adda in Faisalabad so factories, traders and families can book the right truck without calling around.',
    routes: ['Lahore', 'Karachi', 'Islamabad', 'Multan', 'Sialkot', 'Gujranwala', 'Sargodha'],
    industries: 'Most bookings involve fabric rolls, garments, yarn, machinery parts and wholesale cloth. Closed body trucks protect textile cargo from dust and rain, while containers suit export shipments heading to Karachi.',
    localNote: 'For factory pickups, share your loading timings and any gate or dock restrictions so the driver arrives prepared.',
    faqQ: 'Which truck is best for textile cargo from Faisalabad?',
    faqA: 'A Full Body or Mazda closed truck is the usual choice because it protects fabric and garments from weather. For export volume a 20ft or 40ft container is better. Share your cargo size and we will recommend one.',
  },
  ]

export const cityPages: SeoPage[] = cities.map((c) => ({
  slug: 'truck-adda-' + c.slug,
  group: 'city',
  navLabel: c.city,
  title: 'Truck Adda ' + c.city + ' | Book Trucks Online | Truckeya',
  description: 'Book a truck in ' + c.city + ' online. Shehzore, Mazda, Container and Reefer trucks with instant quotes, packing, loading and GPS tracking from Truckeya, your online truck adda.',
  eyebrow: 'TRUCK ADDA ' + c.city.toUpperCase(),
  h1: 'Truck Adda ' + c.city + ': Book a Truck Online',
  intro: c.intro,
  sections: [
    { heading: 'Why book your truck online in ' + c.city, body: [c.industries, c.localNote] },
    {
      heading: 'Popular routes from ' + c.city,
      body: ['Truckeya moves cargo from ' + c.city + ' to ' + c.routes.join(', ') + ' and every other major city in Pakistan. Tell us your pickup and drop location and we will quote the trip with the right truck for your cargo.'],
    },
    {
      heading: 'How booking works',
      body: ['Open the quote page and enter your pickup and drop locations. Choose the truck type and describe your cargo. Receive your price and confirm the booking. Then follow your trip with GPS tracking and WhatsApp updates until delivery.'],
    },
    {
      heading: 'Truck booking in Roman Urdu and Urdu',
      body: [c.city + ' mein truck book karna ab asan hai. Truckeya par Shehzore, Mazda, Container, Ravi Pickup ya Loader Rickshaw online book karein. Ghar ki shifting, factory ka saman ya dukan ka maal, har tarah ke goods transport ke liye hum madad karte hain.', c.urdu + ' میں ٹرک بک کرنے کے لیے ٹرکیا سے رابطہ کریں۔ شہزور، مزدا، کنٹینر اور ریفر ٹرک دستیاب ہیں۔'],
    },
    ],
  checklistHeading: 'Trucks you can book in ' + c.city,
  checklist: fleetLines(),
  faqs: [...commonFaqs(c.city), { q: c.faqQ, a: c.faqA }],
}))
