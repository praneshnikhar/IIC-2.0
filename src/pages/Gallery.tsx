import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryContent from '../components/GalleryContent';

const Sponsors: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1931]">
      <Navbar />
      <GalleryContent />
      <Footer />
    </div>
  );
};

export default Sponsors;