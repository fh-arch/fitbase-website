import React from 'react';
import { ArrowRight, CircleDot, CheckCircle } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenDemo: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 bg-[#252525] text-white relative overflow-hidden">
      
      {/* Subtle Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#18F28D]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C9D8C5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800 text-[#18F28D] text-xs font-bold uppercase tracking-wider mb-6 border border-zinc-700">
          <CircleDot className="w-3.5 h-3.5 text-[#18F28D]" />
          <span>BAŞLAMAYA HAZIR MISINIZ?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Stüdyonu daha net yönetmeye hazır mısın?
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-10">
          WhatsApp Business, Instagram DM ve Facebook Messenger konuşmalarının nasıl CRM adayına dönüştüğünü; rezervasyon, üyelik, ödeme takibi ve ekip süreçleriyle nasıl birleştiğini görün.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#18F28D] text-[#252525] font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Demo Al</span>
            <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/ozellikler"
            className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-transparent text-white font-semibold text-sm border border-zinc-700 hover:border-white hover:bg-zinc-800 transition-all flex items-center justify-center cursor-pointer"
          >
            Özellikleri İncele
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#18F28D]" />
            Kapsam demoda doğrulanır
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#18F28D]" />
            İşletmeye özel değerlendirme
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#18F28D]" />
            Canlı Türkçe destek
          </span>
        </div>

      </div>
    </section>
  );
};
