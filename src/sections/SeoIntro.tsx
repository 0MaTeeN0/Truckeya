import { Link } from 'react-router-dom'
import { seoPages, homeFaqs } from '../lib/seoPages'
import { PHONE_DISPLAY } from '../lib/seoTypes'

const groups = [
{ key: 'city', title: 'Truck Adda by City' },
{ key: 'truck', title: 'Trucks for Rent' },
{ key: 'service', title: 'Our Services' },
]

const SeoIntro = () => (
<section className="py-20 lg:py-24" style={{ backgroundColor: '#0a1628' }}>
<div className="section-padding">
<div className="max-w-4xl mx-auto">
<span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>ONLINE TRUCK ADDA</span>
<h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>Book Trucks Online Across Pakistan</h2>
<p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
Truckeya is a modern truck adda for Pakistan. Instead of visiting a yard and negotiating with several drivers, you enter your route, pick from 12 vehicle types and receive a clear quote. We serve Lahore, Karachi, Islamabad, Rawalpindi, Quetta, Peshawar, Multan, Faisalabad and every major route between them.
</p>
<p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
Choose a Loader Rickshaw for quick city deliveries, a Shehzore or Mazda for house shifting, a Container for port cargo or a Reefer for fruit and dairy. Add packing, loading labour and insurance, then follow your cargo with live GPS tracking and WhatsApp updates.
</p>
<p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: '#cbd5e1' }}>
Truck book karna ab asan hai. Truckeya par online truck adda se apna saman poore Pakistan mein mehfooz bhejein. Madad ke liye WhatsApp karein: {PHONE_DISPLAY}.
</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
{groups.map((g) => (
<div key={g.key}>
<h3 className="font-heading text-lg font-semibold mb-3" style={{ color: '#ffffff' }}>{g.title}</h3>
<nav className="flex flex-col gap-2">
{seoPages.filter((p) => p.group === g.key).map((p) => (
<Link key={p.slug} to={'/' + p.slug} className="text-sm transition-colors hover:text-[#f97316]" style={{ color: '#94a3b8' }}>
{p.navLabel}
</Link>
))}
</nav>
</div>
))}
</div>

<h3 className="font-heading text-2xl font-bold mb-6" style={{ color: '#ffffff' }}>Frequently Asked Questions</h3>
<div className="space-y-3">
{homeFaqs.map((f) => (
<details key={f.q} className="rounded-xl p-5" style={{ backgroundColor: 'rgba(15,31,53,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
<summary className="cursor-pointer font-heading font-semibold text-base lg:text-lg" style={{ color: '#ffffff' }}>{f.q}</summary>
<p className="mt-3 text-sm lg:text-base leading-relaxed" style={{ color: '#cbd5e1' }}>{f.a}</p>
</details>
))}
</div>
</div>
</div>
</section>
)

export default SeoIntro
