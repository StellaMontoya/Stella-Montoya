"use client";

import { motion } from "framer-motion";

type Milestone = {
  label: string;
  title: string;
  body: string;
};

const milestones: Milestone[] = [
  {
    label: "Inicios",
    title: "Primeros pasos en el sector inmobiliario",
    body: "Base técnica construida junto a arquitectos y constructores de alto nivel.",
  },
  {
    label: "2021",
    title: "Certificación en Inversiones Inmobiliarias",
    body: "Florida, Estados Unidos.",
  },
  {
    label: "2024",
    title: "Marketing digital inmobiliario internacional",
    body: "Alianzas estratégicas y clientes en el extranjero.",
  },
  {
    label: "2025",
    title: "Salón de la Fama Inmobiliaria",
    body: "Reconocimiento por crecimiento exponencial en el sector.",
  },
  {
    label: "Hoy",
    title: "Empresaria Inmobiliaria",
    body: "Inteligencia Patrimonial Inmobiliaria.",
  },
];

const segmentThickness = [2, 3, 4, 6];

export function Authority() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pine via-pine to-gold py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-soft">
            Crecimiento exponencial
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            Más de una década de base técnica. Tres años de crecimiento
            exponencial.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row md:items-start">
          {milestones.map((item, index) => (
            <div
              key={item.label}
              className="flex flex-1 flex-col items-start md:items-center"
            >
              <div className="flex w-full items-center md:flex-col">
                {index > 0 && (
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    style={{
                      height: `${segmentThickness[index - 1]}px`,
                      transformOrigin: "left",
                    }}
                    className="hidden flex-1 rounded-full bg-gold md:block"
                  />
                )}

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    index === milestones.length - 1
                      ? "z-10 h-6 w-6 flex-none rounded-full bg-gold shadow-[0_0_0_6px_rgba(199,166,87,0.25)]"
                      : "z-10 h-3.5 w-3.5 flex-none rounded-full bg-gold-soft"
                  }
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="mt-4 max-w-[220px] pb-8 md:pb-0 md:text-center"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gold-soft">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-base leading-snug text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-paper/70">
                  {item.body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-2xl rounded-lg border border-paper/20 bg-pine-deep/40 p-8 text-center backdrop-blur-sm"
        >
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gold-soft">
            Red de aliados
          </p>
          <h3 className="mt-3 font-display text-xl leading-snug text-paper">
            Un ecosistema estratégico, no un directorio de contactos
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            Alianzas verificadas con colegas y especialistas que amplían el
            portafolio disponible, sin que usted pierda el control ni la
            trazabilidad del proceso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}