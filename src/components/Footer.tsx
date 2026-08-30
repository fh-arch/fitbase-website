import React from 'react';
import { legalEntity } from '../legalEntity';

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
            <a href="/" className="inline-flex items-center" aria-label="Fitbase ana sayfa">
              <img src="/fitbase-logo.png" alt="Fitbase" className="h-10 w-auto max-w-[169px] object-contain" />
            </a>
            
            <p className="text-xs text-[#5F6368] leading-relaxed">
              Fitness, yoga ve pilates stüdyoları için CRM destekli, sade ve güvenilir fitness yönetim platformu.
            </p>

            <div className="pt-1">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E7E7E2] text-[10px] font-semibold text-[#252525]">
                Türkiye merkezli ürün ve destek
              </span>
            </div>
          </div>

          {/* Col 1: Ürün */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">Ürün</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="/ozellikler/sosyal-medya-crm" className="hover:text-[#252525] transition-colors">Sosyal Medya CRM</a></li>
              <li><a href="/ozellikler/fitness-crm" className="hover:text-[#252525] transition-colors">Fitness CRM</a></li>
              <li><a href="/ozellikler/rezervasyon" className="hover:text-[#252525] transition-colors">Rezervasyon</a></li>
              <li><a href="/ozellikler/uyelik-paket-yonetimi" className="hover:text-[#252525] transition-colors">Üyelik & Paketler</a></li>
              <li><a href="/ozellikler/odeme-takibi" className="hover:text-[#252525] transition-colors">Ödeme Takibi</a></li>
              <li><a href="/ozellikler/raporlama" className="hover:text-[#252525] transition-colors">Raporlama</a></li>
            </ul>
          </div>

          {/* Col 2: İşletme Türleri */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">İşletme Türleri</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="/cozumler/fitness-salonu-yonetimi" className="hover:text-[#252525] transition-colors">Fitness Salonları</a></li>
              <li><a href="/cozumler/yoga-studyo-yonetimi" className="hover:text-[#252525] transition-colors">Yoga Stüdyoları</a></li>
              <li><a href="/cozumler/pilates-studyo-yonetimi" className="hover:text-[#252525] transition-colors">Pilates Stüdyoları</a></li>
              <li><a href="/cozumler/personal-trainer" className="hover:text-[#252525] transition-colors">Personal Trainer</a></li>
              <li><a href="/cozumler/dans-studyosu-yonetimi" className="hover:text-[#252525] transition-colors">Dans Stüdyoları</a></li>
              <li><a href="/cozumler/jimnastik-salonu-yonetimi" className="hover:text-[#252525] transition-colors">Jimnastik Salonları</a></li>
              <li><a href="/cozumler/padel-kulubu-yonetimi" className="hover:text-[#252525] transition-colors">Padel Kulüpleri</a></li>
              <li><a href="/cozumler/spor-kursu-yonetimi" className="hover:text-[#252525] transition-colors">Spor Kursları</a></li>
            </ul>
          </div>

          {/* Col 3: Şirket */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">Şirket</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="/ozellikler" className="hover:text-[#252525] transition-colors">Ürün</a></li>
              <li><a href="/fiyatlandirma" className="hover:text-[#252525] transition-colors">Fiyatlandırma</a></li>
              <li><a href="/veri-tasima" className="hover:text-[#252525] transition-colors">Veri Taşıma</a></li>
              <li><a href="/blog" className="hover:text-[#252525] transition-colors">Blog & Rehberler</a></li>
              <li><button onClick={onOpenDemo} className="hover:text-[#252525] transition-colors text-left cursor-pointer">İletişim & Demo</button></li>
            </ul>
          </div>

          {/* Col 4: Destek */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252525] uppercase tracking-wider text-[11px]">Destek</h3>
            <ul className="space-y-2 font-medium">
              <li><a href="#faq" className="hover:text-[#252525] transition-colors">Sıkça Sorulan Sorular (SSS)</a></li>
              <li><a href="mailto:info@fitbase.com.tr" className="hover:text-[#252525] transition-colors">E-posta Desteği</a></li>
              <li><button onClick={onOpenStaffLogin} className="hover:text-[#252525] transition-colors font-semibold text-[#252525] cursor-pointer">Personel Girişi ↗</button></li>
              {/*
                Real pages, not alert() summaries.

                These were one-line alerts describing a policy that did not exist. KVKK art. 10
                requires the controller be identified to the data subject in writing, and Meta's
                App Review opens the privacy policy URL as its first check — a JavaScript dialog
                fails both, and fails them silently because the link looks present.
              */}
              <li><a href="/gizlilik" className="hover:text-[#252525] transition-colors">Gizlilik Politikası</a></li>
              <li><a href="/kosullar" className="hover:text-[#252525] transition-colors">Kullanım Koşulları</a></li>
              <li><a href="/kvkk" className="hover:text-[#252525] transition-colors">KVKK Aydınlatma Metni</a></li>
            </ul>
          </div>

        </div>

        {/*
          The trade identity, read from `src/legalEntity.ts` rather than typed here.

          Two obligations meet in this block and both want the same values. Turkish e-commerce law
          (6563 md. 3) requires a service provider to disclose its trade name, address and contact
          details in a form a visitor can reach without asking. Meta's Business Verification
          separately compares the entity on the submitted registry documents against the entity the
          website presents — and a site whose only self-identification is a lowercase brand and a
          copyright line gives a reviewer nothing to compare, which is among the commonest
          rejections. Rendered from the shared constant so it cannot drift from the legal pages.
        */}
        <div className="pt-8 pb-6 border-b border-[#E7E7E2] space-y-1.5 text-[11px] leading-relaxed">
          <p className="font-semibold text-[#252525]">{legalEntity.legalName}</p>
          <p>{legalEntity.address}</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              Tel:{' '}
              <a href={`tel:${legalEntity.phone.replace(/\s/g, '')}`} className="hover:text-[#252525] transition-colors">
                {legalEntity.phone}
              </a>
            </span>
            {legalEntity.contactEmail && (
              <span>
                E-posta:{' '}
                <a href={`mailto:${legalEntity.contactEmail}`} className="hover:text-[#252525] transition-colors">
                  {legalEntity.contactEmail}
                </a>
              </span>
            )}
            <span>VKN: {legalEntity.taxNumber}</span>
            {legalEntity.mersisNumber && <span>MERSİS: {legalEntity.mersisNumber}</span>}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 fitbase. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span>Şeffaf veri politikası</span>
            <span>HTTPS ile korunur</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
