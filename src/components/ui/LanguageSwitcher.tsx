import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const LANGS = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
] as const;

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'light',
  className,
}) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('en') ? 'en' : 'fr';

  const handleChange = (code: string) => {
    if (code !== current) {
      i18n.changeLanguage(code);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div
      role="tablist"
      aria-label="Language"
      className={cn(
        'relative inline-flex items-center rounded-full p-1 text-xs font-semibold',
        isDark
          ? 'bg-white/10 border border-white/15 backdrop-blur-md'
          : 'bg-ink-100/70 border border-ink-200/80 backdrop-blur-sm',
        className,
      )}
    >
      {LANGS.map((lang) => {
        const active = current === lang.code;
        return (
          <button
            key={lang.code}
            role="tab"
            aria-selected={active}
            onClick={() => handleChange(lang.code)}
            title={lang.name}
            className={cn(
              'relative z-10 rounded-full px-3 py-1.5 transition-colors duration-300 no-tap',
              active
                ? isDark
                  ? 'text-brand-blue-700'
                  : 'text-white'
                : isDark
                  ? 'text-white/70 hover:text-white'
                  : 'text-ink-600 hover:text-ink-900',
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className={cn(
                  'absolute inset-0 -z-10 rounded-full',
                  isDark
                    ? 'bg-white shadow-soft'
                    : 'bg-gradient-brand shadow-glow',
                )}
              />
            )}
            <span className="tracking-wide">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
