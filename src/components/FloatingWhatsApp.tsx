"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6283154701592?text=Halo%20Bern%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 animate-pulse-slow"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
