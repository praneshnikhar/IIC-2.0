// src/pages/Ambassador.tsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AmbassadorContent from '../components/AmbassadorContent';
import GlowingParticles from '../components/GlowingParticles';

const Ambassador: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1931] text-white flex flex-col">
      <div className="min-h-screen bg-[#0a1931] relative">
        <GlowingParticles />
        <Navbar />
        <AmbassadorContent />
        <Footer />
      </div>
    </div>
  );
};

export default Ambassador;
