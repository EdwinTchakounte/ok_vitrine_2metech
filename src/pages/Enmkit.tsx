import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, MessageCircle } from 'lucide-react';
import { 
  Smartphone, 
  Wifi, 
  BarChart3, 
  Shield, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  Download,
  ArrowRight,
  Zap,
  Eye,
  Settings,
  Brain,
  Cloud,
  Battery,
  Gauge,
  CheckCircle,
  Play,
  TrendingUp,
  Activity,
  Waves,
  Power,
  Cpu,
  Radio
} from 'lucide-react';

const About = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-10 w-10" />,
      title: "Fraude électrique",
      description: "Détection et prévention des manipulations de compteurs avec alertes en temps réel",
      impact: "Jusqu'à 25% de surcoût évité",
      stats: "25%",
      color: "from-red-400 to-orange-500"
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Factures imprévisibles",
      description: "Élimination des surprises sur vos factures mensuelles grâce à la prédiction IA",
      impact: "Prévisions à 95% de précision",
      stats: "95%",
      color: "from-blue-500 to-green-500"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Gaspillage énergétique",
      description: "Identification et réduction automatique des consommations inutiles",
      impact: "40% d'économies moyennes",
      stats: "40%",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Monitoring intelligent",
      description: "Visualisation en temps réel de votre consommation",
      details: ["Mesures précises à ±0.5%", "Historique détaillé"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Contrôle à distance",
      description: "Commander vos relais à partir des SMS",
      details: ["Contrôle à distance", "Programmation avancée"],
      gradient: "from-green-500 to-teal-400"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics avancées",
      description: "Rapports détaillés et historique sur votre consommation",
      details: ["Rapports personnalisés"],
      gradient: "from-blue-600 to-green-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité maximale",
      description: "Protection contre la fraude et les surtensions",
      details: ["Détection fraude", "Protection surtension", "Alertes instantanées"],
      gradient: "from-emerald-500 to-blue-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Analyse de donnée",
      description: "Apprentissage automatique de vos habitudes pour une optimisation continue",
      details: ["Apprentissage adaptatif", "Prédictions précises", "Optimisation continue"],
      gradient: "from-green-600 to-blue-600"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Connectivité totale",
      description: "Synchronisation et intégration avec tous vos appareils connectés",
      details: ["Sync multi-appareils", "API ouverte", "Intégrations tierces"],
      gradient: "from-cyan-500 to-green-500"
    }
  ];

  const installSteps = [
    { 
      step: "01", 
      title: "Diagnostic", 
      description: "Analyse complète de votre installation électrique",
      icon: <Activity className="h-8 w-8" />,
      color: "from-blue-500 to-green-500"
    },
    { 
      step: "02", 
      title: "Installation", 
      description: "Pose du dispositif par nos techniciens certifiés",
      icon: <Settings className="h-8 w-8" />,
      color: "from-green-500 to-blue-500"
    },
    { 
      step: "03", 
      title: "Configuration", 
      description: "Paramétrage et connexion à l'application",
      icon: <Wifi className="h-8 w-8" />,
      color: "from-blue-600 to-green-600"
    },
    { 
      step: "04", 
      title: "Formation", 
      description: "Accompagnement pour une utilisation optimale",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-green-600 to-blue-600"
    }
  ];

  // Composant pour les circuits électriques animés
  const ElectricCircuit = ({ className = "" }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <motion.path
        d="M20 20 L180 20 L180 60 L140 60 L140 100 L180 100 L180 140 L60 140 L60 180 L20 180 Z"
        stroke="url(#circuitGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="4"
        fill="#10B981"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="150"
        cy="100"
        r="4"
        fill="#3B82F6"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </svg>
  );

  // Composant pour les éclairs électriques
  const ElectricBolt = ({ className = "" }) => (
    <motion.div
      className={`absolute ${className}`}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <Zap className="w-8 h-8 text-blue-400" />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 relative overflow-hidden">
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Éléments électriques en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuits électriques animés */}
        <ElectricCircuit className="top-10 left-10 w-32 h-32 opacity-20" />
        <ElectricCircuit className="top-20 right-20 w-40 h-40 opacity-15 rotate-45" />
        <ElectricCircuit className="bottom-20 left-1/4 w-36 h-36 opacity-18 -rotate-12" />
        
        {/* Éclairs électriques */}
        <div className="absolute top-1/4 right-1/3">
          <Zap className="w-8 h-8 text-blue-400 opacity-30" />
        </div>
        <div className="absolute bottom-1/3 left-1/4">
          <Zap className="w-8 h-8 text-green-400 opacity-30" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <Zap className="w-8 h-8 text-blue-500 opacity-25" />
        </div>
        
        {/* Grille électrique de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-blue-300/30"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: i * 0.02
                }}
              />
            ))}
          </div>
        </div>

        {/* Particules d'énergie flottantes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section avec thème électrique */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Effet d'énergie pulsante */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-green-50/50 to-blue-50/50"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo avec effet électrique */}
            <motion.div
              className="relative mb-8"
              animate={{ 
                textShadow: [
                  "0 0 20px #3B82F6",
                  "0 0 40px #10B981", 
                  "0 0 20px #3B82F6"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                EnMKit
              </h1>
              {/* Effet de circuit autour du logo */}
              <div className="absolute -inset-4 border-2 border-gradient-to-r from-blue-500/30 to-green-500/30 rounded-lg opacity-50">
                <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 font-light"
            >
              La révolution énergétique intelligente
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-600"
            >
              Développée au Cameroun par 2MeTech
            </motion.p>
          </motion.div>
        </div>

        {/* Indicateur de scroll électrique */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center bg-gradient-to-b from-blue-100/50 to-green-100/50 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-4 bg-gradient-to-b from-blue-400 to-green-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section Mission avec éléments électriques */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 relative"
            >
              {/* Circuit décoratif */}
              <div className="absolute -left-8 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full opacity-30"></div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Un atout pour
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  l'Afrique
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  EnMKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux.
                </p>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Notre solution intègre IoT et analyse de données pour une expérience 
                  énergétique inégalée, conçue par et pour l'Afrique.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Effet électrique autour de l'image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src="images/installation.jpg"
                  alt="Installation EnMKit"
                  className="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-green-500/20 rounded-3xl"></div>
                
                {/* Éléments électriques flottants */}
                <Power className="absolute top-4 right-4 w-8 h-8 text-green-400 animate-pulse" />
                <Battery className="absolute bottom-4 left-4 w-8 h-8 text-blue-400 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Problèmes avec design électrique */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-green-50/20 to-blue-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Les défis que résout
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                EnMKit
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche innovante pour surmonter les obstacles énergétiques majeurs
            </p>
          </motion.div>

          {/* Design en réseau électrique */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connexions électriques animées */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="electricConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M 200 150 Q 400 100 600 150 Q 400 200 200 150" 
                fill="none" 
                stroke="url(#electricConnection)" 
                strokeWidth="3"
                className="hidden lg:block"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
            
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative" style={{ zIndex: 1 }}>
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  className="relative group"
                >
                  {/* Halo électrique */}
                  <motion.div 
                    className={`absolute -inset-6 bg-gradient-to-r ${problem.color} rounded-full blur-xl opacity-20 group-hover:opacity-40`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Forme hexagonale électrique */}
                  <div 
                    className={`relative bg-gradient-to-br ${problem.color} p-8 shadow-2xl transition-all duration-500 group-hover:shadow-3xl border-2 border-blue-200/50 group-hover:border-green-300/70`}
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                      minHeight: "320px"
                    }}
                  >
                    <div className="flex flex-col items-center text-center h-full justify-center text-white">
                      {/* Icône avec effet électrique */}
                      <motion.div 
                        className={`bg-gradient-to-r ${problem.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white shadow-lg relative`}
                        animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.5)", "0 0 40px rgba(16,185,129,0.5)", "0 0 20px rgba(59,130,246,0.5)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {problem.icon}
                        {/* Particules d'énergie */}
                        <div className="absolute -inset-2">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              style={{
                                left: `${25 + i * 25}%`,
                                top: `${25 + i * 25}%`,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Stats avec effet néon */}
                      <motion.div 
                        className="text-5xl font-black text-white mb-4"
                        animate={{ 
                          textShadow: [
                            "0 0 10px rgba(59,130,246,0.5)",
                            "0 0 20px rgba(16,185,129,0.5)",
                            "0 0 10px rgba(59,130,246,0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {problem.stats}
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">
                        {problem.title}
                      </h3>
                      
                      <p className="text-sm text-white/80 mb-4 leading-relaxed">
                        {problem.description}
                      </p>
                      
                      <div className={`bg-gradient-to-r ${problem.color} bg-opacity-10 px-4 py-2 rounded-full border border-white/20`}>
                        <div className={`text-xs font-medium text-white`}>
                          {problem.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités avec design de circuit */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Technologie
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                révolutionnaire
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Six piliers technologiques pour une expérience énergétique sans précédent
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 2
                }}
                className="group relative"
              >
                {/* Forme de circuit électronique */}
                <div 
                  className={`relative bg-gradient-to-br ${feature.gradient} p-8 shadow-2xl transition-all duration-500 group-hover:shadow-3xl border-2 border-blue-500/30 group-hover:border-green-500/50`}
                  style={{
                    clipPath: "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
                    minHeight: "300px"
                  }}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center text-white relative">
                    {/* Connexions électriques décoratives */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                    
                    {/* Icône avec effet de circuit */}
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(255,255,255,0.3)",
                          "0 0 40px rgba(255,255,255,0.5)",
                          "0 0 20px rgba(255,255,255,0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {feature.icon}
                      {/* Particules d'innovation */}
                      <motion.div
                        className="absolute -inset-4 border border-white/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm opacity-90 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Points clés avec puces électriques */}
                    <div className="space-y-1">
                      {feature.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-center text-xs opacity-80">
                          <motion.div 
                            className="w-2 h-2 bg-white rounded-full mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                          />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Installation avec timeline électrique */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/20 to-green-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Installation
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                simplifiée
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus fluide et professionnel en moins de 2 heures
            </p>
          </motion.div>

          {/* Timeline électrique */}
          <div className="relative">
            {/* Ligne de connexion électrique animée */}
            <motion.div 
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-green-500 via-blue-500 to-green-500 rounded-full transform -translate-y-1/2 opacity-60"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {installSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Point de connexion électrique pulsant */}
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <motion.div 
                      className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full border-4 border-white shadow-xl relative`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 20px rgba(59,130,246,0.5)",
                          "0 0 40px rgba(16,185,129,0.5)",
                          "0 0 20px rgba(59,130,246,0.5)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {/* Éclairs miniatures */}
                      <Zap className="absolute inset-0 w-4 h-4 m-auto text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Carte avec design électronique */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10
                    }}
                    className="relative bg-white p-8 shadow-2xl border border-blue-200/50 group-hover:border-green-300/70 transition-all duration-500"
                    style={{ 
                      clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
                      minHeight: "280px"
                    }}
                  >
                    {/* Circuits décoratifs */}
                    <div className="absolute top-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-green-300/40 to-transparent"></div>
                    
                    {/* Icône avec effet électrique */}
                    <motion.div 
                      className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white shadow-lg mx-auto transform group-hover:scale-110 transition-transform duration-300 relative`}
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59,130,246,0.5)",
                          "0 0 40px rgba(16,185,129,0.5)",
                          "0 0 20px rgba(59,130,246,0.5)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {step.icon}
                      {/* Orbite électronique */}
                      <motion.div
                        className="absolute -inset-6 border border-white/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <div className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3 text-center`}>
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action avec design futuriste */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background électrique */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
          {/* Grille électrique animée */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
                linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Éclairs décoratifs */}
          <motion.div 
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute -top-32 -right-32 w-96 h-96"
          >
            <Zap className="w-full h-full text-blue-200/20" />
          </motion.div>
          <motion.div 
            animate={{ 
              rotate: [360, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute -bottom-32 -left-32 w-96 h-96"
          >
            <Power className="w-full h-full text-green-200/20" />
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-900"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(59,130,246,0.3)",
                  "0 0 40px rgba(16,185,129,0.3)",
                  "0 0 20px rgba(59,130,246,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Prêt pour la
              <span className="block bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 bg-clip-text text-transparent">
                révolution ?
              </span>
            </motion.h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Rejoignez les milliers d'utilisateurs qui ont déjà transformé leur rapport à l'énergie
            </p>
            
            <motion.a
              href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-2xl text-lg group relative overflow-hidden"
            >
              {/* Effet électrique sur le bouton */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Commencer maintenant
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;