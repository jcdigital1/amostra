import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BURGER_CONFIG } from "../config";

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 150); // Soft orange reflection
    const t2 = setTimeout(() => setStep(2), 500); // Logo appears cleanly
    const t3 = setTimeout(() => setStep(3), 900); // Subtle illumination sweeps across
    const t4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 350);
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden select-none"
        >
          {/* Subtle warm center reflection */}
          {step >= 1 && (
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-60 h-60 rounded-full bg-gradient-radial from-[#FF6500]/30 to-transparent blur-3xl pointer-events-none"
            />
          )}

          {/* Official Logo with clean reveal */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center p-6"
            >
              <div className="relative w-40 h-40 overflow-hidden flex items-center justify-center">
                <img
                  src={BURGER_CONFIG.logoUrl}
                  alt={BURGER_CONFIG.brandName}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BURGER_CONFIG.logoFallback;
                  }}
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(255,101,0,0.3)]"
                />

                {/* Discrete illumination beam passing across */}
                {step >= 3 && (
                  <motion.div
                    initial={{ x: "-130%", opacity: 0 }}
                    animate={{ x: "160%", opacity: 0.7 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
