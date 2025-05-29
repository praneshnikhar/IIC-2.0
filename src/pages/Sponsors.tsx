import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SponsorsContent from '../components/SponsorsContent';

const Sponsors: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1931]">
      <Navbar />
      <SponsorsContent />
      <Footer />
    </div>
  );
};

export default Sponsors;