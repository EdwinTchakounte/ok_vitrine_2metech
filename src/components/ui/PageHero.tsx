import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
}) => {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh-dark opacity-95" />
        <div className="absolute inset-0 bg-grid-dark opacity-50 mask-fade-y" />
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-blue-500/30 blur-[120px] animate-blob" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-green-500/25 blur-[120px] animate-blob" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'max-w-4xl',
            align === 'center' ? 'mx-auto text-center' : 'text-left',
          )}
        >
          {eyebrow && (
            <span className="chip-dark mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green-400 animate-pulse" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-fluid-6xl font-bold leading-[1.04] tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-fluid-lg lg:text-fluid-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex justify-center">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
