
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { Language, ServiceContent } from '../types';
import { TRANSLATIONS } from '../constants';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;
  const services = TRANSLATIONS[language].services.items;
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const COMPANY_EMAIL = "safeshield@gmail.com";
  const COMPANY_PHONE = "+351 920 681 930";

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=Inquiry&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6">
              Connect
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-none">
              {t.title}
            </h3>
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                  <Phone className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                  <p className="text-2xl font-black text-slate-900">{COMPANY_PHONE}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                  <Mail className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-2xl font-black text-slate-900">{COMPANY_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
            <form className="space-y-8" onSubmit={handleQuoteRequest}>
              <div className="space-y-6">
                <input 
                  type="text" placeholder={t.form.name} 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-brand-blue transition-colors font-semibold" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" placeholder={t.form.email} 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-brand-blue transition-colors font-semibold" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <select 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-brand-blue transition-colors font-semibold appearance-none"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">{t.form.servicePlaceholder}</option>
                  {/* Fix: Explicitly cast values to ServiceContent array to resolve 'unknown' type error */}
                  {(Object.values(services) as ServiceContent[]).map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
                <textarea 
                  rows={4} placeholder={t.form.message} 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-brand-blue transition-colors font-semibold resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full bg-brand-blue hover:bg-sky-600 text-white font-black py-5 rounded-xl shadow-lg shadow-brand-blue/20 transition-all uppercase tracking-widest flex items-center justify-center gap-3">
                {t.form.submit}
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
