
import React from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, Check } from 'lucide-react';
import { CONFIG } from '../config';

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(CONFIG.links.whatsapp, "_blank");
  };

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex flex-col overflow-hidden">
      {/* IMAGEM DE FUNDO - Agora vinda do config.ts */}
      <div className="absolute inset-0 z-0">
        <img 
          src={CONFIG.images.heroBackground} 
          alt="Fundo Método Você no Topo do Google" 
          className="w-full h-full object-cover opacity-30 md:opacity-40"
          onError={(e) => {
            // Fallback caso a imagem local não exista
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark"></div>
      </div>

      {/* Efeitos de Luz de Fundo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 md:bg-amber-500/20 rounded-full blur-[80px] md:blur-[100px] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-12 md:pb-16 flex flex-col items-center text-center flex-1 justify-center">
        
        {/* BADGE SUPERIOR - SERVIÇO VALIDADO */}
        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs md:text-base font-extrabold mb-8 md:mb-12 badge-pulse shadow-[0_0_20px_rgba(245,158,11,0.1)] backdrop-blur-xl tracking-tight">
          <Star className="w-4 h-4 md:w-5 md:h-5 fill-amber-500 animate-[spin_4s_linear_infinite]" />
          <span className="uppercase tracking-widest leading-none">Serviço validado por + de 200 empresas</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white font-serif drop-shadow-2xl px-2">
          Saia do invisível para o <br className="hidden md:block" />
          <span className="text-gold-gradient">primeiro lugar no Google Local.</span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-2">
          Pare de perder clientes para a concorrência. Através do <span className="text-amber-500 font-bold">Método Você no Topo do Google Local™</span> transformamos o seu perfil do Google em uma <span className="text-white font-bold">máquina de atração de clientes locais</span> e aumentando seu faturamento.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center w-full mb-10 px-4">
          <Button size="xl" onClick={handleWhatsAppClick} className="cta-button-pulse w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-2xl">
            Quero Falar com um Especialista
            <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </div>

        {/* BARRA DE CONFIANÇA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-[10px] md:text-sm font-medium text-slate-300 bg-slate-900/40 py-3 md:py-3 px-6 md:px-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 mb-6 md:mb-10 mx-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="whitespace-nowrap">Atendimento 100% Personalizado</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-amber-500 font-bold">
            <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="text-center">Resultados percebidos a curto prazo.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
