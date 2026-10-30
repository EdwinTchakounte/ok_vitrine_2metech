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

/**
 * App EnMKit Banc (Smart Home Learning Lab) : APK distinct de l'app client (identifiant com.enmkit.banc, les deux
 * s'installent côte à côte), hébergé sur le serveur EnMKit avec son empreinte SHA-256.
 */
export const BANC_APK_URL = 'https://dashboard.enmkit.horus-lab.com/telechargements/enmkit-banc.apk';
export const BANC_APK_SHA256_URL = `${BANC_APK_URL}.sha256`;
/** Guide d'utilisation de l'app EnMKit Banc (PDF servi par la vitrine). */
export const BANC_GUIDE_URL = '/docs/guide-enmkit-banc.pdf';
export const BANC_VERSION = '1.1.0';

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

/* ------------------------------------------------------------------
   EnMKit platform (API + web dashboard), self-hosted by 2ME-TECH on the
   horus-lab.com sub-domains. Build-time env vars (see `.env.example`)
   override the defaults; setting one to an empty string hides the
   matching entry (header, footer, platform page).
   ------------------------------------------------------------------ */

const DEFAULT_DASHBOARD_URL = 'https://dashboard.enmkit.horus-lab.com';
const DEFAULT_API_URL = 'https://api.enmkit.horus-lab.com';

const envUrl = (value: string | undefined, fallback: string) =>
  (value ?? fallback).trim().replace(/\/+$/, '');

export const PLATFORM_LINKS = {
  /** Web dashboard sign-in (owners, trainers, 2ME-TECH staff). */
  dashboard: envUrl(import.meta.env.VITE_DASHBOARD_URL, DEFAULT_DASHBOARD_URL),
  /** Public API base URL (used by the mobile app; shown for integrators). */
  api: envUrl(import.meta.env.VITE_API_URL, DEFAULT_API_URL),
} as const;

/** True once the dashboard URL is configured: gates every "Espace plateforme" entry. */
export const HAS_PLATFORM_ACCESS = PLATFORM_LINKS.dashboard !== '';

/** Contact page link with a pre-filled subject (`/contact?subject=…`). */
export const contactWithSubject = (subject: string) =>
  `/contact?subject=${encodeURIComponent(subject)}`;
