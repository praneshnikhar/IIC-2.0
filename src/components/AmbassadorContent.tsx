// src/components/AmbassadorContent.tsx
import React from 'react';

const AmbassadorContent: React.FC = () => {
  return (
    <main className="flex-grow px-6 py-16 flex flex-col items-center text-center">
      <h1 className= "pt-8 text-4xl sm:text-5xl font-bold mb-6 text-pink-400">
        Join the Movement.
      </h1>
      <p className="text-lg sm:text-xl max-w-3xl mb-10 text-gray-300 leading-relaxed">
        Be a part of something bigger! Become a{' '}
        <span className="text-cyan-400 font-semibold">Campus Ambassador</span>{' '}
        and help us build a thriving, innovative community. Share ideas, spread awareness, and lead your campus toward a brighter, tech-forward future.
      </p>

      {/* <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe6ijcmxTn81PlqAFyGi8QxcUmkxcaGJZT5OoOfFGsIFegi4Q/viewform"
        
        target= "_blank"
        rel="noopener noreferrer"
        className= "inline-block px-10 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 hover:from-purple-700 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 active:scale-95 border-2 border-pink-500 shadow-lg"
      > */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe6ijcmxTn81PlqAFyGi8QxcUmkxcaGJZT5OoOfFGsIFegi4Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 rounded-md text-lg font-semibold text-[#0a1931] bg-white hover:bg-gray-100 transition-all duration-300 shadow-md"
      >
        Apply Now
      </a>

      <section className="mt-16 max-w-4xl w-full text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400 text-center">
          Perks for Campus Ambassadors
        </h2>
        <ul className="space-y-4 text-lg text-gray-300 list-disc list-inside">
          <li>
            <span className="text-cyan-400 font-semibold">Recognition Certificate and Goodies:</span>{' '}
            For your leadership and contribution. Cool swags, gadgets and merch!
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">Exclusive Perks:</span>{' '}
            Ambassador-only swags and VIP access.
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">Participation Certificate & Networking:</span>{' '}
            Connect with top peers and tech leaders.
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">Performance Rewards:</span>{' '}
            8+ signups = free team entry, social media shoutout, and website feature.
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">Skill Development & Resume Boost:</span>{' '}
            Showcase leadership, communication, and tech community building.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AmbassadorContent;
