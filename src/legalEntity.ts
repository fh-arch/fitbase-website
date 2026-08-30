/**
 * Who is legally publishing Fitbase.
 *
 * These values are not decoration. KVKK art. 10 requires the data controller to be identified to
 * the data subject by name and address, and Meta's Business Verification compares the entity on
 * the privacy policy against the entity on the submitted trade-registry documents — a mismatch is
 * the most common rejection.
 *
 * **Copy the name from the trade registry, character for character.** It is deliberately stored
 * once, here, and read by all three documents, so the three cannot drift apart.
 *
 * The same values are set on the backend as `Legal__*` environment variables. They must agree;
 * the backend's own pages redirect here once this site is live, so this file becomes the single
 * source.
 */
export interface LegalEntity {
  /** Registered company name, exactly as on the trade registry. */
  readonly legalName: string;

  /** Registered address, shown in full. KVKK art. 10 requires it. */
  readonly address: string;

  /** Business telephone, as registered. */
  readonly phone: string;

  /** Tax number (VKN). */
  readonly taxNumber: string;

  /**
   * Where a data subject writes to exercise their KVKK art. 11 rights.
   *
   * **A mailbox somebody reads.** The law gives thirty days to answer, and a no-reply address is
   * a breach waiting for its first request. `null` until a real one exists — the pages then say
   * so loudly rather than printing an address that goes nowhere.
   */
  readonly contactEmail: string | null;

  /**
   * Where the servers physically are, as a country a reader recognises.
   *
   * Load-bearing rather than descriptive: KVKK art. 9 makes transferring personal data abroad a
   * separate lawful-basis question, so this is the sentence a careful reader checks first.
   */
  readonly hostingRegion: string | null;

  /** MERSİS number, or null. Renders as an em dash when absent. */
  readonly mersisNumber: string | null;

  /**
   * VERBİS registration number, or null.
   *
   * Registration is mandatory above the employee and turnover thresholds and voluntary below
   * them. Null renders as "kayıtlı değil" rather than being hidden: a reader looking for it
   * should find an answer, and below the thresholds the honest answer is "no".
   */
  readonly verbisNumber: string | null;

  /** Third parties that process personal data on the controller's behalf. */
  readonly subProcessors: readonly SubProcessor[];
}

export interface SubProcessor {
  readonly name: string;
  readonly purpose: string;
  /** Country or region. Outside Türkiye makes it a KVKK art. 9 transfer that must be disclosed. */
  readonly region: string;
}

export const legalEntity: LegalEntity = {
  // Unabbreviated on purpose, and corrected 2026-08-19 from "… GIDA MAK.İÇ VE DIŞ TİC.LTD.ŞTİ.".
  // Meta's Business Verification panel renders the name it read from the trade-registry documents
  // as "HAFA BILISIM DANISMANLIK GIDA MAKINA IC VE DIS TICARET LIMITED SIRKETI" — full words, no
  // abbreviations. The comparison Meta makes is against this string, and §7 of the backend's
  // meta-onboarding register records a mismatched trade name as the most common rejection.
  //
  // The Turkish spelling is restored from Meta's ASCII rendering; every word agrees with how this
  // file already spelled the ones it did not abbreviate (BİLİŞİM, DANIŞMANLIK, GIDA, İÇ, DIŞ).
  // If the registry gazette writes MAKINA with a dotless I, this is the one character to change.
  legalName: "HAFA BİLİŞİM DANIŞMANLIK GIDA MAKİNA İÇ VE DIŞ TİCARET LİMİTED ŞİRKETİ",
  address:
    "Alsancak Mah. Kıbrıs Şehitleri Cad. Kazmirci İş Merkezi No: 20 İç Kapı No: 502, Konak / İzmir 35250, Türkiye",
  phone: "+90 541 814 13 96",
  taxNumber: "4540617469",

  // A shared inbox by the operator's decision. Worth knowing what that costs: a KVKK art. 11
  // request starts a thirty-day statutory clock the moment it lands, and it will land beside demo
  // requests and spam. Whoever reads this box has to recognise one.
  contactEmail: "info@fitbase.com.tr",

  // Outside Türkiye, so every transfer of personal data to it is a KVKK art. 9 cross-border
  // transfer. The documents say so explicitly rather than burying it in a provider table —
  // art. 11 gives the data subject the right to know which countries their data reaches, and a
  // reader should not have to infer it from a company name they may not recognise.
  hostingRegion: "Almanya",

  mersisNumber: "0454061746900001",
  verbisNumber: null,

  // Only what actually processes personal data today. The list is deliberately short because the
  // site is: no analytics, no tag manager, no font CDN, no form backend. Adding a plausible-
  // sounding entry would be worse than omitting one, because a data subject cannot verify it and
  // a regulator can.
  //
  // Not listed, and each for a reason:
  //  - Transactional email. No production SMTP provider is configured yet (backend decision D22 is
  //    open). It goes in the moment one is chosen — verification and invitation mail cannot be
  //    delivered without it, so this list is incomplete from that day forward until it is added.
  //  - Payment processing. The product records payments; it does not take them.
  subProcessors: [
    {
      name: "Contabo GmbH",
      purpose: "Sunucu barındırma, uygulama ve veritabanı altyapısı",
      region: "Almanya",
    },
    {
      // Easy to leave out, because nobody installs it as a feature. It sits in front of the
      // domain, terminates TLS and therefore sees every visitor's IP address and request path —
      // which makes it a processor of personal data whether or not anyone thinks of it as one.
      name: "Cloudflare, Inc.",
      purpose:
        "Alan adı yönlendirme, TLS sonlandırma, saldırı koruması ve içerik dağıtımı. "
        + "Ziyaretçi IP adresleri bu kapsamda işlenir.",
      region: "ABD ve küresel sunucu ağı",
    },
    {
      name: "Meta Platforms Ireland Ltd.",
      purpose:
        "WhatsApp Business, Instagram DM ve Facebook Messenger entegrasyonları üzerinden "
        + "müşteri iletişimi ve CRM aday yönetimi; ayrıca siteden isteğe bağlı WhatsApp demo talebi.",
      region: "İrlanda (AB)",
    },
  ],
};

/**
 * Whether personal data leaves Türkiye.
 *
 * Drives the KVKK art. 9 notice on the documents. Kept as a function over the region string
 * rather than a stored boolean so the two cannot contradict each other — a stored flag reading
 * `false` beside a region reading "Almanya" is exactly the kind of quiet inconsistency that
 * survives review.
 */
export function isCrossBorderTransfer(entity: LegalEntity): boolean {
  if (!entity.hostingRegion) return false;

  return entity.hostingRegion.trim().toLocaleLowerCase("tr-TR") !== "türkiye";
}

/** Fields the documents cannot honestly render without. */
export function missingLegalValues(entity: LegalEntity): string[] {
  const missing: string[] = [];

  if (!entity.contactEmail) missing.push("İletişim e-postası (KVKK md. 11 başvuruları)");
  if (!entity.hostingRegion) missing.push("Sunucu barındırma bölgesi (KVKK md. 9)");
  if (entity.subProcessors.length === 0) missing.push("Alt işleyen listesi");

  return missing;
}
