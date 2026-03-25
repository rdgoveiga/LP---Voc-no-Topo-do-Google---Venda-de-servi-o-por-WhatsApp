
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';
import { metaTrack } from '../lib/metaTracking';
import { openDiagnosisModal } from '../lib/utmTracking';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após rolar 600px (geralmente após a primeira dobra)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e?: React.MouseEvent) => {
    openDiagnosisModal(e);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-[90] md:hidden transition-all duration-500 transform translate-y-0 animate-in fade-in slide-in-from-bottom-10">
      <button
        onClick={handleClick}
        className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-xl shadow-[0_-10px_40px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3 text-lg uppercase tracking-tight border-b-4 border-amber-700/50 active:scale-95"
      >
        Quero o Método Agora
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};
