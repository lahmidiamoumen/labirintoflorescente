import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
                <span className="font-bold text-2xl tracking-wider text-white cursor-pointer" onClick={() => window.location.hash = ''}>LABIRINTO</span>
                <span className="text-xs text-brand-orange tracking-[0.35em] font-semibold">FLORESCENTE</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6 text-slate-400">
                Unipessoal Lda. <br/>
                Setting the standard for environmental containment and safety in the European construction industry.
            </p>
            <div className="flex space-x-4">
                <a href="#" aria-label="Follow us on Facebook" className="text-slate-400 hover:text-brand-orange transition-colors"><Facebook size={20}/></a>
                <a href="#" aria-label="Follow us on Twitter" className="text-slate-400 hover:text-brand-orange transition-colors"><Twitter size={20}/></a>
                <a href="#" aria-label="Connect with us on LinkedIn" className="text-slate-400 hover:text-brand-orange transition-colors"><Linkedin size={20}/></a>
            </div>
            </div>

            {/* Quick Links */}
            <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-b border-slate-800 pb-2 inline-block">Navigation</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#home" className="hover:text-brand-orange transition-colors flex items-center text-slate-400"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Home</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors flex items-center text-slate-400"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>About</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors flex items-center text-slate-400"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Services</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors flex items-center text-slate-400"><span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Contact</a></li>
            </ul>
            </div>

            {/* Legal */}
            <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-b border-slate-800 pb-2 inline-block">Legal</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#privacy-policy" className="hover:text-brand-orange transition-colors text-slate-400">{t.privacy}</a></li>
                <li><a href="#terms-of-service" className="hover:text-brand-orange transition-colors text-slate-400">{t.terms}</a></li>
                <li><a href="#cookie-policy" className="hover:text-brand-orange transition-colors text-slate-400">{t.cookies}</a></li>
            </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-500">&copy; {currentYear} LABIRINTO FLORESCENTE. {t.rights}</p>
            <p className="text-xs text-slate-600 mt-2 md:mt-0">Designed for Industrial Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;