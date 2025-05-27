import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
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

  const features = [
    {
      icon: <Code className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Code with Purpose",
      description: "Build innovative solutions that address real-world challenges across various domains."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Learn & Grow",
      description: "Expand your skills through workshops, mentorship sessions, and hands-on experience."
    },
    {
      icon: <Users className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Connect & Collaborate",
      description: "Network with fellow developers, designers, and industry professionals."
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Win Big",
      description: "Compete for substantial prizes and recognition for your innovative solutions."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#0a1931]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">About TechHack 2025</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            TechHack is a premier hackathon bringing together the brightest minds to develop innovative solutions for pressing challenges. Whether you're a seasoned developer or just starting out, TechHack offers a platform to learn, create, and connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#11234a] rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#1c2e5a] inline-flex p-3 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#301b47] to-[#4a2172] rounded-2xl p-8 md:p-12 animate-on-scroll opacity-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Who Can Participate?</h3>
              <p className="text-white/80 mb-6">
                TechHack welcomes participants from all backgrounds and skill levels. Whether you're a student, professional, or hobbyist, if you're passionate about technology and innovation, you belong here.
              </p>
              <ul className="space-y-3">
                {[
                  "Students from high school, college, or university",
                  "Industry professionals with a passion for innovation",
                  "Self-taught developers and designers",
                  "Tech enthusiasts of all skill levels"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="min-w-4 h-4 mt-1 mr-2 rounded-full bg-[#f5b7b1]"></div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 bg-[#11234a] p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">By the Numbers</h4>
              <div className="space-y-6">
                {[
                  { number: "1000+", label: "Participants" },
                  { number: "48", label: "Hours of Hacking" },
                  { number: "30+", label: "Workshops & Sessions" },
                  { number: "25+", label: "Industry Mentors" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-2xl font-bold text-[#f5b7b1] mr-4">{stat.number}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;