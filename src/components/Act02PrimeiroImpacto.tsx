import React from "react";
import { motion } from "motion/react";

export const Act02PrimeiroImpacto: React.FC = () => {
  return (
    <section
      id="ato-02"
      className="relative py-28 px-4 sm:px-6 max-w-lg mx-auto md:max-w-2xl text-center select-none overflow-hidden"
    >
      {/* Title Sequence */}
      <div className="mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]"
        >
          NÃO PRECISA<br />
          EXPLICAR.
        </motion.h2>

        {/* Visual pause */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-12 h-[2px] bg-[#FF6500]/60 mx-auto my-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FF8A00]"
        >
          É SÓ OLHAR.
        </motion.p>
      </div>

      {/* Single Protagonist Burger Photo: Revealed cleanly with warm backlight glow */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="relative w-full max-w-[380px] sm:max-w-[440px] mx-auto rounded-3xl overflow-hidden card-editorial border border-white/10"
      >
        {/* Warm backlight glow strictly confined to card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6500]/18 rounded-full blur-3xl pointer-events-none" />

        <img
          src="/assets/burgers/burger-02.webp"
          alt="Smash burger artesanal com queijo derretido e bacon crocante"
          className="relative w-full h-auto object-cover filter contrast-[1.04]"
          loading="lazy"
        />

        {/* Subtle bottom gradient for editorial finish */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-4 inset-x-4 text-center">
          <span className="text-[12px] font-display font-semibold uppercase tracking-wider text-[#D1D1D1]">
            Blend Angus 180g • Pão Brioche Selado • Bacon Artesanal
          </span>
        </div>
      </motion.div>
    </section>
  );
};
