import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import { cn } from '../lib/cn';

type Key = 'michelle' | 'douglas' | 'brigitte' | 'paul' | 'pelagie';
const KEYS: Key[] = ['michelle', 'douglas', 'brigitte', 'paul', 'pelagie'];
const SAVINGS: Record<Key, string> = {
  michelle: '15%',
  douglas: '15%',
  brigitte: '12%',
  paul: '18%',
  pelagie: '11%',
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % KEYS.length), 6500);
    return () => clearInterval(id);
  }, [auto]);

  const step = (dir: 1 | -1) => {
    setCurrent((p) => (p + dir + KEYS.length) % KEYS.length);
    setAuto(false);
  };

  const k = KEYS[current];

  return (
    <Section className="bg-surface-sunken">
      <div className="absolute inset-0 -z-10 bg-wash" aria-hidden="true" />

      <SectionHeader
        eyebrow={t('testimonials.eyebrow')}
        title={
          <>
            {t('testimonials.title')}{' '}
            <span className="text-gradient-brand">{t('testimonials.titleAccent')}</span>
          </>
        }
        subtitle={t('testimonials.subtitle')}
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
          <AnimatePresence mode="wait">
            <motion.figure
              key={k}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12"
            >
              <div className="lg:col-span-8">
                <Quote
                  className="h-7 w-7 text-brand-blue-500/40 dark:text-brand-blue-400/35"
                  strokeWidth={2}
                />
                <blockquote className="mt-4 text-fluid-lg leading-relaxed text-fg text-just">
                  {t(`testimonials.list.${k}.text`)}
                </blockquote>

                <div className="mt-6 flex items-center gap-1" aria-label="5/5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <figcaption className="flex flex-col gap-5 lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
                <div className="flex items-center gap-3.5">
                  <img
                    src="/bonhome.png"
                    alt=""
                    className="h-11 w-11 rounded-full border border-line bg-surface-sunken object-cover"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-fg">
                      {t(`testimonials.list.${k}.name`)}
                    </p>
                    <p className="text-[13px] text-fg-muted">
                      {t(`testimonials.list.${k}.role`)}
                    </p>
                    <p className="text-[11px] text-fg-subtle">
                      {t(`testimonials.list.${k}.location`)}
                    </p>
                  </div>
                </div>

                <div className="rounded-md border border-brand-green-200 bg-brand-green-50 px-4 py-3 dark:border-brand-green-500/25 dark:bg-brand-green-500/10">
                  <p className="text-2xl font-bold leading-none tabular-nums tracking-tighter text-brand-green-700 dark:text-brand-green-300">
                    −{SAVINGS[k]}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-brand-green-700/80 dark:text-brand-green-300/70">
                    {t('testimonials.savings')}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t('common.prev')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-fg-muted transition-colors hover:text-fg hover:border-line-strong"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {KEYS.map((it, i) => (
              <button
                key={it}
                onClick={() => {
                  setCurrent(i);
                  setAuto(false);
                }}
                aria-label={`${i + 1}`}
                aria-current={i === current}
                className={cn(
                  'h-1 rounded-px transition-all duration-300',
                  i === current
                    ? 'w-7 bg-brand-blue-600 dark:bg-brand-blue-400'
                    : 'w-2.5 bg-line-strong hover:bg-fg-subtle',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t('common.next')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-fg-muted transition-colors hover:text-fg hover:border-line-strong"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Social proof bar */}
      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-lg border border-line bg-surface px-5 py-3.5 text-center sm:flex-row sm:gap-6 sm:text-left">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src="/bonhome.png"
              alt=""
              className="h-7 w-7 rounded-full border-2 border-surface bg-surface-sunken object-cover"
              width={28}
              height={28}
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="font-semibold text-fg">99%</span>
          <span className="text-fg-muted">{t('testimonials.stats.satisfaction')}</span>
        </div>

        <span className="hidden h-4 w-px bg-line sm:inline-block" />

        <span className="inline-flex items-center gap-1.5 text-xs text-fg-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-brand-green-500" />
          {t('testimonials.stats.support')}
        </span>
      </div>
    </Section>
  );
};

export default Testimonials;
