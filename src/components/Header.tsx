import React, { useState } from 'react';
import { Menu, X, ChevronRight, UserCheck } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenStaffLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo, onOpenStaffLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Özellikler', href: '#features' },
    { name: 'İşletme Türleri', href: '#studio-types' },
    { name: 'Fiyatlandırma', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E7E7E2] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#top" className="flex items-center group" aria-label="Fitbase ana sayfa">
          <img
            src="/fitbase-logo.png"
            alt="Fitbase"
            className="h-[45px] w-auto max-w-[188px] object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#5F6368] hover:text-[#252525] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#18F28D] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenStaffLogin}
            className="px-4 py-2.5 text-xs font-semibold text-[#252525] border border-[#E7E7E2] rounded-xl hover:bg-[#FAF7F2] hover:border-[#252525] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5 text-zinc-600" />
            <span>Personel Girişi</span>
          </button>

          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-bold text-[#121212] bg-[#18F28D] rounded-xl hover:bg-[#11dc7d] hover:shadow-md transition-all cursor-pointer"
          >
            Demo Al
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl border border-[#E7E7E2] text-[#252525] hover:bg-[#FAF7F2] transition-colors"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E7E7E2] px-4 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-[#252525] py-2 border-b border-zinc-100"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenStaffLogin(); }}
              className="w-full py-3 text-xs font-semibold text-[#252525] border border-[#E7E7E2] rounded-xl text-center hover:bg-[#FAF7F2]"
            >
              Personel Girişi
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 text-xs font-bold text-[#121212] bg-[#18F28D] rounded-xl text-center shadow-md"
            >
              Demo Al
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
