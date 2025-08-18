import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Award, Trophy, Medal, Star, ChevronRight, Eye, Zap } from 'lucide-react';

const Awards: React.FC = () => {
  const { t } = useTranslation();
  const [selectedAward, setSelectedAward] = useState<string | null>(null);

  const awards = [
    {
      id: 'poesam',
      icon: Trophy,
      emoji: '🥇',
      title: t('awards.poesam.title'),
      date: 'Juin 2024',
      description: t('awards.poesam.description'),
      image: 'logos/orange.png',
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
      title: t('awards.totalenergies.title'),
      date: 'Octobre 2024',
      description: t('awards.totalenergies.description'),
      image: 'images/total_startup.jpg',
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
      title: t('awards.yali.title'),
      date: '2024',
      description: t('awards.yali.description'),
      image: 'images/yali.png',
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
      title: t('awards.orange.title'),
      date: '2024',
      description: t('awards.orange.description'),
      image: 'logos/orange.png',
      lien: 'https://share.google/P6whI729iLfn2t9dh',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      category: 'Excellence'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Compact Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#1876bc] to-[#84c450] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 mr-3" />
              <span className="text-lg font-medium opacity-90">Excellence Reconnue</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              {t('awards.title')}
            </h1>
            <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              {t('awards.subtitle')} de l'innovation énergétique africaine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Awards Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {awards.map((award) => (
              <motion.div
                key={award.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Background Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 ${award.bgColor} ${award.textColor} rounded-full text-sm font-medium backdrop-blur-sm`}>
                    {award.category}
                  </div>
                  
                  {/* Award Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{award.emoji}</span>
                  </div>
                  
                  {/* Date */}
                  <div className="absolute bottom-4 left-4 flex items-center text-white/90">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{award.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1876bc] transition-colors duration-300">
                    {award.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {award.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <motion.button
                      onClick={() => setSelectedAward(selectedAward === award.id ? null : award.id)}
                      className="flex items-center text-[#1876bc] hover:text-[#84c450] font-medium text-sm transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {selectedAward === award.id ? 'Masquer' : 'Détails'}
                    </motion.button>
                    
                    <motion.a
                      href={award.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <award.icon className="w-4 h-4 mr-2" />
                      Voir plus
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </motion.a>
                  </div>
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {selectedAward === award.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100 bg-gray-50 px-6 py-4 overflow-hidden"
                    >
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-[#84c450] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Impact de cette récompense</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Cette distinction renforce notre position de leader dans l'innovation énergétique africaine et valide notre approche technologique unique.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compact Stats Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Notre Impact en Chiffres
              </h2>
              <p className="text-gray-600">Reconnaissance internationale de notre excellence</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-').replace('500', '100')} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-[#1876bc] to-[#84c450]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Rejoignez l'Innovation Énergétique
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Découvrez comment EnMKit transforme le paysage énergétique africain
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-[#1876bc] font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
            >
              En savoir plus sur EnMKit
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Awards;