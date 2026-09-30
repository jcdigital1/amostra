import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BURGER_CONFIG, BurgerItem, getWhatsAppUrl } from "../config";
import { WhatsAppIconOfficial } from "./icons/WhatsAppIconOfficial";

export const Act04Carrossel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const burgers = BURGER_CONFIG.burgers;
  const total = burgers.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Safe touch listeners that NEVER block vertical scroll
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Only swipe if horizontal motion was dominant (prevents blocking page scroll)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setTimeout(() => setIsPaused(false), 2500);
  };

  const currentBurger = burgers[activeIndex];

  return (
    <section id="burgers" className="relative py-28 px-4 sm:px-6 max-w-lg mx-auto md:max-w-2xl text-center select-none overflow-hidden">
      {/* Title */}
      <div className="mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.25em] text-[#FF8A00] font-bold"
        >
          CARDÁPIO AUTORAL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mt-1 leading-[1.05]"
        >
          QUAL VAI<br />
          <span className="text-[#FF6500]">SER O SEU?</span>
        </motion.h2>
      </div>

      {/* Single Stable Carousel Stage (Zero layout jump, zero horizontal overflow) */}
      <div
        className="relative w-full max-w-[360px] sm:max-w-[420px] mx-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Burger anterior"
          className="btn-premium absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0C0C0C] hover:bg-[#FF6500] hover:text-black text-white border border-white/15 flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          type="button"
          aria-label="Próximo burger"
          className="btn-premium absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0C0C0C] hover:bg-[#FF6500] hover:text-black text-white border border-white/15 flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Active Burger Card */}
        <motion.div
          key={currentBurger.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="card-editorial rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-h-[460px] border border-white/10"
        >
          {/* Top Tag & Indicator */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 rounded-full bg-[#FF6500]/15 border border-[#FF6500]/30 text-[10px] font-display font-bold uppercase tracking-wider text-[#FF8A00]">
              {currentBurger.badge || "Especial da Casa"}
            </span>
            <span className="text-xs font-semibold text-[#A9A9A9]">
              {activeIndex + 1} de {total}
            </span>
          </div>

          {/* Photo with fixed 16:10 aspect ratio - Never deformed */}
          <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-black/60 my-2">
            <img
              src={currentBurger.image}
              alt={currentBurger.name}
              className="w-full h-full object-cover filter contrast-[1.04]"
              loading="lazy"
            />
          </div>

          {/* Name & One-line Description */}
          <div className="text-left mt-3">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {currentBurger.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#A9A9A9] leading-relaxed line-clamp-2">
              {currentBurger.description}
            </p>
          </div>

          {/* WhatsApp Direct Order Button */}
          <div className="mt-5 pt-3 border-t border-white/10">
            <a
              href={getWhatsAppUrl(`Olá! Gostaria de pedir o *${currentBurger.name}* 🍔`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full gap-2.5 py-3.5 px-4 rounded-xl bg-[#FF6500] hover:bg-[#FF7700] text-black font-display font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
            >
              <WhatsAppIconOfficial size={18} className="text-black" />
              <span>PEDIR ESTE BURGER</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {burgers.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            type="button"
            aria-label={`Ver burger ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === i
                ? "w-6 h-2 bg-[#FF6500]"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
