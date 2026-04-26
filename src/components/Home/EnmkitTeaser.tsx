import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Eye, Bell, Shield, BarChart3 } from 'lucide-react';
import { Section } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

const EnmkitTeaser: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { key: 'monitoring', icon: Eye },
    { key: 'ai', icon: Bell },
    { key: 'security', icon: Shield },
    { key: 'analytics', icon: BarChart3 },
  ];

  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] sm:aspect-[16/12] rounded-4xl overflow-hidden border border-ink-100 shadow-elevated">
            <img
              src="/slides/slide2.jpg"
              alt="EnMKit"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/40 via-transparent to-transparent" />
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto sm:max-w-[18rem] rounded-3xl border border-white/30 bg-white/85 backdrop-blur-xl p-4 shadow-floating"
            >
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xl font-bold text-gradient-brand tabular-nums">25%</p>
                  <p className="text-[10px] uppercase tracking-wider text-ink-500 mt-1">
                    {t('enmkit.stats.fraud')}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gradient-brand tabular-nums">95%</p>
                  <p className="text-[10px] uppercase tracking-wider text-ink-500 mt-1">
                    {t('enmkit.stats.ai')}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gradient-brand tabular-nums">40%</p>
                  <p className="text-[10px] uppercase tracking-wider text-ink-500 mt-1">
                    {t('enmkit.stats.savings')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-gradient-brand blur-2xl opacity-50" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-green-300/40 blur-3xl" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <span className="chip mb-5">{t('enmkit.eyebrow')}</span>
          <h2 className="text-fluid-4xl font-bold leading-[1.05] text-ink-900">
            <span className="block">{t('enmkit.title')}</span>
            <span className="block text-gradient-brand mt-1">{t('enmkit.tagline')}</span>
          </h2>
          <p className="mt-5 text-fluid-lg text-ink-600 leading-relaxed">
            {t('enmkit.description')}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.key}
                className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-4 transition-all hover:border-brand-blue-200 hover:shadow-soft"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <f.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink-900">
                    {t(`enmkit.features.${f.key}.title`)}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-600 leading-snug">
                    {t(`enmkit.features.${f.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <ButtonLink
              to="/enmkit"
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('common.discover')}
            </ButtonLink>
            <ButtonLink to="/installation-video" variant="outline" size="md">
              {t('nav.video')}
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EnmkitTeaser;
