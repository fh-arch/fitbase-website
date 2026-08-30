export type MarketingPage = {
  slug: string;
  kind: "feature" | "solution";
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  problems: string[];
  capabilities: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const featurePages: MarketingPage[] = [
  {
    slug: "sosyal-medya-crm",
    kind: "feature",
    title: "WhatsApp, Instagram ve Messenger Entegrasyonlu CRM",
    eyebrow: "Sosyal mesajlaşmadan satış fırsatına",
    description: "WhatsApp Business, Instagram DM ve Facebook Messenger konuşmalarını tek gelen kutusunda yönetin; her yeni yazışmayı takip edilebilir potansiyel müşteri adayına dönüştürün.",
    intro: "Fitbase sosyal medya CRM entegrasyonu, farklı mesaj kutularına dağılan satış görüşmelerini merkezi bir ekip akışında toplar. Yeni bir yazışma CRM adayı olarak kaydedilebilir; görüşme geçmişi, sorumlu kişi, satış aşaması ve takip görevi aynı kayıtta ilerler.",
    problems: ["Üç farklı gelen kutusunda kaybolan talepler", "Yanıtsız veya geç yanıtlanan deneme dersi soruları", "Sosyal medya görüşmelerinin CRM ve satış sürecine aktarılamaması"],
    capabilities: [
      { title: "Birleşik gelen kutusu", description: "WhatsApp Business, Instagram DM ve Facebook Messenger yazışmalarını tek ekip görünümünde takip edin." },
      { title: "Otomatik aday kaydı", description: "Sosyal kanaldan yazan kişiyi iletişim kaynağıyla birlikte potansiyel müşteri adayına dönüştürün." },
      { title: "Satış ve takip akışı", description: "Görüşmeyi sorumlu kişiye atayın, satış aşamasını belirleyin ve sıradaki geri dönüşü planlayın." },
    ],
    faq: [
      { question: "Fitbase hangi sosyal mesajlaşma kanallarıyla entegre çalışır?", answer: "Fitbase; WhatsApp Business, Instagram DM ve Facebook Messenger yazışmalarını merkezi CRM ve gelen kutusu akışına bağlar." },
      { question: "Instagram veya WhatsApp’tan yazan kişi nasıl müşteri adayına dönüşür?", answer: "Yeni konuşma, geldiği kanal bilgisiyle CRM’de potansiyel müşteri adayı olarak kaydedilebilir. Ekip görüşme geçmişini görür, sorumlu atar, satış aşamasını günceller ve takip görevi planlar." },
      { question: "Birden fazla ekip üyesi sosyal medya mesajlarını yönetebilir mi?", answer: "Birleşik gelen kutusu yaklaşımı görüşmelerin ekip tarafından ortak görünmesini, sorumlu kişiye atanmasını ve takibin kişisel mesaj kutularına bağlı kalmamasını sağlar." },
    ],
  },
  {
    slug: "fitness-crm",
    kind: "feature",
    title: "Fitness CRM ve Üye Takibi",
    eyebrow: "Üye ilişkileri",
    description: "Spor işletmeleri için sosyal medyadan gelen adayları, aktif üyeleri, görüşmeleri ve takip süreçlerini tek yerde yönetin.",
    intro: "Fitbase Fitness CRM; WhatsApp Business, Instagram DM ve Facebook Messenger üzerinden başlayan bir konuşmadan aktif üyeliğe uzanan süreci ekip için görünür ve takip edilebilir hâle getirir.",
    problems: ["Dağınık üye ve aday kayıtları", "Unutulan geri dönüşler", "Ekip içinde görünmeyen görüşme geçmişi"],
    capabilities: [
      { title: "Sosyal kanaldan CRM profiline", description: "Mesajlaşma kanalından gelen konuşmayı iletişim kaynağı ve geçmişiyle birlikte aday profiline dönüştürün." },
      { title: "Takip akışı", description: "Aday üyeleri aşamalarına göre sınıflandırın ve sıradaki görüşmeyi planlayın." },
      { title: "Rol bazlı çalışma", description: "Ekip üyelerinin ihtiyaç duyduğu bilgilere kontrollü biçimde erişmesini sağlayın." },
    ],
    faq: [
      { question: "Fitness CRM nedir?", answer: "Fitness CRM; spor işletmelerinin üye adaylarını, aktif üyelerini, iletişim geçmişini ve takip görevlerini düzenlemek için kullandığı müşteri ilişkileri yönetimi yapısıdır." },
      { question: "Fitbase yalnızca fitness salonları için mi?", answer: "Hayır. Fitbase; fitness, pilates, yoga, dans ve jimnastik işletmeleri, padel kulüpleri, personal trainer ekipleri ve spor kurslarına yöneliktir." },
    ],
  },
  {
    slug: "rezervasyon",
    kind: "feature",
    title: "Ders ve Seans Rezervasyon Yönetimi",
    eyebrow: "Takvim ve kapasite",
    description: "Grup dersi ve birebir seans takvimlerini, kontenjanları ve katılımcı listelerini tek merkezden yönetin.",
    intro: "Rezervasyon yönetimi; ders programı, eğitmen uygunluğu ve üye katılımını aynı operasyon akışında bir araya getirir.",
    problems: ["Mesajlarla yürüyen rezervasyonlar", "Çakışan ders ve eğitmen saatleri", "Güncel olmayan katılımcı listeleri"],
    capabilities: [
      { title: "Merkezi takvim", description: "Dersleri, seansları ve kapasite bilgisini ortak bir takvimde görüntüleyin." },
      { title: "Kontenjan takibi", description: "Her ders için kapasiteyi ve kayıt durumunu operasyon ekibiyle paylaşın." },
      { title: "Katılım görünürlüğü", description: "Planlanan rezervasyonları ve katılım kayıtlarını düzenli biçimde izleyin." },
    ],
    faq: [
      { question: "Stüdyo rezervasyon yazılımı ne işe yarar?", answer: "Ders ve seans programını, kontenjanı, eğitmeni ve katılımcı listesini tek yerde tutarak manuel takvim yönetimini azaltır." },
      { question: "Grup dersi ve birebir seanslar birlikte yönetilebilir mi?", answer: "Fitbase’in hedeflediği yapı her iki operasyon tipini aynı takvim yaklaşımıyla yönetmektir; işletmenize özel kapsam demo sırasında doğrulanır." },
    ],
  },
  {
    slug: "uyelik-paket-yonetimi",
    kind: "feature",
    title: "Üyelik ve Paket Yönetimi",
    eyebrow: "Hak ve süre takibi",
    description: "Üyelik dönemlerini, seans paketlerini ve kullanım haklarını daha düzenli takip edin.",
    intro: "Paket yönetimi; üyelerin sahip olduğu süre ve kullanım haklarını operasyon ekibinin anlayabileceği tek bir kayıt düzeninde toplar.",
    problems: ["Excel dosyalarına dağılmış paketler", "Kalan hak konusunda belirsizlik", "Süresi yaklaşan üyeliklerin gözden kaçması"],
    capabilities: [
      { title: "Paket tanımları", description: "İşletmenizdeki üyelik ve seans modellerini düzenli biçimde tanımlayın." },
      { title: "Kullanım kaydı", description: "Paket hakkı ile ders veya seans kullanımını ilişkilendirin." },
      { title: "Durum görünümü", description: "Aktif, yaklaşan ve tamamlanan üyelik kayıtlarını ekip için görünür kılın." },
    ],
    faq: [
      { question: "Üyelik paket yönetimi nedir?", answer: "Üyenin satın aldığı süre veya seans hakkının tanımlanması, kullanımlarının izlenmesi ve güncel durumunun görüntülenmesidir." },
      { question: "Farklı paket türleri tanımlanabilir mi?", answer: "İşletmenin paket yapısı kurulum görüşmesinde değerlendirilir; desteklenen tanım ve kurallar demo sırasında netleştirilir." },
    ],
  },
  {
    slug: "odeme-takibi",
    kind: "feature",
    title: "Stüdyo Ödeme Takibi",
    eyebrow: "Finansal operasyon",
    description: "Tahsilat kayıtlarını üyelik ve paket bilgileriyle birlikte izleyerek operasyon görünürlüğü kazanın.",
    intro: "Fitbase ödeme alanı, ödeme alma hizmetinden farklı olarak işletmenin tahsilat kayıtlarını ve üyelik ilişkisini düzenlemeye odaklanır.",
    problems: ["Ödeme ve üyelik kayıtlarının ayrışması", "Vadesi belirsiz tahsilatlar", "Manuel kontrol yükü"],
    capabilities: [
      { title: "Tahsilat kaydı", description: "Ödeme durumunu ilgili üye ve paketle birlikte kaydedin." },
      { title: "Durum takibi", description: "Tamamlanan ve takip gerektiren kayıtları ayırt edin." },
      { title: "Operasyon özeti", description: "Günlük finansal operasyonu sade bir görünümle takip edin." },
    ],
    faq: [
      { question: "Fitbase doğrudan ödeme alır mı?", answer: "Fitbase’in kamuya açık mevcut kapsamı ödeme kayıtlarını yönetmeye odaklanır; ödeme kuruluşu entegrasyonları varsa demo sırasında ayrıca doğrulanmalıdır." },
      { question: "Ödeme takibi üyelikle ilişkilendirilebilir mi?", answer: "Amaç, tahsilat kaydını ilgili üye ve paket bağlamında görünür kılmaktır." },
    ],
  },
  {
    slug: "otomasyonlar",
    kind: "feature",
    title: "Fitness İşletmesi İş Akışları",
    eyebrow: "Daha az manuel iş",
    description: "Tekrarlayan takip adımlarını standartlaştırın; ekibin ne zaman, kime ve neden ulaşacağını netleştirin.",
    intro: "Fitbase iş akışları, operasyonun kişisel hafızaya bağlı kalmaması için görev ve takip düzeni kurmaya yardımcı olur.",
    problems: ["Kişiye bağlı takip süreçleri", "Atlanan operasyon adımları", "Standartlaşmayan ekip uygulamaları"],
    capabilities: [
      { title: "Takip kuralları", description: "Sık tekrar eden operasyon adımlarını ortak bir düzene bağlayın." },
      { title: "Görev görünürlüğü", description: "Sıradaki işi ve sorumlu kişiyi ekip içinde görünür kılın." },
      { title: "Süreç standardı", description: "Şube veya ekip büyüdükçe tutarlı çalışma yaklaşımını koruyun." },
    ],
    faq: [
      { question: "Fitbase otomatik WhatsApp veya SMS gönderir mi?", answer: "Mesaj kanalları ve otomasyon kapsamı plana ve kuruluma göre değişebilir; mevcut desteklenen kanallar demo sırasında yazılı olarak doğrulanmalıdır." },
      { question: "İş akışı neden önemlidir?", answer: "Görevlerin kişisel hafızada kalmasını önler, ekip içi sorumlulukları görünür kılar ve tekrarlanan işi standartlaştırır." },
    ],
  },
  {
    slug: "raporlama",
    kind: "feature",
    title: "Fitness ve Stüdyo Raporlama",
    eyebrow: "Operasyon görünürlüğü",
    description: "Rezervasyon, üyelik ve tahsilat kayıtlarını karar vermeyi kolaylaştıran sade görünümlerde inceleyin.",
    intro: "Raporlama yaklaşımı, farklı operasyon kayıtlarını tek yerde değerlendirerek işletmenin güncel durumunu anlamayı kolaylaştırır.",
    problems: ["Birbiriyle uyuşmayan tablolar", "Geciken yönetim raporları", "Karar için eksik operasyon bağlamı"],
    capabilities: [
      { title: "Temel göstergeler", description: "Rezervasyon, üyelik ve tahsilat kayıtlarını birlikte değerlendirin." },
      { title: "Dönem karşılaştırması", description: "Seçilen dönemlerdeki operasyon değişimini daha düzenli takip edin." },
      { title: "Ekip görünümü", description: "Yöneticinin ihtiyaç duyduğu özetleri ortak bir panelde sunun." },
    ],
    faq: [
      { question: "Fitbase hangi raporları sunar?", answer: "Kamuya açık ürün anlatımı rezervasyon, üyelik ve tahsilat görünürlüğüne odaklanır; rapor alanlarının güncel listesi demo sırasında doğrulanır." },
      { question: "Raporlardaki örnek sayılar gerçek müşteri verisi mi?", answer: "Hayır. Web sitesindeki arayüz görselleri ve sayılar yalnızca temsili ürün anlatımıdır; gerçek müşteri sonucu olarak değerlendirilmemelidir." },
    ],
  },
];

export const solutionPages: MarketingPage[] = [
  ["pilates-studyo-yonetimi", "Pilates Stüdyo Yönetim Programı", "Pilates stüdyoları", "Birebir ve grup seanslarını, paket haklarını, eğitmen takvimini ve üye takibini daha düzenli yönetin."],
  ["fitness-salonu-yonetimi", "Fitness Salonu Yönetim Programı", "Fitness salonları", "Üye adaylarını, aktif üyelikleri, tahsilat kayıtlarını ve ekip görevlerini tek operasyon görünümünde birleştirin."],
  ["yoga-studyo-yonetimi", "Yoga Stüdyo Yönetim Programı", "Yoga stüdyoları", "Ders programını, kontenjanları, üyelik paketlerini ve katılımcı takibini sade bir merkezden yönetin."],
  ["personal-trainer", "Personal Trainer Yönetim Programı", "Kişisel antrenörler", "Danışan, birebir seans, paket hakkı ve ödeme kayıtlarını dağınık araçlar yerine tek düzende takip edin."],
  ["dans-studyosu-yonetimi", "Dans Stüdyosu Yönetim Programı", "Dans stüdyoları", "Sosyal medyadan gelen kurs taleplerini CRM adayına dönüştürün; sınıf, eğitmen, kayıt, paket ve tahsilat süreçlerini yönetin."],
  ["jimnastik-salonu-yonetimi", "Jimnastik Salonu Yönetim Programı", "Jimnastik salonları", "Çocuk ve yetişkin programları için aday veli iletişimini, öğrenci kayıtlarını, grup takvimini ve paketleri tek düzende yönetin."],
  ["padel-kulubu-yonetimi", "Padel Kulübü Yönetim Programı", "Padel kulüpleri", "WhatsApp ve sosyal medyadan gelen kort, ders ve üyelik taleplerini CRM, rezervasyon ve takip akışına bağlayın."],
  ["spor-kursu-yonetimi", "Spor Kursu Yönetim Programı", "Spor kursları", "Farklı branşlardaki kurs taleplerini, öğrenci ve veli iletişimini, dönem kayıtlarını, dersleri ve tahsilatları merkezi yönetin."],
].map(([slug, title, eyebrow, description]) => ({
  slug,
  kind: "solution" as const,
  title,
  eyebrow,
  description,
  intro: `${title}, günlük operasyonun üye deneyimi ve ekip takibiyle birlikte yürütülmesine yardımcı olan bir yazılım yaklaşımıdır.`,
  problems: ["WhatsApp ve sosyal medya mesajlarında kaybolan adaylar", "Takvim ve paket bilgisinin güncel kalmaması", "Ekip için ortak satış ve operasyon görünümünün eksikliği"],
  capabilities: [
    { title: "Sosyal mesajdan müşteri adayına", description: "WhatsApp Business, Instagram DM ve Messenger konuşmalarını CRM adayına ve takip akışına dönüştürün." },
    { title: "Ders ve seans planlama", description: "Takvim, kapasite ve katılımcı bilgisini operasyonun merkezine alın." },
    { title: "Paket ve tahsilat görünümü", description: "Üyelik hakkı ile ödeme kayıtlarını ilişkili biçimde izleyin." },
  ],
  faq: [
    { question: `${title} kimler için uygundur?`, answer: `${eyebrow} için üye, rezervasyon, paket ve operasyon kayıtlarını tek bir sistemde düzenlemek isteyen işletmelere yöneliktir.` },
    { question: "Kurulumdan önce hangi bilgiler değerlendirilir?", answer: "İşletme türü, ekip yapısı, ders ve paket modelleri ile mevcut veri kaynakları demo görüşmesinde değerlendirilir; kesin kapsam bundan sonra paylaşılır." },
    { question: "Sosyal medyadan gelen talepler Fitbase’e aktarılır mı?", answer: "Evet. WhatsApp Business, Instagram DM ve Facebook Messenger üzerinden başlayan yazışmalar birleşik gelen kutusunda yönetilebilir ve CRM’de potansiyel müşteri adayı olarak takip edilebilir." },
  ],
}));

export const allMarketingPages = [...featurePages, ...solutionPages];
