
import { CONFIG } from '../config';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    __IS_TEST_ENV__?: boolean;
    enableTestMode?: () => void;
    disableTestMode?: () => void;
    enableInternalMode?: () => void;
    disableInternalMode?: () => void;
  }
}

// IPs e dados internos conhecidos para bloqueio automático (Sem configuração manual necessária)
const BLOCKED_IPS = ['179.225.47.49']; 
const BLOCKED_NAMES = ['Teste', 'Rodrigo Veiga', 'Rodrigo', 'Admin'];

// Cache para a promessa de checagem de ambiente
let testEnvPromise: Promise<boolean> | null = null;

// Função interna de checagem robusta
const checkTestEnv = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  
  const hostname = window.location.hostname;
  const params = new URLSearchParams(window.location.search);
  const isLocalStorageTest = localStorage.getItem('test_user') === 'true' || localStorage.getItem('internal_user') === 'true';

  // 1. Bloqueios Síncronos (Instantâneos)
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
  const isStaging = hostname.includes('staging') || hostname.includes('dev') && !hostname.includes('lpgmn.vercel.app');
  const isTestParam = params.get('test') === 'true';

  // Se já detectamos pelos meios síncronos, marcamos a flag imediatamente
  if (isLocal || isStaging || isTestParam || isLocalStorageTest) {
    window.__IS_TEST_ENV__ = true;
  }

  // 2. Bloqueio Assíncrono (IP)
  const clientIp = await getClientIp();
  const isBlockedIp = clientIp ? BLOCKED_IPS.includes(clientIp) : false;

  const result = isLocal || isStaging || isTestParam || isLocalStorageTest || isBlockedIp;
  
  // Atualiza a flag global final
  window.__IS_TEST_ENV__ = result;
  return result;
};

/**
 * Garante que a verificação de ambiente foi concluída.
 * Todas as chamadas de tracking devem aguardar essa função.
 */
export const ensureTestEnvReady = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  
  // Se a flag já estiver definida, retorna o valor
  if (window.__IS_TEST_ENV__ !== undefined) {
    return window.__IS_TEST_ENV__;
  }

  // Se já houver uma checagem em curso, aguarda ela
  if (testEnvPromise) {
    return testEnvPromise;
  }

  // Caso contrário, inicia uma nova checagem
  testEnvPromise = checkTestEnv();
  return testEnvPromise;
};

// Inicialização imediata no carregamento do script
if (typeof window !== 'undefined') {
  ensureTestEnvReady();

  // Helper functions expostas no window
  window.enableTestMode = () => {
    localStorage.setItem('test_user', 'true');
    window.__IS_TEST_ENV__ = true;
    console.log('%c[Test Mode] ATIVADO.', 'color: #fff; background: #ff0000; padding: 4px; border-radius: 4px;');
  };

  window.disableTestMode = () => {
    localStorage.removeItem('test_user');
    window.__IS_TEST_ENV__ = false;
    testEnvPromise = null;
    ensureTestEnvReady();
    console.log('%c[Test Mode] DESATIVADO.', 'color: #fff; background: #00aa00; padding: 4px; border-radius: 4px;');
  };

  window.enableInternalMode = () => {
    localStorage.setItem('internal_user', 'true');
    window.__IS_TEST_ENV__ = true;
    console.log('%c[Internal User] ATIVADO.', 'color: #fff; background: #9c27b0; padding: 4px; border-radius: 4px;');
  };

  window.disableInternalMode = () => {
    localStorage.removeItem('internal_user');
    window.__IS_TEST_ENV__ = false;
    testEnvPromise = null;
    ensureTestEnvReady();
    console.log('%c[Internal User] DESATIVADO.', 'color: #fff; background: #607d8b; padding: 4px; border-radius: 4px;');
  }
}

// Cache local para o IP para evitar múltiplas chamadas à API externa
let cachedIp: string | null = null;

export const getClientIp = async () => {
  if (cachedIp) return cachedIp;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    
    const response = await fetch('https://api64.ipify.org?format=json', { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const data = await response.json();
    cachedIp = data.ip;
    return cachedIp;
  } catch (err) {
    return null;
  }
};

const getFbc = () => {
  const cookieFbc = document.cookie.split('; ').find(row => row.startsWith('_fbc='))?.split('=')[1];
  if (cookieFbc) return cookieFbc;

  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');
  if (fbclid) {
    const fbc = `fb.1.${Date.now()}.${fbclid}`;
    document.cookie = `_fbc=${fbc}; path=/; max-age=7776000; SameSite=Lax`;
    return fbc;
  }
  return null;
};

const getExternalId = () => {
  let extId = localStorage.getItem('meta_ext_id');
  if (!extId) {
    extId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('meta_ext_id', extId);
  }
  return extId;
};

// Utility to hash sensitive data for Meta (SHA-256)
async function hashData(data: string): Promise<string> {
  if (!data || data.trim() === "") return "";
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export const metaTrack = async (eventName: string, eventId: string, customData: any = {}, userData: { em?: string, ph?: string, fn?: string } = {}) => {
  if (typeof window === 'undefined') return;

  // 1. Aguarda a verificação de ambiente estar 100% concluída
  const isTestEnv = await ensureTestEnvReady();

  // 2. Redundância de Segurança (Verificação Síncrona + IP Cacheado)
  const hostname = window.location.hostname;
  const params = new URLSearchParams(window.location.search);
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
  const isStaging = hostname.includes('staging') || hostname.includes('dev') && !hostname.includes('lpgmn.vercel.app');
  const isTestParam = params.get('test') === 'true';
  const isInternal = localStorage.getItem('test_user') === 'true' || localStorage.getItem('internal_user') === 'true';
  const clientIp = await getClientIp();
  const isBlockedIp = clientIp ? BLOCKED_IPS.includes(clientIp) : false;

  // Motivos detalhados para o log (Formato solicitado)
  let blockReason = "";
  if (isLocal) blockReason = "ambiente local";
  else if (isStaging) blockReason = "ambiente de teste / dev";
  else if (isTestParam) blockReason = "parâmetro de teste (?test=true)";
  else if (isInternal) blockReason = "usuário interno";
  else if (isBlockedIp) blockReason = "IP bloqueado";
  else if (isTestEnv) blockReason = "ambiente de teste";

  if (blockReason) {
    console.log(`%c[Meta Tracking] Evento "${eventName}" bloqueado (motivo: ${blockReason})`, 'color: #e91e63; font-weight: bold;');
    return;
  }

  // 3. Verificação de Dados (Nome de Teste ou Telefone do Dono)
  const ownerPhone = CONFIG.links.whatsapp.match(/wa\.me\/(\d+)/)?.[1] || '';
  const isOwnerData = (userData.ph && userData.ph === ownerPhone) || 
                     (userData.fn && BLOCKED_NAMES.some(name => userData.fn?.toLowerCase().includes(name.toLowerCase())));

  if (isOwnerData) {
    console.log(`%c[Meta Tracking] Evento "${eventName}" bloqueado (motivo: dados do proprietário detectados)`, 'color: #fff; background: #960000; padding: 2px 4px; border-radius: 2px;');
    return;
  }

  const externalId = getExternalId();
  const abVersion = localStorage.getItem('ab_version') || 'A';
  
  const fbc = getFbc();
  const fbp = document.cookie.split('; ').find(row => row.startsWith('_fbp='))?.split('=')[1] || null;

  const enrichedData = {
    ...customData,
    ab_test_version: abVersion,
    external_id: externalId
  };

  const hashedUserData: any = {
    client_ip_address: clientIp,
    client_user_agent: navigator.userAgent,
    fbp,
    fbc,
    external_id: externalId
  };

  if (userData.em) hashedUserData.em = await hashData(userData.em);
  if (userData.ph) hashedUserData.ph = await hashData(userData.ph);
  if (userData.fn) hashedUserData.fn = await hashData(userData.fn);

  if (window.fbq) {
    window.fbq('track', eventName, enrichedData, { 
      eventID: eventId 
    });
  }

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: window.location.href,
      action_source: "website",
      user_data: hashedUserData,
      custom_data: {
        ...enrichedData,
        client_type: "high_conversion_hybrid_ab_qualifier"
      }
    }],
    ...(CONFIG.meta.testEventCode && { test_event_code: CONFIG.meta.testEventCode })
  };

  try {
    fetch(`https://graph.facebook.com/v19.0/${CONFIG.meta.pixelId}/events?access_token=${CONFIG.meta.accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true // MANTÉM A REQUISIÇÃO VIVA MESMO SE A PÁGINA FOR FECHADA/REDIRECIONADA
    });
  } catch (e) {}
};
