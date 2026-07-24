import React from 'react';
import { STUDIO_TYPES } from '../data';
import { StudioTypeKey } from '../types';
import { Activity, CircleDot, Layers, UserCheck, Building2, HeartHandshake, ArrowRight } from 'lucide-react';

interface StudioTypesSectionProps {
  onSelectStudioType: (typeId: string) => void;
}

export const StudioTypesSection: React.FC<StudioTypesSectionProps> = ({ onSelectStudioType }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5 text-teal-800" />;
      case 'CircleDot': return <CircleDot className="w-5 h-5 text-teal-800" />;
      case 'Layers': return <Layers className="w-5 h-5 text-teal-800" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-teal-800" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-teal-800" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-teal-800" />;
      default: return <Activity className="w-5 h-5 text-teal-800" />;
    }
  };

  return (
    <section id="studio-types" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#252525] border border-[#E7E7E2] mb-3">
            SENİN İŞLETMEN İÇİN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight">
            Her stüdyo türü için tek sade platform
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] mt-3">
            Farklı disiplin ve büyüklükteki tüm stüdyolar için uyarlanabilir, sakin ve verimli çözümler.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {STUDIO_TYPES.map((studio) => (
            <div
              key={studio.id}
              className="bg-white rounded-3xl p-7 border border-[#E7E7E2] shadow-xs hover:shadow-lg hover:border-[#252525] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#D9FDEE] flex items-center justify-center border border-[#18F28D] group-hover:bg-[#18F28D] transition-colors">
                    {getIcon(studio.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FAF7F2] text-[#5F6368] border border-[#E7E7E2]">
                    {studio.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#252525] mb-2.5 tracking-tight group-hover:text-black">
                  {studio.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  {studio.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectStudioType(studio.id)}
                  className="text-xs font-bold text-[#252525] flex items-center gap-1.5 group-hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>{studio.title} için Özellikler</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
