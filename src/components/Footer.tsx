import React from 'react';
import { Code2, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1931] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="h-8 w-8 text-[#f5b7b1]" />
              <span className="text-white font-bold text-xl">TechHack 2025</span>
            </div>
            <p className="text-white/70 mb-6">
              The premier hackathon experience where innovation meets opportunity. Join us for 48 hours of coding, collaboration, and creation.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-[#11234a] hover:bg-[#301b47] p-2 rounded-full transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Schedule", href: "#schedule" },
                { name: "Prizes", href: "#prizes" },
                { name: "Sponsors", href: "#sponsors" },
                { name: "FAQ", href: "#faq" },
                { name: "Register", href: "#register" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-[#f5b7b1] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#f5b7b1] mr-3 mt-0.5" />
                <span className="text-white/70">info@techhack2025.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#f5b7b1] mr-3 mt-0.5" />
                <span className="text-white/70">+1 (415) 555-0123</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#f5b7b1] mr-3 mt-0.5" />
                <span className="text-white/70">
                  TechHub SF<br />
                  123 Innovation Blvd<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for hackathon updates, tips, and announcements.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#11234a] border border-[#301b47] rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4a2172] to-[#9d2449] hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#301b47] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; 2025 TechHack. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white/80 text-sm">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white/80 text-sm">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white/80 text-sm">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;