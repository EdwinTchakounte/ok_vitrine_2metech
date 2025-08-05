import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Marie Nkomo",
      role: "Propriétaire d'un salon de coiffure",
      location: "Douala, Cameroun",
      avatar: "bonhome.png",
      text: "Depuis que j'ai installé EnmKit, mes factures d'électricité ont diminué de 35%. Je peux maintenant surveiller ma consommation en temps réel et optimiser l'utilisation de mes appareils. C'est révolutionnaire !",
      rating: 5,
      savings: "15%"
    },
    {
      id: 2,
      name: "Jean-Claude Mballa",
      role: "Chef d'entreprise",
      location: "Yaoundé, Cameroun",
      avatar: "bonhome.png",
      text: "EnmKit a détecté une fraude sur mon compteur que je n'avais pas remarquée. L'équipe 2metech est très professionnelle et le service client exceptionnel. Je recommande vivement !",
      rating: 5,
      savings: "15%"
    },
    {
      id: 3,
      name: "Fatou Diallo",
      role: "Restauratrice",
      location: "Bafoussam, Cameroun",
      avatar: "bonhome.png",
      text: "Grâce aux alertes intelligentes d'EnmKit, je n'ai plus de surprises sur mes factures. La prédiction IA est très précise et m'aide à mieux planifier mes dépenses énergétiques.",
      rating: 5,
      savings: "12%"
    },
    {
      id: 4,
      name: "Paul Essomba",
      role: "Directeur d'école",
      location: "Bamenda, Cameroun",
      avatar: "bonhome.png",
      text: "L'installation a été rapide et sans interruption. Les économies réalisées nous permettent d'investir davantage dans l'éducation de nos élèves. Merci EnmKit !",
      rating: 5,
      savings: "18%"
    },
    {
      id: 5,
      name: "Aminata Touré",
      role: "Gérante de boutique",
      location: "Garoua, Cameroun",
      avatar: "bonhome.png",
      text: "La technologie EnNMit s'adapte parfaitement à nos besoins locaux. L'interface est intuitive et le support technique toujours disponible. Une innovation 100% africaine !",
      rating: 5,
      savings: "11%"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ils nous font
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              confiance
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos utilisateurs satisfaits à travers le Cameroun
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-blue-600"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-blue-600" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 text-center leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>

                  {/* Savings Badge */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full border border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        -{testimonials[currentIndex].savings}
                      </div>
                      <div className="text-xs text-gray-600">économies</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex ? 'scale-125' : 'hover:scale-110'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-green-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
                {/* Progress Ring for Current Slide */}
                {index === currentIndex && isAutoPlaying && (
                  <div className="absolute inset-0">
                    <svg className="w-6 h-6 transform -rotate-90" style={{ left: '-6px', top: '-6px' }}>
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-200"
                      />
                      <motion.circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-500"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        style={{
                          strokeDasharray: "62.83",
                          strokeDashoffset: 0
                        }}
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {isAutoPlaying ? '⏸ Pause' : '▶ Lecture auto'}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: "20+", label: "Utilisateurs satisfaits" },
            { number: "+14%", label: "Économies moyennes" },
            { number: "99%", label: "Taux de satisfaction" },
            { number: "24/7", label: "Support technique" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;