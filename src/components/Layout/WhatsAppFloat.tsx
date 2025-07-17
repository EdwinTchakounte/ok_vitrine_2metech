import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Bonjour, je suis intéressé(e) par EnMKit. Pouvez-vous me donner plus d\'informations ?');
    window.open(`https://wa.me/237696372245?text=${message}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl p-4 w-80 max-w-[calc(100vw-3rem)]"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2metech Support</h3>
                <p className="text-sm text-gray-500">En ligne maintenant</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Bonjour ! 👋 Comment pouvons-nous vous aider avec EnMKit aujourd'hui ?
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
            >
              Démarrer la conversation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;