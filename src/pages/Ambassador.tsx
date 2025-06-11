// src/pages/Ambassador.tsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AmbassadorContent from '../components/AmbassadorContent';

const Ambassador: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1931] text-white flex flex-col">
      <Navbar />
      <AmbassadorContent />
      <Footer />
    </div>
  );
};

export default Ambassador;
