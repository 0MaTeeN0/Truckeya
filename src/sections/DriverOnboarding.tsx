import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Upload, Send, Route, CreditCard, Headphones } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const vehicleTypes = [
  'Loader Rickshaw',
  'Ravi Pickup',
  'Shehzore (Mini Truck)',
  'Mazda (Medium Truck)',
  'Shahzore Double Cabin',
  'Truck (Bedford / Isuzu)',
  'Half Body Truck',
  'Full Body Truck',
  'Container (20ft)',
  'Container (40ft)',
  'Trailer / Flatbed',
  'Reefer (Refrigerated)',
]

const DriverOnboarding = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', vehicleType: '', vehicleNumber: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.driver-content', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `*New Driver Application - Truckeya*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*City:* ${formData.city}%0A*Vehicle Type:* ${formData.vehicleType}%0A*Vehicle Number:* ${formData.vehicleNumber}%0A%0ADocuments needed: CNIC Front & Back, Vehicle Photo, Driving License`
    window.open(`https://wa.me/923021223388?text=${msg}`, '_blank')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="driver" ref={sectionRef} className="py-24 lg:py-32" style={{ backgroundColor: '#0a1628' }}>
      <div className="section-padding">
        <div className="driver-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>DRIVE WITH US</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Join as a Driver</h2>
            <p className="text-lg mb-8" style={{ color: '#94a3b8' }}>
              Earn consistent trips. Get paid on time. Work with a team that respects your schedule.
            </p>

            <div className="rounded-2xl p-6 lg:p-8" style={{ backgroundColor: 'rgba(15,31,53,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(249,115,22,0.2)' }}>
                    <Send className="w-8 h-8" style={{ color: '#f97316' }} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Application Sent!</h3>
                  <p style={{ color: '#94a3b8' }}>We'll contact you shortly for document verification.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Full Name</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)' }} required
                        onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Phone / WhatsApp</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="03XXXXXXXXX" className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)' }} required
                        onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>City</label>
                      <input type="text" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} placeholder="Your city" className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)' }} required
                        onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Vehicle Type</label>
                      <select value={formData.vehicleType} onChange={e => setFormData({ ...formData, vehicleType: e.target.value })} className="w-full px-4 py-3 rounded-xl text-white focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)' }} required
                        onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
                        <option value="">Select vehicle type</option>
                        {vehicleTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Vehicle Number</label>
                    <input type="text" value={formData.vehicleNumber} onChange={e => setFormData({ ...formData, vehicleNumber: e.target.value })} placeholder="e.g., LEA-1234" className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)' }} required
                      onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>

                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)' }}>
                    <p className="text-sm mb-3" style={{ color: '#94a3b8' }}>After submitting, our team will contact you to collect:</p>
                    <div className="space-y-2">
                      {['CNIC Front & Back image', 'Vehicle photo', 'Valid driving license image'].map((d, i) => (
                        <div key={i} className="flex items-center gap-2"><Upload className="w-4 h-4" style={{ color: '#f97316' }} /><span className="text-sm" style={{ color: '#ffffff' }}>{d}</span></div>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="w-4 h-4" />
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <h3 className="font-heading text-2xl font-semibold mb-8" style={{ color: '#ffffff' }}>Why Drive with Truckeya?</h3>
            <div className="space-y-6">
              {[
                { icon: Route, title: 'GPS-Supported Routes', desc: 'Optimized routes to save fuel and time. Real-time navigation support.' },
                { icon: CreditCard, title: 'Weekly Payouts', desc: 'Get paid every week, on time. No delays, no disputes.' },
                { icon: Headphones, title: '24/7 Support', desc: 'Our team is always available to help you on the road.' },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: 'rgba(15,31,53,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                    <b.icon className="w-6 h-6" style={{ color: '#f97316' }} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold mb-1" style={{ color: '#ffffff' }}>{b.title}</h4>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl" style={{ background: 'linear-gradient(to bottom right, rgba(249,115,22,0.08), transparent)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <p className="italic mb-4" style={{ color: '#94a3b8' }}>"I've been driving with Truckeya for 6 months. The consistent trips and weekly payments have made a real difference for my family."</p>
              <p className="font-medium" style={{ color: '#ffffff' }}>- Ahmed, Truck Driver from Lahore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DriverOnboarding
