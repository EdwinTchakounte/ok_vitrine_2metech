import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  containerClassName,
  size = 'md',
  children,
  ...rest
}) => {
  const padding =
    size === 'sm' ? 'py-14 sm:py-16 lg:py-20' : size === 'lg' ? 'py-24 sm:py-28 lg:py-36' : 'section';
  return (
    <section id={id} className={cn('relative', padding, className)} {...rest}>
      <div className={cn('container mx-auto', containerClassName)}>{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  variant = 'light',
  className,
}) => {
  const isDark = variant === 'dark';
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'mx-auto mb-10 sm:mb-12 lg:mb-16 max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className={cn(isDark ? 'chip-dark' : 'chip', 'mb-4 sm:mb-5')}>{eyebrow}</span>
      )}
      <h2
        className={cn(
          'text-fluid-3xl sm:text-fluid-4xl font-bold leading-[1.08] mb-3 sm:mb-4 lg:mb-5',
          isDark ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-fluid-lg leading-relaxed',
            isDark ? 'text-white/75' : 'text-ink-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Section;
