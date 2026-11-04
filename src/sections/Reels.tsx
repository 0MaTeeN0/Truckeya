import { useEffect, useRef } from 'react'
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

const Reels = () => {
const sectionRef = useRef<HTMLDivElement>(null)

useEffect(() => {
const ctx = gsap.context(() => {
gsap.fromTo('.reel-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })
gsap.fromTo('.reel-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.reel-grid', start: 'top 85%' } })
}, sectionRef)
return () => ctx.revert()
}, [])

return (
<section id="reels" ref={sectionRef} className="py-24 lg:py-32" style={{ backgroundColor: '#0f1f35' }}>
<div className="section-padding">
<div className="reel-title text-center mb-12">
<span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>WATCH US IN ACTION</span>
<h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>See Truckeya on the Road</h2>
<p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
Real trucks, real drivers and real deliveries from our Instagram. Press play and watch right here.
</p>
</div>

<div className="reel-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
{reels.map((r) => (
<div key={r.id} className="reel-card rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(10,22,40,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
<iframe
src={'https://www.instagram.com/reel/' + r.id + '/embed'}
title={r.title}
loading="lazy"
allowFullScreen
className="w-full block"
style={{ height: 640, border: 0, backgroundColor: '#ffffff' }}
/>
</div>
))}
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
