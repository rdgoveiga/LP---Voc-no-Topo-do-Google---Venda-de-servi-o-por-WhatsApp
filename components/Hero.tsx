
import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, Check } from 'lucide-react';
import { CONFIG } from '../config';

export const Hero = () => {
  const [imgError, setImgError] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(CONFIG.links.whatsapp, "_blank");
  };

  // Se houver erro ao carregar header.jpg, usa o fallback do Unsplash
  const displayImage = imgError 
    ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
    : CONFIG.images.heroBackground;

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex flex-col overflow-hidden">
      {/* IMAGEM DE FUNDO - Alterado para DIV com bg-image para garantir posicionamento do rosto */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <div 
          className="w-full h-full bg-cover bg-right opacity-30 md:opacity-40 transition-opacity duration-700"
          style={{ backgroundImage: `url('${displayImage}')` }}
          onError={() => {
            console.warn("Imagem background não carregou.");
            setImgError(true);
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent"></div>
      </div>

      {/* Efeitos de Luz de Fundo */}
      <div className="absolute -top-40 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 md:bg-amber-500/20 rounded-full blur-[80px] md:blur-[100px] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-12 md:pb-16 flex flex-col justify-center flex-1 h-full">
        
        {/* ZONA SEGURA: w-[65%] no mobile para não sobrepor o rosto à direita */}
        <div className="w-[65%] sm:w-[60%] lg:w-[50%] flex flex-col items-start text-left">
          
          {/* BADGE SUPERIOR - SERVIÇO VALIDADO */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs md:text-base font-extrabold mb-8 md:mb-12 badge-pulse shadow-[0_0_20px_rgba(245,158,11,0.1)] backdrop-blur-xl tracking-tight">
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-amber-500 animate-[spin_4s_linear_infinite]" />
            <span className="uppercase tracking-widest leading-none">Serviço validado por + de 200 empresas</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white font-serif drop-shadow-2xl">
            Saia do invisível para o <br className="hidden md:block" />
            <span className="text-gold-gradient">primeiro lugar no Google Local.</span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Pare de perder clientes para a concorrência. Através do <span className="text-amber-500 font-bold">Método Você no Topo do Google Local™</span> transformamos o seu perfil do Google em uma <span className="text-white font-bold">máquina de atração de clientes locais</span> e aumentando seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-start w-full mb-10">
            <Button size="xl" onClick={handleWhatsAppClick} className="cta-button-pulse w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-2xl">
              Quero Falar com um Especialista
              <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* BARRA DE CONFIANÇA */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 md:gap-6 text-[10px] md:text-sm font-medium text-slate-300 bg-slate-900/40 py-3 md:py-3 px-6 md:px-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 mb-6 md:mb-10">
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
    </div>
  );
};
