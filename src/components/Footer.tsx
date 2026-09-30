import React from "react";
import { BURGER_CONFIG, getWhatsAppUrl } from "../config";
import { ArrowUp } from "lucide-react";
import { WhatsAppIconOfficial } from "./icons/WhatsAppIconOfficial";
import { InstagramIconOfficial } from "./icons/InstagramIconOfficial";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-24 px-4 sm:px-6 border-t border-white/10 bg-[#070707] text-center select-none">
      <div className="max-w-lg mx-auto flex flex-col items-center">
        {/* Official Logo */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Voltar ao topo"
          className="relative mb-3 cursor-pointer group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              src={BURGER_CONFIG.logoUrl}
              alt={BURGER_CONFIG.brandName}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = BURGER_CONFIG.logoFallback;
              }}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(255,101,0,0.25)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </button>

        {/* Tagline */}
        <h3 className="font-display text-lg font-bold uppercase text-white tracking-tight">
          {BURGER_CONFIG.brandName}
        </h3>
        <p className="text-xs text-[#FF8A00] font-medium mt-0.5">
          {BURGER_CONFIG.tagline}
        </p>

        {/* Action Links */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href={BURGER_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#D1D1D1] hover:text-[#FF8A00] transition-colors"
          >
            <InstagramIconOfficial size={16} />
            <span>Instagram</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#D1D1D1] hover:text-[#25D366] transition-colors"
          >
            <WhatsAppIconOfficial size={16} />
            <span>WhatsApp</span>
          </a>
          <span className="text-white/20">|</span>
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-[#A9A9A9] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Topo</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-4 border-t border-white/5 w-full text-[11px] text-[#71717A]">
          <p>© {new Date().getFullYear()} {BURGER_CONFIG.brandName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
