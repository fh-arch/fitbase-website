import React from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Sparkles, MapPin, TrendingUp } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#18F28D] border-b border-[#E7E7E2] relative overflow-hidden">
      
      {/* Soft Background Accent */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#D9FDEE]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#252525] border border-[#C9D8C5] mb-3">
            MÜŞTERİ HİKAYELERİ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight">
            Stüdyolar fitbase ile daha net büyür
          </h2>
          <p className="text-base sm:text-lg text-[#252525]/80 mt-3 font-medium">
            Sadece zaman kazanmakla kalmayan, stüdyosunun doluluk ve gelirini artıran yöneticilerden dinleyin.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#C9D8C5] shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <Quote className="w-8 h-8 text-teal-800/40 mb-4 stroke-[1.5]" />

                <p className="text-sm sm:text-base text-[#252525] font-semibold leading-relaxed mb-6 italic">
                  “{testimonial.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                {testimonial.metrics && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#D9FDEE] text-teal-900 text-[11px] font-bold">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-800" />
                    <span>{testimonial.metrics}</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-[#252525]">{testimonial.author}</h3>
                    <p className="text-xs font-medium text-emerald-800">{testimonial.role}</p>
                    <p className="text-[11px] text-[#5F6368]">{testimonial.studioName}</p>
                  </div>

                  <span className="text-[10px] text-zinc-500 font-medium flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {testimonial.location.split(',')[0]}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
