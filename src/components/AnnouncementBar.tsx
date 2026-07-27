import React from 'react';
import { CircleDot, ArrowUpRight } from 'lucide-react';

interface AnnouncementBarProps {
  onAskClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onAskClick }) => {
  return (
    <div className="bg-[#252525] text-white text-xs py-2 px-3 sm:px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 text-left">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#18F28D] text-[#252525]">
            YENİ
          </span>
          <span className="min-w-0 text-[10px] leading-4 text-zinc-300 font-medium tracking-tight sm:text-xs">
            İşletme değil misin? Yakında fitbase app ile dersini rezerve et
          </span>
          <ArrowUpRight className="hidden w-3.5 h-3.5 shrink-0 text-[#18F28D] sm:inline-block" />
        </div>

        <button
          onClick={onAskClick}
          className="min-h-11 shrink-0 px-3 py-1 text-[11px] font-medium border border-zinc-600 rounded-full hover:border-[#18F28D] hover:text-[#18F28D] transition-colors cursor-pointer whitespace-nowrap"
        >
          Bize Sor
        </button>
      </div>
    </div>
  );
};
