import React from 'react';
import { AUTOMATION_STEPS } from '../data';
import { UserPlus, Bell, RefreshCw, HeartPulse, AlertCircle, ArrowDown, CircleDot, CheckCircle2 } from 'lucide-react';

interface GrowthRetentionSectionProps {
  onOpenDemo: () => void;
}

export const GrowthRetentionSection: React.FC<GrowthRetentionSectionProps> = ({ onOpenDemo }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserPlus': return <UserPlus className="w-4 h-4 text-teal-800" />;
      case 'Bell': return <Bell className="w-4 h-4 text-teal-800" />;
      case 'RefreshCw': return <RefreshCw className="w-4 h-4 text-teal-800" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-teal-800" />;
      case 'AlertCircle': return <AlertCircle className="w-4 h-4 text-teal-800" />;
      default: return <UserPlus className="w-4 h-4 text-teal-800" />;
    }
  };

  return (
    <section id="growth" className="py-20 md:py-28 bg-[#D9FDEE] border-b border-[#E7E7E2] relative overflow-hidden">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#18F28D]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#252525] border border-[#C9D8C5]">
              <CircleDot className="w-3.5 h-3.5 text-teal-800" />
              <span>KARMAŞA OLMADAN BÜYÜME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight leading-tight">
              Daha fazla rezervasyon. Daha güçlü bağlılık. Daha az manuel iş.
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              Fitness CRM, ilk talepten paket yenilemeye kadar her görüşmeyi, notu ve görevi tek üye profilinde toplar. fitbase ekibinin doğru zamanda doğru mesajla takip yapmasını sağlar; böylece daha az lead ve daha az üye kaybedersin.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#252525]">
                <CheckCircle2 className="w-4 h-4 text-teal-800" />
                <span>Elde Tutma (Retention) Oranını %85+ Seviyesine Çıkarır</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#252525]">
                <CheckCircle2 className="w-4 h-4 text-teal-800" />
                <span>Telefon Arama ve Manuel Takip Süresini Sıfırlar</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="px-8 py-3.5 rounded-2xl bg-[#252525] text-white text-xs font-semibold hover:bg-black transition-all shadow-md cursor-pointer"
              >
                Nasıl çalışır?
              </button>
            </div>
          </div>

          {/* Right Column: Connected Flow Cards */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E7E7E2] shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E7E2]">
              <div>
                <h3 className="text-sm font-bold text-[#252525]">Fitness CRM Üye Yaşam Döngüsü</h3>
                <p className="text-xs text-[#5F6368]">7/24 Kesintisiz Çalışan Takip Kurguları</p>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#18F28D] text-[#252525]">
                Otomatik
              </span>
            </div>

            <div className="space-y-3">
              {AUTOMATION_STEPS.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E7E7E2] flex items-center justify-between gap-4 hover:border-[#252525] transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#E7E7E2] flex items-center justify-center shrink-0 group-hover:bg-[#18F28D] transition-colors">
                        {getIcon(step.iconName)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#252525]">{step.trigger}</p>
                        <p className="text-xs font-medium text-emerald-800 flex items-center gap-1 mt-0.5">
                          <span>→</span> {step.action}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#E7E7E2] text-zinc-600 shrink-0">
                      {step.time}
                    </span>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < AUTOMATION_STEPS.length - 1 && (
                    <div className="flex justify-center -my-1">
                      <ArrowDown className="w-4 h-4 text-zinc-400 stroke-[2]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
