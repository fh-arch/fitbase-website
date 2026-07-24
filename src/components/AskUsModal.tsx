import React, { useState } from 'react';
import { X, Send, CircleDot, Smartphone, CheckCircle2 } from 'lucide-react';
import { AskUsModalProps } from '../types';

export const AskUsModal: React.FC<AskUsModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E7E7E2]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {!sent ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#D9FDEE] text-teal-800">
                  <Smartphone className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-900">
                  Üye & Sporcu Alanı
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#252525]">
                Yakında fitbase app geliyor!
              </h3>
              <p className="text-xs text-[#5F6368] mt-1.5 mb-5 leading-relaxed">
                Abonelik gerektirmeyen, favori stüdyolarındaki pilates, yoga ve fitness derslerini tek dokunuşla rezerve edebileceğin <strong className="text-[#252525]">fitbase app</strong> çok yakında yayınlanıyor. Sorun veya lansman bildirimi isteğin varsa yazabilirsin:
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    E-Posta Adresiniz
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="ornek@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Sorunuz veya Notunuz
                  </label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="Örn: Uygulama ne zaman çıkacak? Ankara'daki reformer stüdyoları olacak mı?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E7E7E2] rounded-xl focus:outline-none focus:border-[#252525] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#252525] text-white text-xs font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#18F28D]" />
                  <span>Sorunu Gönder & Erken Erişime Katıl</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-[#252525]">Mesajın Alındı!</h4>
              <p className="text-xs text-[#5F6368]">
                İlgin için teşekkürler! fitbase app lansman tarihi yaklaştığında <span className="font-semibold text-[#252525]">{email}</span> adresine özel duyuru göndereceğiz.
              </p>
              <button
                onClick={onClose}
                className="mt-2 py-2 px-6 bg-[#252525] text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Kapat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
