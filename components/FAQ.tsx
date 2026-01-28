
import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      q: "Como funciona a assessoria?",
      a: "Nós realizamos um diagnóstico completo do seu perfil atual, aplicamos todas as otimizações técnicas necessárias e mantemos uma rotina estratégica para garantir que você suba e permaneça no topo das buscas locais."
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "O Google costuma processar mudanças em poucos dias, mas a consolidação no topo varia de 15 a 45 dias, dependendo da concorrência da sua região."
    },
    {
      q: "Eu preciso fazer alguma coisa?",
      a: "Nosso serviço é 'mão na massa'. Nós cuidamos da parte técnica. Você só precisará nos fornecer algumas fotos e informações básicas do seu negócio quando solicitado."
    },
    {
      q: "Como iniciamos o trabalho?",
      a: "Após o primeiro contato via WhatsApp e fechamento, enviamos um formulário de diagnóstico. Assim que preenchido, nossa equipe inicia o processo de otimização imediatamente."
    }
  ];

  return (
    <Section className="pb-32">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas sobre a Assessoria</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </Section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left text-slate-200 hover:bg-slate-800 transition-colors"
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-amber-500" />}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};
