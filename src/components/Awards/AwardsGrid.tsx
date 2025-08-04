import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Calendar, ArrowRight } from 'lucide-react';
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
      lien: 'https://mk-africa.com/yali-power-design-challenge-innovating-to-address-africans-energy-needs/',
    },
    {
      id: 'poesam',
      icon: '🥇',
      title: t('awards.poesam.title'),
      date: 'Juin 2024',
      description: t('awards.poesam.description'),
      fullDescription: t('awards.poesam.description'),
      image: 'logos/orange.png',
      lien: 'https://share.google/P6whI729iLfn2t9dh',
    },
    {
      id: 'orange',
      icon: '🏆',
      title: t('awards.orange.title'),
      date: '2024',
      description: t('awards.orange.description'),
      fullDescription: t('awards.orange.description'),
      image: 'images/women_price.png',
      lien: 'https://share.google/P6whI729iLfn2t9dh',
    },
    {
      id: 'totalenergies',
      icon: '🥈',
      title: t('awards.totalenergies.title'),
      date: 'Octobre 2024',
      description: t('awards.totalenergies.description'),
      fullDescription: t('awards.totalenergies.description'),
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

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f9fafb] to-[#edf1f5] dark:from-[#0f172a] dark:to-[#1e293b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('awards.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('awards.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = getIconComponent(award.icon);

            return (
              <motion.article
                key={award.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div className="relative group h-56 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg">
                      <Icon className="w-6 h-6 text-lime-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 flex items-center text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {award.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {award.description}
                  </p>
                  <a
                    href={award.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1876bc] hover:text-[#84c450] font-semibold transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
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
