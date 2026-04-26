import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Activity, ShieldCheck, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: 'smart',
      icon: Activity,
      gradient: 'from-brand-blue-500 to-brand-blue-700',
    },
    {
      key: 'secure',
      icon: ShieldCheck,
      gradient: 'from-brand-blue-500 to-brand-green-500',
    },
    {
      key: 'impact',
      icon: Users,
      gradient: 'from-brand-green-500 to-brand-green-700',
    },
    {
      key: 'proven',
      icon: TrendingUp,
      gradient: 'from-brand-green-400 to-brand-blue-500',
    },
  ] as const;

  return (
    <Section className="bg-white">
      {/* subtle grid */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />

      <SectionHeader
        eyebrow={t('features.eyebrow')}
        title={
          <>
            {t('features.title').split(',')[0]},
            <br className="hidden sm:block" />
            <span className="text-gradient-brand">
              {t('features.title').split(',').slice(1).join(',') || ''}
            </span>
          </>
        }
        subtitle={t('features.subtitle')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.key}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-blue-500/0 via-brand-blue-500/0 to-brand-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ background: 'linear-gradient(135deg, rgba(24,118,188,0.6), rgba(132,196,80,0.6))', filter: 'blur(8px)' }}
            />
            <div className="relative h-full rounded-3xl border border-ink-100 bg-white p-7 transition-all duration-500 ease-elegant group-hover:-translate-y-1 group-hover:shadow-elevated group-hover:border-brand-blue-200">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${it.gradient} text-white shadow-glow mb-5`}>
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-ink-900 mb-2">
                {t(`features.items.${it.key}.title`)}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                {t(`features.items.${it.key}.description`)}
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>2metech</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 lg:mt-20"
      >
        <div className="relative overflow-hidden rounded-4xl border border-ink-800/50 bg-ink-950 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-mesh-dark opacity-80" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-brand-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-green-500/25 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <span className="chip-dark mb-5">
              <Sparkles className="h-3 w-3 text-brand-green-400" />
              {t('common.poweredBy')}
            </span>
            <h3 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-white">
              {t('features.ctaTitle')}
            </h3>
            <p className="mt-4 text-fluid-lg text-white/75 max-w-2xl mx-auto">
              {t('features.ctaSubtitle')}
            </p>
            <div className="mt-8">
              <ButtonLink
                to="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                {t('features.ctaButton')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default FeaturesSection;
