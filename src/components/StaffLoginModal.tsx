import React, { useState } from 'react';
import { X, Lock, Mail, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { StaffLoginModalProps } from '../types';

export const StaffLoginModal: React.FC<StaffLoginModalProps> = ({ isOpen, onClose }) => {
  const [studioCode, setStudioCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      setMessage('Personel portalına yönlendiriliyorsunuz... Lütfen bekleyin.');
    }, 1200);
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex bg-black/50 backdrop-blur-xs animate-fade-in" onClick={onClose}>
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
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">fitbase Staff Hub</span>
          </div>

          <h3 id="staff-login-title" className="pr-10 text-2xl font-bold text-[#252525] tracking-tight">
            Personel Girişi
          </h3>
          <p className="text-xs text-[#5F6368] mt-1 mb-6">
            Stüdyo paneli, eğitmen takvimi ve yoklama yönetimi için giriş yapın.
          </p>

          {message ? (
            <div className="p-4 bg-[#D9FDEE] border border-[#18F28D] rounded-2xl text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-teal-800 mx-auto" />
              <p className="text-xs font-medium text-teal-900">{message}</p>
              <button 
                onClick={onClose}
                className="mt-2 text-xs font-semibold text-teal-800 underline cursor-pointer"
              >
                Pencereyi Kapat
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#252525] mb-1">
                  Stüdyo Kodu veya Subdomain
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                  <input 
                    type="text" 
                    required
                    placeholder="örn: serene-pilates"
                    value={studioCode}
                    onChange={(e) => setStudioCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252525] mb-1">
                  E-Posta Adresi
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="egitmen@studyo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-semibold text-[#252525]">
                    Şifre
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Şifre sıfırlama e-postası stüdyo yöneticinize gönderilecektir.'); }} className="text-[11px] text-zinc-500 hover:underline">
                    Şifremi unuttum
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-5 rounded-xl bg-[#252525] text-white font-semibold text-xs hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <span>Giriş Yapılıyor...</span>
                  ) : (
                    <>
                      <span>Güvenli Giriş Yap</span>
                      <ArrowRight className="w-4 h-4 text-[#18F28D]" />
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7E7E2] text-[11px] text-[#5F6368] text-center">
                Henüz bir fitbase stüdyo hesabınız yok mu? <br />
                <span className="font-semibold text-[#252525]">Stüdyo Yöneticinizden davet bağlantısı isteyin.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
