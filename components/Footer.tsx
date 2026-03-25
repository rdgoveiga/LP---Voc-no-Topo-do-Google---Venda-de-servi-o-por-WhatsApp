
import React from 'react';
import { CONFIG } from '../config';
import { MessageCircle } from 'lucide-react';
import { metaTrack } from '../lib/metaTracking';
import { handleWhatsAppRedirect } from '../lib/utmTracking';

export const Footer = () => {
  const handleWhatsAppClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const eventId = `lead_footer_${Date.now()}`;
    metaTrack('Lead', eventId, { content_name: 'Footer WhatsApp Click' });
    handleWhatsAppRedirect();
  };

  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <span className="text-xl md:text-2xl font-serif font-bold text-white">
            Método Você no Topo do <span className="text-amber-500">Google Local™</span>
          </span>
        </div>

        <div className="mb-12">
            <p className="text-slate-400 mb-6 text-sm md:text-base">Ainda tem alguma dúvida sobre como o método funciona?</p>
            <button 
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-lg shadow-emerald-900/20"
            >
                <MessageCircle className="w-5 h-5" />
                Falar com consultor agora
            </button>
        </div>

        <div className="h-px w-full max-w-xs mx-auto bg-slate-800 mb-8"></div>

        <p className="text-slate-500 text-[10px] md:text-xs mb-8 uppercase tracking-widest">
          © {new Date().getFullYear()} Rodrigo Veiga. Todos os direitos reservados.
        </p>
        
        <div className="flex justify-center flex-wrap gap-6 text-[10px] md:text-xs text-slate-600">
          <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Aviso Legal</a>
        </div>

        <p className="mt-12 text-slate-700 text-[9px] max-w-2xl mx-auto leading-relaxed">
            Este site não faz parte do Google ou do Facebook. Além disso, este site não é endossado pelo Google ou pelo Facebook de nenhuma maneira. Google e Facebook são marcas comerciais de suas respectivas empresas.
        </p>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
};
