import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/home#about' },
    { name: 'Schedule', path: '/home#schedule' },
    { name: 'Prizes', path: '/home#prizes' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'FAQ', path: '/home#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-opacity-95 bg-[#0a1931] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">TechHack 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-[#f5b7b1] transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/home#register"
              className="bg-gradient-to-r from-[#4a2172] to-[#9d2449] hover:opacity-90 text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 bg-[#0a1931] bg-opacity-95 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-white hover:text-[#f5b7b1] transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/home#register"
              className="block mt-2 bg-gradient-to-r from-[#4a2172] to-[#9d2449] text-white px-4 py-2 rounded-md font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;