
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" onClick={() => window.location.href = '/'}>
            <Logo className="w-14 h-14 transition-transform duration-500 group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl tracking-tighter text-brand-dark">SAFE</span>
              <span className="text-[0.7rem] text-brand-blue font-bold tracking-[0.45em] mt-0.5">SHIELD</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-bold text-slate-700 hover:text-brand-blue transition-colors uppercase tracking-wider">{t.home}</a>
            <a href="#about" className="text-sm font-bold text-slate-700 hover:text-brand-blue transition-colors uppercase tracking-wider">{t.about}</a>
            <a href="#services" className="text-sm font-bold text-slate-700 hover:text-brand-blue transition-colors uppercase tracking-wider">{t.services}</a>
            
            <a href="#try-ai" className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-black uppercase tracking-widest hover:bg-brand-blue/20 transition-all">
              <Sparkles className="w-3 h-3 mr-2" />
              {t.tryAi}
            </a>

            <div className="relative group">
              <div className="flex items-center bg-slate-100/50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer">
                <Globe className="text-brand-blue mr-2 h-4 w-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent text-sm font-black text-brand-dark focus:ring-0 outline-none cursor-pointer"
                >
                  {Object.values(Language).map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>

            <a href="#contact" className="bg-brand-orange hover:bg-brand-orangeDark text-white px-8 py-3.5 rounded-full text-sm font-black shadow-xl shadow-brand-orange/30 transition-all hover:scale-105 uppercase tracking-widest">
              {t.contact}
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-brand-dark p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] flex flex-col p-8 animate-fade-in overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <span className="font-black text-2xl text-brand-dark">SAFE SHIELD</span>
            </div>
            <button onClick={toggleMenu} className="p-2 bg-slate-100 rounded-full text-brand-dark"><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-6 text-center">
            <a href="#home" onClick={toggleMenu} className="text-3xl font-black text-brand-dark hover:text-brand-blue transition-colors">{t.home}</a>
            <a href="#about" onClick={toggleMenu} className="text-3xl font-black text-brand-dark hover:text-brand-blue transition-colors">{t.about}</a>
            <a href="#services" onClick={toggleMenu} className="text-3xl font-black text-brand-dark hover:text-brand-blue transition-colors">{t.services}</a>
            
            {/* Language Selector for Mobile */}
            <div className="flex flex-col items-center gap-4 py-4 border-t border-slate-100 mt-4">
              <div className="flex items-center gap-2 text-slate-400 uppercase text-xs font-black tracking-widest mb-2">
                <Globe size={16} className="text-brand-blue" />
                Language
              </div>
              <div className="flex gap-4">
                {Object.values(Language).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                    }}
                    className={`px-6 py-3 rounded-2xl text-xl font-black transition-all ${
                      language === lang 
                        ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/30 scale-110' 
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <a href="#try-ai" onClick={toggleMenu} className="text-2xl font-black text-brand-blue bg-brand-blue/10 py-4 rounded-2xl flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6" />
              {t.tryAi}
            </a>
            <a href="#contact" onClick={toggleMenu} className="bg-brand-orange text-white py-5 rounded-2xl text-2xl font-black shadow-lg shadow-brand-orange/30">{t.contact}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
