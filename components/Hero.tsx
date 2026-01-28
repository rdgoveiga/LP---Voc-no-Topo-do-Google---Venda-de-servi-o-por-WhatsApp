
import React from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, Check } from 'lucide-react';

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521985899548?text=Olá! Gostaria de saber mais sobre o Método Você no Topo do Google.", "_blank");
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Background Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark"></div>
      </div>

      {/* Efeitos de Luz de Fundo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 flex flex-col items-center text-center flex-1 justify-center">
        
        {/* BADGE SUPERIOR - SERVIÇO VALIDADO */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border-2 border-amber-500/60 text-amber-400 text-sm sm:text-base font-extrabold mb-12 badge-pulse shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-xl tracking-tight">
          <Star className="w-5 h-5 fill-amber-500 animate-[spin_4s_linear_infinite]" />
          <span className="uppercase tracking-widest">Serviço validado por + de 200 empresas</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-white font-serif drop-shadow-2xl">
          Saia do invisível para o <br className="hidden md:block" />
          <span className="text-gold-gradient">primeiro lugar no Google Local.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Pare de perder clientes para a concorrência. Através do <span className="text-amber-500 font-bold">"Método Você no Topo do Google Local™"</span> transformamos o seu perfil do Google em uma máquina de atração de clientes locais e aumentando seu faturamento.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full mb-10">
          <Button size="xl" onClick={handleWhatsAppClick} className="cta-button-pulse w-full sm:w-auto text-lg px-12 py-5 shadow-2xl">
            Quero Falar com um Especialista
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>

        {/* BARRA DE CONFIANÇA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-300 bg-slate-900/40 py-3 px-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 mb-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Atendimento 100% Personalizado</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-amber-500 font-bold">
            <Check className="w-4 h-4" />
            <span>Resultados percebidos a curto e médio prazo.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
