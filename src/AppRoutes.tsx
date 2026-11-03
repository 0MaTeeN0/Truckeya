import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'

const QuotePage = lazy(() => import('./pages/QuotePage'))
const TrackPage = lazy(() => import('./pages/TrackPage'))

const AppRoutes = () => (
<Suspense fallback={null}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/team" element={<Navigate to="/" replace />} />
<Route path="/quote" element={<QuotePage />} />
<Route path="/track" element={<TrackPage />} />
</Routes>
</Suspense>
)

export default AppRoutes
