import React from 'react';
import { Section } from './ui/Section';

export const Author = () => {
  return (
    <div className="bg-slate-800/30">
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500">
              {/* 
                 DICA: Para alterar a foto do autor:
                 1. Faça upload da sua foto para o GitHub (ex: foto-rodrigo.jpg).
                 2. Altere o 'src' abaixo para: src="./foto-rodrigo.jpg"
              */}
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2400&auto=format&fit=crop" 
                alt="Rodrigo Veiga" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                <p className="text-amber-500 font-bold text-lg">Rodrigo Veiga</p>
                <p className="text-slate-400 text-sm">Especialista em SEO Local</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-6">Quem é o autor?</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Olá, eu sou Rodrigo Veiga. Nos últimos 10 anos, ajudei centenas de pequenos e médios negócios a saírem do completo anonimato digital para se tornarem líderes em suas regiões.
              </p>
              <p>
                Percebi um padrão: a maioria dos empresários excelentes (como você) tem produtos incríveis, mas falham na hora de serem encontrados. Eles deixam dinheiro na mesa todos os dias para concorrentes que apenas "sabem jogar o jogo".
              </p>
              <p>
                Escrevi "Você no Topo do Google" para ser o manual que eu gostaria de ter tido quando comecei. Sem jargões técnicos complicados, sem promessas vazias. Apenas estratégia pura, aplicada e validada.
              </p>
            </div>
            <div className="mt-8 p-6 bg-slate-900 rounded-xl border-l-4 border-amber-500">
              <p className="italic text-slate-400">
                "Minha missão é democratizar o acesso ao topo das pesquisas. Seu negócio merece ser visto."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};