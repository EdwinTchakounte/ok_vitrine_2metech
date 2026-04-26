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
  Play,
  Pause,
  ExternalLink,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';

type AwardKey = 'poesam' | 'orange' | 'yali' | 'totalenergies';

interface AwardEntry {
  key: AwardKey;
  icon: React.ElementType;
  emoji: string;
  image: string;
  link: string;
  gradient: string;
}

const AWARDS: AwardEntry[] = [
  {
    key: 'poesam',
    icon: Trophy,
    emoji: '🥇',
    image: '/logos/orange.png',
    link: 'https://www.orange.com/fr/poesam/la-14e-edition-du-poesam-devoile-ses-laureats-2024',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
  },
  {
    key: 'totalenergies',
    icon: Star,
    emoji: '🥈',
    image: '/images/total_startup.jpg',
    link: 'https://totalenergies.cm/les-laureats-du-challenge-startupper-de-totalenergies-marketing-cameroun-2024-devoiles',
    gradient: 'from-brand-green-400 to-brand-blue-500',
  },
  {
    key: 'yali',
    icon: Medal,
    emoji: '🏅',
    image: '/images/yali.png',
    link: 'https://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/',
    gradient: 'from-brand-blue-500 to-brand-blue-700',
  },
  {
    key: 'orange',
    icon: Award,
    emoji: '🏆',
    image: '/images/women_price.png',
    link: 'https://www.orange.com/',
    gradient: 'from-brand-blue-400 to-brand-green-500',
  },
];

const AwardsGrid: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % AWARDS.length), 5500);
    return () => clearInterval(id);
  }, [auto]);

  const next = () => setCurrent((p) => (p + 1) % AWARDS.length);
  const prev = () => setCurrent((p) => (p - 1 + AWARDS.length) % AWARDS.length);

  const a = AWARDS[current];

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={t('awards.eyebrow')}
        title={t('awards.title')}
        subtitle={t('awards.subtitle')}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-4xl border border-ink-100 bg-white shadow-elevated">
          <AnimatePresence mode="wait">
            <motion.article
              key={a.key}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-5"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-auto lg:col-span-2 overflow-hidden bg-ink-100">
                <img
                  src={a.image}
                  alt={t(`awards.${a.key}.title`)}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />

                <div className={`absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${a.gradient} text-white shadow-glow`}>
                  <a.icon className="h-5 w-5" />
                </div>

                <div className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md text-2xl">
                  {a.emoji}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                    <Calendar className="h-3.5 w-3.5" />
                    {t(`awards.${a.key}.date`)}
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                    {current + 1} / {AWARDS.length}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-7 lg:p-10 flex flex-col justify-center">
                <span className="chip mb-4">
                  <Trophy className="h-3 w-3" />
                  {t(`awards.${a.key}.category`)}
                </span>
                <h3 className="text-fluid-2xl lg:text-fluid-3xl font-bold text-ink-900 leading-tight">
                  {t(`awards.${a.key}.title`)}
                </h3>
                <p className="mt-4 text-ink-600 leading-relaxed">
                  {t(`awards.${a.key}.description`)}
                </p>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-md mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${a.gradient} px-5 py-3 text-sm font-semibold text-white shadow-glow hover:shadow-floating transition-all`}
                >
                  <span>{t('awards.details')}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Nav buttons */}
        <button
          type="button"
          onClick={prev}
          aria-label={t('common.prev')}
          className="absolute top-1/2 -translate-y-1/2 left-2 lg:-left-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-700 shadow-elevated hover:text-brand-blue-700 hover:shadow-floating transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={t('common.next')}
          className="absolute top-1/2 -translate-y-1/2 right-2 lg:-right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-700 shadow-elevated hover:text-brand-blue-700 hover:shadow-floating transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => setAuto((v) => !v)}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
            auto ? 'bg-gradient-brand text-white shadow-glow' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'
          }`}
        >
          {auto ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {auto ? t('common.pause') : t('common.play')}
        </button>

        <div className="flex items-center gap-2">
          {AWARDS.map((it, i) => (
            <button
              key={it.key}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-10 bg-gradient-brand' : 'w-2.5 bg-ink-200 hover:bg-ink-300'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AwardsGrid;
