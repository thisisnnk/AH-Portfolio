
import React from 'react';
import Hero from './components/Hero';
import AchievementSection from './components/AchievementSection';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import ClientsSection from './components/ClientsSection';

const App: React.FC = () => {
  return (
    <div className="relative bg-white selection:bg-[#FECC00]/40 selection:text-gray-900 text-gray-900">
      {/* Full-page live background layer */}
      <BackgroundParticles />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <ClientsSection />
        <AchievementSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
