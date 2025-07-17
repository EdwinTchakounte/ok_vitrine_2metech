import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Zap, GraduationCap, Globe } from 'lucide-react';
import { Partner } from '../../types';

const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'f2e',
      name: 'F2E (Free Energy Engineering)',
      logo: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Partenaire technique spécialisé dans l\'ingénierie énergétique durable et les solutions innovantes.',
      category: 'energy',
      website: '#'
    },
    {
      id: 'leukele',
      name: 'Leukelé Africa',
      logo: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Partenaire stratégique pour le développement et la distribution en Afrique.',
      category: 'tech',
      website: '#'
    },
    {
      id: 'yali',
      name: 'YALI',
      logo: 'https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Young African Leaders Initiative - Réseau de jeunes leaders africains pour l\'innovation.',
      category: 'education',
      website: '#'
    },
    {
      id: 'orange',
      name: 'Orange',
      logo: 'https://images.pexels.com/photos/2850291/pexels-photo-2850291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Partenaire télécommunications et digital, soutien à l\'entrepreneuriat féminin.',
      category: 'corporate',
      website: '#'
    },
    {
      id: 'totalenergies',
      name: 'TotalEnergies',
      logo: 'https://images.pexels.com/photos/2850292/pexels-photo-2850292.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Leader mondial de l\'énergie, partenaire du programme Startupper of the Year.',
      category: 'energy',
      website: '#'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'energy': return Zap;
      case 'tech': return Building2;
      case 'education': return GraduationCap;
      case 'corporate': return Globe;
      default: return Building2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'energy': return 'from-yellow-400 to-orange-500';
      case 'tech': return 'from-blue-400 to-blue-600';
      case 'education': return 'from-green-400 to-green-600';
      case 'corporate': return 'from-purple-400 to-purple-600';
      default: return 'from-gray-400 to-gray-600';
    }
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
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des collaborations stratégiques qui renforcent notre mission d'innovation énergétique en Afrique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const IconComponent = getCategoryIcon(partner.category);
            const colorClass = getCategoryColor(partner.category);
            
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1876bc] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {partner.description}
                  </p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      className="inline-flex items-center text-[#1876bc] font-semibold hover:text-[#84c450] transition-colors"
                    >
                      Visiter le site
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-[#1876bc] to-[#84c450] rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Rejoignez Notre Écosystème
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ensemble, nous construisons l'avenir énergétique de l'Afrique. 
            Découvrez comment devenir partenaire de 2metech et EnMKit.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1876bc] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Devenir Partenaire
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;