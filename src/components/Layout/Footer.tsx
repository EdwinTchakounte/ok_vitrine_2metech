import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { key: 'about', path: '/about' },
    { key: 'enmkit', path: '/enmkit' },
    { key: 'awards', path: '/awards' },
    { key: 'gallery', path: '/gallery' },
    { key: 'partners', path: '/partners' },
    { key: 'installers', path: '/installers' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-lg flex items-center justify-center">
                <img src="/logos/logo_couleur_blanche.png" alt="Description de l'image" />
              </div>
              <span className="text-2xl font-bold">2MeTech</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1876bc] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#84c450] transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#84c450] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t('contact.address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#84c450] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+237 696 372 245</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#84c450] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t('contact.email')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 2MeTech. {t('footer.rights')}.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.legal')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;