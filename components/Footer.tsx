import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const footerContentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (footerContentRef.current) observer.observe(footerContentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative bg-transparent pt-16 pb-0 px-6">

      <div
        ref={footerContentRef}
        className={`max-w-6xl mx-auto transition-all duration-[1200ms] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} relative z-10`}
      >
        <div className="text-center mb-10">
          <h2 className="text-display-2 text-gray-900 mb-6 font-display tracking-tight">Planning to book a package?</h2>
          <p className="text-gray-500 text-body max-w-xl mx-auto font-medium">We're here to help you plan your journey. Reach out to our experts for a personalized consultation.</p>
        </div>

        {/* Contact Grid */}
        <div className="flex flex-col gap-6 mb-8">
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
              value="2nd Floor, Vishnu Complex, 1st Cross Street, Gandhipuram, Coimbatore - 641012"
              link="https://maps.app.goo.gl/ikQ7fsaym7edQp8D9"
            />
          </div>

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

      </div>
    </footer>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode, label: string, value: string, subValue?: string, link?: string, valueClassName?: string }> = ({ icon, label, value, subValue, link, valueClassName }) => {
  const isExternal = link?.startsWith('http');

  const content = (
    <>
      <div className="glare-line opacity-5 group-hover:opacity-10 transition-opacity"></div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-8 group-hover:bg-[#FECC00]/20 group-hover:border-[#FECC00]/50 group-hover:scale-110 transition-all duration-500 shadow-sm">
        <div className="text-[#FECC00] transition-all transform group-hover:rotate-[360deg] duration-700">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-3 font-montserrat group-hover:text-gray-700 transition-colors duration-300">
          {label}
        </span>
        <p className={`text-gray-900 mb-2 font-display group-hover:text-[#FECC00] transition-colors duration-500 ${valueClassName ?? 'text-[20px] font-medium'}`}>
          {value}
        </p>
        {subValue && (
          <p className="text-gray-500 text-[13px] font-medium leading-relaxed font-display max-w-[380px] mx-auto group-hover:text-gray-700 transition-colors">
            {subValue}
          </p>
        )}
      </div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#FECC00]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </>
  );

  const sharedClasses = "glass-card p-10 rounded-[32px] flex flex-col items-center text-center group cursor-pointer relative overflow-hidden h-full";

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

  return <div className={sharedClasses}>{content}</div>;
};

export default Footer;
