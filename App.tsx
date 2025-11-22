import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';

const App: React.FC = () => {
  // Default language is French based on the company content provided, 
  // but we can default to EN for international or PT for location.
  // Let's default to EN for a neutral start.
  const [language, setLanguage] = useState<Language>(Language.EN);

  return (
    <div className="antialiased text-gray-900 bg-white font-sans">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;