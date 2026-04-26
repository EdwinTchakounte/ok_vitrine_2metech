import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export type ToastVariant = 'success' | 'error';

interface ToastProps {
  open: boolean;
  variant: ToastVariant;
  title: string;
  description?: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ open, variant, title, description, onClose }) => {
  React.useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  const Icon = variant === 'success' ? CheckCircle2 : AlertCircle;
  const accent =
    variant === 'success'
      ? 'border-brand-green-200 bg-brand-green-50 text-brand-green-800'
      : 'border-red-200 bg-red-50 text-red-800';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-6 z-[70] max-w-sm"
        >
          <div className={`flex items-start gap-3 rounded-2xl border p-4 shadow-floating backdrop-blur-md ${accent}`}>
            <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-tight">{title}</p>
              {description && <p className="mt-1 text-sm opacity-90">{description}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-1 text-current/70 transition-colors hover:bg-black/5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
