"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/nav";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-pine py-16 text-paper lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] w-full bg-gold"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,166,87,0.12),transparent_55%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-soft">
          Próxima conversación
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
          Comencemos por entender su objetivo.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/70">
          Cada cliente tiene una historia, un patrimonio y una meta
          diferente. Por eso, el primer paso es comprender su situación para
          definir, con criterio técnico y una visión estratégica, el camino
          más conveniente.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
         <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-pine-deep transition-colors hover:bg-gold-soft"
          >
            Quiero conversar con Stella Montoya
          </a>
          <a
          href={`mailto:${siteConfig.email}`}
            className="border border-paper/40 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper"
          >
            {siteConfig.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}