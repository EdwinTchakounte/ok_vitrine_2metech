import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n';

import { ThemeProvider } from './lib/theme';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppFloat from './components/Layout/WhatsAppFloat';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Awards = lazy(() => import('./pages/Awards'));
const Partners = lazy(() => import('./pages/Partners'));
const Installers = lazy(() => import('./pages/Installers'));
const Contact = lazy(() => import('./pages/Contact'));
const Enmkit = lazy(() => import('./pages/Enmkit'));
const MobileApp = lazy(() => import('./pages/MobileApp'));
const InstallationVideoCard = lazy(() => import('./pages/Guide_video'));

const Loader: React.FC = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-[60vh] items-center justify-center"
  >
    <span className="h-8 w-8 animate-spin rounded-full border-2 border-line-strong border-t-brand-blue-500" />
  </div>
);

const FullLoader: React.FC = () => (
  <div className="flex min-h-screen items-center justify-center bg-canvas">
    <Loader />
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enmkit" element={<Enmkit />} />
        <Route path="/app" element={<MobileApp />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/installers" element={<Installers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/installation-video" element={<InstallationVideoCard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const { ready } = useTranslation();

  return (
    <ThemeProvider>
      {!ready ? (
        <FullLoader />
      ) : (
        <Router>
          <ScrollToTop />
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-blue-700 focus:shadow-floating"
          >
            Skip to content
          </a>
          <div className="min-h-screen bg-canvas text-fg">
            <Header />
            <main id="main">
              <Suspense fallback={<Loader />}>
                <AnimatedRoutes />
              </Suspense>
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
