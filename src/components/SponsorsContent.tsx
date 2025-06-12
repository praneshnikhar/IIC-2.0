import React, { useEffect, useRef } from 'react';
import { Building, Sparkles, Star, Award, Crown, Zap } from 'lucide-react';

const SponsorsContent: React.FC = () => {
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

  const sponsorTiers = [
    {
      tier: "Title Sponsors",
      icon: <Crown className="h-8 w-8 text-yellow-400" />,
      gradient: "from-yellow-400 to-orange-500",
      sponsors: [
        { 
          name: "TechCorp Global", 
          description: "Leading technology solutions provider",
          contribution: "₹5,00,000 + Infrastructure Support"
        },
        { 
          name: "InnovateLabs", 
          description: "AI & Machine Learning pioneers",
          contribution: "₹3,50,000 + Mentorship Program"
        },
      ]
    },
    {
      tier: "Platinum Sponsors",
      icon: <Award className="h-8 w-8 text-gray-300" />,
      gradient: "from-gray-300 to-gray-500",
      sponsors: [
        { 
          name: "CodeCraft Solutions", 
          description: "Full-stack development experts",
          contribution: "₹2,00,000 + Workshop Sessions"
        },
        { 
          name: "CloudSystems Pro", 
          description: "Cloud infrastructure specialists",
          contribution: "₹1,50,000 + Cloud Credits"
        },
        { 
          name: "DataStream Analytics", 
          description: "Big data and analytics platform",
          contribution: "₹1,25,000 + API Access"
        },
      ]
    },
    {
      tier: "Gold Sponsors",
      icon: <Star className="h-8 w-8 text-amber-500" />,
      gradient: "from-amber-500 to-yellow-600",
      sponsors: [
        { 
          name: "DevStudio Inc", 
          description: "Mobile app development company",
          contribution: "₹75,000 + Development Tools"
        },
        { 
          name: "DesignWorks Creative", 
          description: "UI/UX design agency",
          contribution: "₹50,000 + Design Resources"
        },
        { 
          name: "AIVentures", 
          description: "AI startup accelerator",
          contribution: "₹60,000 + Startup Mentorship"
        },
        { 
          name: "TechAI Labs", 
          description: "Artificial intelligence research",
          contribution: "₹40,000 + Research Access"
        },
      ]
    },
    {
      tier: "Silver Sponsors",
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      gradient: "from-cyan-400 to-blue-500",
      sponsors: [
        { 
          name: "StartupHub", 
          description: "Entrepreneurship platform",
          contribution: "₹25,000 + Networking Events"
        },
        { 
          name: "TechBooks Publishing", 
          description: "Technical education resources",
          contribution: "₹20,000 + Learning Materials"
        },
        { 
          name: "CodeAcademy Pro", 
          description: "Online coding education",
          contribution: "₹15,000 + Course Access"
        },
        { 
          name: "InnovateSpace", 
          description: "Co-working space provider",
          contribution: "₹30,000 + Workspace Credits"
        },
        { 
          name: "TechGear Store", 
          description: "Technology hardware retailer",
          contribution: "₹35,000 + Hardware Prizes"
        },
        { 
          name: "CloudHost Services", 
          description: "Web hosting solutions",
          contribution: "₹18,000 + Hosting Credits"
        },
      ]
    }
  ];

  const partnerCategories = [
    {
      title: "Community Partners",
      partners: [
        "IEEE Student Branch",
        "ACM Chapter",
        "Google Developer Groups",
        "Microsoft Student Partners",
        "GitHub Campus Experts"
      ]
    },
    {
      title: "Media Partners",
      partners: [
        "TechCrunch India",
        "YourStory",
        "Analytics India Magazine",
        "Inc42",
        "The Startup"
      ]
    }
  ];

  return (
    <div className="min-h-screen space-bg" ref={sectionRef}>
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4 animate-on-scroll opacity-0">
            <Building className="h-8 w-8 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            Our <span className="gradient-text">Sponsors</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll opacity-0">
            IIC 2.0 is made possible by the generous support of our sponsors, who share our vision for innovation and technology advancement. Together, we're building the future of tech.
          </p>
        </div>

        <div className="space-y-20">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="animate-on-scroll opacity-0" style={{ animationDelay: `${tierIndex * 150}ms` }}>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-br ${tier.gradient}/20 rounded-full mb-4`}>
                  {tier.icon}
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-2">{tier.tier}</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"></div>
              </div>
              
              <div className={`grid ${
                tier.tier === "Title Sponsors" ? "md:grid-cols-2" : 
                tier.tier === "Platinum Sponsors" ? "md:grid-cols-3" : 
                tier.tier === "Gold Sponsors" ? "md:grid-cols-2 lg:grid-cols-4" : 
                "md:grid-cols-2 lg:grid-cols-3"
              } gap-6`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="glass-card rounded-xl p-6 hover:glass-card transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center h-20 mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.gradient}/20 flex items-center justify-center`}>
                          <span className="text-2xl font-bold gradient-text">
                            {sponsor.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300 text-center">
                        {sponsor.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3 text-center">{sponsor.description}</p>
                      <div className="glass-card p-3 rounded-lg">
                        <p className="text-cyan-300 text-xs font-medium text-center">{sponsor.contribution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-20 animate-on-scroll opacity-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Our Partners</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 text-center">{category.title}</h4>
                <div className="space-y-3">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center p-3 glass-card rounded-lg hover:glass-card transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 mr-3"></div>
                      <span className="text-gray-300">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship CTA */}
        <div className="mt-20 text-center animate-on-scroll opacity-0">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-pink-400 mr-3" />
              <h3 className="text-3xl font-bold gradient-text">Become a Sponsor</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Join our community of forward-thinking companies supporting the next generation of tech innovators. 
              Various sponsorship packages are available to suit your budget and goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Brand Visibility", desc: "Reach 1000+ tech enthusiasts" },
                { title: "Talent Pipeline", desc: "Connect with top developers" },
                { title: "Innovation Access", desc: "First look at cutting-edge projects" }
              ].map((benefit, index) => (
                <div key={index} className="glass-card p-4 rounded-lg">
                  <h4 className="text-pink-400 font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="modern-button neon-button px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Sponsor IIC 2.0
              </button>
              <button className="glass-card hover:glass-card text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-pink-400/30">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsContent;