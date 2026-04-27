import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Linkedin, Anchor, TrendingUp, Users, ArrowLeft, Award, Globe } from 'lucide-react'

const founders = [
  {
    name: 'Muhammad Tashfeen',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/muhammad-tashfeen-abrar-29b998359/',
    icon: Anchor,
    about: 'Merchant Navy Officer with 5 years of experience in global trade and logistics. Founded Truckeya to bring international standards of safety, reliability, and efficiency to Pakistan.',
    stats: [
      { label: 'Years at Sea', value: '5+' },
      { label: 'Countries Visited', value: '30+' },
    ],
  },
  {
    name: 'Zain Ul Abideen',
    role: 'COO',
    linkedin: 'https://www.linkedin.com/in/zain-ul-abideen-655b37310/',
    icon: TrendingUp,
    about: 'Operations expert ensuring seamless logistics execution across Pakistan. Manages fleet coordination, driver networks, and customer satisfaction.',
    stats: [
      { label: 'Cities Covered', value: '50+' },
      { label: 'Fleet Size', value: '100+' },
    ],
  },
  {
    name: 'Muhammad Mateen',
    role: 'CMO',
    linkedin: 'https://www.linkedin.com/in/muhammadmateen0389/',
    icon: Users,
    about: 'Marketing strategist driving Truckeya\'s growth across B2B, B2C, and C2C segments. Building Pakistan\'s most trusted logistics brand.',
    stats: [
      { label: 'Happy Clients', value: '1000+' },
      { label: 'Growth Rate', value: '200%' },
    ],
  },
]

const CoreTeam = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-hero-content', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.founder-card', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.founders-grid', start: 'top 80%' } })
      gsap.fromTo('.founder-message', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.founder-message', start: 'top 80%' } })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen" style={{ backgroundColor: '#0a1628' }}>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,31,53,0.5), transparent)' }} />
        <div className="section-padding relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: '#94a3b8' }} onMouseEnter={e => e.currentTarget.style.color = '#f97316'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="team-hero-content max-w-4xl">
            <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>THE PEOPLE BEHIND TRUCKEYA</span>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#ffffff' }}>Core Team</h1>
            <p className="text-xl max-w-2xl" style={{ color: '#94a3b8' }}>
              Three founders, one mission - to transform logistics in Pakistan with international standards and local expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pb-16">
        <div className="founder-message max-w-4xl mx-auto p-8 lg:p-12 rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #0f1f35, #0a1628)', border: '1px solid rgba(249,115,22,0.2)' }}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6" style={{ color: '#f97316' }} />
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#f97316' }}>Founder's Message</span>
          </div>
          <blockquote className="font-heading text-xl lg:text-2xl leading-relaxed mb-6" style={{ color: '#ffffff' }}>
            "As a Merchant Navy Officer with first-hand experience in global trade and logistics, I founded this company to bring international standards of safety, reliability, and efficiency to Pakistan. With years of sailing across the world's busiest trade routes, I understand the true value of time, cargo, and trust."
          </blockquote>
          <p className="text-lg mb-4" style={{ color: '#94a3b8' }}>
            Our mission is simple: move your goods like they're our own - securely, on time, every time.
          </p>
          <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.2)' }}>
              <Anchor className="w-6 h-6" style={{ color: '#f97316' }} />
            </div>
            <div>
              <p className="font-heading font-semibold" style={{ color: '#ffffff' }}>Muhammad Tashfeen</p>
              <p className="text-sm" style={{ color: '#94a3b8' }}>Founder & CEO, Truckeya</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="founders-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {founders.map((f, i) => (
            <div key={i} className="founder-card group rounded-2xl overflow-hidden transition-all duration-500" style={{ backgroundColor: 'rgba(15,31,53,0.6)', border: '1px solid rgba(255,255,255,0.05)' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
              <div className="relative p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                    <f.icon className="w-8 h-8" style={{ color: '#f97316' }} />
                  </div>
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ backgroundColor: '#0a1628', color: '#94a3b8' }} onMouseEnter={e => { e.currentTarget.style.color = '#f97316'; e.currentTarget.style.backgroundColor = 'rgba(249,115,22,0.1)' }} onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.backgroundColor = '#0a1628' }}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>{f.name}</h3>
                <p className="font-medium mb-4" style={{ color: '#f97316' }}>{f.role}</p>
              </div>
              <div className="p-8 pt-4">
                <p className="leading-relaxed mb-6" style={{ color: '#94a3b8' }}>{f.about}</p>
                <div className="grid grid-cols-2 gap-4">
                  {f.stats.map((s, si) => (
                    <div key={si} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(10,22,40,0.6)' }}>
                      <p className="font-heading text-2xl font-bold" style={{ color: '#f97316' }}>{s.value}</p>
                      <p className="text-sm" style={{ color: '#94a3b8' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(249,115,22,0.08), transparent)', border: '1px solid rgba(249,115,22,0.15)' }}>
          <Globe className="w-10 h-10 mx-auto mb-4" style={{ color: '#f97316' }} />
          <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Follow Truckeya on LinkedIn</h3>
          <p className="mb-6" style={{ color: '#94a3b8' }}>Stay updated with our latest news, job openings, and company updates.</p>
          <a href="https://www.linkedin.com/company/truckeya/about/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
            <Linkedin className="w-5 h-5" />
            Visit Company Page
          </a>
        </div>
      </section>
    </div>
  )
}

export default CoreTeam
