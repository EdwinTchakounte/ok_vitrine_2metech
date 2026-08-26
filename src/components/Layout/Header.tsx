import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight, ChevronDown, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';
import { APK_VIEW_URL } from '../../lib/links';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import ThemeToggle from '../ui/ThemeToggle';
import { ButtonLink } from '../ui/Button';

/* ------------------------------------------------------------------
   Navigation: four top-level entries. `Solution` and `Entreprise`
   group the six pages the old bar listed side by side.
   ------------------------------------------------------------------ */

interface Leaf {
  key: string;
  path: string;
  /** i18n key under `menu.items` for the one-line description. */
  desc?: string;
}
interface Group {
  key: string;
  tag: string;
  children: Leaf[];
}
type NavEntry = ({ kind: 'link' } & Leaf) | ({ kind: 'group' } & Group);

const NAV: NavEntry[] = [
  { kind: 'link', key: 'home', path: '/' },
  {
    kind: 'group',
    key: 'solution',
    tag: 'menu.solutionTag',
    children: [
      { key: 'enmkit', path: '/enmkit', desc: 'enmkit' },
      { key: 'app', path: '/app', desc: 'app' },
      { key: 'video', path: '/installation-video', desc: 'video' },
    ],
  },
  {
    kind: 'group',
    key: 'company',
    tag: 'menu.companyTag',
    children: [
      { key: 'about', path: '/about', desc: 'about' },
      { key: 'awards', path: '/awards', desc: 'awards' },
      { key: 'partners', path: '/partners', desc: 'partners' },
    ],
  },
  { kind: 'link', key: 'installers', path: '/installers' },
];

/** Label lookup: grouped entries live under `menu.*`, pages under `nav.*`. */
const labelKey = (entry: NavEntry) =>
  entry.kind === 'group' ? `menu.${entry.key}` : `nav.${entry.key}`;

const isPathActive = (pathname: string, path: string) =>
  path === '/' ? pathname === '/' : pathname.startsWith(path);

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>('solution');
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpenGroup(null);
      setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hoverOpen = useCallback((key: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenGroup(key);
  }, []);

  const hoverClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 120);
  }, []);

  const isHome = location.pathname === '/';
  /* Only the home hero sits under a transparent header. */
  const transparent = !scrolled && isHome && !open && !openGroup;

  const groupActive = (g: Group) =>
    g.children.some((c) => isPathActive(location.pathname, c.path));

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-header transition-colors duration-300',
          transparent
            ? 'bg-transparent'
            : 'border-b border-line bg-canvas/85 backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/70',
        )}
      >
        <div className="container mx-auto">
          <div className="flex h-[var(--header-h)] items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 no-tap" aria-label="2metech">
              <img
                src="/logos/logo_couleur.png"
                alt=""
                className="h-8 w-auto sm:h-9"
                width={36}
                height={36}
              />
              <span
                className={cn(
                  'font-display text-[15px] font-bold tracking-tight',
                  transparent ? 'text-white' : 'text-fg',
                )}
              >
                2metech
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Principale">
              {NAV.map((entry) => {
                const active =
                  entry.kind === 'group'
                    ? groupActive(entry)
                    : isPathActive(location.pathname, entry.path);

                if (entry.kind === 'link') {
                  return (
                    <Link
                      key={entry.key}
                      to={entry.path}
                      className={cn(
                        'nav-link mx-3 py-2 text-[14px] font-medium transition-colors',
                        active && 'is-active',
                        transparent
                          ? active
                            ? 'text-white'
                            : 'text-white/80 hover:text-white'
                          : active
                            ? 'text-brand-blue-700 dark:text-brand-blue-300'
                            : 'text-fg-muted hover:text-fg',
                      )}
                    >
                      {t(labelKey(entry))}
                    </Link>
                  );
                }

                const isOpen = openGroup === entry.key;
                return (
                  <div
                    key={entry.key}
                    className="relative"
                    onMouseEnter={() => hoverOpen(entry.key)}
                    onMouseLeave={hoverClose}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenGroup(isOpen ? null : entry.key)}
                      className={cn(
                        'nav-link mx-3 inline-flex items-center gap-1 py-2 text-[14px] font-medium transition-colors',
                        (active || isOpen) && 'is-active',
                        transparent
                          ? active || isOpen
                            ? 'text-white'
                            : 'text-white/80 hover:text-white'
                          : active || isOpen
                            ? 'text-brand-blue-700 dark:text-brand-blue-300'
                            : 'text-fg-muted hover:text-fg',
                      )}
                    >
                      {t(labelKey(entry))}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 top-full w-[21rem] pt-3"
                        >
                          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-floating">
                            <p className="border-b border-line px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                              {t(entry.tag)}
                            </p>
                            <ul className="p-1.5">
                              {entry.children.map((c) => {
                                const childActive = isPathActive(
                                  location.pathname,
                                  c.path,
                                );
                                return (
                                  <li key={c.key}>
                                    <Link
                                      to={c.path}
                                      className={cn(
                                        'group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors',
                                        childActive
                                          ? 'bg-brand-blue-50 dark:bg-brand-blue-500/10'
                                          : 'hover:bg-surface-hover',
                                      )}
                                    >
                                      <span className="min-w-0 flex-1">
                                        <span
                                          className={cn(
                                            'block text-sm font-semibold',
                                            childActive
                                              ? 'text-brand-blue-700 dark:text-brand-blue-300'
                                              : 'text-fg',
                                          )}
                                        >
                                          {t(`nav.${c.key}`)}
                                        </span>
                                        {c.desc && (
                                          <span className="mt-0.5 block text-[12.5px] leading-snug text-fg-muted">
                                            {t(`menu.items.${c.desc}`)}
                                          </span>
                                        )}
                                      </span>
                                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-subtle opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>

                            {entry.key === 'solution' && (
                              <a
                                href={APK_VIEW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border-t border-line bg-surface-sunken px-4 py-3 text-[13px] font-semibold text-brand-blue-700 transition-colors hover:bg-surface-hover dark:text-brand-blue-300"
                              >
                                <Download className="h-3.5 w-3.5" />
                                {t('menu.download')}
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher
                variant={transparent ? 'dark' : 'light'}
                className="hidden md:inline-flex"
              />
              <ThemeToggle variant={transparent ? 'invert' : 'default'} />

              <ButtonLink
                to="/contact"
                variant={transparent ? 'glass' : 'primary'}
                size="sm"
                className="hidden md:inline-flex"
                iconRight={<ArrowRight className="h-3.5 w-3.5" />}
              >
                {t('nav.contact')}
              </ButtonLink>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? t('common.close') : t('common.menu')}
                className={cn(
                  'no-tap inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors lg:hidden',
                  transparent
                    ? 'border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/[0.18]'
                    : 'border-line bg-surface text-fg hover:bg-surface-hover',
                )}
              >
                {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-drawer bg-ink-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-drawer flex w-[89%] max-w-sm flex-col border-l border-line bg-canvas lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-line px-5">
                <div className="flex items-center gap-2.5">
                  <img src="/logos/logo_couleur.png" alt="" className="h-8 w-auto" />
                  <span className="font-display text-[15px] font-bold text-fg">2metech</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t('common.close')}
                  className="no-tap inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-fg hover:bg-surface-hover"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV.map((entry) => {
                    if (entry.kind === 'link') {
                      const active = isPathActive(location.pathname, entry.path);
                      return (
                        <li key={entry.key}>
                          <Link
                            to={entry.path}
                            className={cn(
                              'flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors',
                              active
                                ? 'bg-brand-blue-50 text-brand-blue-700 dark:bg-brand-blue-500/10 dark:text-brand-blue-300'
                                : 'text-fg hover:bg-surface-hover',
                            )}
                          >
                            {t(labelKey(entry))}
                            <ArrowRight className="h-4 w-4 opacity-40" />
                          </Link>
                        </li>
                      );
                    }

                    const expanded = mobileGroup === entry.key;
                    return (
                      <li key={entry.key}>
                        <button
                          type="button"
                          onClick={() => setMobileGroup(expanded ? null : entry.key)}
                          aria-expanded={expanded}
                          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-fg transition-colors hover:bg-surface-hover"
                        >
                          {t(labelKey(entry))}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 text-fg-subtle transition-transform duration-200',
                              expanded && 'rotate-180',
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <li className="ml-4 space-y-0.5 border-l border-line pl-3 pt-1">
                                {entry.children.map((c) => {
                                  const childActive = isPathActive(
                                    location.pathname,
                                    c.path,
                                  );
                                  return (
                                    <Link
                                      key={c.key}
                                      to={c.path}
                                      className={cn(
                                        'block rounded-md px-3 py-2.5 text-sm transition-colors',
                                        childActive
                                          ? 'bg-brand-blue-50 font-semibold text-brand-blue-700 dark:bg-brand-blue-500/10 dark:text-brand-blue-300'
                                          : 'text-fg-muted hover:bg-surface-hover hover:text-fg',
                                      )}
                                    >
                                      {t(`nav.${c.key}`)}
                                    </Link>
                                  );
                                })}
                              </li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={APK_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2.5 rounded-lg border border-line bg-surface-sunken px-4 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-hover"
                >
                  <Download className="h-4 w-4 text-brand-green-500" />
                  {t('menu.download')}
                </a>
              </nav>

              <div className="shrink-0 space-y-4 border-t border-line px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
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
