import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#252525] border border-[#E7E7E2] mb-3">
            FİYATLANDIRMA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight">
            Büyüyen stüdyolar için esnek planlar
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] mt-3">
            Şeffaf, taahhütsüz ve stüdyonuzun ölçeğine göre şekillenen paket seçenekleri.
          </p>

          {/* Billing Cycle Selector */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#E7E7E2]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#252525] text-white shadow-xs'
                  : 'text-[#5F6368] hover:text-[#252525]'
              }`}
            >
              Aylık Ödeme
            </button>

            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#252525] text-white shadow-xs'
                  : 'text-[#5F6368] hover:text-[#252525]'
              }`}
            >
              <span>Yıllık Ödeme</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#18F28D] text-[#252525]">
                2 Ay Ücretsiz
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 border transition-all flex flex-col justify-between ${
                plan.recommended
                  ? 'bg-[#FAF7F2] border-[#252525] shadow-xl md:-translate-y-2'
                  : 'bg-white border-[#E7E7E2] hover:border-[#252525] shadow-xs'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#252525] text-[#18F28D] text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 text-[#18F28D]" />
                  <span>EN ÇOK TERCİH EDİLEN</span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-[#252525] tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-[#5F6368] mt-2 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                <div className="py-4 border-t border-b border-[#E7E7E2] mb-6">
                  <p className="text-xs font-bold text-[#252525] uppercase tracking-wider mb-3">
                    PAKET İÇERİĞİ:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#252525] font-medium">
                        <span className="w-4 h-4 rounded-full bg-[#18F28D] flex items-center justify-center text-[#252525] shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.recommended
                      ? 'bg-[#252525] text-white hover:bg-black shadow-md'
                      : 'bg-[#FAF7F2] text-[#252525] border border-[#E7E7E2] hover:bg-[#252525] hover:text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-center text-[#5F6368] mt-2">
                  Taahhüt yok • Dilediğiniz zaman iptal edin
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
