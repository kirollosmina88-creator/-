import React from 'react';
import { pharaohsData, uiContent } from '../utils/data';
import { Language } from '../types';

interface PharaohsSectionProps {
  lang: Language;
}

const PharaohsSection: React.FC<PharaohsSectionProps> = ({ lang }) => {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-egypt-gold font-serif mb-4">
          {uiContent.sections.pharaohs.title[lang]}
        </h2>
        <p className="text-slate-300 text-lg">
          {uiContent.sections.pharaohs.subtitle[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pharaohsData.map((pharaoh, idx) => (
          <div key={idx} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-egypt-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            {/* Image Container */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-90" />
              <img 
                src={pharaoh.imageUrl} 
                alt={pharaoh.name[lang]} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <span className={`absolute bottom-4 ${lang === 'ar' ? 'right-4' : 'left-4'} z-20 text-white font-serif font-bold text-2xl drop-shadow-lg`}>
                {pharaoh.name[lang]}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 relative">
              <div className={`absolute top-0 ${lang === 'ar' ? 'right-6' : 'left-6'} -mt-3 bg-egypt-blue border border-egypt-gold text-egypt-gold text-xs font-bold px-3 py-1 rounded shadow-lg z-20`}>
                {pharaoh.period[lang]}
              </div>
              <p className="text-slate-300 mt-4 leading-relaxed font-light">
                {pharaoh.description[lang]}
              </p>
            </div>
            
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-egypt-gold rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-egypt-gold rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharaohsSection;
