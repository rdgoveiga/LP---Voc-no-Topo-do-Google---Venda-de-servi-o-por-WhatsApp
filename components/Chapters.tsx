
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
              <History className="w-4 h-4" />
              <span>Diagnóstico de Posicionamento</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Onde sua empresa está <br className="hidden md:block" />
              <span className="text-amber-500">travada hoje?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A diferença entre ser ignorado e ser a escolha número #1 é utilizar as <span className="text-white font-semibold">estratégias certas e validadas</span> pelo Google.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 items-stretch relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
            {/* O LADO DA DOR: O PERFIL QUEBRADO */}
            <div className="bg-slate-950 p-8 md:p-12 relative">
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-red-500/20">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-400">O Ciclo da Invisibilidade</h4>
              </div>

              <div className="space-y-8">
                <div className="group flex gap-5 items-start">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 group-hover:border-red-500/30 transition-colors">
                    <MapPinOff className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Configuração Incorreta</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Perfil com dados vagos ou categorias erradas que fazem o Google te considerar "irrelevante" e te esconder do mapa.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 group-hover:border-red-500/30 transition-colors">
                    <Search className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Marketing de Esperança</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Postar por postar sem saber que o Google exige palavras-chave específicas escondidas na sua estrutura de dados.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 group-hover:border-red-500/30 transition-colors">
                    <Ban className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Abandono Digital</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Um perfil "fantasma" que não gera confiança. Seu perfil passa despercebido, o cliente <span className="text-white font-bold">escolhe o concorrente</span> e você nem imagina o motivo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-red-400/80 text-sm font-medium">Você está perdendo faturamento real todos os dias.</p>
              </div>
            </div>

            {/* O LADO DA SOLUÇÃO: MÉTODO VOCÊ NO TOPO */}
            <div className="bg-slate-900 p-8 md:p-12 relative overflow-hidden border-l border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-amber-500/20 relative z-10">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Trophy className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Nossa Solução Estratégica</h4>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="group flex gap-5 items-start">
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Arquitetura de Domínio</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Configuração milimétrica que <span className="text-amber-500 font-bold">otimiza</span> o algoritmo para te colocar nas 3 primeiras posições.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <MousePointerClick className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Ímã de Cliques</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Engenharia visual para negócios locais. O cliente bate o olho e <span className="text-amber-500 font-bold">não tem outra escolha</span> a não ser clicar.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <BarChart3 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Escala de Faturamento</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Um sistema que trabalha 24h por você, trazendo pessoas que já estão com o cartão na mão prontas para comprar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="bg-gradient-to-r from-amber-500/20 to-transparent p-[1px] rounded-xl">
                  <div className="bg-slate-900/80 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <p className="text-amber-500 font-bold text-sm tracking-tight uppercase">Resultados sólidos após a implementação.</p>
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

      <div className="flex justify-center py-12">
        <ArrowDown className="w-8 h-8 text-slate-800 animate-bounce" />
      </div>

      {/* SEÇÃO: A NOVA REALIDADE DO NEGÓCIO */}
      <Section className="pt-20 pb-32 overflow-hidden">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif relative z-10">
            A Nova Realidade do <br className="hidden md:block" />
            <span className="text-amber-500">Seu Negócio no Google</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl relative z-10 leading-relaxed">
            Após nossa intervenção estratégica, seu perfil deixa de ser apenas “mais um” e passa a funcionar como um <span className="text-white font-bold">ativo de vendas 24h</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              icon: <Users className="w-8 h-8 text-amber-500" />,
              title: "Clientes Decididos",
              desc: "Receba cliques de pessoas que já pesquisaram o que você vende e estão prontas para fechar, eliminando curiosos."
            },
            {
              icon: <Crown className="w-8 h-8 text-amber-500" />,
              title: "Empresa Referência",
              desc: "Sua marca é percebida como a autoridade máxima do bairro, construindo confiança antes mesmo do primeiro contato."
            },
            {
              icon: <Zap className="w-8 h-8 text-amber-500" />,
              title: "Domínio Absoluto",
              desc: "Enquanto a concorrência briga pelas sobras, você domina o Top 3 e anula qualquer opção de comparação."
            }
          ].map((item, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-500 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
              <div className="mb-6 bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAIXA DE IMPACTO: PREÇO VS AUTORIDADE */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="bg-gradient-to-r from-amber-600 to-amber-400 p-[2px] rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.2)]">
            <div className="bg-slate-950 px-8 py-10 rounded-[calc(1.5rem+4px)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-amber-500/5 opacity-50 pointer-events-none"></div>
              <p className="text-white text-xl md:text-3xl font-black uppercase tracking-tight relative z-10 leading-tight">
                👉 Você para de disputar <span className="text-amber-500">preço</span> <br className="md:hidden" /> e passa a disputar <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">autoridade</span>.
              </p>
            </div>
          </div>
        </div>

        {/* QUALIFICAÇÃO: QUEM BUSCAMOS ATENDER */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/50 rounded-[3rem] border border-slate-800 p-8 md:p-16 backdrop-blur-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Target className="w-4 h-4 text-amber-500" />
                <span>Perfil de Parceria</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">
                O <span className="text-amber-500 font-bold">Método Você no Topo do Google Local™</span> é <br />
                <span className="text-white italic">exatamente o que você precisa se...</span>
              </h3>
              
              <div className="space-y-5">
                {[
                  "Você quer estar entre os primeiros resultados do Google",
                  "Seu negócio atende uma região específica",
                  "Você quer previsibilidade, não sorte",
                  "Você prefere assessoria especializada a tentativa e erro"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                      <CheckIcon className="w-3.5 h-3.5 text-amber-500 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <span className="text-slate-300 text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Ban className="w-12 h-12 text-red-500/10" />
                </div>
                <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Critérios de Seleção
                </h4>
                <p className="text-slate-200 text-xl font-bold mb-6 leading-tight">
                  Não atendemos negócios que não prezam pela qualidade extrema.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
                  "Nossa reputação é construída sobre o sucesso dos nossos clientes. Por isso, selecionamos apenas empresas que entregam valor real aos seus consumidores."
                </p>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-amber-500/50"></div>
                </div>
                <p className="text-[10px] text-slate-600 mt-4 uppercase font-bold tracking-widest">Comprometimento com a excelência</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-500/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
