


const PARTNERS = [
  "Construction Inc", "SafeBuild", "EuroProtect", "TotalCover", 
  "Lisbon Builders", "Paris Rénovation", "SafetyFirst", "BuildTech"
];

const Partners = () => {
  return (
    <div className="w-full py-10 bg-brand-darker border-b border-white/5 overflow-hidden relative">
      {/* Alpha Masks for Fade Effect */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-darker to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-darker to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-[200%] animate-marquee">
        {/* First Set */}
        <div className="flex w-1/2 justify-around items-center">
          {PARTNERS.map((partner, i) => (
            <div key={i} className="text-slate-500 font-bold text-xl md:text-2xl uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-brand-orange transition-all duration-300 cursor-default px-8">
              {partner}
            </div>
          ))}
        </div>
        {/* Duplicate Set for Loop */}
        <div className="flex w-1/2 justify-around items-center">
          {PARTNERS.map((partner, i) => (
            <div key={`dup-${i}`} className="text-slate-500 font-bold text-xl md:text-2xl uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-brand-orange transition-all duration-300 cursor-default px-8">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
