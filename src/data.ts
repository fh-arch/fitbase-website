import { 
  FeatureTabData, 
  StudioTypeInfo, 
  CoreFeatureItem, 
  AutomationStep, 
  PricingPlan, 
  Testimonial,
  BlogPost
} from './types';

export const FEATURE_TABS: FeatureTabData[] = [
  {
    id: 'booking',
    label: 'Rezervasyon',
    title: 'Zahmetsiz rezervasyon deneyimi',
    description: 'Üyelerin ders, randevu ve deneme seanslarını online rezerve ederken ekibin kapasite, bekleme listesi ve katılım durumunu tek panelden kontrol eder.',
    bullets: [
      'Ders ve randevu için online rezervasyon',
      'Kapasite ve bekleme listesi yönetimi',
      'No-show ve iptal takibi',
      'Otomatik hatırlatmalar'
    ],
    mockupData: {
      badge: 'Canlı Takvim & Rezervasyon',
      metrics: [
        { label: 'Bugünkü Doluluk', value: '%94', trend: '+%8 geçen haftaya göre' },
        { label: 'Bekleme Listesi', value: '12 kişi', trend: 'Dolu dersler için' },
        { label: 'Otomatik Check-in', value: '38/42', trend: 'Tamamlandı' }
      ],
      listTitle: 'Yaklaşan Seanslar (Bugün)',
      listItems: [
        { primary: '09:00 — Reformer Flow (İleri)', secondary: 'Eğitmen: Zeynep K. • 8/8 Dolu', tag: 'Dolu + 2 Bekleyen', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: '10:30 — Gentle Vinyasa Yoga', secondary: 'Eğitmen: Melis A. • 12/15 Dolu', tag: '3 Koltuk Boş', tagColor: 'bg-mint-light text-teal-800' },
        { primary: '12:00 — Core & Mat Pilates', secondary: 'Eğitmen: Burak S. • 10/10 Dolu', tag: 'Otomatik Check-in', tagColor: 'bg-zinc-100 text-zinc-800' },
        { primary: '17:30 — 1-on-1 PT Randevusu', secondary: 'Danışan: Caner T. • Özel Studio 2', tag: 'Kredi Düşüldü', tagColor: 'bg-emerald-100 text-emerald-800' }
      ]
    }
  },
  {
    id: 'payments',
    label: 'Ödemeler',
    title: 'Şeffaf ve otomatik tahsilat yapısı',
    description: 'Paket satışları, tekrarlayan üyelik ödemeleri ve periyodik kredileri nakit akışını aksatmadan tek merkezden güvenle yönetin.',
    bullets: [
      'Kredi kartı ve otomatik tekrarlayan ödemeler',
      'Kalan ders kredisi ve paket sonu takibi',
      'Başarısız ödemeler için otomatik üye bildirimleri',
      'Detaylı fatura ve KDV kırılımlı gelir raporları'
    ],
    mockupData: {
      badge: 'Otomatik Tahsilat & Paketler',
      metrics: [
        { label: 'Bu Ay Tahsil Edilen', value: '₺184.200', trend: '+14.2%' },
        { label: 'Yenileme Bekleyen', value: '18 Paket', trend: 'Bu hafta' },
        { label: 'Başarılı Tahsilat', value: '%98.2', trend: 'Otomatik POS' }
      ],
      listTitle: 'Son İşlem Geçmişi',
      listItems: [
        { primary: 'Selin Y. — 10\'lu Reformer Paketi', secondary: 'Kart ile Ödeme • ₺8.500', tag: 'Başarılı', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: 'Emre K. — Aylık Sınırsız Yoga', secondary: 'Otomatik Yenileme • ₺3.200', tag: 'Otomatik Çekildi', tagColor: 'bg-mint-light text-teal-800' },
        { primary: 'Ayşe T. — Özel PT Paketi (8 Seans)', secondary: 'Havale / EFT • ₺12.000', tag: 'Onaylandı', tagColor: 'bg-emerald-100 text-emerald-800' }
      ]
    }
  },
  {
    id: 'marketing',
    label: 'Pazarlama',
    title: 'Üyelerinizi elde tutan akıllı iletişim',
    description: 'Yeni potansiyel adayları deneme dersine davet edin, devamsızlık yapan üyeleri geri kazanın ve otomatik SMS/E-posta kurguları çalıştırın.',
    bullets: [
      'Segment bazlı SMS ve push bildirim akışları',
      'Geri kazanım (Win-back) otomatik mesajları',
      'Deneme dersi sonrası hızlı takip kurgusu',
      'Kampanya ve özel indirim kodu yönetimi'
    ],
    mockupData: {
      badge: 'Otomatik Pazarlama Akışları',
      metrics: [
        { label: 'Win-back Dönüşü', value: '%34', trend: 'Son 30 gün' },
        { label: 'Deneme Seansı Satışı', value: '%68', trend: 'Dönüşüm' },
        { label: 'Aktif Akışlar', value: '6 Akış', trend: '7/24 Çalışıyor' }
      ],
      listTitle: 'Aktif Otomasyon Performansı',
      listItems: [
        { primary: '14 Gündür Gelmeyen Üye Hatırlatması', secondary: '42 Kişiye Gönderildi • 14 Kişi Ders Rezerve Etti', tag: '%33 Dönüşüm', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: 'Deneme Seansı Sonrası Paket Teklifi', secondary: 'Anında Push + SMS • 18 Yeni Satış', tag: '%60 Satış', tagColor: 'bg-mint-light text-teal-800' },
        { primary: 'Doğum Günü Hediye Dersi Bildirimi', secondary: 'Otomatik Kupon Kodu Gönderimi', tag: 'Aktif', tagColor: 'bg-zinc-100 text-zinc-800' }
      ]
    }
  },
  {
    id: 'team',
    label: 'Ekip Yönetimi',
    title: 'Eğitmen ve personel takvimlerini entegre edin',
    description: 'Eğitmenlerinizin ders yükünü, ders başı hakedişlerini, ikame taleplerini ve bireysel randevu takvimlerini eksiksiz koordine edin.',
    bullets: [
      'Eğitmen hakediş ve prim hesaplama',
      'Personel izin ve ikame ders takibi',
      'Eğitmen bazlı üye memnuniyet oranları',
      'Rol bazlı yetkilendirme ve erişim sınırları'
    ],
    mockupData: {
      badge: 'Eğitmen & Kadro Yönetimi',
      metrics: [
        { label: 'Aktif Eğitmen', value: '12 Kişi', trend: 'Bu ay' },
        { label: 'Hakediş Toplamı', value: '₺64.800', trend: 'Hesaplandı' },
        { label: 'Ortalama Puan', value: '4.95 / 5.0', trend: 'Üye Yorumları' }
      ],
      listTitle: 'Eğitmen Ders Yükü & Takvimi',
      listItems: [
        { primary: 'Zeynep Kaya — Kıdemli Reformer Eğitmeni', secondary: 'Bu hafta: 18 Ders • Doluluk %96', tag: 'Mükemmel', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: 'Melis Arslan — Vinyasa Yoga Eğitmeni', secondary: 'Bu hafta: 14 Ders • Doluluk %91', tag: 'Tam Kapasite', tagColor: 'bg-mint-light text-teal-800' },
        { primary: 'Burak Serin — Core & Functional Trainer', secondary: 'Bu hafta: 22 Ders (PT + Grup)', tag: 'Aktif', tagColor: 'bg-zinc-100 text-zinc-800' }
      ]
    }
  },
  {
    id: 'scheduling',
    label: 'Ders Planlama',
    title: 'Esnek haftalık ve periyodik ders programı',
    description: 'Stüdyo salonlarınızın kapasitelerini, stüdyo ekipman sayılarını ve eğitmen uygunluğunu çakışma riski olmadan planlayın.',
    bullets: [
      'Çoklu stüdyo oda ve ekipman planlaması',
      'Tekrarlayan haftalık ders şablonları',
      'Serbest randevu ve özel ders slotları',
      'Anlık eğitmen veya salon değişiklik duyuruları'
    ],
    mockupData: {
      badge: 'Stüdyo & Salon Çakışma Önleme',
      metrics: [
        { label: 'Haftalık Ders', value: '84 Seans', trend: '3 Studio Oda' },
        { label: 'Salon Kullanımı', value: '%88', trend: 'Optimum' },
        { label: 'İptal / Değişiklik', value: '0 Çakışma', trend: 'Güvenli' }
      ],
      listTitle: 'Oda Kullanım Durumu (Stüdyo A & B)',
      listItems: [
        { primary: 'Stüdyo A (Reformer) — 6/6 Alet Dolu', secondary: '10:00 - 11:00 • Zeynep Kaya', tag: 'Dolu', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: 'Stüdyo B (Yoga Mat) — 12/15 Mat', secondary: '11:30 - 12:30 • Melis Arslan', tag: 'Ders Başladı', tagColor: 'bg-mint-light text-teal-800' },
        { primary: 'Özel PT Alanı — Birebir Reformer', secondary: '13:00 - 14:00 • Serdar N.', tag: 'Rezerve', tagColor: 'bg-zinc-100 text-zinc-800' }
      ]
    }
  },
  {
    id: 'reporting',
    label: 'Raporlama',
    title: 'İşletmenizin röntgenini anında çekin',
    description: 'Gelirler, no-show oranları, en popüler ders saatleri ve üye elde tutma (retention) verilerini karmaşık tablolar olmadan net görün.',
    bullets: [
      'Aylık, haftalık ve günlük gelir grafikleri',
      'Üye elde tutma (Retention) ve terk (Churn) analizleri',
      'En çok kazandıran ders türleri ve saat dilimleri',
      'Excel / PDF export ve otomatik yönetici özeti'
    ],
    mockupData: {
      badge: 'Stüdyo Yönetim Dashboard',
      metrics: [
        { label: 'Üye Retention Rate', value: '%89.4', trend: '+4.1% artış' },
        { label: 'Ortalama Üye Ömrü', value: '11.2 Ay', trend: 'Sektör üstü' },
        { label: 'No-Show Oranı', value: '%2.1', trend: '-%1.8 düşüş' }
      ],
      listTitle: 'En Çok Tercih Edilen Dersler',
      listItems: [
        { primary: '1. Reformer Flow Pilates (Hafta İçi Akşam)', secondary: 'Ort. Doluluk %98 • Aylık Gelir Katkısı %34', tag: '#1 Popüler', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: '2. Vinyasa Flow Yoga (Hafta Sonu Sabah)', secondary: 'Ort. Doluluk %92 • Aylık Gelir Katkısı %22', tag: '#2 Popüler', tagColor: 'bg-mint-light text-teal-800' },
        { primary: '3. Birebir Personal Training (Hafta İçi)', secondary: 'Ort. Doluluk %90 • Aylık Gelir Katkısı %28', tag: '#3 Popüler', tagColor: 'bg-zinc-100 text-zinc-800' }
      ]
    }
  },
  {
    id: 'branded_app',
    label: 'Branded App',
    title: 'Stüdyonuza özel markalı mobil uygulama',
    description: 'Üyelerinizin App Store ve Google Play üzerinden stüdyonuzun logosu ve renkleriyle ders rezerve etmesini sağlayın.',
    bullets: [
      'Kendi logonuz ve stüdyo renklerinizle mobil deneyim',
      'Anlık ders değişimi ve duyuru push bildirimleri',
      'Üyelerin kalan kredi, geçmiş ders ve not takibi',
      'Arkadaşını davet et & hediye ders kazan kurguları'
    ],
    mockupData: {
      badge: 'iOS & Android Stüdyo Uygulaması',
      metrics: [
        { label: 'Uygulama İndirme', value: '1.420', trend: 'Aktif üyeler' },
        { label: 'App Üzerinden Rezervasyon', value: '%91', trend: 'Toplamın' },
        { label: 'Push Açılma Oranı', value: '%78', trend: 'Yüksek Etkileşim' }
      ],
      listTitle: 'Mobil Üye Bildirim Simülasyonu',
      listItems: [
        { primary: 'Ders Hatırlatması', secondary: 'Bugün 17:30 Reformer dersinize 2 saat kaldı!', tag: 'Gönderildi', tagColor: 'bg-emerald-100 text-emerald-800' },
        { primary: 'Bekleme Listesi Onayı', secondary: 'Sıradaki ders için yer açıldı, rezervasyonunuz onaylandı!', tag: 'Anında Push', tagColor: 'bg-mint-light text-teal-800' },
        { primary: 'Paket Yenileme Hatırlatması', secondary: 'Paketinizde 1 ders kaldı. Uygulamadan yenileyin.', tag: 'Otomatik', tagColor: 'bg-zinc-100 text-zinc-800' }
      ]
    }
  }
];

export const STUDIO_TYPES: StudioTypeInfo[] = [
  {
    id: 'fitness',
    title: 'Fitness Stüdyoları',
    description: 'Üyelikleri, paketleri, check-in süreçlerini ve antrenör takvimlerini yönet.',
    iconName: 'Activity',
    badge: 'Kapasite & Paket'
  },
  {
    id: 'yoga',
    title: 'Yoga Stüdyoları',
    description: 'Dersleri doldur, bekleme listelerini yönet ve öğrencilerini geri getir.',
    iconName: 'CircleDot',
    badge: 'Topluluk & Akış'
  },
  {
    id: 'pilates',
    title: 'Pilates & Reformer Stüdyoları',
    description: 'Kapasiteyi, paket kredilerini ve eğitmen uygunluğunu kolayca takip et.',
    iconName: 'Layers',
    badge: 'Aletli & Birebir'
  },
  {
    id: 'personal_training',
    title: 'Personal Training',
    description: 'Randevuları, danışan gelişimini, paketleri ve tekrar eden ödemeleri yönet.',
    iconName: 'UserCheck',
    badge: 'Randevu & Ölçüm'
  },
  {
    id: 'boutique_gym',
    title: 'Butik Gym’ler',
    description: 'Satış, rezervasyon, üyelik ve raporlamayı tek panelde birleştir.',
    iconName: 'Building2',
    badge: 'Bütünleşik Satış'
  },
  {
    id: 'wellness',
    title: 'Wellness İşletmeleri',
    description: 'Danışan, hizmet, ekip ve ödeme süreçlerini sakin ve sade şekilde yönet.',
    iconName: 'HeartHandshake',
    badge: 'Hizmet & Danışan'
  }
];

export const CORE_FEATURES: CoreFeatureItem[] = [
  {
    title: 'Üye Yönetimi',
    description: 'Her üye profilini, paketini, notunu ve aktivitesini tek yerde tut.',
    iconName: 'Users'
  },
  {
    title: 'Üyelik & Paketler',
    description: 'Aktif planları, biten paketleri, kalan kredileri ve yenilemeleri takip et.',
    iconName: 'CreditCard'
  },
  {
    title: 'Ödemeler',
    description: 'Satışları, ödeme planlarını, başarısız ödemeleri ve gelir raporlarını yönet.',
    iconName: 'Banknote'
  },
  {
    title: 'Pazarlama',
    description: 'Kampanyaları, hatırlatmaları ve geri kazanım mesajlarını manuel takip olmadan gönder.',
    iconName: 'Send'
  },
  {
    title: 'Ekip Yönetimi',
    description: 'Eğitmenleri ata, takvimleri yönet ve ekip performansını takip et.',
    iconName: 'Calendar'
  },
  {
    title: 'Raporlama',
    description: 'Rezervasyon, gelir, retention, no-show ve büyüme trendlerini net gör.',
    iconName: 'BarChart3'
  }
];

export const AUTOMATION_STEPS: AutomationStep[] = [
  {
    trigger: 'Yeni lead geldi',
    action: 'Deneme seansı daveti',
    iconName: 'UserPlus',
    time: 'Anında'
  },
  {
    trigger: 'Ders rezerve edildi',
    action: 'Otomatik hatırlatma',
    iconName: 'Bell',
    time: '2 saat önce'
  },
  {
    trigger: 'Paket bitiyor',
    action: 'Yenileme teklifi',
    iconName: 'RefreshCw',
    time: 'Son 2 ders'
  },
  {
    trigger: '14 gündür gelmeyen üye',
    action: 'Geri kazanım mesajı',
    iconName: 'HeartPulse',
    time: '14. Gün'
  },
  {
    trigger: 'Ödeme başarısız',
    action: 'Personele görev oluştur',
    iconName: 'AlertCircle',
    time: 'Anlık'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    name: 'Start',
    tagline: 'Düzenli çalışmaya başlayan küçük stüdyolar için.',
    ctaText: 'Başla',
    features: [
      '1 Stüdyo & 1 Salon',
      'Online Ders & Randevu Rezervasyonu',
      '100 Aktif Üye Kapasitesi',
      'Eğitmen & Takvim Yönetimi',
      'Temel Satış & Paket Takibi',
      'E-posta Destek'
    ]
  },
  {
    id: 'grow',
    name: 'Grow',
    tagline: 'Rezervasyon, ödeme ve retention süreçlerini otomatikleştirmek isteyen ekipler için.',
    recommended: true,
    ctaText: 'Demo Al',
    features: [
      'Sınırsız Salon & Eğitmen',
      'Otomatik SMS & WhatsApp Hatırlatmaları',
      'Geri Kazanım (Win-back) Otomasyonları',
      'Gelişmiş Raporlama & Gelir Analizi',
      'Tekrarlayan Kart Tahsilatları',
      'Öncelikli Canlı Destek & Onboarding'
    ]
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'Çok şubeli veya yüksek hacimli stüdyolar için.',
    ctaText: 'Satış Ekibiyle Görüş',
    features: [
      'Çok Şubeli Stüdyo Yönetimi',
      'Markanıza Özel iOS & Android App (Branded)',
      'Özel Muhasebe & ERP Entegrasyonu',
      'Özel Müşteri Temsilcisi (SLA)',
      'Veri Taşıma & Özel Eğitim',
      'Özel API ve Webhook Erişimi'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Rezervasyon, paket ve ödemeleri sonunda tek yerden yönetiyoruz. Ekip artık detayların peşinden koşmak yerine üyelerle ilgileniyor.',
    author: 'Zeynep Alkan',
    role: 'Studio Owner',
    studioName: 'Serene Reformer Pilates',
    location: 'İstanbul, Nişantaşı',
    metrics: 'Doluluk Oranı %94’e yükseldi'
  },
  {
    quote: 'Deneme dersleri sonrası takip ve paket yenileme süreçleri çok daha kolay hale geldi.',
    author: 'Can Mert',
    role: 'Pilates Studio Manager',
    studioName: 'Flow Studio',
    location: 'İzmir, Alsancak',
    metrics: 'Yenileme Oranı %88’e ulaştı'
  },
  {
    quote: 'Dashboard, işletmede ne olup bittiğini ilk kez bu kadar net görmemizi sağladı.',
    author: 'Selin Yılmaz',
    role: 'Fitness Operations Lead',
    studioName: 'Zenith Athletic Club',
    location: 'Ankara, Çankaya',
    metrics: 'Haftalık 12 saat tasarruf'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Butik Stüdyolarda Üye Retention Oranını %85 Üzerine Çıkarmanın 5 Yolu',
    slug: 'studyo-uye-retention-oranini-artirma-rehberi',
    excerpt: 'Yeni üye kazanmak kıymetlidir ancak var olan üyeyi elde tutmak 5 kat daha düşük maliyetlidir. Otomatik takip ve doğru iletişim stratejileriyle üyelerinizi nasıl sadık kılabilirsiniz?',
    content: [
      'Fitness, yoga ve pilates stüdyolarında sürdürülebilir büyümenin gizli anahtarı retention (elde tutma) oranında saklıdır. Çoğu stüdyo sahibi tüm bütçesini yeni üye edinmeye harcar, ancak arka kapıdan çıkan üyeleri fark etmez.',
      '1. İlk 14 Gün Kritik Deneyimdir: Yeni başlayan bir üyenin ilk 2 haftadaki ders katılımı, 6 aylık bağlılığını doğrudan belirler. İlk ders sonrası otomatik teşekkür ve kişiselleştirilmiş rehber mesajları gönderin.',
      '2. Devamsızlık Alarmı Kurun: 10-14 gündür ders rezerve etmeyen üyeleri manuel takip etmek zordur. fitbase otomatik otomasyonları ile 14. günde üyenin telefonuna "Seni özledik! Bu hafta sana özel bir ders ayırdık" mesajı düşürebilirsiniz.',
      '3. Şeffaf Paket ve Kredi Hatırlatmaları: Paketi bitmek üzere olan üyeye ders çıkışında sürpriz yaşatmak yerine, son 2 ders kaldığında nazik bir yenileme teklifi sunun.',
      '4. Eğitmen-Üye Bağını Güçlendirin: Üyeler işletmeye değil, orada hissettikleri topluluk duygusuna sadık kalır. Eğitmenlerinizin üye gelişim notlarını tutabilmesini sağlayın.'
    ],
    category: 'Retention',
    readTime: '4 dk okuma',
    date: '18 Temmuz 2026',
    author: {
      name: 'Ece Karaca',
      role: 'Stüdyo Büyüme Uzmanı',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    imageBg: 'from-emerald-50 to-teal-100',
    featured: true
  },
  {
    id: '2',
    title: 'Reformer Pilates Stüdyolarında Dersi ve Alet Kapasitesini %100 Verimle Yönetmek',
    slug: 'reformer-pilates-kapasite-ve-alet-yonetimi',
    excerpt: 'Aletli pilates stüdyolarında sınırlı reformer sayısı gelirinizin tavanını belirler. İptal politikaları ve otomatik bekleme listesiyle boş alet kalmasını engelleyin.',
    content: [
      'Reformer pilates stüdyolarının en büyük zorluğu, saatlik alet kapasitesinin sınırlı olmasıdır. Tek bir boş reformer masası, gün sonunda doğrudan kayıp gelir demektir.',
      'İptal Süresini Netleştirin: Ders başlamadan 6-12 saat önce yapılan iptallerde kredinin iade edilmeyeceğini sözleşmede ve mobil uygulamada açıkça belirtin.',
      'Otomatik Bekleme Listesi (Waitlist): İptal gerçekleştiği an sistem sıradaki 1. kişiye anında push bildirim göndermeli ve 15 dakika içinde onay alamazsa bir sonrakine geçmelidir.',
      'Alet Bakımı ve Periyodik Kontrol: Ekipman arızası nedeniyle iptal edilen dersler üye memnuniyetini sarsar. fitbase ekipman takip modülü ile reformer bakımlarını takvime işleyin.'
    ],
    category: 'Stüdyo Yönetimi',
    readTime: '5 dk okuma',
    date: '10 Temmuz 2026',
    author: {
      name: 'Deniz Soyer',
      role: 'SaaS & Stüdyo Mimarı',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    imageBg: 'from-teal-50 to-emerald-100'
  },
  {
    id: '3',
    title: '2026’da Stüdyonuz İçin Doğru Fiyatlandırma ve Paket Modeli Nasıl Kurulur?',
    slug: '2026-studyo-fiyatlandirma-ve-paket-modelleri',
    excerpt: 'Tek ders mi, 10\'lu paket mi, yoksa otomatik tekrarlayan aylık üyelik mi? Stüdyonuzun nakit akışını sağlama alacak fiyatlandırma stratejilerini derledik.',
    content: [
      'Fiyatlandırma sadece maliyetleri karşılamakla kalmaz, stüdyonuzun marka algısını da şekillendirir. Yanlış yapılandırılmış paketler nakit akışı dalgalanmalarına yol açar.',
      'Tekrarlayan Kart Tahsilatı (Recurring Subscriptions): Nakit akışınızı tahmin edilebilir kılmak için aylık otomatik çekim modellerine öncelik verin.',
      'Paket Kullanım Süresi (Expiry Date): Satılan 10\'lu paketlerin son kullanma tarihini 60 gün ile sınırlandırın. Süresiz paketler stüdyonun borç yükünü artırır.',
      'Deneme Seansı Stratejisi: Ücretsiz deneme dersi yerine sembolik veya indirimli bir deneme paketi sunun. Bu, sadece ciddi adayların stüdyonuza gelmesini sağlar.'
    ],
    category: 'Finans',
    readTime: '6 dk okuma',
    date: '28 Haziran 2026',
    author: {
      name: 'Mert Aksoy',
      role: 'Finansal Analist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    imageBg: 'from-amber-50 to-emerald-100'
  },
  {
    id: '4',
    title: 'Instagram ve Google’dan Gelen Lead’leri Deneme Dersi Müşterisine Dönüştürme',
    slug: 'sosyal-medya-lead-deneme-dersi-donusumu',
    excerpt: 'Reklam veya DM üzerinden soru soran potansiyel üyelerin %70\'i ilk 1 saat içinde yanıt almazsa başka bir stüdyoya kayıyor. Hızlı dönüşüm rehberi.',
    content: [
      'Dijital reklam vermek kolaydır, zor olan gelen mesajları ve formları kayıtlı üyeye dönüştürmektir.',
      'Anında Otomatik Mesaj / SMS: Biri sosyal medya veya web sitenizden form doldurduğunda 2 dakika içinde WhatsApp veya SMS ile otomatik karşılama ve ders takvimi linki gönderin.',
      'Sade Online Kayıt Sayfası: Karmaşık formlar yerine 3 adımda deneme seansı rezerve edilebilen mobil uyumlu sayfalar kullanın.',
      'Takip Etmeyen Satışı Kaybeder: Deneme dersine katılan ama paket almayan adaya 48 saat sonra "İlk dersiniz nasıldı? Size özel %10 karşılama indirimi" mesajı gönderin.'
    ],
    category: 'Pazarlama',
    readTime: '3 dk okuma',
    date: '14 Haziran 2026',
    author: {
      name: 'Ece Karaca',
      role: 'Stüdyo Büyüme Uzmanı',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    imageBg: 'from-emerald-50 to-teal-100'
  }
];

