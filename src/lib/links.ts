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

/* ------------------------------------------------------------------
   EnMKit platform (API + web dashboard), self-hosted by 2ME-TECH under
   sub-domains that are not fixed yet. Every platform URL used by the
   site is read here, from build-time env vars (see `.env.example`).
   An empty / missing value means "not public yet": the matching entry
   (header, footer, platform page) is simply not rendered.
   ------------------------------------------------------------------ */

const envUrl = (value: string | undefined) => (value ?? '').trim().replace(/\/+$/, '');

export const PLATFORM_LINKS = {
  /** Web dashboard sign-in (owners, trainers, 2ME-TECH staff). */
  dashboard: envUrl(import.meta.env.VITE_DASHBOARD_URL),
  /** Public API base URL (used by the mobile app; shown for integrators). */
  api: envUrl(import.meta.env.VITE_API_URL),
} as const;

/** True once the dashboard URL is configured: gates every "Espace plateforme" entry. */
export const HAS_PLATFORM_ACCESS = PLATFORM_LINKS.dashboard !== '';

/** Contact page link with a pre-filled subject (`/contact?subject=…`). */
export const contactWithSubject = (subject: string) =>
  `/contact?subject=${encodeURIComponent(subject)}`;
