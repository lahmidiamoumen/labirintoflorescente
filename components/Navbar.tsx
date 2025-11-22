import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/95 backdrop-blur-sm text-white shadow-lg border-b border-brand-gray" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-white">LABIRINTO</span>
              <span className="text-xs text-brand-orange tracking-[0.3em]">FLORESCENTE</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-brand-orange transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">{t.home}</a>
              <a href="#about" className="hover:text-brand-orange transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">{t.about}</a>
              <a href="#services" className="hover:text-brand-orange transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">{t.services}</a>
              <a href="#contact" className="bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">{t.contact}</a>
              
              {/* Accessible Language Switcher */}
              <div className="relative ml-4 border-l border-gray-700 pl-4 flex items-center">
                <Globe className="text-brand-orange mr-2 h-4 w-4" aria-hidden="true" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer hover:text-brand-orange transition-colors appearance-none pr-4"
                  aria-label="Select language"
                >
                  {Object.values(Language).map((lang) => (
                    <option key={lang} value={lang} className="text-brand-dark bg-white">
                      {lang === Language.EN ? 'English' : lang === Language.FR ? 'Français' : 'Português'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={toggleMenu} className="text-gray-300 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium">{t.home}</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium">{t.about}</a>
            <a href="#services" onClick={toggleMenu} className="text-gray-300 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium">{t.services}</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium">{t.contact}</a>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-700">
             <div className="flex items-center justify-around px-5">
                {Object.values(Language).map((lang) => (
                   <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setIsOpen(false); }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${language === lang ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-white'}`}
                    aria-pressed={language === lang}
                   >
                     {lang}
                   </button>
                ))}
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;