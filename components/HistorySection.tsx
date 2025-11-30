import React from 'react';
import { TimelineEvent } from '../types';

const timelineData: TimelineEvent[] = [
  {
    year: "3100 ق.م",
    title: "توحيد القطرين",
    description: "الملك نعرمر (مينا) يوحد مصر العليا والسفلى ويؤسس الأسرة الأولى."
  },
  {
    year: "2580 ق.م",
    title: "بناء الهرم الأكبر",
    description: "انتهى الملك خوفو من بناء الهرم الأكبر في الجيزة، العجيبة الوحيدة الباقية من عجائب الدنيا القديمة."
  },
  {
    year: "1479 ق.م",
    title: "حكم تحتمس الثالث",
    description: "توسعت الإمبراطورية المصرية لأقصى حدودها لتشمل بلاد الشام والنوبة."
  },
  {
    year: "1332 ق.م",
    title: "توت عنخ آمون",
    description: "تولي الملك الصغير العرش وعودة عبادة آمون بعد ثورة إخناتون الدينية."
  },
  {
    year: "1274 ق.م",
    title: "معركة قادش",
    description: "رمسيس الثاني يقود الجيش المصري ضد الحيثيين وتوقيع أول معاهدة سلام في التاريخ."
  },
  {
    year: "30 ق.م",
    title: "نهاية العصر الفرعوني",
    description: "وفاة كليوباترا السابعة وسقوط مصر تحت الحكم الروماني."
  }
];

const HistorySection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-egypt-gold font-serif">شريط التاريخ الخالد</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          رحلة عبر آلاف السنين، من فجر الأسرات وحتى غروب شمس الحضارة الفرعونية.
        </p>
      </div>

      <div className="relative border-r-4 border-egypt-gold/30 mr-4 md:mr-10 py-10">
        {timelineData.map((event, index) => (
          <div key={index} className="mb-12 relative">
            {/* Dot */}
            <div className="absolute -right-[26px] md:-right-[50px] top-2 w-5 h-5 md:w-8 md:h-8 rounded-full bg-egypt-blue border-4 border-egypt-gold z-10"></div>
            
            {/* Content */}
            <div className="mr-8 md:mr-16 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-egypt-gold transition-all duration-300 group cursor-default backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-egypt-gold font-serif px-4 py-1 bg-egypt-blue/30 rounded-lg inline-block w-fit">
                  {event.year}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-egypt-gold transition-colors">
                  {event.title}
                </h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;