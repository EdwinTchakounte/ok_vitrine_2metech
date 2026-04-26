import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const fr = {
  translation: {
    common: {
      learnMore: 'En savoir plus',
      discover: 'Découvrir',
      contact: 'Nous contacter',
      readMore: 'Lire la suite',
      seeMore: 'Voir plus',
      seeAll: 'Tout voir',
      back: 'Retour',
      next: 'Suivant',
      prev: 'Précédent',
      pause: 'Pause',
      play: 'Lecture',
      submit: 'Envoyer',
      sending: 'Envoi en cours…',
      success: 'Succès',
      error: 'Erreur',
      close: 'Fermer',
      menu: 'Menu',
      language: 'Langue',
      country: 'Cameroun',
      poweredBy: 'Une innovation 2metech',
      heroBadge: 'Innovation africaine · IoT & Cloud',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      enmkit: 'EnMKit',
      awards: 'Récompenses',
      gallery: 'Galerie',
      contact: 'Contact',
      installers: 'Installateurs',
      partners: 'Partenaires',
      video: 'Guide vidéo',
    },
    hero: {
      eyebrow: 'Smart Energy · Made in Africa',
      title: 'L’énergie intelligente,',
      titleAccent: 'pensée pour l’Afrique.',
      description:
        'EnMKit combine IoT, capteurs intelligents et application mobile pour donner à chaque foyer le contrôle total de sa consommation. Installation en une heure. Économies dès le premier mois.',
      cta: 'Découvrir EnMKit',
      ctaSecondary: 'Voir nos récompenses',
      scroll: 'Faire défiler',
      stats: {
        homes: 'Foyers équipés',
        homesValue: '+20',
        reduction: 'Consommation réduite',
        reductionValue: '−14%',
        install: 'Temps d’installation',
        installValue: '1h',
        warranty: 'Mois de garantie',
        warrantyValue: '6',
      },
      mockup: {
        live: 'EN DIRECT',
        consumption: 'Consommation',
        today: 'Aujourd’hui',
        savings: 'Économies du mois',
        ai: 'Capteur actif',
        kit: 'EnMKit · #2M-0247',
        connected: 'Connecté',
        anomaly: 'Aucune anomalie',
        forecast: 'Projection 30 j',
      },
    },
    awardStrip: {
      eyebrow: 'Reconnaissance internationale',
      label: 'Lauréat',
    },
    value: {
      eyebrow: 'Ce que ça change pour vous',
      title: 'Des résultats concrets,',
      titleAccent: 'pas des promesses.',
      subtitle:
        'EnMKit transforme votre rapport à l’énergie dès le premier mois. Mesuré, vérifié, prouvé.',
      cards: {
        visibility: {
          tag: 'Visibilité',
          stat: '24/7',
          title: 'Voyez ce que vous payez. En direct.',
          text:
            'Chaque kWh tracé, comparé, expliqué. Plus jamais de surprise sur la facture en fin de mois.',
          b1: 'Suivi minute par minute',
          b2: 'Historique 12 mois',
          b3: 'Comparaison automatique',
        },
        savings: {
          tag: 'Économies',
          stat: '−14%',
          title: 'Réduisez votre facture, vraiment.',
          text:
            'Identifiez les gaspillages, ajustez vos usages, retour sur investissement en moins de 6 mois.',
          b1: '−14% en moyenne mesurée',
          b2: 'Jusqu’à −35% sur certains foyers',
          b3: 'Recommandations personnalisées',
          before: 'AVANT',
          after: 'APRÈS',
          beforeValue: '45 000',
          afterValue: '38 700',
          currency: 'FCFA / mois',
        },
        security: {
          tag: 'Sérénité',
          stat: '< 30s',
          title: 'Détection auto des anomalies.',
          text:
            'Surcharge, fraude, panne — vous êtes alerté avant que ça coûte cher. Support 24/7.',
          b1: 'Alertes instantanées',
          b2: 'Détection de fraude',
          b3: 'Garantie 6 mois + support',
          alertTitle: 'Pic de consommation détecté',
          alertTime: 'il y a 12 s',
        },
      },
      cta: 'Demander un diagnostic gratuit',
      ctaHint: 'Sans engagement · Réponse sous 24 h',
    },
    videoDemo: {
      eyebrow: 'Démo · 2 minutes',
      title: 'EnMKit en action.',
      titleAccent: 'En 2 minutes.',
      subtitle:
        'Voyez l’installation complète, les premières mesures et l’app mobile, en conditions réelles.',
      duration: '2:14',
      badge: 'Sans son · description visuelle',
      play: 'Lire la vidéo',
      cta: 'Demander une démo personnalisée',
    },
    bento: {
      eyebrow: 'L’écosystème 2metech',
      title: 'Une plateforme complète,',
      titleAccent: 'pas un simple compteur.',
      subtitle:
        'EnMKit combine matériel connecté, données en temps réel et application mobile — pour un contrôle total de votre énergie.',
      hero: {
        kicker: 'Solution intégrée',
        title: 'Capteur · Cloud · Mobile',
        text: 'Un kit installé en 1h qui mesure votre consommation en continu, alerte sur les anomalies et synthétise vos données dans une app simple.',
      },
      ai: {
        title: 'Données en temps réel',
        text: 'Tableau de bord clair, mesures minute par minute, historique complet.',
      },
      app: {
        title: 'App mobile',
        text: 'Pilotez tout depuis votre téléphone.',
      },
      cloud: {
        title: 'Cloud sécurisé',
        text: 'Vos données chiffrées, toujours accessibles.',
      },
      coverage: {
        title: 'Présence terrain',
        text: 'Bafoussam, Yaoundé, Douala et bientôt toute la sous-région.',
      },
      number: {
        label: 'taux de satisfaction',
      },
      quote: {
        text: '“EnMKit a réduit mes factures de 35%. Je recommande vivement.”',
        author: 'Kuate Michelle',
        role: 'Salon de coiffure · Bafoussam',
      },
    },
    showcase: {
      eyebrow: 'Comment ça marche',
      title: 'De l’installation à l’optimisation,',
      titleAccent: 'tout est automatique.',
      subtitle:
        'Quatre étapes pensées pour les réalités du terrain africain. Aucune compétence technique requise.',
      step1: {
        kicker: 'ÉTAPE 01',
        title: 'Diagnostic gratuit',
        text: 'Notre installateur certifié évalue votre installation existante en 15 minutes.',
      },
      step2: {
        kicker: 'ÉTAPE 02',
        title: 'Pose en 1 heure',
        text: 'Connexion sécurisée, sans coupure prolongée, sans modification du réseau.',
      },
      step3: {
        kicker: 'ÉTAPE 03',
        title: 'Données activées',
        text: 'Le système collecte et synthétise vos données dès la 1ʳᵉ semaine.',
      },
      step4: {
        kicker: 'ÉTAPE 04',
        title: 'Économies dès J+30',
        text: 'Premiers résultats mesurables : −14% en moyenne dès le premier mois complet.',
      },
    },
    bigNumbers: {
      eyebrow: 'Notre impact',
      title: 'Des chiffres qui parlent.',
      titleAccent: 'Et qui changent des vies.',
      subtitle:
        'Chaque mesure est vérifiée sur le terrain. Pas de marketing, juste des résultats.',
      kwh: { label: 'kWh économisés' },
      co2: { label: 'kg de CO₂ évités' },
      hours: { label: 'heures de support' },
      countries: { label: 'pays ciblés' },
    },
    megaCta: {
      eyebrow: 'Prêt à passer le cap ?',
      title: 'Reprenez le contrôle',
      titleAccent: 'de votre énergie.',
      subtitle:
        'Diagnostic gratuit en 15 minutes. Installation en 1 heure. Économies dès le premier mois.',
      primary: 'Demander un diagnostic',
      secondary: 'Voir EnMKit en détail',
      tag1: 'Sans engagement',
      tag2: 'Garantie 6 mois',
      tag3: 'Support 24/7',
    },
    features: {
      eyebrow: 'Pourquoi EnMKit',
      title: 'Une solution complète, pensée pour le terrain',
      subtitle:
        'Quatre piliers qui transforment l’accès à l’énergie en Afrique avec une technologie de pointe et un impact concret.',
      items: {
        smart: {
          title: 'Gestion intelligente',
          description:
            'Monitoring en temps réel et tableau de bord clair pour optimiser votre consommation.',
        },
        secure: {
          title: 'Installation sécurisée',
          description:
            'Pose professionnelle en 1 heure par nos installateurs certifiés, avec garantie 6 mois.',
        },
        impact: {
          title: 'Impact social',
          description:
            'Plus de 20 foyers équipés et des communautés rurales transformées au quotidien.',
        },
        proven: {
          title: 'Efficacité prouvée',
          description:
            '−14% de consommation moyenne, vérifiée sur le terrain par des données réelles.',
        },
      },
      ctaTitle: 'L’innovation au service de l’Afrique',
      ctaSubtitle:
        'Rejoignez la révolution énergétique qui transforme déjà des milliers de vies.',
      ctaButton: 'Demander une démonstration',
    },
    enmkit: {
      eyebrow: 'Notre produit phare',
      title: 'EnMKit',
      tagline: 'Smart Energy Platform',
      description:
        'La plateforme énergétique intelligente conçue au Cameroun par 2metech. EnMKit s’attaque aux défis de la gestion énergétique domestique et professionnelle dans le contexte africain grâce à des solutions technologiques de pointe.',
      poweredBy: 'Conçu au Cameroun par 2metech',
      stats: {
        fraud: 'Fraude évitée',
        ai: 'Fiabilité capteur',
        savings: 'Économies',
      },
      featuresTitle: 'Une technologie',
      featuresTitleAccent: 'qui change la donne',
      featuresSubtitle:
        'Des fonctionnalités précises pour un contrôle total de votre énergie.',
      features: {
        monitoring: {
          title: 'Monitoring intelligent',
          description: 'Surveillance en temps réel de votre consommation énergétique.',
        },
        remote: {
          title: 'Contrôle à distance',
          description: 'Pilotez vos équipements depuis votre smartphone, où que vous soyez.',
        },
        analytics: {
          title: 'Analyses avancées',
          description: 'Données claires et rapports exploitables pour décider plus vite.',
        },
        security: {
          title: 'Sécurité renforcée',
          description: 'Détection de fraude et protection des installations.',
        },
        ai: {
          title: 'Alertes intelligentes',
          description: 'Notifications en temps réel sur la consommation et les anomalies.',
        },
        cloud: {
          title: 'Synchronisation cloud',
          description: 'Accès sécurisé à vos données partout, tout le temps.',
        },
      },
      installTitle: 'Simple. Rapide. Fiable.',
      installSubtitle: 'Quatre étapes pour passer à l’énergie intelligente.',
      install: {
        diagnostic: {
          title: 'Diagnostic',
          description: 'Analyse complète de votre installation existante.',
        },
        install: {
          title: 'Installation',
          description: 'Pose professionnelle certifiée en moins d’une heure.',
        },
        config: {
          title: 'Configuration',
          description: 'Connexion IoT sécurisée et paramétrage personnalisé.',
        },
        training: {
          title: 'Formation',
          description: 'Prise en main complète, en français ou en anglais.',
        },
      },
      ctaTitle: 'Passez à une énergie plus intelligente',
      ctaSubtitle: 'Réduisez vos coûts. Reprenez le contrôle.',
      ctaButton: 'Commencer maintenant',
      benefits: {
        savings: 'Réduction jusqu’à 40%',
        alerts: 'Alertes intelligentes',
        anomalies: 'Détection d’anomalies',
        support: 'Support 24/7',
      },
    },
    about: {
      eyebrow: 'Notre histoire',
      title: 'À propos de 2metech',
      subtitle:
        'Pionniers de l’innovation énergétique en Afrique, nous transformons l’accès à l’énergie durable grâce à EnMKit.',
      mission: 'Notre mission',
      missionText:
        'Démocratiser l’accès à l’énergie durable en Afrique grâce à des solutions technologiques innovantes, abordables et conçues localement.',
      missionExtra:
        'Basée à Bafoussam, au Cameroun, 2metech développe des solutions qui allient intelligence artificielle, durabilité environnementale et impact social positif.',
      founder: 'Dr Tjahe Agnès Virginie',
      founderTitle: 'Fondatrice & CEO',
      founderDescription:
        'Pionnière de l’énergie durable en Afrique, Dr Tjahe combine expertise technique et vision sociale pour transformer l’accès à l’énergie sur le continent.',
      founderExtra:
        'Avec une vision claire de démocratisation de l’énergie durable, Dr Tjahe a fondé 2metech pour développer des solutions qui répondent aux besoins spécifiques des communautés africaines.',
      valuesTitle: 'Nos valeurs',
      valuesSubtitle: 'Les principes qui guident chacune de nos actions.',
      values: {
        innovation: {
          title: 'Innovation',
          description:
            'Nous développons des technologies de pointe pour démocratiser l’accès à l’énergie durable.',
        },
        impact: {
          title: 'Impact social',
          description:
            'Notre mission est de transformer positivement la vie des communautés africaines.',
        },
        sustainability: {
          title: 'Durabilité',
          description:
            'Nous créons des solutions respectueuses de l’environnement pour l’avenir énergétique.',
        },
        excellence: {
          title: 'Excellence',
          description:
            'Nous visons l’excellence à chaque étape, de la conception à la mise en œuvre.',
        },
      },
      impactTitle: 'Notre impact en chiffres',
      impact: {
        homes: 'Foyers équipés',
        reduction: 'Réduction moyenne',
        awards: 'Récompenses internationales',
      },
    },
    awards: {
      eyebrow: 'Excellence reconnue',
      title: 'Prix & distinctions',
      subtitle: 'Une innovation primée à l’échelle internationale.',
      poesam: {
        title: 'POESAM 2024',
        category: 'Innovation',
        date: 'Juin 2024',
        description:
          'En juin 2024, EnMKit a remporté le POESAM, soulignant son impact concret sur les foyers ruraux camerounais.',
      },
      orange: {
        title: 'Prix Spécial Féminin Orange',
        category: 'Excellence',
        date: '2024',
        description:
          'Lauréate du Prix Spécial Féminin Orange 2024, Dr Tjahe Agnès Virginie a été reconnue pour son leadership innovant avec EnMKit.',
      },
      yali: {
        title: 'YALI Power Challenge — Pretoria',
        category: 'Design',
        date: '2024',
        description:
          'EnMKit s’est distinguée au YALI Power Challenge de Pretoria où des jeunes leaders africains ont présenté des solutions énergétiques durables.',
      },
      totalenergies: {
        title: 'Startupper of the Year — TotalEnergies',
        category: 'Startup',
        date: 'Octobre 2024',
        description:
          'EnMKit a été nommée 2ᵉ meilleur projet dans la catégorie « Sustainable & Affordable Energy » du Startupper of the Year Challenge by TotalEnergies.',
      },
      details: 'Voir les détails',
      stats: {
        prizes: 'Prix remportés',
        year: 'Année record',
        countries: 'Pays impactés',
        innovation: 'Innovation',
      },
      ctaTitle: 'Rejoignez l’innovation énergétique',
      ctaSubtitle: 'Découvrez comment EnMKit transforme le paysage énergétique africain.',
      ctaButton: 'En savoir plus sur EnMKit',
    },
    partners: {
      eyebrow: 'Écosystème',
      title: 'Nos partenaires stratégiques',
      subtitle:
        'Des collaborations qui renforcent notre mission d’innovation énergétique.',
      categories: {
        energy: 'Énergie',
        tech: 'Tech',
        education: 'Éducation',
        corporate: 'Corporate',
      },
      visit: 'Visiter le site',
      stats: {
        active: 'Partenaires actifs',
        sectors: 'Secteurs couverts',
        vision: 'Vision partagée',
      },
      ctaTitle: 'Rejoignez notre écosystème',
      ctaSubtitle: 'Ensemble, façonnons l’avenir énergétique de l’Afrique.',
      ctaButton: 'Devenir partenaire',
      list: {
        f2e: {
          name: 'F2E — Free Energy Engineering',
          description: "Partenaire technique en ingénierie énergétique durable.",
          details:
            "F2E apporte son expertise technique avancée pour développer des solutions adaptées au contexte africain.",
        },
        leukele: {
          name: 'Leukelé Africa',
          description: 'Distribution stratégique sur le continent africain.',
          details:
            "Leukelé Africa facilite notre expansion grâce à son réseau et sa connaissance des marchés africains.",
        },
        yali: {
          name: 'YALI',
          description: 'Réseau de jeunes leaders africains (Young African Leaders Initiative).',
          details:
            "YALI nous connecte avec la nouvelle génération de leaders africains pour favoriser l'innovation.",
        },
        orange: {
          name: 'Orange',
          description: 'Partenaire télécommunications et digital, soutien à l’entrepreneuriat.',
          details:
            "Orange nous accompagne dans la digitalisation de nos solutions et notre infrastructure.",
        },
        totalenergies: {
          name: 'TotalEnergies',
          description: 'Leader mondial de l’énergie, partenaire du programme Startupper.',
          details:
            "TotalEnergies nous soutient à travers son programme Startupper of the Year.",
        },
      },
    },
    testimonials: {
      eyebrow: 'Ils témoignent',
      title: 'Ils nous font',
      titleAccent: 'confiance',
      subtitle: 'Des utilisateurs satisfaits à travers le Cameroun.',
      savings: 'd’économies',
      stats: {
        users: 'Utilisateurs satisfaits',
        savings: 'Économies moyennes',
        satisfaction: 'Taux de satisfaction',
        support: 'Support technique',
      },
      list: {
        michelle: {
          name: 'Kuate Michelle',
          role: 'Propriétaire d’un salon de coiffure',
          location: 'Bafoussam, Cameroun',
          text:
            'Depuis EnMKit, mes factures ont chuté de 35%. Je surveille ma consommation en temps réel et j’optimise tout. Une vraie révolution !',
        },
        douglas: {
          name: 'Wafo Douglas',
          role: 'Chef d’entreprise',
          location: 'Yaoundé, Cameroun',
          text:
            'EnMKit a détecté une fraude que je n’avais pas vue. L’équipe 2metech est très pro et le support exceptionnel. Je recommande vivement !',
        },
        brigitte: {
          name: 'Madefié Brigitte',
          role: 'Restauratrice',
          location: 'Bafoussam, Cameroun',
          text:
            'Grâce aux alertes intelligentes, plus de surprises sur mes factures. Les données sont précises et m’aident à mieux planifier.',
        },
        paul: {
          name: 'Tagne Paul',
          role: 'Directeur d’école',
          location: 'Bafoussam, Cameroun',
          text:
            'Installation rapide, sans interruption. Les économies réalisées nous permettent d’investir davantage dans l’éducation.',
        },
        pelagie: {
          name: 'Kengne Pélagie',
          role: 'Gérante de boutique',
          location: 'Bafoussam, Cameroun',
          text:
            'EnMKit s’adapte parfaitement à nos besoins locaux. L’interface est intuitive et le support toujours disponible. 100% africain !',
        },
      },
    },
    contact: {
      eyebrow: 'Restons en contact',
      title: 'Contactez-nous',
      subtitle: 'Prêt à révolutionner votre accès à l’énergie ? Notre équipe vous répond sous 24h.',
      whatsapp: 'WhatsApp',
      address: 'Mairie de Bafoussam, Cameroun',
      email: 'contact@2metechsarl.org',
      phone: '+237 696 372 245',
      labels: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        whatsapp: 'WhatsApp',
      },
      directWa: 'Contact direct WhatsApp',
      directWaText: 'Pour une réponse immédiate, contactez-nous sur WhatsApp.',
      openWa: 'Ouvrir WhatsApp',
      formTitle: 'Envoyez-nous un message',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        phone: 'Téléphone',
        phonePlaceholder: '+237 6 XX XX XX XX',
        subject: 'Sujet',
        subjectPlaceholder: 'Sujet de votre message',
        message: 'Message',
        messagePlaceholder: 'Votre message…',
        send: 'Envoyer le message',
        sending: 'Envoi en cours…',
        successTitle: 'Message envoyé !',
        successText: 'Nous vous répondrons dans les plus brefs délais.',
        errorPrefix: 'Erreur :',
      },
      mapTitle: 'Notre localisation',
      mapSubtitle:
        'Retrouvez-nous à Bafoussam, au cœur de l’innovation énergétique camerounaise.',
      mapPlaceholder: 'Carte interactive — Mairie de Bafoussam, Cameroun',
    },
    installers: {
      eyebrow: 'Réseau certifié',
      title: 'Devenez installateur EnMKit',
      subtitle:
        'Rejoignez notre réseau d’installateurs certifiés et participez à la révolution énergétique africaine.',
      benefitsTitle: 'Pourquoi devenir installateur EnMKit ?',
      benefitsSubtitle: 'Des avantages exclusifs pour les professionnels qui nous rejoignent.',
      benefits: {
        network: {
          title: 'Réseau national',
          description:
            'Rejoignez un réseau d’installateurs certifiés à travers tout le Cameroun.',
        },
        training: {
          title: 'Formation certifiée',
          description: 'Accédez à nos formations techniques et à la certification EnMKit.',
        },
        support: {
          title: 'Support technique',
          description:
            'Bénéficiez d’un support technique continu et d’outils professionnels.',
        },
      },
      formTitle: 'Formulaire de candidature',
      formSubtitle: 'Remplissez ce formulaire pour rejoindre notre réseau.',
      sections: {
        personal: 'Informations personnelles',
        professional: 'Informations professionnelles',
        documents: 'Documents requis',
      },
      fields: {
        name: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        type: 'Type de candidature',
        individual: 'Particulier',
        company: 'Entreprise',
        companyName: 'Nom de l’entreprise',
        profession: 'Profession',
        zone: 'Zone d’intervention',
        experience: 'Expérience',
        motivation: 'Motivation',
        cni: 'Carte Nationale d’Identité',
        cv: 'CV (optionnel)',
        document: 'Autre document (optionnel)',
        required: 'Requis',
        optional: 'Optionnel',
      },
      placeholders: {
        name: 'Votre nom complet',
        email: 'vous@example.com',
        phone: '+237 6 XX XX XX XX',
        company: 'Nom de votre entreprise',
        profession: 'Ex : Électricien, technicien…',
        experience: 'Décrivez votre expérience pertinente',
        motivation: 'Pourquoi souhaitez-vous nous rejoindre ?',
      },
      zones: {
        choose: 'Choisir une région',
      },
      submit: 'Soumettre ma candidature',
      submitting: 'Envoi en cours…',
      successTitle: 'Candidature envoyée !',
      successText:
        'Merci pour votre candidature. Notre équipe l’examinera et vous contactera sous 48h.',
      newApplication: 'Nouvelle candidature',
      errors: {
        required: 'Veuillez remplir tous les champs obligatoires',
        company: 'Le nom de l’entreprise est obligatoire',
        cni: 'Veuillez télécharger votre CNI',
        email: 'Adresse email invalide',
        phone: 'Numéro de téléphone camerounais invalide',
        fileSize: 'Le fichier ne doit pas dépasser 5 Mo',
        fileType: 'Type de fichier non supporté',
        upload: 'Erreur lors de l’upload de la CNI',
        generic: 'Une erreur est survenue lors de la soumission',
      },
    },
    video: {
      title: 'Guide vidéo d’installation',
      subtitle: 'Tutoriel visuel pour nos partenaires d’installation.',
      info: 'Cette vidéo ne contient pas de son. Une description détaillée est affichée pour chaque étape.',
    },
    footer: {
      tagline: 'Smart energy. African genius.',
      description:
        '2metech révolutionne l’accès à l’énergie durable en Afrique avec EnMKit, une plateforme IoT primée.',
      links: 'Navigation',
      explore: 'Explorer',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      rights: 'Tous droits réservés',
      newsletterTitle: 'Restez informé',
      newsletterText: 'Recevez nos actualités et innovations directement par email.',
      newsletterPlaceholder: 'votre@email.com',
      newsletterSubmit: 'S’abonner',
      madeIn: 'Conçu avec passion à Bafoussam, Cameroun.',
    },
    whatsapp: {
      title: '2metech Support',
      status: 'En ligne maintenant',
      greeting: 'Bonjour 👋 Comment pouvons-nous vous aider avec EnMKit aujourd’hui ?',
      cta: 'Démarrer la conversation',
      defaultMessage:
        'Bonjour, je suis intéressé(e) par EnMKit. Pouvez-vous me donner plus d’informations ?',
    },
  },
};

const en: typeof fr = {
  translation: {
    common: {
      learnMore: 'Learn more',
      discover: 'Discover',
      contact: 'Contact us',
      readMore: 'Read more',
      seeMore: 'See more',
      seeAll: 'See all',
      back: 'Back',
      next: 'Next',
      prev: 'Previous',
      pause: 'Pause',
      play: 'Play',
      submit: 'Submit',
      sending: 'Sending…',
      success: 'Success',
      error: 'Error',
      close: 'Close',
      menu: 'Menu',
      language: 'Language',
      country: 'Cameroon',
      poweredBy: 'A 2metech innovation',
      heroBadge: 'African innovation · IoT & Cloud',
    },
    nav: {
      home: 'Home',
      about: 'About',
      enmkit: 'EnMKit',
      awards: 'Awards',
      gallery: 'Gallery',
      contact: 'Contact',
      installers: 'Installers',
      partners: 'Partners',
      video: 'Video Guide',
    },
    hero: {
      eyebrow: 'Smart Energy · Made in Africa',
      title: 'Smart energy,',
      titleAccent: 'designed for Africa.',
      description:
        'EnMKit blends IoT, smart sensors and a mobile app to give every home full control over its consumption. Installed in one hour. Savings from day one.',
      cta: 'Discover EnMKit',
      ctaSecondary: 'See our awards',
      scroll: 'Scroll',
      stats: {
        homes: 'Homes equipped',
        homesValue: '+20',
        reduction: 'Consumption cut',
        reductionValue: '−14%',
        install: 'Install time',
        installValue: '1h',
        warranty: 'Months warranty',
        warrantyValue: '6',
      },
      mockup: {
        live: 'LIVE',
        consumption: 'Consumption',
        today: 'Today',
        savings: 'Monthly savings',
        ai: 'Sensor active',
        kit: 'EnMKit · #2M-0247',
        connected: 'Connected',
        anomaly: 'No anomaly',
        forecast: '30-day forecast',
      },
    },
    awardStrip: {
      eyebrow: 'International recognition',
      label: 'Winner',
    },
    value: {
      eyebrow: 'What it changes for you',
      title: 'Concrete results,',
      titleAccent: 'not promises.',
      subtitle:
        'EnMKit transforms your relationship with energy from the first month. Measured, verified, proven.',
      cards: {
        visibility: {
          tag: 'Visibility',
          stat: '24/7',
          title: 'See what you pay. Live.',
          text:
            'Every kWh tracked, compared, explained. No more end-of-month surprises on the bill.',
          b1: 'Minute-by-minute tracking',
          b2: '12-month history',
          b3: 'Automatic comparison',
        },
        savings: {
          tag: 'Savings',
          stat: '−14%',
          title: 'Cut your bill. For real.',
          text:
            'Spot waste, tune your habits, ROI in less than 6 months.',
          b1: '−14% measured average',
          b2: 'Up to −35% in some homes',
          b3: 'Personalized recommendations',
          before: 'BEFORE',
          after: 'AFTER',
          beforeValue: '45,000',
          afterValue: '38,700',
          currency: 'FCFA / month',
        },
        security: {
          tag: 'Peace of mind',
          stat: '< 30s',
          title: 'Auto anomaly detection.',
          text:
            'Overload, fraud, outage — you’re alerted before it costs. 24/7 support.',
          b1: 'Instant alerts',
          b2: 'Fraud detection',
          b3: '6-month warranty + support',
          alertTitle: 'Consumption spike detected',
          alertTime: '12s ago',
        },
      },
      cta: 'Request a free diagnosis',
      ctaHint: 'No commitment · Reply in 24h',
    },
    videoDemo: {
      eyebrow: 'Demo · 2 minutes',
      title: 'EnMKit in action.',
      titleAccent: 'In 2 minutes.',
      subtitle:
        'See the full installation, first readings and the mobile app — in real conditions.',
      duration: '2:14',
      badge: 'No sound · visual description',
      play: 'Play video',
      cta: 'Request a personalized demo',
    },
    bento: {
      eyebrow: 'The 2metech ecosystem',
      title: 'A full platform,',
      titleAccent: 'not just a meter.',
      subtitle:
        'EnMKit combines connected hardware, real-time data and a mobile app for total control over your energy.',
      hero: {
        kicker: 'Integrated solution',
        title: 'Sensor · Cloud · Mobile',
        text: 'A kit installed in 1 hour that measures consumption continuously, alerts you on anomalies and surfaces clear data in a simple app.',
      },
      ai: {
        title: 'Real-time data',
        text: 'Clear dashboard, minute-by-minute readings, full history.',
      },
      app: {
        title: 'Mobile app',
        text: 'Control everything from your phone.',
      },
      cloud: {
        title: 'Secure cloud',
        text: 'End-to-end encrypted, always accessible.',
      },
      coverage: {
        title: 'Field presence',
        text: 'Bafoussam, Yaoundé, Douala — and the sub-region soon.',
      },
      number: {
        label: 'satisfaction rate',
      },
      quote: {
        text: '“EnMKit cut my bills by 35%. Highly recommended.”',
        author: 'Kuate Michelle',
        role: 'Hair salon · Bafoussam',
      },
    },
    showcase: {
      eyebrow: 'How it works',
      title: 'From install to optimization,',
      titleAccent: 'everything is automatic.',
      subtitle:
        'Four steps designed for African field conditions. No technical skill required.',
      step1: {
        kicker: 'STEP 01',
        title: 'Free diagnosis',
        text: 'Our certified installer assesses your setup in 15 minutes.',
      },
      step2: {
        kicker: 'STEP 02',
        title: '1-hour install',
        text: 'Safe connection, minimal downtime, no rewiring.',
      },
      step3: {
        kicker: 'STEP 03',
        title: 'Data activated',
        text: 'The system starts collecting and surfacing your data within the first week.',
      },
      step4: {
        kicker: 'STEP 04',
        title: 'Savings by D+30',
        text: 'Measurable results: −14% on average in the first full month.',
      },
    },
    bigNumbers: {
      eyebrow: 'Our impact',
      title: 'Numbers that talk.',
      titleAccent: 'And lives that change.',
      subtitle:
        'Every metric is verified on the ground. No marketing, just results.',
      kwh: { label: 'kWh saved' },
      co2: { label: 'kg CO₂ avoided' },
      hours: { label: 'support hours' },
      countries: { label: 'targeted countries' },
    },
    megaCta: {
      eyebrow: 'Ready to take the leap?',
      title: 'Take back control',
      titleAccent: 'of your energy.',
      subtitle:
        'Free 15-min diagnosis. 1-hour install. Savings from the first month.',
      primary: 'Request a diagnosis',
      secondary: 'See EnMKit in detail',
      tag1: 'No commitment',
      tag2: '6-month warranty',
      tag3: '24/7 support',
    },
    features: {
      eyebrow: 'Why EnMKit',
      title: 'A complete solution, built for the field',
      subtitle:
        'Four pillars that transform energy access in Africa with state-of-the-art tech and tangible impact.',
      items: {
        smart: {
          title: 'Smart management',
          description:
            'Real-time monitoring and a clear dashboard to optimize your consumption.',
        },
        secure: {
          title: 'Safe installation',
          description:
            'Professional 1-hour install by our certified installers, with a 6-month warranty.',
        },
        impact: {
          title: 'Social impact',
          description:
            'Over 20 homes equipped and rural communities transformed every day.',
        },
        proven: {
          title: 'Proven efficiency',
          description: '−14% average consumption, verified on the ground with real data.',
        },
      },
      ctaTitle: 'Innovation in service of Africa',
      ctaSubtitle:
        'Join the energy revolution that is already transforming thousands of lives.',
      ctaButton: 'Request a demo',
    },
    enmkit: {
      eyebrow: 'Our flagship product',
      title: 'EnMKit',
      tagline: 'Smart Energy Platform',
      description:
        'The smart energy platform built in Cameroon by 2metech. EnMKit tackles domestic and business energy challenges in the African context with cutting-edge tech.',
      poweredBy: 'Designed in Cameroon by 2metech',
      stats: {
        fraud: 'Fraud avoided',
        ai: 'Sensor reliability',
        savings: 'Savings',
      },
      featuresTitle: 'A technology',
      featuresTitleAccent: 'that changes the game',
      featuresSubtitle: 'Precise features for full control of your energy.',
      features: {
        monitoring: {
          title: 'Smart monitoring',
          description: 'Real-time tracking of your energy consumption.',
        },
        remote: {
          title: 'Remote control',
          description: 'Manage your devices from your smartphone, anywhere.',
        },
        analytics: {
          title: 'Advanced analytics',
          description: 'Clear data and actionable reports for faster decisions.',
        },
        security: {
          title: 'Hardened security',
          description: 'Fraud detection and installation protection.',
        },
        ai: {
          title: 'Smart alerts',
          description: 'Real-time notifications on consumption and anomalies.',
        },
        cloud: {
          title: 'Cloud sync',
          description: 'Secure access to your data, everywhere, anytime.',
        },
      },
      installTitle: 'Simple. Fast. Reliable.',
      installSubtitle: 'Four steps to switch to smart energy.',
      install: {
        diagnostic: {
          title: 'Diagnosis',
          description: 'Full assessment of your existing setup.',
        },
        install: {
          title: 'Installation',
          description: 'Certified professional install in under an hour.',
        },
        config: {
          title: 'Configuration',
          description: 'Secure IoT pairing and personalized setup.',
        },
        training: {
          title: 'Training',
          description: 'Complete onboarding, in French or English.',
        },
      },
      ctaTitle: 'Switch to smarter energy',
      ctaSubtitle: 'Cut your costs. Take back control.',
      ctaButton: 'Get started',
      benefits: {
        savings: 'Up to 40% savings',
        alerts: 'Smart alerts',
        anomalies: 'Anomaly detection',
        support: '24/7 support',
      },
    },
    about: {
      eyebrow: 'Our story',
      title: 'About 2metech',
      subtitle:
        'Pioneers of African energy innovation, transforming access to sustainable energy through EnMKit.',
      mission: 'Our mission',
      missionText:
        'Democratize access to sustainable energy in Africa through innovative, affordable, locally-built solutions.',
      missionExtra:
        'Headquartered in Bafoussam, Cameroon, 2metech blends connected hardware, environmental sustainability and positive social impact.',
      founder: 'Dr Tjahe Agnès Virginie',
      founderTitle: 'Founder & CEO',
      founderDescription:
        'A pioneer of sustainable energy in Africa, Dr Tjahe combines technical expertise and social vision to transform energy access on the continent.',
      founderExtra:
        'With a clear vision to democratize sustainable energy, Dr Tjahe founded 2metech to build solutions that fit African communities.',
      valuesTitle: 'Our values',
      valuesSubtitle: 'The principles guiding every action we take.',
      values: {
        innovation: {
          title: 'Innovation',
          description:
            'We build cutting-edge tech to democratize access to sustainable energy.',
        },
        impact: {
          title: 'Social impact',
          description:
            'Our mission is to transform the lives of African communities.',
        },
        sustainability: {
          title: 'Sustainability',
          description:
            'We design environmentally responsible solutions for the energy future.',
        },
        excellence: {
          title: 'Excellence',
          description: 'We aim for excellence at every step, from design to delivery.',
        },
      },
      impactTitle: 'Our impact in numbers',
      impact: {
        homes: 'Homes equipped',
        reduction: 'Average reduction',
        awards: 'International awards',
      },
    },
    awards: {
      eyebrow: 'Recognized excellence',
      title: 'Awards & distinctions',
      subtitle: 'An award-winning innovation on the international stage.',
      poesam: {
        title: 'POESAM 2024',
        category: 'Innovation',
        date: 'June 2024',
        description:
          'In June 2024, EnMKit won POESAM, highlighting its concrete impact on rural Cameroonian households.',
      },
      orange: {
        title: 'Orange Women’s Special Prize',
        category: 'Excellence',
        date: '2024',
        description:
          'Winner of the Orange Women’s Special Prize 2024, Dr Tjahe Agnès Virginie was recognized for her innovative leadership with EnMKit.',
      },
      yali: {
        title: 'YALI Power Challenge — Pretoria',
        category: 'Design',
        date: '2024',
        description:
          'EnMKit stood out at the YALI Power Challenge in Pretoria where young African leaders presented sustainable energy solutions.',
      },
      totalenergies: {
        title: 'Startupper of the Year — TotalEnergies',
        category: 'Startup',
        date: 'October 2024',
        description:
          'EnMKit was named 2nd best project in the “Sustainable & Affordable Energy” category of the TotalEnergies Startupper Challenge.',
      },
      details: 'View details',
      stats: {
        prizes: 'Awards won',
        year: 'Record year',
        countries: 'Countries impacted',
        innovation: 'Innovation',
      },
      ctaTitle: 'Join the energy innovation',
      ctaSubtitle: 'See how EnMKit is reshaping the African energy landscape.',
      ctaButton: 'Learn more about EnMKit',
    },
    partners: {
      eyebrow: 'Ecosystem',
      title: 'Our strategic partners',
      subtitle: 'Collaborations that strengthen our mission of energy innovation.',
      categories: {
        energy: 'Energy',
        tech: 'Tech',
        education: 'Education',
        corporate: 'Corporate',
      },
      visit: 'Visit website',
      stats: {
        active: 'Active partners',
        sectors: 'Sectors covered',
        vision: 'Shared vision',
      },
      ctaTitle: 'Join our ecosystem',
      ctaSubtitle: 'Together, let’s shape the energy future of Africa.',
      ctaButton: 'Become a partner',
      list: {
        f2e: {
          name: 'F2E — Free Energy Engineering',
          description: 'Technical partner specialized in sustainable energy engineering.',
          details:
            'F2E provides advanced technical expertise to develop solutions tailored to the African context.',
        },
        leukele: {
          name: 'Leukelé Africa',
          description: 'Strategic partner for development and distribution across Africa.',
          details:
            'Leukelé Africa accelerates our continental expansion through its distribution network.',
        },
        yali: {
          name: 'YALI',
          description: 'Young African Leaders Initiative — network of African leaders.',
          details:
            'YALI connects us with the next generation of African leaders, fostering innovation.',
        },
        orange: {
          name: 'Orange',
          description: 'Telecom & digital partner, supporter of entrepreneurship.',
          details:
            'Orange supports our digitalization efforts and tech infrastructure across Africa.',
        },
        totalenergies: {
          name: 'TotalEnergies',
          description: 'Global energy leader, partner of the Startupper program.',
          details:
            'TotalEnergies supports us through the Startupper of the Year program.',
        },
      },
    },
    testimonials: {
      eyebrow: 'Voices',
      title: 'They',
      titleAccent: 'trust us',
      subtitle: 'Happy users from across Cameroon.',
      savings: 'in savings',
      stats: {
        users: 'Happy users',
        savings: 'Average savings',
        satisfaction: 'Satisfaction rate',
        support: 'Tech support',
      },
      list: {
        michelle: {
          name: 'Kuate Michelle',
          role: 'Hair salon owner',
          location: 'Bafoussam, Cameroon',
          text:
            'Since EnMKit, my bills dropped by 35%. I monitor consumption in real time and optimize everything. A real revolution!',
        },
        douglas: {
          name: 'Wafo Douglas',
          role: 'Business owner',
          location: 'Yaoundé, Cameroon',
          text:
            'EnMKit detected fraud I had not seen. The 2metech team is very professional and support is outstanding. Highly recommended!',
        },
        brigitte: {
          name: 'Madefié Brigitte',
          role: 'Restaurant owner',
          location: 'Bafoussam, Cameroon',
          text:
            'Thanks to smart alerts, no more bill surprises. The data is precise and helps me plan better.',
        },
        paul: {
          name: 'Tagne Paul',
          role: 'School principal',
          location: 'Bafoussam, Cameroon',
          text:
            'Fast, smooth installation. The savings let us invest more in our students’ education.',
        },
        pelagie: {
          name: 'Kengne Pélagie',
          role: 'Shop manager',
          location: 'Bafoussam, Cameroon',
          text:
            'EnMKit fits our local needs perfectly. Intuitive UI and always-available support. 100% African!',
        },
      },
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Contact us',
      subtitle: 'Ready to transform your access to energy? Our team replies within 24 hours.',
      whatsapp: 'WhatsApp',
      address: 'Bafoussam City Hall, Cameroon',
      email: 'contact@2metech.cm',
      phone: '+237 696 372 245',
      labels: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
      },
      directWa: 'Direct WhatsApp contact',
      directWaText: 'For an immediate reply, message us on WhatsApp.',
      openWa: 'Open WhatsApp',
      formTitle: 'Send us a message',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        phone: 'Phone',
        phonePlaceholder: '+237 6 XX XX XX XX',
        subject: 'Subject',
        subjectPlaceholder: 'Subject of your message',
        message: 'Message',
        messagePlaceholder: 'Your message…',
        send: 'Send message',
        sending: 'Sending…',
        successTitle: 'Message sent!',
        successText: 'We will get back to you very soon.',
        errorPrefix: 'Error:',
      },
      mapTitle: 'Our location',
      mapSubtitle: 'Find us in Bafoussam, the heart of Cameroonian energy innovation.',
      mapPlaceholder: 'Interactive map — Bafoussam City Hall, Cameroon',
    },
    installers: {
      eyebrow: 'Certified network',
      title: 'Become an EnMKit installer',
      subtitle:
        'Join our network of certified installers and take part in the African energy revolution.',
      benefitsTitle: 'Why become an EnMKit installer?',
      benefitsSubtitle: 'Exclusive perks for the professionals who join us.',
      benefits: {
        network: {
          title: 'National network',
          description: 'Join a network of certified installers across Cameroon.',
        },
        training: {
          title: 'Certified training',
          description: 'Access our technical training and EnMKit certification.',
        },
        support: {
          title: 'Tech support',
          description: 'Continuous technical support and pro-grade tools.',
        },
      },
      formTitle: 'Application form',
      formSubtitle: 'Fill out this form to join our installer network.',
      sections: {
        personal: 'Personal information',
        professional: 'Professional information',
        documents: 'Required documents',
      },
      fields: {
        name: 'Full name',
        email: 'Email',
        phone: 'Phone',
        type: 'Application type',
        individual: 'Individual',
        company: 'Company',
        companyName: 'Company name',
        profession: 'Profession',
        zone: 'Coverage zone',
        experience: 'Experience',
        motivation: 'Motivation',
        cni: 'National ID Card',
        cv: 'CV (optional)',
        document: 'Other document (optional)',
        required: 'Required',
        optional: 'Optional',
      },
      placeholders: {
        name: 'Your full name',
        email: 'you@example.com',
        phone: '+237 6 XX XX XX XX',
        company: 'Your company name',
        profession: 'E.g. Electrician, technician…',
        experience: 'Describe your relevant experience',
        motivation: 'Why do you want to join us?',
      },
      zones: {
        choose: 'Select a region',
      },
      submit: 'Submit application',
      submitting: 'Submitting…',
      successTitle: 'Application sent!',
      successText:
        'Thank you for your application. Our team will review it and get back to you within 48 hours.',
      newApplication: 'New application',
      errors: {
        required: 'Please fill in all required fields',
        company: 'Company name is required',
        cni: 'Please upload your National ID',
        email: 'Invalid email address',
        phone: 'Invalid Cameroonian phone number',
        fileSize: 'File must not exceed 5 MB',
        fileType: 'Unsupported file type',
        upload: 'Error while uploading the National ID',
        generic: 'An error occurred while submitting',
      },
    },
    video: {
      title: 'Installation video guide',
      subtitle: 'Visual tutorial for our installation partners.',
      info: 'This video has no sound. A detailed description is shown for each step.',
    },
    footer: {
      tagline: 'Smart energy. African genius.',
      description:
        '2metech revolutionizes access to sustainable energy in Africa with EnMKit, an award-winning IoT platform.',
      links: 'Navigation',
      explore: 'Explore',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      terms: 'Terms of service',
      rights: 'All rights reserved',
      newsletterTitle: 'Stay informed',
      newsletterText: 'Get our news and innovations directly in your inbox.',
      newsletterPlaceholder: 'your@email.com',
      newsletterSubmit: 'Subscribe',
      madeIn: 'Crafted with passion in Bafoussam, Cameroon.',
    },
    whatsapp: {
      title: '2metech Support',
      status: 'Online now',
      greeting: 'Hello 👋 How can we help you with EnMKit today?',
      cta: 'Start the conversation',
      defaultMessage:
        'Hello, I am interested in EnMKit. Could you give me more information?',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { fr, en },
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'fr';
}

export default i18n;
