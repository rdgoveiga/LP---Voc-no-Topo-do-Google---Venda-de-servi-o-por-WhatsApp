
import React from 'react';
import { Section } from './ui/Section';
import { Stethoscope, Utensils, Wrench, ShoppingBag, Briefcase, Car, Building2, Scissors } from 'lucide-react';

export const TargetAudience = () => {
  const niches = [
    { 
      icon: <Stethoscope />, 
      name: "Saúde & Clínicas",
      tags: "Médicos, Dentistas, Nutricionistas, Psicólogos"
    },
    { 
      icon: <Briefcase />, 
      name: "Profissionais Autônomos", 
      tags: "Advogados, Arquitetos, Contadores, Engenheiros"
    },
    { 
      icon: <Wrench />, 
      name: "Serviços Residenciais",
      tags: "Eletricistas, Refrigeração, Dedetizadoras"
    },
    { 
      icon: <ShoppingBag />, 
      name: "Comércio Local",
      tags: "Pet Shops, Floriculturas, Lojas de Roupa"
    },
    { 
      icon: <Utensils />, 
      name: "Bares & Restaurantes",
      tags: "Pizzarias, Hamburguerias, Cafeterias, Delivery"
    },
    { 
      icon: <Car />, 
      name: "Automotivo & Estética",
      tags: "Mecânicas, Funilaria, Lava-jato, Blindadoras"
    },
    { 
      icon: <Building2 />, 
      name: "Imobiliárias",
      tags: "Corretores, Construtoras, Venda e Aluguel"
    },
    { 
      icon: <Scissors />, 
      name: "Beleza & Bem-estar",
      tags: "Salões de Beleza, Barbearias, Estética, Spa"
    },
  ];

  return (
    <Section className="py-16 border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Para quem é o <span className="text-amber-500">Método?</span>
        </h2>
        <p className="text-slate-400">
          Se o seu cliente pesquisa pelo seu serviço no Google, nós podemos te colocar no topo.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {niches.map((niche, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 p-6 rounded-xl flex flex-col items-center gap-3 transition-colors duration-300 group hover:bg-slate-800/80">
            <div className="text-slate-500 group-hover:text-amber-500 transition-colors w-8 h-8 md:w-10 md:h-10 [&>svg]:w-full [&>svg]:h-full mb-1">
              {niche.icon}
            </div>
            <span className="text-white font-bold text-sm md:text-base text-center group-hover:text-amber-400 transition-colors leading-tight">
              {niche.name}
            </span>
            <span className="text-slate-500 text-[10px] md:text-xs text-center leading-relaxed px-2">
              {niche.tags}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-sm text-slate-500 italic">
          *Metodologia adaptável para qualquer negócio físico ou de área de cobertura.
        </p>
      </div>
    </Section>
  );
};
