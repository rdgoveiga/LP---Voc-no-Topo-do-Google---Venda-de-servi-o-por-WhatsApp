
import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ShieldCheck, Zap, ArrowRight, Clock, Shield } from 'lucide-react';
import { CONFIG } from '../config';

export const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(420); // 7 minutes in seconds

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
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBuyClick = () => {
    window.open(CONFIG.links.whatsapp, "_blank");
  };

  return (
    <Section id="pricing" className="py-12 md:py-24 px-4 overflow-visible">
      <div className="max-w-4xl mx-auto">
        {/* Urgency Timer Bar */}
        <div className="w-full mb-10 md:mb-12">
          <div className="bg-[#1a0a0a] border border-red-900/40 py-3 md:py-4 px-4 md:px-6 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 text-center">
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </div>
              <p className="text-red-600 text-[10px] md:text-sm font-black uppercase tracking-widest leading-none">
                Vagas limitadas para este mês:
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-red-600/10 px-4 py-1.5 md:py-2 rounded-xl border border-red-600/20">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
              <span className="text-red-600 font-black text-xl md:text-3xl font-mono tabular-nums leading-none">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="relative bg-[#0a1120] rounded-[2rem] md:rounded-[3rem] border border-slate-800 p-6 sm:p-10 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-visible flex flex-col items-center text-center">
          
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

          {/* Badge */}
          <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
            <span className="bg-[#f59e0b] text-slate-900 font-black px-6 md:px-12 py-2.5 md:py-4 rounded-full text-[10px] md:text-sm uppercase tracking-[0.2em] shadow-lg">
              Atendimento Exclusivo
            </span>
          </div>

          {/* Product Title */}
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 md:mb-10 tracking-tight leading-[1.2] max-w-3xl relative z-10">
            Conheça agora o <span className="text-amber-500">Método Você no Topo do Google™</span>
          </h2>

          {/* Call to Action description */}
          <div className="mb-10 md:mb-14 relative z-10">
            <p className="text-slate-300 text-base md:text-2xl font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
              O seu negócio merece destaque e <span className="text-white font-bold underline decoration-amber-500/30 underline-offset-4">clientes todos os dias</span>. 
            </p>
            <p className="text-slate-400 text-sm md:text-xl max-w-xl mx-auto leading-relaxed">
              Clique no botão abaixo para receber um <span className="text-amber-500 font-bold">diagnóstico gratuito</span> e orçamento.
            </p>
          </div>

          {/* Centered CTA Button */}
          <div className="w-full max-w-lg relative z-10 mb-10 md:mb-16">
            <Button 
              size="xl" 
              onClick={handleBuyClick} 
              className="w-full bg-[#f59e0b] hover:bg-amber-400 text-slate-900 shadow-xl text-lg md:text-2xl font-black py-6 md:py-8 rounded-2xl md:rounded-[2rem] group transform transition-all active:scale-[0.98] flex items-center justify-center border-b-4 border-amber-700/50"
            >
              Falar no WhatsApp
              <ArrowRight className="ml-3 md:ml-4 w-6 h-6 md:w-7 md:h-7" />
            </Button>
            <p className="text-slate-500 text-[10px] md:text-sm mt-5 italic font-medium tracking-wide leading-tight">
              *Análise técnica de viabilidade inclusa sem compromisso.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-5 gap-x-8 md:gap-x-12 text-[10px] md:text-sm text-slate-400 font-bold uppercase tracking-[0.15em] relative z-10 w-full pt-8 md:pt-10 border-t border-slate-800/50">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#f59e0b] shrink-0" />
              <span>Garantia de Entrega</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#f59e0b] shrink-0" />
              <span>Início imediato</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#f59e0b] shrink-0" />
              <span>Suporte Dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
