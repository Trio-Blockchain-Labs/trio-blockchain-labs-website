
import React from 'react';

const Ticker: React.FC = () => {
  const partners = [
    { icon: 'token', name: 'ORACLE' },
    { icon: 'account_balance', name: 'CITADEL' },
    { icon: 'hub', name: 'NEXUS' },
    { icon: 'polyline', name: 'POLYGONAL' },
    { icon: 'blur_on', name: 'ETHER' },
  ];

  return (
    <section className="pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Our Partners</h3>
        <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto"></div>
      </div>
      
      <div className="bg-grey-950 py-16 border-y border-grey-900">
        <div className="flex items-center gap-16 whitespace-nowrap animate-scroll w-max">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 opacity-30 hover:opacity-100 transition-all duration-500 text-white text-xl font-bold tracking-widest cursor-default">
              {partners.map((p, idx) => (
                <span key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-purple-500">{p.icon}</span> 
                  {p.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticker;
