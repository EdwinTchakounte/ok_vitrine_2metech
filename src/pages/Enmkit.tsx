import React from "react";
import { motion } from "framer-motion";
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
  Sparkles,
} from "lucide-react";

const About = () => {
  const features = [
    { icon: <Eye className="w-5 h-5" />, title: "Monitoring intelligent", description: "Surveillance en temps réel de votre consommation énergétique." },
    { icon: <Settings className="w-5 h-5" />, title: "Contrôle à distance", description: "Pilotage de vos équipements depuis votre smartphone." },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Analyses avancées", description: "Données claires et rapports exploitables." },
    { icon: <Shield className="w-5 h-5" />, title: "Sécurité renforcée", description: "Protection contre la fraude et les anomalies." },
    { icon: <Brain className="w-5 h-5" />, title: "IA prédictive", description: "Anticipation intelligente de vos factures." },
    { icon: <Cloud className="w-5 h-5" />, title: "Synchronisation cloud", description: "Accès sécurisé à vos données partout." },
  ];

  const installSteps = [
    { step: "01", title: "Diagnostic", description: "Analyse complète de votre installation.", icon: <Activity className="w-5 h-5" /> },
    { step: "02", title: "Installation", description: "Pose professionnelle certifiée.", icon: <Settings className="w-5 h-5" /> },
    { step: "03", title: "Configuration", description: "Connexion IoT et paramétrage sécurisé.", icon: <Wifi className="w-5 h-5" /> },
    { step: "04", title: "Formation", description: "Prise en main complète.", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const benefits = [
    "Réduction jusqu’à 40%",
    "Alertes intelligentes",
    "Détection des anomalies",
    "Support 24/7",
  ];

  return (
    <div className="relative">

      {/* BACKGROUND CARREAUX */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-20 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-sm font-semibold text-blue-700">
              <Sparkles className="w-4 h-4 text-green-600" />
              Technologie IoT & IA
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="block text-blue-900">EnMKit</span>
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Smart Energy Platform
                </span>
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-full" />
            </div>

            <p className="text-xl text-blue-800/80 max-w-xl leading-relaxed">
              La gestion énergétique intelligente pensée pour
              <span className="font-semibold text-blue-900"> l’Afrique</span>.
            </p>

            <p className="flex items-center gap-2 text-sm text-blue-700">
              <Zap className="w-4 h-4 text-green-600" />
              Développée au Cameroun par <span className="font-semibold">2MeTech</span>
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "25%", l: "Fraude évitée" },
                { v: "95%", l: "Précision IA" },
                { v: "40%", l: "Économies" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {s.v}
                  </p>
                  <p className="text-sm text-blue-700">{s.l}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/237696372245"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold shadow hover:shadow-lg transition"
            >
              <MessageCircle className="w-5 h-5" />
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md"
          >
            <img src="slides/slide2.jpg" alt="EnMKit" className="w-full object-contain" />
          </motion.div>
        </div>
      </section>

      {/* ================= FONCTIONNALITÉS ================= */}
      <section className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 lg:mb-14 space-y-4">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
              Fonctionnalités
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Une technologie <span className="text-green-600">utile</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 bg-blue-50/40 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-green-600 text-white flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-sm text-blue-700">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTALLATION ================= */}
      <section className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 lg:mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Installation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-3">
              Simple. Rapide. Fiable.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <span className="text-xs font-bold text-green-600">{s.step}</span>
                <div className="w-14 h-14 mt-5 mb-5 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 text-white flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-blue-700">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Passez à une énergie plus intelligente
          </h2>
          <p className="text-lg text-blue-700">
            Réduisez vos coûts et prenez le contrôle.
          </p>
          <a
            href="https://wa.me/237696372245"
            className="inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold shadow hover:shadow-lg transition"
          >
            <MessageCircle className="w-5 h-5" />
            Commencer maintenant
          </a>

          <div className="flex justify-center gap-6 text-sm text-blue-700 pt-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
