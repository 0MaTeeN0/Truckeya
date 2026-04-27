import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, ArrowLeft, Check, ChevronDown, Package, Users } from 'lucide-react'
import gsap from 'gsap'

const truckCategories = [
  { name: 'Loader Rickshaw', price: 'PKR 1,500' },
  { name: 'Ravi Pickup', price: 'PKR 2,500' },
  { name: 'Shehzore (Mini Truck)', price: 'PKR 4,000' },
  { name: 'Mazda (Medium Truck)', price: 'PKR 6,000' },
  { name: 'Shahzore Double Cabin', price: 'PKR 7,000' },
  { name: 'Truck (Bedford / Isuzu)', price: 'PKR 10,000' },
  { name: 'Half Body Truck', price: 'PKR 12,000' },
  { name: 'Full Body Truck', price: 'PKR 15,000' },
  { name: 'Container (20ft)', price: 'PKR 20,000' },
  { name: 'Container (40ft)', price: 'PKR 30,000' },
  { name: 'Trailer / Flatbed', price: 'PKR 25,000' },
  { name: 'Reefer (Refrigerated)', price: 'PKR 35,000' },
]

const termsText = `TERMS AND CONDITIONS FOR PACKERS AND MOVERS SERVICES BY TRUCKEYA

1. Transportation of any dangerous, hazardous, or illegal materials is strictly prohibited. The cargo owner will bear full responsibility and legal consequences for any violation, and our company reserves the right to refuse carriage and report to authorities if such items are discovered.

2. By handing over the goods to our company, the customer confirms that the goods are in good condition and properly packed.

3. The customer is responsible for ensuring that all goods are properly packed and labeled. Our company will not be liable for any damage caused due to improper packing or labeling.

4. Our company will not be liable for any delay or failure to perform due to circumstances beyond our control, including natural disasters, war, strikes, or other unforeseen events.

5. The customer understands that the goods are being transported at their own risk. Our company will not be liable for any damage, loss, or theft of goods during transit or handling.

6. It is the customer's responsibility to insure their goods against any loss or damage. However, our company can arrange for insurance coverage on behalf of the customer, subject to the terms and conditions of the insurance provider and at the customer's expense.

7. Our company will deliver the goods to the designated location. The customer must inspect the goods at the time of delivery and report any damage or discrepancies immediately, before the vehicle leaves the delivery location. Claims reported after our team has departed will not be entertained.

8. In the event of any loss or damage, our company's liability will be limited to the cost of transportation only.

9. These terms and conditions will be governed by and construed in accordance with the laws of Pakistan.

10. Our company will not be responsible for any indirect or consequential losses, including but not limited to, loss of business, profits, or reputation.

11. By availing our services, the customer acknowledges that they have read, understood, and agreed to these terms and conditions.`

const QuotePage = () => {
  const pageRef = useRef<HTMLDivElement>(null)
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
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.fromTo('.quote-hero', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.quote-form-wrap', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) return
    setIsSubmitting(true)

    const packagingText = formData.packaging ? 'yes - include packing' : 'no - already packed'
    const labourText = formData.labour ? 'yes - need labour' : 'no - no labour needed'

    // Formspree submission
    const formPayload = new FormData()
    formPayload.append('Full Name', formData.name)
    formPayload.append('Phone/WhatsApp', formData.phone)
    formPayload.append('Pickup City', formData.pickup)
    formPayload.append('Delivery City', formData.dropoff)
    formPayload.append('Truck Type', formData.category)
    formPayload.append('Packaging', packagingText)
    formPayload.append('Labour', labourText)
    formPayload.append('Message', formData.message || 'N/A')
    formPayload.append('_subject', 'New Quote Request - Truckeya')

    try {
      await fetch('https://formspree.io/f/mwvaygyd', {
        method: 'POST',
        body: formPayload,
        headers: { Accept: 'application/json' },
      })
    } catch (err) {
      console.error('Formspree error:', err)
    }

    // WhatsApp
    const whatsappMsg = `*New Quote Request - Truckeya*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Pickup City:* ${formData.pickup}
*Delivery City:* ${formData.dropoff}
*Truck Type:* ${formData.category}
*Packaging:* ${packagingText}
*Labour:* ${labourText}
*Message:* ${formData.message || 'N/A'}`

    window.open(`https://wa.me/923021223388?text=${encodeURIComponent(whatsappMsg)}`, '_blank')

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div ref={pageRef} className="min-h-screen" style={{ backgroundColor: '#0a1628' }}>
      <div className="section-padding pt-32 pb-24">
        <Link to="/" className="quote-hero inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: '#94a3b8' }} onMouseEnter={e => e.currentTarget.style.color = '#f97316'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="quote-hero max-w-4xl mx-auto text-center mb-12">
          <span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>GET STARTED</span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Request a Quote</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Fill in the details and we'll get back to you within hours via WhatsApp or email with the best rates.
          </p>
        </div>

        <div className="quote-form-wrap max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left info panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Package className="w-6 h-6" style={{ color: '#f97316' }} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold mb-1" style={{ color: '#ffffff' }}>All-Inclusive Service</h4>
                <p className="text-sm" style={{ color: '#94a3b8' }}>Packing, loading, transport, and unloading - all in one quote.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Users className="w-6 h-6" style={{ color: '#f97316' }} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold mb-1" style={{ color: '#ffffff' }}>B2B - B2C - C2C</h4>
                <p className="text-sm" style={{ color: '#94a3b8' }}>Whether you're a business or an individual, we serve everyone.</p>
              </div>
            </div>

            {/* Price list */}
            <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(15,31,53,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: '#f97316' }}>Starting Prices</h4>
              <div className="space-y-2">
                {truckCategories.map((t, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span style={{ color: '#cbd5e1' }}>{t.name}</span>
                    <span className="font-semibold" style={{ color: '#f97316' }}>{t.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-2 rounded-2xl p-6 lg:p-8" style={{ backgroundColor: 'rgba(15,31,53,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(249,115,22,0.2)' }}>
                  <Send className="w-8 h-8" style={{ color: '#f97316' }} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Quote Request Sent!</h3>
                <p style={{ color: '#94a3b8' }}>We'll contact you shortly on WhatsApp or email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Truck Type</label>
                  <div className="relative">
                    <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 rounded-xl appearance-none focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }} required
                      onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
                      <option value="">Select truck type</option>
                      {truckCategories.map(cat => <option key={cat.name} value={cat.name}>{cat.name} - from {cat.price}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: '#94a3b8' }} />
                  </div>
                </div>

                {/* Pickup & Dropoff */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Pickup City</label>
                    <input type="text" value={formData.pickup} onChange={e => setFormData({ ...formData, pickup: e.target.value })} placeholder="City name" className="w-full px-4 py-3 rounded-xl placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }} required
                      onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Delivery City</label>
                    <input type="text" value={formData.dropoff} onChange={e => setFormData({ ...formData, dropoff: e.target.value })} placeholder="City name" className="w-full px-4 py-3 rounded-xl placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }} required
                      onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                </div>

                {/* Toggles - short dashes, lowercase */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Packaging</label>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setFormData({ ...formData, packaging: true })}
                        className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                        style={formData.packaging ? { backgroundColor: '#f97316', color: '#ffffff' } : { backgroundColor: '#0a1628', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>
                        yes - include packing
                      </button>
                      <button type="button" onClick={() => setFormData({ ...formData, packaging: false })}
                        className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                        style={!formData.packaging ? { backgroundColor: '#f97316', color: '#ffffff' } : { backgroundColor: '#0a1628', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>
                        no - already packed
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Labour</label>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setFormData({ ...formData, labour: true })}
                        className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                        style={formData.labour ? { backgroundColor: '#f97316', color: '#ffffff' } : { backgroundColor: '#0a1628', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>
                        yes - need labour
                      </button>
                      <button type="button" onClick={() => setFormData({ ...formData, labour: false })}
                        className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                        style={!formData.labour ? { backgroundColor: '#f97316', color: '#ffffff' } : { backgroundColor: '#0a1628', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>
                        no - no labour needed
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Full Name</label>
                    <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }} required
                      onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Phone / WhatsApp</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="03XXXXXXXXX" className="w-full px-4 py-3 rounded-xl placeholder-gray-500 focus:outline-none transition-colors" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }} required
                      onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Message (Optional)</label>
                  <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Any special requirements..." rows={3} className="w-full px-4 py-3 rounded-xl placeholder-gray-500 focus:outline-none transition-colors resize-none" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }}
                    onFocus={e => e.currentTarget.style.borderColor = '#f97316'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>

                {/* Terms & Conditions */}
                <div className="rounded-xl p-4" style={{ backgroundColor: '#0a1628', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h4 className="font-heading text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: '#f97316' }}>Terms & Conditions</h4>
                  <div className="max-h-40 overflow-y-auto rounded-lg p-3 mb-3 text-xs leading-relaxed" style={{ backgroundColor: 'rgba(15,31,53,0.8)', color: '#94a3b8' }}>
                    {termsText.split('\n').map((line, i) => (
                      <p key={i} className={line.startsWith('TERMS') ? 'font-heading font-bold text-sm mb-2' : 'mb-1.5'}>{line}</p>
                    ))}
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5">
                      <input type="checkbox" checked={agreedToTerms} onChange={e => setAgreedToTerms(e.target.checked)} className="sr-only" />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${agreedToTerms ? '' : ''}`}
                        style={{ borderColor: agreedToTerms ? '#f97316' : 'rgba(255,255,255,0.2)', backgroundColor: agreedToTerms ? '#f97316' : 'transparent' }}>
                        {agreedToTerms && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <span className="text-sm" style={{ color: '#cbd5e1' }}>I have read and agree to the Terms & Conditions</span>
                  </label>
                </div>

                {/* Submit */}
                <button type="submit" disabled={!agreedToTerms || isSubmitting}
                  className={agreedToTerms ? 'btn-primary w-full' : 'btn-disabled w-full'}>
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </button>

                <p className="text-xs text-center" style={{ color: '#94a3b8' }}>
                  We reply within hours on WhatsApp or email.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotePage
