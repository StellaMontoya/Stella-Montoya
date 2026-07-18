"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutStella() {
  return (
    <section className="bg-paper py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/stella-retrato.jpg"
                alt="Stella Montoya, especialista en inteligencia patrimonial inmobiliaria"
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
              Inteligencia Patrimonial Inmobiliaria
            </p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/50">
              Conoce a Stella Montoya
            </p>
            <h2 className="mt-4 max-w-xl font-display text-2xl leading-tight text-ink sm:text-3xl">
              El patrimonio no necesita promesas. Necesita criterio.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70 text-justify">
              Cada decisión inmobiliaria tiene el poder de proteger o poner en
              riesgo el patrimonio de una persona, una familia o una empresa.
              Por eso, antes de recomendar una compra, una venta o una
              inversión, analizo cada operación con el mismo nivel de
              exigencia: avalúos, estudios de títulos, análisis del mercado y
              una visión estratégica que permita tomar decisiones con
              seguridad y confianza.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70 text-justify">
              Creo que una buena asesoría no consiste en cerrar más negocios,
              sino en ayudar a las personas a tomar la decisión correcta.
              Cuando una inversión representa un riesgo, también lo digo. Y
              cuando encuentro una verdadera oportunidad, acompaño cada paso
              con el mismo compromiso y responsabilidad.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70 text-justify">
              Porque proteger el patrimonio de quienes confían en mí siempre
              estará por encima de cerrar una negociación.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}