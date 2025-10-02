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
  Check
} from 'lucide-react';

const About = () => {
  const features = [
    { 
      icon: <Eye className="h-5 w-5" />, 
      title: "Monitoring intelligent", 
      description: "Surveillance en temps réel"
    },
    { 
      icon: <Settings className="h-5 w-5" />, 
      title: "Contrôle à distance", 
      description: "Gérez depuis votre smartphone"
    },
    { 
      icon: <BarChart3 className="h-5 w-5" />, 
      title: "Analytics avancées", 
      description: "Rapports détaillés personnalisés"
    },
    { 
      icon: <Shield className="h-5 w-5" />, 
      title: "Sécurité maximale", 
      description: "Protection contre la fraude"
    },
    { 
      icon: <Brain className="h-5 w-5" />, 
      title: "IA prédictive", 
      description: "Prédiction de vos factures"
    },
    { 
      icon: <Cloud className="h-5 w-5" />, 
      title: "Cloud sync", 
      description: "Données accessibles partout"
    }
  ];

  const installSteps = [
    { step: "01", title: "Diagnostic", icon: <Activity className="h-5 w-5" /> },
    { step: "02", title: "Installation", icon: <Settings className="h-5 w-5" /> },
    { step: "03", title: "Configuration", icon: <Wifi className="h-5 w-5" /> },
    { step: "04", title: "Formation", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Technologie IoT + IA</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                EnMKit
              </h1>

              <p className="text-xl md:text-2xl text-gray-600">
                La révolution énergétique intelligente pour l'Afrique
              </p>
              
              <p className="text-base text-gray-500">
                Développée au Cameroun par <span className="font-semibold text-gray-700">2MeTech</span>
              </p>

              {/* Stats inline propres */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">25%</div>
                  <div className="text-sm text-gray-500">Fraude évitée</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-500">Précision IA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">40%</div>
                  <div className="text-sm text-gray-500">Économies</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Image à droite - SANS ZOOM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="slides/slide2.jpg"
                    alt="EnMKit Device"
                    className="w-full h-full object-contain"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-green-50 rounded-full">
                <span className="text-sm font-semibold text-green-600">Notre Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Un atout pour l'Afrique
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  EnMKit révolutionne la gestion énergétique en Afrique avec une technologie 
                  de pointe adaptée aux défis locaux.
                </p>
                <p>
                  Notre solution intègre IoT et analyse de données pour une expérience 
                  énergétique inégalée, conçue par et pour l'Afrique.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">IoT Connecté</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">IA Avancée</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Made in Africa</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="images/installation.jpg"
                    alt="Installation EnMKit"
                    className="w-full h-full object-contain rounded-lg"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-600">Fonctionnalités</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologie de pointe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour optimiser votre énergie
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Installation */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-green-600">Installation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Processus simplifié
            </h2>
            <p className="text-xl text-gray-600">
              En moins de 2 heures, tout est opérationnel
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto text-white">
                  {step.icon}
                </div>
                
                <div className="text-4xl font-bold text-gray-200 mb-2">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Prêt à transformer votre énergie ?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez les milliers d'utilisateurs satisfaits à travers l'Afrique
            </p>
            
            <a
              href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Commencer maintenant
              <ArrowRight className="w-6 h-6" />
            </a>

            <p className="text-sm text-gray-500 pt-4">
              Installation professionnelle • Support 24/7 • Garantie satisfait ou remboursé
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;