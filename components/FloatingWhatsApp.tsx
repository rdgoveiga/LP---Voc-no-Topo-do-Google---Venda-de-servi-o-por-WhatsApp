
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';
import { metaTrack } from '../lib/metaTracking';
import { handleWhatsAppRedirect } from '../lib/utmTracking';

export const FloatingWhatsApp = () => {
  const handleClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const eventId = `lead_float_${Date.now()}`;
    metaTrack('Lead', eventId, { content_name: 'Floating WhatsApp Click' });
    handleWhatsAppRedirect();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
      <MessageCircle className="w-8 h-8 relative z-10 fill-white" />
    </button>
  );
};
