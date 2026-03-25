import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export const BookPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Introdução ao Domínio Digital",
      content: "No mundo atual, se você não está no Google, você não existe. Mas estar lá não é suficiente; você precisa dominar. Neste capítulo, exploramos por que o Google Business Profile é a espinha dorsal de qualquer estratégia local bem-sucedida..."
    },
    {
      title: "Capítulo 1: Configuração Perfeita",
      content: "A maioria erra no básico. O nome da empresa, a categoria, a descrição... detalhes que parecem pequenos mas ditam se o algoritmo vai te amar ou te ignorar. Vamos dissecar a anatomia de um perfil campeão..."
    },
    {
      title: "Capítulo 3: Fotos que Vendem",
      content: "Uma imagem vale mais que mil cliques. Aprenda quais tipos de fotos aumentam a taxa de cliques em até 35% e como a psicologia das cores na fachada da sua loja virtual influencia a decisão de visita..."
    },
    {
      title: "Capítulo 7: Gestão de Crise e Avaliações",
      content: "Recebeu uma avaliação 1 estrela? Não entre em pânico. Transforme haters em promotores com a técnica de resposta 'Sanduíche de Empatia'. Neste capítulo, revelo scripts prontos para usar..."
    }
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <Section id="preview" className="flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          O Que Você Vai Encontrar
        </h2>
        <p className="text-slate-400">Dê uma espiada no conteúdo exclusivo.</p>
      </div>

      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden min-h-[400px] flex flex-col md:flex-row">
        {/* Sidebar / TOC */}
        <div className="bg-slate-100 p-6 md:w-1/3 border-r border-slate-200 hidden md:block">
          <div className="flex items-center gap-2 mb-6 text-slate-700 font-bold">
            <BookOpen className="w-5 h-5" />
            <span>Índice</span>
          </div>
          <ul className="space-y-3 text-sm">
            {pages.map((page, idx) => (
              <li 
                key={idx} 
                onClick={() => setCurrentPage(idx)}
                className={`cursor-pointer p-2 rounded transition-colors ${currentPage === idx ? 'bg-amber-100 text-amber-900 font-medium' : 'text-slate-600 hover:bg-slate-200'}`}
              >
                {page.title.split(':')[0]}
              </li>
            ))}
            <li className="text-slate-400 italic pl-2 mt-4 text-xs">e muito mais...</li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="bg-white p-8 md:p-12 md:w-2/3 flex flex-col relative">
          <div className="flex-1">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{pages[currentPage].title}</h3>
            <p className="text-slate-600 leading-8 text-lg font-serif">
              {pages[currentPage].content}
            </p>
            <div className="mt-4 h-4 w-full bg-slate-100 rounded animate-pulse"></div>
            <div className="mt-2 h-4 w-3/4 bg-slate-100 rounded animate-pulse"></div>
            <div className="mt-2 h-4 w-5/6 bg-slate-100 rounded animate-pulse"></div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
            <button 
              onClick={prevPage}
              className="flex items-center gap-1 text-slate-500 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
            <span className="text-xs text-slate-300 font-mono">Página {currentPage + 1} de {pages.length}</span>
            <button 
              onClick={nextPage}
              className="flex items-center gap-1 text-slate-500 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              Próximo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Overlay Gradient for "Preview" feel */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none md:w-2/3 md:left-auto"></div>
        </div>
      </div>
    </Section>
  );
};