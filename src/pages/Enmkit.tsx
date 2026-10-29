import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Eye,
  Bell,
  Shield,
  BarChart3,
  Cloud,
  Sliders,
  Activity,
  Settings,
  Wifi,
  GraduationCap,
  Check,
  Sparkles,
  MessageCircle,
  Download,
  BrainCircuit,
  FlaskConical,
  BookOpen,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';
import ApkDownload from '../components/App/ApkDownload';
import { WHATSAPP_URL, shotSrc } from '../lib/links';

const FEATURES = [
  { key: 'monitoring', icon: Eye },
  { key: 'remote', icon: Sliders },
  { key: 'analytics', icon: BarChart3 },
  { key: 'security', icon: Shield },
  { key: 'ai', icon: Bell },
  { key: 'cloud', icon: Cloud },
] as const;

const INSTALL_STEPS = [
  { key: 'diagnostic', icon: Activity },
  { key: 'install', icon: Settings },
  { key: 'config', icon: Wifi },
  { key: 'training', icon: GraduationCap },
] as const;

const DATA_CARDS = [
  { key: 'ai', icon: BrainCircuit, to: '/plateforme', tile: 'icon-tile' },
  { key: 'lab', icon: FlaskConical, to: '/learning-lab', tile: 'icon-tile-green' },
  { key: 'learn', icon: BookOpen, to: '/app', tile: 'icon-tile' },
] as const;

const STATS = [
  { value: '25%', key: 'fraud' },
  { value: '95%', key: 'ai' },
  { value: '40%', key: 'savings' },
];

const Enmkit: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('enmkit.eyebrow')}
        title={
          <>
            <span className="block">{t('enmkit.title')}</span>
            <span className="block text-gradient-brand-soft">{t('enmkit.tagline')}</span>
          </>
        }
        subtitle={t('enmkit.description')}
        aside={
          <div className="phone-frame mx-auto w-full max-w-[15rem]">
            <img
              src={shotSrc('lignes')}
              alt={t('app.shots.lignes')}
              width={540}
              height={1200}
              loading="eager"
            />
          </div>
        }
      >
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('common.contact')}
        </ButtonLink>
        <ButtonLink
          to="/app"
          variant="glass"
          size="lg"
          iconLeft={<Download className="h-4 w-4" />}
        >
          {t('nav.app')}
        </ButtonLink>
      </PageHero>

      {/* Stats strip */}
      <Section size="sm" className="bg-canvas">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-surface px-5 py-7 text-center"
            >
              <p className="text-fluid-3xl font-bold leading-none tabular-nums tracking-tighter text-brand-blue-600 dark:text-brand-blue-300">
                {s.value}
              </p>
              <p className="mt-2.5 text-[13px] font-semibold text-fg-muted">
                {t(`enmkit.stats.${s.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-[13px] text-fg-subtle">
          <Sparkles className="h-3.5 w-3.5 text-brand-green-500" />
          {t('enmkit.poweredBy')}
        </p>
      </Section>

      {/* Features */}
      <Section className="bg-surface-sunken">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />
        <SectionHeader
          eyebrow={t('features.eyebrow')}
          title={
            <>
              {t('enmkit.featuresTitle')}{' '}
              <span className="text-gradient-brand">{t('enmkit.featuresTitleAccent')}</span>
            </>
          }
          subtitle={t('enmkit.featuresSubtitle')}
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover lg:p-7"
            >
              <span className="icon-tile h-11 w-11">
                <f.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">
                {t(`enmkit.features.${f.key}.title`)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`enmkit.features.${f.key}.description`)}
              </p>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Data, AI & education — links to /plateforme, /learning-lab, /app */}
      <Section className="bg-canvas">
        <SectionHeader
          eyebrow={t('enmkit.data.eyebrow')}
          title={
            <>
              {t('enmkit.data.title')}{' '}
              <span className="text-gradient-brand">{t('enmkit.data.titleAccent')}</span>
            </>
          }
          subtitle={t('enmkit.data.subtitle')}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {DATA_CARDS.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link to={c.to} className="card card-hover group flex h-full flex-col p-6 lg:p-7">
                <span className={`${c.tile} h-11 w-11`}>
                  <c.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-fg">
                  {t(`enmkit.data.cards.${c.key}.title`)}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                  {t(`enmkit.data.cards.${c.key}.text`)}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-semibold text-brand-blue-700 dark:text-brand-blue-300">
                  {t(`enmkit.data.cards.${c.key}.cta`)}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Install steps */}
      <Section className="bg-surface-sunken">
        <SectionHeader
          title={t('enmkit.installTitle')}
          subtitle={t('enmkit.installSubtitle')}
        />

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {INSTALL_STEPS.map((s, i) => (
            <motion.li
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-surface p-6 lg:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="icon-tile h-11 w-11">
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-fg-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-fg">
                {t(`enmkit.install.${s.key}.title`)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`enmkit.install.${s.key}.description`)}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-4xl">
          <ApkDownload />
        </div>
      </Section>

      {/* CTA */}
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

          <div className="mt-8">
            <ButtonLink
              to={WHATSAPP_URL}
              external
              variant="primary"
              size="lg"
              iconLeft={<MessageCircle className="h-4 w-4" />}
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('enmkit.ctaButton')}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13.5px] text-white/65">
            {(['savings', 'alerts', 'anomalies', 'support'] as const).map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-brand-green-400" strokeWidth={2.5} />
                {t(`enmkit.benefits.${b}`)}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Enmkit;
