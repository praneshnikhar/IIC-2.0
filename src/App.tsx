import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;