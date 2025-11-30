import React from 'react';
import { timelineData, uiContent } from '../utils/data';
import { Language } from '../types';

interface HistorySectionProps {
  lang: Language;
}

const HistorySection: React.FC<HistorySectionProps> = ({ lang }) => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-egypt-gold font-serif">
          {uiContent.sections.history.title[lang]}
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          {uiContent.sections.history.subtitle[lang]}
        </p>
      </div>

      <div className={`relative ${lang === 'ar' ? 'border-r-4 mr-4 md:mr-10' : 'border-l-4 ml-4 md:ml-10'} border-egypt-gold/30 py-10`}>
        {timelineData.map((event, index) => (
          <div key={index} className="mb-12 relative">
            {/* Dot */}
            <div className={`absolute ${lang === 'ar' ? '-right-[26px] md:-right-[50px]' : '-left-[26px] md:-left-[50px]'} top-2 w-5 h-5 md:w-8 md:h-8 rounded-full bg-egypt-blue border-4 border-egypt-gold z-10`}></div>
            
            {/* Content */}
            <div className={`${lang === 'ar' ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'} bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-egypt-gold transition-all duration-300 group cursor-default backdrop-blur-sm`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-egypt-gold font-serif px-4 py-1 bg-egypt-blue/30 rounded-lg inline-block w-fit">
                  {event.year[lang]}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-egypt-gold transition-colors">
                  {event.title[lang]}
                </h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                {event.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
