import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  MapPin, 
  Briefcase, 
  Upload, 
  FileText, 
  CreditCard,
  Send,
  CheckCircle,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { InstallerApplication } from '../types';

const Installers: React.FC = () => {
  const [formData, setFormData] = useState<InstallerApplication>({
    name: '',
    email: '',
    phone: '',
    profession: '',
    type: 'individual',
    company: '',
    zone: '',
    experience: '',
    motivation: '',
  });

  const [files, setFiles] = useState<{
    cni?: File;
    cv?: File;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'cni' | 'cv') => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', { ...formData, files });
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: Users,
      title: 'Réseau National',
      description: 'Rejoignez un réseau d\'installateurs certifiés à travers le Cameroun'
    },
    {
      icon: Award,
      title: 'Formation Certifiée',
      description: 'Accédez à nos formations techniques et obtenez votre certification EnMKit'
    },
    {
      icon: Zap,
      title: 'Support Technique',
      description: 'Bénéficiez d\'un support technique continu et d\'outils professionnels'
    }
  ];

  const zones = [
    'Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral',
    'Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Ouest'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Candidature Envoyée !
          </h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre candidature. Notre équipe l'examinera et vous contactera sous 48h.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Nouvelle Candidature
          </button>
        </motion.div>
      </div>
    );
  }

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
              Devenez Installateur EnMKit
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Rejoignez notre réseau d'installateurs certifiés et participez à la révolution énergétique africaine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Devenir Installateur EnMKit ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des avantages exclusifs pour les professionnels qui nous rejoignent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Formulaire de Candidature
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez ce formulaire pour rejoindre notre réseau d'installateurs
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <User className="w-6 h-6 mr-2 text-[#1876bc]" />
                    Informations Personnelles
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                          placeholder="votre@email.com"
                        />
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                          placeholder="+237 6XX XXX XXX"
                        />
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profession *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="profession"
                          value={formData.profession}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                          placeholder="Électricien, Technicien, etc."
                        />
                        <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Building2 className="w-6 h-6 mr-2 text-[#1876bc]" />
                    Informations Professionnelles
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de candidature *
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                      >
                        <option value="individual">Particulier</option>
                        <option value="company">Entreprise</option>
                      </select>
                    </div>

                    {formData.type === 'company' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de l'entreprise *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required={formData.type === 'company'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Zone géographique *
                      </label>
                      <div className="relative">
                        <select
                          name="zone"
                          value={formData.zone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent appearance-none"
                        >
                          <option value="">Sélectionnez votre région</option>
                          {zones.map(zone => (
                            <option key={zone} value={zone}>{zone}</option>
                          ))}
                        </select>
                        <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expérience professionnelle *
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent resize-none"
                        placeholder="Décrivez votre expérience dans le domaine électrique/énergétique..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motivation *
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent resize-none"
                        placeholder="Pourquoi souhaitez-vous devenir installateur EnMKit ?"
                      />
                    </div>
                  </div>
                </div>

                {/* File Uploads */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Upload className="w-6 h-6 mr-2 text-[#1876bc]" />
                    Documents Requis
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Carte Nationale d'Identité (CNI) *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1876bc] transition-colors">
                        <CreditCard className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, 'cni')}
                          className="hidden"
                          id="cni-upload"
                          required
                        />
                        <label htmlFor="cni-upload" className="cursor-pointer">
                          <span className="text-sm text-gray-600">
                            {files.cni ? files.cni.name : 'Cliquez pour télécharger votre CNI'}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Curriculum Vitae (CV) *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1876bc] transition-colors">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange(e, 'cv')}
                          className="hidden"
                          id="cv-upload"
                          required
                        />
                        <label htmlFor="cv-upload" className="cursor-pointer">
                          <span className="text-sm text-gray-600">
                            {files.cv ? files.cv.name : 'Cliquez pour télécharger votre CV'}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Soumettre ma Candidature
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Installers;