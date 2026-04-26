import React from 'react';
import { useTranslation } from 'react-i18next';
import { Info, PlayCircle } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import PageTransition from '../components/ui/PageTransition';

const InstallationVideoCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('nav.video')}
        title={t('video.title')}
        subtitle={t('video.subtitle')}
      />

      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-4xl border border-ink-100 bg-white shadow-elevated p-3 sm:p-4">
            <div className="aspect-video rounded-3xl overflow-hidden bg-ink-950">
              <iframe
                src="https://www.youtube.com/embed/SXeX896I3aw"
                title={t('video.title')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-blue-200 bg-brand-blue-50/60 p-4">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-700" />
            <p className="text-sm text-brand-blue-900 leading-relaxed">{t('video.info')}</p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-500">
            <PlayCircle className="h-4 w-4 text-brand-green-500" />
            {t('common.poweredBy')}
          </div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default InstallationVideoCard;
