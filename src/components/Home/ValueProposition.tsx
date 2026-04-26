import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Eye,
  TrendingDown,
  ShieldCheck,
  Check,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

type CardKey = 'visibility' | 'savings' | 'security';

interface CardConfig {
  key: CardKey;
  icon: React.ElementType;
  accent: 'blue' | 'green' | 'mix';
  visual: 'chart' | 'compare' | 'alert';
}

const CARDS: CardConfig[] = [
  { key: 'visibility', icon: Eye, accent: 'blue', visual: 'chart' },
  { key: 'savings', icon: TrendingDown, accent: 'green', visual: 'compare' },
  { key: 'security', icon: ShieldCheck, accent: 'mix', visual: 'alert' },
];

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-gradient-to-b from-white via-brand-blue-50/20 to-white">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-40" aria-hidden="true" />

      <SectionHeader
        eyebrow={t('value.eyebrow')}
        title={
          <>
            {t('value.title')}{' '}
            <span className="text-gradient-brand">{t('value.titleAccent')}</span>
          </>
        }
        subtitle={t('value.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {CARDS.map((card, i) => (
          <ValueCard key={card.key} config={card} index={i} t={t} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 lg:mt-14 flex flex-col items-center gap-3"
      >
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-5 w-5" />}
        >
          {t('value.cta')}
        </ButtonLink>
        <p className="text-xs text-ink-500">{t('value.ctaHint')}</p>
      </motion.div>
    </Section>
  );
};

/* ─────────── Card component ─────────── */

interface ValueCardProps {
  config: CardConfig;
  index: number;
  t: (k: string) => string;
}

const accentMap = {
  blue: {
    chip: 'bg-brand-blue-50 text-brand-blue-700 ring-brand-blue-100',
    icon: 'bg-brand-blue-50 text-brand-blue-600 ring-brand-blue-100',
    stat: 'text-brand-blue-600',
    bullet: 'text-brand-blue-600',
  },
  green: {
    chip: 'bg-brand-green-50 text-brand-green-700 ring-brand-green-100',
    icon: 'bg-brand-green-50 text-brand-green-700 ring-brand-green-100',
    stat: 'text-brand-green-700',
    bullet: 'text-brand-green-600',
  },
  mix: {
    chip: 'bg-gradient-brand-soft text-ink-800 ring-ink-200',
    icon: 'bg-gradient-brand-soft text-brand-blue-700 ring-ink-200',
    stat: 'text-gradient-brand',
    bullet: 'text-brand-blue-600',
  },
};

const ValueCard: React.FC<ValueCardProps> = ({ config, index, t }) => {
  const styles = accentMap[config.accent];
  const Icon = config.icon;
  const k = `value.cards.${config.key}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-3xl border border-ink-100 bg-white p-6 sm:p-7 lg:p-8 shadow-soft transition-all duration-500 ease-elegant hover:-translate-y-1 hover:shadow-elevated hover:border-brand-blue-200 overflow-hidden"
    >
      {/* Top row: tag + stat */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] ring-1 ${styles.chip}`}
        >
          {t(`${k}.tag`)}
        </span>
        <span
          className={`text-2xl sm:text-3xl font-bold tabular-nums leading-none ${
            config.accent === 'mix' ? 'text-gradient-brand' : styles.stat
          }`}
        >
          {t(`${k}.stat`)}
        </span>
      </div>

      {/* Icon */}
      <div
        className={`mt-5 sm:mt-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Title + text */}
      <h3 className="mt-5 text-xl sm:text-2xl font-bold text-ink-900 leading-[1.2] tracking-tight">
        {t(`${k}.title`)}
      </h3>
      <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed">
        {t(`${k}.text`)}
      </p>

      {/* Bullets */}
      <ul className="mt-5 space-y-2.5">
        {(['b1', 'b2', 'b3'] as const).map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-current/15 ${styles.bullet}`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="leading-snug">{t(`${k}.${b}`)}</span>
          </li>
        ))}
      </ul>

      {/* Visual */}
      <div className="mt-6 sm:mt-7 pt-5 border-t border-ink-100">
        {config.visual === 'chart' && <MiniChart />}
        {config.visual === 'compare' && <MiniCompare t={t} />}
        {config.visual === 'alert' && <MiniAlert t={t} />}
      </div>
    </motion.article>
  );
};

/* ─────────── Visuals ─────────── */

const MiniChart: React.FC = () => {
  const bars = [42, 58, 36, 71, 48, 63, 78, 52, 66, 80, 58, 70, 64, 82];
  return (
    <div>
      <div className="flex items-end gap-1 h-12 sm:h-14">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.04 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-blue-200 to-brand-blue-500"
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-ink-400">
        <span>00h</span>
        <span>06h</span>
        <span>12h</span>
        <span>18h</span>
        <span>24h</span>
      </div>
    </div>
  );
};

const MiniCompare: React.FC<{ t: (k: string) => string }> = ({ t }) => (
  <div className="grid grid-cols-2 gap-3">
    <div className="rounded-2xl border border-ink-200 bg-ink-50/60 px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink-500">
        {t('value.cards.savings.before')}
      </p>
      <p className="mt-1 text-base sm:text-lg font-bold text-ink-700 tabular-nums leading-tight">
        {t('value.cards.savings.beforeValue')}
      </p>
      <p className="text-[10px] text-ink-500">{t('value.cards.savings.currency')}</p>
    </div>
    <div className="relative rounded-2xl border border-brand-green-200 bg-brand-green-50/60 px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green-700">
        {t('value.cards.savings.after')}
      </p>
      <p className="mt-1 text-base sm:text-lg font-bold text-brand-green-700 tabular-nums leading-tight">
        {t('value.cards.savings.afterValue')}
      </p>
      <p className="text-[10px] text-brand-green-700/70">
        {t('value.cards.savings.currency')}
      </p>
      <span className="absolute -top-2 right-2 inline-flex items-center gap-0.5 rounded-full bg-brand-green-600 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-soft">
        <TrendingDown className="h-2.5 w-2.5" />
        14%
      </span>
    </div>
  </div>
);

const MiniAlert: React.FC<{ t: (k: string) => string }> = ({ t }) => (
  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3">
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
        <AlertTriangle className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-amber-900 leading-tight">
          {t('value.cards.security.alertTitle')}
        </p>
        <p className="mt-0.5 text-[10px] text-amber-800/80">
          {t('value.cards.security.alertTime')}
        </p>
      </div>
      <span className="relative flex h-1.5 w-1.5 mt-2 shrink-0">
        <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75" />
        <span className="relative rounded-full bg-amber-500 h-1.5 w-1.5" />
      </span>
    </div>
  </div>
);

export default ValueProposition;
