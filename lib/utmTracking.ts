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

export const openDiagnosisModal = (e?: React.MouseEvent, options?: { buttonText?: string, buttonVariant?: 'blue' | 'green', customMessage?: string }) => {
  if (e) e.preventDefault();
  window.dispatchEvent(new CustomEvent('open-diagnosis-modal', { 
    detail: options 
  }));
};
