import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CircleDot, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Kurulum & Geçiş' | 'Ödemeler & Mobil' | 'Yönetim & Ekip';
}

interface FAQSectionProps {
  onOpenDemo?: () => void;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    category: 'Kurulum & Geçiş',
    question: 'Mevcut üye verilerimi ve kalan ders paketlerimi fitbase’e nasıl aktarabilirim?',
    answer: 'Mevcut veri kaynağı, alan yapısı ve kayıt kalitesi önce değerlendirilir. Aktarılabilecek alanlar, sorumluluklar, süre ve varsa ücret demo sonrasında yazılı olarak netleştirilir; inceleme yapılmadan kayıpsız veya belirli sürede geçiş garantisi verilmez.'
  },
  {
    id: '2',
    category: 'Kurulum & Geçiş',
    question: 'Kurulum süresi ne kadardır ve stüdyo ekibine eğitim veriliyor mu?',
    answer: 'Kurulum süresi işletmenin ekip, paket, takvim ve veri yapısına bağlıdır. Güncel onboarding adımları ile eğitim kapsamı demo görüşmesinde netleştirilir.'
  },
  {
    id: '3',
    category: 'Ödemeler & Mobil',
    question: 'Üyelerimizin mobil uygulamadan ders rezerve etmesi için ekstra ücret ödenir mi?',
    answer: 'Mobil deneyim ve plan kapsamı ürün geliştikçe değişebilir. Desteklenen uygulama özellikleri, kullanıcı sınırları ve fiyat etkisi teklif öncesinde yazılı olarak doğrulanır.'
  },
  {
    id: '4',
    category: 'Ödemeler & Mobil',
    question: 'Kredi kartı ve sanal POS entegrasyonu (iyzico, Paratika vb.) destekleniyor mu?',
    answer: 'Fitbase’in kamuya açık mevcut anlatımı tahsilat kaydı ve ödeme takibine odaklanır. Doğrudan ödeme alma veya belirli bir sanal POS entegrasyonu, güncel olarak destekleniyorsa demo sırasında adı ve kapsamıyla doğrulanır.'
  },
  {
    id: '5',
    category: 'Yönetim & Ekip',
    question: 'Eğitmenlerimizin prim ve hakediş hesaplamaları otomatik yapılıyor mu?',
    answer: 'Ekip rolleri ve operasyon kayıtları Fitbase’in temel çalışma alanlarındandır. Hakediş veya prim hesaplama kurallarının güncel kapsamı işletme senaryosu üzerinden demo sırasında doğrulanır.'
  },
  {
    id: '6',
    category: 'Yönetim & Ekip',
    question: 'Birden fazla şubem varsa tüm stüdyolarımı tek hesaptan yönetebilir miyim?',
    answer: 'Çok şubeli işletmelerin yetki, rapor ve üye hareketi gereksinimleri farklıdır. Desteklenen çoklu şube kapsamı ve sınırlar teklif öncesinde yazılı olarak netleştirilir.'
  },
  {
    id: '7',
    category: 'Yönetim & Ekip',
    question: 'Eğitmenler kendi telefonlarından ders takvimini ve katılım durumunu görebilir mi?',
    answer: 'Fitbase rol bazlı ekip kullanımını hedefler. Her rolün görebileceği alanlar ve yetki ayrıntıları güncel ürün sürümünde demo sırasında gösterilir.'
  },
  {
    id: '9',
    category: 'Yönetim & Ekip',
    question: 'fitbase’in fitness CRM özelliği neleri takip eder?',
    answer: 'Fitness CRM; aday ve üye kayıtlarını, görüşme notlarını ve takip görevlerini ortak bir profil etrafında düzenlemeyi amaçlar. Kanal entegrasyonları ve profil alanları güncel kapsam içinde ayrıca doğrulanır.'
  },
  {
    id: '8',
    category: 'Kurulum & Geçiş',
    question: 'Uzun süreli sözleşme taahhüdü var mı? İstediğim zaman iptal edebilir miyim?',
    answer: 'Abonelik süresi, iptal, veri dışa aktarma ve saklama koşulları imzalanacak güncel teklif ve kullanım koşullarında açıkça belirtilir. Karar vermeden önce bu belgeleri incelemenizi öneririz.'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenDemo }) => {
  const [openId, setOpenId] = useState<string | null>('1');
  const [activeCategory, setActiveCategory] = useState<string>('Hepsi');

  const categories = ['Hepsi', 'Kurulum & Geçiş', 'Ödemeler & Mobil', 'Yönetim & Ekip'];

  const filteredFaqs = activeCategory === 'Hepsi'
    ? FAQ_DATA
    : FAQ_DATA.filter(item => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-[#E7E7E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E7E7E2] text-[#252525] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#252525]" />
            <span>SIKÇA SORULAN SORULAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight mb-4">
            Aklınıza takılan tüm soruların yanıtları
          </h2>

          <p className="text-sm sm:text-base text-[#5F6368] max-w-xl mx-auto leading-relaxed">
            Stüdyo sahiplerinin fitbase’e geçerken en çok merak ettiği konuları ve geçiş süreçlerini derledik.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#252525] text-white shadow-sm'
                    : 'bg-[#FAF7F2] text-[#5F6368] border border-[#E7E7E2] hover:border-[#252525] hover:text-[#252525]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#FAF7F2] border-[#252525] shadow-sm' 
                    : 'bg-white border-[#E7E7E2] hover:border-zinc-400'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#252525] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#252525] text-white rotate-180' : 'bg-[#FAF7F2] text-[#252525] border border-[#E7E7E2]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5F6368] leading-relaxed border-t border-[#E7E7E2]/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[#252525]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18F28D]" />
                      <span>Kategori: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#252525] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#18F28D] text-[#252525] flex items-center justify-center flex-shrink-0 font-bold">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Farklı bir sorunuz mu var?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Stüdyo uzmanlarımız stüdyonuzun özel ihtiyaçlarını yanıtlamaktan mutluluk duyar.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#18F28D] text-[#252525] font-bold text-xs hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <CircleDot className="w-3.5 h-3.5" />
            <span>Uzmanımızla Görüşün</span>
          </button>
        </div>

      </div>
    </section>
  );
};
