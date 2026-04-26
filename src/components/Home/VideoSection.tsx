import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, ArrowRight, Info, Clock } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { ButtonLink } from '../ui/Button';

const VIDEO_ID = 'SXeX896I3aw';

const VideoSection: React.FC = () => {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);

  return (
    <Section className="relative bg-ink-950 text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-mesh-dark opacity-95" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40 mask-fade-y" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/25 blur-[140px] animate-blob" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-green-500/20 blur-[140px] animate-blob" aria-hidden="true" />

      <SectionHeader
        variant="dark"
        eyebrow={t('videoDemo.eyebrow')}
        title={
          <>
            {t('videoDemo.title')}{' '}
            <span className="bg-gradient-to-r from-brand-green-300 via-brand-green-400 to-brand-blue-300 bg-clip-text text-transparent">
              {t('videoDemo.titleAccent')}
            </span>
          </>
        }
        subtitle={t('videoDemo.subtitle')}
      />

      {/* Video frame */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Glow plate */}
        <div
          className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-brand opacity-25 blur-3xl"
          aria-hidden="true"
        />

        {/* Outer frame */}
        <div className="relative rounded-3xl border border-white/15 bg-ink-900/50 p-2 sm:p-3 backdrop-blur-md shadow-floating">
          {/* Top window bar (mac-like, subtle) */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 pt-1 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
              EnMKit · demo.mp4
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/60">
              <Clock className="h-3 w-3" />
              {t('videoDemo.duration')}
            </span>
          </div>

          {/* Player */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title={t('videoDemo.title')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={t('videoDemo.play')}
                className="group relative h-full w-full overflow-hidden no-tap"
              >
                {/* Poster image */}
                <img
                  src="/images/installation.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-ink-950/40" />

                {/* Play button */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="relative">
                    {/* glow */}
                    <span className="absolute inset-0 rounded-full bg-gradient-brand blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                    {/* outer pulsing ring */}
                    <span className="absolute -inset-3 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-500 animate-pulse-soft" />
                    {/* button */}
                    <span className="relative inline-flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-white shadow-floating transition-transform duration-500 group-hover:scale-110">
                      <Play className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 fill-brand-blue-600 text-brand-blue-600 translate-x-0.5" />
                    </span>
                  </span>
                </span>

                {/* Bottom overlay */}
                <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 rounded-full bg-brand-green-400 animate-ping opacity-75" />
                      <span className="relative rounded-full bg-brand-green-400 h-1.5 w-1.5" />
                    </span>
                    EnMKit · {t('videoDemo.eyebrow')}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                    <Clock className="h-3 w-3" />
                    {t('videoDemo.duration')}
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Info badge */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/55">
          <Info className="h-3.5 w-3.5 text-brand-blue-300" />
          {t('videoDemo.badge')}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex justify-center"
      >
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-5 w-5" />}
        >
          {t('videoDemo.cta')}
        </ButtonLink>
      </motion.div>
    </Section>
  );
};

export default VideoSection;
