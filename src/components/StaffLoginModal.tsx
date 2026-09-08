import React from 'react';
import { X, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { StaffLoginModalProps } from '../types';

/**
 * Where studio staff sign in — a signpost, not a form.
 *
 * <b>This used to collect a password and throw it away.</b> Studio code, address and password went
 * into three inputs, a `setTimeout` waited 1.2 seconds, and the modal said "yönlendiriliyorsunuz"
 * without ever calling the API or navigating anywhere. Nobody could sign in through it, and every
 * person who tried had typed their real password into a page that did nothing with it — which is
 * the habit a phishing page relies on.
 *
 * The panel owns signing in, and it is the only place that should. It holds the refusals that make
 * a sign-in form safe — one answer for a wrong password and an unknown address alike, so the form
 * cannot be used to discover who has an account; a remedy shown only for an unverified address; the
 * rate limit; the reset flow; the invitation flow. A second form here would be a second copy of all
 * of that, and copies drift.
 *
 * The studio-code field is gone for a separate reason: it asked a question the product has no
 * answer to. An account belongs to one organization and the server resolves which from the
 * credentials — there are no per-studio subdomains to type.
 */

/** Where the panel lives. The one thing about this modal that changes between environments. */
const PANEL_URL =
  (import.meta.env?.VITE_PANEL_URL as string | undefined) ?? 'https://admin.fitbase.com.tr';

export const StaffLoginModal: React.FC<StaffLoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex bg-black/50 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="modal-panel relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E7E7E2]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="staff-login-title"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 pt-6 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
              fitbase Staff Hub
            </span>
          </div>

          <h3
            id="staff-login-title"
            className="pr-10 text-2xl font-bold text-[#252525] tracking-tight"
          >
            Personel Girişi
          </h3>
          <p className="text-xs text-[#5F6368] mt-1 mb-6">
            Stüdyo paneli, eğitmen takvimi ve yoklama yönetimi panelde. Şifreni yalnızca panelde
            gir — bu sayfa hiçbir zaman şifre istemez.
          </p>

          <a
            href={`${PANEL_URL}/giris`}
            className="w-full py-3 px-5 rounded-xl bg-[#252525] text-white font-semibold text-xs hover:bg-black transition-all flex items-center justify-center gap-2"
          >
            <span>Panele Git</span>
            <ArrowRight className="w-4 h-4 text-[#18F28D]" />
          </a>

          <div className="mt-4 space-y-3">
            <a
              href={`${PANEL_URL}/sifremi-unuttum`}
              className="flex items-center gap-2 text-xs text-[#5F6368] hover:text-[#252525] transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>Şifreni mi unuttun? Panelden sıfırlama bağlantısı iste.</span>
            </a>

            <div className="flex items-start gap-2 p-3 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] text-[11px] text-[#5F6368]">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-teal-700" />
              <span>
                Henüz hesabın yok mu? Stüdyo yöneticin seni davet ettiğinde bağlantı e-postayla
                gelir. Yeni bir stüdyo açıyorsan panelden{' '}
                <a href={`${PANEL_URL}/kayit`} className="font-semibold text-[#252525] underline">
                  kayıt olabilirsin
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
