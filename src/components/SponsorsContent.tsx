import React, { useEffect, useRef } from 'react';

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
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "TechCorp", logo: "https://images.pexels.com/photos/2556679/pexels-photo-2556679.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { name: "InnovateCorp", logo: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300" },
      ]
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "CodeCraft", logo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { name: "TechAI Labs", logo: "https://images.pexels.com/photos/7054774/pexels-photo-7054774.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { name: "CloudSystems", logo: "https://images.pexels.com/photos/3927390/pexels-photo-3927390.jpeg?auto=compress&cs=tinysrgb&w=300" },
      ]
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "DevStudio", logo: "https://images.pexels.com/photos/3952050/pexels-photo-3952050.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { name: "DesignWorks", logo: "https://images.pexels.com/photos/4050367/pexels-photo-4050367.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { name: "DataStream", logo: "https://images.pexels.com/photos/3851535/pexels-photo-3851535.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { name: "AIVentures", logo: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300" },
      ]
    }
  ];

  return (
    <section id="sponsors" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#1c2e5a] to-[#0a1931]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">Our Sponsors</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            TechHack 2025 is made possible by the generous support of our sponsors, who share our vision for innovation and technology advancement.
          </p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="animate-on-scroll opacity-0" style={{ animationDelay: `${tierIndex * 150}ms` }}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{tier.tier}</h3>
              <div className={`grid ${tier.tier === "Platinum Sponsors" ? "md:grid-cols-2" : tier.tier === "Gold Sponsors" ? "md:grid-cols-3" : "md:grid-cols-4"} gap-6`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="bg-[#11234a] rounded-xl p-6 flex flex-col items-center justify-center border border-[#301b47] hover:border-[#4a2172] transition-all duration-300 aspect-video"
                  >
                    <div className="w-full h-32 mb-4 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center p-4">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                        style={{ opacity: 0.8 }}
                      />
                    </div>
                    <h4 className="text-white font-medium text-center">{sponsor.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-white mb-6">Become a Sponsor</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join our community of forward-thinking companies supporting the next generation of tech innovators. Various sponsorship packages are available.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#4a2172] to-[#9d2449] hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Sponsor TechHack 2025
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsContent;