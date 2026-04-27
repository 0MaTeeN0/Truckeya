import { Link } from 'react-router-dom'
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#0a1628', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Let's move your cargo.
            </h2>
            <p className="text-lg mb-8 max-w-md" style={{ color: '#94a3b8' }}>
              Tell us what you're shipping and where. We'll reply with a quote within hours.
            </p>

            <div className="space-y-4">
              <a href="https://wa.me/923021223388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors group" style={{ color: '#94a3b8' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#f97316' }} />
                </div>
                <span className="text-lg">03021223388</span>
              </a>

              <a href="mailto:truckeya.business@gmail.com" className="flex items-center gap-3 transition-colors group" style={{ color: '#94a3b8' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#f97316' }} />
                </div>
                <span className="text-lg">truckeya.business@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/company/truckeya/about/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors group" style={{ color: '#94a3b8' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <Linkedin className="w-5 h-5" style={{ color: '#f97316' }} />
                </div>
                <span className="text-lg">linkedin.com/company/truckeya</span>
              </a>

              <div className="flex items-center gap-3" style={{ color: '#94a3b8' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#f97316' }} />
                </div>
                <span className="text-lg">Pakistan - Nationwide Service</span>
              </div>
            </div>
          </div>

          <div className="lg:text-right">
            <h3 className="font-heading text-xl font-semibold mb-6" style={{ color: '#ffffff' }}>Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Get Quote', href: '/quote' },
                { label: 'Core Team', href: '/team' },
                { label: 'Join as Driver', href: '/#driver' },
                { label: 'Our Fleet', href: '/#fleet' },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="transition-colors hover:text-[#f97316]" style={{ color: '#94a3b8' }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ color: '#94a3b8' }} className="text-sm">&copy; 2026 Truckeya. All rights reserved.</p>
          <img src="/images/logo_new.png" alt="Truckeya" className="h-10 w-auto opacity-60" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
