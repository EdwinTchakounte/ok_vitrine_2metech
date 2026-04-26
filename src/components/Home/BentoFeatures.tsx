import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Activity,
  Smartphone,
  Cloud,
  MapPin,
  Zap,
  ArrowUpRight,
  Sparkles,
  Quote,
  LineChart,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';

/**
 * BentoFeatures — soft, responsive
 *
 *  Mobile (<640): 1 col stack
 *  Tablet (sm/md): 2 cols, hero spans 2
 *  Desktop (lg+): 12-col asymetric
 */

const BentoFeatures: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-b from-white via-brand-blue-50/20 to-white">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-40" aria-hidden="true" />

      <SectionHeader
        eyebrow={t('bento.eyebrow')}
        title={
          <>
            {t('bento.title')}{' '}
            <span className="text-gradient-brand">{t('bento.titleAccent')}</span>
          </>
        }
        subtitle={t('bento.subtitle')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        {/* ─── HERO CARD (Sensor + Cloud + Mobile) ─── */}
        <Cell
          delay={0}
          className="sm:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[20rem] sm:min-h-[22rem] lg:min-h-[28rem] bg-white"
        >
          {/* very soft gradient wash */}
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                'radial-gradient(120% 80% at 0% 0%, rgba(24,118,188,0.06) 0%, transparent 60%), radial-gradient(120% 80% at 100% 100%, rgba(132,196,80,0.07) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <span className="chip self-start">
            <Sparkles className="h-3 w-3 text-brand-green-500" />
            {t('bento.hero.kicker')}
          </span>

          <h3 className="mt-5 sm:mt-6 text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-bold leading-[1.1] tracking-tight text-ink-900 max-w-md">
            {t('bento.hero.title')}
          </h3>
          <p className="mt-3 sm:mt-4 text-ink-600 leading-relaxed max-w-md text-sm sm:text-base">
            {t('bento.hero.text')}
          </p>

          {/* Visual stack — 3 soft tiles */}
          <div className="mt-auto pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-md">
            <StackTile icon={Zap} label="Capteur" tone="blue" />
            <StackTile icon={Cloud} label="Cloud" tone="mix" />
            <StackTile icon={Smartphone} label="Mobile" tone="green" />
          </div>

          {/* soft decorative blob */}
          <div
            className="absolute right-4 top-4 h-20 w-20 rounded-full bg-gradient-brand opacity-10 blur-2xl"
            aria-hidden="true"
          />
        </Cell>

        {/* ─── DATA / DASHBOARD CARD ─── */}
        <Cell
          delay={0.08}
          className="lg:col-span-5 lg:row-span-1 min-h-[14rem] bg-white"
        >
          <CardHeader icon={LineChart} accent="blue" title={t('bento.ai.title')} />
          <p className="text-ink-600 leading-relaxed text-sm mt-3">
            {t('bento.ai.text')}
          </p>

          {/* mini chart with soft baseline */}
          <div className="mt-auto pt-5">
            <div className="relative flex items-end gap-1 sm:gap-1.5 h-12 sm:h-14">
              {[35, 48, 42, 60, 55, 72, 68, 80, 74, 82].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue-200 to-brand-green-300"
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-ink-400">
              <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
            </div>
          </div>
        </Cell>

        {/* ─── APP CARD ─── */}
        <Cell
          delay={0.14}
          className="lg:col-span-5 lg:row-span-1 min-h-[14rem] bg-white overflow-hidden"
        >
          <CardHeader icon={Smartphone} accent="green" title={t('bento.app.title')} />
          <p className="text-ink-600 leading-relaxed text-sm mt-3 max-w-xs">
            {t('bento.app.text')}
          </p>

          {/* Phone mockup mini */}
          <div className="mt-auto flex items-end justify-end pt-4">
            <div className="relative h-24 sm:h-28 w-14 sm:w-16 rounded-[1.2rem] border-[2.5px] border-ink-900 bg-ink-950 p-1 shadow-elevated">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-ink-800" />
              <div className="h-full w-full rounded-[0.85rem] overflow-hidden bg-gradient-to-b from-brand-blue-50 to-white p-1.5 flex flex-col gap-1">
                <div className="h-2 rounded-sm bg-gradient-brand" />
                <div className="h-1.5 rounded-sm bg-ink-200" />
                <div className="h-1.5 rounded-sm bg-ink-200 w-2/3" />
                <div className="mt-auto h-7 rounded-md bg-gradient-brand-soft border border-ink-100" />
              </div>
            </div>
          </div>
        </Cell>

        {/* ─── BIG NUMBER CARD ─── */}
        <Cell
          delay={0.2}
          className="lg:col-span-4 lg:row-span-1 min-h-[14rem] sm:min-h-[16rem] bg-gradient-brand text-white border-transparent"
          softHover
        >
          <div className="absolute inset-0 -z-10 opacity-15 bg-grid-dark" aria-hidden="true" />
          <div
            className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-white/15 blur-2xl"
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/85">
            <Sparkles className="h-3 w-3" />
            Avis vérifiés
          </span>
          <p className="text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[0.85] mt-2 tabular-nums">
            <AnimatedCounter to={99} suffix="%" />
          </p>
          <p className="mt-auto pt-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/85">
            {t('bento.number.label')}
          </p>
        </Cell>

        {/* ─── COVERAGE / MAP CARD ─── */}
        <Cell
          delay={0.26}
          className="lg:col-span-4 lg:row-span-1 min-h-[14rem] sm:min-h-[16rem] bg-white"
        >
          <CardHeader icon={MapPin} accent="blue" title={t('bento.coverage.title')} />
          <p className="text-ink-600 leading-relaxed text-sm mt-3">
            {t('bento.coverage.text')}
          </p>

          <div className="mt-auto pt-4 flex justify-center">
            <svg viewBox="0 0 240 140" className="w-full max-w-[16rem] h-auto">
              <defs>
                <linearGradient id="mapg" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1876bc" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#84c450" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <path
                d="M40 30 Q80 8 130 18 Q190 28 210 60 Q220 96 180 118 Q120 132 70 122 Q30 110 28 80 Q26 50 40 30 Z"
                fill="url(#mapg)"
                stroke="#1876bc"
                strokeOpacity="0.28"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              {[
                { x: 110, y: 70 },
                { x: 130, y: 86 },
                { x: 100, y: 92 },
              ].map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="9" fill="#84c450" opacity="0.2">
                    <animate
                      attributeName="r"
                      from="6"
                      to="14"
                      dur="2.4s"
                      repeatCount="indefinite"
                      begin={`${i * 0.6}s`}
                    />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="0"
                      dur="2.4s"
                      repeatCount="indefinite"
                      begin={`${i * 0.6}s`}
                    />
                  </circle>
                  <circle cx={p.x} cy={p.y} r="3.5" fill="#1876bc" />
                </g>
              ))}
            </svg>
          </div>
        </Cell>

        {/* ─── QUOTE CARD ─── */}
        <Cell
          delay={0.32}
          className="sm:col-span-2 lg:col-span-4 lg:row-span-1 min-h-[14rem] sm:min-h-[16rem] bg-white"
        >
          <Quote className="h-6 w-6 text-brand-blue-300" />
          <blockquote className="mt-3 text-ink-800 leading-relaxed text-sm sm:text-base lg:text-lg">
            {t('bento.quote.text')}
          </blockquote>

          <div className="mt-auto pt-4 sm:pt-5 flex items-center gap-3 border-t border-ink-100">
            <div className="h-10 w-10 rounded-full bg-gradient-brand p-[2px] shrink-0">
              <img
                src="/bonhome.png"
                alt={t('bento.quote.author')}
                className="h-full w-full rounded-full object-cover bg-white"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink-900 truncate">
                {t('bento.quote.author')}
              </p>
              <p className="text-xs text-ink-500 truncate">{t('bento.quote.role')}</p>
            </div>
            <span className="ml-auto rounded-full bg-brand-green-50 text-brand-green-700 px-2.5 py-1 text-xs font-bold tabular-nums shrink-0">
              −35%
            </span>
          </div>
        </Cell>
      </div>
    </Section>
  );
};

/* ============ Building blocks ============ */

interface CellProps {
  delay?: number;
  className?: string;
  softHover?: boolean;
  children: React.ReactNode;
}

const Cell: React.FC<CellProps> = ({ delay = 0, className = '', softHover, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative flex flex-col rounded-3xl border border-ink-100 p-5 sm:p-6 lg:p-7 shadow-soft transition-all duration-500 ease-elegant hover:-translate-y-1 ${
      softHover ? 'hover:shadow-glow' : 'hover:shadow-elevated hover:border-brand-blue-200'
    } overflow-hidden ${className}`}
  >
    {children}
    <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 opacity-25 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 pointer-events-none" />
  </motion.div>
);

const CardHeader: React.FC<{
  icon: React.ElementType;
  accent: 'blue' | 'green';
  title: string;
}> = ({ icon: Icon, accent, title }) => (
  <div className="flex items-start gap-3">
    <div
      className={`inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl shrink-0 ${
        accent === 'blue'
          ? 'bg-brand-blue-50 text-brand-blue-600 ring-1 ring-brand-blue-100'
          : 'bg-brand-green-50 text-brand-green-700 ring-1 ring-brand-green-100'
      }`}
    >
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mt-1 sm:mt-1.5 text-base sm:text-lg lg:text-xl font-semibold text-ink-900 leading-tight">
      {title}
    </h3>
  </div>
);

const StackTile: React.FC<{
  icon: React.ElementType;
  label: string;
  tone: 'blue' | 'green' | 'mix';
}> = ({ icon: Icon, label, tone }) => {
  const styles =
    tone === 'blue'
      ? 'bg-brand-blue-50 ring-brand-blue-100 text-brand-blue-700'
      : tone === 'green'
      ? 'bg-brand-green-50 ring-brand-green-100 text-brand-green-700'
      : 'bg-gradient-brand-soft ring-ink-200 text-ink-800';
  return (
    <div className={`rounded-2xl ring-1 px-3 py-3 sm:py-4 ${styles}`}>
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-soft">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <p className="mt-2 text-xs sm:text-sm font-semibold">{label}</p>
    </div>
  );
};

export default BentoFeatures;
