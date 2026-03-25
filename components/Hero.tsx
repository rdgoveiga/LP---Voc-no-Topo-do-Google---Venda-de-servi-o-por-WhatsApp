
import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, Clock, Gift } from 'lucide-react';
import { CONFIG } from '../config';
import { metaTrack } from '../lib/metaTracking';
import { ABVersion } from '../lib/abTest';
import { openDiagnosisModal } from '../lib/utmTracking';

interface HeroProps {
  version: ABVersion;
}

export const Hero: React.FC<HeroProps> = ({ version }) => {
  const [timeLeft, setTimeLeft] = useState(261); // 4:21 = 261 seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  const handleCTA = (e?: React.MouseEvent) => {
    openDiagnosisModal(e);
  };

  if (version === 'B') {
    return (
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark">
        {/* Background Image - Adjusted positioning to clear the face */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-[center_right_-80px] md:bg-[right_center] opacity-40 transition-opacity duration-1000 scale-105"
            style={{ backgroundImage: `url('${CONFIG.images.heroBackground}')` }}
            aria-hidden="true"
          ></div>
          {/* Enhanced gradient for better contrast and separation */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent md:via-brand-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center md:items-start text-left">
          {/* More constrained width (max-w-lg) to avoid invading the face area */}
          <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-900/20 text-amber-400 text-[9px] md:text-[11px] font-black mb-6 md:mb-8 tracking-[0.15em] uppercase shadow-lg shadow-amber-900/20 backdrop-blur-sm">
              <Star className="w-2.5 h-2.5 fill-amber-500 animate-pulse" />
              <span>O segredo das empresas que dominam a região</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white font-serif">
              Domine o <span className="text-amber-500 font-sans">Google Maps</span> e seja a única escolha do seu bairro.
            </h1>
            
            {/* Sub Headline */}
            <p className="text-base md:text-xl text-slate-200 mb-8 md:mb-10 leading-snug font-medium max-w-lg">
              Coloque sua empresa no <span className="text-white font-black text-lg md:text-2xl">Top 3 do Google</span> e receba orçamentos diários de <span className="text-amber-500 font-bold underline decoration-amber-500/30 underline-offset-4">clientes prontos para comprar</span>, sem depender de tráfego pago.
            </p>

            {/* CTA Button */}
            <button 
              onClick={handleCTA}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-xl font-black transition-all duration-300 bg-[#f59e0b] hover:bg-amber-400 text-slate-900 shadow-2xl shadow-amber-500/30 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg tracking-tight active:scale-[0.98] mb-10 md:mb-12 group"
            >
              Quero dominar o mapa da minha região
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>

            {/* Bonus Section */}
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-1 rounded-lg">
                  <Gift className="w-5 h-5 md:w-6 md:h-6 text-amber-500 shrink-0" />
                </div>
                <p className="text-amber-400 font-black text-xs md:text-base leading-tight uppercase tracking-tight max-w-sm md:max-w-md">
                  Bónus de Aceleração: Auditoria completa + Plano de Dominância Local para os primeiros 30 dias.
                </p>
              </div>
              
              {/* Urgency Box */}
              <div className="bg-red-950/40 border border-red-500/20 px-4 py-3 md:px-5 md:py-4 rounded-2xl flex items-center gap-4 shadow-xl backdrop-blur-sm max-w-xs md:max-w-sm">
                <div className="bg-red-500/10 p-2 rounded-full">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-500 animate-pulse" />
                </div>
                <p className="text-red-400 font-bold text-[10px] md:text-xs leading-snug uppercase tracking-wide">
                  Esta oferta acaba em <span className="text-red-500 font-mono text-base md:text-lg ml-1">{formatTime(timeLeft)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Versão A (Mantida conforme anterior para o teste AB)
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center md:bg-right opacity-30 md:opacity-40"
          style={{ backgroundImage: `url('${CONFIG.images.heroBackground}')` }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-24 pb-16 flex flex-col justify-center flex-1">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] md:text-xs font-bold mb-8 badge-pulse uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span>Método validado por + de 200 empresas</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8 text-white font-serif">
            Saia do invisível para o <span className="text-gold-gradient">primeiro lugar no Google Local.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Transforme o seu perfil do Google em uma <span className="text-white font-bold">máquina de atração</span> de <span className="text-amber-500 font-bold">clientes locais</span>, sem anúncios.
          </p>

          <button 
            onClick={handleCTA}
            className="inline-flex items-center justify-center rounded-lg font-bold bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-xl px-8 py-4 text-base md:text-lg transition-all active:scale-95"
          >
            Quero ficar no topo do Google
            <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};
