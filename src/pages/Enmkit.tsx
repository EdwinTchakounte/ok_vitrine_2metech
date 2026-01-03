import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Zap,
  Eye,
  Settings,
  BarChart3,
  Shield,
  Brain,
  Cloud,
  Activity,
  Wifi,
  TrendingUp,
  MessageCircle,
  Check,
  Sparkles
} from 'lucide-react';

const About = () => {
  const features = [
    { 
      icon: <Eye className="h-5 w-5" />, 
      title: "Monitoring intelligent", 
      description: "Surveillance en temps réel de votre consommation énergétique"
    },
    { 
      icon: <Settings className="h-5 w-5" />, 
      title: "Contrôle à distance", 
      description: "Gérez vos appareils depuis n'importe où via smartphone"
    },
    { 
      icon: <BarChart3 className="h-5 w-5" />, 
      title: "Analytics avancées", 
      description: "Rapports détaillés et insights personnalisés"
    },
    { 
      icon: <Shield className="h-5 w-5" />, 
      title: "Sécurité maximale", 
      description: "Protection avancée contre la fraude et les manipulations"
    },
    { 
      icon: <Brain className="h-5 w-5" />, 
      title: "IA prédictive", 
      description: "Prédiction précise de vos factures futures"
    },
    { 
      icon: <Cloud className="h-5 w-5" />, 
      title: "Cloud sync", 
      description: "Accédez à vos données partout et à tout moment"
    }
  ];

  const installSteps = [
    { step: "01", title: "Diagnostic", description: "Analyse complète de votre installation", icon: <Activity className="h-5 w-5" /> },
    { step: "02", title: "Installation", description: "Pose professionnelle par nos techniciens", icon: <Settings className="h-5 w-5" /> },
    { step: "03", title: "Configuration", description: "Paramétrage et connexion IoT", icon: <Wifi className="h-5 w-5" /> },
    { step: "04", title: "Formation", description: "Prise en main complète de l'application", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const benefits = [
    "Réduction de 40% de la consommation",
    "Détection automatique des anomalies",
    "Alertes en temps réel",
    "Support technique 24/7"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-green-50/20">
      {/* Hero Section */}
    {/* ===== HERO CONTENT ===== */}
<div className="space-y-10">

  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                  bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm">
    <Sparkles className="w-4 h-4 text-blue-600" />
    <span className="text-sm font-semibold text-gray-700">
      Technologie IoT & IA
    </span>
  </div>

  {/* Titre */}
  <div className="space-y-4">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold 
                   tracking-tight text-gray-900">
      EnMKit
    </h1>

    <div className="flex items-center gap-4">
      <span className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-600 to-green-600" />
      <span className="text-sm font-medium text-gray-500">
        Smart Energy Platform
      </span>
    </div>
  </div>

  {/* Slogan */}
  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
    La révolution énergétique intelligente conçue pour
    <span className="font-medium text-gray-800"> l’Afrique</span>
  </p>

  {/* Origine */}
  <p className="flex items-center gap-2 text-sm text-gray-500">
    <Zap className="w-4 h-4 text-green-600" />
    Développée au Cameroun par
    <span className="font-semibold text-gray-700">2MeTech</span>
  </p>

  {/* Stats premium */}
  <div className="flex flex-wrap gap-4 pt-4">
    {[
      { v: "25%", l: "Fraude évitée" },
      { v: "95%", l: "Précision IA" },
      { v: "40%", l: "Économies" },
    ].map((s, i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-5 py-3 
                   rounded-2xl bg-white border border-gray-200 
                   shadow-sm"
      >
        <span className="text-2xl font-bold 
                         bg-gradient-to-r from-blue-600 to-green-600 
                         bg-clip-text text-transparent">
          {s.v}
        </span>
        <span className="text-sm text-gray-600">
          {s.l}
        </span>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div className="pt-6">
    <a
      href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-10 py-5 
                 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 
                 text-white font-semibold 
                 shadow-lg hover:shadow-xl transition"
    >
      <MessageCircle className="w-5 h-5" />
      Nous contacter
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
</div>

{/* ===== HERO IMAGE ===== */}
<motion.div
  initial={{ opacity: 0, x: 24 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="relative"
>
  <div className="absolute -inset-6 bg-gradient-to-r 
                  from-blue-500/20 to-green-500/20 
                  rounded-3xl blur-3xl" />
  <div className="relative bg-white rounded-3xl p-8 
                  shadow-xl border border-gray-200">
    <img
      src="slides/slide2.jpg"
      alt="EnMKit Device"
      className="w-full object-contain"
      style={{ maxHeight: "480px" }}
    />
  </div>
</motion.div>

{/* ================= Section Mission ================= */}
<section className="relative py-28 px-4 bg-white">
  {/* Décor doux */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-gray-200">
          <span className="text-sm font-semibold text-gray-700">
            Notre mission
          </span>
        </div>

        {/* Titre */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Un atout pour{" "}
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            l’Afrique
          </span>
        </h2>

        {/* Description */}
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
          <p>
            EnMKit révolutionne la gestion énergétique en Afrique avec une technologie
            intelligente, conçue pour répondre aux réalités locales.
          </p>
          <p>
            Notre mission est de rendre l’énergie plus accessible, transparente
            et optimisée grâce à l’IoT et à l’analyse de données.
          </p>
        </div>

        {/* Bénéfices */}
        <div className="flex flex-wrap gap-3 pt-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-green-600" />
              {benefit}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
        <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
          <img
            src="images/installation.jpg"
            alt="Installation EnMKit"
            className="w-full object-contain rounded-2xl"
            style={{ maxHeight: "460px" }}
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>






      {/* Section Fonctionnalités */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-100 mb-6">
              <span className="text-sm font-semibold text-gray-700">Fonctionnalités</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Technologie de <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">pointe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un écosystème complet pour transformer votre expérience énergétique et maximiser vos économies
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-5 text-white">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* ================= Section Installation ================= */}
<section className="relative py-28 px-4 bg-white">
  {/* Décor doux */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 mb-6">
        <span className="text-sm font-semibold text-gray-700">
          Installation
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Processus{" "}
        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          simplifié
        </span>
      </h2>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        En moins de 2 heures, profitez d'une installation complète et professionnelle
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Ligne de connexion desktop */}
      <div className="hidden lg:block absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-blue-200 via-green-200 to-blue-200" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        {installSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              
              {/* Accent latéral */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600" />

              {/* Badge step (mobile + desktop safe) */}
              <div
                className="
                  absolute 
                  top-4 left-4 
                  lg:-top-4 lg:left-6
                  px-4 py-1 
                  rounded-full 
                  bg-gradient-to-r from-blue-600 to-green-600 
                  text-white text-xs lg:text-sm font-bold 
                  shadow-md
                "
              >
                {step.step}
              </div>

              {/* Icône */}
              <div className="mt-10 mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white shadow-lg">
                {step.icon}
              </div>

              {/* Texte */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Shape décorative */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* CTA Final */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl opacity-5" />
            <div className="relative bg-white rounded-3xl p-12 lg:p-16 text-center shadow-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Prêt à transformer <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  votre énergie ?
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Rejoignez les milliers d'utilisateurs satisfaits qui ont fait le choix de l'innovation énergétique avec EnMKit
              </p>
              
              <a
                href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                Commencer maintenant
                <ArrowRight className="w-6 h-6" />
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Installation professionnelle
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Support 24/7
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Garantie satisfait
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;