
import React from 'react';

const BackgroundParticles: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      style={{ zIndex: 0, overflowX: 'hidden' }}
      aria-hidden="true"
    >
      {/* ── Subtle full-page warm base — ensures no area is cold white ── */}
      <div className="absolute inset-0" style={{ background: 'rgba(254,204,0,0.028)' }} />

      {/*
        SVG dot grid — dots sit at exact fixed positions.
        Only r (radius) animates — no x/y movement at all.
        80×80 cell: checkerboard of phase-A (grow) and phase-B (shrink).
      */}
      <svg
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="bp-dot-sm" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="rgba(160,118,0,0.22)" className="dot-phase-a" />
            <circle cx="60" cy="20" r="1.5" fill="rgba(160,118,0,0.16)" className="dot-phase-b" />
            <circle cx="20" cy="60" r="1.5" fill="rgba(160,118,0,0.16)" className="dot-phase-b" />
            <circle cx="60" cy="60" r="1.5" fill="rgba(160,118,0,0.22)" className="dot-phase-a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-dot-sm)" />
      </svg>

      {/* ── Aurora blobs — large accent glows ── */}
      <div className="hero-blob-a absolute rounded-full" style={{
        width: 'clamp(500px, 70vw, 1100px)',
        height: 'clamp(500px, 70vw, 1100px)',
        top: '0%', left: '-8%',
        background: 'radial-gradient(circle, rgba(254,204,0,0.32) 0%, rgba(254,204,0,0.10) 45%, transparent 72%)',
        filter: 'blur(70px)',
      }} />
      <div className="hero-blob-b absolute rounded-full" style={{
        width: 'clamp(400px, 58vw, 900px)',
        height: 'clamp(400px, 58vw, 900px)',
        top: '52%', right: '-5%',
        background: 'radial-gradient(circle, rgba(254,204,0,0.26) 0%, rgba(254,204,0,0.08) 45%, transparent 72%)',
        filter: 'blur(75px)',
      }} />
      <div className="hero-blob-c absolute rounded-full" style={{
        width: 'clamp(300px, 48vw, 750px)',
        height: 'clamp(300px, 48vw, 750px)',
        top: '26%', left: '30%',
        background: 'radial-gradient(circle, rgba(254,204,0,0.16) 0%, rgba(254,204,0,0.05) 50%, transparent 72%)',
        filter: 'blur(80px)',
      }} />

      {/*
        ── Full-width warm coverage bands ──
        Each band spans 100vw so no horizontal area is left unlit.
        Staggered vertically to cover the entire page height.
        Low opacity + heavy blur = seamless, imperceptible warmth.
      */}

      {/* Band 1 — top zone */}
      <div className="blur-float-1 absolute" style={{
        width: '100vw', height: '55vh',
        top: '0%', left: '0',
        background: 'radial-gradient(ellipse 80% 100% at 30% 50%, rgba(254,204,0,0.10) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Band 2 — upper-mid zone */}
      <div className="blur-float-2 absolute" style={{
        width: '100vw', height: '55vh',
        top: '18%', left: '0',
        background: 'radial-gradient(ellipse 80% 100% at 72% 50%, rgba(254,204,0,0.09) 0%, transparent 70%)',
        filter: 'blur(65px)',
      }} />

      {/* Band 3 — center zone */}
      <div className="blur-float-3 absolute" style={{
        width: '100vw', height: '55vh',
        top: '36%', left: '0',
        background: 'radial-gradient(ellipse 80% 100% at 25% 50%, rgba(254,180,0,0.09) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Band 4 — lower-mid zone */}
      <div className="blur-float-4 absolute" style={{
        width: '100vw', height: '55vh',
        top: '54%', left: '0',
        background: 'radial-gradient(ellipse 80% 100% at 68% 50%, rgba(254,204,0,0.09) 0%, transparent 70%)',
        filter: 'blur(65px)',
      }} />

      {/* Band 5 — lower zone */}
      <div className="blur-float-5 absolute" style={{
        width: '100vw', height: '55vh',
        top: '72%', left: '0',
        background: 'radial-gradient(ellipse 80% 100% at 40% 50%, rgba(254,204,0,0.09) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Band 6 — bottom zone */}
      <div className="blur-float-6 absolute" style={{
        width: '100vw', height: '55vh',
        top: '88%', left: '0',
        background: 'radial-gradient(ellipse 80% 100% at 60% 50%, rgba(254,180,0,0.10) 0%, transparent 70%)',
        filter: 'blur(62px)',
      }} />
    </div>
  );
};

export default BackgroundParticles;
