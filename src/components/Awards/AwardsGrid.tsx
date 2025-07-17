import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Calendar, ArrowRight } from 'lucide-react';
import { Award as AwardType } from '../../types';

const AwardsGrid: React.FC = () => {
  const { t } = useTranslation();

  const awards: AwardType[] = [

       {
      id: 'yali',
      icon: '🏅',
      title: t('awards.yali.title'),
      date: '2024',
      description: t('awards.yali.description'),
      fullDescription: t('awards.yali.description'),
      image: 'images/yali.png',
      lien:'rgies-marketing-cameroun-2024-devoileshttps://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/'
    },
    {
      id: 'poesam',
      icon: '🥇',
      title: t('awards.poesam.title'),
      date: 'Juin 2024',
      description: t('awards.poesam.description'),
      fullDescription: t('awards.poesam.description'),
      image: 'logos/orange.png',
      lien:'https://share.google/P6whI729iLfn2t9dh'
    },
    {
      id: 'orange',
      icon: '🏆',
      title: t('awards.orange.title'),
      date: '2024',
      description: t('awards.orange.description'),
      fullDescription: t('awards.orange.description'),
      image: 'images/women_price.png',
      lien:'https://share.google/P6whI729iLfn2t9dh'
    },
 
    {
      id: 'totalenergies',
      icon: '🥈',
      title: t('awards.totalenergies.title'),
      date: 'Octobre 2024',
      description: t('awards.totalenergies.description'),
      fullDescription: t('awards.totalenergies.description'),
      image: 'images/total_startup.jpg',
      lien:'https://totalenergies.cm/les-laureats-du-challenge-startupper-de-totalenergies-marketing-cameroun-2024-devoiles'
    }
  ];

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      '🥇': Trophy,
      '🏆': Award,
      '🏅': Medal,
      '🥈': Star
    };
    return iconMap[iconName] || Award;
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('awards.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('awards.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const IconComponent = getIconComponent(award.icon);
            
            return (
              <motion.article
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-full h-[300px] flex justify-center items-center">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#84c450]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{award.date}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {award.description}
                  </p>
                  <a className="inline-flex items-center text-[#1876bc] font-semibold hover:text-[#84c450] transition-colors" href={award.lien}>
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;