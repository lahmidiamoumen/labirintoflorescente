
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Sparkles } from 'lucide-react';
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
      scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.location.href = '/'}>
            <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className={`font-extrabold text-xl tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>SAFE</span>
              <span className="text-[0.65rem] text-brand-blue font-bold tracking-[0.4em]">SHIELD</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors">{t.home}</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors">{t.about}</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors">{t.services}</a>
            
            <a href="#try-ai" className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider hover:bg-brand-blue/10 transition-all">
              <Sparkles className="w-3 h-3 mr-2" />
              {t.tryAi}
            </a>

            <div className="relative group">
              <div className="flex items-center bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer">
                <Globe className="text-brand-blue mr-2 h-4 w-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent text-sm font-bold text-slate-700 focus:ring-0 outline-none cursor-pointer"
                >
                  {Object.values(Language).map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>

            <a href="#contact" className="bg-brand-orange hover:bg-brand-orangeDark text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-105">
              {t.contact}
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-900"><Menu size={28} /></button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <Logo className="w-12 h-12" />
            <button onClick={toggleMenu}><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-8 text-center">
            <a href="#home" onClick={toggleMenu} className="text-3xl font-bold text-slate-900">{t.home}</a>
            <a href="#about" onClick={toggleMenu} className="text-3xl font-bold text-slate-900">{t.about}</a>
            <a href="#services" onClick={toggleMenu} className="text-3xl font-bold text-slate-900">{t.services}</a>
            <a href="#try-ai" onClick={toggleMenu} className="text-2xl font-bold text-brand-blue">{t.tryAi}</a>
            <a href="#contact" onClick={toggleMenu} className="bg-brand-orange text-white py-4 rounded-xl text-xl font-bold">{t.contact}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
