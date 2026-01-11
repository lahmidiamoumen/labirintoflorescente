
import React, { useState } from 'react';
/* Added missing 'Send' icon import from lucide-react */
import { Mail, Phone, ArrowRight, CheckCircle, User, Globe2, Send } from 'lucide-react';
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
  
  const regions = {
    [Language.EN]: { FR: "France & Switzerland", INT: "English / International" },
    [Language.FR]: { FR: "France et Suisse", INT: "Anglaise / International" },
    [Language.PT]: { FR: "França e Suíça", INT: "Inglês / Internacional" }
  };

  const commercials = [
    {
      name: "Nabil",
      region: regions[language].FR,
      phone: "+33 638 051 006",
      icon: <Globe2 className="w-5 h-5" />,
      tag: t.commercialLabel
    },
    {
      name: "Moumen",
      region: regions[language].INT,
      phone: "+351 920 681 930",
      icon: <User className="w-5 h-5" />,
      tag: t.commercialLabel
    }
  ];

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=Inquiry from ${formData.name}&body=Service: ${formData.service}%0D%0A%0D%0AMessage: ${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="sticky top-32">
            <h2 className="text-brand-orange font-black uppercase tracking-[0.4em] text-sm mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-orange"></span>
              {language === Language.PT ? "Contacto" : language === Language.FR ? "Contact" : "Connect"}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-brand-dark mb-10 leading-none">
              {t.title}
            </h3>
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>

            <div className="space-y-8">
              {commercials.map((comm, idx) => (
                <div key={idx} className="group flex items-center gap-6 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border border-slate-200 transition-colors shadow-sm ${idx === 0 ? 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white' : 'bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'}`}>
                    {comm.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{comm.tag}</p>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <p className="text-xs font-bold text-brand-blue uppercase">{comm.region}</p>
                    </div>
                    <p className="text-lg font-black text-brand-dark">{comm.name}</p>
                    <a href={`tel:${comm.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-slate-600 hover:text-brand-blue transition-colors">
                      {comm.phone}
                    </a>
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </div>
              ))}

              <div className="flex items-center gap-6 p-4">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Administration</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-xl font-black text-brand-dark hover:text-brand-orange transition-colors">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={handleQuoteRequest}>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">{t.form.name}</label>
                  <input 
                    type="text" required
                    className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-bold text-brand-dark placeholder:text-slate-300" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">{t.form.email}</label>
                  <input 
                    type="email" required
                    className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-bold text-brand-dark placeholder:text-slate-300" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">{t.form.service}</label>
                  <select 
                    required
                    className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-bold text-brand-dark appearance-none"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">{t.form.servicePlaceholder}</option>
                    {(Object.values(services) as ServiceContent[]).map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">{t.form.message}</label>
                  <textarea 
                    rows={4} required
                    className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-bold text-brand-dark placeholder:text-slate-300 resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </div>
              
              <button className="w-full group bg-brand-dark hover:bg-brand-blue text-white font-black py-6 rounded-2xl shadow-xl shadow-slate-900/10 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-4">
                {t.form.submit}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <CheckCircle size={14} className="text-brand-blue" />
                {language === Language.PT ? "Resposta em 24 horas" : language === Language.FR ? "Réponse sous 24h" : "Response within 24h"}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
