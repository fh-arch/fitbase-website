import type { Metadata } from "next";
import { LegalPage } from "../../src/components/LegalPage";
import { legalEntity } from "../../src/legalEntity";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Fitbase hizmetinin kullanım koşulları, sorumluluklar ve hesap kapatma.",
  alternates: { canonical: "/kosullar" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const entity = legalEntity;

  return (
    <LegalPage title="Kullanım Koşulları" updated="7 Ağustos 2026">
      <h1>Kullanım Koşulları</h1>
      <p className="lede">
        Bu koşullar, {entity.legalName} tarafından sunulan Fitbase hizmetinin kullanımını düzenler.
        Hizmeti kullanarak bu koşulları kabul etmiş olursunuz.
      </p>

      <h2>1. Hizmet</h2>
      <p>
        Fitbase; spor ve sağlıklı yaşam stüdyolarının üyelerini, paketlerini, ders programlarını,
        ödemelerini ve müşteri iletişimini tek yerden yönetmesini sağlayan bir yazılım hizmetidir.
      </p>

      <h2>2. Hesap ve sorumluluk</h2>
      <ul>
        <li>Hesap açan kişi, stüdyo adına sözleşme kurmaya yetkili olduğunu beyan eder.</li>
        <li>Giriş bilgilerinin gizliliğinden kullanıcı sorumludur.</li>
        <li>
          Stüdyo, sisteme girdiği üye verilerinin hukuka uygun şekilde toplandığından ve
          işlendiğinden kendisi sorumludur. Bu veriler bakımından veri sorumlusu stüdyodur.
        </li>
        <li>
          Bir üyenin telefon numarası veya e-posta adresi, yalnızca o üyenin stüdyoyla olan ilişkisi
          kapsamında kullanılabilir.
        </li>
      </ul>

      <h2>3. Kabul edilmeyen kullanım</h2>
      <ul>
        <li>İzinsiz toplu mesaj gönderimi ve istenmeyen ticari ileti.</li>
        <li>
          Bağlanan mesajlaşma hesaplarında sağlayıcının kurallarının ihlali; özellikle onay alınmamış
          numaralara mesaj gönderilmesi.
        </li>
        <li>Sisteme yetkisiz erişim girişimi, tersine mühendislik, otomatik veri çekme.</li>
        <li>Başkasının kişisel verisini, ilgili kişinin bilgisi olmadan yüklemek.</li>
      </ul>
      <p>
        Bu kuralların ihlali hâlinde hesap askıya alınabilir. Sağlayıcı kurallarının ihlali hâlinde
        bağlantı, sağlayıcı tarafından da kapatılabilir; bu durum bizim kontrolümüzde değildir.
      </p>

      <h2>4. Ücretler</h2>
      <p>
        Hizmet, seçilen plana göre ücretlendirilir. Ücretler ve plan sınırları hesap içerisinde
        gösterilir. Ödenmemiş dönemler için hizmet kısıtlanabilir.
      </p>

      <h2>5. Veriler ve hesabın kapatılması</h2>
      <p>
        Stüdyonun sisteme girdiği veriler stüdyoya aittir. Hesap kapatıldığında 30 günlük geri alma
        süresi başlar; bu sürede hesap geri açılabilir. Süre sonunda veriler silinir veya mevzuatın
        saklamayı zorunlu kıldığı kayıtlar anonimleştirilir. Kapatmadan önce verilerinizi dışa
        aktarabilirsiniz.
      </p>

      <h2>6. Hizmet seviyesi ve sorumluluğun sınırı</h2>
      <p>
        Hizmet &ldquo;olduğu gibi&rdquo; sunulur. Kesintisiz çalışacağı taahhüt edilmez; planlı
        bakımlar önceden duyurulur. Dolaylı zararlardan sorumluluk kabul edilmez ve doğrudan
        zararlardan sorumluluk, ilgili olayın gerçekleştiği aydan önceki on iki ayda ödenen hizmet
        bedeli ile sınırlıdır.
      </p>

      <h2>7. Değişiklikler ve uygulanacak hukuk</h2>
      <p>
        Bu koşullar değiştiğinde bu sayfa güncellenir ve esaslı değişiklikler e-posta ile duyurulur.
        Bu koşullara Türkiye Cumhuriyeti hukuku uygulanır.
      </p>

      <h2>8. İletişim</h2>
      <p>
        {entity.legalName}, {entity.address}.{" "}
        {entity.contactEmail ? (
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>
        ) : (
          <strong className="text-[#B42318]">(iletişim adresi girilmedi)</strong>
        )}
      </p>
    </LegalPage>
  );
}
