import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AwardsGrid from '../components/Awards/AwardsGrid';
import PartnersSection from '../components/Partners/PartnersSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import Enmkit from './Enmkit';
import Contact from './Contact';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: 'Gestion Avancée',
      description: 'Système intelligent de monitoring et optimisation énergétique'
    },
    {
      icon: Shield,
      title: 'Installation Sécurisée',
      description: 'Installation professionnelle en 1h avec garantie 6 mois'
    },
    {
      icon: Users,
      title: 'Impact Social',
      description: '+20 foyers équipés, transformation des communautés rurales'
    },
    {
      icon: TrendingUp,
      title: 'Efficacité Prouvée',
      description: '-14% de consommation énergétique mesurée et vérifiée'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi EnMKit ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une solution complète qui transforme l'accès à l'énergie en Afrique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Enmkit />
      <AwardsGrid />
      <PartnersSection />
      <Contact />
      {/* CTA Section */}
      {/* <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1876bc] to-[#84c450]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à révolutionner votre accès à l'énergie ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez les +20 foyers qui ont déjà fait confiance à EnMKit pour une énergie durable et intelligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1876bc] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/enmkit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Découvrir EnMKit
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;