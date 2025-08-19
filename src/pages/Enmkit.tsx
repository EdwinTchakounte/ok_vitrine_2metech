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
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Fraude électrique",
      description: "Détection et prévention des manipulations",
      stats: "25%",
      color: "from-red-400 to-orange-500"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Factures imprévisibles", 
      description: "Prédictions IA de haute précision",
      stats: "95%",
      color: "from-blue-500 to-green-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Gaspillage énergétique",
      description: "Optimisation automatique intelligente",
      stats: "40%",
      color: "from-green-500 to-emerald-500"
    }
  ];

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
      {/* Animations électriques en arrière-plan */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Formes électriques animées */}
        <ElectricShape className="top-20 left-10 w-32 h-32" delay={0} />
        <ElectricShape className="top-40 right-20 w-24 h-24" delay={1} />
        <ElectricShape className="bottom-32 left-1/4 w-40 h-40" delay={2} />
        <ElectricShape className="top-1/2 right-1/3 w-28 h-28" delay={1.5} />
        
        {/* Éclairs flottants */}
        <FloatingBolt className="top-1/4 right-1/4" delay={0} />
        <FloatingBolt className="bottom-1/3 left-1/5" delay={1} />
        <FloatingBolt className="top-2/3 right-1/5" delay={2} />
        <FloatingBolt className="top-1/6 left-1/3" delay={0.5} />
        
        {/* Lignes électriques animées */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-green-50/50 to-blue-50/50"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              EnMKit
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-700 mb-4 font-light"
            >
              La révolution énergétique intelligente
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8"
            >
              Développée au Cameroun par 2MeTech
            </motion.p>

            {/* Stats compacts */}
            <motion.div 
              className="flex justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { value: "25%", label: "Fraude évitée" },
                { value: "95%", label: "Précision IA" },
                { value: "40%", label: "Économies" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-green-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Un atout pour
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  l'Afrique
                </span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  EnMKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
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
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                
                <div className="relative w-full h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="images/installation.jpg"
                    alt="Installation EnMKit"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-green-500/20"></div>
                  
                  <Power className="absolute top-4 right-4 w-6 h-6 text-green-500 animate-pulse" />
                  <Battery className="absolute bottom-4 left-4 w-6 h-6 text-blue-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Problèmes */}
      <section className="py-12 relative">
        {/* Animations électriques d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Formes électriques animées */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border-2 border-blue-400/20 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.3, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Éclairs flottants */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-6 h-6 text-blue-400/40" />
            </motion.div>
          ))}
          
          {/* Lignes électriques animées */}
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          />
        </div>
      </section>
        
      {/* Section Fonctionnalités - Liste connectée */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologie <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">révolutionnaire</span>
            </h2>
          </motion.div>

          {/* Liste connectée avec cordes relationnelles */}
          <div className="relative max-w-4xl mx-auto">
            {/* Corde principale verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-blue-500 rounded-full opacity-60" />
            
            {/* Connexions horizontales animées */}
            {features.map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-8 w-16 h-px bg-gradient-to-r from-blue-500 to-green-500"
                style={{ top: `${16 + index * 16.66}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center pl-24 group"
                >
                  {/* Point de connexion */}
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-2 border-white shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  {/* Icône flottante */}
                  <motion.div 
                    className={`bg-gradient-to-br ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center mr-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Installation - Liste connectée */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50/30" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Installation <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">simplifiée</span>
            </h2>
            <p className="text-lg text-gray-600">Processus professionnel en moins de 2 heures</p>
          </motion.div>

          {/* Liste connectée horizontale */}
          <div className="relative max-w-4xl mx-auto">
            {/* Corde principale horizontale */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-full opacity-60" />
            
            {/* Connexions verticales */}
            {installSteps.map((_, index) => (
              <motion.div
                key={index}
                className="hidden md:block absolute top-8 h-16 w-px bg-gradient-to-b from-blue-500 to-green-500"
                style={{ left: `${12.5 + index * 25}%` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-24 md:pt-0">
              {installSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Point de connexion */}
                  <motion.div
                    className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-2 border-white shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  {/* Icône */}
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Numéro */}
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2">
                    {step.step}
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Prêt pour la <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">révolution ?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers d'utilisateurs qui ont transformé leur rapport à l'énergie
            </p>
            
            <motion.a
              href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-lg text-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;