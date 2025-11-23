
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;
  const services = TRANSLATIONS[language].services.items;
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const COMPANY_EMAIL = "labirintoflorescente@gmail.com";
  const COMPANY_PHONE = "+351 920 681 930";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show toast notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);

    const subject = `Quote Request: ${formData.service || 'General Inquiry'} - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Service Interest: ${formData.service || 'Not Specified'}

Message / Project Details:
${formData.message}
    `.trim();

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-brand-darker text-white overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Info & CTA */}
          <div className="lg:col-span-2 space-y-10 sm:space-y-12">
            <div>
                <h2 className="text-brand-orange font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
                {language === Language.PT ? "Fale Connosco" : language === Language.FR ? "Contactez-nous" : "Contact Us"}
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                {t.title}
                </h3>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed border-l-2 border-slate-700 pl-6">
                {t.subtitle}
                </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="flex items-start group" aria-label={`Call us at ${COMPANY_PHONE}`}>
                <div className="bg-slate-800 p-3 sm:p-4 rounded-xl group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-brand-orange group-hover:text-white" />
                </div>
                <div className="ml-4 sm:ml-6">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
                  <p className="text-lg sm:text-xl font-semibold mt-1 group-hover:text-brand-orange transition-colors whitespace-nowrap">{COMPANY_PHONE}</p>
                </div>
              </a>
              
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-start group" aria-label={`Email us at ${COMPANY_EMAIL}`}>
                <div className="bg-slate-800 p-3 sm:p-4 rounded-xl group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                   <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-brand-orange group-hover:text-white" />
                </div>
                <div className="ml-4 sm:ml-6 w-full overflow-hidden">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm sm:text-base md:text-xl font-semibold mt-1 group-hover:text-brand-orange transition-colors break-all">
                    {COMPANY_EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-start group">
                <div className="bg-slate-800 p-3 sm:p-4 rounded-xl group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-brand-orange group-hover:text-white" />
                </div>
                <div className="ml-4 sm:ml-6">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{t.address}</p>
                  <p className="text-lg sm:text-xl font-semibold mt-1 group-hover:text-brand-orange transition-colors">Lisboa, Portugal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Quote Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl text-gray-900 border-t-8 border-brand-orange relative">
            <div className="mb-8">
                <h4 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  {language === Language.PT ? "Pedir Orçamento" : language === Language.FR ? "Demander un Devis" : "Request a Quote"}
                </h4>
                <p className="text-slate-500 text-sm mt-2">
                  {language === Language.PT 
                    ? "Preencha o formulário e entraremos em contacto brevemente." 
                    : language === Language.FR 
                    ? "Remplissez le formulaire et nous vous répondrons dans les plus brefs délais." 
                    : "Fill out the form below and our engineers will get back to you within 24 hours."}
                </p>
            </div>

            <form className="space-y-6 sm:space-y-8" onSubmit={handleQuoteRequest}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="relative">
                  <label htmlFor="name" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'name' || formData.name ? '-top-2.5 text-xs bg-white px-1 text-brand-orange' : 'top-4 text-slate-500'}`}>
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="block w-full px-4 py-3 sm:py-4 rounded-lg bg-slate-50 border-2 border-slate-200 focus:border-brand-orange focus:bg-white focus:ring-0 transition-colors outline-none font-medium text-brand-dark text-base"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'email' || formData.email ? '-top-2.5 text-xs bg-white px-1 text-brand-orange' : 'top-4 text-slate-500'}`}>
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="block w-full px-4 py-3 sm:py-4 rounded-lg bg-slate-50 border-2 border-slate-200 focus:border-brand-orange focus:bg-white focus:ring-0 transition-colors outline-none font-medium text-brand-dark text-base"
                  />
                </div>
              </div>

              <div className="relative">
                 {/* Custom select wrapper for style */}
                <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">
                  {t.form.service}
                </label>
                <div className="relative">
                    <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 sm:py-4 rounded-lg bg-slate-50 border-2 border-slate-200 focus:border-brand-orange focus:bg-white focus:ring-0 transition-colors outline-none appearance-none font-medium cursor-pointer text-brand-dark text-base"
                    >
                    <option value="" disabled>{t.form.servicePlaceholder}</option>
                    <option value="Heat-Shrink Containment">{services.containment.title}</option>
                    <option value="Roofing & Safety Nets">{services.roofing.title}</option>
                    <option value="Indoor/Outdoor Structures">{services.indoorOutdoor.title}</option>
                    <option value="Decontamination">{services.decontamination.title}</option>
                    <option value="Other / Outro">Other / Outro / Autre</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <ArrowRight className="h-5 w-5 rotate-90" />
                    </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'message' || formData.message ? '-top-2.5 text-xs bg-white px-1 text-brand-orange' : 'top-4 text-slate-500'}`}>
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="block w-full px-4 py-3 sm:py-4 rounded-lg bg-slate-50 border-2 border-slate-200 focus:border-brand-orange focus:bg-white focus:ring-0 transition-colors outline-none font-medium resize-none text-brand-dark text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center py-4 sm:py-5 px-8 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-all duration-300 transform hover:-translate-y-1 hover:shadow-orange-500/30 uppercase tracking-widest"
              >
                {t.form.submit}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>

             {/* Toast Notification */}
             {showToast && (
                <div className="absolute inset-x-0 bottom-0 mb-4 flex justify-center z-20 animate-[slideUp_0.3s_ease-out]">
                    <div className="bg-brand-dark text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-3 border border-brand-orange/50">
                        <CheckCircle className="text-brand-orange h-5 w-5" />
                        <span className="font-medium text-sm">
                            {language === Language.PT 
                                ? "A abrir o seu cliente de email..." 
                                : language === Language.FR 
                                ? "Ouverture de votre client de messagerie..." 
                                : "Opening your email client..."}
                        </span>
                    </div>
                </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
