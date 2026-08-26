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

const STATS = [
  { icon: Users, key: 'active', value: `${PARTNERS.length}+` },
  { icon: Layers3, key: 'sectors', value: '4' },
  { icon: Compass, key: 'vision', value: '100%' },
];

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();
  const marquee = [...PARTNERS, ...PARTNERS];

  return (
    <Section className="bg-surface-sunken">
      <SectionHeader
        eyebrow={t('partners.eyebrow')}
        title={t('partners.title')}
        subtitle={t('partners.subtitle')}
      />

      {/* Logo band */}
      <div className="mb-12 overflow-hidden rounded-lg border border-line bg-surface">
        <div className="mask-fade-x overflow-hidden py-5">
          <div className="flex w-max animate-marquee-slow items-center gap-12 lg:gap-16">
            {marquee.map((p, i) => (
              <span
                key={`${p.id}-${i}`}
                className="inline-flex h-14 w-36 shrink-0 items-center justify-center rounded-md bg-white px-4 ring-1 ring-line"
              >
                <img
                  src={p.logo}
                  alt={t(`partners.list.${p.id}.name`)}
                  className="max-h-9 w-auto max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {PARTNERS.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-12 w-28 items-center justify-center rounded-md bg-white px-3 ring-1 ring-line">
                <img
                  src={p.logo}
                  alt=""
                  className="max-h-8 w-auto max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="chip-neutral shrink-0">
                {t(`partners.categories.${p.category}`)}
              </span>
            </div>

            <h3 className="mt-5 font-display text-[17px] font-bold text-fg">
              {t(`partners.list.${p.id}.name`)}
            </h3>
            <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-fg-muted">
              {t(`partners.list.${p.id}.description`)}
            </p>

            <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue-700 transition-all group-hover:gap-2.5 dark:text-brand-blue-300">
              {t('partners.visit')}
              <ExternalLink className="h-3.5 w-3.5" />
            </span>

            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
              aria-hidden="true"
            />
          </motion.a>
        ))}

        {/* Stats fill the sixth cell of the grid */}
        <div className="flex flex-col justify-center gap-4 bg-surface p-6">
          {STATS.map((s) => (
            <div key={s.key} className="flex items-center gap-3.5">
              <span className="icon-tile h-9 w-9 shrink-0">
                <s.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-xl font-bold leading-none tabular-nums tracking-tighter text-fg">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] text-fg-muted">
                  {t(`partners.stats.${s.key}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative isolate mt-10 overflow-hidden rounded-xl border border-line bg-invert px-6 py-10 text-center text-white sm:px-10"
      >
        <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
        <h3 className="text-fluid-2xl font-bold tracking-tighter text-white">
          {t('partners.ctaTitle')}
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/70">
          {t('partners.ctaSubtitle')}
        </p>
        <div className="mt-7">
          <ButtonLink
            to="/contact"
            variant="primary"
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
