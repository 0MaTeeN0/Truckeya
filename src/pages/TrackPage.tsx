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
  'mailsi': [29.8008, 72.1744],
  'lodhran': [29.5339, 71.6324],
  'pakpattan': [30.3436, 73.3894],
  'arifwala': [30.2906, 73.0653],
  'haroonabad': [29.6122, 73.1386],
  'hasilpur': [29.6987, 72.554],
  'bahawalnagar': [29.9944, 73.2536],
  'chishtian': [29.7956, 72.8577],
  'fort abbas': [29.1953, 72.852],
  'yazman': [29.1214, 71.7461],
  'ahmadpur east': [29.1431, 71.257],
  'ahmedpur east': [29.1431, 71.257],
  'khanpur': [28.6475, 70.6628],
  'liaquatpur': [28.93, 70.95],
  'uch sharif': [29.2333, 71.0667],
  'muzaffargarh': [30.0703, 71.1933],
  'alipur': [29.3797, 70.9114],
  'jatoi': [29.5167, 70.8333],
  'kot addu': [30.47, 70.9667],
  'layyah': [30.9693, 70.9428],
  'karor lal esan': [31.2, 70.95],
  'taunsa': [30.705, 70.65],
  'rajanpur': [29.1044, 70.325],
  'jampur': [29.6431, 70.5944],
  'fazilpur': [29.32, 70.44],
  'dg khan': [30.0489, 70.6455],
  'd g khan': [30.0489, 70.6455],
  'di khan': [31.8314, 70.9017],
  'd i khan': [31.8314, 70.9017],
  'rahimyar khan': [28.4202, 70.2952],
  'ryk': [28.4202, 70.2952],
  'mandi bahauddin': [32.5861, 73.4917],
  'phalia': [32.4333, 73.5833],
  'malakwal': [32.55, 73.2],
  'bhalwal': [32.2667, 72.9],
  'bhera': [32.4833, 72.9167],
  'khushab': [32.2956, 72.3525],
  'jauharabad': [32.29, 72.28],
  'sillanwali': [31.82, 72.55],
  'shahpur': [32.27, 72.47],
  'kallar kahar': [32.78, 72.7],
  'quaidabad': [32.4417, 71.8667],
  'shorkot': [30.8333, 72.1167],
  'toba tek singh': [30.9709, 72.4826],
  'gojra': [31.15, 72.6833],
  'kamalia': [30.73, 72.6469],
  'pir mahal': [30.8667, 72.4333],
  'chichawatni': [30.53, 72.69],
  'harappa': [30.62, 72.87],
  'mian channu': [30.4411, 72.3544],
  'kabirwala': [30.4, 71.8667],
  'samundri': [31.06, 72.96],
  'jaranwala': [31.3333, 73.4167],
  'tandlianwala': [31.0333, 73.1333],
  'sangla hill': [31.7167, 73.3833],
  'nankana sahib': [31.45, 73.7],
  'hafizabad': [32.0709, 73.688],
  'pindi bhattian': [31.8964, 73.2742],
  'wazirabad': [32.4433, 74.12],
  'daska': [32.3244, 74.35],
  'sambrial': [32.4783, 74.3547],
  'pasrur': [32.2631, 74.6644],
  'narowal': [32.1019, 74.8731],
  'shakargarh': [32.2636, 75.1597],
  'gujar khan': [33.2542, 73.3047],
  'kharian': [32.8167, 73.8667],
  'lalamusa': [32.7, 73.95],
  'dina': [33.03, 73.6],
  'mangla': [33.15, 73.65],
  'sarai alamgir': [32.9, 73.75],
  'chakwal': [32.9328, 72.863],
  'talagang': [32.925, 72.415],
  'pind dadan khan': [32.5867, 73.05],
  'murree': [33.907, 73.3943],
  'fateh jang': [33.5667, 72.6333],
  'hasan abdal': [33.819, 72.689],
  'jand': [33.4333, 72.0167],
  'pindi gheb': [33.24, 72.27],
  'pindi': [33.5651, 73.0169],
  'wah': [33.7715, 72.7511],
  'raiwind': [31.25, 74.2167],
  'kot radha kishan': [31.17, 74.1],
  'chunian': [30.9575, 73.9778],
  'pattoki': [31.02, 73.85],
  'renala khurd': [30.8833, 73.6],
  'depalpur': [30.67, 73.65],
  'dunyapur': [29.8, 71.74],
  'kahror pakka': [29.6244, 71.9164],
  'shujabad': [29.8814, 71.2931],
  'muridke': [31.8026, 74.261],
  'kamoke': [31.9742, 74.2236],
  'ferozewala': [31.62, 74.22],
  'shahdara': [31.6167, 74.2833],
  'lahore cantt': [31.5, 74.4],
  'mehar': [27.1833, 67.8167],
  'dadu': [26.7319, 67.775],
  'sehwan': [26.4167, 67.8667],
  'jamshoro': [25.4333, 68.28],
  'kotri': [25.3667, 68.3],
  'thatta': [24.7461, 67.9239],
  'badin': [24.6556, 68.837],
  'tando allahyar': [25.46, 68.7172],
  'tando adam': [25.7628, 68.6614],
  'tando muhammad khan': [25.1239, 68.5372],
  'tando jam': [25.43, 68.53],
  'matiari': [25.5972, 68.4472],
  'hala': [25.8128, 68.4231],
  'shahdadpur': [25.9261, 68.6228],
  'sanghar': [26.0467, 68.9481],
  'khairpur': [27.5295, 68.7592],
  'rohri': [27.69, 68.9],
  'kot diji': [27.34, 68.71],
  'pano aqil': [27.85, 69.11],
  'ghotki': [28.0061, 69.3153],
  'daharki': [28.4667, 69.6833],
  'mirpur mathelo': [28.0167, 69.55],
  'ubauro': [28.1667, 69.7333],
  'shikarpur': [27.9556, 68.6382],
  'kandhkot': [28.2447, 69.1747],
  'kashmore': [28.4326, 69.5836],
  'umerkot': [25.3633, 69.7361],
  'mithi': [24.7333, 69.8],
  'islamkot': [24.7, 70.18],
  'nagarparkar': [24.35, 70.76],
  'kunri': [25.18, 69.57],
  'digri': [25.16, 69.11],
  'naushahro feroze': [26.84, 68.1228],
  'moro': [26.662, 68.0],
  'sakrand': [26.13, 68.27],
  'dokri': [27.38, 68.1],
  'sujawal': [24.6, 68.07],
  'mirpur bathoro': [24.73, 68.27],
  'mirpurkhas': [25.5276, 69.0159],
  'nawab shah': [26.2442, 68.41],
  'nooriabad': [25.16, 68.0],
  'port qasim': [24.7833, 67.3333],
  'sibi': [29.543, 67.8773],
  'dera murad jamali': [28.5467, 68.2231],
  'dera bugti': [29.0333, 69.15],
  'usta muhammad': [28.1775, 68.0436],
  'jhal magsi': [28.29, 67.44],
  'bela': [26.22, 66.31],
  'uthal': [25.8044, 66.6208],
  'surab': [28.49, 66.26],
  'kalat': [29.0258, 66.59],
  'mastung': [29.7995, 66.8453],
  'nushki': [29.5528, 66.0236],
  'chaman': [30.921, 66.4597],
  'qila abdullah': [30.73, 66.66],
  'pishin': [30.58, 66.99],
  'zhob': [31.3411, 69.4481],
  'loralai': [30.3705, 68.5979],
  'ziarat': [30.38, 67.7258],
  'muslim bagh': [30.8, 67.73],
  'kharan': [28.5833, 65.4167],
  'panjgur': [26.97, 64.09],
  'pasni': [25.2633, 63.4714],
  'ormara': [25.21, 64.6358],
  'jiwani': [25.05, 61.74],
  'dalbandin': [28.89, 64.41],
  'saidu sharif': [34.7459, 72.3556],
  'swat': [34.7717, 72.36],
  'charsadda': [34.1453, 71.7308],
  'swabi': [34.12, 72.47],
  'haripur': [33.9942, 72.9333],
  'mansehra': [34.3333, 73.2],
  'batagram': [34.68, 73.02],
  'besham': [34.93, 72.88],
  'dir': [35.2, 71.88],
  'timergara': [34.8333, 71.8333],
  'chitral': [35.8518, 71.7864],
  'bannu': [32.9889, 70.6056],
  'lakki marwat': [32.607, 70.912],
  'tank': [32.2167, 70.3833],
  'karak': [33.1167, 71.0933],
  'hangu': [33.53, 71.06],
  'parachinar': [33.8987, 70.1],
  'landi kotal': [34.0989, 71.1417],
  'jamrud': [33.9833, 71.3833],
  'tarbela': [34.09, 72.69],
  'daggar': [34.51, 72.49],
  'kalam': [35.49, 72.58],
  'risalpur': [34.06, 71.99],
  'gilgit': [35.9208, 74.308],
  'skardu': [35.2971, 75.6333],
  'hunza': [36.3167, 74.65],
  'karimabad': [36.3167, 74.65],
  'chilas': [35.4128, 74.1044],
  'mirpur': [33.1478, 73.7515],
  'kotli': [33.5186, 73.9022],
  'bhimber': [32.975, 74.0786],
  'rawalakot': [33.8578, 73.7603],
  'bagh': [33.9811, 73.7761],
}

type Shipment = {
id: string
from: string
to: string
truck: string
status: string
current: string
updated: string
note: string; name?: string; customer?: string
}

const STEPS = ['Booked', 'Picked Up', 'In Transit', 'Delivered']

const coords = (city: string): [number, number] | null => CITIES[(city || '').split(',')[0].replace(/\./g, '').replace(/\s+city$/i, '').replace(/\s+/g, ' ').trim().toLowerCase()] || null

const stepIndex = (status: string) => {
const s = (status || '').toLowerCase()
const i = STEPS.findIndex((x) => x.toLowerCase() === s)
if (i >= 0) return i
if (s.includes('out for')) return 2
  if (s.includes('deliver')) return 3
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

const geoCache: Record<string, [number, number] | null> = {}
const geocode = async (city: string): Promise<[number, number] | null> => {
const key = (city || '').trim().toLowerCase()
if (!key) return null
const known = coords(city)
if (known) return known
if (key in geoCache) return geoCache[key]
let found: [number, number] | null = null
try {
const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=pk&q=' + encodeURIComponent(city + ', Pakistan'))
const data = await res.json()
if (data && data[0]) found = [parseFloat(data[0].lat), parseFloat(data[0].lon)]
} catch {
found = null
}
geoCache[key] = found
return found
}

const pin = (L: any, color: string, label: string) => L.divIcon({
className: '',
html: '<div style="position:relative;width:34px;height:44px"><svg width="34" height="44" viewBox="0 0 34 44"><path d="M17 1C8 1 1 8 1 17c0 12 16 26 16 26s16-14 16-26C33 8 26 1 17 1z" fill="' + color + '" stroke="#ffffff" stroke-width="2"/><circle cx="17" cy="17" r="9" fill="#ffffff"/></svg><div style="position:absolute;top:7px;left:0;width:34px;text-align:center;font-size:13px;font-weight:700;line-height:20px;color:#0a1628">' + label + '</div></div>',
iconSize: [34, 44],
iconAnchor: [17, 44],
tooltipAnchor: [0, -40],
})

useEffect(() => {
if (!shipment || !mapEl.current) return
let map: any = null
let cancelled = false
Promise.all([loadLeaflet(), geocode(shipment.from), geocode(shipment.to), geocode(shipment.current)])
.then(([L, from, to, cur]) => {
if (cancelled || !mapEl.current) return
const points = [from, cur, to].filter(Boolean) as [number, number][]
if (points.length === 0) return
map = L.map(mapEl.current, { scrollWheelZoom: false })
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; OpenStreetMap contributors' }).addTo(map)
if (from && to) L.polyline([from, to], { color: '#94a3b8', weight: 3, dashArray: '8 8' }).addTo(map)
if (from && cur) L.polyline([from, cur], { color: '#f97316', weight: 5 }).addTo(map)
if (from) L.marker(from, { icon: pin(L, '#16a34a', 'A') }).addTo(map).bindTooltip('Start: ' + shipment.from)
if (to) L.marker(to, { icon: pin(L, '#dc2626', 'B') }).addTo(map).bindTooltip('Destination: ' + shipment.to)
if (cur) L.marker(cur, { icon: pin(L, '#f97316', '&#128666;'), zIndexOffset: 1000 }).addTo(map).bindTooltip('Truck now: ' + shipment.current)
if (points.length === 1) map.setView(points[0], 9)
else map.fitBounds(points, { padding: [50, 50], maxZoom: 9 })
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

<div className="grid grid-cols-4 gap-2 mb-8">
{STEPS.map((s, i) => (
<div key={s} className="text-center">
<div className="h-2 rounded-full mb-2" style={{ backgroundColor: i <= active ? '#f97316' : 'rgba(255,255,255,0.1)' }} />
<span className="text-xs" style={{ color: i <= active ? '#ffffff' : '#94a3b8' }}>{s}</span>
</div>
))}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {(shipment.name || shipment.customer) && (<div><p className="text-xs uppercase" style={{ color: '#94a3b8' }}>Booked by</p><p style={{ color: '#ffffff' }}>{shipment.name || shipment.customer}</p></div>)}
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
