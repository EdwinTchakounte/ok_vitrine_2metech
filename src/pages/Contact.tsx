import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, User, MessageSquare } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', subject: '', message: '', phone: '' });

     const { error } = await supabase.from('enmkit_contact').insert([formData]);

    if (error) {
      alert("Erreur : " + error.message);
    } 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: t('contact.address'),
      color: 'text-[#1876bc]'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 696 372 245',
      color: 'text-[#84c450]'
    },
    {
      icon: Mail,
      title: 'Email',
      content: t('contact.email'),
      color: 'text-[#1876bc]'
    },
    {
      icon: MessageCircle,
      title: t('contact.whatsapp'),
      content: '+237 696 372 245',
      color: 'text-green-500'
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
              {t('contact.title')}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Prêt à révolutionner votre accès à l'énergie ? Contactez notre équipe d'experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Restons en Contact
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-900">Contact Direct WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pour une réponse rapide, contactez-nous directement via WhatsApp.
                </p>
                <a
                  href="https://wa.me/237696372245?text=Bonjour, je suis intéressé(e) par EnMKit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ouvrir WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                        placeholder="Votre nom"
                      />
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <input
                        type="emphoneail"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                        placeholder="673 333 333"
                      />
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent resize-none"
                        placeholder="Votre message..."
                      />
                      <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Localisation
            </h2>
            <p className="text-lg text-gray-600">
              Retrouvez-nous à Bafoussam, au cœur de l'innovation énergétique camerounaise
            </p>
          </motion.div>
          
          <div className="bg-gray-300 rounded-xl h-64 lg:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#1876bc] mx-auto mb-4" />
              <p className="text-gray-600">Carte interactive - Mairie de Bafoussam, Cameroun</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;