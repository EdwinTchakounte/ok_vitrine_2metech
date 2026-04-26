import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Sparkles, Award } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import PageTransition from '../components/ui/PageTransition';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    { key: 'innovation', icon: Lightbulb },
    { key: 'impact', icon: Users },
    { key: 'sustainability', icon: Sparkles },
    { key: 'excellence', icon: Award },
  ] as const;

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('about.eyebrow')}
        title={
          <>
            {t('about.title').split(' ')[0]}{' '}
            <span className="text-gradient-brand-soft">
              {t('about.title').split(' ').slice(1).join(' ')}
            </span>
          </>
        }
        subtitle={t('about.subtitle')}
      />

      {/* Mission */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="chip mb-5">{t('about.mission')}</span>
            <h2 className="text-fluid-3xl font-bold text-ink-900">
              {t('about.missionText')}
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed text-lg">
              {t('about.missionExtra')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-[16/12] rounded-4xl overflow-hidden border border-ink-100 shadow-elevated">
              <img
                src="/logos/image_logo_couleur.jpg"
                alt={t('about.title')}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-gradient-brand blur-2xl opacity-50" />
          </motion.div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="bg-ink-50/40">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-60" aria-hidden="true" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square rounded-4xl overflow-hidden border border-ink-100 shadow-elevated">
              <img
                src="/images/tjahe.jpeg"
                alt={t('about.founder')}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-green-300/40 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="chip-green mb-5">{t('about.founderTitle')}</span>
            <h2 className="text-fluid-3xl font-bold text-ink-900">
              {t('about.founder')}
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed text-lg">
              {t('about.founderDescription')}
            </p>
            <p className="mt-4 text-ink-600 leading-relaxed">
              {t('about.founderExtra')}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow={t('about.valuesTitle')}
          title={t('about.valuesTitle')}
          subtitle={t('about.valuesSubtitle')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl border border-ink-100 bg-white p-7 hover-lift transition-all duration-500 hover:border-brand-blue-200 hover:shadow-elevated"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow mb-5">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">
                {t(`about.values.${v.key}.title`)}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                {t(`about.values.${v.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact stats */}
      <Section className="bg-ink-950 text-white" containerClassName="">
        <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-90" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" aria-hidden="true" />

        <SectionHeader
          variant="dark"
          eyebrow={t('about.impactTitle')}
          title={t('about.impactTitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { value: 20, suffix: '+', key: 'homes' },
            { value: 14, suffix: '%', prefix: '−', key: 'reduction' },
            { value: 4, key: 'awards' },
          ].map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md"
            >
              <p className="text-fluid-5xl font-bold text-white tabular-nums leading-none">
                <AnimatedCounter
                  to={s.value}
                  prefix={s.prefix ?? ''}
                  suffix={s.suffix ?? ''}
                />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/70">
                {t(`about.impact.${s.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
};

export default About;
