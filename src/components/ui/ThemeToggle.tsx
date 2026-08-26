import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/cn';
import { useTheme } from '../../lib/theme';

interface ThemeToggleProps {
  /** `invert` is for placement over a dark hero where the header is transparent. */
  variant?: 'default' | 'invert';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'default',
  className,
}) => {
  const { resolved, toggle } = useTheme();
  const { t } = useTranslation();
  const isDark = resolved === 'dark';
  const invert = variant === 'invert';

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={t('theme.toggle')}
      title={isDark ? t('theme.light') : t('theme.dark')}
      className={cn(
        'group relative inline-flex h-9 w-9 items-center justify-center rounded-md border no-tap',
        'transition-colors duration-200',
        invert
          ? 'border-white/20 bg-white/10 text-white hover:bg-white/[0.18] backdrop-blur-md'
          : 'border-line bg-surface text-fg-muted hover:border-line-strong hover:text-fg',
        className,
      )}
    >
      <span className="relative block h-[18px] w-[18px]">
        <motion.span
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -70 : 0,
            scale: isDark ? 0.6 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Sun className="h-[18px] w-[18px]" strokeWidth={2} />
        </motion.span>
        <motion.span
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 70,
            scale: isDark ? 1 : 0.6,
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Moon className="h-[18px] w-[18px]" strokeWidth={2} />
        </motion.span>
      </span>
    </button>
  );
};

export default ThemeToggle;
