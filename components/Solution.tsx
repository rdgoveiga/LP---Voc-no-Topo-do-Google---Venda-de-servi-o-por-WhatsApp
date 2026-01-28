
import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Lightbulb, Sparkles, Rocket, LockOpen, CircleDollarSign, MapPinned } from 'lucide-react';

export const Solution = () => {
  return (
    <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1 px-4 sm:px-0">
            {[
              { v: "126%", t: "mais tráfego para perfis otimizados", r: "-rotate-2" },
              { v: "93%", t: "mais conversões no top 3 do Google", r: "rotate-1" },
              { v: "76%", t: "visitam a loja em 24h após buscar", r: "-rotate-1" }
            ].map((s, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-2xl border border-slate-700/50 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-bold text-amber-500">{s.v}</span>
                    <p className="text-slate-300 text-sm md:text-base">{s.t}</p>
                </div>
              </div>
            ))}
            <p className="text-slate-500 text-[10px] md:text-xs italic mt-2 text-center lg:text-left opacity-70">
                *Resultados médios observados em estudos de SEO local e análises de perfis otimizados.
            </p>

            <div className="mt-10 p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 relative group">
              <h3 className="text-xl font-bold text-white mb-6">Por que algumas empresas dominam o Google Local?</h3>
              <div className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">Não é sorte. Não é tamanho. E não é investimento em anúncios.</p>
                <div className="space-y-3">
                  {[
                    "Informações organizadas do jeito que o algoritmo entende",
                    "Autoridade construída dentro do próprio Google",
                    "Atividade constante que sinaliza relevância"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-amber-500 font-semibold text-sm pt-4 border-t border-slate-700/50">
                  👉 Nossa assessoria cuida de cada um desses pontos para você.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold mb-6 badge-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Nossa Entrega</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              O <span className="text-amber-500">Método Você no Topo do Google Local™</span>
            </h2>
            
            <p className="text-slate-200 text-xl font-medium mb-6">Com nossa Gestão Estratégica, garantimos:</p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Ativação completa dos fatores de rankeamento do Google",
                "Otimização de imagens e conteúdo para conversão máxima",
                "Construção técnica de autoridade local",
                "Gestão de relevância e atualizações constantes do perfil"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative shadow-lg">
                <div className="flex gap-4">
                    <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm md:text-base italic leading-relaxed">
                        "Nossa assessoria utiliza um método prático e testado para colocar o seu negócio no radar de quem realmente quer comprar na sua região."
                    </p>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">Pilares da nossa Consultoria:</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket className="w-10 h-10 text-amber-500" />, title: "Rankeamento Veloz", desc: "Aceleramos o processo para que sua empresa apareça para quem está buscando agora." },
              { icon: <LockOpen className="w-10 h-10 text-amber-500" />, title: "Chaves de Confiança", desc: "Ajustamos os gatilhos que fazem o cliente confiar e escolher você em segundos." },
              { icon: <CircleDollarSign className="w-10 h-10 text-amber-500" />, title: "Foco em Vendas", desc: "Nosso objetivo não é métrica de vaidade, mas sim levar clientes até você." },
              { icon: <MapPinned className="w-10 h-10 text-amber-500" />, title: "Cerco Territorial", desc: "Blindamos o seu bairro para que sua empresa seja a autoridade máxima." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl hover:bg-slate-800/80 hover:border-amber-500/40 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
