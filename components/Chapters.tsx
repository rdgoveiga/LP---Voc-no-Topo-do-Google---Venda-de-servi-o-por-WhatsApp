
import React from 'react';
import { Section } from './ui/Section';
import { 
  CheckCircle2, History, Target, TrendingUp, TrendingDown, 
  XCircle, CheckCircle, ArrowDown, 
  ShieldCheck, BarChart3, Search,
  AlertCircle, MapPinOff, MousePointerClick, Trophy, Ban,
  Users, Crown, Zap, CheckCircle as CheckIcon
} from 'lucide-react';

export const Chapters = () => {
  return (
    <div className="relative">
      {/* ETAPA 1: DIAGNÓSTICO (ESTADO ATUAL) */}
      <Section className="pb-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <History className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Diagnóstico de Posicionamento</span>
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2]">
              Onde sua empresa está <br className="hidden md:block" />
              <span className="text-amber-500">travada hoje?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg px-2">
              A diferença entre ser ignorado e ser a escolha número #1 é utilizar as <span className="text-white font-semibold">estratégias certas</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
            {/* O LADO DA DOR: O PERFIL QUEBRADO */}
            <div className="bg-slate-950 p-6 md:p-12 relative border-b lg:border-b-0 border-slate-800">
              <div className="flex items-center gap-3 mb-8 md:mb-10 pb-6 border-b border-red-500/20">
                <div className="bg-red-500/10 p-2 rounded-lg shrink-0">
                  <TrendingDown className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-slate-400">O Ciclo da Invisibilidade</h4>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4 md:gap-5 items-start">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 shrink-0">
                    <MapPinOff className="w-5 h-5 md:w-6 md:h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Configuração Incorreta</p>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Perfil com dados vagos que fazem o Google te esconder do mapa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-5 items-start">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 shrink-0">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Marketing de Esperança</p>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Postar sem estratégia de palavras-chave estruturadas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-5 items-start">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 shrink-0">
                    <Ban className="w-5 h-5 md:w-6 md:h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Abandono Digital</p>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Um perfil que não gera confiança. O cliente <span className="text-white font-bold">escolhe o concorrente</span> e você nem imagina por quê.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 flex items-center gap-3 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0" />
                <p className="text-red-400/80 text-[10px] md:text-sm font-medium">Você está perdendo faturamento real hoje.</p>
              </div>
            </div>

            {/* O LADO DA SOLUÇÃO: MÉTODO VOCÊ NO TOPO */}
            <div className="bg-slate-900 p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-3 mb-8 md:mb-10 pb-6 border-b border-amber-500/20 relative z-10">
                <div className="bg-amber-500 p-2 rounded-lg shrink-0">
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-white">Nossa Solução Estratégica</h4>
              </div>

              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="flex gap-4 md:gap-5 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 shrink-0">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Arquitetura de Domínio</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      Configuração que te coloca <span className="text-amber-500 font-bold">nas 3 primeiras posições</span>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-5 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 shrink-0">
                    <MousePointerClick className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Ímã de Cliques</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      O cliente bate o olho e <span className="text-amber-500 font-bold">não tem outra escolha</span> a não ser você.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-5 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 shrink-0">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Escala de Faturamento</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      Trazendo pessoas que já estão com o cartão na mão prontas para comprar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12">
                <div className="bg-gradient-to-r from-amber-500/20 to-transparent p-[1px] rounded-xl">
                  <div className="bg-slate-900/80 p-3 md:p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-amber-500 shrink-0" />
                    <p className="text-amber-500 font-bold text-[10px] md:text-sm tracking-tight uppercase">Resultados após a implementação.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-dark border-4 border-slate-800 rounded-full items-center justify-center z-20 shadow-2xl">
              <span className="text-slate-600 font-black text-xl italic">VS</span>
            </div>
          </div>
        </div>
      </Section>

      <div className="flex justify-center py-8 md:py-12">
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-slate-800 animate-bounce" />
      </div>

      {/* SEÇÃO: A NOVA REALIDADE DO NEGÓCIO */}
      <Section className="pt-10 md:pt-20 pb-20 md:pb-32 overflow-hidden">
        <div className="text-center mb-12 md:mb-20 relative px-4">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            A Nova Realidade do <br className="hidden md:block" />
            <span className="text-amber-500">Seu Negócio no Google</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            Após nossa intervenção, seu perfil passa a funcionar como um <span className="text-white font-bold">ativo de vendas 24h</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 md:mb-20 px-4">
          {[
            {
              icon: <Users className="w-7 h-7 md:w-8 md:h-8 text-amber-500" />,
              title: "Clientes Decididos",
              desc: "Receba cliques de pessoas que já pesquisaram o que você vende."
            },
            {
              icon: <Crown className="w-7 h-7 md:w-8 md:h-8 text-amber-500" />,
              title: "Empresa Referência",
              desc: "Sua marca é percebida como a autoridade máxima do seu bairro."
            },
            {
              icon: <Zap className="w-7 h-7 md:w-8 md:h-8 text-amber-500" />,
              title: "Domínio Absoluto",
              desc: "Enquanto a concorrência briga, você domina o Top 3 absoluto."
            }
          ].map((item, i) => (
            <div key={i} className="group p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300">
              <div className="mb-5 bg-amber-500/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAIXA DE IMPACTO: PREÇO VS AUTORIDADE */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-32 px-4">
          <div className="bg-gradient-to-r from-amber-600 to-amber-400 p-[1px] rounded-2xl md:rounded-3xl shadow-xl">
            <div className="bg-slate-950 px-6 py-8 md:px-8 md:py-10 rounded-[calc(1rem+1px)] md:rounded-[calc(1.5rem+1px)] text-center">
              <p className="text-white text-lg md:text-3xl font-black uppercase tracking-tight leading-tight">
                👉 Você para de disputar <span className="text-amber-500">preço</span> e passa a disputar <span className="text-amber-500 italic underline decoration-amber-500/30 underline-offset-4">autoridade</span>.
              </p>
            </div>
          </div>
        </div>

        {/* QUALIFICAÇÃO: QUEM BUSCAMOS ATENDER */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center bg-slate-900/50 rounded-3xl md:rounded-[3rem] border border-slate-800 p-6 md:p-16 backdrop-blur-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
                <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500" />
                <span>Perfil de Parceria</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 font-serif leading-tight">
                O <span className="text-amber-500 font-bold">Método Você no Topo™</span> é <br className="hidden md:block" />
                <span className="text-white italic">o que você precisa se...</span>
              </h3>
              
              <div className="space-y-4 md:space-y-5">
                {[
                  "Quer estar entre os primeiros resultados",
                  "Seu negócio atende uma região específica",
                  "Você quer previsibilidade nas vendas",
                  "Prefere especialistas a tentativa e erro"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-500" />
                    </div>
                    <span className="text-slate-300 text-base md:text-lg font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-950 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl overflow-hidden">
                <h4 className="text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Critérios de Seleção
                </h4>
                <p className="text-slate-200 text-lg md:text-xl font-bold mb-4 md:mb-6 leading-tight">
                  Não atendemos negócios que não prezam pela qualidade extrema.
                </p>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 italic opacity-80">
                  "Nossa reputação é construída sobre o sucesso. Por isso, selecionamos empresas com entrega real."
                </p>
                <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-amber-500/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
