import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, Wrench, Gauge, TrendingDown, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

const STEPS = [
  { key: 'step1', icon: ClipboardCheck },
  { key: 'step2', icon: Wrench },
  { key: 'step3', icon: Gauge },
  { key: 'step4', icon: TrendingDown },
] as const;

const ProductShowcase: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-canvas">
      <SectionHeader
        eyebrow={t('showcase.eyebrow')}
        title={
          <>
            {t('showcase.title')}{' '}
            <span className="text-gradient-brand">{t('showcase.titleAccent')}</span>
          </>
        }
        subtitle={t('showcase.subtitle')}
      />

      <ol className="relative grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.li
            key={s.key}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover lg:p-7"
          >
            {/* Step index as a quiet monospace marker */}
            <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-fg-subtle">
              {String(i + 1).padStart(2, '0')}
            </span>

            <span className="icon-tile mt-4 h-11 w-11">
              <s.icon className="h-5 w-5" strokeWidth={2} />
            </span>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue-600 dark:text-brand-blue-300">
              {t(`showcase.${s.key}.kicker`)}
            </p>
            <h3 className="mt-2 text-[17px] font-bold leading-tight text-fg">
              {t(`showcase.${s.key}.title`)}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
              {t(`showcase.${s.key}.text`)}
            </p>

            {/* Bottom accent that fills on hover */}
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
              aria-hidden="true"
            />
          </motion.li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink
          to="/installers"
          variant="primary"
          size="md"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('common.contact')}
        </ButtonLink>
        <ButtonLink to="/installation-video" variant="outline" size="md">
          {t('nav.video')}
        </ButtonLink>
      </div>
    </Section>
  );
};

export default ProductShowcase;
