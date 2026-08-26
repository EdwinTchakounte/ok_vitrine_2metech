import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';
import { WHATSAPP_URL } from '../../lib/links';

const WhatsAppFloat: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const startChat = () => {
    const message = encodeURIComponent(t('whatsapp.defaultMessage'));
    window.open(`${WHATSAPP_URL}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[5.5rem] right-5 z-40 w-[19rem] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-xl border border-line bg-surface shadow-floating sm:right-6"
            role="dialog"
            aria-label={t('whatsapp.title')}
          >
            <div className="flex items-center gap-3 border-b border-line bg-surface-sunken px-4 py-3.5">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-white">
                <MessageCircle className="h-[18px] w-[18px]" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-surface-sunken" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-tight text-fg">
                  {t('whatsapp.title')}
                </p>
                <p className="text-[11px] text-fg-muted">{t('whatsapp.status')}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('common.close')}
                className="inline-flex h-7 w-7 items-center justify-center rounded text-fg-subtle transition-colors hover:bg-surface-hover hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4">
              <p className="rounded-md border border-line bg-surface-sunken px-3.5 py-3 text-[13.5px] leading-relaxed text-fg-muted">
                {t('whatsapp.greeting')}
              </p>
              <button type="button" onClick={startChat} className="btn-accent btn-md mt-3.5 w-full">
                <Send className="h-3.5 w-3.5" />
                <span>{t('whatsapp.cta')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger */}
      <motion.button
        type="button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 220, damping: 20 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        aria-expanded={open}
        className="no-tap fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-floating transition-colors duration-200 hover:bg-emerald-600 active:bg-emerald-700 sm:right-6"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </motion.button>
    </>
  );
};

export default WhatsAppFloat;
