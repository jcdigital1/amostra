import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { BURGER_CONFIG, getWhatsAppUrl } from "../config";
import { WhatsAppIconOfficial } from "./icons/WhatsAppIconOfficial";

export const Act01Abertura: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("ato-02");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-6 pb-8 px-4 sm:px-6 max-w-lg mx-auto md:max-w-2xl text-center select-none">
      {/* Official Logo Header */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center pt-2"
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          <img
            src={BURGER_CONFIG.logoUrl}
            alt={BURGER_CONFIG.brandName}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = BURGER_CONFIG.logoFallback;
            }}
            className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(255,101,0,0.3)]"
          />
        </div>
      </motion.header>

      {/* Main Headline */}
      <div className="my-auto py-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.05] text-white"
        >
          PREPARADO<br />
          PRA FICAR<br />
          COM{" "}
          <span className="text-[#FF6500] drop-shadow-[0_0_24px_rgba(255,101,0,0.4)]">
            FOME?
          </span>
        </motion.h1>

        {/* Hero Burger emerging from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-[320px] sm:max-w-[380px] my-5 flex items-center justify-center"
        >
          {/* Subtle warm backlight glow */}
          <div className="absolute w-56 h-56 rounded-full bg-gradient-radial from-[#FF6500]/22 to-transparent blur-3xl pointer-events-none" />

          <img
            src="/assets/burgers/burger-01.webp"
            alt="Burger artesanal suculento com pão brioche dourado e queijo derretido"
            className="relative w-full h-auto object-contain filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.95)]"
            loading="eager"
          />
        </motion.div>

        {/* Primary CTA Button: Official WhatsApp + PEDIR AGORA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-xs"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium w-full gap-2.5 py-4 px-6 rounded-2xl bg-[#FF6500] hover:bg-[#FF7700] text-black font-display font-bold text-sm uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(255,101,0,0.6)] cursor-pointer"
          >
            <WhatsAppIconOfficial size={22} className="text-black" />
            <span>PEDIR AGORA</span>
          </a>
        </motion.div>
      </div>

      {/* Discrete Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-[#A9A9A9] tracking-wider uppercase font-medium cursor-pointer hover:text-white transition-colors"
      >
        <span>Role para descobrir</span>
        <ChevronDown className="w-4 h-4 text-[#FF8A00] animate-bounce" />
      </motion.button>
    </section>
  );
};
