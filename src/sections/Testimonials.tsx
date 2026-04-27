import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    name: 'Bilal Ahmed',
    location: 'Lahore',
    text: 'Booked a Mazda for shifting my office. Team was punctual, goods arrived safely. Highly recommended for any business move.',
  },
  {
    name: 'Sana Mirza',
    location: 'Karachi',
    text: 'Used their container service from Karachi to Islamabad. Packing was professional and nothing was damaged. Will use again.',
  },
  {
    name: 'Usman Tariq',
    location: 'Islamabad',
    text: 'Very affordable rates compared to other companies. The Shehzore was on time and driver was cooperative throughout the journey.',
  },
  {
    name: 'Fatima Malik',
    location: 'Peshawar',
    text: 'Excellent service for household moving. Labour team was hardworking and careful with fragile items. Truckeya is trustworthy.',
  },
  {
    name: 'Hassan Raza',
    location: 'Multan',
    text: 'Refrigerated truck for food cargo from Multan to Lahore. Fresh delivery, zero issues. Great logistics partner for food businesses.',
  },
]

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
      gsap.fromTo('.test-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.test-grid', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32" style={{ backgroundColor: '#0f1f35' }}>
      <div className="section-padding">
        <div className="test-title text-center mb-16">
          <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>TESTIMONIALS</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>What Our Customers Say</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Trusted by thousands across Pakistan for reliable, safe, and timely delivery.
          </p>
        </div>

        <div className="test-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="test-card p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'rgba(10,22,40,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Quote className="w-8 h-8 mb-4" style={{ color: 'rgba(249,115,22,0.3)' }} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-current" style={{ color: '#f97316' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#cbd5e1' }}>"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm" style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: '#f97316' }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm" style={{ color: '#ffffff' }}>{r.name}</p>
                  <p className="text-xs" style={{ color: '#94a3b8' }}>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
