
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Section } from './ui/Section';
import { Image as ImageIcon, MapPin, CheckCircle2, XCircle, ArrowRight, HelpCircle, ChevronLeft, ChevronRight, ChevronDown, Smartphone } from 'lucide-react';
import { ABVersion } from '../lib/abTest';

interface ResultsProps {
  version?: ABVersion;
}

export const Results: React.FC<ResultsProps> = ({ version }) => {
  const cases = [
    {
      niche: "Nutricionista",
      tag: "Saúde",
      tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      growth: "+214%",
      metric: "Mensagens/Mês",
      image: "https://lpgmn-assets.vercel.app/images/ranking-na-cidade_nutri.webp",
      desc: "Saiu da 15ª posição para o Top 1 em apenas 45 dias.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      details: ["1º Lugar no Google Maps", "Aumento real de pacientes", "Sem custo de anúncios"]
    },
    {
      niche: "Oficina Mecânica",
      tag: "Automotivo",
      tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      growth: "+180%",
      metric: "Solicitações de Rota",
      image: "https://lpgmn-assets.vercel.app/images/solicitacao-de-rotas.webp",
      desc: "Saltou de 49 em outubro quando iniciou a otimização para 95 em dezembro.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      details: ["Domínio territorial", "Clientes vindo pelo GPS", "Autoridade local"]
    },
    {
      niche: "Delivery de Pizza",
      tag: "Gastronomia",
      tagColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      growth: "+350%",
      metric: "Visualizações no Maps",
      image: "https://lpgmn-assets.vercel.app/images/print-pizzaria.webp",
      desc: "Bateu faturamento recorde com 2 meses de otimização.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      details: ["Explosão de pedidos", "Visibilidade noturna", "Desejo Imediato"]
    }
  ];

  // Carousel state
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % cases.length);
  }, [cases.length]);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + cases.length) % cases.length);
  }, [cases.length]);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(goNext, 4500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, goNext]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    // Resume after 10s of inactivity
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => setIsAutoPlaying(true), 10000) as unknown as ReturnType<typeof setInterval>;
  };

  // Touch/swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      handleInteraction();
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <Section className="py-20 relative overflow-hidden" id="resultados">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Contra fatos (e prints) <br />
          <span className="text-amber-500">não há argumentos.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Não vendemos "hacks". Vendemos engenharia de tráfego local. Veja o impacto real no caixa de quem já aplicou o método.
        </p>
      </div>

      {/* SEÇÃO EDUCATIVA: O EFEITO MAR VERDE */}
      <div className="relative z-10 max-w-6xl mx-auto mb-24">

        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Entenda a Tecnologia</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
             O que é o "Efeito Mar Verde"?
           </h3>
           <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
             Imagine que cada bolinha abaixo é um cliente pegando o celular na rua vizinha para pesquisar o seu serviço.
             <br className="hidden md:block" /> A cor indica a <strong>posição</strong> que sua empresa aparece para ele.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* CENÁRIO RUIM (VERMELHO) */}
          <div className="bg-slate-950/80 border border-red-900/30 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900"></div>
            
            <div className="mb-6 bg-red-500/10 p-3 rounded-full">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2">Cenário Atual: Invisível</h4>
            <p className="text-slate-400 text-sm mb-8 min-h-[40px]">
              O cliente está a 2 quarteirões de você, pesquisa pelo seu serviço, mas <strong className="text-red-400">só vê o seu concorrente</strong>.
            </p>

            {/* Grid Vermelho */}
            <div className="grid grid-cols-5 gap-2 md:gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800 mb-6 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500">
              {Array.from({ length: 25 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all
                    ${i === 12 
                      ? 'bg-amber-500 text-slate-900 z-10 scale-110 shadow-lg' 
                      : 'bg-red-500/20 text-red-500 border border-red-500/30'
                    }`}
                >
                  {i === 12 ? 'VOCÊ' : Math.floor(Math.random() * (50 - 20) + 20)}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wide">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Posição Ruim (+20)
            </div>
          </div>

          {/* ARROW INDICATOR (Mobile: Down, Desktop: Right) */}
          <div className="flex justify-center lg:hidden">
            <ArrowRight className="w-8 h-8 text-slate-600 rotate-90" />
          </div>
          <div className="hidden lg:flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="bg-slate-800 p-2 rounded-full border border-slate-700 shadow-xl">
               <ArrowRight className="w-6 h-6 text-emerald-500" />
             </div>
          </div>


          {/* CENÁRIO BOM (VERDE) */}
          <div className="bg-slate-900/80 border border-emerald-900/30 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-900"></div>
            
            <div className="mb-6 bg-emerald-500/10 p-3 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2">Cenário Futuro: Dominante</h4>
            <p className="text-slate-400 text-sm mb-8 min-h-[40px]">
              Você ativa o "Efeito Mar Verde". Não importa onde o cliente esteja no bairro, <strong className="text-emerald-400">você aparece em 1º lugar</strong>.
            </p>

            {/* Grid Verde */}
            <div className="grid grid-cols-5 gap-2 md:gap-3 p-4 bg-slate-900 rounded-xl border border-emerald-500/20 mb-6 shadow-2xl">
              {Array.from({ length: 25 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all duration-700
                    ${i === 12 
                      ? 'bg-amber-500 text-slate-900 z-10 scale-110 shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
                      : 'bg-emerald-500 text-slate-900 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse'
                    }`}
                   style={{ animationDelay: `${Math.random() * 2}s` }}
                >
                  {i === 12 ? 'VOCÊ' : Math.floor(Math.random() * 3) + 1}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wide">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Posição Dominante (1-3)
            </div>
          </div>

        </div>

        {/* Frase de Efeito Adicionada Abaixo dos Cards */}
        <div className="mt-20 text-center px-4">
            <p className="text-xl md:text-3xl text-slate-200 font-medium italic font-serif">
              "Não é só aparecer, é gerar contatos <span className="text-amber-500 font-bold not-italic font-sans">TODOS OS DIAS</span>"
            </p>
        </div>

      </div>

      {/* ============================================= */}
      {/* CARROSSEL RÁPIDO DE CASES COM ETIQUETAS       */}
      {/* ============================================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header do Carrossel */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Veja na prática: <span className="text-amber-500">resultados reais</span>
          </h3>
        </div>

        {/* Etiquetas de Nicho (Tags) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {cases.map((item, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); handleInteraction(); }}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer
                ${activeIndex === i
                  ? `${item.tagColor} scale-105 shadow-lg`
                  : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-300'
                }`}
            >
              {item.tag}
            </button>
          ))}
          {/* Tags extras para "autoridade ampla" */}
          {['Estética', 'Advocacia', 'Pet Shop', 'Imóveis'].map((tag, i) => (
            <span
              key={`extra-${i}`}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border bg-slate-800/30 text-slate-500 border-slate-700/50 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Carrossel Container */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide Track */}
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cases.map((item, i) => (
              <CarouselCard key={i} item={item} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => { goPrev(); handleInteraction(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 shadow-xl cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => { goNext(); handleInteraction(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 shadow-xl cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); handleInteraction(); }}
              className={`rounded-full transition-all duration-300 cursor-pointer
                ${activeIndex === i
                  ? 'w-8 h-2.5 bg-amber-500'
                  : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500'
                }`}
              aria-label={`Ir para case ${i + 1}`}
            />
          ))}
        </div>

        {/* AUTO-PLAY INDICATOR */}
        {isAutoPlaying && (
          <div className="flex justify-center mt-3">
            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-amber-500/60 rounded-full animate-pulse"></span>
              Rolando automaticamente
            </div>
          </div>
        )}

        {/* ============================================= */}
        {/* FRASE DE INCLUSÃO AMPLA                       */}
        {/* ============================================= */}
        <div className="mt-16 text-center px-4">
          <div className="inline-block relative">
            <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-amber-500/5 via-emerald-500/5 to-amber-500/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-8 py-8 md:px-12 md:py-10">
              <Smartphone className="w-6 h-6 text-amber-500 mx-auto mb-4 opacity-70" />
              <p className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed max-w-3xl mx-auto">
                Se o seu cliente pega o celular para pesquisar o que você faz, <strong className="text-amber-500">o método se aplica a você</strong>.
              </p>
              <p className="text-slate-400 text-sm md:text-base mt-3">
                Já validamos isso em <strong className="text-white">mais de 20 nichos diferentes</strong>.
              </p>
            </div>
          </div>
        </div>

      </div>

    </Section>
  );
};

// Carousel Card Component — altura fixa, scroll interno com indicador
const CarouselCard: React.FC<{ item: any }> = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Esconde o hint quando o usuário começa a rolar
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollTop > 30) setShowScrollHint(false);
      else setShowScrollHint(true);
    };
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex-shrink-0">
      <div className="flex flex-col lg:flex-row h-[520px] md:h-[420px]">
        
        {/* IMAGEM (PRINT) — scroll interno para ver tudo */}
        <div 
          ref={scrollRef}
          className="w-full lg:w-[55%] bg-slate-950 relative border-b lg:border-b-0 lg:border-r border-slate-800 overflow-y-auto overflow-x-hidden scrollbar-thin"
        >
          {/* Tag / Etiqueta */}
          <div className={`sticky top-3 right-0 z-20 float-right mr-3 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border ${item.tagColor} backdrop-blur-md`}>
            {item.tag}
          </div>

          {item.image && !imgError ? (
            <img 
              src={item.image} 
              alt={`Ranking ${item.niche}`}
              className="w-full h-auto block"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-center bg-slate-900/50">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-3 border border-slate-700">
                  <ImageIcon className="w-8 h-8 text-slate-500" />
              </div>
              <p className="text-white font-bold text-base mb-1">Aguardando Print</p>
              <p className="text-slate-500 text-sm">Imagem em processamento</p>
            </div>
          )}

          {/* Indicador de scroll — chamativo e animado */}
          {showScrollHint && (
            <div className="sticky bottom-0 left-0 w-full z-20 pointer-events-none">
              {/* Degradê forte para contraste */}
              <div className="bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-10 pb-3 flex flex-col items-center gap-1">
                <span className="text-amber-400 text-[11px] md:text-xs font-bold uppercase tracking-widest animate-pulse pointer-events-none">
                  ↓ Role para ver a conversa completa ↓
                </span>
                <div className="w-6 h-6 flex items-center justify-center animate-bounce">
                  <ChevronDown className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CONTEÚDO (TEXTO) — compacto */}
        <div className="w-full lg:w-[45%] p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
          
          <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 ${item.bg} ${item.color} border ${item.border} w-fit`}>
              Case: {item.niche}
          </span>

          <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-4">
            "{item.desc}"
          </h3>

          <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 mb-4">
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">Resultado Principal</p>
              <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-black leading-none ${item.color}`}>{item.growth}</span>
                  <span className="text-slate-400 text-xs font-medium uppercase">em {item.metric}</span>
              </div>
          </div>

          <ul className="space-y-2">
              {item.details && item.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${item.color} shrink-0`} />
                      <span className="leading-tight">{detail}</span>
                  </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
