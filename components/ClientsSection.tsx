import React from 'react';

const LOGOS = [
  { src: '/logos/Accenture-Logo.png', alt: 'Accenture' },
  { src: '/logos/Cognizant logo.png', alt: 'Cognizant' },
  { src: '/logos/Infosys-Logo.png', alt: 'Infosys' },
  { src: '/logos/Wipro-Logo.png', alt: 'Wipro' },
  { src: '/logos/HCL_Technologies-Logo.png', alt: 'HCL Technologies' },
  { src: '/logos/Zoho-logo.png', alt: 'Zoho' },
  { src: '/logos/L&T.png', alt: 'L&T' },
  { src: '/logos/C.R.I.-Pumps-Logo.png', alt: 'CRI Pumps' },
  { src: '/logos/corro-health.png', alt: 'Corro Health' },
  { src: '/logos/SKI-Coimbatore-Logo.png', alt: 'SKI Coimbatore' },
  { src: '/logos/Benhras .png', alt: 'Benhras' },
  { src: '/logos/IIT_Madras_Logo.png', alt: 'IIT Madras' },
  { src: '/logos/Vellore_Institute_of_Technology_logo.png', alt: 'VIT' },
  { src: '/logos/SRM_Institute_of_Science_and_Technology_Logo.png', alt: 'SRM' },
  { src: '/logos/PSG_Tech.png', alt: 'PSG Tech' },
  { src: '/logos/Kumaraguru_College_of_Technology_logo.png', alt: 'KCT' },
  { src: '/logos/KIT-LOGO.png', alt: 'KIT' },
  { src: '/logos/kprietLogo.png', alt: 'KPRIET' },
  { src: '/logos/mit-logo.png', alt: 'MIT' },
  { src: '/logos/The-Indian-Public-School-endorsed-logo.png', alt: 'The Indian Public School' },
];

const ROW1 = LOGOS.slice(0, 7);
const ROW2 = LOGOS.slice(7, 14);
const ROW3 = LOGOS.slice(14);

const MarqueeRow: React.FC<{ logos: typeof LOGOS; reverse?: boolean; speed?: number }> = ({ logos, reverse = false, speed = 35 }) => {
  const duplicated = [...logos, ...logos, ...logos];
  return (
    <div className="relative overflow-hidden mb-10">
      <div
        className="flex gap-12 items-center"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {duplicated.map((logo, i) => (
          <div key={i} className="flex-shrink-0 h-24 w-56 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <p className="text-gray-400 text-[12px] font-bold uppercase tracking-[0.3em] font-montserrat mb-3">Trusted By</p>
        <h2 className="text-gray-900 font-display font-normal text-[30px] tracking-tight">
          where our{' '}
          <span className="text-[#FECC00] font-bold text-[42px] font-montserrat">CREDIBILITY</span>
          {' '}is earned
        </h2>
      </div>

      {/* Fade edges — cover all 3 rows */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <MarqueeRow logos={ROW1} reverse={false} speed={30} />
        <MarqueeRow logos={ROW2} reverse={true}  speed={35} />
        <MarqueeRow logos={ROW3} reverse={false} speed={28} />
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
