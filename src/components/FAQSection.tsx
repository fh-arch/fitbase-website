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
    answer: 'fitbase Onboarding ekibi, mevcut Excel tablolarınızdaki veya önceki yazılımınızdaki üye listelerinizi, aktif üyelik paketlerini ve kalan hakları 15 dakika içinde sistemimize ücretsiz olarak aktarır. Hiçbir üye verisi kaybolmaz.'
  },
  {
    id: '2',
    category: 'Kurulum & Geçiş',
    question: 'Kurulum süresi ne kadardır ve stüdyo ekibine eğitim veriliyor mu?',
    answer: 'fitbase bulut tabanlı bir platformdur; kurulum veya karmaşık donanım gerektirmez. Hesabınız aynı gün açılır. Eğitmenleriniz ve resepsiyon ekibiniz için 30 dakikalık canlı Türkçe online eğitim organize edilir.'
  },
  {
    id: '3',
    category: 'Ödemeler & Mobil',
    question: 'Üyelerimizin mobil uygulamadan ders rezerve etmesi için ekstra ücret ödenir mi?',
    answer: 'Hayır. Tüm paketlerimizde üye mobil uygulaması (iOS & Android) sınırsız sayıda üyeniz için tamamen ücretsizdir. Üyeleriniz kalan ders haklarını görebilir, tek tıkla ders rezerve edebilir ve bildirim alabilir.'
  },
  {
    id: '4',
    category: 'Ödemeler & Mobil',
    question: 'Kredi kartı ve sanal POS entegrasyonu (iyzico, Paratika vb.) destekleniyor mu?',
    answer: 'Evet. fitbase, Türkiye’nin önde gelen sanal POS altyapılarıyla ve iyzico ile doğrudan entegredir. Dilerseniz üyelerinize online paket satabilir, dilerseniz aylık tekrarlayan otomatik kart çekimleriyle düzenli gelir akışı oluşturabilirsiniz.'
  },
  {
    id: '5',
    category: 'Yönetim & Ekip',
    question: 'Eğitmenlerimizin prim ve hakediş hesaplamaları otomatik yapılıyor mu?',
    answer: 'Evet! Eğitmenlerinizin tamamladığı ders sayısı, katılan üye sayısı veya sabit ders başı ücret kurallarına göre hakedişler otomatik hesaplanır. Ay sonunda tek tıkla eğitmen prim raporunu indirebilirsiniz.'
  },
  {
    id: '6',
    category: 'Yönetim & Ekip',
    question: 'Birden fazla şubem varsa tüm stüdyolarımı tek hesaptan yönetebilir miyim?',
    answer: 'Evet. fitbase Çoklu Şube Mimarisi sayesinde şubeler arası üye geçişlerini, şube bazlı gelir raporlarını ve eğitmen ders dağılımlarını tek bir ana panelden anlık olarak takip edebilirsiniz.'
  },
  {
    id: '7',
    category: 'Yönetim & Ekip',
    question: 'Eğitmenler kendi telefonlarından ders takvimini ve katılım durumunu görebilir mi?',
    answer: 'Evet. Eğitmenler kendilerine özel roller ile giriş yaparak sadece kendi derslerini, katılan üye listelerini ve ders içi notlarını görebilir. Finansal verilere veya diğer eğitmenlerin müşteri bilgilerine erişemezler.'
  },
  {
    id: '8',
    category: 'Kurulum & Geçiş',
    question: 'Uzun süreli sözleşme taahhüdü var mı? İstediğim zaman iptal edebilir miyim?',
    answer: 'Herhangi bir uzun süreli taahhüt yoktur. fitbase’i aylık abonelik modeliyle kullanabilir, dilediğiniz zaman tek tıkla aboneliğinizi sonlandırabilirsiniz. Verileriniz her zaman güvendedir ve dışa aktarılabilir.'
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
