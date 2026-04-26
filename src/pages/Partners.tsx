import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/ui/PageHero';
import PartnersSection from '../components/Partners/PartnersSection';
import PageTransition from '../components/ui/PageTransition';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <PageHero
        eyebrow={t('partners.eyebrow')}
        title={t('partners.title')}
        subtitle={t('partners.subtitle')}
      />
      <PartnersSection />
    </PageTransition>
  );
};

export default Partners;
