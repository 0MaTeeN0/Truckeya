import type { SeoPage } from './seoTypes'
import { commonFaqs, fleetLines, PHONE_DISPLAY } from './seoTypes'

export const servicePages: SeoPage[] = [
  {
    slug: 'online-truck-booking-pakistan',
    group: 'service',
    navLabel: 'Online Truck Booking',
    title: 'Online Truck Booking in Pakistan | Digital Truck Adda | Truckeya',
    description: 'Skip the physical truck adda. Book trucks online anywhere in Pakistan with Truckeya. Instant quotes, 12 truck types, packing, loading and live GPS tracking.',
    eyebrow: 'ONLINE TRUCK ADDA',
    h1: 'Online Truck Booking in Pakistan',
    intro: 'A traditional truck adda means travelling to a yard, negotiating with several drivers and hoping the truck arrives on time. Truckeya moves that whole process online. You enter your route, pick a vehicle and get a clear price, all from your phone.',
    sections: [
      {
        heading: 'What is an online truck adda?',
        body: ['An online truck adda is a digital platform that connects people who need to move goods with truck owners and drivers. Instead of visiting a yard, you share your pickup, drop and cargo details and receive a price and a confirmed vehicle. Truckeya covers all four provinces of Pakistan and handles B2B, B2C and C2C bookings.'],
      },
      {
        heading: 'Why customers choose Truckeya',
        body: ['You get transparent starting prices, a wide range of vehicles from Loader Rickshaw to 40ft Container, optional packing and loading labour, optional insurance for valuable cargo, and live GPS tracking with WhatsApp updates. Drivers join Truckeya for consistent trips and weekly payouts, which keeps service reliable.'],
      },
      {
        heading: 'Book in four steps',
        body: ['First, open the quote page and enter pickup and drop locations. Second, choose a truck type and describe your cargo. Third, receive your price and confirm. Fourth, follow your trip on the Track Shipment page or through WhatsApp updates.'],
      },
      {
        heading: 'Truck booking in Roman Urdu',
        body: ['Truck adda jaane ki zaroorat nahi. Truckeya par online truck book karein, qeemat dekhein aur apne saman ki GPS tracking karein. Poore Pakistan mein service dastiyab hai.'],
      },
      ],
    checklistHeading: 'Vehicles available through Truckeya',
    checklist: fleetLines(),
    faqs: [
      { q: 'What is a truck adda?', a: 'A truck adda is a traditional yard or market where goods owners meet truck drivers to arrange transport. Truckeya offers the same service online so you can book without visiting a yard.' },
      { q: 'Is online truck booking safe?', a: 'Truckeya assigns drivers through its own network, supports trips with GPS tracking and offers optional insurance for valuable cargo. You can also confirm details by WhatsApp at ' + PHONE_DISPLAY + '.' },
      ...commonFaqs('Pakistan'),
      ],
  },
  {
    slug: 'goods-transport-pakistan',
    group: 'service',
    navLabel: 'Goods Transport',
    title: 'Goods Transport in Pakistan | Cargo and Freight Service | Truckeya',
    description: 'Reliable goods transport across Pakistan for businesses and individuals. Book trucks for cargo, freight and wholesale delivery with packing, loading and GPS tracking.',
    eyebrow: 'GOODS TRANSPORT',
    h1: 'Goods Transport in Pakistan',
    intro: 'Whether you ship a few cartons or a full container, Truckeya gives you a dependable goods transport service across Pakistan. We match your cargo with the right vehicle and keep you informed from pickup to delivery.',
    sections: [
      {
        heading: 'Cargo we move',
        body: ['Truckeya transports textiles and garments, food and FMCG, agricultural produce, construction material, machinery, furniture, electronics, pharma and household goods. Open body, closed body, flatbed, container and reefer options are available for different cargo types.'],
      },
      {
        heading: 'Packing, loading and insurance',
        body: ['Protect your goods with professional packing using bubble wrap, wooden crating and labeling. Skilled labour handles loading and unloading carefully. For valuable shipments you can add optional insurance cover with damage protection and claim support.'],
      },
      {
        heading: 'Nationwide coverage',
        body: ['We serve major routes between Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Quetta, Multan and Faisalabad, along with smaller cities and towns. Tell us the route and we will confirm the schedule.'],
      },
      {
        heading: 'Goods transport in Roman Urdu',
        body: ['Saman ki tarsil ke liye Truckeya se rabta karein. Dukan ka maal, factory ka saman ya ghar ka saman, poore Pakistan mein mehfooz aur waqt par pohanchaya jata hai.'],
      },
      ],
    checklistHeading: 'Truck options for goods transport',
    checklist: fleetLines(),
    faqs: [
      { q: 'Can I send a small parcel by truck?', a: 'Yes. A Loader Rickshaw or Ravi Pickup is a cost effective option for small loads inside a city or between nearby cities.' },
      { q: 'How do I choose the right truck for my cargo?', a: 'Share the type, weight and size of your goods on the quote page. Closed body trucks protect weather sensitive items, flatbeds suit oversized machinery, and reefers keep perishables cold. Our team will recommend the best match.' },
      ...commonFaqs('Pakistan'),
      ],
  },
  {
    slug: 'house-shifting-pakistan',
    group: 'service',
    navLabel: 'House Shifting',
    title: 'House Shifting in Pakistan | Saman Shifting Service | Truckeya',
    description: 'Safe house and office shifting across Pakistan. Book a Mazda, Shehzore or Ravi Pickup with packing, labour, loading and GPS tracking from Truckeya.',
    eyebrow: 'HOUSE AND OFFICE SHIFTING',
    h1: 'House Shifting in Pakistan',
    intro: 'Moving to a new home or office is stressful enough. Truckeya takes the pressure off with the right truck, careful packing, trained labour and live tracking so you know where your belongings are.',
    sections: [
      {
        heading: 'Complete shifting service',
        body: ['Choose a Ravi Pickup for a small flat, a Shehzore for a medium move or a Mazda and Full Body truck for a full house. Add packing material, wooden crating for fragile items, labeling, and labour for loading and unloading in the same booking.'],
      },
      {
        heading: 'Tips for a smooth move',
        body: ['Book your truck a few days before the move date, list your large items on the quote page, and keep valuables and documents with you. Label boxes by room so unloading is quick, and tell us about stairs or narrow access so we send the right team.'],
      },
      {
        heading: 'Intercity and local moves',
        body: ['We handle moves inside a city and between cities such as Lahore to Karachi, Islamabad to Lahore or Karachi to Quetta. Optional insurance is available for valuable furniture and electronics.'],
      },
      {
        heading: 'Saman shifting in Roman Urdu',
        body: ['Ghar ya office ki shifting ke liye Truckeya se truck, labour aur packing ek hi booking mein hasil karein. Nazuk saman ki khaas hifazat ki jati hai.'],
      },
      ],
    checklistHeading: 'What to prepare before the truck arrives',
    checklist: ['A list of large items and appliances', 'Pickup and drop addresses with floor details', 'Packing needs for fragile items', 'Preferred date and time', 'Contact number for the driver'],
    faqs: [
      { q: 'Which truck is best for house shifting?', a: 'A Ravi Pickup suits a small flat, a Shehzore suits a medium home and a Mazda or Full Body truck suits a full household. We will recommend one based on your item list.' },
      { q: 'Do you provide labour for packing and loading?', a: 'Yes. Skilled labour and packing material can be added to your booking so the whole move is handled by one team.' },
      ...commonFaqs('Pakistan'),
      ],
  },
  {
    slug: 'truck-rent-rates-pakistan',
    group: 'service',
    navLabel: 'Truck Rent Rates',
    title: 'Truck Rent Rates in Pakistan | Starting Prices | Truckeya',
    description: 'See starting truck rent rates in Pakistan for Loader Rickshaw, Ravi Pickup, Shehzore, Mazda, Container and Reefer trucks. Get an exact quote from Truckeya.',
    eyebrow: 'TRUCK RENT RATES',
    h1: 'Truck Rent Rates in Pakistan',
    intro: 'Truck rent in Pakistan changes with vehicle type, distance, cargo weight and waiting time. Here are the starting prices on Truckeya so you can plan your budget before requesting an exact quote.',
    sections: [
      {
        heading: 'What affects the price',
        body: ['The main factors are distance, truck type, cargo weight, loading and unloading time, fuel cost and whether you add packing, labour or insurance. Return trips and tolls may also change the final amount.'],
      },
      {
        heading: 'Starting prices by vehicle',
        body: ['The list below shows the starting price for each vehicle. Prices are a guide and your final amount is confirmed in your quote before the trip starts.'],
      },
      {
        heading: 'Get an exact quote',
        body: ['Open the quote page, enter your route and cargo details, or send us a WhatsApp message at ' + PHONE_DISPLAY + '. Most customers receive a price within hours.'],
      },
      {
        heading: 'Truck kiraya in Roman Urdu',
        body: ['Truck ka kiraya fasle, saman ke wazan aur gari ki qisam par munhasir hota hai. Sahi qeemat janne ke liye Truckeya se free quote hasil karein.'],
      },
      ],
    checklistHeading: 'Starting rates on Truckeya',
    checklist: fleetLines(),
    faqs: [
      { q: 'Are these final prices?', a: 'No. They are starting prices. Your final price depends on distance, cargo and any extras, and it is confirmed in your quote.' },
      { q: 'Is the quote free?', a: 'Yes. Requesting a quote on Truckeya is free and does not commit you to a booking.' },
      ...commonFaqs('Pakistan'),
      ],
  },
  ]
