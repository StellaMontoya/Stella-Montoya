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
    body: "Base técnica junto a arquitectos y constructores de alto nivel.",
  },
  {
    label: "2021",
    title: "Certificación en Inversiones Inmobiliarias",
    body: "Florida, Estados Unidos.",
  },
  {
    label: "2024",
    title: "Marketing digital internacional",
    body: "Alianzas y clientes en el extranjero.",
  },
  {
    label: "2025",
    title: "Salón de la Fama Inmobiliaria",
    body: "Reconocimiento por crecimiento exponencial.",
  },
  {
    label: "Hoy",
    title: "Empresaria Inmobiliaria",
    body: "Inteligencia Patrimonial Inmobiliaria.",
  },
];

const segmentThickness = [3, 4, 6, 9];
const n = milestones.length;

export function Authority() {
  return (
    <section className="bg-[#D9D8D5] py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-gold px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#1C4932]">
            Crecimiento exponencial
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-xl leading-snug text-[#1C4932] sm:text-2xl">
            Más de una década de base técnica. Tres años de crecimiento
            exponencial.
          </h2>
        </motion.div>

        {/* Timeline desktop: puntos + línea centrados por columna */}
        <div className="relative mt-10 hidden h-6 md:block">
          {/* Segmentos de línea, van de centro a centro de columnas adyacentes */}
          {milestones.slice(1).map((_, i) => {
            const leftPct = ((i + 0.5) / n) * 100;
            const widthPct = (1 / n) * 100;
            return (
              <motion.div
                key={`line-${i}`}
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: (i + 1) * 0.15,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: `${leftPct}%`,
                  width: `${widthPct}%`,
                  height: `${segmentThickness[i]}px`,
                  top: "50%",
                  y: "-50%",
                  transformOrigin: "left",
                }}
                className="rounded-full bg-[#B8935A] shadow-sm"
              />
            );
          })}

          {/* Puntos, uno centrado por columna */}
          <div className="absolute inset-0 z-10 flex items-center">
            {milestones.map((item, index) => (
              <div key={item.label} className="flex flex-1 justify-center">
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
                    index === n - 1
                      ? "h-6 w-6 flex-none rounded-full bg-gold shadow-[0_0_0_6px_rgba(199,166,87,0.35)]"
                      : "h-3.5 w-3.5 flex-none rounded-full bg-gold"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Textos desktop: mismas columnas, alineadas bajo cada punto */}
        <div className="mt-3 hidden md:flex">
          {milestones.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
              className="flex-1 px-2 text-center"
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#1C4932]/70">
                {item.label}
              </p>
              <h3 className="mt-1 font-display text-sm leading-snug text-[#1C4932]">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#1C4932]/70">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Versión móvil: lista vertical simple */}
        <div className="mt-8 flex flex-col gap-5 md:hidden">
          {milestones.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div
                className={
                  index === n - 1
                    ? "mt-1 h-4 w-4 flex-none rounded-full bg-gold shadow-[0_0_0_4px_rgba(199,166,87,0.35)]"
                    : "mt-1 h-3 w-3 flex-none rounded-full bg-gold"
                }
              />
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#1C4932]/70">
                  {item.label}
                </p>
                <h3 className="mt-0.5 font-display text-sm leading-snug text-[#1C4932]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-[#1C4932]/70">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl rounded-lg bg-[#1C4932] p-4 text-center shadow-md"
        >
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold-soft">
            Red de aliados
          </p>
          <h3 className="mt-1.5 font-display text-base leading-snug text-paper">
            Un ecosistema estratégico, no un directorio de contactos
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-paper/70">
            Alianzas verificadas con colegas y especialistas que amplían el
            portafolio disponible, sin que usted pierda el control ni la
            trazabilidad del proceso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}