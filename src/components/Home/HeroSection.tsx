import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Home, Zap, Clock, Play, ChevronDown, Sparkles, TrendingUp } from 'lucide-react';

// Mock translation hook for demonstration
const useTranslation = () => ({
  t: (key: string) => {
    const translations: { [key: string]: string } = {
      'hero.title': 'EnMKit',
      'hero.subtitle': 'Énergie Intelligente',
      'hero.description': 'Révolutionnons ensemble l\'accès à l\'énergie en Afrique avec des solutions innovantes, durables et accessibles pour tous.',
      'hero.cta': 'Découvrir EnMKit',
      'hero.stats.homes': 'Foyers équipés',
      'hero.stats.reduction': 'Réduction conso.',
      'hero.stats.install': 'Installation',
      'hero.stats.warranty': 'Garantie (ans)',
      'hero.watch': 'Voir la démo',
      'hero.scroll': 'Découvrir plus'
    };
    return translations[key] || key;
  }
});

// Mock Link component
const Link = ({ to, children, className, ...props }: any) => (
  <a href={to} className={className} {...props}>{children}</a>
);

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image: 'images/image2.jpg',
      title: 'Innovation Énergétique Africaine',
      subtitle: 'EnMKit révolutionne l\'accès à l\'énergie',
      accent: 'emerald'
    },
    {
      image: 'images/image.png',
      title: 'Solutions Durables',
      subtitle: 'Technology meets sustainability',
      accent: 'blue'
    },
    {
      image: 'slides/slide2.jpg',
      title: 'Impact Concret',
      subtitle: '+20 foyers équipés, -14% consommation',
      accent: 'violet'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { 
      icon: Home, 
      value: '+20', 
      label: t('hero.stats.homes'),
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    { 
      icon: TrendingUp, 
      value: '-14%', 
      label: t('hero.stats.reduction'),
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      icon: Clock, 
      value: '1h', 
      label: t('hero.stats.install'),
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600'
    },
    { 
      icon: Award, 
      value: '6', 
      label: t('hero.stats.warranty'),
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-violet-100/25 to-purple-100/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -60 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-white/90">
                  Innovation Énergétique
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight"
                >
                  <span className="block font-extralight">{t('hero.title')}</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-normal">
                    {t('hero.subtitle')}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg sm:text-xl text-gray-200/90 max-w-2xl leading-relaxed font-light"
                >
                  {t('hero.description')}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/enmkit"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span>{t('hero.cta')}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{t('hero.watch')}</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 60 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.25, 0, 1] }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2 + index * 0.1,
                    ease: [0.25, 0.25, 0, 1]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-white/50 hover:border-white/80 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="text-3xl font-light text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-500 ${
              currentSlide === index 
                ? 'w-8 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full'
            }`}
          >
            {currentSlide === index && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-8 flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <span className="text-sm font-medium mb-2 writing-mode-vertical-rl text-orientation-mixed">
          {t('hero.scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;