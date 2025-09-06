import React, { useEffect, useRef } from "react";
import { Users } from "lucide-react";

const JudgesMentorsContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const judges = [
    {
      icon: (
        <img
          src="/judge1.png"
          alt="Judge 1"
          className="h-20 w-20 object-cover rounded-full"
        />
      ),
      name: "Kushal Vijay",
    },
    {
      icon: (
        <img
          src="/judge2.png"
          alt="Judge 2"
          className="h-20 w-20 object-cover rounded-full"
        />
      ),
      name: "Swati Maurya",
    },
  ];

  const mentors = [
    {
      icon: (
        <img
          src="/mentor1.png"
          alt="Mentor 1"
          className="h-20 w-20 object-cover rounded-full"
        />
      ),
      name: "Aditi Gupta",
    },
    {
      icon: (
        <img
          src="/mentor2.png"
          alt="Mentor 2"
          className="h-20 w-20 object-cover rounded-full"
        />
      ),
      name: "Bhagirath Giri",
    },
    {
      icon: (
        <img
          src="/mentor3.png"
          alt="Mentor 3"
          className="h-20 w-20 object-cover rounded-full"
        />
      ),
      name: "Sonam Chhikara",
    },
  ];

  return (
    <div className="min-h-screen space-bg" ref={sectionRef}>
      <main className="container mx-auto px-4 py-20">
        {/* Judges Section */}
        <div className="animate-on-scroll opacity-0 mb-20">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4">
              <Users className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold gradient-text mb-2">
              Meet the Judges
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"></div>
          </div>
          {/* 2 Judges → 2 columns */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {judges.map((judge, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 group relative overflow-hidden text-center"
              >
                <div className="flex items-center justify-center h-20 mb-4">
                  {judge.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {judge.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="animate-on-scroll opacity-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-2">Mentors</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 mx-auto"></div>
          </div>
          {/* 3 Mentors → 3 columns */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 group relative overflow-hidden text-center"
              >
                <div className="flex items-center justify-center h-20 mb-4">
                  {mentor.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {mentor.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JudgesMentorsContent;
