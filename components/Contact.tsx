import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;
  const services = TRANSLATIONS[language].services.items;

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-orange font-bold uppercase tracking-wide mb-2">
              {language === Language.PT ? "Fale Connosco" : language === Language.FR ? "Contactez-nous" : "Contact Us"}
            </h2>
            <h3 className="text-4xl font-bold mb-8 text-white">
              {t.title}
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              {t.subtitle}
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-brand-orange" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg font-medium">+351 210 000 000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-lg">
                   <Mail className="h-6 w-6 text-brand-orange" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">info@labirintoflorescente.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-orange" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{t.address}</p>
                  <p className="text-lg font-medium">Lisboa, Portugal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Request a Quote */}
          <div className="bg-white rounded-xl p-8 text-gray-900 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm bg-gray-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm bg-gray-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  {t.form.service}
                </label>
                <select
                  id="service"
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm bg-gray-50"
                  defaultValue=""
                >
                  <option value="" disabled>{t.form.servicePlaceholder}</option>
                  <option value="containment">{services.containment.title}</option>
                  <option value="roofing">{services.roofing.title}</option>
                  <option value="indoorOutdoor">{services.indoorOutdoor.title}</option>
                  <option value="decontamination">{services.decontamination.title}</option>
                  <option value="other">Other / Outro / Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm bg-gray-50"
                  placeholder="..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-colors"
              >
                {t.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;