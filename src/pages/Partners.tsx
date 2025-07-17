import React from 'react';
import { motion } from 'framer-motion';
import PartnersSection from '../components/Partners/PartnersSection';
import { Handshake, Globe, Target, TrendingUp } from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipValues = [
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Nous croyons en la force des partenariats stratégiques pour maximiser notre impact.'
    },
    {
      icon: Globe,
      title: 'Expansion',
      description: 'Ensemble, nous étendons la portée d\'EnMKit à travers l\'Afrique et au-delà.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Nos partenaires apportent expertise technique et vision stratégique.'
    },
    {
      icon: TrendingUp,
      title: 'Croissance',
      description: 'Des collaborations qui accélèrent le développement de solutions durables.'
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
              Nos Partenaires Stratégiques
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Des collaborations qui renforcent notre mission d'innovation énergétique en Afrique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              La Force du Partenariat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos valeurs partagées créent un écosystème d'innovation durable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnershipValues.map((value, index) => (
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

      {/* Partners Grid */}
      <PartnersSection />

      {/* Partnership Impact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Impact de Nos Partenariats
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-[#1876bc] mb-2">5</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Partenaires Stratégiques</div>
                <div className="text-gray-600">Collaborations actives pour l'innovation</div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-[#84c450] mb-2">3</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Secteurs d'Activité</div>
                <div className="text-gray-600">Énergie, Tech, Éducation</div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-[#1876bc] mb-2">100%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Engagement Durable</div>
                <div className="text-gray-600">Vision partagée pour l'Afrique</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;