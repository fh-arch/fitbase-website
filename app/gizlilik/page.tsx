import type { Metadata } from "next";
import {
  ContactLink,
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

      <h2>3. Veriler nasıl toplanır</h2>
      <p>Üç yol vardır ve dördüncüsü yoktur.</p>
      <ul>
        <li>
          <strong>Doğrudan sizden.</strong> Hesap açarken, üye kaydı oluştururken veya bir formu
          doldururken girdiğiniz bilgiler.
        </li>
        <li>
          <strong>Hizmeti kullanırken otomatik olarak.</strong> Giriş zamanı, oturum bilgisi, IP
          adresi ve istemci sürümü. Bunlar yalnızca güvenlik, hata takibi ve kötüye kullanımın
          tespiti içindir; davranış profili çıkarmak için kullanılmaz.
        </li>
        <li>
          <strong>Stüdyodan.</strong> Bir stüdyonun üyesiyseniz verileriniz Fitbase&apos;e sizin
          tarafınızdan değil stüdyo tarafından girilir. Bu durumda veri sorumlusu stüdyodur.
        </li>
      </ul>
      <p>
        Kişisel veri satın alınmaz, kiralanmaz, veri simsarlarından veya hazır listelerden temin
        edilmez. Sosyal medya hesaplarınızdan profil verisi çekilmez.
      </p>

      <h2>4. Çerezler</h2>
      <p>
        Bu internet sitesi (<code>fitbase.com.tr</code>) <strong>hiçbir çerez kullanmaz</strong>.
        Siteyi gezmek için tarayıcınıza tek bir çerez bile yazılmaz.
      </p>
      <p>
        Yönetim paneline giriş yaptığınızda <strong>tek bir çerez</strong> kullanılır: oturumunuzun
        açık kalmasını sağlayan oturum yenileme çerezi. <code>HttpOnly</code> ve{" "}
        <code>Secure</code> işaretlidir; yani sayfadaki hiçbir betik onu okuyamaz ve yalnızca
        şifreli bağlantı üzerinden gönderilir. Çıkış yaptığınızda geçersiz kılınır.
      </p>
      <p>
        <strong>
          Reklam çerezi, izleme pikseli, analiz betiği veya etiket yöneticisi kullanılmaz.
        </strong>{" "}
        Bu nedenle bir çerez tercih penceresi de göremezsiniz: kabul edeceğiniz isteğe bağlı bir
        çerez bulunmadığı için sormanın anlamı olmazdı.
      </p>

      <h2>5. Nasıl korunur</h2>
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

      <h2>6. Saklama süreleri</h2>
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

      <h2>7. Aktarım ve hizmet sağlayıcılar</h2>
      <CrossBorderNotice entity={entity} />
      <SubProcessorTable entity={entity} />
      <p>
        Kişisel veriler pazarlama amacıyla üçüncü taraflara satılmaz, kiralanmaz ve devredilmez.
      </p>

      <h2>8. Mesajlaşma hesapları</h2>
      <p>
        Bir stüdyo kendi WhatsApp Business, Instagram işletme veya Facebook Messenger hesabını bağlarsa, bu hesaplara gelen
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

      <h2>9. Çocukların verileri</h2>
      <p>
        Fitbase&apos;de hesap açan kişi, stüdyo adına sözleşme kurmaya yetkili bir yetişkindir.
        Panelde çocuklara ait bir kullanıcı hesabı türü bulunmaz.
      </p>
      <p>
        Bununla birlikte bir stüdyo, on sekiz yaşından küçük bir kişiyi kendi üye listesine
        kaydedebilir; spor ve sağlıklı yaşam stüdyolarında bu olağandır. Bu durumda:
      </p>
      <ul>
        <li>
          Veri sorumlusu stüdyodur.{" "}
          <strong>Veli veya vasi onayının alınması stüdyonun yükümlülüğüdür.</strong> Fitbase bu
          onayı sizin adınıza almaz ve alınmış olduğunu varsaymaz.
        </li>
        <li>
          Doğum tarihi alanı isteğe bağlıdır ve sistem yaşa göre bir kısıtlama uygulamaz. Bu, bir
          kaydın hukuka uygunluğunun teknik bir kontrole değil stüdyonun kendi sürecine bağlı
          olduğu anlamına gelir. Bunu açıkça yazıyoruz, çünkü aksini varsaymak stüdyoyu yanıltır.
        </li>
        <li>
          Çocuğa ait kayıtlar, yetişkin üyelerle aynı saklama sürelerine ve aynı silme haklarına
          tabidir. Veli veya vasi, çocuk adına Kanun&apos;un 11. maddesindeki hakları kullanabilir.
        </li>
      </ul>
      <p>
        Bir çocuğun verisinin onay alınmadan işlendiğini düşünüyorsanız{" "}
        <ContactLink entity={entity} /> adresine yazın. Talebi ilgili stüdyoya iletir ve
        gerekiyorsa kaydı erişime kapatırız.
      </p>

      <h2>10. Veriler üzerindeki kontrolünüz</h2>
      <ul>
        <li>
          <strong>Görme ve düzeltme.</strong> Stüdyo çalışanıysanız profil bilgilerinizi panelden
          düzenleyebilirsiniz.
        </li>
        <li>
          <strong>Hesabın kapatılması.</strong> Stüdyo yöneticisi hesabın kapatılmasını talep
          edebilir. Kapatma sonrası 30 günlük geri alma süresi işler; bu sürede hesap yeniden
          açılabilir. Süre dolduğunda veriler silinir veya mevzuatın saklamayı zorunlu kıldığı
          kayıtlar anonimleştirilir.
        </li>
        <li>
          <strong>Bildirimler.</strong> Bilgilendirme e-postalarının içeriği ve sıklığı hesap
          ayarlarından yönetilir. Güvenlik bildirimleri (şifre değişikliği, yeni oturum) kapatılamaz;
          bunlar pazarlama değil güvenlik amaçlıdır.
        </li>
        <li>
          <strong>Bir stüdyonun üyesiyseniz.</strong> Verinizin sorumlusu o stüdyodur. Silme,
          düzeltme veya bilgi talebinizi doğrudan stüdyoya iletmeniz en hızlı yoldur; bize
          ilettiklerinizi ilgili stüdyoya yönlendiririz.
        </li>
      </ul>
      <p>
        Verilerinizin makine tarafından okunabilir biçimde dışa aktarılmasını da talep
        edebilirsiniz. Bu talep şu anda başvuru üzerine elle karşılanmaktadır; panel içinden
        kendi kendine çalışan bir dışa aktarma özelliği henüz bulunmamaktadır.
      </p>

      <h2>11. Güvenlik ihlali durumunda</h2>
      <p>
        Kişisel verilerin hukuka aykırı olarak başkaları tarafından elde edildiği tespit edilirse,
        durum en kısa sürede ve her hâlükârda <strong>72 saat içinde</strong> Kişisel Verileri
        Koruma Kurulu&apos;na bildirilir. Etkilenen kişilere de makul en kısa sürede bilgi verilir;
        doğrudan iletişim mümkün değilse duyuru bu internet sitesinde yayımlanır.
      </p>
      <p>
        İhlal bir stüdyonun üyelerini ilgilendiriyorsa, ilgili kişilere bildirimi veri sorumlusu
        sıfatıyla stüdyo yapar. Fitbase, ihlalin kapsamını ve etkilenen kayıtları stüdyoya
        gecikmeksizin bildirmekle yükümlüdür.
      </p>

      <h2>12. Üçüncü taraf bağlantıları</h2>
      <p>
        Bu sitede ve panelde üçüncü taraf internet sitelerine bağlantılar bulunabilir. Bu
        politikanın kapsamı yalnızca Fitbase&apos;dir; bağlantıya tıklayarak gittiğiniz sitenin
        gizlilik uygulamalarından sorumlu değiliz.
      </p>
      <p>
        Bunun somut bir örneği, sitedeki <strong>WhatsApp ile iletişim</strong> bağlantısıdır.
        Bağlantıya tıkladığınızda WhatsApp uygulamasına yönlendirilirsiniz ve gönderdiğiniz mesaj
        WhatsApp&apos;ın kendi gizlilik koşullarına tabi olur. Bu tercih tamamen sizindir; site
        arka planda kendiliğinden hiçbir mesaj göndermez.
      </p>

      <h2>13. Haklarınız</h2>
      <p>
        KVKK md. 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep
        etme, işlenme amacını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri
        bilme, eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya
        yok edilmesini isteme ve zararın giderilmesini talep etme haklarına sahipsiniz.
      </p>
      <p>
        Başvurunuzu <ContactLink entity={entity} /> adresine iletebilirsiniz. Bir stüdyonun üyesiyseniz, verinizin sorumlusu o stüdyodur;
        talebinizi doğrudan stüdyoya iletmeniz daha hızlı sonuç verir. Bize ilettiğiniz talepleri
        ilgili stüdyoya yönlendiririz.
      </p>

      <h2>14. Değişiklikler</h2>
      <p>
        Bu politika değiştiğinde bu sayfa güncellenir ve aşağıdaki tarih değişir. Esaslı bir
        değişiklik olduğunda kayıtlı stüdyolara e-posta ile bilgi verilir.
      </p>
    </LegalPage>
  );
}
