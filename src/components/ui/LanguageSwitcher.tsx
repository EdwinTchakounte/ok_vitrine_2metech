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
  const isDark = variant === 'dark';

  return (
    <div
      role="tablist"
      aria-label="Language"
      className={cn(
        'relative inline-flex items-center rounded-md border p-0.5 text-[11px] font-bold tracking-wide',
        isDark
          ? 'border-white/20 bg-white/10 backdrop-blur-md'
          : 'border-line bg-surface-sunken',
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
            onClick={() => current !== lang.code && i18n.changeLanguage(lang.code)}
            title={lang.name}
            className={cn(
              'no-tap relative z-10 rounded px-2 py-1 transition-colors duration-200',
              active
                ? 'text-white'
                : isDark
                  ? 'text-white/65 hover:text-white'
                  : 'text-fg-subtle hover:text-fg',
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="absolute inset-0 -z-10 rounded bg-brand-blue-600 dark:bg-brand-blue-500"
              />
            )}
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
