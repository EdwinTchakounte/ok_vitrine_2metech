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
  Send,
  Download,
  ArrowUpRight,
} from 'lucide-react';
import { APK_VIEW_URL } from '../../lib/links';

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const productLinks = [
    { label: t('nav.enmkit'), path: '/enmkit' },
    { label: t('nav.app'), path: '/app' },
    { label: t('nav.video'), path: '/installation-video' },
    { label: t('nav.installers'), path: '/installers' },
  ];

  const companyLinks = [
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.awards'), path: '/awards' },
    { label: t('nav.partners'), path: '/partners' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // No backend wired for the newsletter yet; the field simply resets.
    setEmail('');
  };

  return (
    <footer className="relative isolate overflow-hidden bg-invert text-white">
      <div className="hairline-brand absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-wash-invert opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" aria-hidden="true" />

      <div className="container mx-auto pb-10 pt-14 lg:pb-12 lg:pt-18">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-md bg-white p-1.5">
                <img src="/logos/logo_couleur.png" alt="" className="h-7 w-auto" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold leading-none">
                  2metech
                </span>
                <span className="mt-1 block text-[11px] tracking-wide text-white/50">
                  {t('footer.tagline')}
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/65 text-just">
              {t('footer.description')}
            </p>

            <a
              href={APK_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/[0.12]"
            >
              <Download className="h-4 w-4 text-brand-green-400" />
              {t('app.download')}
            </a>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav className="lg:col-span-2" aria-label={t('menu.solution')}>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              {t('menu.solution')}
            </h2>
            <ul className="mt-5 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              {t('menu.company')}
            </h2>
            <ul className="mt-5 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              {t('contact.title')}
            </h2>
            <ul className="mt-5 space-y-4 text-[14px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-300" />
                <span className="leading-relaxed text-white/70">{t('contact.address')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-400" />
                <a
                  href="tel:+237696372245"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  +237 696 372 245
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-300" />
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="break-words text-white/70 transition-colors hover:text-white"
                >
                  {t('contact.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              {t('footer.newsletterTitle')}
            </h2>
            <p className="mt-5 text-[13.5px] leading-relaxed text-white/65 text-just">
              {t('footer.newsletterText')}
            </p>
            <form onSubmit={handleNewsletter} className="mt-4 space-y-2.5">
              <label htmlFor="newsletter-email" className="sr-only">
                {t('footer.newsletterPlaceholder')}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletterPlaceholder')}
                className="w-full rounded-md border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-green-400 focus:outline-none focus:ring-2 focus:ring-brand-green-400/25"
              />
              <button type="submit" className="btn-primary btn-md w-full">
                <Send className="h-3.5 w-3.5" />
                <span>{t('footer.newsletterSubmit')}</span>
              </button>
            </form>
            <p className="mt-4 text-[12px] text-white/45">{t('footer.madeIn')}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 py-5 text-[12px] text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} 2metech. {t('footer.rights')}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-white">
              {t('footer.legal')}
            </a>
            <a href="#" className="transition-colors hover:text-white">
              {t('footer.privacy')}
            </a>
            <a href="#" className="transition-colors hover:text-white">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
