import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Nous développons des solutions technologiques avancées pour démocratiser l\'accès à l\'énergie durable.'
    },
    {
      icon: Users,
      title: 'Impact Social',
      description: 'Notre mission est de transformer positivement la vie des communautés africaines rurales et urbaines.'
    },
    {
      icon: Lightbulb,
      title: 'Durabilité',
      description: 'Nous créons des solutions respectueuses de l\'environnement pour un avenir énergétique durable.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, de la conception à la mise en œuvre.'
    }
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
              {t('about.title')}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Pionniers de l'innovation énergétique en Afrique, nous transformons l'accès à l'énergie durable grâce à EnMKit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.missionText')}
              </p>
              <p className="text-lg text-gray-600">
                Basée à Bafoussam, au Cameroun, 2metech développe des solutions technologiques innovantes 
                qui allient intelligence artificielle, durabilité environnementale et impact social positif.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="logos/image_logo_couleur.jpg"
                alt="Mission 2metech"
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1876bc]/20 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="images/tjahe.jpeg"
                  alt="Dr Tjahe Agnes Virginie"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#84c450]/20 to-transparent rounded-xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('about.founder')}
              </h2>
              <h3 className="text-xl text-[#1876bc] font-semibold mb-6">
                {t('about.founderTitle')}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.founderDescription')}
              </p>
              <p className="text-lg text-gray-600">
                Avec une vision claire de démocratisation de l'énergie durable, 
                Dr Tjahe a créé 2metech pour développer des solutions qui répondent 
                aux besoins spécifiques des communautés africaines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action et notre engagement envers l'Afrique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1876bc] to-[#84c450]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
              Notre Impact en Chiffres
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">+20</div>
                <div className="text-lg text-white/90">Foyers Équipés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">-14%</div>
                <div className="text-lg text-white/90">Réduction Consommation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">4</div>
                <div className="text-lg text-white/90">Récompenses Internationales</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;