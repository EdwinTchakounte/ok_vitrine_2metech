import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { cn } from '../../lib/cn';

export type ToastVariant = 'success' | 'error';

interface ToastProps {
  open: boolean;
  variant: ToastVariant;
  title: string;
  description?: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  open,
  variant,
  title,
  description,
  onClose,
}) => {
  React.useEffect(() => {
    if (!open) return;
    const id = setTimeout(onClose, 5000);
    return () => clearTimeout(id);
  }, [open, onClose]);

  const success = variant === 'success';
  const Icon = success ? CheckCircle2 : AlertCircle;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-5 z-toast max-w-sm sm:right-6"
        >
          <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4 shadow-floating">
            <span
              className={cn(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded',
                success
                  ? 'bg-brand-green-50 text-brand-green-600 dark:bg-brand-green-500/15 dark:text-brand-green-300'
                  : 'bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-300',
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight text-fg">{title}</p>
              {description && (
                <p className="mt-1 text-[13px] leading-relaxed text-fg-muted">
                  {description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded p-1 text-fg-subtle transition-colors hover:bg-surface-hover hover:text-fg"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
