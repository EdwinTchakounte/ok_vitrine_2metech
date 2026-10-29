import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Plug, Cable } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Schematic of the EnMKit test bench, drawn in markup (no photo yet).
 * The numbered markers match the component list rendered beside it
 * on the Learning Lab page (`BENCH_PARTS` order).
 */

const Marker: React.FC<{ n: number; className?: string }> = ({ n, className }) => (
  <span
    className={cn(
      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-blue-600 font-mono text-[10px] font-bold text-white dark:bg-brand-blue-500',
      className,
    )}
    aria-hidden="true"
  >
    {n}
  </span>
);

const Block: React.FC<{
  n: number;
  label: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ n, label, className, children }) => (
  <div
    className={cn(
      'relative flex flex-col rounded-lg border border-line-strong bg-surface p-3 shadow-soft',
      className,
    )}
  >
    <div className="flex items-start gap-2">
      <Marker n={n} />
      <span className="text-[11.5px] font-semibold leading-tight text-fg">{label}</span>
    </div>
    {children}
  </div>
);

const BenchDiagram: React.FC = () => {
  const { t } = useTranslation();
  const c = (k: string) => t(`lab.bench.components.${k}.name`);

  return (
    <figure className="mx-auto w-full max-w-xl">
      {/* Handle */}
      <div className="mx-auto h-4 w-28 rounded-t-xl border-2 border-b-0 border-line-strong" aria-hidden="true" />

      {/* Suitcase shell */}
      <div className="relative rounded-2xl border-2 border-line-strong bg-surface-sunken p-3 sm:p-4">
        <div className="absolute inset-0 rounded-2xl bg-grid-fine opacity-70" aria-hidden="true" />

        <div className="relative grid grid-cols-6 gap-2.5 sm:gap-3">
          {/* Transmitter + meter */}
          <Block n={1} label={c('emitter')} className="col-span-3 sm:col-span-2">
            <div className="mt-2.5 flex items-center gap-1" aria-hidden="true">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-green-500" />
              <span className="h-1 flex-1 rounded-full bg-line" />
            </div>
          </Block>
          <Block n={2} label={c('meter')} className="col-span-3 sm:col-span-2">
            <span
              className="mt-2.5 block rounded-sm border border-line bg-canvas px-1.5 py-0.5 text-right font-mono text-[11px] tabular-nums text-fg-muted"
              aria-hidden="true"
            >
              kWh
            </span>
          </Block>

          {/* Receiver */}
          <Block n={3} label={c('receiver')} className="col-span-6 sm:col-span-2 sm:row-span-2">
            <div className="mt-3 grid flex-1 grid-cols-2 gap-1.5" aria-hidden="true">
              {[1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className="flex items-center justify-center rounded-sm border border-line bg-canvas py-1 font-mono text-[10px] text-fg-subtle"
                >
                  L{l}
                </span>
              ))}
            </div>
          </Block>

          {/* Distribution board */}
          <Block n={4} label={c('panel')} className="col-span-6 sm:col-span-4">
            <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
              <span className="h-8 w-4 rounded-sm border border-brand-blue-300 bg-brand-blue-50 dark:border-brand-blue-500/40 dark:bg-brand-blue-500/15" />
              <span className="mx-1 h-6 w-px bg-line-strong" />
              {[1, 2, 3, 4].map((b) => (
                <span key={b} className="h-6 w-3 rounded-sm border border-line-strong bg-canvas" />
              ))}
            </div>
          </Block>

          {/* Loads: lines 1–4 */}
          <Block n={5} label={c('loads')} className="col-span-6">
            <ul className="mt-3 grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((l) => {
                const bulb = l <= 2;
                const Icon = bulb ? Lightbulb : Plug;
                return (
                  <li
                    key={l}
                    className="flex flex-col items-center gap-1 rounded-md border border-line bg-canvas px-1 py-2"
                  >
                    <Icon
                      className={cn(
                        'h-4 w-4',
                        bulb ? 'text-brand-green-500' : 'text-brand-blue-500 dark:text-brand-blue-300',
                      )}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className="text-[10.5px] font-semibold text-fg">
                      {t('lab.bench.lineLabel')} {l}
                    </span>
                    <span className="text-[10px] text-fg-subtle">
                      {bulb ? t('lab.bench.bulb') : t('lab.bench.socket')}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Block>
        </div>

        {/* Mains cable */}
        <div className="relative mt-3 flex items-center gap-2 text-[11px] text-fg-muted">
          <Marker n={6} />
          <Cable className="h-3.5 w-3.5 text-fg-subtle" aria-hidden="true" />
          <span className="font-semibold text-fg">{c('cable')}</span>
          <span className="h-px flex-1 border-t border-dashed border-line-strong" aria-hidden="true" />
          <span className="font-mono">{t('lab.bench.mains')}</span>
        </div>
      </div>

      {/* Dimension rule */}
      <div className="mt-2 flex items-center gap-2 font-mono text-[10.5px] text-fg-subtle" aria-hidden="true">
        <span className="h-2 w-px bg-line-strong" />
        <span className="h-px flex-1 bg-line-strong" />
        <span>≈ 60 cm</span>
        <span className="h-px flex-1 bg-line-strong" />
        <span className="h-2 w-px bg-line-strong" />
      </div>

      <figcaption className="mt-3 text-center text-[12px] text-fg-subtle">
        {t('lab.bench.diagramCaption')}
      </figcaption>
    </figure>
  );
};

export default BenchDiagram;
