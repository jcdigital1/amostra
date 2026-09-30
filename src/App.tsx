/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from "react";
import { CinematicIntro } from "./components/CinematicIntro";
import { LivingBackground } from "./components/LivingBackground";
import { Act01Abertura } from "./components/Act01Abertura";
import { Act02PrimeiroImpacto } from "./components/Act02PrimeiroImpacto";
import { Act03Detalhes } from "./components/Act03Detalhes";
import { Act04Carrossel } from "./components/Act04Carrossel";
import { Act05QuebraCinematografica } from "./components/Act05QuebraCinematografica";
import { Act06ExperienciaFinal } from "./components/Act06ExperienciaFinal";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroFinished(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#FFFFFF] antialiased overflow-x-hidden selection:bg-[#FF6500] selection:text-black">
      {/* Cinematic Opening Intro */}
      {!introFinished && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Controlled Living Background */}
      <LivingBackground />

      {/* Main Storyline Experience */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* ATO 01 — Abertura */}
        <Act01Abertura />

        {/* ATO 02 — Primeiro Impacto */}
        <Act02PrimeiroImpacto />

        {/* ATO 03 — Detalhes */}
        <Act03Detalhes />

        {/* ATO 04 — Carrossel */}
        <Act04Carrossel />

        {/* ATO 05 — Quebra Cinematográfica */}
        <Act05QuebraCinematografica />

        {/* ATO 06 — Experiência Final */}
        <Act06ExperienciaFinal />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Floating Official WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
