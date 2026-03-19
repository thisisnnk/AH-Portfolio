
import React from 'react';
import Hero from './components/Hero';
import AchievementSection from './components/AchievementSection';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import ClientsSection from './components/ClientsSection';

const App: React.FC = () => {
  return (
    <div className="bg-white selection:bg-[#FECC00]/40 selection:text-gray-900 text-gray-900">
      {/* Dynamic Background Particles */}
      <BackgroundParticles />

      {/* Subtle Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FECC00]/8 blur-[180px] rounded-full pointer-events-none opacity-40"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FECC00]/5 blur-[150px] rounded-full pointer-events-none opacity-30"></div>
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />

        <ClientsSection />

        <div className="relative overflow-hidden bg-gradient-to-b from-transparent via-gray-50 to-transparent">
          <AchievementSection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
