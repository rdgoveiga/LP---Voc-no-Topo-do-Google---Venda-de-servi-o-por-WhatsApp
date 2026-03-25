
import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Lightbulb, Sparkles, Rocket, LockOpen, CircleDollarSign, MapPinned, Search, Globe, ShieldCheck } from 'lucide-react';
import { ABVersion } from '../lib/abTest';

interface SolutionProps {
  version: ABVersion;
}

export const Solution: React.FC<SolutionProps> = ({ version }) => {
  const pilaresA = [
    { icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Rankeamento Veloz", desc: "Aceleramos o processo para sua empresa aparecer agora." },
    { icon: <LockOpen className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Chaves de Confiança", desc: "Ajustamos os gatilhos que fazem o cliente confiar e escolher você." },
    { icon: <CircleDollarSign className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Foco em Vendas", desc: "Nosso objetivo é levar clientes reais até o seu WhatsApp." },
    { icon: <MapPinned className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Cerco Territorial", desc: "Blindamos o seu bairro para sua empresa ser a autoridade máxima." }
  ];

  const pilaresB = [
    { icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Autoridade Semântica", desc: "Otimizamos seu perfil para que o Google entenda que você é a autoridade máxima." },
    { icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Geotagueamento", desc: "Sinais técnicos de localização que forçam o Google a te mostrar para vizinhos próximos." },
    { icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Projetor de Confiança", desc: "Transformamos visualizações em orçamentos reais através de gatilhos de prova social." },
    { icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Escala Orgânica", desc: "Crescimento constante de visibilidade sem precisar pagar por cliques." }
  ];

  const pilares = version === 'A' ? pilaresA : pilaresB;

  return (
    <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <Section className="px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-16 md:mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
            {[
              { v: "126%", t: "mais tráfego para perfis otimizados" },
              { v: "93%", t: "mais conversões no top 3 do Google" },
              { v: "76%", t: "buscam e visitam em até 24h" }
            ].map((s, i) => (
              <div key={i} className="glass-card p-5 md:p-8 rounded-2xl border border-slate-700/50 transition-all duration-300 md:hover:scale-105">
                <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-3xl md:text-5xl font-bold text-amber-500 leading-none">{s.v}</span>
                    <p className="text-slate-300 text-sm md:text-base leading-tight">{s.t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              {version === 'A' 
                ? <>O <span className="text-amber-500">Método Você no Topo do Google Local™</span></>
                : <>O Sistema Definitivo de <span className="text-amber-500">Dominância no Google Maps™</span></>}
            </h2>
            
            <p className="text-slate-200 text-lg md:text-xl font-medium mb-6 leading-relaxed">
              {version === 'A' ? 'Com nossa Gestão Estratégica, garantimos:' : 'O plano técnico que coloca sua empresa no radar:'}
            </p>
            
            <ul className="space-y-4 md:space-y-6 mb-10">
              {(version === 'A' 
                ? [
                    "Ativação completa dos fatores de rankeamento",
                    "Otimização estratégica e validada para conversão",
                    "Construção técnica de autoridade local",
                    "Gestão de relevância e atualizações constantes"
                  ]
                : [
                    "Engenharia reversa dos seus maiores concorrentes",
                    "Otimização NLP (Natural Language Processing) do Perfil",
                    "Blindagem territorial contra outros negócios",
                    "Geração de leads qualificados no orgânico"
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-16 md:pt-20">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider">
              {version === 'A' ? 'Pilares do Método:' : 'Nossa Tecnologia de Rankeamento:'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pilares.map((item, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300">
                <div className="bg-amber-500/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6">{item.icon}</div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
