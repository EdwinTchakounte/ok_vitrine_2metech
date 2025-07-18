import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'enmkit', path: '/enmkit' },
    { key: 'awards', path: '/awards' },
    // { key: 'gallery', path: '/gallery' },
    { key: 'partners', path: '/partners' },
    { key: 'installers', path: '/installers' },
    { key: 'contact', path: '/contact' }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1876bc] to-[#84c450] rounded-lg flex items-center justify-center">
              <img src="/logos/logo_couleur_blanche.png" alt="Description de l'image" />
            </div>
            <span className="text-xl font-bold text-gray-900">2metech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#1876bc] ${
                  location.pathname === item.path
                    ? 'text-[#1876bc]'
                    : isScrolled ? 'text-gray-700' : 'text-gray-900'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                isScrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50 ${
                    location.pathname === item.path
                      ? 'text-[#1876bc] bg-blue-50'
                      : 'text-gray-700'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;