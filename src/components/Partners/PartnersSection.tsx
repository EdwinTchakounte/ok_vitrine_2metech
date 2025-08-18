import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Building2,
  Zap,
  GraduationCap,
  Globe,
  ChevronRight,
  Users,
  Award,
  Target
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  details?: string;
}

const PartnersSection: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const partners: Partner[] = [
    {
      id: 'f2e',
      name: 'F2E (Free Energy Engineering)',
      logo: 'logos/f2e.png',
      description: "Partenaire technique spécialisé dans l'ingénierie énergétique durable.",
      category: 'energy',
      website: 'https://freeenergyengineering.com/',
      details: "F2E apporte son expertise technique avancée en ingénierie énergétique pour développer des solutions durables et innovantes adaptées au contexte africain."
    },
    {
      id: 'leukele',
      name: 'Leukelé Africa',
      logo: 'logos/leuke.png',
      description: 'Partenaire stratégique pour le développement et la distribution en Afrique.',
      category: 'tech',
      website: 'https://vc4a.com/ventures/leukele-africa/fundraising/?lang=fr',
      details: "Leukelé Africa facilite notre expansion continentale grâce à son réseau de distribution et sa connaissance approfondie des marchés africains."
    },
    {
      id: 'yali',
      name: 'YALI',
      logo: 'logos/yali.png',
      description: "Young African Leaders Initiative - Réseau de jeunes leaders africains.",
      category: 'education',
      website: 'https://yalirlcsouthernafrica.org/',
      details: "YALI nous connecte avec la prochaine génération de leaders africains, favorisant l'innovation et le développement de solutions énergétiques durables."
    },
    {
      id: 'orange',
      name: 'Orange',
      logo: 'logos/orange.png',
      description: "Partenaire télécommunications et digital, soutien à l'entrepreneuriat.",
      category: 'corporate',
      website: 'https://www.orange.cm/',
      details: "Orange nous accompagne dans la digitalisation de nos solutions et le développement de notre infrastructure technologique en Afrique."
    },
    {
      id: 'totalenergies',
      name: 'TotalEnergies',
      logo: 'logos/total.png',
      description: "Leader mondial de l'énergie, partenaire du programme Startupper.",
      category: 'energy',
      website: 'https://www.totalenergies.fr/',
      details: "TotalEnergies nous soutient à travers son programme Startupper of the Year, apportant expertise et ressources pour notre croissance."
    }
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
      energy: 'from-yellow-500 to-orange-500',
      tech: 'from-blue-500 to-blue-600',
      education: 'from-green-500 to-green-600',
      corporate: 'from-purple-500 to-purple-600',
    };
    return map[category] || 'from-gray-500 to-gray-600';
  };

  const partnershipStats = [
    {
      icon: Users,
      value: '5+',
      label: 'Partenaires Actifs',
      description: 'Collaborations stratégiques',
      color: 'from-[#1876bc] to-blue-600'
    },
    {
      icon: Award,
      value: '4',
      label: 'Secteurs Couverts',
      description: 'Énergie, Tech, Éducation, Corporate',
      color: 'from-[#84c450] to-green-600'
    },
    {
      icon: Target,
      value: '100%',
      label: 'Vision Partagée',
      description: 'Innovation pour l\'Afrique',
      color: 'from-[#1876bc] to-[#84c450]'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Nos Partenaires Stratégiques
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des collaborations qui renforcent notre mission d'innovation énergétique
          </p>
        </motion.div>

        {/* Compact Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {partners.map((partner, index) => {
            const Icon = getCategoryIcon(partner.category);
            const colorClass = getCategoryColor(partner.category);
            const isSelected = selectedPartner === partner.id;

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedPartner(isSelected ? null : partner.id)}
              >
                {/* Partner Header */}
                <div className="relative h-24 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <div className={`w-8 h-8 bg-gradient-to-br ${colorClass} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Partner Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {partner.name}
                    </h3>
                    <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isSelected ? 'auto' : 0,
                      opacity: isSelected ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                        {partner.details}
                      </p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1876bc] hover:text-[#84c450] font-medium text-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visiter le site
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partnershipStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#1876bc] to-[#84c450] rounded-xl p-6 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">
            Rejoignez Notre Écosystème
          </h3>
          <p className="text-white/90 mb-4 text-sm">
            Ensemble, façonnons l'avenir énergétique de l'Afrique
          </p>
          <button className="bg-white text-[#1876bc] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center text-sm">
            Devenir Partenaire
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;