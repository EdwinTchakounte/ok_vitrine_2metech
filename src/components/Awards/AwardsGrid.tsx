import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Calendar, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause,
  ExternalLink
} from 'lucide-react';
import { Award as AwardType } from './types';

const AwardsGrid: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const awards: AwardType[] = [
    {
      id: 'yali',
      icon: '🏅',
      title: 'YALI Power Design Challenge',
      date: '2024',
      description: 'Lauréat du défi de conception énergétique YALI pour l\'innovation dans les solutions énergétiques africaines',
      fullDescription: 'Lauréat du défi de conception énergétique YALI pour l\'innovation dans les solutions énergétiques africaines',
      image: 'images/yali.png',
      lien: 'https://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/',
    },
    {
      id: 'poesam',
      icon: '🥇',
      title: 'Prix POESAM Orange',
      date: 'Juin 2024',
      description: 'Premier prix du concours POESAM Orange pour l\'innovation technologique en Afrique',
      fullDescription: 'Premier prix du concours POESAM Orange pour l\'innovation technologique en Afrique',
      image: 'logos/orange.png',
      lien: 'https://share.google/P6whI729iLfn2t9dh',
    },
    {
      id: 'orange',
      icon: '🏆',
      title: 'Prix Orange Women Excellence',
      date: '2024',
      description: 'Récompense pour l\'excellence féminine dans l\'innovation technologique et l\'entrepreneuriat',
      fullDescription: 'Récompense pour l\'excellence féminine dans l\'innovation technologique et l\'entrepreneuriat',
      image: 'images/women_price.png',
      lien: 'https://share.google/P6whI729iLfn2t9dh',
    },
    {
      id: 'totalenergies',
      icon: '🥈',
      title: 'Challenge Startupper TotalEnergies',
      date: 'Octobre 2024',
      description: 'Finaliste du Challenge Startupper TotalEnergies Cameroun pour l\'innovation énergétique',
      fullDescription: 'Finaliste du Challenge Startupper TotalEnergies Cameroun pour l\'innovation énergétique',
      image: 'images/total_startup.jpg',
      lien: 'https://totalenergies.cm/les-laureats-du-challenge-startupper-de-totalenergies-marketing-cameroun-2024-devoiles',
    },
  ];

  const getIconComponent = (icon: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      '🥇': Trophy,
      '🏆': Award,
      '🏅': Medal,
      '🥈': Star,
    };
    return icons[icon] || Award;
  };

  const getAwardColors = (index: number) => {
    const colorSchemes = [
      {
        gradient: 'from-blue-400 to-blue-600',
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        accent: 'text-blue-500'
      },
      {
        gradient: 'from-yellow-400 to-yellow-600',
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        accent: 'text-yellow-500'
      },
      {
        gradient: 'from-orange-400 to-orange-600',
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        accent: 'text-orange-500'
      },
      {
        gradient: 'from-green-400 to-green-600',
        bg: 'bg-green-50',
        text: 'text-green-700',
        accent: 'text-green-500'
      }
    ];
    return colorSchemes[index % colorSchemes.length];
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, awards.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentAward = awards[currentSlide];
  const currentColors = getAwardColors(currentSlide);
  const Icon = getIconComponent(currentAward.icon);

  return (
    <section className="relative py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-6 h-6 mr-2 text-[#1876bc]" />
            <span className="text-sm font-medium text-gray-600">Excellence Reconnue</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Nos Récompenses et Distinctions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reconnaissance internationale de notre excellence dans l'innovation énergétique
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    <div className="h-64 lg:h-80 relative overflow-hidden">
                      <img
                        src={currentAward.image}
                        alt={currentAward.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Award Icon */}
                      <div className={`absolute top-4 left-4 bg-gradient-to-br ${currentColors.gradient} p-3 rounded-2xl shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Emoji Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">{currentAward.icon}</span>
                      </div>
                      
                      {/* Date */}
                      <div className="absolute bottom-4 left-4 flex items-center text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{currentAward.date}</span>
                      </div>
                      
                      {/* Slide Counter */}
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                        {currentSlide + 1} / {awards.length}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentAward.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {currentAward.description}
                    </p>
                    
                    {/* Action Button */}
                    <motion.a
                      href={currentAward.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${currentColors.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group w-fit`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      En savoir plus
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-6">
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-700 hover:text-[#1876bc] hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-6">
              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-700 hover:text-[#1876bc] hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            {/* Auto-play Toggle */}
            <motion.button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-[#1876bc] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoPlay ? 'Pause' : 'Auto'}
            </motion.button>

            {/* Dots Indicators */}
            <div className="flex space-x-3">
              {awards.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? `bg-gradient-to-r ${getAwardColors(index).gradient} scale-125 shadow-lg`
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: index === currentSlide ? 1.25 : 1.2 }}
                  whileTap={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 grid grid-cols-4 gap-3">
            {awards.map((award, index) => {
              const colors = getAwardColors(index);
              const ThumbnailIcon = getIconComponent(award.icon);
              
              return (
                <motion.button
                  key={award.id}
                  onClick={() => goToSlide(index)}
                  className={`relative p-3 rounded-xl transition-all duration-300 ${
                    index === currentSlide
                      ? `${colors.bg} border-2 border-current ${colors.text} shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md`}>
                    <ThumbnailIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs text-gray-700 font-medium text-center leading-tight">
                    {award.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                    {award.date}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: awards.length.toString(), label: 'Prix Remportés', icon: Trophy, color: 'text-yellow-500' },
            { number: '2024', label: 'Année Record', icon: Calendar, color: 'text-[#1876bc]' },
            { number: '3', label: 'Pays Impactés', icon: Award, color: 'text-[#84c450]' },
            { number: '100%', label: 'Innovation', icon: Star, color: 'text-orange-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-200"
            >
              <div className={`w-10 h-10 ${stat.color.replace('text-', 'bg-').replace('500', '100')} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`text-xl lg:text-2xl font-bold ${stat.color} mb-1`}>
                {stat.number}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsGrid;