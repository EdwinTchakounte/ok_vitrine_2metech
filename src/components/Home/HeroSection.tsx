import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Zap,
  Activity,
  Wifi,
  Gauge,
  TrendingDown,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ButtonLink } from '../ui/Button';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  // Mouse parallax (desktop only — controlled by motion values)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const tx1 = useTransform(sx, (v) => v * 18);
  const ty1 = useTransform(sy, (v) => v * 18);
  const tx2 = useTransform(sx, (v) => v * -28);
  const ty2 = useTransform(sy, (v) => v * -28);
  const tx3 = useTransform(sx, (v) => v * 12);
  const ty3 = useTransform(sy, (v) => v * 12);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const el = ref.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  // Animated dashboard chart numbers
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);
  const liveValue = 2.4 + Math.sin(tick / 2) * 0.4;

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950"
    >
      {/* Layered background */}
      <div className="absolute inset-0 -z-10">
        {/* Base photo, very subtle */}
        <img
          src="/images/image2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="eager"
        />
        {/* Brand mesh */}
        <div className="absolute inset-0 bg-mesh-dark opacity-95" />
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-dark opacity-50 mask-fade-y" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-ink-950" />
        {/* Top fade for header */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 to-transparent" />
      </div>

      {/* Floating orbs (mouse parallax) */}
      <motion.div
        style={{ x: tx1, y: ty1 }}
        className="pointer-events-none absolute -top-16 -right-24 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/30 blur-[140px]"
      />
      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="pointer-events-none absolute -bottom-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand-green-500/25 blur-[140px]"
      />
      <motion.div
        style={{ x: tx3, y: ty3 }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[18rem] w-[18rem] rounded-full bg-emerald-400/20 blur-[100px]"
      />

      <div className="container mx-auto relative z-10 pt-[var(--header-h)] pb-20 sm:pb-16">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[calc(100svh-var(--header-h)-5rem)] sm:min-h-[calc(100svh-var(--header-h)-4rem)]">
          {/* LEFT — Text */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="chip-dark"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-brand-green-400 animate-ping opacity-75" />
                <span className="relative rounded-full bg-brand-green-400 h-1.5 w-1.5" />
              </span>
              {t('hero.eyebrow')}
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
              }}
              className="mt-7 text-[2.75rem] sm:text-fluid-6xl lg:text-fluid-7xl xl:text-[5.5rem] 2xl:text-[6.5rem] font-bold leading-[0.98] tracking-[-0.02em] text-white"
            >
              {t('hero.title')
                .split(' ')
                .map((w, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: '100%', opacity: 0 },
                      show: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="inline-block mr-[0.18em] [overflow:hidden]"
                  >
                    {w}
                  </motion.span>
                ))}
              <span className="block mt-1">
                {t('hero.titleAccent')
                  .split(' ')
                  .map((w, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { y: '100%', opacity: 0 },
                        show: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                        },
                      }}
                      className="inline-block mr-[0.18em] bg-gradient-to-r from-brand-green-300 via-brand-green-400 to-brand-blue-300 bg-clip-text text-transparent bg-200 animate-gradient-x"
                    >
                      {w}
                    </motion.span>
                  ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-7 max-w-xl text-fluid-lg text-white/75 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink
                to="/enmkit"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                {t('hero.cta')}
              </ButtonLink>
              <ButtonLink
                to="/awards"
                variant="glass"
                size="lg"
                iconLeft={<Award className="h-5 w-5" />}
              >
                {t('hero.ctaSecondary')}
              </ButtonLink>
            </motion.div>

            {/* Inline stats — glass cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl"
            >
              {[
                { value: t('hero.stats.homesValue'), label: t('hero.stats.homes') },
                { value: t('hero.stats.reductionValue'), label: t('hero.stats.reduction') },
                { value: t('hero.stats.installValue'), label: t('hero.stats.install') },
                { value: t('hero.stats.warrantyValue'), label: t('hero.stats.warranty') },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 sm:px-4 sm:py-3.5 backdrop-blur-md transition-colors hover:bg-white/[0.08] hover:border-white/20"
                >
                  <p className="text-xl sm:text-2xl font-bold text-white tabular-nums leading-none">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Dashboard mockup */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative h-[34rem] lg:h-full hidden lg:block">
            {/* Glow plate behind */}
            <div
              className="absolute inset-x-8 inset-y-12 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl"
              aria-hidden="true"
            />

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: tx3, y: ty3 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md"
            >
              <DashboardCard liveValue={liveValue} t={t} />
            </motion.div>

            {/* Floating mini cards */}
            <motion.div
              initial={{ opacity: 0, x: -24, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: tx1, y: ty1 }}
              className="absolute -left-4 top-12 hidden xl:block"
            >
              <FloatingChip icon={Gauge} label={t('hero.mockup.ai')} accent="green" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: tx2, y: ty2 }}
              className="absolute -right-2 -bottom-4 hidden xl:block"
            >
              <FloatingChip icon={ShieldCheck} label={t('hero.mockup.connected')} accent="blue" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip — awards */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-ink-950/60 backdrop-blur-md">
        <div className="container mx-auto flex items-center gap-6 py-3 overflow-hidden">
          <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 shrink-0">
            <Sparkles className="h-3 w-3 text-brand-green-400" />
            {t('awardStrip.eyebrow')}
          </span>
          <div className="relative flex-1 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee gap-10 lg:gap-14">
              {[...Array(2)].flatMap((_, k) =>
                ['POESAM 2024', 'Orange Women’s Prize', 'YALI Power Challenge', 'Startupper TotalEnergies'].map(
                  (label, i) => (
                    <div
                      key={`${k}-${i}`}
                      className="inline-flex items-center gap-2 text-sm text-white/70"
                    >
                      <Award className="h-3.5 w-3.5 text-brand-green-400" />
                      <span className="font-medium">{label}</span>
                    </div>
                  ),
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Dashboard mockup ---------- */

interface DashboardCardProps {
  liveValue: number;
  t: (k: string) => string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ liveValue, t }) => {
  const bars = [42, 58, 36, 71, 48, 63, 78, 52, 66, 80, 58, 70];
  return (
    <div className="relative rounded-3xl border border-white/15 bg-ink-900/80 p-5 backdrop-blur-2xl shadow-floating">
      {/* Outer accent ring */}
      <div
        className="absolute -inset-px rounded-3xl opacity-60 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(24,118,188,0.6), rgba(132,196,80,0.4))',
          filter: 'blur(2px)',
        }}
      />

      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              {t('hero.mockup.kit')}
            </p>
            <p className="text-sm font-semibold text-white leading-tight">
              EnMKit · Bafoussam
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
            <span className="relative rounded-full bg-emerald-400 h-1.5 w-1.5" />
          </span>
          {t('hero.mockup.live')}
        </span>
      </div>

      {/* Big number */}
      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
            {t('hero.mockup.consumption')} · {t('hero.mockup.today')}
          </p>
          <p className="mt-1 text-4xl font-bold text-white tabular-nums leading-none">
            {liveValue.toFixed(1)} <span className="text-lg text-white/60 font-medium">kWh</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
          <TrendingDown className="h-3 w-3" />
          −14%
        </span>
      </div>

      {/* Chart bars */}
      <div className="mt-5 flex items-end gap-1.5 h-24">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{
              duration: 0.8,
              delay: 0.6 + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue-500/30 to-brand-green-400/80"
          />
        ))}
      </div>

      {/* Status row */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <StatusPill icon={Wifi} label={t('hero.mockup.connected')} value="100%" />
        <StatusPill icon={Activity} label={t('hero.mockup.anomaly')} value="0" />
        <StatusPill icon={Gauge} label={t('hero.mockup.ai')} value="ON" />
      </div>

      {/* Footer: savings */}
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/50">
            {t('hero.mockup.savings')}
          </p>
          <p className="text-sm font-semibold text-white">FCFA 18 400</p>
        </div>
        <div className="flex items-center gap-1 text-emerald-300 text-sm font-semibold">
          <TrendingDown className="h-4 w-4" />
          {t('hero.mockup.forecast')}
        </div>
      </div>
    </div>
  );
};

const StatusPill: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
}> = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/55">
      <Icon className="h-3 w-3" />
      <span className="truncate">{label}</span>
    </div>
    <p className="mt-1 text-xs font-bold text-white tabular-nums">{value}</p>
  </div>
);

const FloatingChip: React.FC<{
  icon: React.ElementType;
  label: string;
  accent: 'blue' | 'green';
}> = ({ icon: Icon, label, accent }) => (
  <div
    className={`inline-flex items-center gap-2 rounded-2xl border bg-ink-900/80 px-3 py-2 backdrop-blur-md shadow-floating ${
      accent === 'blue' ? 'border-brand-blue-400/40' : 'border-brand-green-400/40'
    }`}
  >
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${
        accent === 'blue' ? 'bg-brand-blue-500/20 text-brand-blue-300' : 'bg-brand-green-500/20 text-brand-green-300'
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
    </span>
    <span className="text-xs font-semibold text-white">{label}</span>
  </div>
);

export default HeroSection;
