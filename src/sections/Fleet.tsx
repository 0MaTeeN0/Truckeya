import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const trucks = [
  { name: 'Loader Rickshaw', type: 'Mini Cargo', image: '/images/truck_01_loader.jpg', price: 'PKR 1,500', description: 'Small three-wheeler cargo loader for quick deliveries within city areas.', features: ['Best for small items', 'City only', 'Quick delivery'] },
  { name: 'Ravi Pickup', type: 'Pickup', image: '/images/truck_02_ravi.jpg', price: 'PKR 2,500', description: 'Compact pickup truck ideal for household shifting and small business cargo.', features: ['Easy maneuvering', 'Light cargo', 'Fast turnaround'] },
  { name: 'Shehzore (Mini Truck)', type: 'Mini Truck', image: '/images/truck_03_shehzore.jpg', price: 'PKR 4,000', description: 'Popular mini truck for local deliveries and light commercial transport.', features: ['Open bed', 'Versatile', 'Fuel efficient'] },
  { name: 'Mazda (Medium Truck)', type: 'Medium Truck', image: '/images/truck_04_mazda.jpg', price: 'PKR 6,000', description: 'Medium-duty closed-body truck for secure cargo transport across cities.', features: ['Closed body', 'Secure cargo', 'City to city'] },
  { name: 'Shahzore Double Cabin', type: 'Double Cabin', image: '/images/truck_05_double_cabin.jpg', price: 'PKR 7,000', description: 'Double cabin pickup with passenger seating plus open cargo space.', features: ['Passenger seats', 'Medium cargo', 'Multi-purpose'] },
  { name: 'Truck (Bedford / Isuzu)', type: 'Heavy Truck', image: '/images/truck_06_bedford.jpg', price: 'PKR 10,000', description: 'Classic Bedford or modern Isuzu heavy truck for bulk cargo and long haul.', features: ['Heavy cargo', 'Long distance', 'Durable'] },
  { name: 'Half Body Truck', type: 'Open Body', image: '/images/truck_07_half_body.jpg', price: 'PKR 12,000', description: 'Open-top truck with half body for large items that need crane loading.', features: ['Open top', 'Large items', 'Easy loading'] },
  { name: 'Full Body Truck', type: 'Closed Body', image: '/images/truck_08_full_body.jpg', price: 'PKR 15,000', description: 'Fully enclosed truck for weather-sensitive cargo and maximum protection.', features: ['Weatherproof', 'Maximum protection', 'Full security'] },
  { name: 'Container (20ft)', type: 'Container', image: '/images/truck_09_container_20ft.jpg', price: 'PKR 20,000', description: '20-foot shipping container truck for standardized international cargo.', features: ['Standard size', 'Lockable', 'Intermodal'] },
  { name: 'Container (40ft)', type: 'Container', image: '/images/truck_10_container_40ft.jpg', price: 'PKR 30,000', description: '40-foot container truck for maximum volume shipments and heavy loads.', features: ['Maximum volume', 'Heavy loads', 'Full container'] },
  { name: 'Trailer / Flatbed', type: 'Flatbed', image: '/images/truck_11_trailer.jpg', price: 'PKR 25,000', description: 'Flatbed trailer for oversized machinery, construction materials, and pallets.', features: ['Oversized cargo', 'Machinery', 'Construction'] },
  { name: 'Reefer (Refrigerated)', type: 'Cold Chain', image: '/images/truck_12_reefer.jpg', price: 'PKR 35,000', description: 'Temperature-controlled refrigerated truck for perishable goods and pharma.', features: ['Temp control', 'Fresh delivery', 'Pharma safe'] },
]

const Fleet = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fleet-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
      gsap.fromTo('.fleet-card', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.fleet-grid', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="fleet" ref={sectionRef} className="py-24 lg:py-32" style={{ backgroundColor: '#0a1628' }}>
      <div className="section-padding">
        <div className="fleet-title text-center mb-16">
          <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>OUR FLEET</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Every Truck in Pakistan</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            From loader rickshaws to refrigerated trucks - we have the right vehicle for every job. All trucks available across Pakistan.
          </p>
        </div>

        <div className="fleet-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trucks.map((t, i) => (
            <div key={i} className="fleet-card group rounded-2xl overflow-hidden transition-all duration-500" style={{ backgroundColor: 'rgba(15,31,53,0.6)', border: '1px solid rgba(255,255,255,0.05)' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
              <div className="relative h-44 overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,31,53,1), transparent)' }} />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#f97316', color: '#ffffff' }}>from {t.price}</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-body tracking-wider uppercase" style={{ color: '#f97316' }}>{t.type}</span>
                <h3 className="font-heading text-lg font-semibold mt-1 mb-2" style={{ color: '#ffffff' }}>{t.name}</h3>
                <p className="text-sm mb-3" style={{ color: '#94a3b8' }}>{t.description}</p>
                <div className="space-y-1">
                  {t.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#f97316' }} />
                      <span className="text-xs" style={{ color: '#94a3b8' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/quote" className="btn-primary inline-flex">
            Get Instant Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Fleet
