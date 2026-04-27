import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Fleet', href: '/#fleet' },
    { label: 'Get Quote', href: '/quote' },
    { label: 'Core Team', href: '/team' },
    { label: 'Join as Driver', href: '/#driver' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (location.pathname !== '/') {
        return
      }
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? 'rgba(10,22,40,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-3 group z-10">
            <img
              src="/images/logo_new.png"
              alt="Truckeya"
              className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f97316')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/quote" className="btn-primary text-sm">
              <Phone className="w-4 h-4" />
              Get Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 z-10"
            style={{ color: '#ffffff' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className="lg:hidden fixed inset-0 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(10,22,40,0.98)',
          backdropFilter: 'blur(20px)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          top: 0,
          paddingTop: '80px',
        }}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => {
                handleNavClick(e, item.href)
                if (!item.href.startsWith('/#')) {
                  setIsMobileMenuOpen(false)
                }
              }}
              className="text-lg font-medium py-3 px-4 rounded-lg transition-all"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f97316'
                e.currentTarget.style.backgroundColor = 'rgba(249,115,22,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/quote"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary mt-4 text-center"
          >
            <Phone className="w-4 h-4" />
            Get Free Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
