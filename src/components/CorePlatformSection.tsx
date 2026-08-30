import React from 'react';
import { CORE_FEATURES } from '../data';
import { Users, CreditCard, Banknote, Send, Calendar, BarChart3, CheckCircle } from 'lucide-react';

export const CorePlatformSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-teal-800" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-teal-800" />;
      case 'Banknote': return <Banknote className="w-5 h-5 text-teal-800" />;
      case 'Send': return <Send className="w-5 h-5 text-teal-800" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-teal-800" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-teal-800" />;
      default: return <Users className="w-5 h-5 text-teal-800" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#252525] border border-[#E7E7E2] mb-3">
            BÜTÜNLEŞİK SİSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight leading-tight">
            Stüdyonun ihtiyacı olan her şey tek sade temelde
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] mt-4 max-w-2xl mx-auto">
            fitbase; sosyal medya gelen kutularını, satış ekibini, ön büroyu, eğitmenleri ve üyeleri tek bağlantılı işletim sisteminde buluşturur.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CORE_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#E7E7E2] hover:bg-white hover:border-[#252525] hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#D9FDEE] flex items-center justify-center border border-[#18F28D] mb-5 group-hover:bg-[#18F28D] transition-colors">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-bold text-[#252525] mb-2 tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tek Platformda Entegre</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
