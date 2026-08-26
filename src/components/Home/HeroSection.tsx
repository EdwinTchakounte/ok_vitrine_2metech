import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Download } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { APK_VIEW_URL, shotSrc } from '../../lib/links';

const AWARD_LABELS = [
  'POESAM 2024',
  'Orange Women’s Prize',
  'YALI Power Challenge',
  'Startupper TotalEnergies',
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t('hero.stats.homesValue'), label: t('hero.stats.homes') },
    { value: t('hero.stats.reductionValue'), label: t('hero.stats.reduction') },
    { value: t('hero.stats.installValue'), label: t('hero.stats.install') },
    { value: t('hero.stats.warrantyValue'), label: t('hero.stats.warranty') },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-invert">
      {/* Background: photo at low opacity, one brand wash, a fine grid. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src="/images/image2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-wash-invert" />
        <div className="absolute inset-0 bg-grid-dark opacity-60 mask-fade-b" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-invert to-transparent" />
      </div>

      <div className="container mx-auto pb-14 pt-[calc(var(--header-h)+3rem)] lg:pb-20 lg:pt-[calc(var(--header-h)+5rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Copy ---------- */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="chip-dark"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-green-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand-green-400" />
              </span>
              {t('hero.eyebrow')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-fluid-6xl font-bold leading-[1.02] tracking-tighter text-white xl:text-[4.5rem]"
            >
              {t('hero.title')}
              <span className="mt-1 block text-gradient-brand-soft">
                {t('hero.titleAccent')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-xl text-fluid-lg leading-relaxed text-white/70 text-just"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink
                to="/enmkit"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                {t('hero.cta')}
              </ButtonLink>
              <ButtonLink
                to={APK_VIEW_URL}
                external
                variant="glass"
                size="lg"
                iconLeft={<Download className="h-4 w-4" />}
              >
                {t('app.download')}
              </ButtonLink>
            </motion.div>

            {/* Stats: a hairline grid, not four floating pills */}
            <motion.dl
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-invert/90 px-4 py-4 backdrop-blur-sm">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold leading-none tabular-nums text-white">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-[11px] leading-tight text-white/55">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---------- Product shot ---------- */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[19rem]"
            >
              {/* Phone */}
              <div className="relative rounded-[14px] border border-white/15 bg-white/[0.06] p-2 shadow-floating backdrop-blur-sm">
                <img
                  src={shotSrc('conso')}
                  alt={t('app.shots.conso')}
                  className="block w-full rounded-[8px]"
                  width={540}
                  height={1200}
                  loading="eager"
                />
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- Awards strip ---------- */}
      <div className="relative border-t border-white/10 bg-invert/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center gap-6 overflow-hidden py-3">
          <span className="hidden shrink-0 items-center gap-2 border-r border-white/10 pr-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:inline-flex">
            <Award className="h-3 w-3 text-brand-green-400" />
            {t('awardStrip.eyebrow')}
          </span>
          <div className="mask-fade-x relative flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee gap-10 lg:gap-14">
              {[0, 1].flatMap((k) =>
                AWARD_LABELS.map((label) => (
                  <span
                    key={`${k}-${label}`}
                    className="inline-flex shrink-0 items-center gap-2 text-[13px] text-white/60"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-green-400" />
                    {label}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
