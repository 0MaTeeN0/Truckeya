import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react'
import gsap from 'gsap'

const landmarks = [
  { image: '/images/province_punjab.jpg', name: 'Punjab' },
  { image: '/images/province_sindh.jpg', name: 'Sindh' },
  { image: '/images/province_kpk.jpg', name: 'Khyber Pakhtunkhwa' },
  { image: '/images/province_balochistan.jpg', name: 'Balochistan' },
]

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title span', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.3 })
      gsap.fromTo('.hero-subtitle', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.8 })
      gsap.fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1.0 })
      gsap.fromTo('.hero-stats', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 1.2 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % landmarks.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {landmarks.map((lm, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={lm.image} alt={lm.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92), rgba(10,22,40,0.55) 65%, rgba(10,22,40,0.35))' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a1628, transparent 40%, rgba(10,22,40,0.3))' }} />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#f97316' }} />
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#f97316' }}>
              Serving All Pakistan &middot; {landmarks[currentSlide].name}
            </span>
          </div>

          <h1 className="hero-title font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6" style={{ color: '#ffffff' }}>
            <span className="inline-block">NATIONWIDE</span><br />
            <span className="inline-block text-gradient">LOGISTICS</span><br />
            <span className="inline-block">DELIVERED</span>
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl max-w-xl mb-8 leading-relaxed" style={{ color: '#94a3b8' }}>
            Freight that arrives on time - clean, tracked, and intact. From Lahore to Karachi,
            Islamabad to Quetta, we move your goods across all four provinces of Pakistan.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 mb-16">
            <Link to="/quote" className="btn-primary">
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/team" className="btn-secondary">
              Meet Our Team
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { icon: Truck, val: '12+', label: 'Truck Types' },
              { icon: Shield, val: '100%', label: 'Safe Delivery' },
              { icon: Clock, val: '24/7', label: 'Tracking' },
            ].map((s, i) => (
              <div key={i} className="hero-stats flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <s.icon className="w-6 h-6" style={{ color: '#f97316' }} />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold" style={{ color: '#ffffff' }}>{s.val}</p>
                  <p className="text-sm" style={{ color: '#94a3b8' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {landmarks.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: i === currentSlide ? 32 : 8, backgroundColor: i === currentSlide ? '#f97316' : 'rgba(255,255,255,0.3)' }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
