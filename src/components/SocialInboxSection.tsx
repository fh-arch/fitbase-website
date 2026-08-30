import React from 'react';
import { ArrowRight, Check, Facebook, Instagram, MessageCircle, UserPlus } from 'lucide-react';

interface SocialInboxSectionProps { onOpenDemo: () => void; }

export const SocialInboxSection: React.FC<SocialInboxSectionProps> = ({ onOpenDemo }) => (
  <section className="overflow-hidden bg-[#252525] py-20 text-white md:py-28" aria-labelledby="social-crm-title">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#18F28D]">Fitbase’in merkezindeki güç</span>
        <h2 id="social-crm-title" className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">Mesaj kutusu değil, çalışan bir satış hattı.</h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">WhatsApp Business, Instagram DM ve Facebook Messenger konuşmaları Fitbase’te tek akışta buluşur. Yeni yazan kişi potansiyel müşteri adayı olur; ekip konuşmayı sahiplenir ve satış süreci ölçülebilir hâle gelir.</p>
        <ul className="mt-7 space-y-3 text-sm text-zinc-200">
          {['Konuşmanın geldiği kanal CRM kaydında korunur', 'Aday sorumlu ekip üyesine atanır', 'Görüşme geçmişi ve satış aşaması birlikte ilerler', 'Geri dönüş göreviyle hiçbir talep unutulmaz'].map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#18F28D] text-[#252525]"><Check className="h-3.5 w-3.5 stroke-[3]" /></span>{item}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3"><button onClick={onOpenDemo} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#18F28D] px-6 py-3 text-sm font-bold text-[#252525]">Birleşik gelen kutusunu gör <ArrowRight className="h-4 w-4" /></button><a href="/ozellikler/sosyal-medya-crm" className="inline-flex min-h-12 items-center rounded-xl border border-zinc-600 px-6 py-3 text-sm font-bold">Detayları incele</a></div>
      </div>
      <div className="relative rounded-[2rem] border border-zinc-700 bg-zinc-900 p-5 shadow-2xl sm:p-7">
        <p className="mb-5 text-xs font-bold uppercase tracking-wider text-zinc-400">Birleşik gelen kutusu • Temsili görünüm</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-emerald-500/10 p-4"><MessageCircle className="h-6 w-6 text-emerald-400" /><strong className="mt-3 block text-sm">WhatsApp Business</strong><span className="text-xs text-zinc-400">Yeni üyelik sorusu</span></div>
          <div className="rounded-2xl bg-fuchsia-500/10 p-4"><Instagram className="h-6 w-6 text-fuchsia-400" /><strong className="mt-3 block text-sm">Instagram DM</strong><span className="text-xs text-zinc-400">Deneme dersi talebi</span></div>
          <div className="rounded-2xl bg-blue-500/10 p-4"><Facebook className="h-6 w-6 text-blue-400" /><strong className="mt-3 block text-sm">Messenger</strong><span className="text-xs text-zinc-400">Kurs programı sorusu</span></div>
        </div>
        <div className="my-4 flex justify-center"><ArrowRight className="h-6 w-6 rotate-90 text-[#18F28D]" /></div>
        <div className="rounded-2xl border border-emerald-400/30 bg-white p-5 text-[#252525]"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#18F28D]"><UserPlus className="h-5 w-5" /></span><div><strong className="block">Yeni potansiyel müşteri</strong><span className="text-xs text-zinc-500">Kaynak: Instagram DM • Aşama: İlk görüşme</span></div></div><div className="mt-4 grid grid-cols-2 gap-3 text-xs"><span className="rounded-lg bg-zinc-100 p-3">Sorumlu: Satış ekibi</span><span className="rounded-lg bg-zinc-100 p-3">Takip: Bugün</span></div></div>
      </div>
    </div>
  </section>
);
