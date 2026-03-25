
import React from 'react';
import { Section } from './ui/Section';
import { Smartphone, Trophy, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Promises = () => {
  return (
    <div className="bg-brand-dark relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Section className="relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Sua Nova Realidade</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            O que acontece quando você assume <br className="hidden md:block" />
            o <span className="text-gold-gradient">Controle do Topo?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Esqueça a luta por likes. Nós entregamos o que realmente importa para o seu negócio crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Demanda (Atualizado para Mensagens, Agendamentos e Ligações) */}
          <div className="group relative bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Smartphone className="w-8 h-8 text-amber-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Mensagens, Agendamentos e Ligações</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Pare de correr atrás. O cliente te encontra no momento exato em que precisa e escolhe como falar: WhatsApp, telefone ou agendamento direto.
            </p>
            
            <ul className="text-left w-full space-y-3 relative z-10 border-t border-slate-800 pt-6">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Orçamentos no WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Agenda cheia automaticamente</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Autoridade */}
          <div className="group relative bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col items-center text-center transform md:-translate-y-6">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20">
              O Mais Desejado
            </div>

            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Trophy className="w-8 h-8 text-amber-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Referência Máxima na Região</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Seu concorrente se torna irrelevante. Quando pesquisarem pelo seu serviço, sua empresa será a <strong>autoridade indiscutível</strong>.
            </p>

            <ul className="text-left w-full space-y-3 relative z-10 border-t border-slate-800 pt-6">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Blindagem contra concorrência</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Percepção de alto valor</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Lucro */}
          <div className="group relative bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
              <TrendingUp className="w-8 h-8 text-amber-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Previsibilidade de Caixa</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Transforme o "talvez venda" em rotina. Tenha um fluxo constante de orçamentos chegando no seu WhatsApp <strong>todos os dias</strong>.
            </p>

            <ul className="text-left w-full space-y-3 relative z-10 border-t border-slate-800 pt-6">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Vendas recorrentes</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Fim da dependência de indicação</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};
