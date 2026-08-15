import React from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import {
  isCrossBorderTransfer,
  legalEntity,
  missingLegalValues,
  type LegalEntity,
} from "../legalEntity";

/**
 * The chrome and typography every legal document shares.
 *
 * A legal page is read by three audiences with nothing in common: a member exercising a KVKK
 * right, a studio owner deciding whether to sign, and a Meta reviewer checking that the company
 * named here matches the company on the trade-registry documents. All three want the same thing —
 * to find one specific sentence quickly — so the styling is plain and the headings are dense.
 */

/**
 * Rendered above the document when a value it needs is missing.
 *
 * The backend answers 503 rather than serving a policy with a blank company name, on the
 * reasoning that a wrong statement about who holds the data is worse than a missing one. A static
 * site cannot refuse, so it says so instead — visibly, at the top, in a colour nobody publishes
 * on purpose.
 */
function MissingValues({ missing }: { missing: string[] }) {
  if (missing.length === 0) return null;

  return (
    <div
      role="alert"
      className="mb-10 rounded-xl border-2 border-[#B42318] bg-[#FEF3F2] p-5 text-sm text-[#912018]"
    >
      <p className="flex items-center gap-2 font-bold">
        <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
        Bu belge henüz tamamlanmadı
      </p>
      <p className="mt-2 leading-relaxed">
        Aşağıdaki bilgiler girilmeden bu metin hukuken eksiktir ve yayına alınmamalıdır.
        Değerler <code className="rounded bg-white px-1 py-0.5 text-xs">src/legalEntity.ts</code>{" "}
        dosyasında tanımlanır.
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 font-medium">
        {missing.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function LegalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E7E7E2] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-4xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="/" aria-label="Fitbase ana sayfa" className="flex min-h-11 items-center">
          <img
            src="/fitbase-logo.png"
            alt="Fitbase"
            width="188"
            height="56"
            className="h-[45px] w-auto max-w-[188px]"
          />
        </a>
        <nav className="flex items-center gap-4 text-xs font-bold text-[#5F6368]">
          <a href="/gizlilik" className="hover:text-[#252525]">Gizlilik</a>
          <a href="/kosullar" className="hover:text-[#252525]">Koşullar</a>
          <a href="/kvkk" className="hover:text-[#252525]">KVKK</a>
        </nav>
      </div>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="border-t border-[#E7E7E2] bg-white py-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 text-xs text-[#5F6368] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© 2026 Fitbase</span>
        <a href="/" className="inline-flex min-h-11 items-center gap-2 font-bold text-[#252525]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Ana sayfaya dön
        </a>
      </div>
    </footer>
  );
}

/** The controller identification KVKK art. 10 requires, in the same shape on all three pages. */
export function ControllerTable({ entity }: { entity: LegalEntity }) {
  return (
    <table>
      <tbody>
        <tr>
          <th scope="row">Unvan</th>
          <td>{entity.legalName}</td>
        </tr>
        <tr>
          <th scope="row">Adres</th>
          <td>{entity.address}</td>
        </tr>
        <tr>
          <th scope="row">Telefon</th>
          <td>{entity.phone}</td>
        </tr>
        <tr>
          <th scope="row">E-posta</th>
          <td>
            {entity.contactEmail ? (
              <a href={`mailto:${entity.contactEmail}`}>{entity.contactEmail}</a>
            ) : (
              <span className="font-bold text-[#B42318]">girilmedi</span>
            )}
          </td>
        </tr>
        <tr>
          <th scope="row">Vergi No</th>
          <td>{entity.taxNumber}</td>
        </tr>
        <tr>
          <th scope="row">MERSİS</th>
          <td>{entity.mersisNumber ?? "—"}</td>
        </tr>
        <tr>
          <th scope="row">VERBİS</th>
          <td>{entity.verbisNumber ?? "kayıtlı değil"}</td>
        </tr>
      </tbody>
    </table>
  );
}

/** Who the data reaches, or a plain sentence saying nobody does. */
export function SubProcessorTable({ entity }: { entity: LegalEntity }) {
  if (entity.subProcessors.length === 0) {
    return <p>Kişisel veriler, hizmetin sunulması için üçüncü taraflara aktarılmaz.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Sağlayıcı</th>
          <th scope="col">Amaç</th>
          <th scope="col">Bölge</th>
        </tr>
      </thead>
      <tbody>
        {entity.subProcessors.map((processor) => (
          <tr key={processor.name}>
            <td>{processor.name}</td>
            <td>{processor.purpose}</td>
            <td>{processor.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * The KVKK art. 9 statement, rendered wherever a document describes transfers.
 *
 * Shared rather than written twice, because the privacy policy and the KVKK notice have to agree
 * on this and they are edited at different times by different people. Two copies of a sentence
 * about where data goes is two chances to be wrong about it.
 *
 * Renders nothing when hosting is domestic — the sentence would then be false, and a document
 * that claims a transfer which does not happen is as wrong as one that hides a transfer that does.
 */
export function CrossBorderNotice({ entity }: { entity: LegalEntity }) {
  if (!isCrossBorderTransfer(entity)) return null;

  return (
    <p>
      Sunucular <strong>{entity.hostingRegion}</strong> ülkesinde bulunmaktadır. Bu, kişisel
      verilerinizin <strong>yurt dışına aktarıldığı</strong> anlamına gelir ve 6698 sayılı
      Kanun&apos;un 9. maddesi kapsamındadır. Aktarım, hizmetin sunulabilmesi için zorunludur ve
      yalnızca aşağıdaki tabloda sayılan taraflara, yine tabloda belirtilen amaçlarla yapılır.
      Verileriniz bu amaçların dışında yurt dışındaki başka bir tarafa aktarılmaz.
    </p>
  );
}

/**
 * Wraps a document.
 *
 * Typography is applied with descendant selectors rather than per-element classes so the document
 * bodies stay readable as prose — which is what they are, and what the next person editing a
 * sentence needs them to look like.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  const missing = missingLegalValues(legalEntity);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <LegalHeader />

      <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <MissingValues missing={missing} />

        <article
          className={[
            "rounded-2xl border border-[#E7E7E2] bg-white p-6 text-[15px] leading-relaxed text-[#3C3C3C] sm:p-10",
            "[&_h1]:mt-0 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-[#252525]",
            "[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#252525]",
            "[&_p]:mb-4",
            "[&_.lede]:text-base [&_.lede]:text-[#5F6368]",
            "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5",
            "[&_strong]:font-bold [&_strong]:text-[#252525]",
            "[&_a]:font-medium [&_a]:text-[#252525] [&_a]:underline [&_a]:underline-offset-2",
            "[&_hr]:my-12 [&_hr]:border-[#E7E7E2]",
            // Tables carry the retention periods and the lawful bases — the two things a reader
            // actually looks up — so they scroll rather than overflow on a phone.
            "[&_table]:mb-6 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:text-sm",
            "[&_th]:border [&_th]:border-[#E7E7E2] [&_th]:bg-[#FAF7F2] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:align-top [&_th]:font-bold [&_th]:text-[#252525]",
            "[&_td]:border [&_td]:border-[#E7E7E2] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top",
            "[&_.footnote]:mt-8 [&_.footnote]:text-xs [&_.footnote]:text-[#5F6368]",
          ].join(" ")}
        >
          {children}

          <p className="mt-12 border-t border-[#E7E7E2] pt-6 text-xs text-[#5F6368]">
            Son güncelleme: {updated}. Bu sayfa {legalEntity.legalName} tarafından yayımlanmaktadır.
          </p>
        </article>

        <p className="sr-only">{title}</p>
      </main>

      <LegalFooter />
    </div>
  );
}
