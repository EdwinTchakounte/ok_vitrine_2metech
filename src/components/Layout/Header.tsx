import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { ButtonLink } from '../ui/Button';

const NAV_ITEMS = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'enmkit', path: '/enmkit' },
  { key: 'awards', path: '/awards' },
  { key: 'partners', path: '/partners' },
  { key: 'installers', path: '/installers' },
] as const;

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = location.pathname === '/';
  const transparent = !scrolled && isHome && !open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          transparent
            ? 'bg-transparent'
            : 'bg-white/85 backdrop-blur-xl border-b border-ink-100/60 shadow-soft',
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-[var(--header-h)]">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 no-tap"
              aria-label="2metech home"
            >
              <img
                src="/logos/logo_couleur.png"
                alt="2metech"
                className="h-9 w-auto sm:h-10 transition-transform duration-300 hover:scale-105"
              />
              <span
                className={cn(
                  'hidden sm:inline-block font-display text-base font-semibold tracking-tight',
                  transparent ? 'text-white' : 'text-ink-900',
                )}
              >
                2metech
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={cn(
                      'nav-link text-sm font-medium transition-colors duration-300',
                      active
                        ? transparent
                          ? 'text-white is-active'
                          : 'text-brand-blue-700 is-active'
                        : transparent
                          ? 'text-white/85 hover:text-white'
                          : 'text-ink-700 hover:text-brand-blue-700',
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                );
              })}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher
                variant={transparent ? 'dark' : 'light'}
                className="hidden md:inline-flex"
              />

              <ButtonLink
                to="/contact"
                variant={transparent ? 'glass' : 'primary'}
                size="sm"
                className="hidden md:inline-flex"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                {t('nav.contact')}
              </ButtonLink>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? t('common.close') : t('common.menu')}
                className={cn(
                  'lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full no-tap transition-colors',
                  transparent
                    ? 'bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20'
                    : 'bg-ink-100 text-ink-900 hover:bg-ink-200',
                )}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="m"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-sm bg-white shadow-floating lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between border-b border-ink-100 px-6 h-[var(--header-h)]">
                <img src="/logos/logo_couleur.png" alt="2metech" className="h-9" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t('common.close')}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 text-ink-900 hover:bg-ink-200 transition-colors no-tap"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.concat({ key: 'contact', path: '/contact' } as any).map(
                    (item, i) => {
                      const active =
                        item.path === '/'
                          ? location.pathname === '/'
                          : location.pathname.startsWith(item.path);
                      return (
                        <motion.li
                          key={item.key}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.06 + i * 0.04, duration: 0.4 }}
                        >
                          <Link
                            to={item.path}
                            className={cn(
                              'flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold transition-all',
                              active
                                ? 'bg-gradient-brand-soft text-brand-blue-700'
                                : 'text-ink-800 hover:bg-ink-50',
                            )}
                          >
                            <span>{t(`nav.${item.key}`)}</span>
                            <ArrowRight
                              className={cn(
                                'h-4 w-4 transition-transform duration-300',
                                active ? 'translate-x-1' : 'opacity-40',
                              )}
                            />
                          </Link>
                        </motion.li>
                      );
                    },
                  )}
                </ul>
              </nav>

              <div className="border-t border-ink-100 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                    {t('common.language')}
                  </span>
                  <LanguageSwitcher />
                </div>
                <ButtonLink
                  to="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  {t('nav.contact')}
                </ButtonLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
