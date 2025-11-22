
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CookieConsentProps {
  language: Language;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = TRANSLATIONS[language].cookieConsent;

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-brand-darker/95 backdrop-blur-md border-t border-slate-700 p-4 md:p-6 animate-slide-up shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
          <p>
            {t.message}{' '}
            <a 
              href="#cookie-policy" 
              className="text-brand-orange hover:text-white underline underline-offset-2 transition-colors"
            >
              {t.privacyLink}
            </a>
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0 w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-slate-700 md:border-transparent hover:border-slate-600"
          >
            {t.decline}
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2 text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-lg shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;