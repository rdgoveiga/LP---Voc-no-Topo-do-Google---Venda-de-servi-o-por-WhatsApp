
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';

export const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(CONFIG.links.whatsapp, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2"
      aria-label="Falar no WhatsApp"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold">
        Falar com Especialista
      </span>
      <MessageCircle className="w-7 h-7 fill-white/20" />
      
      {/* Notificação Visual */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </button>
  );
};
