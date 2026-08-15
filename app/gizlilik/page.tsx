import type { Metadata } from "next";
import {
  ControllerTable,
  CrossBorderNotice,
  LegalPage,
  SubProcessorTable,
} from "../../src/components/LegalPage";
import { legalEntity } from "../../src/legalEntity";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Fitbase'in kişisel verileri nasıl işlediği, ne kadar sakladığı ve kimlerle paylaştığı.",
  alternates: { canonical: "/gizlilik" },
  // Indexed on purpose: a policy nobody can find is one a data subject cannot read and a Meta
  // reviewer cannot check.
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const entity = legalEntity;

  return (
    <LegalPage title="Gizlilik Politikası" updated="7 Ağustos 2026">
      <h1>Gizlilik Politikası</h1>
      <p className="lede">
        Bu politika, {entity.legalName} tarafından işletilen Fitbase stüdyo yönetim hizmetinin
        kişisel verileri nasıl işlediğini açıklar.
      </p>

      <h2>1. Veri sorumlusu</h2>
      <ControllerTable entity={entity} />

      <h2>2. İşlenen veriler</h2>
      <p>
        Fitbase iki farklı grubun verisini işler: hizmeti kullanan <strong>stüdyo çalışanları</strong>{" "}
        ve stüdyonun kendi kayıtlarını tuttuğu <strong>üyeler ve adaylar</strong>. İkinci grup için
        stüdyo veri sorumlusu, {entity.legalName} ise veri işleyendir.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Grup</th>
            <th scope="col">Veriler</th>
            <th scope="col">Neden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stüdyo çalışanı</td>
            <td>Ad soyad, e-posta, telefon, rol, şifre özeti, oturum ve giriş kayıtları</td>
            <td>Hesabın oluşturulması, kimlik doğrulama, yetkilendirme ve güvenlik</td>
          </tr>
          <tr>
            <td>Stüdyo</td>
            <td>Ticari unvan, adres, telefon, vergi dairesi ve vergi kimlik numarası</td>
            <td>Sözleşmenin kurulması ve faturalandırma</td>
          </tr>
          <tr>
            <td>Üye ve aday</td>
            <td>
              Ad soyad, telefon, e-posta, doğum tarihi, stüdyonun kendi notları, ilgi alanları,
              üyelik ve paket kayıtları, seans hareketleri, ödeme kayıtları
            </td>
            <td>Stüdyonun kendi müşteri ilişkisini yürütmesi</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sağlık verisi, biyometrik veri ve diğer özel nitelikli kişisel veriler için ayrılmış bir alan{" "}
        <strong>yoktur</strong>. Stüdyonun serbest metin not alanına ne yazdığı stüdyonun
        sorumluluğundadır.
      </p>

      <h2>3. Nasıl korunur</h2>
      <ul>
        <li>
          Her stüdyonun verisi veritabanı düzeyinde <strong>satır seviyesi güvenlik</strong> ile
          ayrılır. Uygulama, tabloların sahibi olmayan ve bu kuralı atlayamayan bir veritabanı
          rolüyle bağlanır.
        </li>
        <li>
          Şifreler geri döndürülemez biçimde özetlenir. Oturum yenileme anahtarları veritabanında
          yalnızca özet olarak tutulur.
        </li>
        <li>
          Vergi kimlik numarası ve bağlanan mesajlaşma hesaplarının erişim anahtarları, stüdyo
          başına ayrı bir anahtarla, kimliği doğrulanmış şifreleme (AES-256-GCM) ile şifrelenir. Ana
          anahtar veritabanında tutulmaz.
        </li>
        <li>Tüm trafik TLS ile şifrelenir. Yedekler şifrelenir.</li>
        <li>
          Yetkili erişim kayda geçer. Destek amacıyla stüdyo verisine erişim ayrı bir işlemdir,
          gerekçe ister ve erişimden <em>önce</em> denetim kaydı yazar.
        </li>
      </ul>

      <h2>4. Saklama süreleri</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Kayıt</th>
            <th scope="col">Süre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Denetim kayıtları</td>
            <td>2 yıl</td>
          </tr>
          <tr>
            <td>Giriş ve kimlik doğrulama kayıtları</td>
            <td>1 yıl</td>
          </tr>
          <tr>
            <td>Ham webhook içerikleri</td>
            <td>30 gün</td>
          </tr>
          <tr>
            <td>Silinmek üzere işaretlenmiş kayıtlar</td>
            <td>30 gün geri alma süresi</td>
          </tr>
          <tr>
            <td>Üye, üyelik ve seans kayıtları</td>
            <td>Stüdyo hesabı aktif olduğu sürece</td>
          </tr>
          <tr>
            <td>Mali kayıtlar</td>
            <td>
              Vergi mevzuatının gerektirdiği süre. Bu süre KVKK kapsamındaki silme talebinden
              bağımsızdır; talep hâlinde mali kayıt saklanır, diğer veriler silinir.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>5. Aktarım ve hizmet sağlayıcılar</h2>
      <CrossBorderNotice entity={entity} />
      <SubProcessorTable entity={entity} />
      <p>
        Kişisel veriler pazarlama amacıyla üçüncü taraflara satılmaz, kiralanmaz ve devredilmez.
      </p>

      <h2>6. Mesajlaşma hesapları</h2>
      <p>
        Bir stüdyo kendi WhatsApp Business veya Instagram işletme hesabını bağlarsa, o hesaba gelen
        ve o hesaptan giden mesajlar Fitbase üzerinde saklanır ve yalnızca o stüdyoya gösterilir.
        Bağlantı yalnızca sağlayıcının resmî yetkilendirme akışıyla kurulur; hesap şifresi hiçbir
        zaman istenmez ve saklanmaz. Stüdyo bağlantıyı kaldırdığında erişim yetkisi sağlayıcı
        nezdinde de iptal edilir.
      </p>
      <p>
        <strong>
          Bu sistemde müşteri mesajlarını okuyan, sınıflandıran veya cevaplayan bir yapay zekâ
          bulunmaz.
        </strong>{" "}
        Mesajlar yalnızca stüdyonun yetkili kullanıcılarına gösterilir.
      </p>

      <h2>7. Haklarınız</h2>
      <p>
        KVKK md. 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep
        etme, işlenme amacını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri
        bilme, eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya
        yok edilmesini isteme ve zararın giderilmesini talep etme haklarına sahipsiniz.
      </p>
      <p>
        Başvurunuzu{" "}
        {entity.contactEmail ? (
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>
        ) : (
          <strong className="text-[#B42318]">(iletişim adresi girilmedi)</strong>
        )}{" "}
        adresine iletebilirsiniz. Bir stüdyonun üyesiyseniz, verinizin sorumlusu o stüdyodur;
        talebinizi doğrudan stüdyoya iletmeniz daha hızlı sonuç verir. Bize ilettiğiniz talepleri
        ilgili stüdyoya yönlendiririz.
      </p>

      <h2>8. Değişiklikler</h2>
      <p>
        Bu politika değiştiğinde bu sayfa güncellenir ve aşağıdaki tarih değişir. Esaslı bir
        değişiklik olduğunda kayıtlı stüdyolara e-posta ile bilgi verilir.
      </p>
    </LegalPage>
  );
}
