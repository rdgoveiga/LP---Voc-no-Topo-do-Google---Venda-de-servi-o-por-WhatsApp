
import { CONFIG } from '../config';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const getExternalId = () => {
  let extId = localStorage.getItem('meta_ext_id');
  if (!extId) {
    extId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('meta_ext_id', extId);
  }
  return extId;
};

export const metaTrack = async (eventName: string, eventId: string, customData: any = {}) => {
  const externalId = getExternalId();
  const currentUrl = window.location.href.split('?')[0];
  const abVersion = localStorage.getItem('ab_version') || 'A';

  const enrichedData = {
    ...customData,
    ab_test_version: abVersion,
    external_id: externalId
  };

  // Disparo imediato do Pixel (Navegador)
  if (window.fbq) {
    window.fbq('track', eventName, enrichedData, { 
      eventID: eventId 
    });
  }

  // Disparo em background da CAPI (Servidor)
  const fbp = document.cookie.split('; ').find(row => row.startsWith('_fbp='))?.split('=')[1] || null;
  const fbc = document.cookie.split('; ').find(row => row.startsWith('_fbc='))?.split('=')[1] || null;

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: currentUrl,
      action_source: "website",
      user_data: {
        client_user_agent: navigator.userAgent,
        fbp, fbc, external_id: externalId
      },
      custom_data: {
        ...enrichedData,
        client_type: "high_conversion_hybrid_ab"
      }
    }],
    ...(CONFIG.meta.testEventCode && { test_event_code: CONFIG.meta.testEventCode })
  };

  fetch(`https://graph.facebook.com/v19.0/${CONFIG.meta.pixelId}/events?access_token=${CONFIG.meta.accessToken}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {});

  return new Promise(resolve => setTimeout(resolve, 100));
};
