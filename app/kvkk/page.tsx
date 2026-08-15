import type { Metadata } from "next";
import {
  ControllerTable,
  CrossBorderNotice,
  LegalPage,
  SubProcessorTable,
} from "../../src/components/LegalPage";
import { isCrossBorderTransfer, legalEntity } from "../../src/legalEntity";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kanun'un 10. maddesi uyarınca Fitbase'in kişisel veri işleme aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  const entity = legalEntity;

  return (
    <LegalPage title="KVKK Aydınlatma Metni" updated="7 Ağustos 2026">
      <h1>KVKK Aydınlatma Metni</h1>
      <p className="lede">
        6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 10. maddesi uyarınca, kişisel
        verileriniz işlenmeden önce sizi bilgilendirmekle yükümlüyüz. Kayıt formundaki onay kutusu bu
        metne aittir.
      </p>

      <h2>Veri sorumlusu</h2>
      <ControllerTable entity={entity} />

      <h2>Hangi verileriniz işlenir</h2>
      <p>
        Hesap oluştururken: <strong>ad soyad</strong>, <strong>e-posta adresi</strong>,{" "}
        <strong>stüdyo adı</strong> ve belirlediğiniz şifrenin geri döndürülemez özeti. Hizmeti
        kullanırken: giriş kayıtları, oturum bilgileri ve IP adresi.
      </p>

      <h2>İşleme amacı ve hukuki sebep</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Amaç</th>
            <th scope="col">Hukuki sebep (md. 5)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hesabın oluşturulması ve hizmetin sunulması</td>
            <td>Sözleşmenin kurulması ve ifası için gerekli olması</td>
          </tr>
          <tr>
            <td>E-posta adresinin doğrulanması</td>
            <td>Sözleşmenin ifası ve meşru menfaat</td>
          </tr>
          <tr>
            <td>Giriş kayıtlarının tutulması, kötüye kullanımın tespiti</td>
            <td>Meşru menfaat ve hukuki yükümlülük</td>
          </tr>
          <tr>
            <td>Faturalandırma ve mali kayıtların tutulması</td>
            <td>Hukuki yükümlülük</td>
          </tr>
        </tbody>
      </table>
      <p>
        Kayıt sırasında pazarlama amaçlı bir işleme yapılmaz. Ticari elektronik ileti gönderimi ayrı
        ve açık bir onaya tabidir.
      </p>

      <h2>Kimlere aktarılır</h2>
      <CrossBorderNotice entity={entity} />
      <SubProcessorTable entity={entity} />
      <p>
        Bunlar dışında, yalnızca yetkili kamu kurum ve kuruluşlarına, mevzuatın gerektirdiği hâllerde
        ve gerektirdiği ölçüde aktarım yapılır.
      </p>

      {/*
        Rendered only when data actually leaves Türkiye. A standing art. 9 section on a document
        describing a purely domestic setup would be a false statement in the other direction, and
        the section is long enough that nobody would notice it had stopped applying.
      */}
      {isCrossBorderTransfer(entity) && (
        <>
          <h2>Yurt dışına aktarım</h2>
          <p>
            Yukarıda sayılan sağlayıcıların bir kısmı Türkiye dışında bulunduğundan, kişisel
            verileriniz yurt dışına aktarılmaktadır. Kanun&apos;un 9. maddesi bu aktarımı ayrı bir
            şarta bağlar; aşağıdaki esaslar uygulanır.
          </p>
          <ul>
            <li>
              Aktarım yalnızca yukarıdaki tabloda sayılan taraflara ve yalnızca tabloda belirtilen
              amaçlarla yapılır. Tabloda yer almayan hiçbir yurt dışı tarafa aktarım yapılmaz.
            </li>
            <li>
              Aktarım, hizmetin teknik olarak sunulabilmesi için zorunludur. Pazarlama, profilleme,
              reklam hedefleme veya üçüncü taraflara satış amacı taşımaz.
            </li>
            <li>
              Aktarılan veri, ilgili sağlayıcının hizmetini yerine getirebilmesi için gereken
              asgari veriyle sınırlıdır. Barındırma sağlayıcısı verileri yalnızca saklar; içeriğe
              erişmez ve kendi amaçları için kullanmaz.
            </li>
            <li>
              Aktarım, Kanun&apos;un öngördüğü uygun güvencelere dayanır. Aktarımın yapıldığı
              taraflarla standart sözleşme akdedilir ve bu sözleşme, imzalanmasından itibaren beş
              iş günü içinde Kişisel Verileri Koruma Kurulu&apos;na bildirilir.
            </li>
          </ul>
          <p>
            Kanun&apos;un 11. maddesi size, kişisel verilerinizin yurt dışında aktarıldığı üçüncü
            kişileri öğrenme hakkı verir. Yukarıdaki tablo bu bilgiyi güncel olarak içerir.
            Sağlayıcı listesi değiştiğinde bu sayfa güncellenir ve sayfanın altındaki tarih
            yenilenir.
          </p>
        </>
      )}

      <h2>Toplama yöntemi</h2>
      <p>
        Verileriniz, web ve mobil arayüz üzerinden, doğrudan sizin tarafınızdan girilmek suretiyle
        elektronik ortamda toplanır.
      </p>

      <h2>Saklama süresi</h2>
      <p>
        Hesabınız aktif olduğu sürece saklanır. Hesap kapatıldığında 30 günlük geri alma süresi işler
        ve ardından silinir; giriş kayıtları 1 yıl, denetim kayıtları 2 yıl saklanır. Mali kayıtlar
        vergi mevzuatının öngördüğü süre boyunca saklanır.
      </p>

      <h2>Haklarınız</h2>
      <p>
        Kanun&apos;un 11. maddesinde sayılan haklarınızı kullanmak için{" "}
        {entity.contactEmail ? (
          <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>
        ) : (
          <strong className="text-[#B42318]">(iletişim adresi girilmedi)</strong>
        )}{" "}
        adresine yazabilirsiniz. Başvurunuz en geç 30 gün içinde sonuçlandırılır.
      </p>

      <p className="footnote">
        Ayrıntılı bilgi için <a href="/gizlilik">Gizlilik Politikası</a> sayfasına bakabilirsiniz.
      </p>
    </LegalPage>
  );
}
