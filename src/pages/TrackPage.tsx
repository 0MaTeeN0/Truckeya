import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, MapPin, Truck } from 'lucide-react'

// Paste the Google Apps Script web app URL (ends with /exec) between the quotes below
const TRACKING_API = 'https://script.google.com/macros/s/AKfycbytP37ayLAeB2fqu8U-XWVBKbHlmThUURe4qdJ4asRAaAoNvJDmO8kkn1g-qcIwRBuh/exec'

const CITIES: Record<string, [number, number]> = {
'karachi': [24.8607, 67.0011],
'lahore': [31.5204, 74.3587],
'islamabad': [33.6844, 73.0479],
'rawalpindi': [33.5651, 73.0169],
'faisalabad': [31.4504, 73.135],
'multan': [30.1575, 71.5249],
'peshawar': [34.0151, 71.5249],
'quetta': [30.1798, 66.975],
'hyderabad': [25.396, 68.3578],
'sialkot': [32.4945, 74.5229],
'gujranwala': [32.1877, 74.1945],
'sukkur': [27.7052, 68.8574],
'bahawalpur': [29.3956, 71.6836],
'sargodha': [32.0836, 72.6711],
'gwadar': [25.1216, 62.3254],
'abbottabad': [34.1688, 73.2215],
'mardan': [34.1986, 72.0404],
'sahiwal': [30.6682, 73.1114],
'rahim yar khan': [28.4202, 70.2952],
'jhelum': [32.9425, 73.7257],
'larkana': [27.557, 68.2028],
'nawabshah': [26.2442, 68.41],
'mirpur khas': [25.5276, 69.0159],
'okara': [30.8138, 73.4534],
'dera ghazi khan': [30.0489, 70.6455],
'kasur': [31.1187, 74.4467],
'sheikhupura': [31.7167, 73.985],
'gujrat': [32.5731, 74.075],
'jhang': [31.2681, 72.3181],
'sadiqabad': [28.3062, 70.1301],
'muzaffarabad': [34.37, 73.4711],
'mingora': [34.7717, 72.36],
'kohat': [33.5889, 71.4429],
'khuzdar': [27.8, 66.6167],
'hub': [25.0467, 66.9],
'taxila': [33.746, 72.8397],
'wah cantt': [33.7715, 72.7511],
'attock': [33.7667, 72.3598],
'chiniot': [31.72, 72.9789],
'bhakkar': [31.6334, 71.0654],
'mianwali': [32.5839, 71.5436],
'burewala': [30.1667, 72.65],
'vehari': [30.0452, 72.3489],
'khanewal': [30.3017, 71.932],
'dera ismail khan': [31.8314, 70.9017],
'nowshera': [34.0153, 71.9747],
'jacobabad': [28.2769, 68.4514],
'turbat': [26.0012, 63.0544],
}

type Shipment = {
id: string
from: string
to: string
truck: string
status: string
current: string
updated: string
note: string
}

const STEPS = ['Booked', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered']

const coords = (city: string): [number, number] | null => CITIES[(city || '').trim().toLowerCase()] || null

const stepIndex = (status: string) => {
const s = (status || '').toLowerCase()
const i = STEPS.findIndex((x) => x.toLowerCase() === s)
if (i >= 0) return i
if (s.includes('deliver')) return 4
if (s.includes('transit') || s.includes('reach')) return 2
if (s.includes('pick') || s.includes('load')) return 1
return 0
}

const loadLeaflet = (): Promise<any> => {
const w = window as any
if (w.L) return Promise.resolve(w.L)
return new Promise((resolve, reject) => {
if (!document.getElementById('leaflet-css')) {
const l = document.createElement('link')
l.id = 'leaflet-css'
l.rel = 'stylesheet'
l.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
document.head.appendChild(l)
}
const s = document.createElement('script')
s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
s.onload = () => resolve(w.L)
s.onerror = reject
document.head.appendChild(s)
})
}

const TrackPage = () => {
const [trackingId, setTrackingId] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
const [shipment, setShipment] = useState<Shipment | null>(null)
const mapEl = useRef<HTMLDivElement>(null)

useEffect(() => {
window.scrollTo(0, 0)
}, [])

const handleSearch = async (e: React.FormEvent) => {
e.preventDefault()
const id = trackingId.trim().toUpperCase()
if (!id) return
setError('')
setShipment(null)
if (!TRACKING_API) {
setError('Tracking is not available right now. Please contact us.')
return
}
setLoading(true)
try {
const res = await fetch(`${TRACKING_API}?id=${encodeURIComponent(id)}`)
const data = await res.json()
if (data && data.found) {
setShipment(data as Shipment)
} else {
setError('No shipment found for this tracking ID. Please check the ID and try again.')
}
} catch {
setError('Could not load tracking details. Please try again in a moment.')
}
setLoading(false)
}

useEffect(() => {
if (!shipment || !mapEl.current) return
let map: any = null
let cancelled = false
const from = coords(shipment.from)
const to = coords(shipment.to)
const cur = coords(shipment.current)
loadLeaflet()
.then((L) => {
if (cancelled || !mapEl.current) return
const points = [from, cur, to].filter(Boolean) as [number, number][]
if (points.length === 0) return
map = L.map(mapEl.current, { scrollWheelZoom: false })
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; OpenStreetMap contributors' }).addTo(map)
if (from && to) L.polyline([from, to], { color: '#94a3b8', weight: 3, dashArray: '8 8' }).addTo(map)
if (from && cur) L.polyline([from, cur], { color: '#f97316', weight: 5 }).addTo(map)
if (from) L.circleMarker(from, { radius: 8, color: '#ffffff', weight: 2, fillColor: '#16a34a', fillOpacity: 1 }).addTo(map).bindTooltip('Start: ' + shipment.from)
if (to) L.circleMarker(to, { radius: 8, color: '#ffffff', weight: 2, fillColor: '#dc2626', fillOpacity: 1 }).addTo(map).bindTooltip('Destination: ' + shipment.to)
if (cur) L.circleMarker(cur, { radius: 11, color: '#ffffff', weight: 3, fillColor: '#f97316', fillOpacity: 1 }).addTo(map).bindTooltip('Truck now: ' + shipment.current)
map.fitBounds(points, { padding: [40, 40], maxZoom: 9 })
})
.catch(() => {})
return () => {
cancelled = true
if (map) map.remove()
}
}, [shipment])

const active = shipment ? stepIndex(shipment.status) : 0

const card = { backgroundColor: 'rgba(15,31,53,0.7)', border: '1px solid rgba(255,255,255,0.06)' }

return (
<div className="min-h-screen" style={{ backgroundColor: '#0a1628' }}>
<div className="section-padding pt-32 pb-24">
<Link to="/" className="inline-flex items-center gap-2 mb-8" style={{ color: '#94a3b8' }}>
<ArrowLeft className="w-4 h-4" />
Back to Home
</Link>

<div className="max-w-3xl mx-auto text-center mb-10">
<span className="font-body text-xs tracking-widest uppercase mb-4 block" style={{ color: '#f97316' }}>TRACK YOUR TRUCK</span>
<h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Track Shipment</h1>
<p className="text-lg" style={{ color: '#94a3b8' }}>Enter the tracking ID we gave you to see where your truck is right now.</p>
</div>

<form onSubmit={handleSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
<input type="text" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="e.g. TK-A1B2C3" className="flex-1 px-4 py-3 rounded-xl placeholder-gray-500 focus:outline-none" style={{ backgroundColor: '#0f1f35', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }} required />
<button type="submit" disabled={loading} className="btn-primary">
<Search className="w-4 h-4" />
{loading ? 'Searching...' : 'Track'}
</button>
</form>

{error && <p className="text-center mb-8" style={{ color: '#f87171' }}>{error}</p>}

{shipment && (
<div className="max-w-4xl mx-auto space-y-6">
<div className="rounded-2xl p-6 lg:p-8" style={card}>
<div className="flex flex-wrap items-center justify-between gap-3 mb-6">
<div>
<p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#94a3b8' }}>Tracking ID</p>
<p className="font-heading text-2xl font-bold" style={{ color: '#ffffff' }}>{shipment.id}</p>
</div>
<span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: '#f97316' }}>{shipment.status}</span>
</div>

<div className="grid grid-cols-5 gap-2 mb-8">
{STEPS.map((s, i) => (
<div key={s} className="text-center">
<div className="h-2 rounded-full mb-2" style={{ backgroundColor: i <= active ? '#f97316' : 'rgba(255,255,255,0.1)' }} />
<span className="text-xs" style={{ color: i <= active ? '#ffffff' : '#94a3b8' }}>{s}</span>
</div>
))}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<MapPin className="w-5 h-5 mt-0.5" style={{ color: '#16a34a' }} />
<div>
<p className="text-xs uppercase" style={{ color: '#94a3b8' }}>From</p>
<p style={{ color: '#ffffff' }}>{shipment.from}</p>
</div>
</div>
<div className="flex items-start gap-3">
<MapPin className="w-5 h-5 mt-0.5" style={{ color: '#dc2626' }} />
<div>
<p className="text-xs uppercase" style={{ color: '#94a3b8' }}>To</p>
<p style={{ color: '#ffffff' }}>{shipment.to}</p>
</div>
</div>
<div className="flex items-start gap-3">
<Truck className="w-5 h-5 mt-0.5" style={{ color: '#f97316' }} />
<div>
<p className="text-xs uppercase" style={{ color: '#94a3b8' }}>Truck now at</p>
<p style={{ color: '#ffffff' }}>{shipment.current || 'Not updated yet'}</p>
</div>
</div>
<div>
<p className="text-xs uppercase" style={{ color: '#94a3b8' }}>Truck type</p>
<p style={{ color: '#ffffff' }}>{shipment.truck || '-'}</p>
</div>
<div>
<p className="text-xs uppercase" style={{ color: '#94a3b8' }}>Last updated</p>
<p style={{ color: '#ffffff' }}>{shipment.updated || '-'}</p>
</div>
{shipment.note && (
<div>
<p className="text-xs uppercase" style={{ color: '#94a3b8' }}>Note</p>
<p style={{ color: '#ffffff' }}>{shipment.note}</p>
</div>
)}
</div>
</div>

<div className="rounded-2xl overflow-hidden" style={card}>
<div ref={mapEl} style={{ height: 380, width: '100%' }} />
<p className="text-xs p-3" style={{ color: '#94a3b8' }}>Green = start, orange = truck location, red = destination. Map is approximate.</p>
</div>
</div>
)}
</div>
</div>
)
}

export default TrackPage
