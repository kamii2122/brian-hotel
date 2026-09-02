import { MessageCircle } from "lucide-react";

/* ============================================
   WhatsAppButton Component
   Floating WhatsApp button visible on all pages
   ============================================ */

const WHATSAPP_NUMBER = "254794554119";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}