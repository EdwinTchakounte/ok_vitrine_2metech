import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Orange',
      logo: 'logos/orange.png',
      description: 'Partenaire technologique majeur',
      category: 'Télécommunications'
    },
    {
      name: 'TotalEnergies',
      logo: 'images/total_startup.jpg',
      description: 'Innovation énergétique',
      category: 'Énergie'
    },
    {
      name: 'YALI',
      logo: 'images/yali.png',
      description: 'Leadership africain',
      category: 'Éducation'
    },
    {
      name: 'Orange Innovation',
      logo: 'logos/orange.png',
      description: 'Innovation Award Orange',
      category: 'Innovation'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Nos Partenaires
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Des collaborations stratégiques pour un impact maximal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {partner.description}
              </p>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white text-xs rounded-full">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;