"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/nav";
import { HorizonLine } from "@/components/ui/HorizonLine";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-pine text-paper">
      {/* atmósfera sutil, sin gradientes genéricos: un velo radial muy tenue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,166,87,0.14),transparent_60%)]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 lg:px-10">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.22em] text-gold-soft"
        >
          {siteConfig.location}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.12}
          variants={fadeUp}
          className="mt-6 max-w-3xl font-display text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl"
        >
          El criterio técnico
          <br />
          detrás de cada
          <br />
          decisión inmobiliaria.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.26}
          variants={fadeUp}
          className="mt-8 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
        >
          Quince a veinte años asesorando compra, venta, avalúos y estudios de
          títulos en el Valle de Aburrá — con la honestidad de decirle a un
          cliente cuando algo no le conviene.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-pine-deep transition-colors hover:bg-gold-soft"
          >
            Agenda una consulta
          </a>
          <a
            href="/portafolio"
            className="border border-paper/40 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper"
          >
            Ver portafolio
          </a>
        </motion.div>
      </div>

      <div className="relative mt-20 border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-paper/50 lg:px-10">
          <span>Compraventa · Avalúos · Estudios de títulos</span>
          <span className="hidden sm:inline">
            Asesoría consultiva, sin presión
          </span>
        </div>
        <HorizonLine tone="gold" className="h-24 w-full opacity-70" />
      </div>
    </section>
  );
}
