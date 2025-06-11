import React, { useEffect, useState } from 'react';
import { Zap, Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-r from-[#0a1931] via-[#301b47] to-[#9d2449] flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#4a2172] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#0a1931] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#9d2449] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div 
            className={`max-w-2xl mb-12 lg:mb-0 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
              <p className="text-white font-medium flex items-center">
                <Zap size={16} className="mr-2 text-[#f5b7b1]" />
                <span>Registrations Starting Soon!</span>
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-[#f5b7b1]">Bigger</span> in Impact <span className="text-[#f5b7b1]">Bolder</span> in Innovation
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Join the biggest hackathon of 2025. 48 hours of coding, collaboration, and creating solutions that matter. Connect with industry experts and showcase your skills.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a 
                href="#register" 
                className="bg-white hover:bg-gray-100 text-[#301b47] font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
              >
                Register Now
              </a>
              <a 
                href="#about" 
                className="border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2 text-[#f5b7b1]" />
                <span>September 7-8, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-[#f5b7b1]" />
                <span>Manipal University Jaipur</span>
              </div>
            </div>
          </div>

          <div 
            className={`relative w-full max-w-md transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative z-10 bg-gradient-to-br from-[#301b47] to-[#4a2172] p-6 rounded-2xl shadow-xl border border-white/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#9d2449] rounded-full opacity-30 blur-xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0a1931] rounded-full opacity-30 blur-xl -z-10"></div>

              <div className="text-center mb-6">
                {/*<span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-2">Countdown to Launch</span>
                <div className="grid grid-cols-4 gap-3 mt-3">
                  {[
                    { value: "42", label: "Days" },
                    { value: "18", label: "Hours" },
                    { value: "56", label: "Mins" },
                    { value: "24", label: "Secs" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-white text-2xl font-bold">{item.value}</span>
                      <span className="text-white/60 text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>*/}

                <span className="text-white text-2xl font-bold">Registrations Starting Soon!</span>
              </div>

              <div className="space-y-4 text-center">
                {/*<h3 className="text-white text-xl font-bold">Key Information</h3>*/}
                <ul className="text-left text-white/80 space-y-3">
                  {[
                    "Open to all skill levels",
                    "$50,000 in total prizes",
                    "Mentorship from industry experts",
                    "Networking opportunities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#f5b7b1] mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1931]/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;