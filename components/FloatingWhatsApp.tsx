
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';
import { metaTrack } from '../lib/metaTracking';
import { openDiagnosisModal } from '../lib/utmTracking';

export const FloatingWhatsApp = () => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sincroniza com a lógica do StickyCTA (mostra após 600px)
      setIsStickyVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e?: React.MouseEvent) => {
    openDiagnosisModal(e);
  };

  return (
    <div 
      className={`fixed right-4 md:right-6 z-[100] flex items-center gap-2 md:gap-3 transition-all duration-500 ${
        isStickyVisible ? 'bottom-28 md:bottom-6' : 'bottom-6'
      }`}
    >
      {/* Label/Bubble que acompanha o botão */}
      <div className="bg-white text-slate-900 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 font-bold text-[10px] md:text-sm animate-bounce-slow whitespace-nowrap relative">
        Receber diagnóstico gratuito
        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-white"></div>
      </div>

      <button
        onClick={handleClick}
        className="bg-[#25D366] text-white w-12 h-12 md:w-16 md:h-16 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        <MessageCircle className="w-7 h-7 md:w-8 h-8 relative z-10 fill-white" />
      </button>
    </div>
  );
};
