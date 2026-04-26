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
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';

const Enmkit: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { key: 'monitoring', icon: Eye },
    { key: 'remote', icon: Sliders },
    { key: 'analytics', icon: BarChart3 },
    { key: 'security', icon: Shield },
    { key: 'ai', icon: Bell },
    { key: 'cloud', icon: Cloud },
  ] as const;

  const installSteps = [
    { key: 'diagnostic', icon: Activity },
    { key: 'install', icon: Settings },
    { key: 'config', icon: Wifi },
    { key: 'training', icon: GraduationCap },
  ] as const;

  const stats = [
    { value: '25%', key: 'fraud' },
    { value: '95%', key: 'ai' },
    { value: '40%', key: 'savings' },
  ];

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
      >
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-5 w-5" />}
        >
          {t('common.contact')}
        </ButtonLink>
      </PageHero>

      {/* Stats strip */}
      <Section size="sm" className="bg-white">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-ink-100 bg-white p-5 lg:p-6 text-center shadow-soft hover-lift"
            >
              <p className="text-fluid-3xl font-bold text-gradient-brand tabular-nums leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-ink-700">
                {t(`enmkit.stats.${s.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-ink-500 inline-flex items-center justify-center gap-2 w-full">
          <Sparkles className="h-4 w-4 text-brand-green-500" />
          {t('enmkit.poweredBy')}
        </div>
      </Section>

      {/* Features grid */}
      <Section className="bg-ink-50/40">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-60" aria-hidden="true" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-3xl border border-ink-100 bg-white p-7 hover-lift hover:border-brand-blue-200 hover:shadow-elevated transition-all duration-500"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow mb-5">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">
                {t(`enmkit.features.${f.key}.title`)}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                {t(`enmkit.features.${f.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Install timeline */}
      <Section className="bg-white">
        <SectionHeader
          title={t('enmkit.installTitle')}
          subtitle={t('enmkit.installSubtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* connecting line (desktop) */}
          <div className="hidden lg:block absolute left-12 right-12 top-12 h-px bg-gradient-to-r from-brand-blue-200 via-brand-green-300 to-brand-blue-200" aria-hidden="true" />

          {installSteps.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border border-ink-100 bg-white p-7 text-center hover-lift transition-all duration-500 hover:border-brand-blue-200 hover:shadow-elevated"
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow relative z-10">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-xs font-bold tracking-[0.2em] text-brand-blue-600">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">
                {t(`enmkit.install.${s.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                {t(`enmkit.install.${s.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-ink-950 text-white">
        <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-90" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" aria-hidden="true" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-fluid-4xl font-bold">{t('enmkit.ctaTitle')}</h2>
          <p className="mt-4 text-fluid-lg text-white/75">{t('enmkit.ctaSubtitle')}</p>

          <div className="mt-8">
            <ButtonLink
              to="https://wa.me/237696372245"
              external
              variant="primary"
              size="lg"
              iconLeft={<MessageCircle className="h-5 w-5" />}
              iconRight={<ArrowRight className="h-5 w-5" />}
            >
              {t('enmkit.ctaButton')}
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
            {(['savings', 'alerts', 'anomalies', 'support'] as const).map((b) => (
              <span key={b} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-green-400" />
                {t(`enmkit.benefits.${b}`)}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Enmkit;
