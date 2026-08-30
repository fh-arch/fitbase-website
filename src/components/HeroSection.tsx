import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, CircleDot, TrendingUp, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="about" className="relative bg-[#D9FDEE] pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-[#E7E7E2]">
      
      {/* Background Soft Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-[#18F28D]/40 blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#C9D8C5]/30 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left hero-copy">
            <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/80 border border-[#C9D8C5] shadow-xs mb-5 sm:mb-6">
              <CircleDot className="w-3.5 h-3.5 text-teal-800" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-wider text-[#252525]">
                SOSYAL MESAJLAŞMA ENTEGRASYONLU FITNESS CRM
              </span>
            </div>

            <h1 className="text-[2.35rem] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#252525] tracking-[-0.045em] leading-[1.04] mb-5 sm:mb-6">
              Her sosyal medya mesajını <span className="relative">potansiyel müşteriye dönüştür.<span className="absolute left-0 -bottom-1 h-2 w-full rounded-full bg-[#18F28D]/55 -z-10" /></span>
            </h1>

            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              WhatsApp Business, Instagram DM ve Facebook Messenger’dan gelen yazışmaları tek gelen kutusunda toplayın. Her konuşmayı CRM adayına dönüştürün; sorumlu atayın, satış aşamasını ve geri dönüşü takip edin. Rezervasyon, üyelik, paket ve tahsilat süreçlerini aynı platformda yönetin.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#252525] text-white font-semibold text-sm hover:bg-black transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ücretsiz Demo Al</span>
                <ArrowRight className="w-4 h-4 text-[#18F28D] group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/ozellikler"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/80 text-[#252525] font-semibold text-sm border border-[#C9D8C5] hover:bg-white hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                Platformu Keşfet
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 text-left">
              {[
                ['3 kanal', 'tek gelen kutusu'],
                ['CRM adayı', 'her yeni yazışmadan'],
                ['Satış takibi', 'atanan sorumlu ve aşama'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/55 px-4 py-3 backdrop-blur-sm">
                  <strong className="block text-lg text-[#252525]">{value}</strong>
                  <span className="text-[11px] text-[#5F6368]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hero-visual">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-[#18F28D]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_28px_80px_rgba(17,75,50,0.22)]">
              <img
                src="/fitbase-hero-athletes.png"
                alt="Modern bir spor stüdyosunda birlikte kuvvet antrenmanı yapan atletik kadın ve erkek"
                width={1536}
                height={1024}
                fetchPriority="high"
                className="aspect-[16/11] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101814]/35 via-transparent to-transparent" />
            </div>
            <div className="float-card absolute left-2 sm:-left-8 bottom-3 sm:bottom-6 rounded-2xl bg-white/95 p-3 sm:p-4 shadow-xl border border-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#18F28D]"><TrendingUp className="h-5 w-5" /></span>
                <div><strong className="block text-sm">Temsili panel</strong><span className="text-[11px] text-[#5F6368]">örnek arayüz verisi</span></div>
              </div>
            </div>
            <div className="float-card-delayed absolute right-2 sm:-right-6 top-3 sm:top-6 rounded-2xl bg-[#252525]/95 p-3 sm:p-4 text-white shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold"><span className="h-2.5 w-2.5 rounded-full bg-[#18F28D]" /> Canlı stüdyo durumu</div>
              <p className="mt-1 text-[11px] text-zinc-300">Örnek ekran • Gerçek müşteri verisi değildir</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 text-xs text-[#5F6368] font-medium mt-10 mb-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 sm:mt-12 sm:mb-12">
          {['WhatsApp Business entegrasyonu', 'Instagram DM entegrasyonu', 'Facebook Messenger entegrasyonu'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-800" />{item}
            </span>
          ))}
        </div>

        {/* Soft Product UI Showcase Mockup */}
        <div className="product-panel relative mt-4 mx-auto max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-2xl border border-white text-left">
          
          {/* Mockup Header Bar */}
          <div className="flex items-start justify-between gap-2 pb-4 mb-4 border-b border-[#E7E7E2]">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <span className="min-w-0 truncate text-[10px] sm:text-xs font-semibold text-[#252525] bg-[#FAF7F2] px-2 sm:px-3 py-1 rounded-lg border border-[#E7E7E2]">
                fitbase.app / stüdyo-paneli
              </span>
            </div>
            
            <div className="flex shrink-0 items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Temsili ürün görünümü
              </span>
            </div>
          </div>

          {/* Grid Mockup Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Widget 1: Bugünün Dersleri */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#252525] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-teal-800" />
                  Bugünün Dersleri
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#18F28D] text-[#252525]">
                  8 Seans
                </span>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-2.5 rounded-xl border border-[#E7E7E2] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#252525]">09:00 Reformer Flow</p>
                    <p className="text-[10px] text-zinc-500">6/6 Dolu • Zeynep K.</p>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded font-semibold">
                    Tam Dolu
                  </span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#E7E7E2] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#252525]">10:30 Vinyasa Yoga</p>
                    <p className="text-[10px] text-zinc-500">11/12 Dolu • Melis A.</p>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] bg-teal-100 text-teal-800 rounded font-semibold">
                    1 Boş
                  </span>
                </div>
              </div>
            </div>

            {/* Widget 2: Otomatik Hatırlatıcılar & Doluluk */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#252525] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-800" />
                  Sistem Otomasyonu
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Aktif
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-[#E7E7E2] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <p className="font-medium text-[#252525]">Takip görevi oluşturuldu</p>
                    <p className="text-[10px] text-zinc-500">Örnek üye operasyonu</p>
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#E7E7E2] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <p className="font-medium text-[#252525]">Paket kontrolü planlandı</p>
                    <p className="text-[10px] text-zinc-500">Temsili iş akışı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 3: Doluluk & Gelir Trendi */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#252525] flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-teal-800" />
                  Aylık Performans
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Örnek rapor
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E7E7E2] text-xs">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-[11px] text-zinc-500">Doluluk Oranı:</span>
                  <span className="font-bold text-[#252525] text-sm">Temsili</span>
                </div>
                {/* Visual Bar */}
                <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden mb-3">
                  <div className="bg-[#252525] h-2 rounded-full w-2/3" />
                </div>
                <div className="flex justify-between items-center text-[11px] pt-1 border-t border-zinc-100">
                  <span className="text-zinc-500">Veri durumu:</span>
                  <span className="font-semibold text-emerald-700">Örnek gösterim</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
