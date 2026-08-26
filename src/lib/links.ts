/** Google Drive file id of the published EnMKit Android build. */
export const APK_FILE_ID = '1fi4CcQ15gSQ-yL9J4ar8NBi4HH0Elakr';

/**
 * Drive's viewer page. This is what the QR code encodes and where the
 * download buttons point: Drive serves the file behind its own confirm
 * step, so the viewer page is the one link that behaves the same on
 * every phone and every browser.
 */
export const APK_VIEW_URL = `https://drive.google.com/file/d/${APK_FILE_ID}/view`;

/** Bypasses the viewer page. Works, but Drive may still interpose a scan warning. */
export const APK_DIRECT_URL = `https://drive.usercontent.google.com/download?id=${APK_FILE_ID}&export=download`;

export const WHATSAPP_NUMBER = '237696372245';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Screenshots shipped in `public/app`, in narrative order. */
export const APP_SHOTS = [
  'onboarding',
  'parc',
  'lignes',
  'commandes',
  'conso',
  'config',
  'qr-export',
  'qr-scan',
  'historique',
  'biometrie',
  'reglages',
  'faq',
  'numeros',
  'sms',
] as const;

export type AppShot = (typeof APP_SHOTS)[number];

export const shotSrc = (name: AppShot | string) => `/app/${name}.webp`;
