import React, { useState } from 'react';
import { FEATURE_TABS } from '../data';
import { FeatureTabKey } from '../types';
import { Check, Calendar, Users, CreditCard, CircleDot, Clock, ChevronRight } from 'lucide-react';

interface FeatureTabsSectionProps {
  onOpenDemo: () => void;
}

export const FeatureTabsSection: React.FC<FeatureTabsSectionProps> = ({ onOpenDemo }) => {
  const [activeTabId, setActiveTabId] = useState<FeatureTabKey>('crm');

  const activeTabData = FEATURE_TABS.find((tab) => tab.id === activeTabId) || FEATURE_TABS[0];

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#252525] border border-[#E7E7E2] mb-3">
            GÜÇLÜ ÖZELLİKLER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight">
            Stüdyonu güvenle yönet
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] mt-3">
            WhatsApp Business, Instagram DM ve Facebook Messenger’dan gelen adayları CRM’e alın; rezervasyon, ödeme, ekip ve raporlamaya kadar tüm operasyonu entegre yönetin.
          </p>
        </div>

        {/* Large Rounded Charcoal Tab Bar */}
        <div className="mobile-scroll-row p-2 bg-[#252525] rounded-3xl shadow-xl max-w-5xl mx-auto mb-12 overflow-x-auto" role="tablist" aria-label="Fitbase özellikleri">
          <div className="flex items-center justify-start sm:justify-center gap-1.5 min-w-max">
            {FEATURE_TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#18F28D] text-[#252525] shadow-md scale-[1.02]'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Product Showcase Card */}
        <div className="max-w-5xl mx-auto bg-[#FAF7F2] border border-[#E7E7E2] rounded-3xl p-6 sm:p-10 md:p-12 shadow-soft transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title, Text, Bullets, CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#D9FDEE] text-teal-900 border border-[#18F28D]">
                <CircleDot className="w-3.5 h-3.5 text-teal-800" />
                <span>fitbase / {activeTabData.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#252525] tracking-tight leading-tight">
                {activeTabData.title}
              </h3>

              <p className="text-sm text-[#5F6368] leading-relaxed">
                {activeTabData.description}
              </p>

              {/* Bullet Points with Mint Check Icons */}
              <ul className="space-y-3 pt-2">
                {activeTabData.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#252525] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#18F28D] flex items-center justify-center text-[#252525] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button
                  onClick={onOpenDemo}
                  className="min-h-11 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#252525] text-white text-xs font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>{activeTabData.label} Modülünü İncele</span>
                  <ChevronRight className="w-4 h-4 text-[#18F28D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Soft Product UI Mockup */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E7E2] shadow-card space-y-5">
              
              {/* Mockup Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E7E2]">
                <span className="text-xs font-bold text-[#252525] uppercase tracking-wider">
                  {activeTabData.mockupData.badge}
                </span>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#D9FDEE] text-teal-800 border border-[#18F28D]">
                  Sade Panel Görünümü
                </span>
              </div>

              {/* Metrics Cards Grid */}
              <div className="grid grid-cols-3 gap-3">
                {activeTabData.mockupData.metrics.map((m, i) => (
                  <div key={i} className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E7E7E2]">
                    <p className="text-[10px] text-[#5F6368] font-medium">{m.label}</p>
                    <p className="text-sm sm:text-base font-extrabold text-[#252525] mt-0.5">{m.value}</p>
                    {m.trend && (
                      <p className="text-[9px] font-semibold text-emerald-700 mt-0.5">{m.trend}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Mockup List Section */}
              <div>
                <p className="text-xs font-bold text-[#252525] mb-2.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-800" />
                  {activeTabData.mockupData.listTitle}
                </p>

                <div className="space-y-2">
                  {activeTabData.mockupData.listItems.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#252525] transition-colors"
                    >
                      <div>
                        <p className="text-xs font-bold text-[#252525]">{item.primary}</p>
                        <p className="text-[11px] text-[#5F6368] mt-0.5">{item.secondary}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold self-start sm:self-center shrink-0 ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
