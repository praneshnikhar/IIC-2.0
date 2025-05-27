import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Registration: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
    participation: '',
    heardFrom: '',
    interests: [] as string[],
    agreeTerms: false
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prev) => ({ ...prev, [name]: checked }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real app, you would send this data to your backend
    alert('Registration successful! Check your email for confirmation.');
    setFormState({
      name: '',
      email: '',
      role: '',
      experience: '',
      participation: '',
      heardFrom: '',
      interests: [],
      agreeTerms: false
    });
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">Register for TechHack 2025</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4a2172] to-[#9d2449] mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto animate-on-scroll opacity-0">
            Secure your spot for the biggest hackathon of the year. Registration is free but spaces are limited!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="bg-[#11234a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Join TechHack?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#4a2172] rounded-full p-1 mt-0.5 mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-[#301b47] rounded-lg border border-[#4a2172]">
                <h4 className="text-xl font-bold text-white mb-4">Registration Deadline</h4>
                <p className="text-white/80 mb-3">
                  Don't miss out! Registration closes on May 15, 2025, or when we reach capacity.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[#f5b7b1] font-bold">Limited spots available!</div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">80% Full</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="bg-[#11234a] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Registration Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1c2e5a] border border-[#301b47] rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1c2e5a] border border-[#301b47] rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-white/80 mb-2">Your Role *</label>
                    <select
                      id="role"
                      name="role"
                      value={formState.role}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#1c2e5a] border border-[#301b47] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="data_scientist">Data Scientist</option>
                      <option value="product_manager">Product Manager</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-white/80 mb-2">Experience Level *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formState.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#1c2e5a] border border-[#301b47] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
                    >
                      <option value="" disabled>Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="experienced">Experienced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="participation" className="block text-white/80 mb-2">Participation Type *</label>
                  <select
                    id="participation"
                    name="participation"
                    value={formState.participation}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#1c2e5a] border border-[#301b47] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
                  >
                    <option value="" disabled>Select participation type</option>
                    <option value="in_person">In-Person (San Francisco)</option>
                    <option value="virtual">Virtual (Online)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Areas of Interest</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['AI/ML', 'Web Development', 'Mobile Apps', 'Blockchain', 'AR/VR', 'IoT', 'Cybersecurity', 'Data Science'].map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          value={interest}
                          checked={formState.interests.includes(interest)}
                          onChange={handleInterestChange}
                          className="mr-2 h-4 w-4 rounded border-[#301b47] text-[#9d2449] focus:ring-[#4a2172]"
                        />
                        <span className="text-white/80 text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="heardFrom" className="block text-white/80 mb-2">How did you hear about us?</label>
                  <select
                    id="heardFrom"
                    name="heardFrom"
                    value={formState.heardFrom}
                    onChange={handleInputChange}
                    className="w-full bg-[#1c2e5a] border border-[#301b47] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4a2172]"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="social_media">Social Media</option>
                    <option value="friend">Friend or Colleague</option>
                    <option value="school">School or University</option>
                    <option value="previous_attendee">Previous Attendee</option>
                    <option value="sponsor">Sponsor or Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formState.agreeTerms}
                      onChange={handleCheckboxChange}
                      required
                      className="mr-2 mt-1 h-4 w-4 rounded border-[#301b47] text-[#9d2449] focus:ring-[#4a2172]"
                    />
                    <span className="text-white/80 text-sm">
                      I agree to the <a href="#" className="text-[#f5b7b1] hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#f5b7b1] hover:underline">Privacy Policy</a>. I understand my data will be processed according to the hackathon guidelines.
                    </span>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4a2172] to-[#9d2449] hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;