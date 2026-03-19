
import React from 'react';
import Hero from './components/Hero';
import AchievementSection from './components/AchievementSection';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  return (
    <div className="bg-[#020022] selection:bg-[#FECC00]/30 selection:text-white font-sans text-white">
      {/* Dynamic Background Particles */}
      <BackgroundParticles />
      
      {/* Cinematic Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FECC00]/5 blur-[180px] rounded-full pointer-events-none opacity-30"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#060033]/50 blur-[150px] rounded-full pointer-events-none opacity-20 border border-[#FECC00]/5"></div>
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        <div className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#060033] to-transparent">
          <AchievementSection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
