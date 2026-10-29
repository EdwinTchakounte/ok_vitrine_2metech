import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ToggleRight,
  Gauge,
  MessageSquare,
  Building2,
  Fingerprint,
  QrCode,
  Download,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  BrainCircuit,
  BookOpen,
  Bot,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';
import ApkDownload from '../components/App/ApkDownload';
import QRCode from '../components/ui/QRCode';
import { APK_VIEW_URL, APP_SHOTS, WHATSAPP_URL, shotSrc } from '../lib/links';
import { cn } from '../lib/cn';

const FEATURES = [
  { key: 'control', icon: ToggleRight },
  { key: 'consumption', icon: Gauge },
  { key: 'sms', icon: MessageSquare },
  { key: 'multisite', icon: Building2 },
  { key: 'security', icon: Fingerprint },
  { key: 'qr', icon: QrCode },
] as const;

const STEPS = ['s1', 's2', 's3'] as const;

/** New app spaces (no screenshots yet: icon-led cards instead). */
const NEWS = [
  { key: 'analysis', icon: BrainCircuit, tile: 'icon-tile' },
  { key: 'learn', icon: BookOpen, tile: 'icon-tile-green' },
  { key: 'assistant', icon: Bot, tile: 'icon-tile' },
] as const;

const MobileApp: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const shots = APP_SHOTS;
  const go = (dir: 1 | -1) =>
    setActive((p) => (p + dir + shots.length) % shots.length);

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('app.eyebrow')}
        title={
          <>
            {t('app.title')}{' '}
            <span className="text-gradient-brand-soft">{t('app.titleAccent')}</span>
          </>
        }
        subtitle={t('app.subtitle')}
        aside={
          <div className="mx-auto flex w-full max-w-sm items-center gap-5 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="shrink-0 rounded-md bg-white p-2">
              <QRCode
                value={APK_VIEW_URL}
                size={116}
                ecc="Q"
                title={t('app.scanTitle')}
                className="block h-[116px] w-[116px]"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white">{t('app.scanTitle')}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">
                {t('app.scanText')}
              </p>
            </div>
          </div>
        }
      >
        <ButtonLink
          to={APK_VIEW_URL}
          external
          variant="primary"
          size="lg"
          iconLeft={<Download className="h-4 w-4" />}
        >
          {t('app.download')}
        </ButtonLink>
        <span className="text-[13px] text-white/55">{t('app.downloadHint')}</span>
      </PageHero>

      {/* ---------- Features ---------- */}
      <Section className="bg-canvas">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />
        <SectionHeader
          eyebrow={t('app.eyebrow')}
          title={t('app.featuresTitle')}
          subtitle={t('app.featuresSubtitle')}
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover lg:p-7"
            >
              <span className="icon-tile h-10 w-10">
                <f.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">
                {t(`app.features.${f.key}.title`)}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`app.features.${f.key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- New: AI analysis, Learn, assistant ---------- */}
      <Section className="bg-surface-sunken">
        <SectionHeader
          eyebrow={t('app.news.eyebrow')}
          title={
            <>
              {t('app.news.title')}{' '}
              <span className="text-gradient-brand">{t('app.news.titleAccent')}</span>
            </>
          }
          subtitle={t('app.news.subtitle')}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <motion.article
              key={n.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card flex flex-col overflow-hidden"
            >
              <div className="relative flex items-center gap-3 border-b border-line bg-surface-sunken px-6 py-5">
                <div className="absolute inset-0 bg-grid-fine opacity-60" aria-hidden="true" />
                <span className={cn(n.tile, 'relative h-11 w-11')}>
                  <n.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="chip-neutral relative">{t(`app.news.items.${n.key}.tag`)}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-fg">{t(`app.news.items.${n.key}.title`)}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                  {t(`app.news.items.${n.key}.text`)}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {(['p1', 'p2', 'p3', 'p4'] as const).map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-fg">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green-500" strokeWidth={2.5} />
                      {t(`app.news.items.${n.key}.${p}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/plateforme"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 hover:underline dark:text-brand-blue-300"
          >
            {t('app.news.platformLink')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ---------- Gallery ---------- */}
      <Section className="bg-canvas">
        <SectionHeader
          title={t('app.galleryTitle')}
          subtitle={t('app.gallerySubtitle')}
        />

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Big screen */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[16rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={shots[active]}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="phone-frame"
                >
                  <img
                    src={shotSrc(shots[active])}
                    alt={t(`app.shots.${shots[active]}`)}
                    width={540}
                    height={1200}
                  />
                </motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t('common.prev')}
                className="absolute -left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-surface text-fg-muted shadow-elevated transition-colors hover:text-fg sm:-left-5"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t('common.next')}
                className="absolute -right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-surface text-fg-muted shadow-elevated transition-colors hover:text-fg sm:-right-5"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 text-center text-sm font-semibold text-fg">
              {t(`app.shots.${shots[active]}`)}
            </p>
            <p className="mt-1 text-center text-xs tabular-nums text-fg-subtle">
              {active + 1} / {shots.length}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-4 gap-2.5 sm:grid-cols-5">
              {shots.map((name, i) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active}
                    title={t(`app.shots.${name}`)}
                    className={cn(
                      'block w-full overflow-hidden rounded-md border transition-all duration-200',
                      i === active
                        ? 'border-brand-blue-500 ring-2 ring-brand-blue-500/25'
                        : 'border-line opacity-65 hover:opacity-100 hover:border-line-strong',
                    )}
                  >
                    <img
                      src={shotSrc(name)}
                      alt={t(`app.shots.${name}`)}
                      width={540}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="block aspect-[3/4] w-full object-cover object-top"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------- Install steps + download ---------- */}
      <Section className="bg-surface-sunken">
        <SectionHeader title={t('app.installTitle')} />

        <div className="mx-auto max-w-4xl">
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-surface p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface-sunken text-[13px] font-bold tabular-nums text-brand-blue-600 dark:text-brand-blue-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-fg">
                  {t(`app.install.${s}.title`)}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                  {t(`app.install.${s}.text`)}
                </p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 grid gap-4">
            <ApkDownload />
            <ApkDownload app="banc" />
          </div>
        </div>
      </Section>

      {/* ---------- Closing CTA ---------- */}
      <Section className="bg-invert text-white">
        <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-dots-dark opacity-40" aria-hidden="true" />

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-fluid-3xl font-bold tracking-tighter text-white">
            {t('enmkit.ctaTitle')}
          </h2>
          <p className="mt-4 text-fluid-base leading-relaxed text-white/70">
            {t('enmkit.ctaSubtitle')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              to={WHATSAPP_URL}
              external
              variant="primary"
              size="lg"
              iconLeft={<MessageCircle className="h-4 w-4" />}
            >
              {t('enmkit.ctaButton')}
            </ButtonLink>
            <ButtonLink
              to="/enmkit"
              variant="glass"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('nav.enmkit')}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default MobileApp;
