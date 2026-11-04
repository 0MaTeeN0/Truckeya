import type { SeoPage } from './seoTypes'
import { commonFaqs } from './seoTypes'

type Truck = {
  slug: string
  name: string
  navLabel: string
  price: string
  title: string
  description: string
  h1: string
  intro: string
  details: string[]
  bestFor: string[]
  roman: string
  faqQ: string
  faqA: string
}

const trucks: Truck[] = [
  {
    slug: 'shehzore-for-rent',
    name: 'Shehzore',
    navLabel: 'Shehzore for Rent',
    price: 'PKR 4,000',
    title: 'Shehzore for Rent in Pakistan | Mini Truck Booking | Truckeya',
    description: 'Book a Shehzore mini truck for rent anywhere in Pakistan. Open bed, fuel efficient and ideal for local deliveries and shifting. Starting from PKR 4,000 with Truckeya.',
    h1: 'Shehzore for Rent in Pakistan',
    intro: 'The Shehzore is one of the most popular mini trucks in Pakistan for local deliveries, shop stock and small shifting jobs. Truckeya lets you book a Shehzore online with a clear starting price, a verified driver and live trip updates.',
    details: [
      'A Shehzore has an open bed, which makes loading and unloading quick for boxes, furniture, appliances, building material and market goods. It is fuel efficient, easy to move through city traffic and strong enough for intercity trips when the load is light to medium.',
      'Prices start from PKR 4,000 and change with distance, load and waiting time. Share your pickup, drop and item list on the quote page and we will confirm the final amount before the trip starts.',
      ],
    bestFor: ['Local deliveries for shops and wholesalers', 'Small house or office shifting', 'Furniture and appliance transport', 'Market and mandi stock', 'Light building material'],
    roman: 'Shehzore kiraye par chahiye? Truckeya se online book karein. Shehar ke andar delivery, chota saman shifting aur dukan ka maal laane le jaane ke liye behtareen choice hai.',
    faqQ: 'Is a Shehzore suitable for house shifting?',
    faqA: 'Yes, for small homes, flats and single room moves. For a larger household a Mazda or Full Body truck may fit better. Send your item list and we will suggest the right size.',
  },
  {
    slug: 'mazda-truck-for-rent',
    name: 'Mazda',
    navLabel: 'Mazda Truck for Rent',
    price: 'PKR 6,000',
    title: 'Mazda Truck for Rent in Pakistan | Medium Truck Booking | Truckeya',
    description: 'Rent a Mazda medium truck across Pakistan for house shifting, office moves and city to city cargo. Closed body option, starting from PKR 6,000 with Truckeya.',
    h1: 'Mazda Truck for Rent in Pakistan',
    intro: 'The Mazda is the everyday medium truck for businesses and families who need more space than a Shehzore. Truckeya helps you rent a Mazda online for house shifting, office relocation and city to city cargo with a closed body option for security.',
    details: [
      'A closed body Mazda keeps your goods safe from rain, dust and prying eyes, which is why it is a favourite for household shifting, electronics, packed retail stock and documents. Open body options are also possible for bulky items.',
      'The starting price is PKR 6,000 and depends on distance and load. Add packing and labour in the same booking if you want a full shifting service, and follow the trip with GPS tracking.',
      ],
    bestFor: ['Full house shifting', 'Office relocation', 'City to city cargo', 'Packed retail and wholesale stock', 'Furniture and electronics'],
    roman: 'Mazda truck kiraye par lena ab asan hai. Ghar ki shifting, office ka saman ya shehron ke darmiyan cargo ke liye Truckeya par online booking karein.',
    faqQ: 'Can I get labour and packing with a Mazda booking?',
    faqA: 'Yes. Mention packing, loading and unloading in your quote request and we will include skilled labour and packing material in the price.',
  },
  {
    slug: 'ravi-pickup-for-rent',
    name: 'Ravi Pickup',
    navLabel: 'Ravi Pickup for Rent',
    price: 'PKR 2,500',
    title: 'Ravi Pickup for Rent in Pakistan | Pickup Booking | Truckeya',
    description: 'Book a Ravi Pickup online for household shifting and small business cargo. Easy to maneuver and fast, starting from PKR 2,500 with Truckeya across Pakistan.',
    h1: 'Ravi Pickup for Rent in Pakistan',
    intro: 'The Ravi Pickup is a compact and affordable choice for household shifting and small business cargo. Book it through Truckeya for quick pickups, narrow streets and short to medium trips.',
    details: [
      'Its compact size lets it reach lanes and apartment buildings where bigger trucks cannot go. That makes it a smart option for moving a few rooms of furniture, appliances, shop supplies and online store orders.',
      'Prices start from PKR 2,500. Tell us the pickup time and addresses and we will confirm availability, usually within hours.',
      ],
    bestFor: ['One or two room shifting', 'Small business and online store deliveries', 'Narrow streets and apartments', 'Appliances and furniture', 'Quick same day jobs'],
    roman: 'Ravi Pickup chhote ghar ki shifting aur dukan ke saman ke liye sasti aur tez service hai. Truckeya par online book karein.',
    faqQ: 'Is a Ravi Pickup cheaper than a Shehzore?',
    faqA: 'Usually yes. A Ravi Pickup starts from PKR 2,500 while a Shehzore starts from PKR 4,000, but the Shehzore carries more. Choose based on how much cargo you have.',
  },
  {
    slug: 'loader-rickshaw-booking',
    name: 'Loader Rickshaw',
    navLabel: 'Loader Rickshaw Booking',
    price: 'PKR 1,500',
    title: 'Loader Rickshaw Booking in Pakistan | City Delivery | Truckeya',
    description: 'Book a loader rickshaw online for quick city deliveries and small loads. The cheapest cargo option in Pakistan, starting from PKR 1,500 with Truckeya.',
    h1: 'Loader Rickshaw Booking in Pakistan',
    intro: 'A loader rickshaw is the cheapest and fastest way to move small cargo inside a city. Truckeya lets you book one online in minutes with clear pricing and a trusted driver.',
    details: [
      'Loader rickshaws are best for short city trips, small furniture pieces, boxes, shop deliveries and last mile orders. They can move through traffic and tight lanes that larger vehicles avoid.',
      'The starting price is PKR 1,500. These vehicles are meant for city use, so for intercity trips we will suggest a Ravi Pickup, Shehzore or Mazda.',
      ],
    bestFor: ['Small loads inside the city', 'Last mile and shop deliveries', 'Boxes and small furniture', 'Quick low cost moves', 'Tight lanes and markets'],
    roman: 'Loader rickshaw chhote saman aur shehar ke andar delivery ke liye sab se sasta zariya hai. Truckeya se online book karein.',
    faqQ: 'Can a loader rickshaw go to another city?',
    faqA: 'Loader rickshaws are intended for city use. For intercity cargo we recommend a Ravi Pickup, Shehzore or Mazda, and we will quote the right one for your route.',
  },
  {
    slug: 'container-truck-booking',
    name: 'Container',
    navLabel: 'Container Truck Booking',
    price: 'PKR 20,000',
    title: 'Container Truck Booking in Pakistan | 20ft and 40ft | Truckeya',
    description: 'Book 20ft and 40ft container trucks across Pakistan for port cargo, export shipments and heavy loads. Lockable, secure and GPS tracked, starting from PKR 20,000.',
    h1: 'Container Truck Booking in Pakistan',
    intro: 'For port cargo, export shipments and large volume loads, a container truck is the safest and most efficient option. Truckeya arranges 20ft and 40ft container trucks across Pakistan with GPS tracking.',
    details: [
      'Containers are lockable and weather proof, so they protect machinery, textiles, consumer goods and palletised cargo over long distances. They are the standard choice for the Karachi port to Lahore, Islamabad, Faisalabad and Multan corridors.',
      'A 20ft container truck starts from PKR 20,000 and a 40ft container truck starts from PKR 30,000. Final prices depend on distance, weight and any waiting time at the port or factory.',
      ],
    bestFor: ['Port to warehouse moves', 'Export and import cargo', 'Heavy and bulk shipments', 'Palletised goods', 'Long distance trips with GPS tracking'],
    roman: 'Container truck booking ke liye Truckeya se rabta karein. 20 foot aur 40 foot dono dastiyab hain, port cargo aur export shipment ke liye mehfooz aur lockable.',
    faqQ: 'What is the difference between a 20ft and a 40ft container truck?',
    faqA: 'A 20ft container suits dense and heavy cargo, while a 40ft container offers double the length for bulky and high volume loads. Share your cargo type and weight and we will advise which one saves you money.',
  },
  {
    slug: 'reefer-truck-pakistan',
    name: 'Reefer',
    navLabel: 'Reefer Truck Pakistan',
    price: 'PKR 35,000',
    title: 'Reefer Truck in Pakistan | Refrigerated Truck Booking | Truckeya',
    description: 'Book a refrigerated reefer truck in Pakistan for fruit, dairy, frozen food and pharma. Temperature controlled and GPS tracked, starting from PKR 35,000 with Truckeya.',
    h1: 'Reefer Truck in Pakistan: Refrigerated Truck Booking',
    intro: 'Perishable goods need the right temperature from pickup to delivery. Truckeya connects you with reefer trucks across Pakistan for fruit, dairy, frozen food, seafood and pharma cargo.',
    details: [
      'A reefer truck has a temperature controlled body that keeps cargo cool or frozen for the whole trip. This reduces spoilage and protects the quality of fruit, vegetables, dairy, meat, bakery items and medicines.',
      'Reefer bookings start from PKR 35,000. Tell us the product, required temperature, quantity and route so we can match the right vehicle and give you an accurate quote.',
      ],
    bestFor: ['Fruit and vegetables', 'Dairy and frozen food', 'Seafood and meat', 'Pharma and medical supplies', 'Long distance cold chain trips'],
    roman: 'Reefer truck phal, sabziyan, dairy aur dawaiyon ke liye zaroori hai. Truckeya se temperature controlled truck online book karein.',
    faqQ: 'Can I set the temperature for my reefer truck?',
    faqA: 'Yes. Share the temperature your product needs when you request the quote so the driver sets it correctly before loading.',
  },
  ]

export const truckPages: SeoPage[] = trucks.map((t) => ({
  slug: t.slug,
  group: 'truck',
  navLabel: t.navLabel,
  title: t.title,
  description: t.description,
  eyebrow: t.name.toUpperCase() + ' TRUCK BOOKING',
  h1: t.h1,
  intro: t.intro,
  sections: [
    { heading: 'About the ' + t.name, body: t.details },
    {
      heading: 'Book a ' + t.name + ' with Truckeya',
      body: ['Open the quote page, enter your pickup and drop locations and describe your cargo. We confirm the price, assign a driver and keep you updated on WhatsApp. Starting price: ' + t.price + '.'],
    },
    { heading: 'Roman Urdu', body: [t.roman] },
    ],
  checklistHeading: 'Best uses for the ' + t.name,
  checklist: t.bestFor,
  faqs: [{ q: t.faqQ, a: t.faqA }, ...commonFaqs('Pakistan')],
}))
