import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const startChat = () => {
    const message = encodeURIComponent(t('whatsapp.defaultMessage'));
    window.open(`https://wa.me/237696372245?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 18 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="WhatsApp"
          className="ring-glow group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-floating transition-transform duration-300 hover:scale-110 active:scale-95 no-tap"
        >
          {/* Ping ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
          )}
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <MessageCircle className="h-6 w-6 fill-white/10" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[20rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl bg-white shadow-floating border border-ink-100"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-300 ring-2 ring-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold leading-tight">{t('whatsapp.title')}</p>
                  <p className="text-xs text-white/85">{t('whatsapp.status')}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="rounded-2xl bg-ink-50 px-4 py-3 text-sm text-ink-700 leading-relaxed">
                {t('whatsapp.greeting')}
              </div>
              <button
                type="button"
                onClick={startChat}
                className="btn-primary btn-md mt-4 w-full"
              >
                <Send className="h-4 w-4" />
                <span>{t('whatsapp.cta')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;
