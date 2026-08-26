import React from 'react';
import { useTranslation } from 'react-i18next';
import { Info, PlayCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';

const InstallationVideoCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('nav.video')}
        title={t('video.title')}
        subtitle={t('video.subtitle')}
      >
        <ButtonLink
          to="/installers"
          variant="primary"
          size="lg"
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          {t('nav.installers')}
        </ButtonLink>
      </PageHero>

      <Section className="bg-canvas">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/SXeX896I3aw"
                title={t('video.title')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-brand-blue-200 bg-brand-blue-50 p-4 dark:border-brand-blue-500/25 dark:bg-brand-blue-500/10">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-600 dark:text-brand-blue-300" />
            <p className="text-[13.5px] leading-relaxed text-brand-blue-900 dark:text-brand-blue-100 text-just">
              {t('video.info')}
            </p>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-[13px] text-fg-subtle">
            <PlayCircle className="h-4 w-4 text-brand-green-500" />
            {t('common.poweredBy')}
          </p>
        </div>
      </Section>
    </PageTransition>
  );
};

export default InstallationVideoCard;
