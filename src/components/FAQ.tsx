import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Who can participate in TechHack 2025?",
      answer: "TechHack is open to all enthusiasts, regardless of experience level. Whether you're a student, professional, or hobbyist, as long as you're passionate about technology and innovation, you're welcome to join."
    },
    {
      question: "Do I need to have a team to register?",
      answer: "No, you can register individually and form teams during the event. We'll have team formation activities to help you find like-minded collaborators. Teams can have up to 4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in TechHack 2025 is completely free, thanks to our generous sponsors. However, registration is required as spaces are limited."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "For in-person participants: your laptop, charger, any personal devices you may need, and your enthusiasm! For virtual participants: ensure you have a stable internet connection and the necessary software installed."
    },
    {
      question: "Will there be food provided?",
      answer: "Yes, for in-person participants, meals, snacks, and beverages will be provided throughout the event. We'll accommodate dietary restrictions mentioned during registration."
    },
    {
      question: "Can I work on a pre-existing project?",
      answer: "No, all projects must be started from scratch at the beginning of the hackathon. You can come with ideas, but coding and design work should begin during the event."
    },
    {
      question: "What resources will be available during the hackathon?",
      answer: "Participants will have access to mentors, workshops, API credits from sponsors, and various development tools. Details will be provided closer to the event."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on innovation, technical complexity, design, practicality, and presentation. Our panel of judges includes industry experts and sponsors."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-[#0a1931]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Find answers to common questions about TechHack 2025. If you don't see your question here, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`mb-4 bg-[#11234a] rounded-lg overflow-hidden transition-all duration-300 animate-on-scroll opacity-0`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-white font-medium">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#f5b7b1]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#f5b7b1]" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-white/80">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll opacity-0">
          <p className="text-white/80 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#301b47] hover:bg-[#4a2172] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;