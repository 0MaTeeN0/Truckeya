import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import SeoPage from './pages/SeoPage'
import SeoHead from './components/SeoHead'
import { seoPages, homeFaqs } from './lib/seoPages'

const QuotePage = lazy(() => import('./pages/QuotePage'))
const TrackPage = lazy(() => import('./pages/TrackPage'))

const homeLd = [
{
'@context': 'https://schema.org',
'@type': 'FAQPage',
mainEntity: homeFaqs.map((f) => ({
'@type': 'Question',
name: f.q,
acceptedAnswer: { '@type': 'Answer', text: f.a },
})),
},
]

const AppRoutes = () => (
<Suspense fallback={null}>
<Routes>
<Route
path="/"
element={
<>
<SeoHead
title="Truck Adda Pakistan | Book Trucks Online | Truckeya"
description="Online truck adda for Pakistan. Book Shehzore, Mazda, Container and Reefer trucks with instant quotes, packing, loading and live GPS tracking across all of Pakistan."
path="/"
jsonLd={homeLd}
/>
<Home />
</>
}
/>
<Route path="/team" element={<Navigate to="/" replace />} />
<Route
path="/quote"
element={
<>
<SeoHead
title="Get a Free Truck Quote in Pakistan | Truckeya"
description="Request a free truck quote in minutes. Enter your pickup, drop and cargo details and Truckeya will reply with a price for trucks anywhere in Pakistan."
path="/quote"
/>
<QuotePage />
</>
}
/>
<Route
path="/track"
element={
<>
<SeoHead
title="Track Your Shipment | Truckeya Pakistan"
description="Track your cargo with Truckeya. Enter your tracking details to see the status of your truck booking anywhere in Pakistan."
path="/track"
/>
<TrackPage />
</>
}
/>
{seoPages.map((p) => (
<Route key={p.slug} path={'/' + p.slug} element={<SeoPage page={p} />} />
))}
</Routes>
</Suspense>
)

export default AppRoutes
