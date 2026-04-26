import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, Wrench, Gauge, TrendingDown, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

const ProductShowcase: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'step1', icon: ClipboardCheck },
    { key: 'step2', icon: Wrench },
    { key: 'step3', icon: Gauge },
    { key: 'step4', icon: TrendingDown },
  ] as const;

  return (
    <Section className="bg-ink-50/40">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-60" aria-hidden="true" />

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

      {/* Timeline */}
      <div className="relative">
        {/* connecting line desktop */}
        <div
          className="hidden lg:block absolute left-0 right-0 top-[3.5rem] h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(24,118,188,0.5), rgba(132,196,80,0.5), transparent)',
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((s, i) => (
            <motion.article
              key={s.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* numbered halo */}
              <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28">
                {/* soft halo always visible, intensifies on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'conic-gradient(from 0deg, #1876bc, #84c450, #1876bc)',
                    filter: 'blur(14px)',
                  }}
                />
                {/* outer circle */}
                <div className="relative h-full w-full rounded-full border border-ink-200 bg-white shadow-soft flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-dashed border-ink-200" />
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                {/* number badge */}
                <span className="absolute -top-1 -right-1 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-ink-950 text-white text-[10px] sm:text-xs font-bold shadow-elevated">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue-600">
                  {t(`showcase.${s.key}.kicker`)}
                </p>
                <h3 className="mt-2 text-lg lg:text-xl font-semibold text-ink-900">
                  {t(`showcase.${s.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed max-w-xs mx-auto">
                  {t(`showcase.${s.key}.text`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
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
