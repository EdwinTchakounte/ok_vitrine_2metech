import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Award, Trophy, Medal, Star } from 'lucide-react';

const Awards: React.FC = () => {
  const { t } = useTranslation();

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
      lien: 'https://www.orange.com/fr/poesam/la-14e-edition-du-poesam-devoile-ses-laureats-2024'
    },
       {
      id: 'totalenergies',
      icon: Star,
      emoji: '🥈',
      title: t('awards.totalenergies.title'),
      date: 'Octobre 2024',
      description: t('awards.totalenergies.description'),
     image: 'images/total_startup.jpg',
      lien:'https://totalenergies.cm/les-laureats-du-challenge-startupper-de-totalenergies-marketing-cameroun-2024-devoiles',
      color: 'from-green-400 to-green-600'
    },
   
    {
      id: 'yali',
      icon: Medal,
      emoji: '🏅',
      title: t('awards.yali.title'),
      date: '2024',
      description: t('awards.yali.description'),
       image: 'images/yali.png',
      lien:'https://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/',
      color: 'from-blue-400 to-blue-600'
    },
     {
      id: 'orange',
      icon: Award,
      emoji: '🏆',
      title: t('awards.orange.title'),
      date: '2024',
      description: t('awards.orange.description'),
      image: 'logos/orange.png',
      lien:'https://share.google/P6whI729iLfn2t9dh',
      color: 'from-orange-400 to-orange-600'
    },
 
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1876bc] to-[#84c450]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('awards.title')}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              {t('awards.subtitle')} de l'innovation énergétique africaine avec EnMKit
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center text-2xl`}>
                        {award.emoji}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`text-center ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <Calendar className="w-5 h-5 text-[#84c450] mr-2" />
                      <span className="text-[#1876bc] font-semibold">{award.date}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {award.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {award.description}
                    </p>
                    
                    <a className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105" href={award.lien}>
                      <award.icon className="w-5 h-5 mr-2" />
                      En savoir plus
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              L'Impact de nos Récompenses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reconnaissance</h3>
                <p className="text-gray-600">Validation internationale de notre approche innovante</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#84c450] to-[#1876bc] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Crédibilité</h3>
                <p className="text-gray-600">Renforcement de la confiance de nos partenaires</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                <p className="text-gray-600">Accélération de notre déploiement en Afrique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Awards;