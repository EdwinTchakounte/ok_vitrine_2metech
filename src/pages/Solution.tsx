import React from 'react';
import { Link } from 'react-router-dom';
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
  Play
} from 'lucide-react';

const Solution = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Fraude électrique",
      description: "Détection et prévention des manipulations de compteurs avec alertes en temps réel",
      impact: "Jusqu'à 25% de surcoût évité",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Factures imprévisibles",
      description: "Élimination des surprises sur vos factures mensuelles grâce à la prédiction IA",
      impact: "Prévisions à 95% de précision",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Gaspillage énergétique",
      description: "Identification et réduction automatique des consommations inutiles",
      impact: "40% d'économies moyennes",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  const features = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Monitoring intelligent",
      description: "Visualisation en temps réel de votre consommation avec analyses prédictives avancées",
      details: ["Mesures précises à ±0.5%", "Historique détaillé", "Alertes personnalisées"],
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Contrôle automatisé",
      description: "Gestion intelligente de vos appareils avec programmation et optimisation automatique",
      details: ["Contrôle à distance", "Programmation avancée", "Optimisation IA"],
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics avancées",
      description: "Rapports détaillés et recommandations personnalisées pour maximiser vos économies",
      details: ["Rapports personnalisés", "Benchmarking", "Recommandations IA"],
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité maximale",
      description: "Protection contre la fraude et les surtensions avec système d'alerte avancé",
      details: ["Détection fraude", "Protection surtension", "Alertes instantanées"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Intelligence artificielle",
      description: "Apprentissage automatique de vos habitudes pour une optimisation continue",
      details: ["Apprentissage adaptatif", "Prédictions précises", "Optimisation continue"],
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Connectivité totale",
      description: "Synchronisation cloud et intégration avec tous vos appareils connectés",
      details: ["Sync multi-appareils", "API ouverte", "Intégrations tierces"],
      gradient: "from-cyan-500 to-cyan-600"
    }
  ];

  const techSpecs = [
    {
      category: "Connectivité",
      specs: [
        { label: "Wi-Fi", value: "802.11ac dual-band" },
        { label: "Bluetooth", value: "5.2 Low Energy" },
        { label: "4G/5G", value: "Backup automatique" },
        { label: "Ethernet", value: "Gigabit (optionnel)" }
      ]
    },
    {
      category: "Mesures",
      specs: [
        { label: "Précision", value: "±0.5% classe 1" },
        { label: "Plage tension", value: "90-280V AC" },
        { label: "Plage courant", value: "0-100A" },
        { label: "Fréquence", value: "50/60Hz auto" }
      ]
    },
    {
      category: "Sécurité",
      specs: [
        { label: "Protection", value: "IP65 étanche" },
        { label: "Température", value: "-20°C à +70°C" },
        { label: "Certification", value: "CE, FCC, IC" },
        { label: "Garantie", value: "5 ans constructeur" }
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-accent-400" />
              <span className="text-white/90 text-sm font-medium">Solution EnmKit</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              La révolution{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                énergétique
              </span>{' '}
              intelligente
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              EnmKit combine monitoring avancé, contrôle intelligent et IA pour transformer 
              votre relation avec l'énergie. Une technologie de pointe développée au Cameroun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-2xl hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:scale-105">
                <Play className="mr-3 h-5 w-5" />
                <Link
                  to="https://youtu.be/9IIHCJs5RWc?si=UIw04_euqjkTXRTD"
                >
                  Voir la démo interactive
                 </Link>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Demander un devis
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8294616/pexels-photo-8294616.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="EnmKit Dashboard Interface"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary-500 p-2 rounded-lg">
                  <Battery className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-neutral-900">2.4 kW</div>
                  <div className="text-sm text-neutral-600">Consommation actuelle</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <Gauge className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-neutral-900">-38%</div>
                  <div className="text-sm text-neutral-600">vs mois dernier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span>Défis énergétiques</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Les problèmes que résout{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                EnmKit
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              EnmKit s'attaque aux défis majeurs de la gestion énergétique domestique 
              en Afrique avec des solutions technologiques de pointe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${problem.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {problem.description}
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-xl">
                  <div className="text-sm font-semibold text-primary-700">
                    Impact : {problem.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="h-4 w-4" />
              <span>Fonctionnalités avancées</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Une technologie{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                révolutionnaire
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              EnmKit intègre les dernières innovations en IoT, IA et analyse de données 
              pour vous offrir une expérience énergétique inégalée.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-neutral-50 to-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-primary-200 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle className="h-4 w-4 text-secondary-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Installation Process */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Installation{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                simplifiée
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Nos techniciens certifiés installent EMKit en moins de 2 heures, 
              sans interruption de votre alimentation électrique.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic", description: "Analyse de votre installation électrique" },
              { step: "02", title: "Installation", description: "Pose du dispositif EnmKit par nos experts" },
              { step: "03", title: "Configuration", description: "Paramétrage et connexion à l'application" },
              { step: "04", title: "Formation", description: "Prise en main et optimisation personnalisée" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Découvrez EMKit  en action
            
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Téléchargez notre brochure technique complète ou demandez une démonstration 
            personnalisée avec nos experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-2xl hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:scale-105">
              <Download className="mr-3 h-5 w-5" />
              Télécharger la brochure
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Demander une démo
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;