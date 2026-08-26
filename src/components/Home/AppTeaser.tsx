import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageSquare, Gauge, ToggleRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { ButtonLink } from '../ui/Button';
import ApkDownload from '../App/ApkDownload';
import { shotSrc } from '../../lib/links';

/** Three screens, staggered: enough to show the product, not a slideshow. */
const SHOTS = ['parc', 'lignes', 'conso'] as const;

const HIGHLIGHTS = [
  { key: 'control', icon: ToggleRight },
  { key: 'consumption', icon: Gauge },
  { key: 'sms', icon: MessageSquare },
] as const;

const AppTeaser: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="overflow-hidden bg-surface-sunken">
      <div className="absolute inset-0 -z-10 bg-wash" aria-hidden="true" />

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Screens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 lg:col-span-6"
        >
          <div className="flex items-end justify-center gap-3 sm:gap-5">
            {SHOTS.map((name, i) => (
              <motion.figure
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.09 }}
                className={
                  i === 1
                    ? 'phone-frame w-[38%] max-w-[13rem]'
                    : 'phone-frame w-[31%] max-w-[11rem] opacity-90'
                }
              >
                <img
                  src={shotSrc(name)}
                  alt={t(`app.shots.${name}`)}
                  width={540}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
              </motion.figure>
            ))}
          </div>
        </motion.div>

        {/* Copy */}
        <div className="order-1 lg:order-2 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="chip">{t('app.eyebrow')}</span>
            <h2 className="mt-4 text-fluid-3xl font-bold leading-[1.1] tracking-tighter text-fg sm:text-fluid-4xl">
              {t('app.title')}{' '}
              <span className="text-gradient-brand">{t('app.titleAccent')}</span>
            </h2>
            <div className="rule-brand mt-5" aria-hidden="true" />
            <p className="mt-5 max-w-lg text-fluid-base leading-relaxed text-fg-muted text-just">
              {t('app.subtitle')}
            </p>

            <ul className="mt-7 space-y-4">
              {HIGHLIGHTS.map((h) => (
                <li key={h.key} className="flex items-start gap-3.5">
                  <span className="icon-tile h-9 w-9 shrink-0">
                    <h.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg">
                      {t(`app.features.${h.key}.title`)}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-fg-muted">
                      {t(`app.features.${h.key}.text`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink
                to="/app"
                variant="outline"
                size="md"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                {t('app.teaserCta')}
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download unit spanning the section */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-12 lg:mt-14"
      >
        <ApkDownload />
      </motion.div>
    </Section>
  );
};

export default AppTeaser;
