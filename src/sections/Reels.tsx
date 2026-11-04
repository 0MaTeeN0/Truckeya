import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons'
import { INSTAGRAM_URL, FACEBOOK_URL } from '../lib/seoTypes'

gsap.registerPlugin(ScrollTrigger)

const reels = [
{ id: 'DeNDsIGJ62r', title: 'How logistics works at Truckeya at night' },
{ id: 'DanfaU-tRPj', title: 'House, factory and office shifting with Truckeya' },
{ id: 'Da5pV4lNF-v', title: 'Cargo insurance with Truckeya' },
{ id: 'Dast1TGNtOr', title: 'Safe delivery with live tracking' },
]

const CARD_GAP = 24

const Reels = () => {
const sectionRef = useRef<HTMLDivElement>(null)
const trackRef = useRef<HTMLDivElement>(null)
const [active, setActive] = useState(0)

useEffect(() => {
const ctx = gsap.context(() => {
gsap.fromTo('.reel-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
gsap.fromTo('.reel-carousel', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.reel-carousel', start: 'top 90%' } })
}, sectionRef)
return () => ctx.revert()
}, [])

const getStep = () => {
const el = trackRef.current
if (!el) return 360
const card = el.querySelector('.reel-card') as HTMLElement | null
return card ? card.offsetWidth + CARD_GAP : 360
}

const goTo = (index: number) => {
const el = trackRef.current
if (!el) return
const next = Math.max(0, Math.min(reels.length - 1, index))
el.scrollTo({ left: next * getStep(), behavior: 'smooth' })
setActive(next)
}

const onScroll = () => {
const el = trackRef.current
if (!el) return
setActive(Math.max(0, Math.min(reels.length - 1, Math.round(el.scrollLeft / getStep()))))
}

const arrowStyle = { backgroundColor: '#f97316', color: '#ffffff', width: 48, height: 48, borderRadius: 9999, border: 0, fontSize: 24, lineHeight: '48px', cursor: 'pointer' }

return (
<section id="reels" ref={sectionRef} className="py-24 lg:py-32" style={{ backgroundColor: '#0f1f35' }}>
<div className="section-padding">
<div className="reel-title text-center mb-12">
<span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>WATCH US IN ACTION</span>
<h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>See Truckeya on the Road</h2>
<p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
Real trucks, real drivers and real deliveries from our Instagram. Press play, then use the arrows to see more videos.
</p>
</div>

<div className="reel-carousel max-w-5xl mx-auto">
<div
ref={trackRef}
onScroll={onScroll}
className="reel-track flex overflow-x-auto"
style={{ gap: CARD_GAP, scrollSnapType: 'x mandatory', scrollbarWidth: 'none', paddingBottom: 8 }}
>
{reels.map((r) => (
<div
key={r.id}
className="reel-card rounded-2xl overflow-hidden flex-none"
style={{ width: 360, maxWidth: '85vw', scrollSnapAlign: 'center', backgroundColor: '#ffffff', border: '1px solid rgba(255,255,255,0.08)' }}
>
<iframe
src={'https://www.instagram.com/reel/' + r.id + '/embed'}
title={r.title}
loading="lazy"
allowFullScreen
className="w-full block"
style={{ height: 760, border: 0, backgroundColor: '#ffffff' }}
/>
</div>
))}
</div>

<div className="flex items-center justify-center gap-6 mt-8">
<button type="button" aria-label="Previous video" onClick={() => goTo(active - 1)} disabled={active === 0} style={{ ...arrowStyle, opacity: active === 0 ? 0.4 : 1 }}>
&#8249;
</button>
<div className="flex items-center gap-2">
{reels.map((r, i) => (
<button
key={r.id}
type="button"
aria-label={'Go to video ' + (i + 1)}
onClick={() => goTo(i)}
style={{ width: i === active ? 28 : 10, height: 10, borderRadius: 9999, border: 0, cursor: 'pointer', backgroundColor: i === active ? '#f97316' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease' }}
/>
))}
</div>
<button type="button" aria-label="Next video" onClick={() => goTo(active + 1)} disabled={active === reels.length - 1} style={{ ...arrowStyle, opacity: active === reels.length - 1 ? 0.4 : 1 }}>
&#8250;
</button>
</div>
</div>

<div className="flex flex-wrap justify-center gap-4 mt-12">
<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
<InstagramIcon className="w-4 h-4" />
Follow on Instagram
</a>
<a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
<FacebookIcon className="w-4 h-4" />
Follow on Facebook
</a>
</div>
</div>
</section>
)
}

export default Reels
