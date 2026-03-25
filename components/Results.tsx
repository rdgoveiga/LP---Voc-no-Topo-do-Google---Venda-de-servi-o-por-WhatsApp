
import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Image as ImageIcon, MapPin, CheckCircle2, XCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { ABVersion } from '../lib/abTest';

interface ResultsProps {
  version?: ABVersion;
}

export const Results: React.FC<ResultsProps> = ({ version }) => {
  const cases = [
    {
      niche: "Nutricionista",
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

      {/* Lista Vertical de Cards */}
      <div className="flex flex-col gap-16 md:gap-24 relative z-10 max-w-6xl mx-auto mb-32">
        {cases.map((item, i) => (
          <ResultCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* SEÇÃO EDUCATIVA: O EFEITO MAR VERDE */}
      <div className="relative z-10 max-w-6xl mx-auto">

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
              “Não é só aparecer, é gerar contatos <span className="text-amber-500 font-bold not-italic font-sans">TODOS OS DIAS</span>”
            </p>
        </div>

      </div>

    </Section>
  );
};

// Subcomponent to handle image loading logic cleanly
const ResultCard: React.FC<{ item: any, index: number }> = ({ item, index }) => {
  const [imgError, setImgError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={`glass-card rounded-[2rem] border ${item.border} overflow-hidden hover:border-opacity-50 transition-all duration-500 relative group`}>
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* IMAGEM (PRINT) - Ocupa 70% no Desktop e mostra TUDO (h-auto) */}
        <div className={`w-full lg:w-[70%] bg-slate-950 relative border-b lg:border-b-0 ${isEven ? 'lg:order-1 lg:border-r' : 'lg:order-2 lg:border-l'} border-slate-800 flex items-center justify-center p-2 md:p-4`}>
          {item.image && !imgError ? (
            <div className="w-full relative shadow-2xl rounded-lg overflow-hidden border border-slate-800/50">
                <img 
                    src={item.image} 
                    alt={`Ranking ${item.niche}`}
                    className="w-full h-auto block"
                    onError={() => setImgError(true)}
                />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center bg-slate-900/50 rounded-xl">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                  <ImageIcon className="w-10 h-10 text-slate-500" />
              </div>
              <p className="text-white font-bold text-xl mb-1">Aguardando Print</p>
              <p className="text-slate-500">Imagem do ranking em processamento</p>
            </div>
          )}
          
          {/* Badge flutuante na imagem */}
          <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20">
             <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
             <span className="text-xs text-white font-bold uppercase tracking-wider">Busca Local</span>
          </div>
        </div>

        {/* CONTEÚDO (TEXTO) - Ocupa 30% */}
        <div className={`w-full lg:w-[30%] p-8 md:p-10 flex flex-col justify-center relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800/20 to-transparent pointer-events-none lg:hidden"></div>
          
          <div className="relative z-10">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6 ${item.bg} ${item.color} border ${item.border}`}>
                Case: {item.niche}
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-6">
              "{item.desc}"
            </h3>

            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 mb-8">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-2">Resultado Principal</p>
                <div className="flex flex-col">
                    <span className={`text-4xl font-black block leading-none mb-1 ${item.color}`}>{item.growth}</span>
                    <span className="text-slate-300 text-xs font-medium uppercase tracking-tight">em {item.metric}</span>
                </div>
            </div>

            <ul className="space-y-3">
                {item.details && item.details.map((detail: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs md:text-sm">
                        <CheckCircle2 className={`w-4 h-4 ${item.color} shrink-0 mt-0.5`} />
                        <span className="leading-tight">{detail}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
