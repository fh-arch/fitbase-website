import React, { useState } from 'react';
import { X, CheckCircle2, CircleDot, Building2, Phone, Mail, User, ArrowRight, AlertCircle, HelpCircle } from 'lucide-react';
import { DemoModalProps } from '../types';
import { openWhatsAppMessage } from '../whatsapp';

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultStudioType }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    studioName: '',
    email: '',
    phone: '',
    studioType: defaultStudioType || 'pilates',
    trainerCount: '1-5',
    memberCount: '50-150',
    hearAboutUs: 'instagram',
    notes: ''
  });

  const [errors, setErrors] = useState<{
    name?: string;
    studioName?: string;
    email?: string;
    phone?: string;
  }>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { name?: string; studioName?: string; email?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad girilmesi zorunludur.';
    }

    if (!formData.studioName.trim()) {
      newErrors.studioName = 'Stüdyo Adı girilmesi zorunludur.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresi zorunludur.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi giriniz (örn. ornek@studyo.com).';
    }

    // Phone validation
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası zorunludur.';
    } else if (digitsOnly.length < 10) {
      newErrors.phone = 'Lütfen en az 10 haneli geçerli bir telefon numarası giriniz.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const studioTypeLabels: Record<string, string> = {
        pilates: 'Pilates / Reformer',
        yoga: 'Yoga Stüdyosu',
        fitness: 'Fitness Stüdyosu',
        personal_training: 'Personal Training',
        boutique_gym: 'Butik Gym',
        wellness: 'Wellness İşletmesi'
      };
      const message = [
        'Merhaba Fitbase, web sitenizden demo talebi oluşturuyorum.',
        '',
        `Ad Soyad: ${formData.name.trim()}`,
        `Stüdyo: ${formData.studioName.trim()}`,
        `E-posta: ${formData.email.trim()}`,
        `Telefon: ${formData.phone.trim()}`,
        `Stüdyo Türü: ${studioTypeLabels[formData.studioType] || formData.studioType}`,
        `Eğitmen Sayısı: ${formData.trainerCount}`,
        `Aktif Üye Sayısı: ${formData.memberCount}`,
        `Bizi Duyduğu Kanal: ${hearAboutLabels[formData.hearAboutUs] || formData.hearAboutUs}`,
        `Not: ${formData.notes.trim() || 'Belirtilmedi'}`
      ].join('\n');

      openWhatsAppMessage(message);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  const hearAboutLabels: Record<string, string> = {
    instagram: 'Instagram / Sosyal Medya',
    google: 'Google / Arama Motoru',
    recommendation: 'Tavsiye / Başka Bir Stüdyo',
    blog: 'fitbase Blog / Rehberler',
    event: 'Etkinlik / Fuar',
    other: 'Diğer'
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex bg-black/50 backdrop-blur-xs animate-fade-in" onClick={onClose}>
      <div 
        className="modal-panel relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E7E7E2]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        {/* Header decoration bar */}
        <div className="h-2 bg-gradient-to-r from-[#18F28D] via-[#C9D8C5] to-[#252525]" />

        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 pt-6 sm:p-6 md:p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D9FDEE] text-[#252525] mb-2">
                  <CircleDot className="w-3.5 h-3.5 text-teal-700" />
                  ÜCRETSİZ DEMO VE TANITIM
                </span>
                <h3 id="demo-modal-title" className="pr-10 text-xl sm:text-2xl font-bold text-[#252525] tracking-tight">
                  Stüdyonuz için fitbase’i keşfedin
                </h3>
                <p className="text-sm text-[#5F6368] mt-1">
                  Formu doldurun, 15 dakikalık birebir canlı demomuzda stüdyonuza özel süreçleri birlikte inceleyelim.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Ad Soyad *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="text" 
                        placeholder="Zeynep Alkan"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-sm bg-[#FAF7F2] border ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E2]'
                        } rounded-xl focus:outline-none focus:border-[#252525] transition-colors`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Stüdyo Adı *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="text" 
                        placeholder="Serene Reformer Studio"
                        value={formData.studioName}
                        onChange={(e) => {
                          setFormData({ ...formData, studioName: e.target.value });
                          if (errors.studioName) setErrors({ ...errors, studioName: undefined });
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-sm bg-[#FAF7F2] border ${
                          errors.studioName ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E2]'
                        } rounded-xl focus:outline-none focus:border-[#252525] transition-colors`}
                      />
                    </div>
                    {errors.studioName && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.studioName}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      E-Posta Adresi *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="email" 
                        placeholder="zeynep@serenestudio.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-sm bg-[#FAF7F2] border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E2]'
                        } rounded-xl focus:outline-none focus:border-[#252525] transition-colors`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Telefon Numarası *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="tel" 
                        placeholder="0532 000 00 00"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-sm bg-[#FAF7F2] border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E2]'
                        } rounded-xl focus:outline-none focus:border-[#252525] transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Stüdyo Türü
                    </label>
                    <select
                      value={formData.studioType}
                      onChange={(e) => setFormData({ ...formData, studioType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                    >
                      <option value="pilates">Pilates / Reformer</option>
                      <option value="yoga">Yoga Stüdyosu</option>
                      <option value="fitness">Fitness Stüdyosu</option>
                      <option value="personal_training">Personal Training</option>
                      <option value="boutique_gym">Butik Gym</option>
                      <option value="wellness">Wellness İşletmesi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Eğitmen Sayısı
                    </label>
                    <select
                      value={formData.trainerCount}
                      onChange={(e) => setFormData({ ...formData, trainerCount: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                    >
                      <option value="1">Yalnızca Ben (1)</option>
                      <option value="1-5">2 - 5 Eğitmen</option>
                      <option value="6-15">6 - 15 Eğitmen</option>
                      <option value="15+">15+ Eğitmen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Aktif Üye Sayısı
                    </label>
                    <select
                      value={formData.memberCount}
                      onChange={(e) => setFormData({ ...formData, memberCount: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                    >
                      <option value="0-50">0 - 50 Üye</option>
                      <option value="50-150">50 - 150 Üye</option>
                      <option value="150-500">150 - 500 Üye</option>
                      <option value="500+">500+ Üye</option>
                    </select>
                  </div>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Bizi nereden duydunuz?</span>
                  </label>
                  <select
                    value={formData.hearAboutUs}
                    onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                  >
                    <option value="instagram">Instagram / Sosyal Medya</option>
                    <option value="google">Google / Arama Motoru</option>
                    <option value="recommendation">Tavsiye / Başka Bir Stüdyo</option>
                    <option value="blog">fitbase Blog / Rehberler</option>
                    <option value="event">Etkinlik / Fuar</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Özel İhtiyaçlar veya Notlar (Opsiyonel)
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="Örn: Mevcut sistemimizden veri taşıması yapılmasını istiyoruz..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#252525] text-white font-semibold text-sm hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md group cursor-pointer"
                  >
                    <span>Demo Talebini WhatsApp’tan Gönder</span>
                    <ArrowRight className="w-4 h-4 text-[#18F28D] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#5F6368] pt-1">
                  🔒 Bilgileriniz %100 güvendedir. Kredi kartı gerekmez.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#D9FDEE] rounded-full flex items-center justify-center text-teal-800">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#252525]">
                WhatsApp mesajınız hazır!
              </h3>

              <p className="text-sm text-[#5F6368] max-w-md mx-auto leading-relaxed">
                Teşekkürler <span className="font-semibold text-[#252525]">{formData.name}</span>. Demo bilgileriniz WhatsApp’ta hazırlandı. Açılan sohbette <span className="font-semibold text-[#252525]">Gönder</span> düğmesine basarak talebinizi Fitbase ekibine iletebilirsiniz.
              </p>

              <div className="bg-[#FAF7F2] border border-[#E7E7E2] rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-zinc-600">
                  <span>Stüdyo Türü:</span>
                  <span className="font-medium text-[#252525] capitalize">{formData.studioType}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Telefon:</span>
                  <span className="font-medium text-[#252525]">{formData.phone}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Kanal:</span>
                  <span className="font-medium text-[#252525]">{hearAboutLabels[formData.hearAboutUs] || formData.hearAboutUs}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Sorumlu Uzman:</span>
                  <span className="text-emerald-700 font-semibold">fitbase Stüdyo Onboarding Ekibi</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="py-3 px-8 rounded-xl bg-[#252525] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
                >
                  Tamamlandı, Sayfaya Dön
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
