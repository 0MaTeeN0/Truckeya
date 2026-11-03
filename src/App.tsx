import AppRoutes from './AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0a1628', color: '#ffffff' }}>
      <Header />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
