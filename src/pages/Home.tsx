import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AwardsGrid from '../components/Awards/AwardsGrid';
import PartnersSection from '../components/Partners/PartnersSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Sparkles } from 'lucide-react';
import Enmkit from './Enmkit';
import Contact from './Contact';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: 'Gestion Avancée',
      description: 'Système intelligent de monitoring et optimisation énergétique',
      gradient: 'from-yellow-400 via-orange-400 to-orange-500',
      accentColor: 'border-orange-200',
      glowColor: 'shadow-orange-500/10'
    },
    {
      icon: Shield,
      title: 'Installation Sécurisée',
      description: 'Installation professionnelle en 1h avec garantie 6 mois',
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      accentColor: 'border-blue-200',
      glowColor: 'shadow-blue-500/10'
    },
    {
      icon: Users,
      title: 'Impact Social',
      description: '+20 foyers équipés, transformation des communautés rurales',
      gradient: 'from-purple-400 via-purple-500 to-pink-500',
      accentColor: 'border-purple-200',
      glowColor: 'shadow-purple-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Efficacité Prouvée',
      description: '-14% de consommation énergétique mesurée et vérifiée',
      gradient: 'from-green-400 via-green-500 to-emerald-500',
      accentColor: 'border-green-200',
      glowColor: 'shadow-green-500/10'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 relative overflow-hidden bg-white">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-24 lg:py-32 relative bg-gradient-to-b from-white via-slate-50/30 to-white">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mb-6 shadow-lg shadow-blue-500/20">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi EnMKit ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution complète qui transforme l'accès à l'énergie en Afrique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className={`absolute -inset-[1px] bg-gradient-to-b ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className={`relative bg-white backdrop-blur-xl border ${feature.accentColor} rounded-2xl p-8 h-full hover:${feature.glowColor} hover:shadow-2xl transition-all duration-500`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${feature.gradient} opacity-30`}></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gray-200 rounded-tr-lg"></div>
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gray-200 rounded-bl-lg"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-20`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.gradient} transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom decoration line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 border border-slate-700/50 overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    L'Innovation au Service de l'Afrique
                  </h3>
                  <p className="text-lg lg:text-xl text-slate-300 mb-8">
                    Rejoignez la révolution énergétique qui transforme déjà des milliers de vies
                  </p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
                  >
                    Découvrir EnMKit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-20 h-20 border border-slate-700/30 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border border-slate-700/30 rounded-lg rotate-45"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Enmkit />
      <Testimonials/>
      <AwardsGrid />
      <PartnersSection />
      <Contact />
    </div>
  );
};

export default Home;
