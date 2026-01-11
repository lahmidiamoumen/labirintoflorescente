
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-slate-900">SAFE SHIELD</span>
                <span className="text-[0.6rem] text-brand-blue font-bold tracking-[0.4em]">{t.brandSubtitle}</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              {t.tagline}
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{t.unitsTitle}</h4>
            <div className="flex flex-col gap-3 text-slate-500 font-bold text-sm">
              <a href="#services" className="hover:text-brand-blue transition-colors">
                {language === Language.PT ? "Sistemas de Termorretrátil" : language === Language.FR ? "Systèmes Thermorétractables" : "Heat-Shrink Systems"}
              </a>
              <a href="#services" className="hover:text-brand-blue transition-colors">
                {language === Language.PT ? "Descontaminação Amianto" : language === Language.FR ? "Désamiantage Technique" : "Asbestos Decontamination"}
              </a>
              <a href="#services" className="hover:text-brand-blue transition-colors">
                {language === Language.PT ? "Redes de Proteção" : language === Language.FR ? "Filets de Protection" : "Safety Netting"}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{t.contactTitle}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">&copy; {new Date().getFullYear()} SAFE SHIELD. {t.rights}</p>
          <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#privacy-policy">{t.privacy}</a>
            <a href="#terms-of-service">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
