import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          alt="Adventure Landscape"
          className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'} opacity-[0.07]`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className={`relative z-10 transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* Badge */}
        <div className="relative mb-12 group inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden">
          <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0,transparent_75%,#FECC00_100%)] animate-spin-slow opacity-100 blur-[0.5px]"></div>
          <div className="absolute -inset-[2px] rounded-full border border-[#FECC00]/20 animate-pulse"></div>
          <div className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-gray-700 text-[13px] tracking-[0.1em] uppercase border border-[#FECC00]/30 backdrop-blur-xl font-montserrat font-black z-10 shadow-sm transition-colors group-hover:border-[#FECC00]/70">
            <Star size={14} className="fill-[#FECC00] text-[#FECC00]" />
            4.8 Rated by 500+
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#FECC00]/5 to-[#FECC00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
        </div>

        {/* Brand Logo */}
        <div className="mb-10 flex justify-center">
          {!logoError ? (
            <img
              src="/ah-logo.png"
              alt="Adventure Holidays"
              onError={() => setLogoError(true)}
              className="h-24 md:h-40 w-auto opacity-100 transition-transform hover:scale-105 duration-700"
            />
          ) : (
            <div className="flex flex-col items-center gap-1 font-montserrat select-none">
               <span className="text-gray-900 text-3xl md:text-5xl font-black tracking-widest uppercase leading-none">
                 Adventure
               </span>
               <span className="text-[#FECC00] text-xl md:text-2xl font-black tracking-[0.4em] uppercase">
                 Holidays
               </span>
            </div>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-display-1 text-gray-900 max-w-5xl mx-auto mb-0 font-montserrat uppercase font-black tracking-tighter leading-tight">
          Number <span className="text-[#FECC00]">Speaks</span>
        </h1>

        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <p className="text-gray-500 text-body max-w-2xl mx-auto font-medium leading-relaxed mt-1">
             we are built to manage complex travel at any scale or purpose with institutional-grade precision
           </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FECC00]/60 via-[#FECC00]/20 to-transparent flex justify-center">
          <div className="w-[1.5px] h-4 bg-[#FECC00] animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
