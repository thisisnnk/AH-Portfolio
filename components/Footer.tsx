import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const footerContentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (footerContentRef.current) observer.observe(footerContentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative bg-[#020022] pt-32 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Footer Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FECC00]/50 to-transparent opacity-30"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60%] h-48 bg-[#FECC00]/5 blur-[120px] rounded-full"></div>

      <div 
        ref={footerContentRef}
        className={`max-w-6xl mx-auto transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} relative z-10`}
      >
        <div className="text-center mb-20">
          <h2 className="text-display-2 text-white mb-6 font-display tracking-tight">Planning to book a package?</h2>
          <p className="text-slate-400 text-body max-w-xl mx-auto font-medium">We’re here to help you plan your journey. Reach out to our experts for a personalized consultation.</p>
        </div>
        
        {/* Properly Arranged Contact Grid */}
        <div className="flex flex-col gap-6 mb-24">
          {/* Row 1: Call and Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <ContactItem 
              icon={<Phone size={22} />} 
              label="Call / WhatsApp" 
              value="+91 70109 33178" 
              link="https://wa.me/917010933178?text=Hai!%20I%20need%20to%20enquire%20about%20Travel%20Packages"
            />
            <ContactItem 
              icon={<MapPin size={22} />} 
              label="Headquarters" 
              value="Coimbatore, India" 
              subValue="2nd Floor, Vishnu Complex, 1st Cross Street, Gandhipuram - 641012"
              link="https://maps.app.goo.gl/ikQ7fsaym7edQp8D9"
            />
          </div>
          
          {/* Row 2: Email and Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <ContactItem 
              icon={<Mail size={22} />} 
              label="Email Address" 
              value="contact@adventureholidays.co" 
              link="mailto:contact@adventureholidays.co"
            />
            <ContactItem 
              icon={<Globe size={22} />} 
              label="Official Website" 
              value="www.adventureholidays.co" 
              link="https://www.adventureholidays.co"
            />
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            {!logoError ? (
              <img 
                src="https://www.adventureholidays.co/logo.png" 
                alt="Adventure Holidays" 
                onError={() => setLogoError(true)}
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-all cursor-pointer hover:scale-110 active:scale-95 duration-500 drop-shadow-[0_0_15px_rgba(254,204,0,0.2)]"
              />
            ) : (
              <div className="flex items-center gap-2 font-montserrat opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white text-lg font-black uppercase tracking-tight">Adventure</span>
                <span className="text-[#FECC00] text-lg font-black uppercase tracking-tight">Holidays</span>
              </div>
            )}
          </div>
          <p className="text-slate-500 text-[11px] font-bold tracking-[0.3em] uppercase font-display">
            © {new Date().getFullYear()} Adventure Holidays | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode, label: string, value: string, subValue?: string, link?: string }> = ({ icon, label, value, subValue, link }) => {
  const isExternal = link?.startsWith('http');
  
  const content = (
    <>
      {/* Highlight Effect */}
      <div className="glare-line opacity-5 group-hover:opacity-20 transition-opacity"></div>
      
      {/* Icon Container */}
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#FECC00]/20 group-hover:border-[#FECC00]/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
        <div className="text-[#FECC00] group-hover:drop-shadow-[0_0_12px_#FECC00] transition-all transform group-hover:rotate-[360deg] duration-700">
          {icon}
        </div>
      </div>

      {/* Content Hierarchy */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-3 font-display group-hover:text-white transition-colors duration-300">
          {label}
        </span>
        <p className="text-white text-[19px] font-bold mb-2 font-display group-hover:text-[#FECC00] transition-colors duration-500">
          {value}
        </p>
        {subValue && (
          <p className="text-slate-400 text-[13px] font-medium leading-relaxed font-display max-w-[380px] mx-auto group-hover:text-slate-200 transition-colors">
            {subValue}
          </p>
        )}
      </div>
      
      {/* Decorative Bottom Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#FECC00]/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </>
  );

  const sharedClasses = "glass-card p-10 rounded-[32px] flex flex-col items-center text-center group cursor-pointer border border-white/5 relative overflow-hidden h-full";

  if (link) {
    return (
      <a 
        href={link} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={sharedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={sharedClasses}>
      {content}
    </div>
  );
};

export default Footer;