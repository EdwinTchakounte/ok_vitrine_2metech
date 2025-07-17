import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        enmkit: 'EnMKit',
        awards: 'Récompenses',
        gallery: 'Galerie',
        contact: 'Contact',
        installers: 'Installateurs',
        partners: 'Partenaires'
      },
      hero: {
        title: 'L\'Innovation Énergétique',
        subtitle: 'Africaine du Futur',
        description: 'EnMKit révolutionne l\'accès à l\'énergie durable en Afrique avec une technologie IA avancée, des installations rapides et un impact environnemental prouvé.',
        cta: 'Découvrir EnMKit',
        stats: {
          homes: '+20 Foyers Équipés',
          reduction: '-14% Consommation',
          install: '1h Installation',
          warranty: '6 Mois Garantie'
        }
      },
      awards: {
        title: 'Nos Récompenses',
        subtitle: 'Reconnaissance Internationale',
        poesam: {
          title: 'POESAM 2024',
          description: 'En juin 2024, EnMKit a remporté le POESAM – Prix de l\'Organisation pour l\'Énergie Solaire en Afrique de l\'Ouest – soulignant son impact concret sur les foyers ruraux camerounais.'
        },
        orange: {
          title: 'Prix Spécial Féminin Orange',
          description: 'Lauréate du Prix Spécial Féminin Orange 2024, Dr Tjahe Agnes Virginie a été reconnue pour son leadership innovant avec EnMKit.'
        },
        yali: {
          title: 'YALI Power Challenge Pretoria',
          description: 'EnMKit s\'est distinguée au YALI Power Challenge de Pretoria (2024) où des jeunes leaders africains ont présenté des solutions énergétiques durables.'
        },
        totalenergies: {
          title: 'Startupper of the Year – TotalEnergies',
          description: 'En octobre 2024, EnMKit a été nommé 2ᵉ meilleur projet dans la catégorie \'Sustainable & Affordable Energy\' du Startupper of the Year Challenge by TotalEnergies.'
        }
      },
      about: {
        title: 'À propos de 2metech',
        mission: 'Notre Mission',
        missionText: 'Démocratiser l\'accès à l\'énergie durable en Afrique grâce à des solutions technologiques innovantes et abordables.',
        founder: 'Dr Tjahe Agnes Virginie',
        founderTitle: 'Fondatrice & CEO',
        founderDescription: 'Pionnière de l\'énergie durable en Afrique, Dr Tjahe combine expertise technique et vision sociale pour transformer l\'accès à l\'énergie sur le continent.'
      },
      contact: {
        title: 'Contactez-nous',
        whatsapp: 'WhatsApp',
        address: 'Mairie de Bafoussam, Cameroun',
        email: 'contact@2metech.cm'
      },
      installers: {
        title: 'Devenez Installateur EnMKit',
        subtitle: 'Rejoignez notre réseau d\'installateurs certifiés',
        form: {
          personal: 'Informations Personnelles',
          professional: 'Informations Professionnelles',
          documents: 'Documents Requis',
          submit: 'Soumettre ma Candidature'
        }
      },
      partners: {
        title: 'Nos Partenaires',
        subtitle: 'Des collaborations stratégiques qui renforcent notre mission'
      },
      footer: {
        description: '2metech révolutionne l\'accès à l\'énergie durable en Afrique avec EnMKit.',
        links: 'Liens Rapides',
        legal: 'Mentions Légales',
        privacy: 'Politique de Confidentialité',
        rights: 'Tous droits réservés'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        enmkit: 'EnMKit',
        awards: 'Awards',
        gallery: 'Gallery',
        contact: 'Contact',
        installers: 'Installers',
        partners: 'Partners'
      },
      hero: {
        title: 'African Energy',
        subtitle: 'Innovation of the Future',
        description: 'EnMKit revolutionizes access to sustainable energy in Africa with advanced AI technology, rapid installations and proven environmental impact.',
        cta: 'Discover EnMKit',
        stats: {
          homes: '+20 Homes Equipped',
          reduction: '-14% Consumption',
          install: '1h Installation',
          warranty: '6 Months Warranty'
        }
      },
      awards: {
        title: 'Our Awards',
        subtitle: 'International Recognition',
        poesam: {
          title: 'POESAM 2024',
          description: 'In June 2024, EnMKit won the POESAM – Prize of the Organization for Solar Energy in West Africa – highlighting its concrete impact on rural Cameroonian households.'
        },
        orange: {
          title: 'Orange Women\'s Special Prize',
          description: 'Winner of the Orange Women\'s Special Prize 2024, Dr Tjahe Agnes Virginie was recognized for her innovative leadership with EnMKit.'
        },
        yali: {
          title: 'YALI Power Challenge Pretoria',
          description: 'EnMKit distinguished itself at the YALI Power Challenge in Pretoria (2024) where young African leaders presented sustainable energy solutions.'
        },
        totalenergies: {
          title: 'Startupper of the Year – TotalEnergies',
          description: 'In October 2024, EnMKit was named 2nd best project in the \'Sustainable & Affordable Energy\' category of the Startupper of the Year Challenge by TotalEnergies.'
        }
      },
      about: {
        title: 'About 2metech',
        mission: 'Our Mission',
        missionText: 'Democratize access to sustainable energy in Africa through innovative and affordable technological solutions.',
        founder: 'Dr Tjahe Agnes Virginie',
        founderTitle: 'Founder & CEO',
        founderDescription: 'Pioneer of sustainable energy in Africa, Dr Tjahe combines technical expertise and social vision to transform energy access on the continent.'
      },
      contact: {
        title: 'Contact Us',
        whatsapp: 'WhatsApp',
        address: 'Bafoussam City Hall, Cameroon',
        email: 'contact@2metech.cm'
      },
      installers: {
        title: 'Become an EnMKit Installer',
        subtitle: 'Join our network of certified installers',
        form: {
          personal: 'Personal Information',
          professional: 'Professional Information',
          documents: 'Required Documents',
          submit: 'Submit Application'
        }
      },
      partners: {
        title: 'Our Partners',
        subtitle: 'Strategic collaborations that strengthen our mission'
      },
      footer: {
        description: '2metech revolutionizes access to sustainable energy in Africa with EnMKit.',
        links: 'Quick Links',
        legal: 'Legal Notice',
        privacy: 'Privacy Policy',
        rights: 'All rights reserved'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;