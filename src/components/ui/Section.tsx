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
    size === 'sm'
      ? 'py-12 sm:py-14 lg:py-16'
      : size === 'lg'
        ? 'py-20 sm:py-24 lg:py-32'
        : 'section';
  return (
    <section id={id} className={cn('relative isolate', padding, className)} {...rest}>
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
  /** Optional right-hand slot (a CTA, a control); desktop only alignment. */
  aside?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  variant = 'light',
  aside,
  className,
}) => {
  const isDark = variant === 'dark';
  const centered = align === 'center' && !aside;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'mb-10 sm:mb-12 lg:mb-14',
        centered ? 'mx-auto max-w-3xl text-center' : 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn(!centered && 'max-w-2xl')}>
        {eyebrow && (
          <span className={cn(isDark ? 'chip-dark' : 'chip', 'mb-4')}>{eyebrow}</span>
        )}
        <h2
          className={cn(
            'text-fluid-3xl font-bold leading-[1.1] tracking-tighter sm:text-fluid-4xl',
            isDark ? 'text-white' : 'text-fg',
          )}
        >
          {title}
        </h2>
        {/* Short brand rule instead of a full gradient wash */}
        <div className={cn('rule-brand mt-5', centered && 'mx-auto')} aria-hidden="true" />
        {subtitle && (
          <p
            className={cn(
              'mt-5 text-fluid-base leading-relaxed',
              isDark ? 'text-white/70' : 'text-fg-muted',
              /* Justifying a centred block would fight the centring. */
              !centered && 'text-just',
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {aside && <div className="shrink-0">{aside}</div>}
    </motion.div>
  );
};

export default Section;
