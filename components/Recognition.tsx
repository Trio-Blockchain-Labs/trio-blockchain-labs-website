
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from '../constants';
import trilemaLogo from '../assets/trilema.svg';
import wpiqLogo from '../assets/wpiq.png';
import type { Event } from '../types';

const Recognition: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedEvent) {
        closeModal();
      }
    };

    if (selectedEvent) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [selectedEvent]);

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
              <div className="hidden md:flex gap-3 justify-end">
                {/* Navigation buttons can be added here if needed */}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <style>{`
              .events-scroll::-webkit-scrollbar {
                display: none;
              }
              .events-scroll {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto events-scroll pb-8 scroll-smooth"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...EVENTS, ...EVENTS].map((event, index) => (
                <div 
                  key={`${event.id}-${index}`}
                  onClick={() => openModal(event)}
                  className="min-w-[320px] md:min-w-[450px] h-72 relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all cursor-pointer flex-shrink-0"
                >
                  {event.image && (
                    <>
                      <div className="absolute inset-0 bg-grey-900/50 group-hover:bg-grey-900/30 transition-all z-10"></div>
                      <img 
                        alt={event.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                        src={event.image} 
                      />
                    </>
                  )}
                  
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-purple-600 px-3 py-1.5 mb-3 inline-block rounded-sm w-fit">
                      {event.tag}
                    </span>
                    <h4 className="text-2xl font-bold mb-2">{event.title}</h4>
                    <p className="text-sm opacity-90 font-medium">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-thin scrollbar-thumb-grey-300 scrollbar-track-grey-100"
                onClick={(e) => e.stopPropagation()}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#d1d5db #f3f4f6'
                }}
              >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-grey-100 hover:bg-grey-200 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-grey-600">close</span>
              </button>

              {/* Hero Image */}
              {selectedEvent.image && (
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-purple-600 px-3 py-1.5 mb-3 inline-block rounded-sm">
                      {selectedEvent.tag}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{selectedEvent.title}</h3>
                    <p className="text-lg opacity-90">{selectedEvent.location}</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-grey-700 leading-relaxed text-lg">
                    {selectedEvent.detail}
                  </p>
                </div>

                {/* Event Images Gallery */}
                {selectedEvent.images && selectedEvent.images.length > 0 && (
                  <div className="mt-12">
                    <h4 className="text-2xl font-bold text-grey-900 mb-6">Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedEvent.images.map((img, index) => (
                        <div 
                          key={index}
                          className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                        >
                          <img 
                            src={img} 
                            alt={`${selectedEvent.title} - ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>

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
