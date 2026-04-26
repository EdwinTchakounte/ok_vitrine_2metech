import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Users, Layers3, Compass, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

interface Partner {
  id: 'f2e' | 'leukele' | 'yali' | 'orange' | 'totalenergies';
  logo: string;
  category: 'energy' | 'tech' | 'education' | 'corporate';
  website: string;
}

const PARTNERS: Partner[] = [
  { id: 'f2e', logo: '/logos/f2e.png', category: 'energy', website: 'https://freeenergyengineering.com/' },
  { id: 'leukele', logo: '/logos/leuke.png', category: 'tech', website: 'https://vc4a.com/ventures/leukele-africa/' },
  { id: 'yali', logo: '/logos/yali.png', category: 'education', website: 'https://yalirlcsouthernafrica.org/' },
  { id: 'orange', logo: '/logos/orange.png', category: 'corporate', website: 'https://www.orange.cm/' },
  { id: 'totalenergies', logo: '/logos/total.png', category: 'energy', website: 'https://www.totalenergies.fr/' },
];

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, key: 'active', value: `${PARTNERS.length}+` },
    { icon: Layers3, key: 'sectors', value: '4' },
    { icon: Compass, key: 'vision', value: '100%' },
  ];

  // Logos doubled for seamless marquee
  const marqueeLogos = [...PARTNERS, ...PARTNERS];

  return (
    <Section className="bg-ink-50/40">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-70" aria-hidden="true" />

      <SectionHeader
        eyebrow={t('partners.eyebrow')}
        title={t('partners.title')}
        subtitle={t('partners.subtitle')}
      />

      {/* Logos marquee */}
      <div className="relative overflow-hidden mb-14 mask-fade-x">
        <div className="flex w-max animate-marquee gap-12 lg:gap-16 py-4">
          {marqueeLogos.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex h-20 w-44 lg:w-52 shrink-0 items-center justify-center rounded-2xl border border-ink-100 bg-white px-6 transition-all duration-300 hover:shadow-elevated hover:border-brand-blue-200 group"
            >
              <img
                src={p.logo}
                alt={t(`partners.list.${p.id}.name`)}
                className="max-h-12 max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PARTNERS.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 transition-all duration-500 ease-elegant hover:-translate-y-1 hover:shadow-elevated hover:border-brand-blue-200"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex h-14 w-28 items-center justify-start">
                <img
                  src={p.logo}
                  alt={t(`partners.list.${p.id}.name`)}
                  className="max-h-12 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="chip-green !py-1 !px-2.5 !text-[10px]">
                {t(`partners.categories.${p.category}`)}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-ink-900 mb-2">
              {t(`partners.list.${p.id}.name`)}
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed mb-4">
              {t(`partners.list.${p.id}.description`)}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 group-hover:gap-2.5 transition-all">
              {t('partners.visit')}
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </motion.a>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl border border-ink-100 bg-white p-6 text-center hover-lift"
          >
            <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
              <s.icon className="h-5 w-5" />
            </div>
            <p className="text-3xl font-bold text-gradient-brand tabular-nums">{s.value}</p>
            <p className="mt-1 text-sm font-semibold text-ink-800">
              {t(`partners.stats.${s.key}`)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 overflow-hidden rounded-3xl bg-gradient-brand p-8 lg:p-10 text-center text-white"
      >
        <h3 className="text-fluid-2xl lg:text-fluid-3xl font-bold">{t('partners.ctaTitle')}</h3>
        <p className="mx-auto mt-2 max-w-xl text-white/85">{t('partners.ctaSubtitle')}</p>
        <div className="mt-6">
          <ButtonLink
            to="/contact"
            variant="white"
            size="md"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            {t('partners.ctaButton')}
          </ButtonLink>
        </div>
      </motion.div>
    </Section>
  );
};

export default PartnersSection;
