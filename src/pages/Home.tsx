import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Prizes from '../components/Prizes';
import Prizes from '../components/Themes';
import FAQ from '../components/FAQ';
import Registration from '../components/Registration';
import Footer from '../components/Footer';
import GlowingParticles from '../components/GlowingParticles';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <GlowingParticles />
      <Navbar />
      <Hero />
      <About />
      {/*<Timeline />*/}
      <Prizes />
      <Themes />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
};

export default Home;
