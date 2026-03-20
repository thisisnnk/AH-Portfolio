import React from 'react';

/**
 * Exact same animation layers as HeroAnimatedBg.
 * Drop inside any section as the first child — it positions itself
 * absolute inset-0 so it fills and animates behind the section content.
 */
const SectionAnimBg: React.FC = () => (
  <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none select-none" aria-hidden="true">

    {/* Aurora blobs */}
    <div className="hero-blob-a absolute rounded-full" style={{
      width: 'clamp(280px, 55vw, 860px)', height: 'clamp(280px, 55vw, 860px)',
      top: '-28%', left: '-18%',
      background: 'radial-gradient(circle, rgba(254,204,0,0.42) 0%, transparent 65%)',
      filter: 'blur(20px)',
    }} />
    <div className="hero-blob-b absolute rounded-full" style={{
      width: 'clamp(220px, 44vw, 720px)', height: 'clamp(220px, 44vw, 720px)',
      bottom: '-22%', right: '-12%',
      background: 'radial-gradient(circle, rgba(254,204,0,0.35) 0%, transparent 65%)',
      filter: 'blur(24px)',
    }} />
    <div className="hero-blob-c absolute rounded-full" style={{
      width: 'clamp(160px, 32vw, 540px)', height: 'clamp(160px, 32vw, 540px)',
      top: '25%', right: '18%',
      background: 'radial-gradient(circle, rgba(0,18,117,0.12) 0%, transparent 70%)',
      filter: 'blur(28px)',
    }} />

    {/* Dot grid */}
    <svg className="absolute inset-0 w-full h-full hero-grid-breathe"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="sab-dot-sm" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(254,204,0,0.45)" />
        </pattern>
        <pattern id="sab-dot-lg" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="3" fill="rgba(254,204,0,0.22)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sab-dot-sm)" />
      <rect width="100%" height="100%" fill="url(#sab-dot-lg)" />
    </svg>

    {/* Diagonal dash lines */}
    <svg className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <line x1="-5%" y1="15%" x2="105%" y2="75%"  stroke="rgba(254,204,0,0.35)" strokeWidth="1.5" className="hero-line-a" />
      <line x1="-5%" y1="55%" x2="105%" y2="115%" stroke="rgba(254,204,0,0.25)" strokeWidth="1"   className="hero-line-b" />
      <line x1="105%" y1="10%" x2="-5%"  y2="70%"  stroke="rgba(254,204,0,0.30)" strokeWidth="1.5" className="hero-line-c" />
      <line x1="105%" y1="50%" x2="-5%"  y2="110%" stroke="rgba(254,204,0,0.20)" strokeWidth="1"   className="hero-line-a" style={{ animationDelay: '-2.5s' }} />
    </svg>

    {/* Concentric pulse rings */}
    <svg className="absolute" style={{
      width: 'clamp(360px, 70vw, 1000px)', height: 'clamp(360px, 70vw, 1000px)',
      top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflow: 'visible',
    }} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="400" cy="400" r="130" stroke="rgba(254,204,0,0.60)" strokeWidth="1.5" className="hero-ring-1" />
      <circle cx="400" cy="400" r="230" stroke="rgba(254,204,0,0.45)" strokeWidth="1.5" className="hero-ring-2" />
      <circle cx="400" cy="400" r="340" stroke="rgba(254,204,0,0.30)" strokeWidth="1"   className="hero-ring-3" />
      <circle cx="400" cy="400" r="5"   fill="rgba(254,204,0,0.85)"  className="hero-center-dot" />
    </svg>

    {/* Corner tick marks */}
    <svg className="absolute top-6 left-6 w-12 h-12 hero-tick-a" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.55 }}>
      <path d="M0 20 L20 0 M0 8 L8 0" stroke="#FECC00" strokeWidth="2" />
    </svg>
    <svg className="absolute top-6 right-6 w-12 h-12 hero-tick-b" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.55 }}>
      <path d="M40 20 L20 0 M40 8 L32 0" stroke="#FECC00" strokeWidth="2" />
    </svg>
    <svg className="absolute bottom-6 left-6 w-12 h-12 hero-tick-c" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.45 }}>
      <path d="M0 20 L20 40 M0 32 L8 40" stroke="#FECC00" strokeWidth="2" />
    </svg>
    <svg className="absolute bottom-6 right-6 w-12 h-12 hero-tick-a" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.45 }}>
      <path d="M40 20 L20 40 M40 32 L32 40" stroke="#FECC00" strokeWidth="2" />
    </svg>
  </div>
);

export default SectionAnimBg;
