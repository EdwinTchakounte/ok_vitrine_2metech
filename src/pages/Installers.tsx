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
  Zap,
  AlertCircle,
  Loader
} from 'lucide-react';
import { InstallerApplication } from '../types';
import { supabase } from '../supabaseClient';

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
    id : Date.now(),
  });

  const [files, setFiles] = useState<{
    cni?: File;
    cv?: File;
    document?: File;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<{
    cni?: number;
    cv?: number;
    document?: number;
  }>({});

  // Fonction pour uploader un fichier vers Supabase Storage
//   const uploadFile = async (file: File, fileType: 'cni' | 'cv' | 'document', applicantId: string): Promise<string | null> => {
//     try {
//       // Générer un nom unique pour le fichier
//       const fileExtension = file.name.split('.').pop();
//       const fileName = `${applicantId}_${fileType}_${Date.now()}.${fileExtension}`;
//       const filePath = `installers/${fileName}`;

//       // Simuler le progress d'upload
//       let progress = 0;
//       const progressInterval = setInterval(() => {
//         progress += 20;
//         setUploadProgress(prev => ({
//           ...prev,
//           [fileType]: Math.min(progress, 90) // Garder à 90% jusqu'à la fin
//         }));
//       }, 200);

//       // Upload vers Supabase Storage
// const { data, error } = await supabase.storage
//   .from('installer-documents')
//   .upload(filePath, file, {
//     cacheControl: '3600',
//     upsert: false
//   });

//       // Obtenir l'URL publique du fichier
//       const { data: { publicUrl } } = supabase.storage
//         .from('installer-documents')
//         .getPublicUrl(filePath);

//       return publicUrl;

//     } catch (error: any) {
//       console.error(`Erreur lors de l'upload du ${fileType}:`, error);
//       setUploadProgress(prev => ({
//         ...prev,
//         [fileType]: 0
//       }));
//       throw error;
//     }
//   };



const uploadFile = async (
  file: File | undefined,
  fileType: 'cni' | 'cv' | 'document',
  applicantId: string
): Promise<string | null> => {

  if (!file) return null; // 🔥 sécurité ABSOLUE

  const fileExtension = file.name.split('.').pop();
  const fileName = `${applicantId}_${fileType}_${Date.now()}.${fileExtension}`;
  const filePath = `installers/${fileName}`;

  const { error } = await supabase.storage
    .from('installer-documents')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from('installer-documents')
    .getPublicUrl(filePath);

  return data.publicUrl;
};


  // Fonction pour sauvegarder les données dans Supabase
  const saveToDatabase = async (applicationData: any) => {
    try {
      applicationData.id= Date.now(); // Assurer un ID unique
      // Sauvegarde dans Supabase
      const { data, error } = await supabase
        .from('enmkit_installateur')
        .insert([applicationData])
        .select()
        .single();

      if (error) {
        throw new Error(`Erreur de sauvegarde: ${error.message}`);
      }

      return data;

    } catch (error: any) {
      console.error('Erreur lors de la sauvegarde:', error);
      throw error;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Réinitialiser l'erreur si l'utilisateur modifie le formulaire
    if (error) setError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'cni' | 'cv' | 'document') => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérifier la taille du fichier (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError(`Le fichier ${fileType.toUpperCase()} ne doit pas dépasser 5MB`);
        return;
      }

      // Vérifier le type de fichier
      const allowedTypes = fileType === 'cni' 
        ? ['image/jpeg', 'image/png', 'application/pdf']
        : ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!allowedTypes.includes(file.type)) {
        setError(`Type de fichier non supporté pour ${fileType.toUpperCase()}`);
        return;
      }

      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
      
      // Réinitialiser l'erreur et le progress
      if (error) setError(null);
      setUploadProgress(prev => ({
        ...prev,
        [fileType]: 0
      }));
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name || !formData.email || !formData.phone || !formData.profession || !formData.zone ) {
      setError('Veuillez remplir tous les champs obligatoires');
      return false;
    }

    if (formData.type === 'company' && !formData.company) {
      setError('Le nom de l\'entreprise est obligatoire');
      return false;
    }

    if (!files.cni ) {
      setError('Veuillez télécharger tous les documents requis');
      return false;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Adresse email invalide');
      return false;
    }

    // Validation téléphone camerounais
    const phoneRegex = /^(\+237|237)?[26][0-9]{8}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setError('Numéro de téléphone camerounais invalide');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setUploadProgress({});

    try {
      // Générer un ID unique pour ce candidat
      const applicantId = `installer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Upload des fichiers en parallèle
      // const [cniUrl, cvUrl, documentUrl] = await Promise.all([
      //   uploadFile(files.cni!, 'cni', applicantId),
      //   uploadFile(files.cv!, 'cv', applicantId),
      //   uploadFile(files.document!, 'document', applicantId)
      // ]);

      // if (!cniUrl || !cvUrl) {
      //   throw new Error('Erreur lors du téléchargement des fichiers');
      // }


      const cniUrl = await uploadFile(files.cni, 'cni', applicantId);
const cvUrl = await uploadFile(files.cv, 'cv', applicantId);
const documentUrl = await uploadFile(files.document, 'document', applicantId);

if (!cniUrl) {
  throw new Error('Erreur lors de l’upload de la CNI');
}

      // Préparer les données pour la base de données
      const applicationData = {
        id: applicantId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        profession: formData.profession,
        type: formData.type,
        company: formData.company || null,
        zone: formData.zone,
        experience: formData.experience,
        motivation: formData.motivation,
        cni_url: cniUrl,
        cv_url: cvUrl,
        document_url: documentUrl || null,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Sauvegarder dans la base de données
      await saveToDatabase(applicationData);

      console.log('Candidature sauvegardée avec succès:', applicationData);
      setIsSubmitted(true);

      // Réinitialiser le formulaire
      setFormData({
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
      setFiles({});
      setUploadProgress({});

    } catch (error: any) {
      console.error('Erreur lors de la soumission:', error);
      setError(error.message || 'Une erreur est survenue lors de la soumission');
    } finally {
      setIsLoading(false);
    }
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
              {/* Affichage des erreurs */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

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
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                          disabled={isLoading}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                          disabled={isLoading}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                          disabled={isLoading}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                          disabled={isLoading}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                          disabled={isLoading}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        Expérience professionnelle 
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        
                        disabled={isLoading}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Décrivez votre expérience dans le domaine électrique/énergétique..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motivation 
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        
                        disabled={isLoading}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1876bc] focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        isLoading ? 'border-gray-200 bg-gray-50' : 'border-gray-300 hover:border-[#1876bc]'
                      }`}>
                        <CreditCard className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, 'cni')}
                          className="hidden"
                          id="cni-upload"
                          name='cni-upload'
                          required
                          disabled={isLoading}
                        />
                        <label htmlFor="cni-upload" className={`cursor-pointer ${isLoading ? 'cursor-not-allowed' : ''}`}>
                          <span className="text-sm text-gray-600">
                            {files.cni ? files.cni.name : 'Cliquez pour télécharger votre CNI'}
                          </span>
                        </label>
                        {uploadProgress.cni !== undefined && uploadProgress.cni > 0 && (
                          <div className="mt-2">
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-[#1876bc] to-[#84c450] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress.cni}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 mt-1 block">{uploadProgress.cni}%</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Curriculum Vitae (CV) 
                      </label>
                      <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        isLoading ? 'border-gray-200 bg-gray-50' : 'border-gray-300 hover:border-[#1876bc]'
                      }`}>
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, 'cv')}
                          className="hidden"
                          id="cv-upload"
                          name='cv-upload'
                          
                          disabled={isLoading}
                        />
                        <label htmlFor="cv-upload" className={`cursor-pointer ${isLoading ? 'cursor-not-allowed' : ''}`}>
                          <span className="text-sm text-gray-600">
                            {files.cv ? files.cv.name : 'Cliquez pour télécharger votre CV'}
                          </span>
                        </label>
                        {uploadProgress.cv !== undefined && uploadProgress.cv > 0 && (
                          <div className="mt-2">
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-[#1876bc] to-[#84c450] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress.cv}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 mt-1 block">{uploadProgress.cv}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>




                <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Certicat (document optionnel mais requis au cas où vous etes une entreprise) 
                      </label>
                      <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        isLoading ? 'border-gray-200 bg-gray-50' : 'border-gray-300 hover:border-[#1876bc]'
                      }`}>
                        <CreditCard className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, 'document')}
                          className="hidden"
                          id="document-upload"
                          name="document-upload"
                
                          disabled={isLoading}
                        />
                        <label htmlFor="document-upload" className={`cursor-pointer ${isLoading ? 'cursor-not-allowed' : ''}`}>
                          <span className="text-sm text-gray-600">
                            {files.document ? files.document.name : 'Cliquez pour télécharger votre document'}
                          </span>
                        </label>
                        {uploadProgress.document !== undefined && uploadProgress.document > 0 && (
                          <div className="mt-2">
                            <div className="bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-[#1876bc] to-[#84c450] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress.document}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 mt-1 block">{uploadProgress.document}%</span>
                          </div>
                        )}
                      </div>
                    </div>



                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1876bc] to-[#84c450] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Soumettre ma Candidature
                      </>
                    )}
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