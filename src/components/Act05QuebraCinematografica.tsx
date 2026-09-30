import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../config";
import { WhatsAppIconOfficial } from "./icons/WhatsAppIconOfficial";

export const Act05QuebraCinematografica: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-28 px-4 sm:px-6 max-w-lg mx-auto md:max-w-2xl text-center select-none bg-[#050505]">
      {/* Small orange line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="h-[2px] bg-[#FF6500] mx-auto mb-8"
      />

      {/* First phrase */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]"
      >
        TEM FOME<br />
        QUE NÃO ESPERA.
      </motion.h2>

      {/* Burger photo appearing smoothly */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-[320px] sm:max-w-[380px] my-8 rounded-3xl overflow-hidden card-editorial border border-white/10"
      >
        <img
          src="/assets/burgers/burger-08.webp"
          alt="Hambúrguer artesanal na brasa fumegante"
          className="w-full h-auto object-cover filter contrast-[1.05]"
          loading="lazy"
        />
      </motion.div>

      {/* Second phrase: E NEM PRECISA. */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FF8A00]"
      >
        E NEM PRECISA.
      </motion.p>

      {/* Button: PEDIR AGORA → */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-8"
      >
        <a
          href={getWhatsAppUrl("Olá! Vi o site e quero fazer meu pedido agora 🍔🔥")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium gap-3 py-4 px-8 rounded-2xl bg-[#FF6500] hover:bg-[#FF7700] text-black font-display font-bold text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(255,101,0,0.5)] cursor-pointer"
        >
          <WhatsAppIconOfficial size={20} className="text-black" />
          <span>PEDIR AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
