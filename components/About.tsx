import React from 'react';
import { ShieldCheck, Award, HardHat } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2">
              {t.companyName}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              {t.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.description}
            </p>
            <div className="bg-gray-50 border-l-4 border-brand-blue p-4 mb-8">
              <p className="text-gray-700 italic text-sm">
                {t.specialization}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium text-brand-dark">Safety First</h4>
                  <p className="text-sm text-gray-500">Certified safety nets and rigid protocols.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium text-brand-dark">Quality Assurance</h4>
                  <p className="text-sm text-gray-500">Premium materials for maximum durability.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <HardHat className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium text-brand-dark">Specialized Crew</h4>
                  <p className="text-sm text-gray-500">Expert team for complex environmental tasks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl">
              {/* Image illustrating containment/worker in safety gear */}
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                alt="Specialized construction worker in safety equipment" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-dark p-6 rounded-lg shadow-xl hidden md:block max-w-xs z-10">
              <p className="text-white text-sm font-light">
                "Excellence in containment is not just about covering up; it's about creating a safe, controlled environment for progress."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;