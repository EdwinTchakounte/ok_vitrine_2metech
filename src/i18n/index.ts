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
      app: 'Application mobile',
      learningLab: 'Learning Lab',
      platform: 'Plateforme & IA',
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
      labBadge: 'Nouveau',
      labLink: 'Smart Home Learning Lab : le banc de formation en valise',
      videoTitle: 'Installation d’un kit EnMKit',
      videoCaption: 'Pose dans le tableau électrique par un technicien 2ME-TECH, en conditions réelles.',
      videoPause: 'Mettre la vidéo en pause',
      videoPlay: 'Lire la vidéo',
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
            'Surcharge, fraude, panne : vous êtes alerté avant que ça coûte cher. Support 24/7.',
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
        'EnMKit combine matériel connecté, données en temps réel et application mobile, pour un contrôle total de votre énergie.',
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
      data: {
        eyebrow: 'Nouveau',
        title: 'Données, IA',
        titleAccent: 'et éducation.',
        subtitle:
          'EnMKit va au-delà du pilotage : relevés horaires par SMS, analyse par IA et formation pratique sur un banc réel.',
        cards: {
          ai: { title: 'Analyse IA', text: 'Qualité des données, profil type, anomalies, prévisions en FCFA et score d’efficacité A-E.', cta: 'La plateforme' },
          lab: { title: 'Smart Home Learning Lab', text: 'Le banc EnMKit en valise pour former à l’énergie et à l’IoT, avec 7 travaux pratiques.', cta: 'Le Learning Lab' },
          learn: { title: 'Module « Apprendre »', text: 'Fiches TP, quiz, éco-gestes et glossaire, directement dans l’application.', cta: 'L’application' },
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
        title: 'YALI Power Challenge · Pretoria',
        category: 'Design',
        date: '2024',
        description:
          'EnMKit s’est distinguée au YALI Power Challenge de Pretoria où des jeunes leaders africains ont présenté des solutions énergétiques durables.',
      },
      totalenergies: {
        title: 'Startupper of the Year · TotalEnergies',
        category: 'Startup',
        date: 'Octobre 2024',
        description:
          'EnMKit a été nommée 2ᵉ meilleur projet dans la catégorie « Sustainable & Affordable Energy » du Startupper of the Year Challenge by TotalEnergies.',
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
          name: 'F2E · Free Energy Engineering',
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
      mapPlaceholder: 'Carte interactive · Mairie de Bafoussam, Cameroun',
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
      platform: 'Espace plateforme',
    },
    whatsapp: {
      title: '2metech Support',
      status: 'En ligne maintenant',
      greeting: 'Bonjour 👋 Comment pouvons-nous vous aider avec EnMKit aujourd’hui ?',
      cta: 'Démarrer la conversation',
      defaultMessage:
        'Bonjour, je suis intéressé(e) par EnMKit. Pouvez-vous me donner plus d’informations ?',
    },
    theme: {
      toggle: 'Changer de thème',
      light: 'Passer en thème clair',
      dark: 'Passer en thème sombre',
    },
    menu: {
      solution: 'Solution',
      company: 'Entreprise',
      solutionTag: 'Produit',
      companyTag: 'À propos de nous',
      items: {
        enmkit: 'Le kit IoT et sa plateforme',
        app: 'Piloter vos kits depuis votre téléphone',
        video: 'Installer un kit, étape par étape',
        learningLab: 'Le banc de formation en valise',
        platform: 'Données, IA et éducation énergétique',
        about: 'Notre mission et notre fondatrice',
        awards: 'Quatre distinctions internationales',
        partners: 'Celles et ceux qui nous accompagnent',
      },
      download: 'Télécharger l’app',
      platformAccess: 'Espace plateforme',
    },
    labTeaser: {
      eyebrow: 'Nouveau chez 2metech',
      title: 'Former, mesurer,',
      titleAccent: 'comprendre.',
      subtitle:
        'Le kit EnMKit devient un banc de formation en valise, et ses relevés horaires deviennent des analyses par IA.',
      lab: {
        tag: 'Smart Home Learning Lab',
        title: 'Un laboratoire en valise',
        text: 'Un banc EnMKit transportable : 4 lignes commandées par SMS, sans Internet, et 7 travaux pratiques pour l’EFTP, les clubs STIM et les universités.',
        cta: 'Découvrir le Learning Lab',
      },
      ai: {
        tag: 'Plateforme & IA',
        title: 'Vos données expliquées par l’IA',
        text: 'Relevés horaires par SMS, détection d’anomalies, prévisions en FCFA et score d’efficacité de A à E, en ligne comme hors-ligne.',
        cta: 'Voir la plateforme',
      },
    },
    lab: {
      eyebrow: 'EnMKit Smart Home Learning Lab',
      title: 'Un laboratoire',
      titleAccent: 'en valise.',
      subtitle:
        'Un banc d’essai EnMKit transportable pour apprendre, sur un système réel, à câbler, mesurer, commander et mieux gérer l’énergie électrique. Il se pilote par SMS, sans connexion Internet.',
      ctaPartner: 'Devenir partenaire',
      ctaTp: 'Voir les travaux pratiques',
      contactSubject: 'Partenariat Learning Lab',
      facts: {
        size: { value: '60×50×15', label: 'cm, valise fermée' },
        lines: { value: '4', label: 'lignes commandées' },
        sms: { value: 'SMS', label: 'sans Internet' },
        tp: { value: '7', label: 'travaux pratiques' },
      },
      why: {
        local: {
          title: 'Conçu au Cameroun',
          text: 'Porté par une enseignante-chercheuse de l’IUT FOTSO Victor (Université de Dschang), fabriqué par 2ME-TECH.',
        },
        offline: {
          title: 'Sans Internet',
          text: 'Commandes et relevés passent par SMS sur le réseau GSM : adapté aux zones peu connectées.',
        },
        field: {
          title: 'Déjà sur le terrain',
          text: 'Des kits EnMKit sont installés chez des ménages de la Région de l’Ouest, avec un service de maintenance.',
        },
        students: {
          title: 'Apprenants impliqués',
          text: 'Des étudiantes et étudiants des filières technologiques ont participé au prototypage et aux installations.',
        },
      },
      bench: {
        eyebrow: 'Le banc d’essai',
        title: 'Une installation domestique réelle,',
        titleAccent: 'pilotée à distance.',
        subtitle:
          'Tout tient dans une valise d’environ 60 × 50 × 15 cm, alimentée par une prise secteur 220 V grâce à un câble de 2 m rangé à l’intérieur.',
        diagramCaption: 'Schéma de principe du banc. Photographies à venir.',
        lineLabel: 'Ligne',
        bulb: 'Ampoule',
        socket: 'Prise',
        mains: '220 V',
        components: {
          emitter: {
            name: 'Bloc émetteur EnMKit',
            spec: '114 × 79 × 58 mm',
            role: 'Acquiert et transmet les données de consommation.',
          },
          meter: {
            name: 'Compteur d’énergie',
            spec: 'Compteur modulaire standard',
            role: 'Mesure la consommation : on lit, compare et interprète les relevés.',
          },
          receiver: {
            name: 'Bloc récepteur EnMKit',
            spec: '200 × 200 × 80 mm',
            role: 'Reçoit les commandes SMS et pilote les lignes.',
          },
          panel: {
            name: 'Coffret électrique',
            spec: '1 disjoncteur de tête + 4 modulaires',
            role: 'Protège et distribue les circuits : la logique de câblage devient visible.',
          },
          loads: {
            name: '2 ampoules et 2 prises',
            spec: 'Lignes 1-2 ampoules · lignes 3-4 prises',
            role: 'Charges pédagogiques pour créer des scénarios et comparer.',
          },
          cable: {
            name: 'Câble d’alimentation',
            spec: '2 m, fiche mâle',
            role: 'Alimente l’émetteur, le compteur et le coffret.',
          },
        },
        safety:
          'Sécurité : le banc est destiné à des activités encadrées par des formateurs ou des techniciens compétents, dans le respect des procédures de sécurité électrique de l’établissement.',
      },
      tp: {
        eyebrow: 'Scénarios pédagogiques',
        title: 'Sept travaux pratiques,',
        titleAccent: 'du compteur au mini-projet.',
        subtitle:
          'Une offre de formation, pas seulement un équipement. Durées et progression se définissent avec chaque partenaire.',
        outcomeLabel: 'Acquis visés',
        appNote:
          'Les fiches TP1 à TP7 sont aussi guidées pas à pas dans le module « Apprendre » de l’application EnMKit.',
        items: {
          tp1: {
            title: 'Comprendre et mesurer l’énergie',
            activity: 'Identifier les charges, lire le compteur et suivre l’évolution de la consommation.',
            outcome: 'Lire un compteur ; relier une charge à sa consommation.',
          },
          tp2: {
            title: 'Comprendre les circuits',
            activity: 'Relier ampoules et prises aux lignes 1 à 4 ; situer le rôle du coffret.',
            outcome: 'Identifier les protections et la logique de câblage.',
          },
          tp3: {
            title: 'Commander à distance par SMS',
            activity: 'Enregistrer le kit, allumer et couper chaque ligne, lire la confirmation et l’historique.',
            outcome: 'Piloter un système à distance ; interpréter une confirmation.',
          },
          tp4: {
            title: 'Comparer les usages',
            activity: 'Construire deux scénarios d’usage, relever la consommation et comparer.',
            outcome: 'Collecter, comparer et interpréter des données.',
          },
          tp5: {
            title: 'Efficacité énergétique',
            activity: 'Identifier des leviers simples de réduction et vérifier leur effet sur les relevés.',
            outcome: 'Démontrer un effet par la mesure.',
          },
          tp6: {
            title: 'Internet des objets et données',
            activity: 'Relier mesure, transmission SMS, historique et décision ; paramétrer l’émetteur.',
            outcome: 'Comprendre la chaîne mesure → donnée → décision.',
          },
          tp7: {
            title: 'Mini-projet d’apprenants',
            activity: 'Concevoir un cas d’usage (maison, commerce, école), régler les numéros et partager par QR Code.',
            outcome: 'Concevoir, présenter et défendre un petit projet.',
          },
        },
        skillsTitle: 'Compétences développées',
        skills: {
          technical: { title: 'Techniques', text: 'Électricité, câblage, protection, mesure.' },
          digital: { title: 'Numériques', text: 'Internet des objets, données, commande à distance, analyse.' },
          green: { title: 'Vertes', text: 'Efficacité énergétique, usage raisonné, lien avec les énergies renouvelables.' },
          employ: { title: 'Employabilité', text: 'Pratique, autonomie, travail en projet, entrepreneuriat.' },
        },
        outcomesNote:
          'Les acquis d’apprentissage sont des objectifs : le pilote prévoit une évaluation avant / après pour les vérifier.',
      },
      audiences: {
        eyebrow: 'Publics cibles',
        title: 'Pour qui ?',
        subtitle: 'Des lycées techniques aux laboratoires universitaires, en passant par les programmes communautaires.',
        items: {
          tvet: { title: 'Apprenants de l’EFTP', text: 'Centres et lycées techniques : pratiquer sur un système réel.' },
          stem: { title: 'Élèves et clubs STIM', text: 'Une initiation visible et concrète à l’énergie et à l’IoT.' },
          girls: { title: 'Jeunes filles et jeunes femmes', text: 'Accès aux métiers techniques et de l’énergie, par les ateliers et mini-projets.' },
          univ: { title: 'Étudiants et chercheurs', text: 'Une plateforme d’expérimentation : suivi, efficacité, données.' },
          trainers: { title: 'Formateurs et enseignants', text: 'Un outil prêt à l’emploi, avec ses fiches de TP.' },
          techs: { title: 'Techniciens et installateurs', text: 'Monter en compétences sur les systèmes pilotés à distance.' },
          ngo: { title: 'ONG et programmes jeunesse', text: 'Démonstrations itinérantes et sensibilisation à l’efficacité énergétique.' },
        },
        other: 'Un autre public ? Construisons le programme avec vous.',
        otherCta: 'En parler',
      },
      models: {
        eyebrow: 'Modèles de partenariat',
        title: 'Six façons de',
        titleAccent: 's’engager.',
        subtitle:
          'Des modèles modulaires : commencer par une dotation (A) ou rejoindre directement un pilote structuré (C), avec des indicateurs communs.',
        partnerLabel: 'Partenaire',
        enmkitLabel: '2ME-TECH',
        resultLabel: 'Résultat attendu',
        items: {
          a: {
            name: 'Dotation pédagogique',
            goal: 'Équiper un établissement ou un centre identifié.',
            partner: 'Finance ou met à disposition un banc.',
            enmkit: 'Équipement, mise en service, initiation des formateurs.',
            result: 'Établissement équipé, formateurs formés.',
          },
          b: {
            name: 'Co-construction d’un module',
            goal: 'Intégrer EnMKit au cursus.',
            partner: 'Expertise pédagogique, accès aux apprenants, validation.',
            enmkit: 'Banc, fiches de TP, formation, évaluation des acquis.',
            result: 'Module intégré, premiers acquis évalués.',
          },
          c: {
            name: 'Pilote d’apprentissage énergétique',
            goal: 'Tester un modèle reproductible dans plusieurs établissements.',
            partner: 'Cofinancement, accès à des sites.',
            enmkit: 'Bancs, programme, suivi d’usage, rapport d’impact.',
            result: 'Données d’usage et d’acquis, conditions de reproduction.',
          },
          d: {
            name: 'Laboratoire d’énergie mobile',
            goal: 'Atteindre plusieurs écoles et communautés.',
            partner: 'Logistique, accès aux sites, mobilisation.',
            enmkit: 'Banc mobile, démonstrations, ateliers.',
            result: 'Sites visités, participants touchés.',
          },
          e: {
            name: 'Filles et énergie intelligente',
            goal: 'Un programme ciblé pour les filles et jeunes femmes.',
            partner: 'Cofinancement, mentorat, mobilisation.',
            enmkit: 'Banc, ateliers pratiques, mentorat, mini-projets.',
            result: 'Participation des filles, mini-projets réalisés.',
          },
          f: {
            name: 'Laboratoire universitaire et de recherche',
            goal: 'Recherche appliquée : suivi, efficacité, données.',
            partner: 'Encadrement scientifique, étudiants.',
            enmkit: 'Banc, protocole d’expérimentation, projets.',
            result: 'Projets étudiants et de recherche documentés.',
          },
        },
        principleLabel: 'Principe',
        principle: {
          p1: 'Démarrer petit',
          p2: 'Former',
          p3: 'Mesurer',
          p4: 'Apprendre',
          p5: 'Améliorer',
          p6: 'Passer à l’échelle',
        },
      },
      pilot: {
        eyebrow: 'Déploiement et mesure d’impact',
        title: 'Un pilote en',
        titleAccent: 'six étapes.',
        subtitle:
          'Un pilote démonstratif dans un nombre limité d’établissements, pour produire des preuves, des retours d’usage et un modèle reproductible.',
        deliverableLabel: 'Livrable',
        steps: {
          s1: { title: 'Sélection', text: 'Établissements, formateurs et groupes d’apprenants.', deliverable: 'Liste et critères de sélection' },
          s2: { title: 'Installation', text: 'Mise en place et test du banc : carte SIM, couverture GSM, sécurité électrique.', deliverable: 'Banc opérationnel' },
          s3: { title: 'Formation des formateurs', text: 'Prise en main de l’équipement et transmission des fiches de TP.', deliverable: 'Formateurs formés' },
          s4: { title: 'Mise en œuvre', text: 'TP, démonstrations, clubs ou mini-projets.', deliverable: 'Séances réalisées' },
          s5: { title: 'Mesure', text: 'Apprenants, heures de pratique, TP réalisés, acquis et satisfaction.', deliverable: 'Données de suivi' },
          s6: { title: 'Capitalisation', text: 'Rapport et conditions de reproduction documentées.', deliverable: 'Rapport du pilote' },
        },
        tbdLabel: 'À préciser avec le partenaire',
        tbd: 'Sites et nombre d’établissements, durée, population cible, gouvernance et comité de suivi, risques, critères de réussite.',
        indicatorsTitle: 'Indicateurs proposés',
        indicators: {
          sites: 'Établissements équipés',
          trainers: 'Formateurs formés',
          learners: 'Apprenants exposés',
          hours: 'Heures de pratique',
          tps: 'TP réalisés',
          girls: 'Part des filles et jeunes femmes',
          gain: 'Acquis d’apprentissage (avant / après)',
          projects: 'Mini-projets développés',
          usage: 'Taux d’utilisation du banc',
          satisfaction: 'Satisfaction',
          replication: 'Potentiel de reproduction',
        },
        indicatorsNote:
          'Des outils simples (registres, tests avant / après, questionnaires courts), complétés par l’historique horodaté de l’application comme trace d’usage objective.',
      },
      budget: {
        eyebrow: 'Cadre budgétaire',
        title: 'Un prix unitaire clair,',
        titleAccent: 'un devis sur mesure.',
        unitLabel: 'Coût unitaire',
        price: '300 000 FCFA',
        perBench: 'par banc d’essai EnMKit',
        euro: '≈ 457 € au taux fixe de 655,957 FCFA pour 1 €',
        points: {
          p1: 'Les prestations associées sont facturées selon le nombre de bancs commandés.',
          p2: 'Aucun montant global n’est avancé sans base de coût propre à chaque projet.',
          p3: 'Devis personnalisé sur demande : nombre de bancs, sites, programme de formation.',
        },
        itemLabel: 'Poste',
        basisLabel: 'Base de facturation',
        lines: {
          benches: { name: 'Bancs d’essai EnMKit', basis: 'Nombre de bancs × 300 000 FCFA' },
          commissioning: { name: 'Mise en service', basis: 'Au devis' },
          training: { name: 'Formation des formateurs, fiches de TP', basis: 'Au devis' },
          logistics: { name: 'Transport et logistique', basis: 'Au devis, selon les sites' },
          maintenance: { name: 'Maintenance et assistance', basis: 'Au devis' },
          evaluation: { name: 'Suivi, évaluation, rapport d’impact', basis: 'Au devis' },
          local: { name: 'Coûts locaux (cartes SIM, SMS)', basis: 'À budgéter par le partenaire local' },
        },
        quote: 'Demander un devis',
      },
      sdg: {
        eyebrow: 'Objectifs de développement durable',
        title: 'Aligné sur',
        titleAccent: 'six ODD.',
        sdgLabel: 'ODD',
        primary: 'Principal',
        secondary: 'Secondaire',
        items: {
          sdg4: { name: 'Éducation de qualité', text: 'Formation pratique EFTP et STIM, compétences techniques et numériques.' },
          sdg7: { name: 'Énergie propre et d’un coût abordable', text: 'Mieux comprendre et maîtriser les consommations.' },
          sdg5: { name: 'Égalité entre les sexes', text: 'Programme « Filles et énergie intelligente ».' },
          sdg8: { name: 'Travail décent et croissance économique', text: 'Employabilité des jeunes techniciens et installateurs.' },
          sdg12: { name: 'Consommation et production responsables', text: 'Un usage plus raisonné de l’énergie.' },
          sdg13: { name: 'Lutte contre le changement climatique', text: 'Moins de consommations inutiles : contribution indirecte, non mesurée dans le pilote.' },
        },
      },
      cta: {
        eyebrow: 'Appel au partenariat',
        title: 'Construisons ensemble',
        titleAccent: 'le premier pilote.',
        subtitle:
          'Organisations internationales, fondations, ONG techniques, établissements et universités : parlons de votre contexte.',
        button: 'Proposer un partenariat',
        audiences: {
          funders: 'Bailleurs : cofinancer des bancs et un pilote mesuré.',
          schools: 'Établissements : accueillir un banc, former formateurs et apprenants.',
          univ: 'Universités : recherche appliquée sur le suivi, l’efficacité et les données.',
        },
      },
    },
    platform: {
      eyebrow: 'Plateforme EnMKit',
      title: 'Vos données d’énergie,',
      titleAccent: 'expliquées par l’IA.',
      subtitle:
        'Les kits EnMKit transmettent leur consommation heure par heure par SMS. La plateforme les reçoit, les vérifie et les analyse, et l’application mobile fait de même, même hors-ligne.',
      ctaContact: 'Parler de votre projet',
      access: 'Espace plateforme',
      login: 'Connexion',
      grade: {
        title: 'Score d’efficacité',
        text: 'Chaque kit reçoit une note de A (sobre et régulier) à E, calculée à partir de ses relevés horaires.',
        best: 'Sobre',
        worst: 'À améliorer',
      },
      flow: {
        eyebrow: 'Architecture',
        title: 'Du compteur',
        titleAccent: 'au tableau de bord.',
        subtitle: 'Un SMS suffit : le kit n’a besoin d’aucune connexion Internet.',
        online: 'En ligne',
        offline: 'Hors-ligne',
        nodes: {
          kit: { title: 'Kit EnMKit', text: 'Compteur + émetteur : mesure et relevés horaires.' },
          gsm: { title: 'Réseau GSM', text: 'Trames horaires transmises par SMS.' },
          gateway: { title: 'Passerelle SMS', text: 'Reçoit les trames et les achemine vers la plateforme.' },
          platform: { title: 'Plateforme EnMKit', text: 'API, base de données et moteur d’analyse.' },
          dashboard: { title: 'Tableau de bord web', text: 'Suivi des kits, sessions de formation, indicateurs.' },
          assistant: { title: 'Assistant IA', text: 'Explique les données en langage clair.' },
          app: { title: 'Application mobile', text: 'Pilotage, analyse IA locale, module « Apprendre ».' },
        },
        links: {
          sms: 'SMS',
          https: 'HTTPS',
          local: 'SMS reçus sur le téléphone',
        },
        offlineNote:
          'Sans réseau data, l’application analyse localement les trames reçues, avec les mêmes calculs que la plateforme.',
      },
      ai: {
        eyebrow: 'IA pour la gestion des données',
        title: 'De la trame brute',
        titleAccent: 'à la décision.',
        subtitle:
          'Chaque heure de consommation devient une information utile, pour un propriétaire, un formateur ou un apprenant.',
        items: {
          quality: { title: 'Qualité des données', text: 'Complétude, trous de données et heures suspectes repérés avant toute analyse.' },
          profile: { title: 'Profil type', text: 'Une journée type heure par heure (jours ouvrés et week-end), avec la veille de nuit et l’heure de pointe.' },
          anomalies: { title: 'Détection d’anomalies', text: 'Pics isolés et dérives nocturnes persistantes signalés automatiquement.' },
          forecast: { title: 'Prévisions', text: 'Consommation attendue du jour et du mois, avec son coût estimé en FCFA.' },
          score: { title: 'Score d’efficacité A-E', text: 'Une note lisible, avec le détail des points perdus.' },
          recos: { title: 'Recommandations', text: 'Des actions concrètes, chiffrées en kWh et en FCFA.' },
        },
        tariffNote: 'Le coût est estimé à partir d’un barème tarifaire paramétrable.',
      },
      assistant: {
        eyebrow: 'Assistant énergie',
        title: 'Une IA qui explique,',
        titleAccent: 'au bon niveau.',
        subtitle:
          'En ligne, l’assistant répond aux questions sur les données d’un kit. Sans connexion, une réponse hors-ligne prend le relais.',
        audiences: {
          learner: { title: 'Apprenant', text: 'Comprendre un kWh, une courbe, une anomalie.' },
          owner: { title: 'Propriétaire', text: 'Savoir où part l’énergie et comment réduire la facture.' },
          trainer: { title: 'Formateur', text: 'Préparer une séance et commenter les résultats d’un groupe.' },
        },
        examplesLabel: 'Exemples de questions',
        examples: {
          q1: 'Pourquoi ma consommation de nuit augmente-t-elle ?',
          q2: 'Combien coûtera ce mois-ci ?',
          q3: 'Que signifie la note C de mon kit ?',
        },
      },
      education: {
        eyebrow: 'Éducation énergétique',
        title: 'Apprendre sur',
        titleAccent: 'des données réelles.',
        subtitle:
          'Le module « Apprendre » de l’application et le tableau de bord formateur accompagnent le Smart Home Learning Lab.',
        app: {
          tag: 'Application mobile',
          title: 'Le module « Apprendre »',
          items: {
            tp: 'Fiches guidées TP1 à TP7',
            quiz: 'Quiz pour valider les acquis',
            tips: 'Éco-gestes',
            glossary: 'Glossaire de l’énergie',
            compare: 'Comparaison de scénarios A / B sur les données réelles du banc',
          },
        },
        trainer: {
          tag: 'Tableau de bord web',
          title: 'L’espace formateur',
          text: 'Suivi des sessions de formation et des indicateurs d’impact du pilote.',
          kpis: {
            learners: 'Apprenants',
            girls: 'Part des filles',
            hours: 'Heures de pratique',
            gain: 'Gain d’apprentissage avant / après',
            satisfaction: 'Satisfaction',
          },
        },
        labLink: 'Découvrir le Learning Lab',
      },
      accessBlock: {
        title: 'Espace plateforme',
        text: 'Propriétaires, formateurs et partenaires : connectez-vous au tableau de bord EnMKit.',
        button: 'Se connecter',
        soonTitle: 'Accès à la plateforme',
        soon: 'Le tableau de bord en ligne ouvre bientôt. Pour un accès pilote ou une démonstration, écrivez-nous.',
        soonButton: 'Demander un accès',
        subject: 'Accès plateforme EnMKit',
      },
      cta: {
        title: 'Vos kits, vos données,',
        titleAccent: 'vos décisions.',
        subtitle: 'Déploiement, pilote ou démonstration de la plateforme : écrivez-nous.',
        button: 'Nous contacter',
      },
    },
    app: {
      eyebrow: 'Application mobile',
      title: 'Vos kits EnMKit,',
      titleAccent: 'dans votre poche.',
      subtitle:
        'Pilotez vos lignes, suivez votre consommation et recevez vos alertes, par internet ou par SMS, même sans couverture data.',
      teaserTitle: 'L’application mobile EnMKit',
      teaserText:
        'Commandez vos lignes, consultez votre consommation et gérez plusieurs logements depuis un seul écran.',
      teaserCta: 'Découvrir l’application',
      download: 'Télécharger l’APK',
      downloadShort: 'Télécharger',
      clientName: 'App EnMKit (propriétaires)',
      banc: {
        eyebrow: 'Smart Home Learning Lab',
        title: 'Télécharger EnMKit Banc',
        hint: 'L’app du banc de formation : analyse IA, assistant tuteur des 7 TP, quiz et scénarios. Elle s’installe à côté de l’app EnMKit.',
        download: 'Télécharger EnMKit Banc',
        checksum: 'Empreinte SHA-256',
        guide: 'Guide d’utilisation (PDF)',
        version: 'Version {{version}} · lignes, connexion du kit, analyse IA, tuteur de TP',
        footer: 'App EnMKit Banc',
      },
      downloadHint: 'Android · fichier APK · installation manuelle',
      clientVersion: 'Version {{version}} · lignes, consommation, connexion du kit',
      directLink: 'Lien de téléchargement direct',
      scanTitle: 'Scannez pour installer',
      scanText:
        'Pointez l’appareil photo de votre téléphone sur ce code : il ouvre directement la page de téléchargement.',
      androidOnly: 'Android uniquement',
      free: 'Gratuit',
      offline: 'Fonctionne sans internet',
      installTitle: 'Installer en trois étapes',
      install: {
        s1: { title: 'Téléchargez le fichier', text: 'Appuyez sur le bouton ou scannez le QR code pour récupérer l’APK.' },
        s2: { title: 'Autorisez l’installation', text: 'Android demande d’autoriser les applications de cette source : acceptez.' },
        s3: { title: 'Ouvrez et associez', text: 'Créez votre code, puis ajoutez votre kit manuellement ou par scan QR.' },
      },
      featuresTitle: 'Ce que vous pouvez faire',
      featuresSubtitle: 'Toutes les fonctions du kit, accessibles en quelques gestes.',
      features: {
        control: { title: 'Contrôle des lignes', text: 'Allumez ou éteignez chaque ligne, ou tout le logement d’un seul geste.' },
        consumption: { title: 'Consommation suivie', text: 'Courbe d’évolution, dernière mesure et historique complet par kit.' },
        sms: { title: 'Pilotage par SMS', text: 'Chaque commande passe aussi par SMS : votre kit répond même sans data.' },
        multisite: { title: 'Plusieurs logements', text: 'Gérez appartements et sites multiples depuis un parc unique.' },
        security: { title: 'Accès protégé', text: 'Code PIN, empreinte digitale et liste de numéros autorisés.' },
        qr: { title: 'Partage par QR', text: 'Exportez la configuration d’un kit et importez-la par simple scan.' },
      },
      news: {
        eyebrow: 'Nouveau',
        title: 'L’IA et la formation,',
        titleAccent: 'dans l’application.',
        subtitle:
          'Trois nouveaux espaces pour comprendre sa consommation et apprendre en pratiquant.',
        items: {
          analysis: {
            tag: 'Onglet du kit',
            title: 'Analyse IA',
            text: 'Analyse des relevés horaires du kit, directement sur le téléphone, même sans Internet.',
            p1: 'Score d’efficacité de A à E',
            p2: 'Courbe des dernières 48 h et profil type',
            p3: 'Anomalies et qualité des données',
            p4: 'Prévision du jour et du mois, en FCFA',
          },
          learn: {
            tag: 'Nouvel onglet',
            title: 'Apprendre',
            text: 'Le compagnon pédagogique du Smart Home Learning Lab.',
            p1: 'Fiches guidées TP1 à TP7',
            p2: 'Quiz et meilleur score',
            p3: 'Éco-gestes et glossaire',
            p4: 'Comparaison de scénarios A / B',
          },
          assistant: {
            tag: 'En ligne, avec repli hors-ligne',
            title: 'Assistant énergie',
            text: 'Une IA qui répond aux questions sur les données du kit.',
            p1: 'Profils apprenant, propriétaire, formateur',
            p2: 'Explications en langage clair',
            p3: 'Réponse hors-ligne si le serveur est injoignable',
            p4: 'Ouvert depuis le module « Apprendre »',
          },
        },
        platformLink: 'Voir la plateforme et l’IA',
      },
      galleryTitle: 'L’application en images',
      gallerySubtitle: 'Captures réelles de l’application EnMKit.',
      shots: {
        onboarding: 'Prise en main guidée',
        parc: 'Tout votre parc en un écran',
        lignes: 'Contrôle des lignes',
        commandes: 'Marche / arrêt instantané',
        conso: 'Consommation en temps réel',
        config: 'Configuration du kit',
        'qr-export': 'Export du kit en QR code',
        'qr-scan': 'Import par scan',
        historique: 'Accusés de réception',
        biometrie: 'Code PIN et empreinte',
        reglages: 'Thème clair, sombre ou auto',
        faq: 'Aide intégrée',
        numeros: 'Numéros autorisés',
        sms: 'Commandes par SMS',
      },
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
      app: 'Mobile app',
      learningLab: 'Learning Lab',
      platform: 'Platform & AI',
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
      labBadge: 'New',
      labLink: 'Smart Home Learning Lab: the training bench in a case',
      videoTitle: 'Installing an EnMKit kit',
      videoCaption: 'Fitted in the electrical panel by a 2ME-TECH technician, in real conditions.',
      videoPause: 'Pause the video',
      videoPlay: 'Play the video',
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
            'Overload, fraud, outage: you’re alerted before it costs. 24/7 support.',
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
        'See the full installation, first readings and the mobile app, in real conditions.',
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
        text: 'Bafoussam, Yaoundé, Douala, and the sub-region soon.',
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
      data: {
        eyebrow: 'New',
        title: 'Data, AI',
        titleAccent: 'and education.',
        subtitle:
          'EnMKit goes beyond control: hourly readings over SMS, AI analysis and hands-on training on a real bench.',
        cards: {
          ai: { title: 'AI analysis', text: 'Data quality, typical profile, anomalies, forecasts in FCFA and an A-E efficiency score.', cta: 'The platform' },
          lab: { title: 'Smart Home Learning Lab', text: 'The EnMKit bench in a suitcase to teach energy and IoT, with 7 hands-on labs.', cta: 'The Learning Lab' },
          learn: { title: '“Learn” module', text: 'Lab sheets, quizzes, eco-tips and a glossary, right inside the app.', cta: 'The app' },
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
        title: 'YALI Power Challenge · Pretoria',
        category: 'Design',
        date: '2024',
        description:
          'EnMKit stood out at the YALI Power Challenge in Pretoria where young African leaders presented sustainable energy solutions.',
      },
      totalenergies: {
        title: 'Startupper of the Year · TotalEnergies',
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
          name: 'F2E · Free Energy Engineering',
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
          description: 'Young African Leaders Initiative: a network of African leaders.',
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
      email: 'contact@2metechsarl.org',
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
      mapPlaceholder: 'Interactive map · Bafoussam City Hall, Cameroon',
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
      platform: 'Platform access',
    },
    whatsapp: {
      title: '2metech Support',
      status: 'Online now',
      greeting: 'Hello 👋 How can we help you with EnMKit today?',
      cta: 'Start the conversation',
      defaultMessage:
        'Hello, I am interested in EnMKit. Could you give me more information?',
    },
    theme: {
      toggle: 'Switch theme',
      light: 'Switch to light theme',
      dark: 'Switch to dark theme',
    },
    menu: {
      solution: 'Solution',
      company: 'Company',
      solutionTag: 'Product',
      companyTag: 'About us',
      items: {
        enmkit: 'The IoT kit and its platform',
        app: 'Control your kits from your phone',
        video: 'Install a kit, step by step',
        learningLab: 'The training bench in a suitcase',
        platform: 'Data, AI and energy education',
        about: 'Our mission and our founder',
        awards: 'Four international distinctions',
        partners: 'The people backing us',
      },
      download: 'Get the app',
      platformAccess: 'Platform access',
    },
    labTeaser: {
      eyebrow: 'New at 2metech',
      title: 'Train, measure,',
      titleAccent: 'understand.',
      subtitle:
        'The EnMKit kit becomes a training bench in a suitcase, and its hourly readings become AI-driven insights.',
      lab: {
        tag: 'Smart Home Learning Lab',
        title: 'A lab in a suitcase',
        text: 'A portable EnMKit bench: 4 lines controlled by SMS, no Internet needed, and 7 hands-on labs for TVET, STEM clubs and universities.',
        cta: 'Discover the Learning Lab',
      },
      ai: {
        tag: 'Platform & AI',
        title: 'Your data, explained by AI',
        text: 'Hourly readings over SMS, anomaly detection, forecasts in FCFA and an A-E efficiency score, online and offline.',
        cta: 'See the platform',
      },
    },
    lab: {
      eyebrow: 'EnMKit Smart Home Learning Lab',
      title: 'A laboratory',
      titleAccent: 'in a suitcase.',
      subtitle:
        'A portable EnMKit test bench to learn, on a real system, how to wire, measure, control and better manage electrical energy. It is driven by SMS, with no Internet connection.',
      ctaPartner: 'Become a partner',
      ctaTp: 'See the hands-on labs',
      contactSubject: 'Learning Lab partnership',
      facts: {
        size: { value: '60×50×15', label: 'cm, suitcase closed' },
        lines: { value: '4', label: 'controlled lines' },
        sms: { value: 'SMS', label: 'no Internet needed' },
        tp: { value: '7', label: 'hands-on labs' },
      },
      why: {
        local: {
          title: 'Designed in Cameroon',
          text: 'Led by a lecturer-researcher at IUT FOTSO Victor (University of Dschang), built by 2ME-TECH.',
        },
        offline: {
          title: 'No Internet needed',
          text: 'Commands and readings travel by SMS over the GSM network: suited to poorly connected areas.',
        },
        field: {
          title: 'Already in the field',
          text: 'EnMKit kits are installed in households in Cameroon’s West Region, with a maintenance service.',
        },
        students: {
          title: 'Learners involved',
          text: 'Students from technology programmes took part in prototyping and installations.',
        },
      },
      bench: {
        eyebrow: 'The test bench',
        title: 'A real home installation,',
        titleAccent: 'controlled remotely.',
        subtitle:
          'Everything fits in a suitcase of about 60 × 50 × 15 cm, powered from a 220 V wall socket through a 2 m cable stored inside.',
        diagramCaption: 'Schematic view of the bench. Photographs coming soon.',
        lineLabel: 'Line',
        bulb: 'Bulb',
        socket: 'Socket',
        mains: '220 V',
        components: {
          emitter: {
            name: 'EnMKit transmitter unit',
            spec: '114 × 79 × 58 mm',
            role: 'Acquires and transmits consumption data.',
          },
          meter: {
            name: 'Energy meter',
            spec: 'Standard modular meter',
            role: 'Measures consumption: read, compare and interpret readings.',
          },
          receiver: {
            name: 'EnMKit receiver unit',
            spec: '200 × 200 × 80 mm',
            role: 'Receives SMS commands and switches the lines.',
          },
          panel: {
            name: 'Distribution board',
            spec: '1 main breaker + 4 modular breakers',
            role: 'Protects and distributes the circuits: wiring logic made visible.',
          },
          loads: {
            name: '2 bulbs and 2 sockets',
            spec: 'Lines 1-2 bulbs · lines 3-4 sockets',
            role: 'Teaching loads to build usage scenarios and compare.',
          },
          cable: {
            name: 'Power cable',
            spec: '2 m, male plug',
            role: 'Powers the transmitter, the meter and the board.',
          },
        },
        safety:
          'Safety: the bench is meant for activities supervised by qualified trainers or technicians, following the institution’s electrical safety procedures.',
      },
      tp: {
        eyebrow: 'Teaching scenarios',
        title: 'Seven hands-on labs,',
        titleAccent: 'from meter to mini-project.',
        subtitle:
          'A training offer, not just equipment. Duration and progression are set with each partner.',
        outcomeLabel: 'Target outcomes',
        appNote:
          'Labs 1 to 7 are also guided step by step in the “Learn” module of the EnMKit app.',
        items: {
          tp1: {
            title: 'Understand and measure energy',
            activity: 'Identify the loads, read the meter and follow consumption over time.',
            outcome: 'Read a meter; link a load to its consumption.',
          },
          tp2: {
            title: 'Understand the circuits',
            activity: 'Map bulbs and sockets to lines 1 to 4; locate the role of the board.',
            outcome: 'Identify protections and wiring logic.',
          },
          tp3: {
            title: 'Remote control by SMS',
            activity: 'Register the kit, switch each line on and off, read the confirmation and the log.',
            outcome: 'Control a system remotely; interpret a confirmation.',
          },
          tp4: {
            title: 'Compare usages',
            activity: 'Build two usage scenarios, take readings and compare.',
            outcome: 'Collect, compare and interpret data.',
          },
          tp5: {
            title: 'Energy efficiency',
            activity: 'Identify simple ways to save and check their effect on the readings.',
            outcome: 'Demonstrate an effect through measurement.',
          },
          tp6: {
            title: 'Internet of Things and data',
            activity: 'Connect measurement, SMS transmission, history and decision; configure the transmitter.',
            outcome: 'Understand the chain measurement → data → decision.',
          },
          tp7: {
            title: 'Learner mini-project',
            activity: 'Design a use case (home, shop, school), set authorised numbers and share via QR code.',
            outcome: 'Design, present and defend a small project.',
          },
        },
        skillsTitle: 'Skills developed',
        skills: {
          technical: { title: 'Technical', text: 'Electricity, wiring, protection, measurement.' },
          digital: { title: 'Digital', text: 'Internet of Things, data, remote control, analysis.' },
          green: { title: 'Green', text: 'Energy efficiency, sensible use, link with renewable energy.' },
          employ: { title: 'Employability', text: 'Practice, autonomy, project work, entrepreneurship.' },
        },
        outcomesNote:
          'Learning outcomes are objectives: the pilot includes a before / after assessment to verify them.',
      },
      audiences: {
        eyebrow: 'Target audiences',
        title: 'Who is it for?',
        subtitle: 'From technical schools to university labs, including community programmes.',
        items: {
          tvet: { title: 'TVET learners', text: 'Training centres and technical schools: practise on a real system.' },
          stem: { title: 'Pupils and STEM clubs', text: 'A visible, hands-on introduction to energy and IoT.' },
          girls: { title: 'Girls and young women', text: 'Access to technical and energy careers through workshops and mini-projects.' },
          univ: { title: 'Students and researchers', text: 'An experimentation platform: monitoring, efficiency, data.' },
          trainers: { title: 'Trainers and teachers', text: 'A ready-to-use tool, with its lab sheets.' },
          techs: { title: 'Technicians and installers', text: 'Upskilling on remotely controlled systems.' },
          ngo: { title: 'NGOs and youth programmes', text: 'Travelling demonstrations and energy-efficiency awareness.' },
        },
        other: 'Another audience? Let’s design the programme with you.',
        otherCta: 'Let’s talk',
      },
      models: {
        eyebrow: 'Partnership models',
        title: 'Six ways to',
        titleAccent: 'get involved.',
        subtitle:
          'Modular models: start with an equipment grant (A) or join a structured pilot (C) directly, with shared indicators.',
        partnerLabel: 'Partner',
        enmkitLabel: '2ME-TECH',
        resultLabel: 'Expected result',
        items: {
          a: {
            name: 'Teaching equipment grant',
            goal: 'Equip an identified school or centre.',
            partner: 'Funds or provides a bench.',
            enmkit: 'Equipment, commissioning, trainer onboarding.',
            result: 'Institution equipped, trainers trained.',
          },
          b: {
            name: 'Co-designed module',
            goal: 'Integrate EnMKit into the curriculum.',
            partner: 'Teaching expertise, access to learners, validation.',
            enmkit: 'Bench, lab sheets, training, learner assessment.',
            result: 'Module integrated, first outcomes assessed.',
          },
          c: {
            name: 'Energy learning pilot',
            goal: 'Test a replicable model across several institutions.',
            partner: 'Co-funding, access to sites.',
            enmkit: 'Benches, programme, usage tracking, impact report.',
            result: 'Usage and learning data, replication conditions.',
          },
          d: {
            name: 'Mobile energy lab',
            goal: 'Reach several schools and communities.',
            partner: 'Logistics, site access, outreach.',
            enmkit: 'Mobile bench, demonstrations, workshops.',
            result: 'Sites visited, participants reached.',
          },
          e: {
            name: 'Girls and smart energy',
            goal: 'A programme dedicated to girls and young women.',
            partner: 'Co-funding, mentoring, outreach.',
            enmkit: 'Bench, hands-on workshops, mentoring, mini-projects.',
            result: 'Girls’ participation, mini-projects completed.',
          },
          f: {
            name: 'University and research lab',
            goal: 'Applied research: monitoring, efficiency, data.',
            partner: 'Scientific supervision, students.',
            enmkit: 'Bench, experimental protocol, projects.',
            result: 'Documented student and research projects.',
          },
        },
        principleLabel: 'Principle',
        principle: {
          p1: 'Start small',
          p2: 'Train',
          p3: 'Measure',
          p4: 'Learn',
          p5: 'Improve',
          p6: 'Scale up',
        },
      },
      pilot: {
        eyebrow: 'Deployment and impact measurement',
        title: 'A pilot in',
        titleAccent: 'six steps.',
        subtitle:
          'A demonstration pilot in a limited number of institutions, to produce evidence, user feedback and a replicable deployment model.',
        deliverableLabel: 'Deliverable',
        steps: {
          s1: { title: 'Selection', text: 'Institutions, trainers and learner groups.', deliverable: 'List and selection criteria' },
          s2: { title: 'Installation', text: 'Set up and test the bench: SIM card, GSM coverage, electrical safety.', deliverable: 'Bench operational' },
          s3: { title: 'Trainer training', text: 'Hands-on onboarding and handover of the lab sheets.', deliverable: 'Trainers trained' },
          s4: { title: 'Implementation', text: 'Labs, demonstrations, clubs or mini-projects.', deliverable: 'Sessions delivered' },
          s5: { title: 'Measurement', text: 'Learners, practice hours, labs done, outcomes and satisfaction.', deliverable: 'Monitoring data' },
          s6: { title: 'Capitalisation', text: 'Report and documented replication conditions.', deliverable: 'Pilot report' },
        },
        tbdLabel: 'To be defined with the partner',
        tbd: 'Sites and number of institutions, duration, target population, governance and steering committee, risks, success criteria.',
        indicatorsTitle: 'Proposed indicators',
        indicators: {
          sites: 'Institutions equipped',
          trainers: 'Trainers trained',
          learners: 'Learners reached',
          hours: 'Practice hours',
          tps: 'Labs completed',
          girls: 'Share of girls and young women',
          gain: 'Learning outcomes (before / after)',
          projects: 'Mini-projects developed',
          usage: 'Bench usage rate',
          satisfaction: 'Satisfaction',
          replication: 'Replication potential',
        },
        indicatorsNote:
          'Simple tools (logs, before / after tests, short surveys), backed by the app’s timestamped history as an objective usage record.',
      },
      budget: {
        eyebrow: 'Budget framework',
        title: 'A clear unit price,',
        titleAccent: 'a tailored quote.',
        unitLabel: 'Unit cost',
        price: '300,000 FCFA',
        perBench: 'per EnMKit test bench',
        euro: '≈ €457 at the fixed rate of 655.957 FCFA to €1',
        points: {
          p1: 'Related services are invoiced according to the number of benches ordered.',
          p2: 'No overall amount is quoted without a cost basis specific to each project.',
          p3: 'Custom quote on request: number of benches, sites, training programme.',
        },
        itemLabel: 'Item',
        basisLabel: 'Billing basis',
        lines: {
          benches: { name: 'EnMKit test benches', basis: 'Number of benches × 300,000 FCFA' },
          commissioning: { name: 'Commissioning', basis: 'On quote' },
          training: { name: 'Trainer training, lab sheets', basis: 'On quote' },
          logistics: { name: 'Transport and logistics', basis: 'On quote, depending on sites' },
          maintenance: { name: 'Maintenance and support', basis: 'On quote' },
          evaluation: { name: 'Monitoring, evaluation, impact report', basis: 'On quote' },
          local: { name: 'Local costs (SIM cards, SMS)', basis: 'Budgeted by the local partner' },
        },
        quote: 'Request a quote',
      },
      sdg: {
        eyebrow: 'Sustainable Development Goals',
        title: 'Aligned with',
        titleAccent: 'six SDGs.',
        sdgLabel: 'SDG',
        primary: 'Primary',
        secondary: 'Secondary',
        items: {
          sdg4: { name: 'Quality education', text: 'Hands-on TVET and STEM training, technical and digital skills.' },
          sdg7: { name: 'Affordable and clean energy', text: 'Better understanding and control of consumption.' },
          sdg5: { name: 'Gender equality', text: '“Girls and smart energy” programme.' },
          sdg8: { name: 'Decent work and economic growth', text: 'Employability of young technicians and installers.' },
          sdg12: { name: 'Responsible consumption and production', text: 'More sensible use of energy.' },
          sdg13: { name: 'Climate action', text: 'Less wasted consumption: an indirect contribution, not measured in the pilot.' },
        },
      },
      cta: {
        eyebrow: 'Call for partnership',
        title: 'Let’s build',
        titleAccent: 'the first pilot together.',
        subtitle:
          'International organisations, foundations, technical NGOs, schools and universities: let’s talk about your context.',
        button: 'Propose a partnership',
        audiences: {
          funders: 'Funders: co-finance benches and a measured pilot.',
          schools: 'Institutions: host a bench, train trainers and learners.',
          univ: 'Universities: applied research on monitoring, efficiency and data.',
        },
      },
    },
    platform: {
      eyebrow: 'EnMKit platform',
      title: 'Your energy data,',
      titleAccent: 'explained by AI.',
      subtitle:
        'EnMKit kits report their consumption hour by hour over SMS. The platform receives, checks and analyses it, and the mobile app does the same, even offline.',
      ctaContact: 'Discuss your project',
      access: 'Platform access',
      login: 'Sign in',
      grade: {
        title: 'Efficiency score',
        text: 'Each kit gets a grade from A (lean and steady) to E, computed from its hourly readings.',
        best: 'Lean',
        worst: 'To improve',
      },
      flow: {
        eyebrow: 'Architecture',
        title: 'From the meter',
        titleAccent: 'to the dashboard.',
        subtitle: 'One SMS is enough: the kit needs no Internet connection.',
        online: 'Online',
        offline: 'Offline',
        nodes: {
          kit: { title: 'EnMKit kit', text: 'Meter + transmitter: measurement and hourly readings.' },
          gsm: { title: 'GSM network', text: 'Hourly frames sent by SMS.' },
          gateway: { title: 'SMS gateway', text: 'Receives the frames and routes them to the platform.' },
          platform: { title: 'EnMKit platform', text: 'API, database and analytics engine.' },
          dashboard: { title: 'Web dashboard', text: 'Kit monitoring, training sessions, indicators.' },
          assistant: { title: 'AI assistant', text: 'Explains the data in plain language.' },
          app: { title: 'Mobile app', text: 'Control, on-device AI analysis, “Learn” module.' },
        },
        links: {
          sms: 'SMS',
          https: 'HTTPS',
          local: 'SMS received on the phone',
        },
        offlineNote:
          'Without mobile data, the app analyses the received frames on the device, with the same calculations as the platform.',
      },
      ai: {
        eyebrow: 'AI for data management',
        title: 'From raw frame',
        titleAccent: 'to decision.',
        subtitle:
          'Every hour of consumption becomes useful information for an owner, a trainer or a learner.',
        items: {
          quality: { title: 'Data quality', text: 'Completeness, data gaps and suspicious hours flagged before any analysis.' },
          profile: { title: 'Typical profile', text: 'A typical day hour by hour (weekdays and weekends), with night-time base load and peak hour.' },
          anomalies: { title: 'Anomaly detection', text: 'Isolated spikes and persistent night-time drifts flagged automatically.' },
          forecast: { title: 'Forecasts', text: 'Expected consumption for the day and the month, with its estimated cost in FCFA.' },
          score: { title: 'A-E efficiency score', text: 'A readable grade, with the detail of points lost.' },
          recos: { title: 'Recommendations', text: 'Concrete actions, quantified in kWh and FCFA.' },
        },
        tariffNote: 'Cost is estimated from a configurable tariff schedule.',
      },
      assistant: {
        eyebrow: 'Energy assistant',
        title: 'An AI that explains,',
        titleAccent: 'at the right level.',
        subtitle:
          'Online, the assistant answers questions about a kit’s data. Without a connection, an offline answer takes over.',
        audiences: {
          learner: { title: 'Learner', text: 'Understand a kWh, a curve, an anomaly.' },
          owner: { title: 'Owner', text: 'See where the energy goes and how to cut the bill.' },
          trainer: { title: 'Trainer', text: 'Prepare a session and discuss a group’s results.' },
        },
        examplesLabel: 'Example questions',
        examples: {
          q1: 'Why is my night-time consumption rising?',
          q2: 'How much will this month cost?',
          q3: 'What does my kit’s C grade mean?',
        },
      },
      education: {
        eyebrow: 'Energy education',
        title: 'Learning from',
        titleAccent: 'real data.',
        subtitle:
          'The app’s “Learn” module and the trainer dashboard support the Smart Home Learning Lab.',
        app: {
          tag: 'Mobile app',
          title: 'The “Learn” module',
          items: {
            tp: 'Guided lab sheets 1 to 7',
            quiz: 'Quizzes to check learning',
            tips: 'Eco-tips',
            glossary: 'Energy glossary',
            compare: 'A / B scenario comparison on the bench’s real data',
          },
        },
        trainer: {
          tag: 'Web dashboard',
          title: 'The trainer space',
          text: 'Tracking of training sessions and of the pilot’s impact indicators.',
          kpis: {
            learners: 'Learners',
            girls: 'Share of girls',
            hours: 'Practice hours',
            gain: 'Before / after learning gain',
            satisfaction: 'Satisfaction',
          },
        },
        labLink: 'Discover the Learning Lab',
      },
      accessBlock: {
        title: 'Platform access',
        text: 'Owners, trainers and partners: sign in to the EnMKit dashboard.',
        button: 'Sign in',
        soonTitle: 'Platform access',
        soon: 'The online dashboard opens soon. For pilot access or a demo, get in touch.',
        soonButton: 'Request access',
        subject: 'EnMKit platform access',
      },
      cta: {
        title: 'Your kits, your data,',
        titleAccent: 'your decisions.',
        subtitle: 'Deployment, pilot or platform demo: write to us.',
        button: 'Contact us',
      },
    },
    app: {
      eyebrow: 'Mobile app',
      title: 'Your EnMKit kits,',
      titleAccent: 'in your pocket.',
      subtitle:
        'Switch your lines, track your consumption and get your alerts, over the internet or by SMS, even with no data coverage.',
      teaserTitle: 'The EnMKit mobile app',
      teaserText:
        'Switch your lines, check your consumption and manage several homes from a single screen.',
      teaserCta: 'Explore the app',
      download: 'Download the APK',
      clientName: 'EnMKit app (owners)',
      banc: {
        eyebrow: 'Smart Home Learning Lab',
        title: 'Download EnMKit Banc',
        hint: 'The training-bench app: AI analysis, tutor assistant for the 7 labs, quizzes and scenarios. It installs alongside the EnMKit app.',
        download: 'Download EnMKit Banc',
        checksum: 'SHA-256 checksum',
        guide: 'User guide (PDF, French)',
        version: 'Version {{version}} · lines, kit connection, AI analysis, lab tutor',
        footer: 'EnMKit Banc app',
      },
      downloadShort: 'Download',
      downloadHint: 'Android · APK file · manual install',
      clientVersion: 'Version {{version}} · lines, consumption, kit connection',
      directLink: 'Direct download link',
      scanTitle: 'Scan to install',
      scanText:
        'Point your phone camera at this code: it opens the download page directly.',
      androidOnly: 'Android only',
      free: 'Free',
      offline: 'Works without internet',
      installTitle: 'Install in three steps',
      install: {
        s1: { title: 'Download the file', text: 'Tap the button or scan the QR code to get the APK.' },
        s2: { title: 'Allow the install', text: 'Android will ask you to allow apps from this source: accept.' },
        s3: { title: 'Open and pair', text: 'Set your code, then add your kit manually or by scanning a QR code.' },
      },
      featuresTitle: 'What you can do',
      featuresSubtitle: 'Every function of the kit, a few taps away.',
      features: {
        control: { title: 'Line control', text: 'Switch each line on or off, or the whole home in one tap.' },
        consumption: { title: 'Tracked consumption', text: 'Trend curve, latest reading and full history for every kit.' },
        sms: { title: 'SMS control', text: 'Every command also travels by SMS: your kit answers without data.' },
        multisite: { title: 'Several homes', text: 'Manage flats and multiple sites from a single portfolio.' },
        security: { title: 'Protected access', text: 'PIN code, fingerprint and a list of authorised numbers.' },
        qr: { title: 'QR sharing', text: 'Export a kit configuration and import it with a simple scan.' },
      },
      news: {
        eyebrow: 'New',
        title: 'AI and training,',
        titleAccent: 'inside the app.',
        subtitle:
          'Three new spaces to understand consumption and learn by doing.',
        items: {
          analysis: {
            tag: 'Kit tab',
            title: 'AI analysis',
            text: 'Analysis of the kit’s hourly readings, right on the phone, even without Internet.',
            p1: 'Efficiency score from A to E',
            p2: 'Last 48 h curve and typical profile',
            p3: 'Anomalies and data quality',
            p4: 'Day and month forecast, in FCFA',
          },
          learn: {
            tag: 'New tab',
            title: 'Learn',
            text: 'The teaching companion of the Smart Home Learning Lab.',
            p1: 'Guided lab sheets 1 to 7',
            p2: 'Quizzes and best score',
            p3: 'Eco-tips and glossary',
            p4: 'A / B scenario comparison',
          },
          assistant: {
            tag: 'Online, with offline fallback',
            title: 'Energy assistant',
            text: 'An AI that answers questions about the kit’s data.',
            p1: 'Learner, owner and trainer profiles',
            p2: 'Explanations in plain language',
            p3: 'Offline answer when the server is unreachable',
            p4: 'Opened from the “Learn” module',
          },
        },
        platformLink: 'See the platform and AI',
      },
      galleryTitle: 'The app in pictures',
      gallerySubtitle: 'Real screenshots from the EnMKit app.',
      shots: {
        onboarding: 'Guided onboarding',
        parc: 'Your whole portfolio at a glance',
        lignes: 'Line control',
        commandes: 'Instant on / off',
        conso: 'Live consumption',
        config: 'Kit configuration',
        'qr-export': 'Export a kit as a QR code',
        'qr-scan': 'Import by scanning',
        historique: 'Delivery receipts',
        biometrie: 'PIN code and fingerprint',
        reglages: 'Light, dark or auto theme',
        faq: 'Built-in help',
        numeros: 'Authorised numbers',
        sms: 'SMS commands',
      },
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
