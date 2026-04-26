import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { ButtonLink } from '../ui/Button';

const MegaCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-ink-800/40 bg-ink-950 text-white shadow-floating"
        >
          {/* Layered backgrounds */}
          <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-95" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" aria-hidden="true" />

          {/* Decorative orbs */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/35 blur-[140px]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-green-500/30 blur-[140px]"
          />

          {/* Decorative orbital rings (desktop only) */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 lg:right-[-6%] top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-20 lg:opacity-25 hidden md:block"
            viewBox="0 0 400 400"
          >
            <circle cx="200" cy="200" r="140" fill="none" stroke="white" strokeOpacity="0.4" strokeDasharray="2 8" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="white" strokeOpacity="0.25" strokeDasharray="2 8" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="#84c450" strokeOpacity="0.5" />
          </svg>

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 max-w-5xl">
            <span className="chip-dark">
              <Sparkles className="h-3 w-3 text-brand-green-400" />
              {t('megaCta.eyebrow')}
            </span>

            <h2 className="mt-6 text-fluid-5xl xl:text-fluid-6xl font-bold leading-[1.02] tracking-[-0.01em]">
              {t('megaCta.title')}{' '}
              <span className="bg-gradient-to-r from-brand-green-300 via-brand-green-400 to-brand-blue-300 bg-clip-text text-transparent">
                {t('megaCta.titleAccent')}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-fluid-lg text-white/75 leading-relaxed">
              {t('megaCta.subtitle')}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink
                to="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                {t('megaCta.primary')}
              </ButtonLink>
              <ButtonLink to="/enmkit" variant="glass" size="lg">
                {t('megaCta.secondary')}
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              {[t('megaCta.tag1'), t('megaCta.tag2'), t('megaCta.tag3')].map((label, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-green-500/20 text-brand-green-300">
                    <Check className="h-3 w-3" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MegaCTA;
