import React, { useEffect, useRef } from 'react';
import { Users, Award, Star, Zap, Gift, Network, Trophy, TrendingUp } from 'lucide-react';

const AmbassadorContent: React.FC = () => {
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

  const perks = [
    {
      icon: <Award className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Recognition Certificate & Goodies",
      description: "Official certificate for your leadership and contribution. Cool swags, gadgets and exclusive merch!"
    },
    {
      icon: <Gift className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Exclusive Perks",
      description: "Ambassador-only swags and VIP access to special events and sessions."
    },
    {
      icon: <Network className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Participation Certificate & Networking",
      description: "Connect with top peers and tech leaders. Build valuable professional relationships."
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Performance Rewards",
      description: "8+ signups = free team entry, social media shoutout, and website feature."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Skill Development & Resume Boost",
      description: "Showcase leadership, communication, and tech community building skills."
    },
    {
      icon: <Star className="h-8 w-8 text-[#f5b7b1]" />,
      title: "Early Access",
      description: "Get first access to event updates, workshops, and exclusive content."
    }
  ];

  const responsibilities = [
    "Promote IIC 2.0 on your campus and social media",
    "Organize tech talks and awareness sessions",
    "Help students with registration and queries",
    "Share event updates and announcements",
    "Build a community of tech enthusiasts",
    "Collect feedback and suggestions from participants"
  ];

  return (
    <section id="ambassador" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#1c2e5a] to-[#0a1931]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-[#301b47] rounded-full mb-4 animate-on-scroll opacity-0">
            <Users className="h-8 w-8 text-[#f5b7b1]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            Join the Movement
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Be a part of something bigger! Become a{' '}
            <span className="text-[#f5b7b1] font-semibold">Campus Ambassador</span>{' '}
            and help us build a thriving, innovative community. Share ideas, spread awareness, and lead your campus toward a brighter, tech-forward future.
          </p>
        </div>

        <div className="mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ambassador Perks & Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-[#11234a] rounded-xl p-6 border border-[#301b47] hover:border-[#4a2172] transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#1c2e5a] inline-flex p-3 rounded-lg mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                <p className="text-white/70">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#11234a] rounded-2xl p-8 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="h-6 w-6 text-[#f5b7b1] mr-2" />
              Your Responsibilities
            </h3>
            <ul className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <div className="min-w-4 h-4 mt-1 mr-3 rounded-full bg-[#f5b7b1]"></div>
                  <span className="text-white/80">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#301b47] to-[#4a2172] rounded-2xl p-8 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-white mb-6">Why Become an Ambassador?</h3>
            <div className="space-y-6">
              {[
                { number: "500+", label: "Students Reached" },
                { number: "50+", label: "Campus Partners" },
                { number: "100%", label: "Career Growth" },
                { number: "24/7", label: "Community Support" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-2xl font-bold text-[#f5b7b1] mr-4">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-white/90 text-sm">
                "Being an IIC Ambassador has been an incredible journey of growth, leadership, and community building. The experience has opened doors I never imagined possible."
              </p>
              <p className="text-[#f5b7b1] text-sm mt-2 font-medium">- Previous Ambassador</p>
            </div>
          </div>
        </div>

        <div className="text-center animate-on-scroll opacity-0">
          <div className="bg-[#11234a] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Lead?</h3>
            <p className="text-white/80 mb-6">
              Applications are now open! Join our community of passionate leaders and make a real impact on your campus.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe6ijcmxTn81PlqAFyGi8QxcUmkxcaGJZT5OoOfFGsIFegi4Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#4a2172] to-[#9d2449] hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </a>
            <p className="text-white/60 text-sm mt-4">
              Applications close soon. Don't miss your chance to be part of the movement!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorContent;