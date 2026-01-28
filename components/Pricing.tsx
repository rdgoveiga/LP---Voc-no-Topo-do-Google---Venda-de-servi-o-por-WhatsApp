
import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ShieldCheck, Zap, ArrowRight, Clock, Shield } from 'lucide-react';

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
    window.open("https://wa.me/5521985899548?text=Olá! Gostaria de saber mais sobre o Método Você no Topo do Google.", "_blank");
  };

  return (
    <Section id="pricing" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Urgency Timer Bar */}
        <div className="w-full mb-12">
          <div className="bg-[#1a0a0a] border border-red-900/40 py-4 px-6 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-4 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </div>
              <p className="text-red-600 text-sm font-black uppercase tracking-widest">
                Vagas limitadas para este mês:
              </p>
            </div>
            <div className="flex items-center gap-3 bg-red-600/10 px-4 py-2 rounded-xl border border-red-600/20">
              <Clock className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-black text-2xl md:text-3xl font-mono tabular-nums leading-none">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="relative bg-[#0a1120] rounded-[3rem] border border-slate-800 p-8 md:p-20 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-visible flex flex-col items-center text-center">
          
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
            <span className="bg-[#f59e0b] text-slate-900 font-black px-12 py-4 rounded-full text-xs md:text-sm uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(245,158,11,0.5)]">
              Atendimento Exclusivo
            </span>
          </div>

          {/* Product Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight leading-tight max-w-3xl relative z-10">
            Conheça agora o <span className="text-amber-500">Método Você no Topo do Google Local™</span>
          </h2>

          {/* Call to Action description */}
          <div className="mb-14 relative z-10">
            <p className="text-slate-300 text-xl md:text-2xl font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
              O seu negócio merece destaque e <span className="text-white font-bold underline decoration-amber-500/30 underline-offset-8">clientes todos os dias</span>. 
            </p>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto">
              Clique no botão abaixo para receber um <span className="text-amber-500 font-bold">diagnóstico gratuito</span> e um orçamento personalizado para sua região.
            </p>
          </div>

          {/* Centered CTA Button with Enhanced Visuals */}
          <div className="w-full max-w-lg relative z-10 mb-16">
            <div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Button 
              size="xl" 
              onClick={handleBuyClick} 
              className="w-full bg-[#f59e0b] hover:bg-amber-400 text-slate-900 shadow-[0_20px_60px_rgba(245,158,11,0.4)] hover:shadow-[0_25px_80px_rgba(245,158,11,0.6)] text-xl md:text-2xl font-black py-8 rounded-[2rem] group transition-all transform hover:scale-[1.05] active:scale-[0.98] flex items-center justify-center border-b-4 border-amber-700/50"
            >
              Falar com Especialista no WhatsApp
              <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <p className="text-slate-500 text-sm mt-6 italic font-medium tracking-wide">
              *Análise técnica de viabilidade inclusa gratuitamente sem compromisso.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-xs md:text-sm text-slate-400 font-bold uppercase tracking-[0.2em] relative z-10 w-full pt-10 border-t border-slate-800/50">
            <div className="flex items-center gap-3 hover:text-slate-200 transition-colors cursor-default">
              <ShieldCheck className="w-6 h-6 text-[#f59e0b]" />
              <span>Garantia de Entrega</span>
            </div>
            <div className="flex items-center gap-3 hover:text-slate-200 transition-colors cursor-default">
              <Zap className="w-6 h-6 text-[#f59e0b]" />
              <span>Início imediato</span>
            </div>
            <div className="flex items-center gap-3 hover:text-slate-200 transition-colors cursor-default">
              <Shield className="w-6 h-6 text-[#f59e0b]" />
              <span>Suporte Dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
