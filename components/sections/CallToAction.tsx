"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/nav";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-pine-deep py-28 text-paper lg:py-36">
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
        <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
          Hablemos de su próxima decisión inmobiliaria.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/70">
          Sin formularios largos ni presión de venta: una conversación directa
          para entender su objetivo y decirle, con criterio técnico, si
          conviene o no seguir adelante.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-pine-deep transition-colors hover:bg-gold-soft"
          >
            Escribir por WhatsApp
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
