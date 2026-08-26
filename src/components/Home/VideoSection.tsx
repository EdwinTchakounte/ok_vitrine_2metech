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
    <Section className="bg-invert text-white">
      <div className="absolute inset-0 -z-10 bg-wash-invert" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-50 mask-fade-y" aria-hidden="true" />

      <SectionHeader
        variant="dark"
        eyebrow={t('videoDemo.eyebrow')}
        title={
          <>
            {t('videoDemo.title')}{' '}
            <span className="text-gradient-brand-soft">{t('videoDemo.titleAccent')}</span>
          </>
        }
        subtitle={t('videoDemo.subtitle')}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-5xl"
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
          {/* Window chrome */}
          <div className="hidden items-center gap-3 border-b border-white/10 px-4 py-2.5 sm:flex">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
              EnMKit · demo
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/55">
              <Clock className="h-3 w-3" />
              {t('videoDemo.duration')}
            </span>
          </div>

          <div className="relative aspect-video bg-black">
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
                className="group no-tap relative h-full w-full overflow-hidden"
              >
                <img
                  src="/images/installation.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-invert/90 via-invert/25 to-invert/40" />

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-floating transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                    <Play className="h-6 w-6 translate-x-0.5 fill-brand-blue-600 text-brand-blue-600 sm:h-8 sm:w-8" />
                  </span>
                </span>

                <span className="absolute inset-x-3 bottom-3 flex items-center justify-between sm:inset-x-5 sm:bottom-4">
                  <span className="inline-flex items-center gap-2 rounded-sm bg-black/50 px-2.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-green-400 opacity-75" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-brand-green-400" />
                    </span>
                    EnMKit · {t('videoDemo.eyebrow')}
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-xs text-white/50">
          <Info className="h-3.5 w-3.5 text-brand-blue-300" />
          {t('videoDemo.badge')}
        </p>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <ButtonLink
          to="/contact"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('videoDemo.cta')}
        </ButtonLink>
      </div>
    </Section>
  );
};

export default VideoSection;
