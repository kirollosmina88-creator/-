import React, { useState } from 'react';
import { Home, Scroll, Info, MessageSquare, Menu, X, Pyramid, Sun } from 'lucide-react';
import OracleChat from './components/OracleChat';
import HistorySection from './components/HistorySection';
import GodsSection from './components/GodsSection';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return <HistorySection />;
      case 'gods':
        return <GodsSection />;
      case 'oracle':
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-egypt-gold font-serif mb-2">تحدث مع الحكيم</h2>
            <p className="text-slate-300 mb-8">استخدم قوة الذكاء الاصطناعي لتسافر عبر الزمن وتتحدث مع أحد حكماء مصر القديمة.</p>
            <OracleChat />
          </div>
        );
      case 'home':
      default:
        return (
          <div className="space-y-20">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center text-center shadow-2xl border border-slate-700">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1531588636284-904cb535c602?q=80&w=2670&auto=format&fit=crop"
                  alt="Pyramids at night"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-egypt-gold/20 rounded-full border border-egypt-gold/50 backdrop-blur-sm mb-4">
                  <Sun className="text-egypt-gold animate-spin-slow" size={20} />
                  <span className="text-egypt-gold font-bold">مهد الحضارات</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white font-serif drop-shadow-lg leading-tight">
                  اكتشف أسرار <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-egypt-gold to-yellow-200">مصر القديمة</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
                  رحلة تفاعلية عبر الزمن لاستكشاف عظمة الفراعنة، غموض الأهرامات، وحكمة الأجداد.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setActiveTab('history')}
                    className="px-8 py-4 bg-egypt-gold text-egypt-blue font-bold rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-egypt-gold/50 flex items-center justify-center gap-2"
                  >
                    <Scroll size={20} />
                    <span>ابدأ الرحلة</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('oracle')}
                    className="px-8 py-4 bg-transparent border-2 border-egypt-gold text-egypt-gold font-bold rounded-lg hover:bg-egypt-gold/10 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={20} />
                    <span>اسأل الحكيم</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <div 
                onClick={() => setActiveTab('history')}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-egypt-gold hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-egypt-gold transition-colors">
                  <Pyramid className="text-egypt-gold group-hover:text-egypt-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">التاريخ العظيم</h3>
                <p className="text-slate-400">استكشف الجدول الزمني لأعظم حضارة عرفتها البشرية، من عصر التأسيس إلى الغروب.</p>
              </div>

              <div 
                onClick={() => setActiveTab('gods')}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-egypt-gold hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-egypt-gold transition-colors">
                  <Sun className="text-egypt-gold group-hover:text-egypt-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">الآلهة والأساطير</h3>
                <p className="text-slate-400">تعرف على معتقدات المصريين القدماء، وقصص الآلهة: رع، أوزيريس، وإيزيس.</p>
              </div>

              <div 
                onClick={() => setActiveTab('oracle')}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-egypt-gold hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-egypt-gold transition-colors">
                  <MessageSquare className="text-egypt-gold group-hover:text-egypt-blue w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">حكمة إمحوتب</h3>
                <p className="text-slate-400">تحدث مباشرة مع الذكاء الاصطناعي المتقمص لشخصية حكيم مصري للحصول على إجابات فورية.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  const NavButton = ({ tab, icon: Icon, label }: { tab: Tab, icon: any, label: string }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setIsMenuOpen(false);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        activeTab === tab 
          ? 'bg-egypt-gold text-egypt-blue font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
          : 'text-slate-300 hover:text-egypt-gold hover:bg-slate-800'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-egypt-gold rounded-full flex items-center justify-center">
               <Pyramid className="text-egypt-blue fill-egypt-blue" />
            </div>
            <span className="text-2xl font-bold font-serif text-white tracking-wide">أسرار <span className="text-egypt-gold">الفراعنة</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavButton tab="home" icon={Home} label="الرئيسية" />
            <NavButton tab="history" icon={Scroll} label="التاريخ" />
            <NavButton tab="gods" icon={Sun} label="الآلهة" />
            <NavButton tab="oracle" icon={MessageSquare} label="العراف" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-egypt-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-2 animate-in slide-in-from-top-5">
            <NavButton tab="home" icon={Home} label="الرئيسية" />
            <NavButton tab="history" icon={Scroll} label="التاريخ" />
            <NavButton tab="gods" icon={Sun} label="الآلهة" />
            <NavButton tab="oracle" icon={MessageSquare} label="العراف" />
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-28 pb-12 min-h-screen">
        <div className="animate-in fade-in duration-700">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
             <Pyramid className="text-egypt-gold" />
             <span className="font-serif text-2xl text-white">مصر الخالدة</span>
          </div>
          <p className="text-slate-500 mb-4">تم تطوير هذا الموقع باستخدام أحدث تقنيات الويب والذكاء الاصطناعي</p>
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;