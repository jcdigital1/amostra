import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BURGER_CONFIG, getWhatsAppUrl } from "../config";
import { WhatsAppIconOfficial } from "./icons/WhatsAppIconOfficial";
import { InstagramIconOfficial } from "./icons/InstagramIconOfficial";

export const Act06ExperienciaFinal: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-lg mx-auto md:max-w-3xl select-none">
      {/* Visual Composition: Burger + Headline */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Burger Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 max-w-[320px] rounded-3xl overflow-hidden card-editorial border border-white/10"
        >
          <img
            src="/assets/burgers/burger-07.webp"
            alt="Burger artesanal suculento Burger House"
            className="w-full h-auto object-cover filter contrast-[1.05]"
            loading="lazy"
          />
        </motion.div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-[1.05]"
          >
            BATEU<br />
            <span className="text-[#FF6500]">A FOME?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-sm text-[#A9A9A9] font-medium"
          >
            Seu próximo burger está a poucos cliques.
          </motion.p>

          {/* Big Action Button: PEDIR PELO WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6"
          >
            <a
              href={getWhatsAppUrl("Olá! Gostaria de fazer meu pedido pelo WhatsApp 🍔")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full gap-3 py-4 px-6 rounded-2xl bg-[#FF6500] hover:bg-[#FF7700] text-black font-display font-bold text-sm uppercase tracking-wider shadow-[0_8px_24px_rgba(255,101,0,0.6)] cursor-pointer"
            >
              <WhatsAppIconOfficial size={22} className="text-black" />
              <span>PEDIR PELO WHATSAPP</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Two Secondary Channel Buttons (NO phone number, NO @ handle, NO URL displayed) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10"
      >
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium card-editorial p-4 rounded-2xl flex items-center justify-between text-white hover:border-[#25D366]/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
              <WhatsAppIconOfficial size={20} />
            </div>
            <span className="font-display font-bold text-sm tracking-wide">WHATSAPP</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#A9A9A9]" />
        </a>

        <a
          href={BURGER_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium card-editorial p-4 rounded-2xl flex items-center justify-between text-white hover:border-[#E1306C]/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E1306C]/15 flex items-center justify-center text-[#E1306C]">
              <InstagramIconOfficial size={20} />
            </div>
            <span className="font-display font-bold text-sm tracking-wide">INSTAGRAM</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#A9A9A9]" />
        </a>
      </motion.div>
    </section>
  );
};
