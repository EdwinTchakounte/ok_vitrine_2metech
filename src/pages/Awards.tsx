import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  ExternalLink, 
  Trophy, 
  Star, 
  Medal, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const Awards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const awards = [
    {
      id: 'poesam',
      icon: Trophy,
      emoji: '🥇',
      title: 'Prix POESAM Innovation 2024',
      date: 'Juin 2024',
      description: 'Reconnaissance pour notre innovation dans le secteur énergétique africain avec EnMKit',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      lien: 'https://www.orange.com/fr/poesam/la-14e-edition-du-poesam-devoile-ses-laureats-2024',
      category: 'Innovation'
    },
    {
      id: 'totalenergies',
      icon: Star,
      emoji: '🥈',
      title: 'Challenge Startupper TotalEnergies',
      date: 'Octobre 2024',
      description: 'Lauréat du challenge startup pour notre solution énergétique innovante',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      lien: 'https://totalenergies.cm/les-laureats-du-challenge-startupper-de-totalenergies-marketing-cameroun-2024-devoiles',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      category: 'Startup'
    },
    {
      id: 'yali',
      icon: Medal,
      emoji: '🏅',
      title: 'YALI Power Design Challenge',
      date: '2024',
      description: 'Prix pour notre approche innovante dans la conception d\'solutions énergétiques',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      lien: 'https://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      category: 'Design'
    },
    {
      id: 'orange',
      icon: Award,
      emoji: '🏆',
      title: 'Prix d\'Excellence Orange',
      date: '2024',
      description: 'Distinction pour notre excellence technologique et notre impact social',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      lien: 'https://share.google/P6whI729iLfn2t9dh',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      category: 'Excellence'
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 5000);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <section className="py-8 bg-gradient-to-r from-[#1876bc] to-[#84c450] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 mr-2" />
              <span className="text-sm font-medium opacity-90">Excellence Reconnue</span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">
              Prix & Distinctions
            </h1>
            <p className="text-base lg:text-lg opacity-90">
              Leaders de l'innovation énergétique africaine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Slider */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Award Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 ${currentAward.bgColor} ${currentAward.textColor} rounded-full text-sm font-medium backdrop-blur-sm shadow-lg`}>
                        {currentAward.category}
                      </div>
                      
                      {/* Award Icon */}
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${currentAward.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl">{currentAward.emoji}</span>
                      </div>
                      
                      {/* Slide Counter */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                        {currentSlide + 1} / {awards.length}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600 font-medium">{currentAward.date}</span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentAward.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {currentAward.description}
                    </p>
                    
                    {/* Action Button */}
                    <motion.a
                      href={currentAward.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${currentAward.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <currentAward.icon className="w-5 h-5 mr-2" />
                      Voir les détails
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

          {/* Slide Indicators & Controls */}
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
                      ? 'bg-gradient-to-r from-[#1876bc] to-[#84c450] scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: index === currentSlide ? 1.25 : 1.2 }}
                  whileTap={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>

          {/* Slide Thumbnails */}
          <div className="mt-8 grid grid-cols-4 gap-3">
            {awards.map((award, index) => (
              <motion.button
                key={award.id}
                onClick={() => goToSlide(index)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-[#1876bc]/10 to-[#84c450]/10 border-2 border-[#1876bc] shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${award.color} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md`}>
                  <span className="text-lg">{award.emoji}</span>
                </div>
                <div className="text-xs text-gray-700 font-medium text-center leading-tight">
                  {award.title.split(' ').slice(0, 2).join(' ')}
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">
                  {award.date}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              Notre Impact en Chiffres
            </h2>
            <p className="text-gray-600 text-sm">Excellence reconnue internationalement</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: '4', label: 'Prix Remportés', icon: Trophy, color: 'text-yellow-500' },
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
                className="text-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gradient-to-r from-[#1876bc] to-[#84c450]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3">
              Rejoignez l'Innovation Énergétique
            </h2>
            <p className="text-sm lg:text-base opacity-90 mb-4">
              Découvrez comment EnMKit transforme le paysage énergétique africain
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2 bg-white text-[#1876bc] font-semibold rounded-xl hover:shadow-xl transition-all duration-300 text-sm"
            >
              En savoir plus sur EnMKit
              <ChevronRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Awards;