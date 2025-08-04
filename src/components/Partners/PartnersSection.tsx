import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Building2,
  Zap,
  GraduationCap,
  Globe,
} from 'lucide-react';
import { Partner } from '../../types';
import { Link } from 'react-router-dom';

const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'f2e',
      name: 'F2E (Free Energy Engineering)',
      logo: 'logos/f2e.png',
      description:
        "Partenaire technique spécialisé dans l'ingénierie énergétique durable et les solutions innovantes.",
      category: 'energy',
      website: 'https://freeenergyengineering.com/',
    },
    {
      id: 'leukele',
      name: 'Leukelé Africa',
      logo: 'logos/leuke.png',
      description:
        'Partenaire stratégique pour le développement et la distribution en Afrique.',
      category: 'tech',
      website: 'https://vc4a.com/ventures/leukele-africa/fundraising/?lang=fr',
    },
    {
      id: 'yali',
      name: 'YALI',
      logo: 'logos/yali.png',
      description:
        "Young African Leaders Initiative - Réseau de jeunes leaders africains pour l'innovation.",
      category: 'education',
      website: 'https://yalirlcsouthernafrica.org/',
    },
    {
      id: 'orange',
      name: 'Orange',
      logo: 'logos/orange.png',
      description:
        "Partenaire télécommunications et digital, soutien à l'entrepreneuriat féminin.",
      category: 'corporate',
      website: 'https://www.orange.cm/',
    },
    {
      id: 'totalenergies',
      name: 'TotalEnergies',
      logo: 'logos/total.png',
      description:
        "Leader mondial de l'énergie, partenaire du programme Startupper of the Year.",
      category: 'energy',
      website: 'https://www.totalenergies.fr/',
    },
  ];

  const getCategoryIcon = (category: string) => {
    const map: Record<string, React.ElementType> = {
      energy: Zap,
      tech: Building2,
      education: GraduationCap,
      corporate: Globe,
    };
    return map[category] || Building2;
  };

  const getCategoryColor = (category: string) => {
    const map: Record<string, string> = {
      energy: 'bg-yellow-400',
      tech: 'bg-blue-500',
      education: 'bg-green-500',
      corporate: 'bg-purple-500',
    };
    return map[category] || 'bg-gray-400';
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des collaborations stratégiques qui renforcent notre mission d'innovation énergétique en Afrique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((partner, index) => {
            const Icon = getCategoryIcon(partner.category);
            const color = getCategoryColor(partner.category);

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-medium ${color}`}
                    >
                      <Icon className="w-4 h-4 mr-1" />
                      {partner.category}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {partner.description}
                  </p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1876bc] hover:text-[#84c450] font-medium transition-colors"
                  >
                    Visiter le site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-[#1876bc] to-[#84c450] rounded-3xl p-10 text-center shadow-xl"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Rejoignez Notre Écosystème
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-base lg:text-lg">
            Ensemble, nous façonnons l’avenir énergétique de l’Afrique. Découvrez comment devenir partenaire de 2metech et EnMKit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-[#1876bc] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Devenir Partenaire
            <ExternalLink className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
