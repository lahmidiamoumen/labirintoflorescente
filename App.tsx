
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CookieConsent from './components/CookieConsent';
import TryWithAI from './components/TryWithAI';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  // Function to detect initial language based on localStorage or Browser Settings
  // SSR Guard: Check if window/localStorage exists before access
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return Language.EN;

    // 1. Check Local Storage (User preference persistence)
    try {
      const savedLang = localStorage.getItem('app-language') as Language;
      if (savedLang && Object.values(Language).includes(savedLang)) {
        return savedLang;
      }
    } catch (e) {
      // Ignore error in restricted environments
    }

    // 2. Check Browser Language (Auto-detection)
    if (navigator && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        return Language.PT;
      }
      if (browserLang.startsWith('fr')) {
        return Language.FR;
      }
    }

    // 3. Default Fallback
    return Language.EN;
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [currentRoute, setCurrentRoute] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  // Persist language choice when changed and update SEO tags
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-language', lang);
    }
  };

  // Dynamic SEO: Update Title and Meta Description when language changes
  useEffect(() => {
    const t = TRANSLATIONS[language];
    document.title = t.meta.title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
    
    // Update OpenGraph Title/Desc
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t.meta.description);

    // Set language attribute on html tag
    document.documentElement.lang = language.toLowerCase();

  }, [language]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentRoute) {
      case '#privacy-policy':
        return <PrivacyPolicy language={language} />;
      case '#terms-of-service':
        return <TermsOfService language={language} />;
      case '#cookie-policy':
        return <CookiePolicy language={language} />;
      case '#try-ai':
        return <TryWithAI language={language} />;
      default:
        return (
          <>
            <Hero language={language} />
            <About language={language} />
            <Services language={language} />
            <Contact language={language} />
          </>
        );
    }
  };

  return (
    <div className="antialiased text-gray-900 bg-white font-sans">
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
