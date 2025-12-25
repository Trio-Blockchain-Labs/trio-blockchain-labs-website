
import React, { useEffect, useRef, useState } from 'react';
import tahsinImage from '../assets/tahsin.png';

const TEAM = [
  {
    id: 1,
    name: "Tahsin",
    role: "Director",
    image: tahsinImage,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 2,
    name: "Fatih Altınışık",
    role: "Software Engineer",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 3,
    name: "Team Member",
    role: "Designer",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 4,
    name: "Team Member",
    role: "Manager",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 5,
    name: "Team Member",
    role: "Manager",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 6,
    name: "Team Member",
    role: "Manager",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: 7,
    name: "Team Member",
    role: "Manager",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="py-24 px-6 overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Meet Our Team</h3>
        <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full"></div>
      </div>
      
      <div 
        ref={scrollRef}
        className="relative w-full overflow-x-auto pb-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex gap-8 w-max">
          {[...TEAM, ...TEAM].map((member, index) => (
            <div 
              key={`${member.id}-${index}`}
              className="w-80 flex-shrink-0 group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500"
            >
              <div className="h-72 bg-grey-200 relative overflow-hidden">
                {member.image ? (
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                    src={member.image} 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-grey-200 to-grey-100 flex items-center justify-center text-grey-400 group-hover:text-purple-600 transition-colors">
                    <span className="material-symbols-outlined text-6xl">person</span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-grey-900">{member.name || "Team Member"}</h4>
                <p className="text-sm text-grey-500 mb-6 mt-1">{member.role}</p>
                <div className="flex gap-4">
                  <a 
                    className="text-grey-400 hover:text-[#0077b5] transition-colors" 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    className="text-grey-400 hover:text-black transition-colors" 
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
