
import React from 'react';
import tahsinImage from '../assets/tahsin.png';

const Team: React.FC = () => {
  return (
    <section className="py-24 px-6" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Meet Our Team</h3>
          <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Tahsin, our Director, embodies this vision by leading our efforts in both client projects and in-house developments. With his guidance, we strive to push the boundaries of blockchain technology, delivering secure and efficient solutions that cater to a wide range of needs.
              </p>
              <p className="font-medium text-grey-900">
                Discover how Tahsin and our team can help you achieve your blockchain goals.
              </p>
            </div>
            
            <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Work with us
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>

          {/* Right Column: Photo & Socials */}
          <div className="flex-1 flex flex-col items-center lg:items-start order-1 lg:order-2 w-full max-w-md">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-grey-100 mb-8 group shadow-2xl shadow-purple-100">
              <img 
                src={tahsinImage} 
                alt="Tahsin - Director" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="flex items-center gap-6 w-full">
              <div className="flex-1 h-px bg-grey-200"></div>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-grey-50 text-grey-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-purple-500/30">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-grey-50 text-grey-600 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-black/30">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <div className="flex-1 h-px bg-grey-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
