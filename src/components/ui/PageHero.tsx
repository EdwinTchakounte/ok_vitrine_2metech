import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  /** Optional column rendered beside the copy on large screens. */
  aside?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  children,
  aside,
}) => {
  const centered = align === 'center' && !aside;

  return (
    <section className="relative isolate overflow-hidden bg-invert pb-16 pt-[calc(var(--header-h)+3.5rem)] lg:pb-20 lg:pt-[calc(var(--header-h)+5rem)]">
      {/* Background: one restrained wash, a fine grid, and a hard bottom rule */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-wash-invert" />
        <div className="absolute inset-0 bg-grid-dark mask-fade-b opacity-70" />
      </div>
      <div className="hairline-brand absolute inset-x-0 bottom-0" aria-hidden="true" />

      <div className="container mx-auto">
        <div
          className={cn(
            aside ? 'grid items-center gap-10 lg:grid-cols-12 lg:gap-14' : '',
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              aside ? 'lg:col-span-7' : centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
            )}
          >
            {eyebrow && (
              <span className="chip-dark mb-5">
                <span className="h-1 w-1 rounded-full bg-brand-green-400" />
                {eyebrow}
              </span>
            )}
            <h1 className="text-fluid-5xl font-bold leading-[1.05] tracking-tighter text-white">
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  'mt-5 max-w-2xl text-fluid-lg leading-relaxed text-white/70',
                  centered ? 'mx-auto' : 'text-just',
                )}
              >
                {subtitle}
              </p>
            )}
            {children && (
              <div
                className={cn(
                  'mt-8 flex flex-wrap items-center gap-3',
                  centered && 'justify-center',
                )}
              >
                {children}
              </div>
            )}
          </motion.div>

          {aside && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
