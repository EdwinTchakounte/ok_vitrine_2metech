import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Gauge,
  RadioTower,
  Router,
  Server,
  LayoutDashboard,
  Bot,
  Smartphone,
  WifiOff,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

/* ------------------------------------------------------------------
   SMS → gateway → platform flow, drawn in markup so it stays crisp,
   themable and translatable.

   Desktop (lg+): a 9-column grid, nodes in odd columns, connectors in
   even ones. Row 1 is the online chain, row 3 the offline branch (the
   phone receives the same SMS), row 2 carries the vertical links.
   Mobile: one vertical chain, then the offline branch below.

   Legend: solid green = SMS over GSM · dashed blue = Internet (HTTPS).
   ------------------------------------------------------------------ */

type LinkKind = 'sms' | 'net';

type NodeKey = 'kit' | 'gsm' | 'gateway' | 'platform' | 'dashboard' | 'assistant' | 'app';

const ICONS: Record<NodeKey, LucideIcon> = {
  kit: Gauge,
  gsm: RadioTower,
  gateway: Router,
  platform: Server,
  dashboard: LayoutDashboard,
  assistant: Bot,
  app: Smartphone,
};

const Node: React.FC<{
  k: NodeKey;
  highlight?: boolean;
  badge?: React.ReactNode;
  compact?: boolean;
  className?: string;
}> = ({ k, highlight, badge, compact, className }) => {
  const { t } = useTranslation();
  const Icon = ICONS[k];
  const green = k === 'kit' || k === 'gsm' || k === 'app';
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-xl border bg-surface shadow-soft',
        compact ? 'p-3.5' : 'p-4',
        highlight
          ? 'border-brand-blue-400 ring-4 ring-brand-blue-500/10 dark:border-brand-blue-500/60'
          : 'border-line',
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className={cn(green ? 'icon-tile-green' : 'icon-tile', 'h-9 w-9 shrink-0')}>
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <p className="text-[13.5px] font-bold leading-tight text-fg">
          {t(`platform.flow.nodes.${k}.title`)}
        </p>
      </div>
      <p className="mt-2 text-[12.5px] leading-snug text-fg-muted">
        {t(`platform.flow.nodes.${k}.text`)}
      </p>
      {badge && <div className="mt-2.5">{badge}</div>}
    </div>
  );
};

const lineClass = (kind: LinkKind) =>
  kind === 'sms'
    ? 'border-brand-green-500'
    : 'border-dashed border-brand-blue-400 dark:border-brand-blue-300/70';

/** Travelling dot along a connector (skipped when reduced motion is on). */
const Pulse: React.FC<{ kind: LinkKind; axis: 'x' | 'y'; reverse?: boolean; delay?: number }> = ({
  kind,
  axis,
  reverse,
  delay = 0,
}) => {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const from = reverse ? '100%' : '0%';
  const to = reverse ? '0%' : '100%';
  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        'absolute h-1.5 w-1.5 rounded-full',
        kind === 'sms' ? 'bg-brand-green-500' : 'bg-brand-blue-500',
        axis === 'x' ? '-mt-[3px] top-1/2' : '-ml-[3px] left-1/2',
      )}
      initial={axis === 'x' ? { left: from, opacity: 0 } : { top: from, opacity: 0 }}
      animate={
        axis === 'x'
          ? { left: [from, to], opacity: [0, 1, 1, 0] }
          : { top: [from, to], opacity: [0, 1, 1, 0] }
      }
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
};

/** Horizontal connector with an arrow head and a short label above. */
const HLink: React.FC<{ kind: LinkKind; label?: string; delay?: number }> = ({ kind, label, delay }) => (
  <div className="relative flex h-full items-center" aria-hidden="true">
    {label && (
      <span className="absolute inset-x-0 top-1/2 -mt-5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
        {label}
      </span>
    )}
    <span className={cn('relative block w-full border-t-2', lineClass(kind))}>
      <Pulse kind={kind} axis="x" delay={delay} />
    </span>
    <span
      className={cn(
        '-ml-1 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent',
        kind === 'sms' ? 'border-l-brand-green-500' : 'border-l-brand-blue-400 dark:border-l-brand-blue-300/70',
      )}
    />
  </div>
);

/** Vertical connector; `up` flips the arrow. */
const VLink: React.FC<{
  kind: LinkKind;
  label?: string;
  up?: boolean;
  className?: string;
  delay?: number;
}> = ({ kind, label, up, className, delay }) => (
  <div className={cn('relative flex flex-col items-center', className)} aria-hidden="true">
    {up && (
      <span
        className={cn(
          '-mb-1 h-0 w-0 border-x-[5px] border-b-[7px] border-x-transparent',
          kind === 'sms' ? 'border-b-brand-green-500' : 'border-b-brand-blue-400 dark:border-b-brand-blue-300/70',
        )}
      />
    )}
    <span className={cn('relative block w-0 flex-1 border-l-2', lineClass(kind))}>
      <Pulse kind={kind} axis="y" reverse={up} delay={delay} />
    </span>
    {!up && (
      <span
        className={cn(
          '-mt-1 h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent',
          kind === 'sms' ? 'border-t-brand-green-500' : 'border-t-brand-blue-400 dark:border-t-brand-blue-300/70',
        )}
      />
    )}
    {label && (
      <span className="absolute left-1/2 top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
        {label}
      </span>
    )}
  </div>
);

const DataFlowDiagram: React.FC = () => {
  const { t } = useTranslation();

  const onlineChip = (
    <span className="chip">{t('platform.flow.online')}</span>
  );
  const offlineChip = (
    <span className="chip-green">
      <WifiOff className="h-3 w-3" />
      {t('platform.flow.offline')}
    </span>
  );

  return (
    <figure>
      {/* ---------------- Desktop ---------------- */}
      <div
        className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_3.25rem_minmax(0,1fr)_3.25rem_minmax(0,1fr)_3.25rem_minmax(0,1fr)_3.25rem_minmax(0,1fr)] lg:grid-rows-[auto_4rem_auto]"
      >
        {/* Row 1: online chain */}
        <div className="col-start-1 row-start-1 self-center">
          <Node k="kit" />
        </div>
        <div className="col-start-2 row-start-1">
          <HLink kind="sms" label={t('platform.flow.links.sms')} />
        </div>
        <div className="col-start-3 row-start-1 self-center">
          <Node k="gsm" />
        </div>
        <div className="col-start-4 row-start-1">
          <HLink kind="sms" label={t('platform.flow.links.sms')} delay={0.4} />
        </div>
        <div className="col-start-5 row-start-1 self-center">
          <Node k="gateway" />
        </div>
        <div className="col-start-6 row-start-1">
          <HLink kind="net" label={t('platform.flow.links.https')} delay={0.8} />
        </div>
        <div className="col-start-7 row-start-1 self-center">
          <Node k="platform" highlight badge={onlineChip} />
        </div>
        <div className="col-start-8 row-start-1">
          <HLink kind="net" delay={1.2} />
        </div>
        <div className="col-start-9 row-start-1 flex flex-col gap-3">
          <Node k="dashboard" compact />
          <Node k="assistant" compact />
        </div>

        {/* Row 2: vertical links */}
        <VLink
          kind="sms"
          label={t('platform.flow.links.local')}
          className="col-start-3 row-start-2 py-1"
          delay={0.6}
        />
        <VLink
          kind="net"
          label={t('platform.flow.links.https')}
          up
          className="col-start-7 row-start-2 pt-1"
          delay={1}
        />

        {/* Row 3: offline branch */}
        <div className="col-start-3 row-start-3">
          <Node k="app" badge={offlineChip} />
        </div>
        {/* Elbow: from the app (right) to the centre of the platform column,
            then up into the row-2 link. Span = 2 connectors + 2 node
            columns, so the platform centre sits at 75% + 1.625rem. */}
        <div className="relative col-span-4 col-start-4 row-start-3" aria-hidden="true">
          <span
            className={cn('absolute left-0 top-1/2 border-t-2', lineClass('net'))}
            style={{ width: 'calc(75% + 1.625rem + 1px)' }}
          />
          <span
            className={cn('absolute top-0 h-1/2 border-l-2', lineClass('net'))}
            style={{ left: 'calc(75% + 1.625rem - 1px)' }}
          />
        </div>
      </div>

      {/* ---------------- Mobile / tablet ---------------- */}
      <div className="lg:hidden">
        <ol className="mx-auto flex max-w-md flex-col">
          {(['kit', 'gsm', 'gateway', 'platform'] as const).map((k, i, arr) => (
            <li key={k} className="flex flex-col">
              <Node k={k} highlight={k === 'platform'} badge={k === 'platform' ? onlineChip : undefined} />
              {i < arr.length - 1 && (
                <VLink
                  kind={i < 2 ? 'sms' : 'net'}
                  label={i < 2 ? t('platform.flow.links.sms') : t('platform.flow.links.https')}
                  className="h-12"
                  delay={i * 0.4}
                />
              )}
            </li>
          ))}
          <li className="flex flex-col">
            <VLink kind="net" className="h-10" delay={1.2} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Node k="dashboard" compact />
              <Node k="assistant" compact />
            </div>
          </li>
        </ol>

        <div className="mx-auto mt-8 max-w-md rounded-xl border border-dashed border-line-strong bg-surface-sunken p-4">
          <div className="flex items-center gap-2 text-[12.5px] font-semibold text-fg-muted">
            <RadioTower className="h-4 w-4 text-brand-green-500" />
            {t('platform.flow.nodes.gsm.title')}
          </div>
          <VLink kind="sms" label={t('platform.flow.links.local')} className="ml-2 h-12 w-0" />
          <Node k="app" badge={offlineChip} />
        </div>
      </div>

      <figcaption className="mt-8 flex flex-col items-center gap-3 text-[12.5px] text-fg-muted lg:mt-6">
        <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 border-t-2 border-brand-green-500" aria-hidden="true" />
            {t('platform.flow.links.sms')} · GSM
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              className="w-6 border-t-2 border-dashed border-brand-blue-400 dark:border-brand-blue-300/70"
              aria-hidden="true"
            />
            Internet · {t('platform.flow.links.https')}
          </span>
        </span>
        <span className="max-w-2xl text-center text-fg-subtle">{t('platform.flow.offlineNote')}</span>
      </figcaption>
    </figure>
  );
};

export default DataFlowDiagram;
