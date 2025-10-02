import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle,
  DollarSign,
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
  Power,
  Battery
} from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Eye className="h-6 w-6" />, title: "Monitoring intelligent", gradient: "from-blue-500 to-cyan-400" },
    { icon: <Settings className="h-6 w-6" />, title: "Contrôle à distance", gradient: "from-green-500 to-teal-400" },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Analytics avancées", gradient: "from-purple-500 to-pink-400" },
    { icon: <Shield className="h-6 w-6" />, title: "Sécurité maximale", gradient: "from-emerald-500 to-blue-500" },
    { icon: <Brain className="h-6 w-6" />, title: "IA prédictive", gradient: "from-indigo-500 to-purple-500" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud sync", gradient: "from-cyan-500 to-blue-500" }
  ];

  const installSteps = [
    { step: "01", title: "Diagnostic", icon: <Activity className="h-6 w-6" /> },
    { step: "02", title: "Installation", icon: <Settings className="h-6 w-6" /> },
    { step: "03", title: "Configuration", icon: <Wifi className="h-6 w-6" /> },
    { step: "04", title: "Formation", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  // Composant pour les formes électriques animées
  const ElectricShape = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-sm" />
    </motion.div>
  );

  // Éclairs électriques flottants
  const FloatingBolt = ({ className, delay = 0 }) => (
    <motion.div
      className={`absolute ${className}`}
      animate={{ 
        y: [0, -20, 0],
        opacity: [0.2, 0.8, 0.2],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <Zap className="w-6 h-6 text-blue-400/40" />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animations électriques subtiles en arrière-plan */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {/* Formes électriques animées */}
        <ElectricShape className="top-20 left-10 w-32 h-32" delay={0} />
        <ElectricShape className="top-40 right-20 w-24 h-24" delay={1} />
        <ElectricShape className="bottom-32 left-1/4 w-40 h-40" delay={2} />
        
        {/* Éclairs flottants */}
        <FloatingBolt className="top-1/4 right-1/4" delay={0} />
        <FloatingBolt className="bottom-1/3 left-1/5" delay={1} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-green-50/30"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                EnM<span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Kit</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl text-gray-700 font-light"
              >
                La révolution énergétique intelligente
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base text-gray-500"
              >
                Développée au Cameroun par 2MeTech
              </motion.p>

              {/* Stats inline */}
              <motion.div 
                className="flex gap-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { value: "25%", label: "Fraude évitée" },
                  { value: "95%", label: "Précision IA" },
                  { value: "40%", label: "Économies" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image à droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-8 aspect-square flex items-center justify-center">
                  <img
                    src="images/kit.jpg"
                    alt="EnMKit Device"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Section Mission */}
      <section className="py-24 relative bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Un atout pour
                <span className="block text-blue-600 mt-2">
                  l'Afrique
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  EnMKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux.
                </p>
                <p>
                  Notre solution intègre IoT et analyse de données pour une expérience 
                  énergétique inégalée, conçue par et pour l'Afrique.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-6">
                  <img
                    src="images/installation.jpg"
                    alt="Installation EnMKit"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités - Grille moderne */}
      <section className="py-24 relative bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologie <span className="text-blue-600">révolutionnaire</span>
            </h2>
            <p className="text-gray-500 text-lg">Des fonctionnalités pensées pour vous</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Installation - Moderne */}
      <section className="py-24 relative bg-gray-50">
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Installation <span className="text-green-600">simplifiée</span>
            </h2>
            <p className="text-lg text-gray-500">Processus professionnel en moins de 2 heures</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  {/* Icône */}
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Numéro */}
                  <div className="text-5xl font-bold text-gray-200 mb-2">
                    {step.step}
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
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

      {/* Call to Action */}
      <section className="py-24 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Prêt pour la <span className="text-green-600">révolution ?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez les milliers d'utilisateurs qui ont transformé leur rapport à l'énergie
            </p>
            
            <motion.a
              href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg group"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Commencer maintenant
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;