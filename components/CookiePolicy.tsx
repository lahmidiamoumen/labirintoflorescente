import React, { useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CookiePolicyProps {
  language: Language;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ language }) => {
  const t = TRANSLATIONS[language].legal.cookies;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-brand-orange font-bold uppercase tracking-wider mb-8">
            {t.lastUpdated}
          </p>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t.intro}
            </p>

            <div className="space-y-8">
              {t.sections.map((section, index) => (
                <div key={index} className="border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-brand-dark mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;