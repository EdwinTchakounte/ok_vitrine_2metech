import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  AlertTriangle,
  TrendingUp,
  Award,
  Lightbulb,
  GraduationCap,
  Home as HomeIcon,
  Presentation,
  BookOpen,
  ListChecks,
  Leaf,
  BookA,
  GitCompare,
  Users,
  Clock,
  BarChart3,
  Smile,
  LogIn,
  MessageCircleQuestion,
  Bot,
  Lock,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';
import DataFlowDiagram from '../components/Platform/DataFlowDiagram';
import { HAS_PLATFORM_ACCESS, PLATFORM_LINKS, contactWithSubject } from '../lib/links';
import { cn } from '../lib/cn';

const GRADES = [
  { g: 'A', cls: 'bg-brand-green-500 text-white' },
  { g: 'B', cls: 'bg-brand-green-300 text-brand-green-950' },
  { g: 'C', cls: 'bg-amber-300 text-amber-950' },
  { g: 'D', cls: 'bg-orange-400 text-orange-950' },
  { g: 'E', cls: 'bg-red-500 text-white' },
] as const;

const AI_ITEMS = [
  { key: 'quality', icon: ShieldCheck },
  { key: 'profile', icon: Activity },
  { key: 'anomalies', icon: AlertTriangle },
  { key: 'forecast', icon: TrendingUp },
  { key: 'score', icon: Award },
  { key: 'recos', icon: Lightbulb },
] as const;

const AUDIENCES = [
  { key: 'learner', icon: GraduationCap },
  { key: 'owner', icon: HomeIcon },
  { key: 'trainer', icon: Presentation },
] as const;

const LEARN_ITEMS = [
  { key: 'tp', icon: BookOpen },
  { key: 'quiz', icon: ListChecks },
  { key: 'tips', icon: Leaf },
  { key: 'glossary', icon: BookA },
  { key: 'compare', icon: GitCompare },
] as const;

const KPIS = [
  { key: 'learners', icon: Users },
  { key: 'girls', icon: GraduationCap },
  { key: 'hours', icon: Clock },
  { key: 'gain', icon: BarChart3 },
  { key: 'satisfaction', icon: Smile },
] as const;

const fadeUp = (i = 0, step = 0.05) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay: i * step },
});

const Platform: React.FC = () => {
  const { t } = useTranslation();
  const accessContact = contactWithSubject(t('platform.accessBlock.subject'));

  return (
    <PageTransition>
      {/* ---------- Hero ---------- */}
      <PageHero
        eyebrow={t('platform.eyebrow')}
        title={
          <>
            {t('platform.title')}{' '}
            <span className="text-gradient-brand-soft">{t('platform.titleAccent')}</span>
          </>
        }
        subtitle={t('platform.subtitle')}
        aside={
          <div className="mx-auto w-full max-w-sm rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
              {t('platform.grade.title')}
            </p>
            <ol className="mt-4 grid grid-cols-5 gap-1.5" aria-label={t('platform.grade.title')}>
              {GRADES.map((g) => (
                <li
                  key={g.g}
                  className={cn(
                    'flex h-12 items-center justify-center rounded-md font-display text-xl font-bold',
                    g.cls,
                  )}
                >
                  {g.g}
                </li>
              ))}
            </ol>
            <div className="mt-2 flex justify-between text-[11px] text-white/50">
              <span>{t('platform.grade.best')}</span>
              <span>{t('platform.grade.worst')}</span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/70">{t('platform.grade.text')}</p>
          </div>
        }
      >
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('platform.ctaContact')}
        </ButtonLink>
        {HAS_PLATFORM_ACCESS ? (
          <ButtonLink
            to={PLATFORM_LINKS.dashboard}
            external
            variant="glass"
            size="lg"
            iconLeft={<LogIn className="h-4 w-4" />}
          >
            {t('platform.access')}
          </ButtonLink>
        ) : (
          <ButtonLink to="/learning-lab" variant="glass" size="lg">
            {t('nav.learningLab')}
          </ButtonLink>
        )}
      </PageHero>

      {/* ---------- Flow ---------- */}
      <Section className="overflow-hidden bg-canvas">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />
        <SectionHeader
          eyebrow={t('platform.flow.eyebrow')}
          title={
            <>
              {t('platform.flow.title')}{' '}
              <span className="text-gradient-brand">{t('platform.flow.titleAccent')}</span>
            </>
          }
          subtitle={t('platform.flow.subtitle')}
        />
        <motion.div {...fadeUp()}>
          <DataFlowDiagram />
        </motion.div>
      </Section>

      {/* ---------- AI ---------- */}
      <Section className="bg-surface-sunken">
        <SectionHeader
          eyebrow={t('platform.ai.eyebrow')}
          title={
            <>
              {t('platform.ai.title')}{' '}
              <span className="text-gradient-brand">{t('platform.ai.titleAccent')}</span>
            </>
          }
          subtitle={t('platform.ai.subtitle')}
        />
        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {AI_ITEMS.map((f, i) => (
            <motion.li
              key={f.key}
              {...fadeUp(i)}
              className="group relative bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover lg:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="icon-tile h-11 w-11">
                  <f.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-fg-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-fg">{t(`platform.ai.items.${f.key}.title`)}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`platform.ai.items.${f.key}.text`)}
              </p>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-rule transition-transform duration-500 ease-elegant group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.li>
          ))}
        </ol>
        <p className="mt-5 text-center text-[12.5px] text-fg-subtle">{t('platform.ai.tariffNote')}</p>
      </Section>

      {/* ---------- Assistant ---------- */}
      <Section className="bg-canvas">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeader
              align="left"
              className="!mb-8"
              eyebrow={t('platform.assistant.eyebrow')}
              title={
                <>
                  {t('platform.assistant.title')}{' '}
                  <span className="text-gradient-brand">{t('platform.assistant.titleAccent')}</span>
                </>
              }
              subtitle={t('platform.assistant.subtitle')}
            />
            <ul className="space-y-4">
              {AUDIENCES.map((a, i) => (
                <motion.li key={a.key} {...fadeUp(i)} className="flex items-start gap-3.5">
                  <span className="icon-tile h-9 w-9 shrink-0">
                    <a.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg">
                      {t(`platform.assistant.audiences.${a.key}.title`)}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-fg-muted">
                      {t(`platform.assistant.audiences.${a.key}.text`)}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div {...fadeUp(1)} className="lg:col-span-6">
            <div className="card overflow-hidden shadow-elevated">
              <div className="flex items-center gap-3 border-b border-line bg-surface-sunken px-5 py-3.5">
                <span className="icon-tile-green h-8 w-8">
                  <Bot className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="text-sm font-bold text-fg">{t('platform.assistant.eyebrow')}</span>
                <span className="ml-auto chip-neutral">{t('platform.assistant.examplesLabel')}</span>
              </div>
              <ul className="space-y-3 p-5">
                {(['q1', 'q2', 'q3'] as const).map((q, i) => (
                  <li
                    key={q}
                    className={cn(
                      'flex max-w-[88%] items-start gap-2.5 rounded-lg border border-line px-4 py-3 text-[13.5px] leading-relaxed text-fg',
                      i % 2 === 1 ? 'ml-auto bg-brand-blue-50 dark:bg-brand-blue-500/10' : 'bg-surface',
                    )}
                  >
                    <MessageCircleQuestion className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle" />
                    {t(`platform.assistant.examples.${q}`)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------- Education ---------- */}
      <Section className="bg-surface-sunken">
        <div className="absolute inset-0 -z-10 bg-wash" aria-hidden="true" />
        <SectionHeader
          eyebrow={t('platform.education.eyebrow')}
          title={
            <>
              {t('platform.education.title')}{' '}
              <span className="text-gradient-brand">{t('platform.education.titleAccent')}</span>
            </>
          }
          subtitle={t('platform.education.subtitle')}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div {...fadeUp()} className="card p-6 sm:p-7">
            <span className="chip-green">{t('platform.education.app.tag')}</span>
            <h3 className="mt-3 text-fluid-xl font-bold tracking-tight text-fg">
              {t('platform.education.app.title')}
            </h3>
            <ul className="mt-5 divide-y divide-line border-t border-line">
              {LEARN_ITEMS.map((it) => (
                <li key={it.key} className="flex items-center gap-3 py-3 text-[14px] text-fg">
                  <it.icon className="h-4 w-4 shrink-0 text-brand-green-600 dark:text-brand-green-300" />
                  {t(`platform.education.app.items.${it.key}`)}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(1)} className="card p-6 sm:p-7">
            <span className="chip">{t('platform.education.trainer.tag')}</span>
            <h3 className="mt-3 text-fluid-xl font-bold tracking-tight text-fg">
              {t('platform.education.trainer.title')}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">
              {t('platform.education.trainer.text')}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
              {KPIS.map((k) => (
                <li key={k.key} className="flex flex-col gap-2 bg-surface p-4 last:col-span-2">
                  <k.icon className="h-4 w-4 text-brand-blue-600 dark:text-brand-blue-300" />
                  <span className="text-[12.5px] font-semibold leading-snug text-fg">
                    {t(`platform.education.trainer.kpis.${k.key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <ButtonLink
            to="/learning-lab"
            variant="outline"
            size="md"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            {t('platform.education.labLink')}
          </ButtonLink>
        </div>
      </Section>

      {/* ---------- Access ---------- */}
      <Section size="sm" className="bg-canvas">
        <motion.div
          {...fadeUp()}
          className="mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-7"
        >
          <span className="icon-tile h-12 w-12 shrink-0">
            {HAS_PLATFORM_ACCESS ? <LogIn className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-fg">
              {HAS_PLATFORM_ACCESS ? t('platform.accessBlock.title') : t('platform.accessBlock.soonTitle')}
            </h2>
            <p className="mt-1 text-[13.5px] leading-relaxed text-fg-muted">
              {HAS_PLATFORM_ACCESS ? t('platform.accessBlock.text') : t('platform.accessBlock.soon')}
            </p>
          </div>
          {HAS_PLATFORM_ACCESS ? (
            <ButtonLink
              to={PLATFORM_LINKS.dashboard}
              external
              variant="primary"
              size="md"
              iconLeft={<LogIn className="h-4 w-4" />}
            >
              {t('platform.accessBlock.button')}
            </ButtonLink>
          ) : (
            <ButtonLink
              to={accessContact}
              variant="outline"
              size="md"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('platform.accessBlock.soonButton')}
            </ButtonLink>
          )}
        </motion.div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="bg-invert text-white">
        <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-dots-dark opacity-40" aria-hidden="true" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-fluid-3xl font-bold tracking-tighter text-white">
            {t('platform.cta.title')}{' '}
            <span className="text-gradient-brand-soft">{t('platform.cta.titleAccent')}</span>
          </h2>
          <p className="mt-4 text-fluid-base leading-relaxed text-white/70">{t('platform.cta.subtitle')}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              to="/contact"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {t('platform.cta.button')}
            </ButtonLink>
            <ButtonLink to="/app" variant="glass" size="lg">
              {t('nav.app')}
            </ButtonLink>
          </div>
          <p className="mt-6 text-[13px] text-white/50">
            <Link to="/learning-lab" className="underline-offset-4 hover:text-white hover:underline">
              {t('nav.learningLab')}
            </Link>
            {' · '}
            <Link to="/enmkit" className="underline-offset-4 hover:text-white hover:underline">
              {t('nav.enmkit')}
            </Link>
          </p>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Platform;
