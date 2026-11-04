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
  
        { slug: 'packing-services-pakistan', group: 'service', navLabel: 'Packing Services', title: 'Packing Services in Pakistan | Bubble Wrap and Wooden Crating | Truckeya', description: 'Professional packing services in Pakistan with quality materials. Bubble wrapping, wooden crating and labeling keep your goods secure in transit with Truckeya.', eyebrow: 'PACKING SERVICES', h1: 'Packing Services in Pakistan', intro: 'Professional packing with quality materials. We make sure your goods are secure for transit, whether you are shifting a home or an office or shipping stock for your business.', sections: [ { heading: 'What our packing service includes', body: ['Truckeya offers bubble wrapping for fragile items such as glass, electronics and decor, wooden crating for heavy or valuable goods, and clear labeling so every box is easy to identify and unload. You can add packing to your truck booking so everything is handled in one go.'] }, { heading: 'Why proper packing matters', body: ['Most damage during road transport comes from poor packing and loose loads. Good materials and careful wrapping protect your goods from vibration, moisture and rough handling, especially on long intercity routes.'] }, { heading: 'How to add packing to your booking', body: ['Mention packing on the quote page or tell us on WhatsApp at ' + PHONE_DISPLAY + '. We include it in your quote so you know the full price before the trip.'] } ], checklistHeading: 'Packing options', checklist: ['Bubble wrapping', 'Wooden crating', 'Labeling', 'Quality packing materials', 'Packing for house and office shifting', 'Packing for business stock and goods'], faqs: [ { q: 'What packing services does Truckeya offer?', a: 'Truckeya offers bubble wrapping, wooden crating and labeling using quality packing materials, so your goods stay secure during transit.' }, { q: 'Can I book packing and a truck together?', a: 'Yes. Add packing to your quote request and it is included in one booking with your truck, loading and unloading.' }, ...commonFaqs('Pakistan') ] }, { slug: 'loading-unloading-services-pakistan', group: 'service', navLabel: 'Loading & Unloading', title: 'Loading and Unloading Services in Pakistan | Skilled Labour | Truckeya', description: 'Expert loading and unloading from trucks anywhere in Pakistan. Skilled labour, equipment support and careful handling for all cargo types with Truckeya.', eyebrow: 'LOADING AND UNLOADING', h1: 'Loading and Unloading Services in Pakistan', intro: 'Expert loading and unloading from trucks. Our team handles all cargo types with safe, careful handling so nothing is damaged on the way in or out.', sections: [ { heading: 'Skilled labour for every cargo type', body: ['Truckeya can add trained labour to your truck booking for loading at pickup and unloading at drop. The team handles household goods, office furniture, commercial stock, machinery parts and heavy cartons with care.'] }, { heading: 'Equipment support and careful handling', body: ['Heavy and awkward items need the right method and equipment. Our labour follows safe lifting practice, protects corners and surfaces, and positions the load so it stays stable during the trip.'] }, { heading: 'One booking for the whole job', body: ['Add loading and unloading when you request a quote, together with packing if you need it. You see the full price before the trip, and one team coordinates the truck and the labour.'] } ], checklistHeading: 'What is included', checklist: ['Skilled labor', 'Equipment support', 'Careful handling', 'Heavy and fragile cargo', 'Household and office goods', 'Commercial and industrial cargo'], faqs: [ { q: 'Does Truckeya provide labour for loading and unloading?', a: 'Yes. Skilled labour can be added to your booking for both loading at pickup and unloading at the destination.' }, { q: 'Can your team handle heavy or fragile items?', a: 'Yes. Tell us about heavy, large or fragile items in your quote request so we send the right team and equipment support.' }, ...commonFaqs('Pakistan') ] }, { slug: 'all-truck-types-pakistan', group: 'service', navLabel: 'All Truck Types', title: 'All Truck Types in Pakistan | 12 Vehicles from Rickshaw to Container | Truckeya', description: 'Book any truck type in Pakistan with Truckeya. From Loader Rickshaw to heavy Containers and Reefers, 12 truck types for all sizes and all cargo types.', eyebrow: 'ALL TRUCK TYPES', h1: 'All Truck Types Available in Pakistan', intro: 'From Loader Rickshaw to heavy Containers, every truck type you need is available in Pakistan through Truckeya. Twelve truck types cover all sizes and all cargo types.', sections: [ { heading: 'Small loads to heavy freight', body: ['For small loads inside a city, a Loader Rickshaw or Ravi Pickup is a cost effective choice. For medium moves, choose a Shehzore or a Mazda. For heavy freight, Bedford and Isuzu trucks, Half Body and Full Body trucks, Trailers and Flatbeds, and 20ft and 40ft Containers are available.'] }, { heading: 'Special cargo', body: ['Reefer trucks keep perishable goods such as food, dairy and medicines cold. Closed body and container trucks protect cargo from weather, and flatbeds carry oversized machinery and long items.'] }, { heading: 'How to choose the right truck', body: ['Tell us the type, weight and size of your cargo and the route on the quote page. We recommend the best match for your goods and budget, and confirm the price before the trip.'] } ], checklistHeading: 'Truck types on Truckeya, with starting prices', checklist: fleetLines(), faqs: [ { q: 'How many truck types does Truckeya offer?', a: 'Truckeya offers 12 truck types, from Loader Rickshaw and Ravi Pickup to Shehzore, Mazda, Container, Trailer and Reefer trucks.' }, { q: 'Which truck is best for a small load?', a: 'A Loader Rickshaw or Ravi Pickup suits small loads inside a city or between nearby cities. Share your cargo details and we will recommend the best option.' }, ...commonFaqs('Pakistan') ] }, { slug: 'live-cargo-tracking-pakistan', group: 'service', navLabel: 'Live Tracking', title: 'Live Cargo Tracking in Pakistan | GPS and WhatsApp Updates | Truckeya', description: 'Know exactly where your cargo is. Truckeya offers GPS tracking, WhatsApp updates and route monitoring, plus a Track Shipment page with status and map.', eyebrow: 'LIVE TRACKING', h1: 'Live Cargo Tracking in Pakistan', intro: 'Know exactly where your cargo is. Truckeya supports your trip with GPS tracking, WhatsApp updates and route monitoring, so you are never left guessing.', sections: [ { heading: 'Track your shipment online', body: ['After booking you receive a tracking ID. Enter it on the Track Shipment page to see the booking name, the route, the current truck location, the delivery status and a map with the start, the truck and the destination.'] }, { heading: 'WhatsApp updates', body: ['We keep you informed during the trip with WhatsApp updates at key points such as pickup, in transit and delivery. You can also message us any time at ' + PHONE_DISPLAY + ' to ask where your cargo is.'] }, { heading: 'Route monitoring', body: ['We monitor the route of every trip so delays can be spotted early and explained to you, instead of leaving you to chase the driver.'] } ], checklistHeading: 'Tracking features', checklist: ['GPS enabled', 'WhatsApp updates', 'Route monitoring', 'Tracking ID for every booking', 'Track Shipment page with status and map'], faqs: [ { q: 'How do I track my cargo with Truckeya?', a: 'Open the Track Shipment page on truckeya.com and enter your tracking ID. You will see the route, the truck location, the status and a map.' }, { q: 'Will I get updates on WhatsApp?', a: 'Yes. We send WhatsApp updates during the trip, and you can message us at ' + PHONE_DISPLAY + ' for the latest status.' }, ...commonFaqs('Pakistan') ] }, { slug: 'cargo-insurance-pakistan', group: 'service', navLabel: 'Insurance Coverage', title: 'Cargo Insurance in Pakistan | Optional Cover for Valuable Goods | Truckeya', description: 'Optional insurance for valuable cargo with Truckeya. Damage protection and claim support to keep your goods protected from pickup to delivery in Pakistan.', eyebrow: 'INSURANCE COVERAGE', h1: 'Cargo Insurance in Pakistan', intro: 'Optional insurance for valuable cargo. Your goods are protected end to end, with damage protection and claim support if something goes wrong.', sections: [ { heading: 'Who should add insurance', body: ['Insurance is a smart add-on for high value goods such as electronics, machinery, furniture, stock for resale and other valuable cargo, especially on long intercity routes. It is optional, so you add it only when you need it.'] }, { heading: 'What the cover is for', body: ['The cover is designed to protect your goods from damage during the trip, with support for the claim process. Ask us for the cover details for your cargo before you book, and we will include them in your quote.'] }, { heading: 'How to add insurance', body: ['Mention insurance on the quote page or message us on WhatsApp at ' + PHONE_DISPLAY + '. Tell us the type and value of your cargo and we will confirm the details with the price.'] } ], checklistHeading: 'Insurance highlights', checklist: ['Full coverage', 'Damage protection', 'Claim support', 'Optional add-on for valuable cargo'], faqs: [ { q: 'Is cargo insurance compulsory?', a: 'No. Insurance is optional on Truckeya. You can add it when your cargo is valuable and you want extra protection.' }, { q: 'How do I add insurance to my booking?', a: 'Mention it in your quote request or on WhatsApp at ' + PHONE_DISPLAY + ' and we will include the cover details and price in your quote.' }, ...commonFaqs('Pakistan') ] }, { slug: 'on-time-truck-delivery-pakistan', group: 'service', navLabel: 'On-Time Delivery', title: 'On-Time Truck Delivery in Pakistan | Scheduled Pickups | Truckeya', description: 'We value your time. Truckeya is committed to scheduled pickup and delivery across Pakistan, with route optimization and clear updates on every trip.', eyebrow: 'ON-TIME DELIVERY', h1: 'On-Time Truck Delivery in Pakistan', intro: 'We value your time. Truckeya is committed to scheduled pickup and delivery, so your goods leave and arrive when you planned.', sections: [ { heading: 'Scheduled pickups', body: ['Choose your pickup date and time when you request a quote. We confirm the schedule with the quote and plan the truck and the team around it, so you are not left waiting at the loading point.'] }, { heading: 'Route optimization', body: ['We plan the route for each trip to avoid unnecessary delays and keep the journey as efficient as possible, whether it is a short city run or a long intercity haul.'] }, { heading: 'Clear communication on every trip', body: ['You can follow your trip on the Track Shipment page and through WhatsApp updates. If something changes on the road, you hear about it from us early.'] } ], checklistHeading: 'How we protect your time', checklist: ['Scheduled pickups', 'Route optimization', 'On-time delivery commitment', 'Tracking page and WhatsApp updates'], faqs: [ { q: 'Can I schedule a pickup time?', a: 'Yes. Tell us your preferred pickup date and time in the quote request and we confirm the schedule with your quote.' }, { q: 'How will I know if there is a delay?', a: 'We share updates by WhatsApp and you can check the Track Shipment page with your tracking ID at any time.' }, ...commonFaqs('Pakistan') ] }, ]
