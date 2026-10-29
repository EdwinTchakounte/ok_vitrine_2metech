import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, BrainCircuit } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { cn } from '../../lib/cn';

const LAB_FACTS = ['lines', 'sms', 'tp'] as const;
const GRADES = ['A', 'B', 'C', 'D', 'E'] as const;

/** Home teaser for the two new offers: Learning Lab and the AI platform. */
const LabTeaser: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    {
      key: 'lab',
      to: '/learning-lab',
      icon: FlaskConical,
      tile: 'icon-tile-green',
      chip: 'chip-green',
      visual: (
        <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
          {LAB_FACTS.map((f) => (
            <div key={f} className="bg-surface-sunken px-3 py-3">
              <dt className="sr-only">{t(`lab.facts.${f}.label`)}</dt>
              <dd>
                <span className="block font-display text-fluid-xl font-bold leading-none tracking-tight text-fg">
                  {t(`lab.facts.${f}.value`)}
                </span>
                <span className="mt-1 block text-[11.5px] leading-tight text-fg-muted">
                  {t(`lab.facts.${f}.label`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      ),
    },
    {
      key: 'ai',
      to: '/plateforme',
      icon: BrainCircuit,
      tile: 'icon-tile',
      chip: 'chip',
      visual: (
        <div>
          <ol className="grid grid-cols-5 gap-1.5" aria-label={t('platform.grade.title')}>
            {GRADES.map((g, i) => (
              <li
                key={g}
                className={cn(
                  'flex h-10 items-center justify-center rounded-md border font-display text-base font-bold',
                  i === 0
                    ? 'border-transparent bg-brand-green-500 text-white'
                    : 'border-line bg-surface-sunken text-fg-muted',
                )}
              >
                {g}
              </li>
            ))}
          </ol>
          <p className="mt-2 text-[11.5px] text-fg-subtle">{t('platform.grade.title')}</p>
        </div>
      ),
    },
  ] as const;

  return (
    <Section className="bg-canvas">
      <SectionHeader
        eyebrow={t('labTeaser.eyebrow')}
        title={
          <>
            {t('labTeaser.title')}{' '}
            <span className="text-gradient-brand">{t('labTeaser.titleAccent')}</span>
          </>
        }
        subtitle={t('labTeaser.subtitle')}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={c.to}
              className="card card-hover group flex h-full flex-col overflow-hidden p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className={cn(c.tile, 'h-11 w-11')}>
                  <c.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className={c.chip}>{t(`labTeaser.${c.key}.tag`)}</span>
              </div>
              <h3 className="mt-5 text-fluid-2xl font-bold tracking-tight text-fg">
                {t(`labTeaser.${c.key}.title`)}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
                {t(`labTeaser.${c.key}.text`)}
              </p>
              <div className="mt-6">{c.visual}</div>
              <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 dark:text-brand-blue-300">
                {t(`labTeaser.${c.key}.cta`)}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default LabTeaser;
