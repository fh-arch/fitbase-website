import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar, 
  CreditCard, 
  UserCheck, 
  Clock, 
  Award, 
  Filter,
  CheckCircle2
} from 'lucide-react';

export const DashboardSection: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'this_week' | 'this_month' | 'this_quarter'>('this_month');

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#252525] border border-[#E7E7E2] mb-3">
            GÖRSEL ANALİTİK & YÖNETİM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight">
            Daha iyi kararlar için net içgörüler
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] mt-3">
            Yeni bir Excel dosyası oluşturmadan stüdyonda ne olduğunu gör.
          </p>
        </div>

        {/* Big Dashboard Mockup Container */}
        <div className="max-w-6xl mx-auto bg-[#FAF7F2] border border-[#E7E7E2] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
          
          {/* Top Bar with Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E7E7E2]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#252525] text-[#18F28D] flex items-center justify-center font-bold">
                f
              </div>
              <div>
                <h3 className="text-base font-bold text-[#252525]">Serene Reformer Studio — Yönetim Paneli</h3>
                <p className="text-xs text-[#5F6368]">Anlık Veri Güncelleme: 2 dakika önce</p>
              </div>
            </div>

            {/* Time Filter Tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E7E7E2] text-xs">
              <button
                onClick={() => setTimeRange('this_week')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  timeRange === 'this_week' ? 'bg-[#252525] text-white' : 'text-[#5F6368] hover:text-[#252525]'
                }`}
              >
                Bu Hafta
              </button>
              <button
                onClick={() => setTimeRange('this_month')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  timeRange === 'this_month' ? 'bg-[#252525] text-white' : 'text-[#5F6368] hover:text-[#252525]'
                }`}
              >
                Bu Ay
              </button>
              <button
                onClick={() => setTimeRange('this_quarter')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  timeRange === 'this_quarter' ? 'bg-[#252525] text-white' : 'text-[#5F6368] hover:text-[#252525]'
                }`}
              >
                Son 3 Ay
              </button>
            </div>
          </div>

          {/* Widgets Grid - Row 1: KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            
            {/* KPI 1: Bugünkü Rezervasyonlar */}
            <div className="bg-white p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between text-[#5F6368] mb-1">
                <span className="text-[11px] font-semibold">Bugünkü Rezervasyonlar</span>
                <Calendar className="w-3.5 h-3.5 text-teal-800" />
              </div>
              <p className="text-xl font-extrabold text-[#252525]">24 Ders</p>
              <p className="text-[10px] font-semibold text-emerald-700 mt-1">%94 Doluluk Oranı</p>
            </div>

            {/* KPI 2: Yeni Lead'ler */}
            <div className="bg-white p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between text-[#5F6368] mb-1">
                <span className="text-[11px] font-semibold">Yeni Lead'ler</span>
                <Users className="w-3.5 h-3.5 text-teal-800" />
              </div>
              <p className="text-xl font-extrabold text-[#252525]">+18 Aday</p>
              <p className="text-[10px] font-semibold text-emerald-700 mt-1">%68 Deneme Dönüşümü</p>
            </div>

            {/* KPI 3: Paket Yenilemeleri */}
            <div className="bg-white p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between text-[#5F6368] mb-1">
                <span className="text-[11px] font-semibold">Paket Yenilemeleri</span>
                <CreditCard className="w-3.5 h-3.5 text-teal-800" />
              </div>
              <p className="text-xl font-extrabold text-[#252525]">%88.2</p>
              <p className="text-[10px] font-semibold text-emerald-700 mt-1">32/36 Üye Yeniledi</p>
            </div>

            {/* KPI 4: Aylık Gelir */}
            <div className="bg-white p-4 rounded-2xl border border-[#E7E7E2]">
              <div className="flex items-center justify-between text-[#5F6368] mb-1">
                <span className="text-[11px] font-semibold">Aylık Toplam Gelir</span>
                <TrendingUp className="w-3.5 h-3.5 text-teal-800" />
              </div>
              <p className="text-xl font-extrabold text-[#252525]">₺248.500</p>
              <p className="text-[10px] font-semibold text-emerald-700 mt-1">+%16.4 Geçen Aya Göre</p>
            </div>

            {/* KPI 5: No-show Oranı */}
            <div className="bg-white p-4 rounded-2xl border border-[#E7E7E2] col-span-2 md:col-span-1">
              <div className="flex items-center justify-between text-[#5F6368] mb-1">
                <span className="text-[11px] font-semibold">No-Show Oranı</span>
                <Clock className="w-3.5 h-3.5 text-teal-800" />
              </div>
              <p className="text-xl font-extrabold text-[#252525]">%2.4</p>
              <p className="text-[10px] font-semibold text-emerald-700 mt-1">Çok Düşük & Güvenli</p>
            </div>

          </div>

          {/* Row 2: Charts & Deep Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Box: Revenue Trend Visual Bar Chart */}
            <div className="md:col-span-7 bg-white p-5 rounded-2xl border border-[#E7E7E2] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xs font-bold text-[#252525]">Aylık Gelir ve Rezervasyon Trendi</h4>
                  <p className="text-[11px] text-[#5F6368]">Düzenli Paket ve Randevu Gelirleri</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D9FDEE] text-teal-900">
                  Otomatik Hesaplandı
                </span>
              </div>

              {/* Simulated Visual Chart */}
              <div className="space-y-3 my-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 text-zinc-500 font-medium">Hafta 1</span>
                  <div className="flex-1 bg-zinc-100 h-6 rounded-lg overflow-hidden flex items-center p-1">
                    <div className="bg-[#C9D8C5] h-4 rounded-md w-[65%] flex items-center justify-end px-2 text-[10px] font-bold text-[#252525]">₺52.000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 text-zinc-500 font-medium">Hafta 2</span>
                  <div className="flex-1 bg-zinc-100 h-6 rounded-lg overflow-hidden flex items-center p-1">
                    <div className="bg-[#C9D8C5] h-4 rounded-md w-[78%] flex items-center justify-end px-2 text-[10px] font-bold text-[#252525]">₺64.500</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 text-zinc-500 font-medium">Hafta 3</span>
                  <div className="flex-1 bg-zinc-100 h-6 rounded-lg overflow-hidden flex items-center p-1">
                    <div className="bg-[#18F28D] h-4 rounded-md w-[88%] flex items-center justify-end px-2 text-[10px] font-bold text-[#252525]">₺71.000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 text-zinc-500 font-medium">Hafta 4</span>
                  <div className="flex-1 bg-zinc-100 h-6 rounded-lg overflow-hidden flex items-center p-1">
                    <div className="bg-[#252525] text-white h-4 rounded-md w-[72%] flex items-center justify-end px-2 text-[10px] font-bold">₺61.000</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-[#5F6368]">
                <span>Ortalama Ders Başı Gelir: <strong className="text-[#252525]">₺380</strong></span>
                <span>En Yüksek Gün: <strong className="text-[#252525]">Çarşamba & Cumartesi</strong></span>
              </div>
            </div>

            {/* Right Box: Top Classes & Trainer Performance */}
            <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-[#E7E7E2] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <h4 className="text-xs font-bold text-[#252525] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-teal-800" />
                  En İyi Performans Gösteren Dersler
                </h4>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#252525]">1. Reformer Flow (İleri)</p>
                    <p className="text-[10px] text-zinc-500">Zeynep Kaya • Hafta içi 09:00</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#18F28D] text-[#252525]">
                    %98 Dolu
                  </span>
                </div>

                <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#252525]">2. Gentle Vinyasa Yoga</p>
                    <p className="text-[10px] text-zinc-500">Melis Arslan • Hafta sonu 10:30</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#D9FDEE] text-teal-900">
                    %92 Dolu
                  </span>
                </div>

                <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#252525]">3. Birebir Special PT</p>
                    <p className="text-[10px] text-zinc-500">Burak Serin • Randevulu</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-800">
                    %90 Dolu
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#D9FDEE] rounded-xl border border-[#18F28D] text-[11px] text-teal-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0" />
                <span>Üye devamlılığı (retention) geçen aya göre <strong className="font-bold">%4.1 arttı</strong>.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
