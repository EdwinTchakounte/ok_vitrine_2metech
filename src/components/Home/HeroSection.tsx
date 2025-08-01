import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Home, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'images/image2.jpg',
      title: 'Innovation Énergétique Africaine',
      subtitle: 'EnMKit révolutionne l\'accès à l\'énergie'
    },
    {
      image: 'images/image.png',
      title: 'Solutions Durables',
      subtitle: 'Technology meets sustainability'
    },
    {
      image: 'slides/slide2.jpg',
      title: 'Impact Concret',
      subtitle: '+20 foyers équipés, -14% consommation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: Home, value: '+20', label: t('hero.stats.homes') },
    { icon: Zap, value: '-14%', label: t('hero.stats.reduction') },
    { icon: Clock, value: '1h', label: t('hero.stats.install') },
    { icon: Award, value: '6', label: t('hero.stats.warranty') }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden py-10 px-10">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 "
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* African Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 4,7 1,1 7,7" fill="#84c450" />
              <polygon points="19,10 13,16 10,10 16,16" fill="#1876bc" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#african-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">{t('hero.title')}</span>
              <span className="block text-[#84c450]">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/enmkit"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/awards"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Award className="mr-2 w-5 h-5" />
                Nos Récompenses
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-[#84c450] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-[#84c450]' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;