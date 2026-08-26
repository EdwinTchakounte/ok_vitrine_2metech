import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Sparkles, Award } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import PageTransition from '../components/ui/PageTransition';

const VALUES = [
  { key: 'innovation', icon: Lightbulb },
  { key: 'impact', icon: Users },
  { key: 'sustainability', icon: Sparkles },
  { key: 'excellence', icon: Award },
] as const;

const IMPACT = [
  { value: 20, suffix: '+', key: 'homes' },
  { value: 14, suffix: '%', prefix: '−', key: 'reduction' },
  { value: 4, key: 'awards' },
];

const About: React.FC = () => {
  const { t } = useTranslation();
  const title = t('about.title');
  const [firstWord, ...restWords] = title.split(' ');

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('about.eyebrow')}
        title={
          <>
            {firstWord}{' '}
            <span className="text-gradient-brand-soft">{restWords.join(' ')}</span>
          </>
        }
        subtitle={t('about.subtitle')}
      />

      {/* Mission */}
      <Section className="bg-canvas">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="chip">{t('about.mission')}</span>
            <h2 className="mt-4 text-fluid-3xl font-bold leading-[1.12] tracking-tighter text-fg">
              {t('about.missionText')}
            </h2>
            <div className="rule-brand mt-5" aria-hidden="true" />
            <p className="mt-5 text-fluid-base leading-relaxed text-fg-muted text-just">
              {t('about.missionExtra')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-xl border border-line shadow-soft">
              <img
                src="/logos/image_logo_couleur.jpg"
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="bg-surface-sunken">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-xl border border-line shadow-soft">
              <img
                src="/images/tjahe.jpeg"
                alt={t('about.founder')}
                className="aspect-square w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <span className="chip-green">{t('about.founderTitle')}</span>
            <h2 className="mt-4 text-fluid-3xl font-bold leading-[1.12] tracking-tighter text-fg">
              {t('about.founder')}
            </h2>
            <div className="rule-brand mt-5" aria-hidden="true" />
            <p className="mt-5 text-fluid-base leading-relaxed text-fg-muted text-just">
              {t('about.founderDescription')}
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-fg-muted text-just">
              {t('about.founderExtra')}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-canvas">
        <SectionHeader
          eyebrow={t('about.valuesTitle')}
          title={t('about.valuesTitle')}
          subtitle={t('about.valuesSubtitle')}
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover lg:p-7"
            >
              <span className="icon-tile h-11 w-11">
                <v.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">
                {t(`about.values.${v.key}.title`)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`about.values.${v.key}.description`)}
              </p>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section className="bg-invert text-white">
        <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-dots-dark opacity-40" aria-hidden="true" />

        <SectionHeader variant="dark" title={t('about.impactTitle')} />

        <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {IMPACT.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-invert/90 px-6 py-9 text-center backdrop-blur-sm"
            >
              <dt className="sr-only">{t(`about.impact.${s.key}`)}</dt>
              <dd>
                <span className="block text-fluid-4xl font-bold leading-none tabular-nums tracking-tighter text-white">
                  <AnimatedCounter
                    to={s.value}
                    prefix={s.prefix ?? ''}
                    suffix={s.suffix ?? ''}
                  />
                </span>
                <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {t(`about.impact.${s.key}`)}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </Section>
    </PageTransition>
  );
};

export default About;
