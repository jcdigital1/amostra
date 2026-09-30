import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getWhatsAppUrl } from "../config";
import { WhatsAppIconOfficial } from "./icons/WhatsAppIconOfficial";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    // Show tooltip once after 3 seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 5 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none select-none">
      {/* Speech Balloon Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-2 mr-1 pointer-events-auto bg-[#0C0C0C] text-white text-xs font-semibold py-2 px-3.5 rounded-2xl border border-[#25D366]/40 shadow-xl flex items-center gap-1.5"
          >
            <span>Bateu a fome?</span>
            <span className="text-sm">🍔</span>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0C0C0C] border-r border-b border-[#25D366]/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp oficial da hamburgueria"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto btn-premium w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] border border-white/20 flex items-center justify-center cursor-pointer active:scale-95"
      >
        <WhatsAppIconOfficial size={28} className="text-white" />
      </motion.a>
    </div>
  );
};
