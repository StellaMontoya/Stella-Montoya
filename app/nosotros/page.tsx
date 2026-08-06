"use client";

import { AboutStella } from "@/components/sections/AboutStella";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/nav";

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-32">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold">SOBRE STELLA</p>
          <h1 className="mt-4 font-display text-5xl text-pine">
            Inteligencia Patrimonial Inmobiliaria
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-ink/70 leading-relaxed">
            Más de 15 años construyendo confianza, generando valor y orientando cada decisión con criterio técnico y transparencia.
          </p>
        </div>

        <AboutStella />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-lg bg-gold/10 p-12 text-center border border-gold"
        >
          <p className="text-lg text-ink">
            ¿Tienes un proyecto en mente o una pregunta sobre tu próxima inversión?
          </p>
          
           <a href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-pine px-8 py-3 rounded text-paper font-bold hover:bg-gold transition-colors"
          >
            Contáctame por WhatsApp
          </a>
        </motion.div>
      </section>
    </main>
  );
}