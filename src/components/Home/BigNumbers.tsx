import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, Leaf, HeadphonesIcon, Globe2 } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import AnimatedCounter from '../ui/AnimatedCounter';

const BigNumbers: React.FC = () => {
  const { t } = useTranslation();

  const numbers = [
    { key: 'kwh', icon: Zap, value: 28000, suffix: '+', accent: 'from-brand-blue-400 to-brand-blue-600' },
    { key: 'co2', icon: Leaf, value: 14200, suffix: '', accent: 'from-emerald-400 to-brand-green-500' },
    { key: 'hours', icon: HeadphonesIcon, value: 8760, suffix: '', accent: 'from-brand-green-400 to-emerald-500' },
    { key: 'countries', icon: Globe2, value: 5, suffix: '', accent: 'from-brand-blue-500 to-brand-blue-700' },
  ];

  return (
    <Section className="relative bg-ink-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-95" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40 mask-fade-y" aria-hidden="true" />

      {/* orbital decorations */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/20 blur-[140px] animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-green-500/20 blur-[140px] animate-blob" />

      <SectionHeader
        variant="dark"
        eyebrow={t('bigNumbers.eyebrow')}
        title={
          <>
            {t('bigNumbers.title')}{' '}
            <span className="bg-gradient-to-r from-brand-green-300 via-brand-green-400 to-brand-blue-300 bg-clip-text text-transparent">
              {t('bigNumbers.titleAccent')}
            </span>
          </>
        }
        subtitle={t('bigNumbers.subtitle')}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {numbers.map((n, i) => (
          <motion.div
            key={n.key}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-8 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            {/* gradient stripe */}
            <div
              className={`absolute -top-px left-6 right-6 h-px bg-gradient-to-r ${n.accent} opacity-60`}
              aria-hidden="true"
            />

            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${n.accent} text-white shadow-glow`}
            >
              <n.icon className="h-5 w-5" />
            </div>

            <p className="mt-6 text-fluid-5xl font-bold tabular-nums leading-none text-white">
              <AnimatedCounter to={n.value} suffix={n.suffix} />
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/60">
              {t(`bigNumbers.${n.key}.label`)}
            </p>

            {/* hover halo */}
            <div
              className={`absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${n.accent} blur-3xl`}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default BigNumbers;
