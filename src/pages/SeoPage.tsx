import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SeoHead from '../components/SeoHead'
import { seoPages } from '../lib/seoPages'
import type { SeoPage as SeoPageData } from '../lib/seoTypes'
import { SITE_URL, WHATSAPP_URL, PHONE_DISPLAY } from '../lib/seoTypes'

const groupTitles: Record<SeoPageData['group'], string> = {
city: 'Truck Adda by City',
truck: 'Trucks for Rent',
service: 'Our Services',
}

const SeoPage = ({ page }: { page: SeoPageData }) => {
const url = SITE_URL + '/' + page.slug
const jsonLd = [
{
'@context': 'https://schema.org',
'@type': 'FAQPage',
mainEntity: page.faqs.map((f) => ({
'@type': 'Question',
name: f.q,
acceptedAnswer: { '@type': 'Answer', text: f.a },
})),
},
{
'@context': 'https://schema.org',
'@type': 'BreadcrumbList',
itemListElement: [
{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
{ '@type': 'ListItem', position: 2, name: page.navLabel, item: url },
],
},
{
'@context': 'https://schema.org',
'@type': 'Service',
name: page.h1,
serviceType: page.navLabel,
description: page.description,
url,
areaServed: { '@type': 'Country', name: 'Pakistan' },
provider: { '@type': 'Organization', name: 'Truckeya', url: SITE_URL },
},
]

const groups: SeoPageData['group'][] = ['service', 'city', 'truck']

return (
<main style={{ backgroundColor: '#0a1628' }}>
<SeoHead title={page.title} description={page.description} path={'/' + page.slug} jsonLd={jsonLd} />

<section className="pt-32 lg:pt-40 pb-12">
<div className="section-padding">
<div className="max-w-4xl">
<span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>{page.eyebrow}</span>
<h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>{page.h1}</h1>
<p className="text-lg lg:text-xl leading-relaxed mb-8" style={{ color: '#94a3b8' }}>{page.intro}</p>
<div className="flex flex-wrap gap-4">
<Link to="/quote" className="btn-primary">
Get Free Quote
<ArrowRight className="w-4 h-4" />
</Link>
<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
WhatsApp {PHONE_DISPLAY}
</a>
</div>
</div>
</div>
</section>

<section className="py-12" style={{ backgroundColor: '#0f1f35' }}>
<div className="section-padding">
<div className="max-w-4xl">
{page.sections.map((s) => (
<div key={s.heading} className="mb-10">
<h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>{s.heading}</h2>
{s.body.map((b, i) => (
<p key={i} className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>{b}</p>
))}
</div>
))}

<div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: 'rgba(10,22,40,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
<h2 className="font-heading text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>{page.checklistHeading}</h2>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
{page.checklist.map((item) => (
<li key={item} className="flex items-start gap-2 text-sm lg:text-base" style={{ color: '#cbd5e1' }}>
<Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#f97316' }} />
<span>{item}</span>
</li>
))}
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16">
<div className="section-padding">
<div className="max-w-4xl">
<h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Frequently Asked Questions</h2>
<div className="space-y-3">
{page.faqs.map((f) => (
<details key={f.q} className="rounded-xl p-5" style={{ backgroundColor: 'rgba(15,31,53,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
<summary className="cursor-pointer font-heading font-semibold text-base lg:text-lg" style={{ color: '#ffffff' }}>{f.q}</summary>
<p className="mt-3 text-sm lg:text-base leading-relaxed" style={{ color: '#cbd5e1' }}>{f.a}</p>
</details>
))}
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16" style={{ backgroundColor: '#0f1f35' }}>
<div className="section-padding">
<div className="max-w-4xl mb-10 p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)' }}>
<h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Ready to book your truck?</h2>
<p className="mb-5" style={{ color: '#cbd5e1' }}>Tell us what you are shipping and where. We reply with a quote within hours.</p>
<Link to="/quote" className="btn-primary">
Get Free Quote
<ArrowRight className="w-4 h-4" />
</Link>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{groups.map((g) => (
<div key={g}>
<h3 className="font-heading text-lg font-semibold mb-3" style={{ color: '#ffffff' }}>{groupTitles[g]}</h3>
<nav className="flex flex-col gap-2">
{seoPages.filter((p) => (g === 'service' ? ['packing-services-pakistan', 'loading-unloading-services-pakistan', 'all-truck-types-pakistan', 'live-cargo-tracking-pakistan', 'cargo-insurance-pakistan', 'on-time-truck-delivery-pakistan'].includes(p.slug) : p.group === g) && p.slug !== page.slug).map((p) => (
<Link key={p.slug} to={'/' + p.slug} className="text-sm transition-colors hover:text-[#f97316]" style={{ color: '#94a3b8' }}>
{p.navLabel}
</Link>
))}
</nav>
</div>
))}
</div>
</div>
</section>
</main>
)
}

export default SeoPage
