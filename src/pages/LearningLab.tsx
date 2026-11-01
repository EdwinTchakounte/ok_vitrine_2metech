import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  Briefcase,
  ChevronRight,
  Cpu,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  School,
  ShieldAlert,
  Smartphone,
  Users,
  Wrench,
  Zap,
  Check,
  CircleDashed,
  Building2,
  Microscope,
  Maximize2,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import ApkDownload from '../components/App/ApkDownload';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';
import BenchDiagram from '../components/LearningLab/BenchDiagram';
import { contactWithSubject } from '../lib/links';
import { cn } from '../lib/cn';

/** Contact address given in the Learning Lab partnership proposal. */
const LAB_EMAIL = 'contact@2metechsarl.org';

/** Fiche illustrée du banc (WebP pleine résolution et version allégée pour l'affichage). */
const BENCH_SHEET = '/images/banc/banc-essai-enmkit.webp';
const BENCH_SHEET_SMALL = '/images/banc/banc-essai-enmkit-960.webp';

const FACTS = ['size', 'lines', 'sms', 'tp'] as const;

const WHY = [
  { key: 'local', icon: MapPin },
  { key: 'offline', icon: MessageSquare },
  { key: 'field', icon: Building2 },
  { key: 'students', icon: GraduationCap },
] as const;

/** Same order as the numbered markers in `BenchDiagram`. */
const BENCH_PARTS = ['emitter', 'meter', 'receiver', 'panel', 'loads', 'cable'] as const;

const TPS = ['tp1', 'tp2', 'tp3', 'tp4', 'tp5', 'tp6', 'tp7'] as const;

const SKILLS = [
  { key: 'technical', icon: Zap },
  { key: 'digital', icon: Cpu },
  { key: 'green', icon: Leaf },
  { key: 'employ', icon: Briefcase },
] as const;

const AUDIENCES = [
  { key: 'tvet', icon: Wrench },
  { key: 'stem', icon: School },
  { key: 'girls', icon: Users },
  { key: 'univ', icon: Microscope },
  { key: 'trainers', icon: GraduationCap },
  { key: 'techs', icon: Briefcase },
  { key: 'ngo', icon: HeartHandshake },
] as const;

const MODELS = ['a', 'b', 'c', 'd', 'e', 'f'] as const;
const PRINCIPLE = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'] as const;
const STEPS = ['s1', 's2', 's3', 's4', 's5', 's6'] as const;
const INDICATORS = [
  'sites',
  'trainers',
  'learners',
  'hours',
  'tps',
  'girls',
  'gain',
  'projects',
  'usage',
  'satisfaction',
  'replication',
] as const;

const BUDGET_LINES = [
  'benches',
  'commissioning',
  'training',
  'logistics',
  'maintenance',
  'evaluation',
  'local',
] as const;

const SDGS = [
  { key: 'sdg4', n: 4, primary: true },
  { key: 'sdg7', n: 7, primary: true },
  { key: 'sdg5', n: 5, primary: false },
  { key: 'sdg8', n: 8, primary: false },
  { key: 'sdg12', n: 12, primary: false },
  { key: 'sdg13', n: 13, primary: false },
] as const;

const fadeUp = (i = 0, step = 0.05) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay: i * step },
});

const LearningLab: React.FC = () => {
  const { t } = useTranslation();
  const contactLink = contactWithSubject(t('lab.contactSubject'));

  return (
    <PageTransition>
      {/* ---------- Hero ---------- */}
      <PageHero
        eyebrow={t('lab.eyebrow')}
        title={
          <>
            {t('lab.title')}{' '}
            <span className="text-gradient-brand-soft">{t('lab.titleAccent')}</span>
          </>
        }
        subtitle={t('lab.subtitle')}
        aside={
          <dl className="mx-auto grid w-full max-w-sm grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {FACTS.map((f) => (
              <div key={f} className="bg-invert/90 px-5 py-6 backdrop-blur-sm">
                <dt className="sr-only">{t(`lab.facts.${f}.label`)}</dt>
                <dd>
                  <span className="block font-display text-fluid-2xl font-bold leading-none tracking-tighter text-white">
                    {t(`lab.facts.${f}.value`)}
                  </span>
                  <span className="mt-2 block text-[12.5px] text-white/60">
                    {t(`lab.facts.${f}.label`)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        }
      >
        <ButtonLink
          to={contactLink}
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('lab.ctaPartner')}
        </ButtonLink>
        <a href="#tp" className="btn-glass btn-lg no-tap">
          <span>{t('lab.ctaTp')}</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </PageHero>

      {/* ---------- Why ---------- */}
      <Section size="sm" className="bg-canvas">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <motion.li key={w.key} {...fadeUp(i, 0.07)} className="bg-surface p-6">
              <span className="icon-tile-green h-10 w-10">
                <w.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-fg">{t(`lab.why.${w.key}.title`)}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`lab.why.${w.key}.text`)}
              </p>
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* ---------- The bench ---------- */}
      <Section className="bg-surface-sunken">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />
        <SectionHeader
          eyebrow={t('lab.bench.eyebrow')}
          title={
            <>
              {t('lab.bench.title')}{' '}
              <span className="text-gradient-brand">{t('lab.bench.titleAccent')}</span>
            </>
          }
          subtitle={t('lab.bench.subtitle')}
        />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div {...fadeUp()} className="lg:col-span-6">
            <BenchDiagram />
          </motion.div>

          <div className="lg:col-span-6">
            <ol className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
              {BENCH_PARTS.map((p, i) => (
                <motion.li key={p} {...fadeUp(i)} className="flex gap-4 p-4 sm:p-5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand-blue-600 font-mono text-[11px] font-bold text-white dark:bg-brand-blue-500">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-[15px] font-bold text-fg">
                        {t(`lab.bench.components.${p}.name`)}
                      </h3>
                      <span className="font-mono text-[11.5px] text-fg-subtle">
                        {t(`lab.bench.components.${p}.spec`)}
                      </span>
                    </div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">
                      {t(`lab.bench.components.${p}.role`)}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <p className="mt-5 flex gap-3 rounded-lg border border-amber-300/60 bg-amber-50 p-4 text-[13px] leading-relaxed text-amber-900 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-200">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{t('lab.bench.safety')}</span>
            </p>
          </div>
        </div>

        {/* Fiche illustrée du banc : version légère affichée, pleine résolution au clic. */}
        <motion.figure {...fadeUp()} className="mt-12 lg:mt-16">
          <a
            href={BENCH_SHEET}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-xl border border-line bg-white shadow-soft"
          >
            <img
              src={BENCH_SHEET_SMALL}
              srcSet={`${BENCH_SHEET_SMALL} 960w, ${BENCH_SHEET} 1536w`}
              sizes="(min-width: 1280px) 1200px, 100vw"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              alt={t('lab.bench.sheet.alt')}
              className="block h-auto w-full"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-invert/85 p-2 text-[12.5px] font-semibold text-white opacity-90 sm:px-3 sm:py-1.5 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">{t('lab.bench.sheet.open')}</span>
            </span>
          </a>
          <figcaption className="mt-3 text-center text-[13px] text-fg-subtle">
            <span className="font-semibold text-fg-muted">{t('lab.bench.sheet.title')}</span>
            {' · '}
            {t('lab.bench.sheet.caption')}
          </figcaption>
        </motion.figure>
      </Section>

      {/* ---------- Hands-on labs ---------- */}
      <Section id="tp" className="bg-canvas">
        <SectionHeader
          eyebrow={t('lab.tp.eyebrow')}
          title={
            <>
              {t('lab.tp.title')}{' '}
              <span className="text-gradient-brand">{t('lab.tp.titleAccent')}</span>
            </>
          }
          subtitle={t('lab.tp.subtitle')}
        />

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {TPS.map((tp, i) => (
            <motion.li
              key={tp}
              {...fadeUp(i)}
              className="group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-600 dark:text-brand-blue-300">
                TP {i + 1}
              </span>
              <h3 className="mt-2 text-base font-bold leading-snug text-fg">
                {t(`lab.tp.items.${tp}.title`)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`lab.tp.items.${tp}.activity`)}
              </p>
              <p className="mt-auto border-t border-line pt-3 text-[12.5px] leading-relaxed text-fg">
                <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                  {t('lab.tp.outcomeLabel')}
                </span>
                {t(`lab.tp.items.${tp}.outcome`)}
              </p>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.li>
          ))}

          {/* 8th cell: the app companion */}
          <motion.li {...fadeUp(7)} className="flex flex-col justify-between bg-surface-sunken p-6">
            <div>
              <span className="icon-tile h-10 w-10">
                <Smartphone className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">{t('lab.tp.appNote')}</p>
            </div>
            <Link
              to="/app"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue-700 hover:underline dark:text-brand-blue-300"
            >
              {t('nav.app')}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.li>
        </ol>

        <h3 className="mt-14 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-subtle">
          {t('lab.tp.skillsTitle')}
        </h3>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <motion.li key={s.key} {...fadeUp(i)} className="card flex items-start gap-3.5 p-5">
              <span className="icon-tile-green h-9 w-9 shrink-0">
                <s.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-fg">{t(`lab.tp.skills.${s.key}.title`)}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-fg-muted">
                  {t(`lab.tp.skills.${s.key}.text`)}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] text-fg-subtle">
          {t('lab.tp.outcomesNote')}
        </p>

        {/* App du banc : analyse IA, assistant tuteur des TP, quiz */}
        <div id="app-banc" className="mx-auto mt-12 max-w-4xl scroll-mt-28">
          <ApkDownload app="banc" />
        </div>
      </Section>

      {/* ---------- Audiences ---------- */}
      <Section className="bg-surface-sunken">
        <SectionHeader
          eyebrow={t('lab.audiences.eyebrow')}
          title={t('lab.audiences.title')}
          subtitle={t('lab.audiences.subtitle')}
        />
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <motion.li key={a.key} {...fadeUp(i)} className="bg-surface p-6">
              <span className="icon-tile h-10 w-10">
                <a.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-fg">
                {t(`lab.audiences.items.${a.key}.title`)}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`lab.audiences.items.${a.key}.text`)}
              </p>
            </motion.li>
          ))}
          <motion.li
            {...fadeUp(7)}
            className="relative isolate flex flex-col justify-between overflow-hidden bg-invert p-6 text-white"
          >
            <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
            <p className="text-[15px] font-semibold leading-snug">{t('lab.audiences.other')}</p>
            <Link
              to={contactLink}
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-green-300 hover:underline"
            >
              {t('lab.audiences.otherCta')}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.li>
        </ul>
      </Section>

      {/* ---------- Partnership models ---------- */}
      <Section className="bg-canvas">
        <SectionHeader
          eyebrow={t('lab.models.eyebrow')}
          title={
            <>
              {t('lab.models.title')}{' '}
              <span className="text-gradient-brand">{t('lab.models.titleAccent')}</span>
            </>
          }
          subtitle={t('lab.models.subtitle')}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((m, i) => (
            <motion.article key={m} {...fadeUp(i)} className="card card-hover flex flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-invert font-display text-lg font-bold text-white dark:bg-brand-blue-500/15 dark:text-brand-blue-200">
                  {m.toUpperCase()}
                </span>
                <h3 className="text-base font-bold leading-snug text-fg">
                  {t(`lab.models.items.${m}.name`)}
                </h3>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-fg">{t(`lab.models.items.${m}.goal`)}</p>
              <dl className="mt-4 space-y-2.5 border-t border-line pt-4 text-[13px] leading-relaxed">
                {(['partner', 'enmkit', 'result'] as const).map((row) => (
                  <div key={row} className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                      {t(`lab.models.${row}Label`)}
                    </dt>
                    <dd className={cn(row === 'result' ? 'font-medium text-fg' : 'text-fg-muted')}>
                      {t(`lab.models.items.${m}.${row}`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="chip-neutral">{t('lab.models.principleLabel')}</span>
          <ol className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 text-[13.5px] font-semibold text-fg">
            {PRINCIPLE.map((p, i) => (
              <li key={p} className="inline-flex items-center gap-1.5">
                <span className="rounded-md border border-line bg-surface px-3 py-1.5">
                  {t(`lab.models.principle.${p}`)}
                </span>
                {i < PRINCIPLE.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-brand-green-500" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ---------- Pilot & indicators ---------- */}
      <Section className="bg-surface-sunken">
        <div className="absolute inset-0 -z-10 bg-wash" aria-hidden="true" />
        <SectionHeader
          eyebrow={t('lab.pilot.eyebrow')}
          title={
            <>
              {t('lab.pilot.title')}{' '}
              <span className="text-gradient-brand">{t('lab.pilot.titleAccent')}</span>
            </>
          }
          subtitle={t('lab.pilot.subtitle')}
        />

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.li key={s} {...fadeUp(i, 0.07)} className="flex flex-col bg-surface p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface-sunken text-[13px] font-bold tabular-nums text-brand-blue-600 dark:text-brand-blue-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-fg">{t(`lab.pilot.steps.${s}.title`)}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`lab.pilot.steps.${s}.text`)}
              </p>
              <p className="mt-auto pt-4 text-[12.5px] text-fg">
                <span className="mr-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                  {t('lab.pilot.deliverableLabel')}
                </span>
                <span className="inline-flex items-center gap-1 font-medium">
                  <Check className="h-3.5 w-3.5 text-brand-green-500" strokeWidth={2.5} />
                  {t(`lab.pilot.steps.${s}.deliverable`)}
                </span>
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-6 flex gap-3 rounded-lg border border-dashed border-line-strong bg-surface p-4 text-[13.5px] leading-relaxed text-fg-muted">
          <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle" />
          <p>
            <span className="block font-semibold text-fg">{t('lab.pilot.tbdLabel')}</span>
            {t('lab.pilot.tbd')}
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-subtle">
            {t('lab.pilot.indicatorsTitle')}
          </h3>
          <ul className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-2">
            {INDICATORS.map((k) => (
              <li
                key={k}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 text-[13px] font-medium text-fg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-rule" aria-hidden="true" />
                {t(`lab.pilot.indicators.${k}`)}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[13px] text-fg-subtle">
            {t('lab.pilot.indicatorsNote')}
          </p>
        </div>
      </Section>

      {/* ---------- Budget ---------- */}
      <Section className="bg-canvas">
        <SectionHeader
          eyebrow={t('lab.budget.eyebrow')}
          title={
            <>
              {t('lab.budget.title')}{' '}
              <span className="text-gradient-brand">{t('lab.budget.titleAccent')}</span>
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            {...fadeUp()}
            className="relative isolate overflow-hidden rounded-xl border border-line bg-invert p-7 text-white shadow-elevated sm:p-8 lg:col-span-5"
          >
            <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
            <div className="absolute inset-0 -z-10 bg-dots-dark opacity-40" aria-hidden="true" />
            <div className="hairline-brand absolute inset-x-0 top-0" aria-hidden="true" />

            <span className="chip-dark">{t('lab.budget.unitLabel')}</span>
            <p className="mt-5 font-display text-fluid-4xl font-bold leading-none tracking-tighter tabular-nums">
              {t('lab.budget.price')}
            </p>
            <p className="mt-2 text-[14px] text-white/75">{t('lab.budget.perBench')}</p>
            <p className="mt-1 font-mono text-[12px] text-white/50">{t('lab.budget.euro')}</p>

            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-[13.5px] leading-relaxed text-white/75">
              {(['p1', 'p2', 'p3'] as const).map((p) => (
                <li key={p} className="flex gap-2.5">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-green-400" strokeWidth={2.5} />
                  {t(`lab.budget.points.${p}`)}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink
                to={contactLink}
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                {t('lab.budget.quote')}
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div {...fadeUp(1)} className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <table className="w-full text-left text-[13.5px]">
                <thead className="bg-surface-sunken text-[10.5px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                  <tr>
                    <th scope="col" className="px-5 py-3">
                      {t('lab.budget.itemLabel')}
                    </th>
                    <th scope="col" className="px-5 py-3">
                      {t('lab.budget.basisLabel')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {BUDGET_LINES.map((l, i) => (
                    <tr key={l}>
                      <th scope="row" className="px-5 py-3.5 font-semibold text-fg">
                        {t(`lab.budget.lines.${l}.name`)}
                      </th>
                      <td
                        className={cn(
                          'px-5 py-3.5',
                          i === 0
                            ? 'font-semibold text-brand-blue-700 dark:text-brand-blue-300'
                            : 'text-fg-muted',
                        )}
                      >
                        {t(`lab.budget.lines.${l}.basis`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------- SDGs ---------- */}
      <Section className="bg-surface-sunken">
        <SectionHeader
          eyebrow={t('lab.sdg.eyebrow')}
          title={
            <>
              {t('lab.sdg.title')}{' '}
              <span className="text-gradient-brand">{t('lab.sdg.titleAccent')}</span>
            </>
          }
        />
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SDGS.map((g, i) => (
            <motion.li key={g.key} {...fadeUp(i)} className="flex gap-4 bg-surface p-6">
              <span
                className={cn(
                  'flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border font-display leading-none',
                  g.primary
                    ? 'border-transparent bg-brand-blue-600 text-white dark:bg-brand-blue-500'
                    : 'border-line bg-surface-sunken text-fg',
                )}
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] opacity-75">
                  {t('lab.sdg.sdgLabel')}
                </span>
                <span className="mt-1 text-xl font-bold tabular-nums">{g.n}</span>
              </span>
              <div className="min-w-0">
                <span className={g.primary ? 'chip' : 'chip-neutral'}>
                  {g.primary ? t('lab.sdg.primary') : t('lab.sdg.secondary')}
                </span>
                <h3 className="mt-2 text-[15px] font-bold leading-snug text-fg">
                  {t(`lab.sdg.items.${g.key}.name`)}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-fg-muted">
                  {t(`lab.sdg.items.${g.key}.text`)}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="bg-invert text-white">
        <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-dots-dark opacity-40" aria-hidden="true" />

        <div className="mx-auto max-w-3xl text-center">
          <span className="chip-dark">
            <FlaskConical className="h-3 w-3 text-brand-green-400" />
            {t('lab.cta.eyebrow')}
          </span>
          <h2 className="mt-5 text-fluid-4xl font-bold leading-[1.06] tracking-tighter text-white">
            {t('lab.cta.title')}{' '}
            <span className="text-gradient-brand-soft">{t('lab.cta.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-fluid-base leading-relaxed text-white/70">
            {t('lab.cta.subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              to={contactLink}
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('lab.cta.button')}
            </ButtonLink>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/70">
            <a
              href={`mailto:${LAB_EMAIL}?subject=${encodeURIComponent(t('lab.contactSubject'))}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand-blue-300" />
              {LAB_EMAIL}
            </a>
            <a href="tel:+237696372245" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-brand-green-400" />
              {t('contact.phone')}
            </a>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 text-left sm:grid-cols-3">
            {(['funders', 'schools', 'univ'] as const).map((a) => (
              <li key={a} className="bg-invert/90 px-4 py-4 text-[13px] leading-relaxed text-white/75">
                {t(`lab.cta.audiences.${a}`)}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageTransition>
  );
};

export default LearningLab;
