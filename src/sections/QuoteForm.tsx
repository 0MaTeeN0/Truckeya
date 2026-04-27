import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, Package, Users, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  'Pickup / Mini Truck',
  'Flatbed Truck',
  'Box Truck',
  'Refrigerated Truck',
  'Heavy Trailer',
]

const QuoteForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    category: '',
    pickup: '',
    dropoff: '',
    packaging: false,
    labour: false,
    name: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.quote-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const packagingText = formData.packaging ? 'Yes' : 'No'
    const labourText = formData.labour ? 'Yes' : 'No'

    const whatsappMessage = `
*New Quote Request - Truckeya*

*Category:* ${formData.category || 'Not selected'}
*Pickup Location:* ${formData.pickup}
*Dropoff Location:* ${formData.dropoff}
*Packaging Required:* ${packagingText}
*Labour Required:* ${labourText}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Message:* ${formData.message || 'N/A'}
    `.trim()

    const emailSubject = `Quote Request from ${formData.name}`
    const emailBody = `
Category: ${formData.category}
Pickup: ${formData.pickup}
Dropoff: ${formData.dropoff}
Packaging: ${packagingText}
Labour: ${labourText}
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim()

    // Open WhatsApp
    window.open(
      `https://wa.me/923021223388?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )

    // Open Email
    setTimeout(() => {
      window.open(
        `mailto:truckeya.business@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
        '_blank'
      )
    }, 500)

    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="quote" ref={sectionRef} className="py-24 lg:py-32 bg-[#141B2A]">
      <div className="section-padding">
        <div className="quote-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <span className="font-mono-label text-xs text-[#FF6A00] mb-4 block">GET STARTED</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#F4F6FF] mb-4">
              Request a Quote
            </h2>
            <p className="text-[#A7B1C8] text-lg mb-8">
              Fill in the details and we'll get back to you within hours via WhatsApp or email with the best rates.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#F4F6FF]">All-Inclusive Service</h4>
                  <p className="text-[#A7B1C8] text-sm">Packing, loading, transport, and unloading — all in one quote.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#F4F6FF]">B2B · B2C · C2C</h4>
                  <p className="text-[#A7B1C8] text-sm">Whether you're a business or an individual, we serve everyone.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#FF6A00]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F4F6FF] mb-2">Quote Request Sent!</h3>
                <p className="text-[#A7B1C8]">We'll contact you shortly on WhatsApp or email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Category</label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-[#F4F6FF] appearance-none focus:border-[#FF6A00] focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select truck type</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A7B1C8] pointer-events-none" />
                  </div>
                </div>

                {/* Pickup & Dropoff */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Pickup Location</label>
                    <input
                      type="text"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      placeholder="City or address"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-[#F4F6FF] placeholder:text-[#A7B1C8]/50 focus:border-[#FF6A00] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Dropoff Location</label>
                    <input
                      type="text"
                      value={formData.dropoff}
                      onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                      placeholder="City or address"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-[#F4F6FF] placeholder:text-[#A7B1C8]/50 focus:border-[#FF6A00] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Toggles */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Packaging</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, packaging: true })}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          formData.packaging
                            ? 'bg-[#FF6A00] text-white'
                            : 'bg-[#0B0F17] text-[#A7B1C8] border border-white/10'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, packaging: false })}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          !formData.packaging
                            ? 'bg-[#FF6A00] text-white'
                            : 'bg-[#0B0F17] text-[#A7B1C8] border border-white/10'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Labour</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, labour: true })}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          formData.labour
                            ? 'bg-[#FF6A00] text-white'
                            : 'bg-[#0B0F17] text-[#A7B1C8] border border-white/10'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, labour: false })}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          !formData.labour
                            ? 'bg-[#FF6A00] text-white'
                            : 'bg-[#0B0F17] text-[#A7B1C8] border border-white/10'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Name / Company</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-[#F4F6FF] placeholder:text-[#A7B1C8]/50 focus:border-[#FF6A00] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03XXXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-[#F4F6FF] placeholder:text-[#A7B1C8]/50 focus:border-[#FF6A00] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#A7B1C8] mb-2">Message (Optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any special requirements..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-[#F4F6FF] placeholder:text-[#A7B1C8]/50 focus:border-[#FF6A00] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4" />
                  Send Quote Request
                </button>

                <p className="text-xs text-[#A7B1C8] text-center">
                  We reply within hours on WhatsApp or email.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteForm
