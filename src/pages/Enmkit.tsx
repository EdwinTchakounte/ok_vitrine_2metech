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
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-100">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Technologie IoT + IA</span>
              </div>

              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-4">
                  EnMKit
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-full" />
              </div>

              <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                La révolution énergétique intelligente pour l'Afrique
              </p>
              
              <p className="text-lg text-gray-500 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                Développée au Cameroun par <span className="font-semibold text-gray-700">2MeTech</span>
              </p>

              {/* Stats inline propres */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-100 shadow-sm">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">25%</div>
                  <div className="text-sm text-gray-600 mt-1">Fraude évitée</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-100 shadow-sm">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-600 mt-1">Précision IA</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-100 shadow-sm">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">40%</div>
                  <div className="text-sm text-gray-600 mt-1">Économies</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Image à droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="images/kit.jpg"
                      alt="EnMKit Device"
                      className="w-full h-full object-contain"
                      style={{ maxHeight: '500px' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-24 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100">
                <span className="text-sm font-semibold text-gray-700">Notre Mission</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Un atout pour
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  l'Afrique
                </span>
              </h2>
              
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  EnMKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux. Notre mission est de rendre l'énergie 
                  accessible, transparente et optimisée pour tous.
                </p>
                <p>
                  Notre solution intègre IoT et analyse de données pour une expérience 
                  énergétique inégalée, conçue par et pour l'Afrique, avec une compréhension 
                  profonde des réalités du continent.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="images/installation.jpg"
                      alt="Installation EnMKit"
                      className="w-full h-full object-contain rounded-2xl"
                      style={{ maxHeight: '450px' }}
                    />
                  </div>
                </div>
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

      {/* Section Installation */}
      <section className="py-24 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 mb-6">
              <span className="text-sm font-semibold text-gray-700">Installation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Processus <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">simplifié</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En moins de 2 heures, profitez d'une installation complète et professionnelle
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
                    {step.icon}
                  </div>
                  
                  <div className="text-6xl font-black text-gray-100 mb-3">
                    {step.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecteur */}
                {index < installSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
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