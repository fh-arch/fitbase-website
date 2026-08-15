import type { Metadata } from "next";
import { ControllerTable, LegalPage, SubProcessorTable } from "../../src/components/LegalPage";
import { legalEntity } from "../../src/legalEntity";

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
      <SubProcessorTable entity={entity} />
      <p>
        Bunlar dışında, yalnızca yetkili kamu kurum ve kuruluşlarına, mevzuatın gerektirdiği hâllerde
        ve gerektirdiği ölçüde aktarım yapılır.
      </p>

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
