import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Calendar, Award as AwardIcon, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import AwardsGrid from '../components/Awards/AwardsGrid';
import PageTransition from '../components/ui/PageTransition';

const Awards: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '4', key: 'prizes', icon: Trophy },
    { value: '2024', key: 'year', icon: Calendar },
    { value: '3', key: 'countries', icon: AwardIcon },
    { value: '100%', key: 'innovation', icon: Star },
  ];

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('awards.eyebrow')}
        title={t('awards.title')}
        subtitle={t('awards.subtitle')}
      />

      <AwardsGrid />

      {/* Stats */}
      <Section size="sm" className="bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-ink-100 bg-white p-5 text-center hover-lift transition-all hover:border-brand-blue-200"
            >
              <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-gradient-brand tabular-nums">
                {s.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-ink-700">
                {t(`awards.stats.${s.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-brand text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-fluid-3xl font-bold">{t('awards.ctaTitle')}</h2>
          <p className="mt-4 text-white/90">{t('awards.ctaSubtitle')}</p>
          <div className="mt-7">
            <ButtonLink
              to="/enmkit"
              variant="white"
              size="md"
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
