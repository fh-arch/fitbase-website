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
  legalName: "HAFA BİLİŞİM DANIŞMANLIK GIDA MAK.İÇ VE DIŞ TİC.LTD.ŞTİ.",
  address:
    "Alsancak Mah. Kıbrıs Şehitleri Cad. Kazmirci İş Merkezi No: 20 İç Kapı No: 502, Konak / İzmir 35250, Türkiye",
  phone: "+90 533 154 35 15",
  taxNumber: "4540617469",

  // A shared inbox by the operator's decision. Worth knowing what that costs: a KVKK art. 11
  // request starts a thirty-day statutory clock the moment it lands, and it will land beside demo
  // requests and spam. Whoever reads this box has to recognise one.
  contactEmail: "info@fitbase.com.tr",

  // TODO: the country the VPS is in. If it is outside Türkiye, every one of these documents needs
  // its art. 9 transfer sentence to say so.
  hostingRegion: null,

  mersisNumber: null,
  verbisNumber: null,

  // TODO: at minimum the transactional email provider — verification and invitation mail cannot
  // be delivered without one, and if it sits outside Türkiye it is an art. 9 transfer that has to
  // be disclosed here by name.
  subProcessors: [],
};

/** Fields the documents cannot honestly render without. */
export function missingLegalValues(entity: LegalEntity): string[] {
  const missing: string[] = [];

  if (!entity.contactEmail) missing.push("İletişim e-postası (KVKK md. 11 başvuruları)");
  if (!entity.hostingRegion) missing.push("Sunucu barındırma bölgesi (KVKK md. 9)");
  if (entity.subProcessors.length === 0) missing.push("Alt işleyen listesi");

  return missing;
}
