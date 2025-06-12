import React, { useEffect, useRef } from 'react';
import { Trophy, Award, Star, Zap, Crown } from 'lucide-react';

const Prizes: React.FC = () => {
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

  const mainPrizes = [
    {
      position: "1st Place",
      icon: <Crown className="h-12 w-12 text-yellow-400" />,
      prize: "₹1,25,000",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      benefits: [
        "Cash prize of ₹1,25,000",
        "Meetings with top venture capitalists",
        "6-month mentorship program",
        "Featured in TechCrunch article"
      ]
    },
    {
      position: "2nd Place",
      icon: <Trophy className="h-12 w-12 text-gray-300" />,
      prize: "₹75,000",
      gradient: "from-gray-300 via-gray-400 to-gray-500",
      benefits: [
        "Cash prize of ₹75,000",
        "3-month accelerator program",
        "Industry mentorship connections"
      ]
    },
    {
      position: "3rd Place",
      icon: <Award className="h-12 w-12 text-amber-600" />,
      prize: "₹25,000",
      gradient: "from-amber-600 via-amber-700 to-amber-800",
      benefits: [
        "Cash prize of ₹25,000",
        "Hardware development kit",
        "Exclusive workshop access"
      ]
    }
  ];

  const categoryPrizes = [
    {
      category: "Best AI Implementation",
      prize: "$5,000",
      sponsor: "TechAI Labs"
    },
    {
      category: "Most Innovative Solution",
      prize: "$5,000",
      sponsor: "InnovateCorp"
    },
    {
      category: "Best Social Impact",
      prize: "$5,000",
      sponsor: "ImpactFund"
    },
    {
      category: "Best UI/UX Design",
      prize: "$5,000",
      sponsor: "DesignWorks"
    },
    {
      category: "Most Technical Challenge",
      prize: "$5,000",
      sponsor: "CodeCraft"
    },
    {
      category: "People's Choice",
      prize: "$5,000",
      sponsor: "Community Vote"
    }
  ];

  return (
    <section id="prizes" ref={sectionRef} className="py-20 bg-[#1c2e5a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">Prizes & Rewards</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            $50,000+ in cash prizes, plus invaluable opportunities, mentorship, and resources for winners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-b ${prize.gradient} rounded-2xl p-8 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll opacity-0`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center bg-[#11234a]/50 p-4 rounded-full mb-6">
                {prize.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{prize.position}</h3>
              <div className="text-3xl font-bold text-[#f5b7b1] mb-6">{prize.prize}</div>
              <ul className="space-y-3 text-left">
                {prize.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-white/80">
                    <Zap className="h-5 w-5 mr-2 text-[#f5b7b1] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#11234a] rounded-2xl p-8 animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Category Prizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPrizes.map((category, index) => (
              <div 
                key={index}
                className="bg-[#1c2e5a] rounded-xl p-6 border border-[#301b47]"
              >
                <h4 className="text-white font-bold mb-2">{category.category}</h4>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[#f5b7b1] font-bold text-xl">{category.prize}</div>
                    <div className="text-white/60 text-sm">Sponsored by {category.sponsor}</div>
                  </div>
                  <Award className="h-8 w-8 text-[#4a2172]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;