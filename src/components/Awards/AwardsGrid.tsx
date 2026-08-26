import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Trophy,
  Award,
  Medal,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ExternalLink,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { cn } from '../../lib/cn';

type AwardKey = 'poesam' | 'orange' | 'yali' | 'totalenergies';

interface AwardEntry {
  key: AwardKey;
  icon: React.ElementType;
  image: string;
  link: string;
}

const AWARDS: AwardEntry[] = [
  {
    key: 'poesam',
    icon: Trophy,
    image: '/logos/orange.png',
    link: 'https://www.orange.com/fr/poesam/la-14e-edition-du-poesam-devoile-ses-laureats-2024',
  },
  {
    key: 'totalenergies',
    icon: Star,
    image: '/images/total_startup.jpg',
    link: 'https://totalenergies.cm/les-laureats-du-challenge-startupper-de-totalenergies-marketing-cameroun-2024-devoiles',
  },
  {
    key: 'yali',
    icon: Medal,
    image: '/images/yali.png',
    link: 'https://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/',
  },
  {
    key: 'orange',
    icon: Award,
    image: '/images/women_price.png',
    link: 'https://www.orange.com/',
  },
];

const AwardsGrid: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % AWARDS.length), 6000);
    return () => clearInterval(id);
  }, [auto]);

  const step = (dir: 1 | -1) =>
    setCurrent((p) => (p + dir + AWARDS.length) % AWARDS.length);

  const a = AWARDS[current];

  return (
    <Section className="bg-canvas">
      <SectionHeader
        eyebrow={t('awards.eyebrow')}
        title={t('awards.title')}
        subtitle={t('awards.subtitle')}
      />

      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
          <AnimatePresence mode="wait">
            <motion.article
              key={a.key}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-5"
            >
              {/* Visual: these files mix photographs and flat logos, so they
                  are contained on a light plate rather than cropped to fill. */}
              <div className="relative flex flex-col border-b border-line bg-white lg:col-span-2 lg:border-b-0 lg:border-r">
                <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-ink-900/85 text-white">
                  <a.icon className="h-4 w-4" />
                </span>

                <div className="flex flex-1 items-center justify-center p-8 lg:p-10">
                  <img
                    src={a.image}
                    alt=""
                    className="max-h-52 w-full object-contain lg:max-h-64"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center justify-between border-t border-ink-100 px-4 py-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-600">
                    <Calendar className="h-3 w-3" />
                    {t(`awards.${a.key}.date`)}
                  </span>
                  <span className="text-[11px] font-semibold tabular-nums text-ink-400">
                    {current + 1} / {AWARDS.length}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 lg:col-span-3 lg:p-10">
                <span className="chip self-start">{t(`awards.${a.key}.category`)}</span>
                <h3 className="mt-4 text-fluid-2xl font-bold leading-tight tracking-tighter text-fg">
                  {t(`awards.${a.key}.title`)}
                </h3>
                <div className="rule-brand mt-4" aria-hidden="true" />
                <p className="mt-4 text-[14.5px] leading-relaxed text-fg-muted text-just">
                  {t(`awards.${a.key}.description`)}
                </p>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-md mt-7 self-start"
                >
                  <span>{t('awards.details')}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t('common.prev')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {AWARDS.map((it, i) => (
              <button
                key={it.key}
                onClick={() => setCurrent(i)}
                aria-label={`${i + 1}`}
                aria-current={i === current}
                className={cn(
                  'h-1 rounded-px transition-all duration-300',
                  i === current
                    ? 'w-8 bg-brand-blue-600 dark:bg-brand-blue-400'
                    : 'w-2.5 bg-line-strong hover:bg-fg-subtle',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t('common.next')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setAuto((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            {auto ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {auto ? t('common.pause') : t('common.play')}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default AwardsGrid;
