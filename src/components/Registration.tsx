import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Registration: React.FC = () => {

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
    };
  }, []);


  const benefits = [
    "Access to exclusive workshops and mentorship",
    "Connect with industry professionals and peers",
    "Compete for $50,000+ in prizes",
    "Learn new skills and technologies",
    "Build your portfolio with impressive projects",
    "Potential job opportunities with sponsor companies"
  ];

  return (
    <section id="register" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0a1931] to-[#1c2e5a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">Register for IIC 2.0</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Secure your spot for the biggest hackathon of the year.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-3/4 animate-on-scroll opacity-0">
            <div className="bg-[#11234a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Join IIC 2.0?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[#4a2172] rounded-full p-1 mt-0.5 mr-3">
                        <Check className="h-4 w-4 text-white"/>
                      </div>
                      <span className="text-white/80">{benefit}</span>
                    </li>
                ))}
              </ul>

              {/*<div className="mt-10 p-6 bg-[#301b47] rounded-lg border border-[#4a2172]">
                <h4 className="text-xl font-bold text-white mb-4">Registration Deadline</h4>
                <p className="text-white/80 mb-3">
                  Don't miss out! Registration closes on May 15, 2025, or when we reach capacity.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[#f5b7b1] font-bold">Limited spots available!</div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">80% Full</div>
                </div>
              </div>*/}

              <button
                  type="submit"
                  className="mt-5 p-6 w-full bg-gradient-to-r from-[#4a2172] to-[#9d2449] hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Registrations Starting Soon!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;