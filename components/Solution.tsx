
import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Lightbulb, Sparkles, Rocket, LockOpen, CircleDollarSign, MapPinned } from 'lucide-react';

export const Solution = () => {
  return (
    <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
      <Section className="px-4 md:px-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-16 md:mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
            {[
              { v: "126%", t: "mais tráfego para perfis otimizados", r: "-rotate-1" },
              { v: "93%", t: "mais conversões no top 3 do Google", r: "rotate-0" },
              { v: "76%", t: "visitam a loja em 24h após buscar", r: "-rotate-1" }
            ].map((s, i) => (
              <div key={i} className="glass-card p-5 md:p-8 rounded-2xl border border-slate-700/50 transition-all active:scale-[0.98] md:hover:scale-105">
                <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-3xl md:text-5xl font-bold text-amber-500 leading-none">{s.v}</span>
                    <p className="text-slate-300 text-sm md:text-base leading-tight">{s.t}</p>
                </div>
              </div>
            ))}
            <p className="text-slate-500 text-[10px] italic mt-2 text-center lg:text-left opacity-70">
                *Resultados médios baseados em SEO local.
            </p>

            <div className="mt-8 md:mt-10 p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 relative group">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 leading-tight">Por que algumas empresas dominam o Google Local?</h3>
              <div className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">Não é sorte. É o método aplicado da forma correta.</p>
                <div className="space-y-3">
                  {[
                    "Estrutura otimizada para o algoritmo",
                    "Autoridade local construída tecnicamente",
                    "Atualização estratégica e constante"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                      <span className="text-slate-300 text-sm leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-amber-500 font-bold text-sm pt-4 border-t border-slate-700/50 flex items-center gap-2">
                  <span>👉</span> O Método cuida de cada um desses pontos para você.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-[10px] md:text-sm font-bold mb-4 md:mb-6 badge-pulse">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                <span className="uppercase tracking-wider">Nossa Entrega</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              O <span className="text-amber-500">Método Você no Topo do Google Local™</span>
            </h2>
            
            <p className="text-slate-200 text-lg md:text-xl font-medium mb-6 leading-relaxed">Com nossa Gestão Estratégica, garantimos:</p>
            
            <ul className="space-y-4 md:space-y-6 mb-10">
              {[
                "Ativação completa dos fatores de rankeamento",
                "Otimização de imagens para conversão máxima",
                "Construção técnica de autoridade local",
                "Gestão de relevância e atualizações constantes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 md:p-6 relative shadow-lg">
                <div className="flex gap-4">
                    <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm md:text-base italic leading-relaxed">
                        "Nossa estratégia foi construída e validada através de um método prático para colocar o seu negócio no radar de quem realmente quer comprar na sua região."
                    </p>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-16 md:pt-20">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider">Pilares do Método:</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Rankeamento Veloz", desc: "Aceleramos o processo para sua empresa aparecer agora." },
              { icon: <LockOpen className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Chaves de Confiança", desc: "Ajustamos os gatilhos que fazem o cliente confiar e escolher você." },
              { icon: <CircleDollarSign className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Foco em Vendas", desc: "Nosso objetivo é levar clientes reais até o seu WhatsApp." },
              { icon: <MapPinned className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />, title: "Cerco Territorial", desc: "Blindamos o seu bairro para sua empresa ser a autoridade máxima." }
            ].map((item, i) => (
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
