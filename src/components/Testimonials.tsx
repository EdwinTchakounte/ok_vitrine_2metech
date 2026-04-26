import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

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
    const id = setInterval(() => setCurrent((p) => (p + 1) % KEYS.length), 6000);
    return () => clearInterval(id);
  }, [auto]);

  const next = () => {
    setCurrent((p) => (p + 1) % KEYS.length);
    setAuto(false);
  };
  const prev = () => {
    setCurrent((p) => (p - 1 + KEYS.length) % KEYS.length);
    setAuto(false);
  };

  const k = KEYS[current];

  return (
    <Section className="bg-gradient-to-br from-brand-blue-50/60 via-white to-brand-green-50/60">
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

      <div className="relative max-w-4xl mx-auto">
        <button
          type="button"
          onClick={prev}
          aria-label={t('common.prev')}
          className="absolute top-1/2 -translate-y-1/2 -left-2 lg:-left-12 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-700 shadow-elevated hover:text-brand-blue-700 hover:shadow-floating transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={t('common.next')}
          className="absolute top-1/2 -translate-y-1/2 -right-2 lg:-right-12 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-700 shadow-elevated hover:text-brand-blue-700 hover:shadow-floating transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={k}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-4xl border border-ink-100 bg-white p-8 lg:p-12 shadow-elevated"
            >
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand-soft text-brand-blue-600 mb-6">
                  <Quote className="h-6 w-6" />
                </div>

                <blockquote className="text-fluid-lg lg:text-fluid-xl leading-relaxed text-ink-800 max-w-2xl">
                  “{t(`testimonials.list.${k}.text`)}”
                </blockquote>

                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-5">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-full bg-gradient-brand p-[2px]">
                      <img
                        src="/bonhome.png"
                        alt={t(`testimonials.list.${k}.name`)}
                        className="h-full w-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-brand-green-500 ring-2 ring-white" />
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-ink-900">
                      {t(`testimonials.list.${k}.name`)}
                    </p>
                    <p className="text-sm text-ink-600">
                      {t(`testimonials.list.${k}.role`)}
                    </p>
                    <p className="text-xs text-ink-400">
                      {t(`testimonials.list.${k}.location`)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-brand-green-200 bg-brand-green-50 px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-gradient-brand leading-none tabular-nums">
                      −{SAVINGS[k]}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-brand-green-700 mt-1">
                      {t('testimonials.savings')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {KEYS.map((it, i) => (
            <button
              key={it}
              onClick={() => {
                setCurrent(i);
                setAuto(false);
              }}
              aria-label={`Go to ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-gradient-brand' : 'w-2.5 bg-ink-200 hover:bg-ink-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slim social-proof bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 lg:mt-16 mx-auto max-w-3xl"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 rounded-full border border-ink-100 bg-white px-5 sm:px-7 py-3 sm:py-3.5 shadow-soft">
          {/* avatars */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-brand p-[1.5px]">
                <img
                  src="/bonhome.png"
                  alt=""
                  className="h-full w-full rounded-full object-cover bg-white"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-ink-700 text-center sm:text-left">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold">
              <span className="text-gradient-brand">99%</span>{' '}
              <span className="text-ink-600">{t('testimonials.stats.satisfaction')}</span>
            </span>
          </div>

          <span className="hidden sm:inline-block w-px h-5 bg-ink-200" />

          <span className="inline-flex items-center gap-1.5 text-xs text-ink-600">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-green-500" />
            {t('testimonials.stats.support')}
          </span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Testimonials;
