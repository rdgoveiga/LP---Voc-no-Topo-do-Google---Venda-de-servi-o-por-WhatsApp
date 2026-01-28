
import React from 'react';
import { Section } from './ui/Section';
import { CONFIG } from '../config';

export const Author = () => {
  return (
    <div className="bg-slate-800/30">
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src={CONFIG.author.image} 
                alt={`Foto do Autor - ${CONFIG.author.name}`} 
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                <p className="text-amber-500 font-bold text-lg">{CONFIG.author.name}</p>
                <p className="text-slate-400 text-sm">{CONFIG.author.title}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-6">Quem é o autor?</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              {CONFIG.author.bio.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.includes("Método Você no Topo do Google™") ? (
                    paragraph.split("Método Você no Topo do Google™").map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="text-amber-500 font-bold">Método Você no Topo do Google™</span>}
                      </React.Fragment>
                    ))
                  ) : paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 p-6 bg-slate-900 rounded-xl border-l-4 border-amber-500">
              <p className="italic text-slate-400">
                "{CONFIG.author.quote}"
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
