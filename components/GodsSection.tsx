import React from 'react';
import { God } from '../types';

const godsData: God[] = [
  {
    name: "رع (Ra)",
    title: "إله الشمس",
    description: "سيد الآلهة وخالق الكون. يسافر بمركبه الشمسي عبر السماء كل يوم محارباً قوى الظلام.",
    imageUrl: "https://images.unsplash.com/photo-1721631484050-9c2b4899539d?q=80&w=2670&auto=format&fit=crop" 
  },
  {
    name: "أنوبيس (Anubis)",
    title: "حارس المقابر",
    description: "إله التحنيط والموتى برأس ابن آوى. يشرف على ميزان القلب في محكمة الآخرة.",
    imageUrl: "https://images.unsplash.com/photo-1563203494-b29598a96499?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "إيزيس (Isis)",
    title: "ربة السحر والأمومة",
    description: "الزوجة المخلصة لأوزيريس والأم الحامية لحورس. رمز القوة السحرية والشفاء.",
    imageUrl: "https://images.unsplash.com/photo-1707833352726-28109d936171?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "أوزيريس (Osiris)",
    title: "ملك العالم الآخر",
    description: "إله البعث والحساب، ورمز الخصوبة والنيل. يحكم مملكة الموتى.",
    imageUrl: "https://images.unsplash.com/photo-1544464136-1e0e85d89855?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "حورس (Horus)",
    title: "إله السماء",
    description: "ابن إيزيس وأوزيريس، يصور برأس صقر. عين حورس هي رمز للحماية الملكية والصحة الجيدة.",
    imageUrl: "https://images.unsplash.com/photo-1620692446736-58c9735165c0?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "تحوت (Thoth)",
    title: "إله الحكمة",
    description: "مخترع الكتابة والعلوم، يصور برأس طائر أبو منجل. كاتب الآلهة وحكم النزاعات.",
    imageUrl: "https://images.unsplash.com/photo-1705600645672-019e13374895?q=80&w=2676&auto=format&fit=crop"
  }
];

const GodsSection: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-egypt-gold font-serif mb-4">مجمع الآلهة (الإنيد)</h2>
        <p className="text-slate-300 text-lg">رموز القوى الكونية والطبيعية في العقيدة المصرية القديمة.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {godsData.map((god, idx) => (
          <div key={idx} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-egypt-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            {/* Image Container */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-90" />
              <img 
                src={god.imageUrl} 
                alt={god.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute bottom-4 right-4 z-20 text-white font-serif font-bold text-2xl drop-shadow-lg">
                {god.name}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 relative">
              <div className="absolute top-0 right-6 -mt-3 bg-egypt-gold text-egypt-blue text-xs font-bold px-3 py-1 rounded shadow-lg">
                {god.title}
              </div>
              <p className="text-slate-300 mt-2 leading-relaxed font-light">
                {god.description}
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

export default GodsSection;