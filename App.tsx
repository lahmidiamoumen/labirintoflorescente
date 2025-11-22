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
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

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
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        {renderContent()}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;