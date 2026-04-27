import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoreTeam from './pages/CoreTeam'
import QuotePage from './pages/QuotePage'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0a1628', color: '#ffffff' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<CoreTeam />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
