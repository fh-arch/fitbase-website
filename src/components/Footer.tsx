import React from 'react';

interface FooterProps {
  onOpenStaffLogin: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStaffLogin, onOpenDemo }) => {
  return (
    <footer className="bg-white border-t border-[#E7E7E2] pt-16 pb-12 text-xs text-[#5F6368]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#E7E7E2]">
          
          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <a href="#top" className="inline-flex items-center" aria-label="Fitbase ana sayfa">
              <img src="/fitbase-logo.png" alt="Fitbase" className="h-10 w-auto max-w-[169px] object-contain" />
            </a>
            
            <p className="text-xs text-[#5F6368] leading-relaxed">
              Fitness, yoga ve pilates stüdyoları için sade ve güvenilir işletme yönetim platformu.
            </p>

            <div className="pt-1">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E7E7E2] text-[10px] font-semibold text-[#252525]">
                📍 Türkiye & AB Stüdyo Ağı
              </span>
            </div>
          </div>

          {/* Col 1: Ürün */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">Ürün</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#features" className="hover:text-[#252525] transition-colors">Rezervasyon</a></li>
              <li><a href="#features" className="hover:text-[#252525] transition-colors">Ödemeler</a></li>
              <li><a href="#features" className="hover:text-[#252525] transition-colors">Pazarlama</a></li>
              <li><a href="#features" className="hover:text-[#252525] transition-colors">Raporlama</a></li>
              <li><a href="#features" className="hover:text-[#252525] transition-colors">Branded App</a></li>
            </ul>
          </div>

          {/* Col 2: İşletme Türleri */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">İşletme Türleri</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#studio-types" className="hover:text-[#252525] transition-colors">Fitness Stüdyoları</a></li>
              <li><a href="#studio-types" className="hover:text-[#252525] transition-colors">Yoga Stüdyoları</a></li>
              <li><a href="#studio-types" className="hover:text-[#252525] transition-colors">Pilates Stüdyoları</a></li>
              <li><a href="#studio-types" className="hover:text-[#252525] transition-colors">Personal Training</a></li>
              <li><a href="#studio-types" className="hover:text-[#252525] transition-colors">Wellness İşletmeleri</a></li>
            </ul>
          </div>

          {/* Col 3: Şirket */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">Şirket</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#about" className="hover:text-[#252525] transition-colors">Hakkımızda</a></li>
              <li><a href="#pricing" className="hover:text-[#252525] transition-colors">Fiyatlandırma</a></li>
              <li><a href="#blog" className="hover:text-[#252525] transition-colors">Blog & Rehberler</a></li>
              <li><button onClick={onOpenDemo} className="hover:text-[#252525] transition-colors text-left cursor-pointer">İletişim & Demo</button></li>
            </ul>
          </div>

          {/* Col 4: Destek */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">Destek</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#faq" className="hover:text-[#252525] transition-colors">Sıkça Sorulan Sorular (SSS)</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('7/24 Canlı Destek ve rehberler için fitbase Müşteri Hizmetleri ile iletişime geçebilirsiniz.'); }} className="hover:text-[#252525] transition-colors">Yardım Merkezi</a></li>
              <li><button onClick={onOpenStaffLogin} className="hover:text-[#252525] transition-colors font-semibold text-[#252525] cursor-pointer">Personel Girişi ↗</button></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Gizlilik Politikası: Verileriniz KVKK ve GDPR uyumlu sunucularda yüksek koruma standartlarıyla tutulur.'); }} className="hover:text-[#252525] transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Kullanım Şartları: fitbase SaaS lisans sözleşmesi standartlarını karşılar.'); }} className="hover:text-[#252525] transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 fitbase. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span>KVKK Uyumlu</span>
            <span>256-bit SSL Güvenliği</span>
            <span>SLA %99.9 Uptime</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
