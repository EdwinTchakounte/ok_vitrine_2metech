import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Calendar, Award as AwardIcon, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import AwardsGrid from '../components/Awards/AwardsGrid';
import PageTransition from '../components/ui/PageTransition';

const STATS = [
  { value: '4', key: 'prizes', icon: Trophy },
  { value: '2024', key: 'year', icon: Calendar },
  { value: '3', key: 'countries', icon: AwardIcon },
  { value: '100%', key: 'innovation', icon: Star },
];

const Awards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('awards.eyebrow')}
        title={t('awards.title')}
        subtitle={t('awards.subtitle')}
      />

      <AwardsGrid />

      {/* Stats */}
      <Section size="sm" className="bg-surface-sunken">
        <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-surface p-6 text-center"
            >
              <span className="icon-tile mx-auto h-10 w-10">
                <s.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <dt className="sr-only">{t(`awards.stats.${s.key}`)}</dt>
              <dd>
                <span className="mt-4 block text-2xl font-bold leading-none tabular-nums tracking-tighter text-fg lg:text-3xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-[12.5px] font-semibold text-fg-muted">
                  {t(`awards.stats.${s.key}`)}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </Section>

      {/* CTA */}
      <Section className="bg-invert text-white">
        <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-dots-dark opacity-40" aria-hidden="true" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-fluid-3xl font-bold tracking-tighter text-white">
            {t('awards.ctaTitle')}
          </h2>
          <p className="mt-4 text-fluid-base leading-relaxed text-white/70">
            {t('awards.ctaSubtitle')}
          </p>
          <div className="mt-8">
            <ButtonLink
              to="/enmkit"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('awards.ctaButton')}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Awards;
