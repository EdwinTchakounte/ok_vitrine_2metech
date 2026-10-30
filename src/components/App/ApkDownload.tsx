import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Smartphone, ExternalLink, ShieldCheck, WifiOff, FileText } from 'lucide-react';
import { cn } from '../../lib/cn';
import {
  APK_SHA256_URL,
  APK_VIEW_URL,
  BANC_APK_SHA256_URL,
  BANC_APK_URL,
  BANC_GUIDE_URL,
  BANC_VERSION,
  CLIENT_GUIDE_URL,
  CLIENT_VERSION,
} from '../../lib/links';
import QRCode from '../ui/QRCode';

interface ApkDownloadProps {
  /** `invert` renders on a dark band; `panel` renders on a normal surface. */
  variant?: 'panel' | 'invert';
  className?: string;
  /** Hide the QR on very tight layouts. */
  showQr?: boolean;
  /** `client` : app EnMKit des propriétaires ; `banc` : app du Learning Lab (toutes deux sur le serveur EnMKit). */
  app?: 'client' | 'banc';
}

/**
 * The download unit: APK button plus a QR code that encodes the very same
 * URL, so a visitor on a laptop can hand the link straight to their phone.
 */
export const ApkDownload: React.FC<ApkDownloadProps> = ({
  variant = 'panel',
  className,
  showQr = true,
  app = 'client',
}) => {
  const { t } = useTranslation();
  const invert = variant === 'invert';
  const banc = app === 'banc';
  const mainUrl = banc ? BANC_APK_URL : APK_VIEW_URL;
  const secondaryUrl = banc ? BANC_APK_SHA256_URL : APK_SHA256_URL;
  const guideUrl = banc ? BANC_GUIDE_URL : CLIENT_GUIDE_URL;

  /* The QR keeps a light quiet zone in both themes, because inverted codes are
     unreliable on a fair number of phone cameras. */
  const qrDark = '#0f172a';
  const qrLight = '#ffffff';

  const badges = [
    { icon: Smartphone, label: t('app.androidOnly') },
    { icon: ShieldCheck, label: t('app.free') },
    { icon: WifiOff, label: t('app.offline') },
  ];

  return (
    <div
      className={cn(
        'rounded-xl border p-5 sm:p-6 lg:p-7',
        invert
          ? 'border-white/10 bg-white/[0.04] backdrop-blur-sm'
          : 'border-line bg-surface shadow-soft',
        className,
      )}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
        {/* Copy + actions */}
        <div className="min-w-0 flex-1">
          <span className={invert ? 'chip-dark' : 'chip'}>{t(banc ? 'app.banc.eyebrow' : 'app.eyebrow')}</span>

          <h3
            className={cn(
              'mt-3 text-fluid-xl font-bold leading-tight',
              invert ? 'text-white' : 'text-fg',
            )}
          >
            {t(banc ? 'app.banc.title' : 'app.download')}
          </h3>
          <p
            className={cn(
              'mt-1.5 text-sm leading-relaxed',
              invert ? 'text-white/70' : 'text-fg-muted',
            )}
          >
            {banc ? t('app.banc.hint') : t('app.downloadHint')}
          </p>
          <p className={cn('mt-1 text-xs font-medium', invert ? 'text-white/55' : 'text-fg-subtle')}>
            {banc
              ? t('app.banc.version', { version: BANC_VERSION })
              : t('app.clientVersion', { version: CLIENT_VERSION })}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href={mainUrl}
              rel="noopener noreferrer"
              download={banc ? 'enmkit-banc.apk' : 'enmkit.apk'}
              className="btn-primary btn-md"
            >
              <Download className="h-4 w-4" />
              <span>{t(banc ? 'app.banc.download' : 'app.download')}</span>
            </a>
            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors',
                invert
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-fg-muted hover:text-brand-blue-700 hover:bg-surface-hover',
              )}
            >
              {t('app.banc.checksum')}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={guideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors',
                invert
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-fg-muted hover:text-brand-blue-700 hover:bg-surface-hover',
              )}
            >
              <FileText className="h-3.5 w-3.5" />
              {t('app.banc.guide')}
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {badges.map((b) => (
              <li
                key={b.label}
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs',
                  invert ? 'text-white/60' : 'text-fg-subtle',
                )}
              >
                <b.icon
                  className={cn(
                    'h-3.5 w-3.5',
                    invert ? 'text-brand-green-300' : 'text-brand-green-500',
                  )}
                />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* QR */}
        {showQr && (
          <div className="flex shrink-0 flex-col items-center gap-2.5 sm:w-[9.5rem]">
            <div
              className={cn(
                'rounded-lg border p-2.5',
                invert ? 'border-white/15 bg-white' : 'border-line bg-white',
              )}
            >
              <QRCode
                value={mainUrl}
                size={130}
                ecc="Q"
                dark={qrDark}
                light={qrLight}
                title={t('app.scanTitle')}
                className="block h-[130px] w-[130px]"
              />
            </div>
            <p
              className={cn(
                'text-center text-[11px] font-semibold uppercase tracking-[0.12em]',
                invert ? 'text-white/55' : 'text-fg-subtle',
              )}
            >
              {t('app.scanTitle')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApkDownload;
