"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutStella() {
  return (
    <section className="bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/stella-retrato.jpg"
                alt="Stella Montoya, asesora inmobiliaria"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 hidden h-full w-full border border-gold/50 sm:block"
              style={{ zIndex: -1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
              Sobre Stella
            </p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Quince años acompañando decisiones, no solo cerrando negocios.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70">
              Soy Stella Montoya, asesora inmobiliaria en ventas locales e
              internacionales. Brindo acompañamiento estratégico de principio
              a fin — integrando marketing digital, formación constante y
              criterio técnico — para conectar a cada cliente con su mejor
              inversión.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Trabajo con la misma exigencia sin importar si el cliente está
              en Envigado o al otro lado del mundo: análisis técnico primero,
              conveniencia del cliente por encima del cierre.
            </p>
            <p className="mt-8 font-display text-2xl italic text-pine">
              — Stella Montoya
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}