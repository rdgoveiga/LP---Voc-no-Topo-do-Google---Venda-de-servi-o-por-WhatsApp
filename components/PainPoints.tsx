
import React from 'react';
import { Section } from './ui/Section';
import { SearchX, TrendingDown, Wallet, Clock, Quote } from 'lucide-react';

export const PainPoints = () => {
  const pains = [
    {
      icon: <SearchX className="w-10 h-10 text-red-400" />,
      title: "Invisível no Google",
      description: "Seus concorrentes aparecem primeiro, mesmo sendo menos qualificados que você."
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-red-400" />,
      title: "Depende só de indicação",
      description: "Sem previsibilidade de clientes. Um mês bom, outro ruim. Agenda instável."
    },
    {
      icon: <Wallet className="w-10 h-10 text-red-400" />,
      title: "Já perdeu dinheiro",
      description: "Tentou agências, impulsionou posts, fez cursos rasos... e nada funcionou de verdade."
    },
    {
      icon: <Clock className="w-10 h-10 text-red-400" />,
      title: "Sem tempo para marketing",
      description: "Você é bom no que faz, mas não foi treinado para vender. E o tempo é curto."
    }
  ];

  return (
    <Section className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Você tem um serviço incrível,<br />
          <span className="text-amber-500">Mas um Marketing Invisível?</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Não adianta ser o melhor da cidade se o cliente não consegue te encontrar. <span className="font-bold text-slate-200">Identifique o que está travando seu crescimento hoje:</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {pains.map((pain, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl hover:bg-slate-800/80 transition-colors duration-300 border-t-2 border-transparent hover:border-red-500/50 flex flex-col items-start h-full">
            <div className="bg-red-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 shrink-0">
              {pain.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{pain.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{pain.description}</p>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700 relative mt-12">
         <Quote className="absolute top-6 left-6 w-10 h-10 text-slate-600 opacity-20" />
         <div className="relative z-10 text-center">
            <p className="text-xl md:text-2xl text-slate-200 font-serif italic leading-relaxed mb-6 px-4">
              "Vejo concorrente ruim lotado e não entendo por quê. O que estou fazendo de errado no Google?"
            </p>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
              — Pensamento comum de profissionais competentes
            </p>
         </div>
      </div>
    </Section>
  );
};
