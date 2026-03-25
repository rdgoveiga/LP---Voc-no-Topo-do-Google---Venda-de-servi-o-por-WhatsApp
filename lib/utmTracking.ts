import React from 'react';
import { CONFIG } from '../config';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id'
];

const STORAGE_KEY = '@utm_data';

export const captureUTMs = () => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const utmData: Record<string, string> = {};
  let hasNewUTMs = false;

  UTM_KEYS.forEach(key => {
    const value = params.get(key);
    if (value) {
      utmData[key] = value;
      hasNewUTMs = true;
    }
  });

  // Se houver novos UTMs na URL, sobrescreve o localStorage
  if (hasNewUTMs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(utmData));
  }
};

export const getUTMs = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error('Erro ao recuperar UTMs:', e);
    return {};
  }
};

export const handleWhatsAppRedirect = async (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  const utmData = getUTMs();
  const data = new URLSearchParams({
    ...utmData,
    timestamp: new Date().toISOString()
  });

  const webhookUrl = CONFIG.links.webhookUrl;

  if (webhookUrl && webhookUrl !== "https://script.google.com/macros/s/SEU_WEBHOOK_AQUI/exec") {
    try {
      // Tenta enviar via fetch com keepalive
      fetch(webhookUrl, {
        method: 'POST',
        body: data,
        keepalive: true
      }).catch((err) => {
        console.warn('Fetch keepalive falhou, tentando sendBeacon...', err);
        // Fallback para sendBeacon se fetch falhar
        if (navigator.sendBeacon) {
          navigator.sendBeacon(webhookUrl, data);
        }
      });
    } catch (error) {
      console.error('Erro ao enviar webhook:', error);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(webhookUrl, data);
      }
    }
  } else {
    console.warn('Webhook URL não configurado. Os UTMs não foram enviados.');
  }

  // Redireciona para o WhatsApp de forma invisível/sem bloquear
  window.open(CONFIG.links.whatsapp, "_blank");
};
