import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { ButtonLink } from '../ui/Button';

const MegaCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-xl border border-line bg-invert text-white shadow-elevated"
        >
          <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 bg-dots-dark opacity-45" aria-hidden="true" />
          <div className="hairline-brand absolute inset-x-0 top-0" aria-hidden="true" />

          <div className="grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-14 lg:py-20">
            <div className="lg:col-span-7">
              <span className="chip-dark">
                <Sparkles className="h-3 w-3 text-brand-green-400" />
                {t('megaCta.eyebrow')}
              </span>

              <h2 className="mt-5 text-fluid-4xl font-bold leading-[1.06] tracking-tighter text-white">
                {t('megaCta.title')}{' '}
                <span className="text-gradient-brand-soft">{t('megaCta.titleAccent')}</span>
              </h2>
              <p className="mt-5 max-w-xl text-fluid-base leading-relaxed text-white/70 text-just">
                {t('megaCta.subtitle')}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink
                  to="/contact"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  {t('megaCta.primary')}
                </ButtonLink>
                <ButtonLink to="/enmkit" variant="glass" size="lg">
                  {t('megaCta.secondary')}
                </ButtonLink>
              </div>
            </div>

            {/* Guarantees as a bordered list rather than floating pills */}
            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
              <ul className="space-y-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                {[t('megaCta.tag1'), t('megaCta.tag2'), t('megaCta.tag3')].map((label) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 bg-invert/90 px-4 py-3.5 text-sm text-white/80 backdrop-blur-sm"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-green-400" strokeWidth={2.5} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MegaCTA;
