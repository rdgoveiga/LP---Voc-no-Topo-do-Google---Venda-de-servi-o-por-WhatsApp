import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { metaTrack, getClientIp } from '../lib/metaTracking';
import { getUTMs } from '../lib/utmTracking';
import { getABVersion } from '../lib/abTest';

interface DiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosisModal: React.FC<DiagnosisModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState('RECEBER DIAGNÓSTICO AGORA');
  const [btnVariant, setBtnVariant] = useState<'blue' | 'green'>('blue');
  const [customMessage, setCustomMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: ''
  });

  useEffect(() => {
    // Pré-carrega o IP em background assim que o modal abre, para zero delays depois
    if (isOpen) {
      getClientIp().catch(() => {});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e.detail?.buttonText) setBtnText(e.detail.buttonText);
      else setBtnText('RECEBER DIAGNÓSTICO AGORA');
      
      if (e.detail?.buttonVariant) setBtnVariant(e.detail.buttonVariant);
      else setBtnVariant('blue');

      if (e.detail?.customMessage) setCustomMessage(e.detail.customMessage);
      else setCustomMessage(null);
    };
    window.addEventListener('open-diagnosis-modal' as any, handleOpen);
    return () => window.removeEventListener('open-diagnosis-modal' as any, handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Feedback visual instantâneo

    try {
      const utmData = getUTMs();
      const abVersion = getABVersion();
      const eventId = `lead-${Date.now()}`;

      // 1. Enviar para o Google Sheets (Webhook)
      const webhookData = new URLSearchParams({
        ...utmData,
        ab_version: abVersion,
        name: formData.name,
        business: formData.businessName,
        phone: formData.whatsapp,
        timestamp: new Date().toISOString(),
        source: 'LP_Qualification_Form'
      });

      if (CONFIG.links.webhookUrl) {
        // Sem AWAIT. keepalive garante o envio msm se redirecionar
        fetch(CONFIG.links.webhookUrl, {
          method: 'POST',
          body: webhookData,
          mode: 'no-cors',
          keepalive: true
        }).catch(() => {});
      }

      // 2. Disparar Lead no Meta com Match Quality Máximo
      // Sem AWAIT e já com keepalive: true ativo no arquivo metaTracking
      metaTrack('Lead', eventId, {
        content_name: 'Diagnosis Request',
        business_name: formData.businessName
      }, {
        fn: formData.name,
        ph: formData.whatsapp.replace(/\D/g, '')
      }).catch(() => {});

      // 3. Redirecionar IMEDIATAMENTE para o WhatsApp
      const defaultMessage = `Oi Rodrigo, meu nome é ${formData.name}, da empresa ${formData.businessName}. Acabei de solicitar meu diagnóstico no site e quero colocar a minha empresa no top1 do Google.`;
      
      const finalMessage = customMessage 
        ? customMessage
            .replace(/\[Empresa\]/g, formData.businessName)
            .replace(/\[Nome\]/g, formData.name)
        : defaultMessage;

      // Extrai o número do telefone do link no config.ts
      const phoneNumber = CONFIG.links.whatsapp.match(/wa\.me\/(\d+)/)?.[1] || '5521985899548';
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
      
      window.location.href = waUrl;
    } catch (error) {
      console.error('Erro ao processar lead:', error);
      setLoading(false);
    }
  };

  const btnClasses = btnVariant === 'green'
    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-3xl w-full max-w-md relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Diagnóstico Gratuito</h2>
          <p className="text-white/60">
            Preencha os dados abaixo para receber seu diagnóstico no WhatsApp por Rodrigo Veiga.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1">Seu Nome</label>
            <input
              required
              type="text"
              placeholder="Ex: João Silva"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-1">Nome da sua Empresa</label>
            <input
              required
              type="text"
              placeholder="Ex: Minha Empresa Ltda"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-1">WhatsApp</label>
            <input
              required
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`w-full ${btnClasses} text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${loading ? 'opacity-70' : ''}`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processando...
              </>
            ) : (
              btnText
            )}
          </button>
          
          <p className="text-center text-[10px] text-white/30 uppercase tracking-widest mt-4">
            🔥 100% SEGURO • DADOS PROTEGIDOS
          </p>
        </form>
      </div>
    </div>
  );
};
