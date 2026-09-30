import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const LivingBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Subtle, controlled vertical shift for the single soft warm ambient bloom
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1 gentle warm orange ambient radial bloom that shifts softly with scroll */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-radial from-[#FF6500]/12 via-[#FF8A00]/4 to-transparent blur-[110px]"
      />

      {/* Discrete warm reflector at bottom edge */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#FF6500]/8 blur-[100px] rounded-full" />

      {/* Subtle organic noise/texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};
