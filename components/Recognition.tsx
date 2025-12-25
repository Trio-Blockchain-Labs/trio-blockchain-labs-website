
import React from 'react';
import { RECOGNITIONS } from '../constants';
import trilemaLogo from '../assets/trilema.svg';
import wpiqLogo from '../assets/wpiq.png';

const Recognition: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden" id="recognition">
      <div className="max-w-7xl mx-auto">
        {/* Events Section */}
        <div className="mb-24">
          <div className="relative mb-12">
            <div className="flex flex-col md:grid md:grid-cols-3 items-end gap-6">
              <div className="hidden md:block"></div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Events</h3>
                <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto"></div>
              </div>
              <div className="flex gap-3 justify-center md:justify-end">
                <button className="w-12 h-12 border border-grey-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="w-12 h-12 border border-grey-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 scroll-smooth">
            {RECOGNITIONS.map((rec) => (
              <div 
                key={rec.id}
                className="min-w-[320px] md:min-w-[450px] h-72 relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all"
              >
                {rec.image && (
                  <>
                    <div className="absolute inset-0 bg-grey-900/40 group-hover:bg-grey-900/20 transition-all z-10"></div>
                    <img 
                      alt={rec.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                      src={rec.image} 
                    />
                  </>
                )}
                
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-purple-600 px-3 py-1.5 mb-3 inline-block rounded-sm">
                    {rec.type}
                  </span>
                  <h4 className="text-2xl font-bold text-shadow-sm">{rec.title}</h4>
                  <p className="text-sm opacity-90 mt-1 font-medium">{rec.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Milestones Section */}
        <div>
          <div className="mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Achievements & Milestones</h3>
            <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Trilema Achievements */}
            <div className="bg-[#171717] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-black/20 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden">
              {/* Ambient Background Glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10 relative z-10">
                <img src={trilemaLogo} alt="Trilema" className="h-10 w-auto" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <span className="material-symbols-outlined">trophy</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">TEKNOFEST 2024</h5>
                    <p className="text-sm text-grey-400">Blockchain Category Champion</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">İTÜ Çekirdek</h5>
                    <p className="text-sm text-grey-400">Big Bang TOP 50 Finalist</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">BTM İstanbul</h5>
                    <p className="text-sm text-grey-400">Startup Support</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <span className="material-symbols-outlined">business_center</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">PoC Partners</h5>
                    <p className="text-sm text-grey-400">Committed Institutions</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <span className="material-symbols-outlined">link</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">Tether</h5>
                    <p className="text-sm text-grey-400">Collaboration Discussions</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <span className="material-symbols-outlined">functions</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">Base Türkiye</h5>
                    <p className="text-sm text-grey-400">Project Demo Day Award</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Whitepaper IQ Achievements */}
            <div className="bg-[#532C58] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-purple-900/20 border border-white/10 hover:border-white/20 transition-colors flex flex-col relative overflow-hidden">
              {/* Ambient Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-400/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10 relative z-10">
                <img src={wpiqLogo} alt="Whitepaper IQ" className="h-10 w-auto brightness-0 invert" />
              </div>
              
              <div className="grid grid-cols-1 gap-y-10 relative z-10">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#532C58] transition-colors shrink-0">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">Finext 2025</h5>
                    <p className="text-sm text-purple-200">Finalist</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#532C58] transition-colors shrink-0">
                    <span className="material-symbols-outlined">emoji_events</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">ETH Istanbul 2025</h5>
                    <p className="text-sm text-purple-200">Winner</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#532C58] transition-colors shrink-0">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-tight mb-1">Base Demo Day</h5>
                    <p className="text-sm text-purple-200">Winner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
