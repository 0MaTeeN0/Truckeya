import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923021223388"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  )
}

export default WhatsAppButton
