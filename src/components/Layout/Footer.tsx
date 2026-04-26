import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
  Heart,
} from 'lucide-react';

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const navLinks = [
    { key: 'about', path: '/about' },
    { key: 'enmkit', path: '/enmkit' },
    { key: 'awards', path: '/awards' },
    { key: 'partners', path: '/partners' },
    { key: 'installers', path: '/installers' },
    { key: 'contact', path: '/contact' },
  ];

  const exploreLinks = [
    { label: t('nav.video'), path: '/installation-video' },
    { label: t('footer.legal'), path: '#' },
    { label: t('footer.privacy'), path: '#' },
    { label: t('footer.terms'), path: '#' },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // No backend wired for newsletter — just visual feedback for now
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      {/* Decorative top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-blue-500 to-transparent" />

      {/* Mesh background */}
      <div className="absolute inset-0 bg-mesh-dark opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />

      <div className="relative">
        {/* Top: brand + newsletter */}
        <div className="container mx-auto pt-16 lg:pt-20 pb-10 lg:pb-14">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-2xl bg-white p-2 shadow-soft">
                  <img
                    src="/logos/logo_couleur.png"
                    alt="2metech"
                    className="h-8 w-auto"
                  />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold leading-none">
                    2metech
                  </p>
                  <p className="text-xs text-white/60 mt-1 tracking-wide">
                    {t('footer.tagline')}
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed max-w-md mb-6">
                {t('footer.description')}
              </p>

              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:bg-gradient-brand hover:text-white hover:scale-105 hover:border-transparent"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">
                  {t('footer.newsletterTitle')}
                </h3>
                <p className="text-white/70 text-sm mb-5">
                  {t('footer.newsletterText')}
                </p>
                <form
                  onSubmit={handleNewsletter}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletterPlaceholder')}
                    className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-md focus:border-brand-green-400 focus:outline-none focus:ring-2 focus:ring-brand-green-400/30"
                  />
                  <button
                    type="submit"
                    className="btn-primary btn-md shrink-0"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t('footer.newsletterSubmit')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="container mx-auto pb-10 lg:pb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/10 pt-10 lg:pt-12">
            {/* Nav */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60 mb-5">
                {t('footer.links')}
              </h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.key}>
                    <Link
                      to={l.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 text-brand-green-400 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="-ml-1 group-hover:ml-0 transition-all">
                        {t(`nav.${l.key}`)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60 mb-5">
                {t('footer.explore')}
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60 mb-5">
                {t('contact.title')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-500/15 text-brand-blue-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-white/80 leading-relaxed">
                    {t('contact.address')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-green-500/15 text-brand-green-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a
                    href="tel:+237696372245"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    +237 696 372 245
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-500/15 text-brand-blue-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="text-sm text-white/80 hover:text-white transition-colors break-all"
                  >
                    {t('contact.email')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Made in */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60 mb-5">
                {t('common.country')}
              </h4>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Heart className="h-4 w-4 text-brand-green-400" />
                  {t('footer.madeIn')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>
              © {new Date().getFullYear()} 2metech. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                {t('footer.legal')}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
