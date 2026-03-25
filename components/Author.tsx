
import React, { useState } from 'react';
import { Section } from './ui/Section';
import { CONFIG } from '../config';
import { Quote } from 'lucide-react';

export const Author = () => {
  const [imgError, setImgError] = useState(false);

  const authorImage = imgError 
    ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
    : CONFIG.author.image;

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className="text-amber-500 font-bold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-slate-800/30">
      <Section id="autor">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700 group">
              <img 
                src={authorImage} 
                alt={`Rodrigo Veiga - Estrategista Digital e Especialista em Google Local`} 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-amber-500 font-bold uppercase tracking-widest mb-2">Quem será o seu estrategista</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">{CONFIG.author.name}</h2>
            <p className="text-slate-400 text-lg mb-8 italic">{CONFIG.author.title}</p>
            
            <div className="space-y-6 text-slate-300 leading-relaxed mb-10">
              {CONFIG.author.bio.map((paragraph, idx) => (
                <p key={idx}>{formatText(paragraph)}</p>
              ))}
            </div>

            <div className="relative pl-6 border-l-4 border-amber-500 py-2">
              <Quote className="absolute -top-2 left-4 w-8 h-8 text-amber-500/20 rotate-180" aria-hidden="true" />
              <p className="text-white font-serif text-xl italic relative z-10">
                "{CONFIG.author.quote}"
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
