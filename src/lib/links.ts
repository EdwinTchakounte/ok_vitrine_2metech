/**
 * App EnMKit (propriétaires, identifiant com.enmkit.app) : APK hébergé sur le serveur EnMKit avec son empreinte
 * SHA-256, comme l'app Banc. Le lien de téléchargement direct est aussi celui qu'encode le QR code.
 */
export const APK_VIEW_URL = 'https://dashboard.enmkit.horus-lab.com/telechargements/enmkit.apk';
export const APK_SHA256_URL = `${APK_VIEW_URL}.sha256`;
/** Guide d'utilisation de l'app EnMKit (PDF servi par la vitrine). */
export const CLIENT_GUIDE_URL = '/docs/guide-enmkit.pdf';
export const CLIENT_VERSION = '1.0.1';

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
