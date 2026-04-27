import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Package, Truck, Users, MapPin, Shield, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: Package, title: 'Packing Services', description: 'Professional packing with quality materials. We ensure your goods are secure for transit.', features: ['Bubble wrapping', 'Wooden crating', 'Labeling'] },
  { icon: Truck, title: 'Loading & Unloading', description: 'Expert loading and unloading from trucks. Safe handling of all cargo types.', features: ['Skilled labor', 'Equipment support', 'Careful handling'] },
  { icon: Users, title: 'All Truck Types', description: 'From Loader Rickshaw to heavy Containers - every truck type available in Pakistan.', features: ['12 truck types', 'All sizes', 'All cargo types'] },
  { icon: MapPin, title: 'Live Tracking', description: 'Real-time GPS tracking of your goods. Know exactly where your cargo is.', features: ['GPS enabled', 'WhatsApp updates', 'Route monitoring'] },
  { icon: Shield, title: 'Insurance Coverage', description: 'Optional insurance for valuable cargo. Your goods protected end-to-end.', features: ['Full coverage', 'Damage protection', 'Claim support'] },
  { icon: Clock, title: 'On-Time Delivery', description: 'We value your time. Commitment to scheduled pickup and delivery.', features: ['Scheduled pickups', 'Route optimization', 'Time guarantee'] },
]

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
      gsap.fromTo('.service-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.services-grid', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32" style={{ backgroundColor: '#0a1628' }}>
      <div className="section-padding">
        <div className="services-title text-center mb-16">
          <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>WHAT WE OFFER</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Services Built for Pakistan</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Complete logistics solutions - from packing to delivery - serving B2B, B2C, and C2C customers across the nation.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card group p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1" style={{ backgroundColor: 'rgba(15,31,53,0.6)', border: '1px solid rgba(255,255,255,0.05)' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <s.icon className="w-7 h-7" style={{ color: '#f97316' }} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: '#ffffff' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#94a3b8' }}>{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f, fi) => (
                  <span key={fi} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(249,115,22,0.1)', color: '#f97316' }}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
