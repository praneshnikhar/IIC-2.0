import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
      question: "Who can participate in IIC 2.0?",
      answer: "IIC 2.0 is open to all enthusiasts, regardless of experience level. Whether you're a student, professional, or hobbyist, as long as you're passionate about technology and innovation, you're welcome to join."
    },
    {
      question: "Do I need to have a team to register?",
      answer: "No, you can register individually and form teams during the event. We'll have team formation activities to help you find like-minded collaborators. Teams can have up to 4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in IIC 2.0 is completely free, thanks to our generous sponsors. However, registration is required as spaces are limited."
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
    <section id="faq" ref={sectionRef} className="py-20 space-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4 animate-on-scroll opacity-0">
            <HelpCircle className="h-8 w-8 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Find answers to common questions about IIC 2.0. If you don't see your question here, feel free to contact us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`mb-4 glass-card rounded-lg overflow-hidden transition-all duration-300 animate-on-scroll opacity-0`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none hover:bg-white/5 transition-colors duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-white font-medium text-lg">{item.question}</span>
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 p-2 rounded-full">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-pink-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-pink-400" />
                  )}
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-lg leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll opacity-0">
          <p className="text-gray-300 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <button className="modern-button neon-button px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;