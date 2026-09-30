import React from "react";
import { motion } from "motion/react";
import { BURGER_CONFIG } from "../config";

export const Act03Detalhes: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-lg mx-auto md:max-w-2xl select-none">
      {/* Intro Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-[#FF8A00] font-bold"
        >
          DE PERTO É AINDA PIOR.
        </motion.p>
      </div>

      {/* Sequential Macro Details Grid */}
      <div className="space-y-8">
        {BURGER_CONFIG.details.map((detail, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={detail.word}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`card-editorial rounded-3xl p-5 flex flex-col sm:flex-row items-center gap-5 ${
                isEven ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Macro Photography Closeup (Zero distortion, 1:1 square crop) */}
              <div className="relative w-full sm:w-44 h-44 shrink-0 rounded-2xl overflow-hidden bg-black/60 border border-white/10">
                <img
                  src={detail.image}
                  alt={`Detalhe apetitoso: ${detail.word}`}
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>

              {/* Text Description */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                  {detail.word === "CHEDDAR." ? (
                    <span className="text-[#FF6500]">{detail.word}</span>
                  ) : (
                    detail.word
                  )}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#A9A9A9] leading-relaxed">
                  {detail.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Finalizing Punchline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
          AGORA DEU{" "}
          <span className="text-[#FF6500] drop-shadow-[0_0_20px_rgba(255,101,0,0.4)]">
            FOME, NÉ?
          </span>
        </p>
      </motion.div>
    </section>
  );
};
