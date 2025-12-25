
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-grey-100" id="industries">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Our Expertise</h3>
          <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto"></div>
          <p className="text-grey-600 mt-6 max-w-3xl mx-auto text-lg">Tailored blockchain implementations across high-impact sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div 
              key={ind.name}
              className="bg-white p-8 rounded-xl border border-grey-100 hover:border-purple-600/30 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-grey-900 mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-600 bg-purple-50 p-2 rounded-lg">{ind.icon}</span> 
                {ind.name}
              </h4>
              <ul className="space-y-4">
                {ind.points.map((pt) => (
                  <li key={pt} className="text-sm text-grey-600 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
