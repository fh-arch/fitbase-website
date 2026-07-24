import React from 'react';
import { Smartphone, Check, Bell, Calendar, CircleDot, Shield, ChevronRight } from 'lucide-react';

interface BrandedAppSectionProps {
  onOpenDemo: () => void;
}

export const BrandedAppSection: React.FC<BrandedAppSectionProps> = ({ onOpenDemo }) => {
  const bullets = [
    'Üye rezervasyon deneyimi',
    'Paket ve kredi görünürlüğü',
    'Push bildirimleri',
    'Branded studio app opsiyonu',
    'Kolay iptal ve yeniden planlama'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#252525] border border-[#E7E7E2]">
              <Smartphone className="w-3.5 h-3.5 text-teal-800" />
              <span>MOBİL ÜYE DENEYİMİ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight leading-tight">
              Her üye için daha akıcı bir deneyim
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              Üyelerine ders rezervasyonu yapabilecekleri, paketlerini görebilecekleri, hatırlatmalar alabilecekleri ve stüdyonla bağlantıda kalabilecekleri sade bir deneyim sun.
            </p>

            <ul className="space-y-3 pt-2">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#252525]">
                  <span className="w-5 h-5 rounded-full bg-[#18F28D] flex items-center justify-center text-[#252525] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="px-8 py-3.5 rounded-2xl bg-[#252525] text-white text-xs font-semibold hover:bg-black transition-all shadow-md flex items-center gap-2 cursor-pointer group"
              >
                <span>Mobil App Demosunu İste</span>
                <ChevronRight className="w-4 h-4 text-[#18F28D] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Soft Mobile App Mockups */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Phone Screen 1: Class Reservation */}
            <div className="w-full max-w-[270px] bg-white rounded-[36px] p-4 border-4 border-[#252525] shadow-2xl relative space-y-3">
              {/* Phone Notch */}
              <div className="w-20 h-3 bg-[#252525] rounded-full mx-auto mb-2" />

              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-extrabold text-[#252525]">Serene Studio</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Package Card */}
              <div className="bg-[#252525] text-white p-3.5 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start text-[10px] text-zinc-300">
                  <span>Aktif Paketim</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#18F28D] text-[#252525] font-bold">10'lu Reformer</span>
                </div>
                <p className="text-lg font-bold mt-2 text-[#18F28D]">7 Kredi Kaldı</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">Son Kullanma: 24 Ağustos 2026</p>
              </div>

              {/* Class Card */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#252525]">Bugün Rezerve Edilen Ders</p>

                <div className="bg-[#D9FDEE] p-3 rounded-2xl border border-[#18F28D]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-[#252525]">Reformer Flow</p>
                      <p className="text-[10px] text-teal-900 mt-0.5">Eğitmen: Zeynep K.</p>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-700 text-white rounded">
                      Bugün 17:30
                    </span>
                  </div>
                  <div className="mt-2 text-[10px] text-teal-900 flex items-center justify-between pt-2 border-t border-[#18F28D]">
                    <span>Salon A • Reformer #3</span>
                    <span className="font-semibold text-emerald-800">✓ Onaylandı</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Button */}
              <button
                onClick={onOpenDemo}
                className="w-full py-2.5 bg-[#252525] text-white rounded-xl text-xs font-semibold text-center cursor-pointer hover:bg-black transition-colors"
              >
                Yeni Ders Rezerve Et
              </button>
            </div>

            {/* Phone Screen 2: Push Notifications & Schedule */}
            <div className="w-full max-w-[270px] bg-white rounded-[36px] p-4 border-4 border-[#252525] shadow-2xl relative space-y-3 sm:mt-8">
              {/* Phone Notch */}
              <div className="w-20 h-3 bg-[#252525] rounded-full mx-auto mb-2" />

              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-extrabold text-[#252525]">Bildirimler & Takvim</span>
                <Bell className="w-3.5 h-3.5 text-teal-800" />
              </div>

              {/* Push Notification Card */}
              <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7E7E2] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal-800">
                  <CircleDot className="w-3 h-3" />
                  <span>Ders Hatırlatması</span>
                </div>
                <p className="text-xs font-bold text-[#252525]">Yarın 10:30 Vinyasa Yoga</p>
                <p className="text-[10px] text-[#5F6368]">Ders saatine 12 saat kaldı. Yanınızda mat getirmeyi unutmayın!</p>
              </div>

              {/* Upcoming List */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#252525]">Gelecek Seanslarım</p>

                <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] text-[11px]">
                  <div className="flex justify-between font-semibold text-[#252525]">
                    <span>Cuma • 18:00</span>
                    <span className="text-emerald-700">Reformer</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Eğitmen: Melis A.</p>
                </div>

                <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] text-[11px]">
                  <div className="flex justify-between font-semibold text-[#252525]">
                    <span>Pazartesi • 09:00</span>
                    <span className="text-emerald-700">Mat Pilates</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Eğitmen: Burak S.</p>
                </div>
              </div>

              {/* Re-schedule Note */}
              <div className="p-2 bg-[#D9FDEE] rounded-xl text-[10px] text-center text-teal-900 font-medium">
                24 saat öncesine kadar tek dokunuşla iptal ve erteleme opsiyonu.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
