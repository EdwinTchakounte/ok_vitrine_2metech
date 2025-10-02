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
  Sparkles,
  Lock,
  Gauge
} from 'lucide-react';

const About = () => {
  const features = [
    { 
      icon: <Eye className="h-6 w-6" />, 
      title: "Monitoring intelligent", 
      description: "Surveillance en temps réel de votre consommation",
      gradient: "from-blue-500 to-cyan-400" 
    },
    { 
      icon: <Settings className="h-6 w-6" />, 
      title: "Contrôle à distance", 
      description: "Gérez vos appareils depuis votre smartphone",
      gradient: "from-green-500 to-teal-400" 
    },
    { 
      icon: <BarChart3 className="h-6 w-6" />, 
      title: "Analytics avancées", 
      description: "Rapports détaillés et insights personnalisés",
      gradient: "from-purple-500 to-pink-400" 
    },
    { 
      icon: <Shield className="h-6 w-6" />, 
      title: "Sécurité maximale", 
      description: "Protection contre la fraude et les manipulations",
      gradient: "from-emerald-500 to-blue-500" 
    },
    { 
      icon: <Brain className="h-6 w-6" />, 
      title: "IA prédictive", 
      description: "Prédiction précise de vos factures futures",
      gradient: "from-indigo-500 to-purple-500" 
    },
    { 
      icon: <Cloud className="h-6 w-6" />, 
      title: "Cloud sync", 
      description: "Accédez à vos données partout, tout le temps",
      gradient: "from-cyan-500 to-blue-500" 
    }
  ];

  const installSteps = [
    { step: "01", title: "Diagnostic", description: "Analyse de votre installation", icon: <Activity className="h-6 w-6" /> },
    { step: "02", title: "Installation", description: "Pose par nos techniciens", icon: <Settings className="h-6 w-6" /> },
    { step: "03", title: "Configuration", description: "Paramétrage personnalisé", icon: <Wifi className="h-6 w-6" /> },
    { step: "04", title: "Formation", description: "Prise en main complète", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const stats = [
    { value: "25%", label: "Fraude évitée", icon: <Lock className="w-5 h-5" /> },
    { value: "95%", label: "Précision IA", icon: <Brain className="w-5 h-5" /> },
    { value: "40%", label: "Économies", icon: <Gauge className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background avec image floue */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] opacity-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img src="images/kit.jpg" alt="" className="w-full h-full object-cover blur-3xl" />
        </motion.div>
        <motion.div 
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] opacity-10"
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <img src="images/installation.jpg" alt="" className="w-full h-full object-cover blur-3xl" />
        </motion.div>
        
        {/* Formes géométriques modernes */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-green-500/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-full border border-blue-200/50 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Propulsé par l'IA</span>
              </motion.div>

              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                EnM
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                    Kit
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl text-gray-700 font-light leading-relaxed"
              >
                La révolution énergétique intelligente
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-500 flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-green-600" />
                Développée au Cameroun par <strong className="text-gray-700">2MeTech</strong>
              </motion.p>

              {/* Stats cards */}
              <motion.div 
                className="grid grid-cols-3 gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-gray-200/50 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-2 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.a
                  href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  Démarrer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image à droite avec effet moderne */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Cercles décoratifs en arrière-plan */}
              <motion.div
                className="absolute -inset-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Carte principale avec l'image */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-gray-200/50 p-8">
                <div className="aspect-square flex items-center justify-center relative">
                  <motion.img
                    src="images/kit.jpg"
                    alt="EnMKit Device"
                    className="w-full h-full object-contain relative z-10"
                    animate={{ 
                      y: [0, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Points lumineux flottants */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${15 + i * 25}%`
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Badge flottant */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl font-bold"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                Innovation 2025
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator moderne */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 font-medium">Défiler</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section Mission avec design asymétrique */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Notre Mission
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Un atout pour
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-2">
                  l'Afrique
                </span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  EnMKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Notre solution intègre IoT et analyse de données pour une expérience 
                  énergétique inégalée, conçue par et pour l'Afrique.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200 shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">IoT Connecté</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200 shadow-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">IA Avancée</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-[3rem] blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-gray-200/50 p-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="images/installation.jpg"
                    alt="Installation EnMKit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Badges flottants avec statistiques */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl border border-gray-200"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Sécurisé</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités avec design en bento grid */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Fonctionnalités
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-4">
              Technologie <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">révolutionnaire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des fonctionnalités pensées pour transformer votre expérience énergétique
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Installation avec timeline moderne */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Installation
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-4">
              Processus <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">simplifié</span>
            </h2>
            <p className="text-xl text-gray-600">
              Moins de 2 heures pour une transformation complète
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <div className="text-6xl font-black text-gray-100 mb-3 text-center">
                    {step.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center text-sm">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connecteur animé */}
                {index < installSteps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final avec design premium */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-[3rem] p-1 shadow-2xl"
          >
            <div className="bg-white rounded-[2.8rem] p-12 lg:p-16 text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-8 flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Prêt pour la <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">révolution ?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Rejoignez les milliers d'utilisateurs qui ont transformé leur rapport à l'énergie avec EnMKit
              </p>
              
              <motion.a
                href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                <MessageCircle className="w-7 h-7" />
                Commencer maintenant
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <p className="text-sm text-gray-500 mt-8">
                ⚡ Installation gratuite • 💯 Satisfaction garantie • 🔒 Paiement sécurisé
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;