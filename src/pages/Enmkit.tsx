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
  Waves
} from 'lucide-react';

const About = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Fraude électrique",
      description: "Détection et prévention des manipulations de compteurs avec alertes en temps réel",
      impact: "Jusqu'à 25% de surcoût évité",
      stats: "25%"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Factures imprévisibles",
      description: "Élimination des surprises sur vos factures mensuelles grâce à la prédiction IA",
      impact: "Prévisions à 95% de précision",
      stats: "95%"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Gaspillage énergétique",
      description: "Identification et réduction automatique des consommations inutiles",
      impact: "40% d'économies moyennes",
      stats: "40%"
    }
  ];

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Monitoring intelligent",
      description: "Visualisation en temps réel de votre consommation avec analyses prédictives avancées",
      details: ["Mesures précises à ±0.5%", "Historique détaillé", "Alertes personnalisées"]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Contrôle automatisé",
      description: "Gestion intelligente de vos appareils avec programmation et optimisation automatique",
      details: ["Contrôle à distance", "Programmation avancée", "Optimisation IA"]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics avancées",
      description: "Rapports détaillés et recommandations personnalisées pour maximiser vos économies",
      details: ["Rapports personnalisés", "Benchmarking", "Recommandations IA"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sécurité maximale",
      description: "Protection contre la fraude et les surtensions avec système d'alerte avancé",
      details: ["Détection fraude", "Protection surtension", "Alertes instantanées"]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligence artificielle",
      description: "Apprentissage automatique de vos habitudes pour une optimisation continue",
      details: ["Apprentissage adaptatif", "Prédictions précises", "Optimisation continue"]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Connectivité totale",
      description: "Synchronisation cloud et intégration avec tous vos appareils connectés",
      details: ["Sync multi-appareils", "API ouverte", "Intégrations tierces"]
    }
  ];

  const installSteps = [
    { 
      step: "01", 
      title: "Diagnostic", 
      description: "Analyse complète de votre installation électrique",
      icon: <Activity className="h-5 w-5" />
    },
    { 
      step: "02", 
      title: "Installation", 
      description: "Pose du dispositif par nos techniciens certifiés",
      icon: <Settings className="h-5 w-5" />
    },
    { 
      step: "03", 
      title: "Configuration", 
      description: "Paramétrage et connexion à l'application",
      icon: <Wifi className="h-5 w-5" />
    },
    { 
      step: "04", 
      title: "Formation", 
      description: "Accompagnement pour une utilisation optimale",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50"></div>
          {/* Subtle geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-green-100 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-200 rounded-full opacity-30"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              EnmKit
            </h1>
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
              className="text-base sm:text-lg text-gray-500"
            >
              Développée au Cameroun par 2metech
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Un atout pour
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  l'Afrique
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  EnmKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux.
                </p>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Notre solution intègre IoT, IA et analyse de données pour une expérience 
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
              <div className="relative">
                <img
                  src="images/installation.jpg"
                  alt="Installation EnmKit"
                  className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section - Flow Design */}
      <section className="py-5 lg:py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Les défis que résout
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EnmKit
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche innovante pour surmonter les obstacles énergétiques majeurs
            </p>
          </motion.div>

          {/* Flowing Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-200 via-green-200 to-blue-200 transform -translate-y-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:relative lg:h-[500px]">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`lg:absolute lg:w-80 ${
                    index === 0
                      ? 'lg:left-8 '
                      : index === 1
                      ? 'lg:right-8 '
                      : 'lg:left-1/2  lg:-ml-40'
                  }`}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600">
                    {problem.icon}
                    </div>
                    <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {problem.stats}
                    </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-xl border border-green-100">
                    <div className="text-sm font-medium text-green-700">
                    {problem.impact}
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Grid Layout */}
      <section className="py-5 lg:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Technologie
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
                className="group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section - Process Flow */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Installation
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                simplifiée
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus fluide et professionnel en moins de 2 heures
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {installSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Connection Point */}
                  <div className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 pt-12 lg:pt-16 hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 mx-auto">
                      {step.icon}
                    </div>
                    
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Prêt pour la
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                révolution ?
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Rejoignez les milliers d'utilisateurs qui ont déjà transformé leur rapport à l'énergie
            </p>
            
             <a
                  href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Commencer maintenant
                </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;