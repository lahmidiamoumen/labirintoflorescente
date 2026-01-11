
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { Reveal } from './components/Reveal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CookieConsent from './components/CookieConsent';
import TryWithAI from './components/TryWithAI';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return Language.EN;
    try {
      const savedLang = localStorage.getItem('app-language') as Language;
      if (savedLang && Object.values(Language).includes(savedLang)) return savedLang;
    } catch (e) {}
    if (navigator && navigator.language) {
      if (navigator.language.startsWith('pt')) return Language.PT;
      if (navigator.language.startsWith('fr')) return Language.FR;
    }
    return Language.EN;
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [currentRoute, setCurrentRoute] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') localStorage.setItem('app-language', lang);
  };

  useEffect(() => {
    const t = TRANSLATIONS[language];
    document.title = t.meta.title;
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  useEffect(() => {
    const handleHashChange = () => setCurrentRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentRoute) {
      case '#privacy-policy': return <PrivacyPolicy language={language} />;
      case '#terms-of-service': return <TermsOfService language={language} />;
      case '#cookie-policy': return <CookiePolicy language={language} />;
      case '#try-ai': return <TryWithAI language={language} />;
      default:
        return (
          <>
            <Hero language={language} />
            <Reveal width="100%" mode="blur">
              <About language={language} />
            </Reveal>
            <Reveal width="100%" mode="slide">
              <Services language={language} />
            </Reveal>
            <Reveal width="100%" mode="fade">
              <Gallery language={language} />
            </Reveal>
            <Reveal width="100%" mode="fade">
              <Contact language={language} />
            </Reveal>
          </>
        );
    }
  };

  return (
    <div className="antialiased text-slate-900 bg-white font-sans selection:bg-brand-blue/30">
      <Navbar language={language} setLanguage={handleSetLanguage} />
      <main>
        {renderContent()}
      </main>
      <Footer language={language} />
      <CookieConsent language={language} />
    </div>
  );
};

export default App;
