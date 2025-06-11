import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Zap } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (path: string) => {
    const [route, section] = path.split('#');

    if (location.pathname !== route) {
      navigate(path);
    } else if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', path: '/home#about' },
    { name: 'Schedule', path: '/home#schedule' },
    { name: 'Prizes', path: '/home#prizes' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Ambassador', path: '/ambassador' },
    { name: 'FAQ', path: '/home#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'glass-card py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="gradient-text font-bold text-xl">IIC 2.0</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/home#register')}
              className="modern-button neon-button px-6 py-2 rounded-md font-medium transition-all duration-300"
            >
              <Zap size={16} className="inline mr-1" />
              Register
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white p-2 glass-card rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 glass-card rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left py-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/home#register')}
              className="block w-full mt-2 modern-button px-4 py-3 rounded-md font-medium text-center"
            >
              <Zap size={16} className="inline mr-1" />
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;