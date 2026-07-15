"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    label: "Trayectoria",
    title: "Más de 15 años estructurando operaciones inmobiliarias",
    body: "Compraventa, arriendo, avalúos y estudios de títulos para clientes locales e internacionales, con foco en cierres ágiles y en el menor tiempo posible.",
  },
  {
    label: "Método",
    title: "Cada decisión, respaldada por análisis técnico",
    body: "Urbanístico, legal y financiero antes que instinto — así se estructuran operaciones que cierran rápido porque están bien fundamentadas desde el inicio.",
  },
  {
    label: "Red de aliados",
    title: "Un ecosistema estratégico, no un directorio de contactos",
    body: "Alianzas verificadas con colegas y especialistas que amplían el portafolio disponible, sin que usted pierda el control ni la trazabilidad del proceso.",
  },
  {
    label: "Filosofía",
    title: "Orientar, nunca convencer",
    body: "La honestidad de decirle a un cliente cuando un inmueble no le conviene. La confianza se construye antes que los honorarios — y es lo que sostiene una trayectoria de clientes que regresan.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Authority() {
  return (
    <section id="autoridad" className="bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
              Por qué Stella Montoya
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Asesoría que se sostiene con criterio, no con presión.
            </h2>
          </motion.div>

          <div className="grid gap-px overflow-hidden border border-stone sm:grid-cols-2">
            {credentials.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-paper p-8 [box-shadow:inset_0_0_0_1px_var(--stone)]"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gold">
                  {item.label}
                </p>
                <h3 className="mt-4 font-display text-xl leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
