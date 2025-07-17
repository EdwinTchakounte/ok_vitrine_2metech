import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppFloat from './components/Layout/WhatsAppFloat';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Partners from './pages/Partners';
import Installers from './pages/Installers';
import Contact from './pages/Contact';

function App() {
  const { ready } = useTranslation();

  if (!ready) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#1876bc] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/enmkit" element={<Home />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/gallery" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/installers" element={<Installers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;