
import React from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, Check } from 'lucide-react';
import { CONFIG } from '../config';

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(CONFIG.links.whatsapp, "_blank");
  };

  // Resolvemos o caminho da imagem de forma robusta
  const getImageUrl = (path: string) => {
    // Se o path já for uma URL completa, retorna ela
    if (path.startsWith('http')) return path;
    // Caso contrário, tenta carregar da raiz do projeto
    return `./${path}`;
  };

  return (
    <div className="relative min-h-[95vh] flex flex-col overflow-hidden">
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getImageUrl(CONFIG.images.heroBackground)} 
          alt="Fundo Método Você no Topo do Google" 
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Evita loop infinito se o fallback também falhar
            if (!target.src.includes('unsplash')) {
               console.log("Falha ao carregar imagem local, usando fallback...");
               target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/85 to-brand-dark"></div>
      </div>

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center text-center flex-1 justify-center">
        
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-sm md:text-base font-extrabold mb-10 badge-pulse shadow-[0_0_30px_rgba(245,158,11,0.15)] backdrop-blur-xl tracking-tight">
          <Star className="w-5 h-5 fill-amber-500 animate-[spin_4s_linear_infinite]" />
          <span className="uppercase tracking-widest leading-none">Exclusivo: Acesso ao Diagnóstico Gratuito</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white font-serif drop-shadow-2xl max-w-5xl">
          Sua empresa no <span className="text-gold-gradient">Topo do Google</span> enquanto você dorme.
        </h1>
        
        <p className="text-lg sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Através do <span className="text-amber-500 font-bold">Método Você no Topo do Google Local™</span> dominamos sua região e transformamos buscas em <span className="text-white font-bold">clientes reais no seu WhatsApp</span>.
        </p>

        <div className="flex flex-col sm:row items-center gap-6 justify-center w-full mb-12">
          <Button size="xl" onClick={handleWhatsAppClick} className="cta-button-pulse w-full sm:w-auto text-xl px-12 py-6 shadow-2xl scale-105 hover:scale-110 active:scale-95 transition-transform">
            Quero Começar Agora
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            8 vagas restantes para este mês
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-300 bg-slate-900/60 py-4 px-10 rounded-2xl backdrop-blur-md border border-slate-700/50 shadow-xl">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-amber-500" />
            <span>SEO Local Profissional</span>
          </div>
          <div className="w-px h-4 bg-slate-700 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-amber-500" />
            <span>Relatórios Mensais</span>
          </div>
          <div className="w-px h-4 bg-slate-700 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-amber-500" />
            <span>Foco 100% em Conversão</span>
          </div>
        </div>
      </div>
    </div>
  );
};
