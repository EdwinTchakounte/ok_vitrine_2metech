import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Eye, TrendingDown, ShieldCheck, Check, ArrowRight, AlertTriangle } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';
import { cn } from '../../lib/cn';

type CardKey = 'visibility' | 'savings' | 'security';

interface CardConfig {
  key: CardKey;
  icon: React.ElementType;
  accent: 'blue' | 'green';
  visual: 'chart' | 'compare' | 'alert';
}

const CARDS: CardConfig[] = [
  { key: 'visibility', icon: Eye, accent: 'blue', visual: 'chart' },
  { key: 'savings', icon: TrendingDown, accent: 'green', visual: 'compare' },
  { key: 'security', icon: ShieldCheck, accent: 'blue', visual: 'alert' },
];

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-canvas">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />

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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, i) => (
          <ValueCard key={card.key} config={card} index={i} t={t} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex flex-col items-center gap-3"
      >
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('value.cta')}
        </ButtonLink>
        <p className="text-xs text-fg-subtle">{t('value.ctaHint')}</p>
      </motion.div>
    </Section>
  );
};

/* ─────────── Card ─────────── */

interface ValueCardProps {
  config: CardConfig;
  index: number;
  t: (k: string) => string;
}

const ValueCard: React.FC<ValueCardProps> = ({ config, index, t }) => {
  const Icon = config.icon;
  const k = `value.cards.${config.key}`;
  const green = config.accent === 'green';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card card-hover group flex flex-col p-6 lg:p-7"
    >
      {/* Accent hairline along the top edge */}
      <span
        className={cn(
          'absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-elegant group-hover:scale-x-100',
          green ? 'bg-brand-green-500' : 'bg-brand-blue-500',
        )}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <span className={green ? 'icon-tile-green h-11 w-11' : 'icon-tile h-11 w-11'}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span
          className={cn(
            'text-3xl font-bold leading-none tabular-nums tracking-tighter',
            green
              ? 'text-brand-green-600 dark:text-brand-green-400'
              : 'text-brand-blue-600 dark:text-brand-blue-300',
          )}
        >
          {t(`${k}.stat`)}
        </span>
      </div>

      <span className="chip-neutral mt-5 self-start">{t(`${k}.tag`)}</span>

      <h3 className="mt-3 text-fluid-xl font-bold leading-tight text-fg">
        {t(`${k}.title`)}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
        {t(`${k}.text`)}
      </p>

      <ul className="mt-5 space-y-2.5">
        {(['b1', 'b2', 'b3'] as const).map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-fg-muted">
            <Check
              className={cn(
                'mt-0.5 h-3.5 w-3.5 shrink-0',
                green ? 'text-brand-green-500' : 'text-brand-blue-500',
              )}
              strokeWidth={3}
            />
            <span className="leading-snug">{t(`${k}.${b}`)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="hairline mb-5" aria-hidden="true" />
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
      <div className="flex h-12 items-end gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.03 * i, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 rounded-px bg-brand-blue-500/70 dark:bg-brand-blue-400/60"
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-fg-subtle">
        <span>00h</span>
        <span>12h</span>
        <span>24h</span>
      </div>
    </div>
  );
};

const MiniCompare: React.FC<{ t: (k: string) => string }> = ({ t }) => (
  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
    <div className="bg-surface-sunken px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-fg-subtle">
        {t('value.cards.savings.before')}
      </p>
      <p className="mt-1 text-base font-bold leading-tight tabular-nums text-fg-muted">
        {t('value.cards.savings.beforeValue')}
      </p>
      <p className="text-[10px] text-fg-subtle">{t('value.cards.savings.currency')}</p>
    </div>
    <div className="relative bg-brand-green-50 px-3 py-3 dark:bg-brand-green-500/10">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-green-700 dark:text-brand-green-300">
        {t('value.cards.savings.after')}
      </p>
      <p className="mt-1 text-base font-bold leading-tight tabular-nums text-brand-green-700 dark:text-brand-green-300">
        {t('value.cards.savings.afterValue')}
      </p>
      <p className="text-[10px] text-brand-green-700/70 dark:text-brand-green-300/70">
        {t('value.cards.savings.currency')}
      </p>
      <span className="absolute right-2 top-2 inline-flex items-center gap-0.5 rounded-sm bg-brand-green-600 px-1.5 py-0.5 text-[9px] font-bold text-white">
        <TrendingDown className="h-2.5 w-2.5" />
        14%
      </span>
    </div>
  </div>
);

const MiniAlert: React.FC<{ t: (k: string) => string }> = ({ t }) => (
  <div className="rounded-md border border-amber-300/60 bg-amber-50 p-3 dark:border-amber-500/25 dark:bg-amber-500/10">
    <div className="flex items-start gap-2.5">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold leading-tight text-amber-900 dark:text-amber-200">
          {t('value.cards.security.alertTitle')}
        </p>
        <p className="mt-0.5 text-[10px] text-amber-800/80 dark:text-amber-200/60">
          {t('value.cards.security.alertTime')}
        </p>
      </div>
      <span className="relative mt-1.5 flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inset-0 animate-ping rounded-full bg-amber-500 opacity-75" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-amber-500" />
      </span>
    </div>
  </div>
);

export default ValueProposition;
