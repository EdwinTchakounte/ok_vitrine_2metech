import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AwardsGrid from '../components/Awards/AwardsGrid';
import PartnersSection from '../components/Partners/PartnersSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Sparkles, Battery, Lightbulb, Globe } from 'lucide-react';
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
      color: 'from-yellow-400 to-orange-500',
      bgPattern: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'Installation Sécurisée',
      description: 'Installation professionnelle en 1h avec garantie 6 mois',
      color: 'from-blue-500 to-cyan-400',
      bgPattern: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Impact Social',
      description: '+20 foyers équipés, transformation des communautés rurales',
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Efficacité Prouvée',
      description: '-14% de consommation énergétique mesurée et vérifiée',
      color: 'from-green-500 to-emerald-400',
      bgPattern: 'bg-green-50'
    }
  ];

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="pt-16 lg:pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-green-400/10 blur-sm"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.left}%`,
              top: '100%',
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <HeroSection />
      
      {/* Enhanced Features Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Section Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-green-700 bg-clip-text text-transparent mb-6">
              Pourquoi EnMKit ?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une solution complète qui transforme l'accès à l'énergie en Afrique
            </p>
            
            {/* Electric pulse line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className={`relative ${feature.bgPattern} backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center h-full shadow-lg hover:shadow-2xl transition-all duration-500`}>
                  {/* Animated Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <feature.icon className="w-10 h-10 text-white relative z-10" />
                    
                    {/* Electric sparks */}
                    <motion.div
                      className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom decoration */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4">
                  <Battery className="w-8 h-8" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                  <Globe className="w-10 h-10" />
                </div>
              </div>

              <div className="relative z-10">
                <motion.h3
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-2xl lg:text-3xl font-bold mb-4"
                >
                  L'Innovation au Service de l'Afrique
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto"
                >
                  Rejoignez la révolution énergétique qui transforme déjà des milliers de vies
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-8"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Découvrir EnMKit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
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