
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[language].nav;

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-brand-dark/90 backdrop-blur-xl border-brand-gray/50 py-2 shadow-lg' 
          : 'bg-transparent border-transparent py-4'
      }`}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 group cursor-pointer flex items-center gap-3" onClick={() => window.scrollTo(0,0)}>
            <Logo className="w-10 h-10 sm:w-12 sm:h-12 text-white transition-transform group-hover:scale-105 duration-300" />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-wider text-white group-hover:text-slate-200 transition-colors">
                LABIRINTO
              </span>
              <span className="text-[0.6rem] sm:text-[0.65rem] md:text-xs text-brand-orange tracking-[0.25em] md:tracking-[0.35em] font-semibold group-hover:text-brand-blue transition-colors">
                FLORESCENTE
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white hover:border-b-2 hover:border-brand-orange transition-all duration-200 pb-1">{t.home}</a>
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white hover:border-b-2 hover:border-brand-orange transition-all duration-200 pb-1">{t.about}</a>
              <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white hover:border-b-2 hover:border-brand-orange transition-all duration-200 pb-1">{t.services}</a>
              
              {/* Accessible Language Switcher */}
              <div className="relative group">
                <label htmlFor="language-select" className="sr-only">Select Language</label>
                <div className="flex items-center bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors border border-white/10">
                  <Globe className="text-brand-orange mr-2 h-4 w-4" aria-hidden="true" />
                  <select
                    id="language-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="appearance-none bg-transparent border-none text-sm font-medium text-white focus:ring-0 cursor-pointer pr-6 py-0 outline-none"
                    aria-label="Select language"
                    style={{ backgroundImage: 'none' }} 
                  >
                    {Object.values(Language).map((lang) => (
                      <option key={lang} value={lang} className="text-brand-dark bg-white">
                        {lang === Language.EN ? 'English' : lang === Language.FR ? 'Français' : 'Português'}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="h-3 w-3 text-slate-400 absolute right-3 pointer-events-none group-hover:text-white" />
                </div>
              </div>

              <a href="#contact" className="bg-brand-orange hover:bg-brand-orangeDark text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300">
                {t.contact}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-slate-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} 
        style={{ top: '0', paddingTop: '80px' }}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col h-full">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-slate-400 hover:text-white" aria-label="Close menu">
                <X size={32} />
            </button>
            
            <div className="space-y-6 mt-8 text-center">
                <a href="#home" onClick={toggleMenu} className="block text-2xl font-medium text-white hover:text-brand-orange transition-colors">{t.home}</a>
                <a href="#about" onClick={toggleMenu} className="block text-2xl font-medium text-white hover:text-brand-orange transition-colors">{t.about}</a>
                <a href="#services" onClick={toggleMenu} className="block text-2xl font-medium text-white hover:text-brand-orange transition-colors">{t.services}</a>
                <a href="#contact" onClick={toggleMenu} className="block text-2xl font-medium text-white hover:text-brand-orange transition-colors">{t.contact}</a>
            </div>

            <div className="mt-auto mb-12">
                <p className="text-center text-slate-400 mb-4 text-sm uppercase tracking-widest">Language</p>
                <div className="flex items-center justify-center space-x-4">
                    {Object.values(Language).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => { setLanguage(lang); toggleMenu(); }}
                        aria-label={`Switch to ${lang}`}
                        className={`px-4 py-2 rounded-full text-sm font-bold border ${language === lang ? 'bg-brand-orange border-brand-orange text-white' : 'border-slate-700 text-slate-400'}`}
                    >
                        {lang}
                    </button>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
