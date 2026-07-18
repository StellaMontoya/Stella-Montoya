"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Años de trayectoria" },
  { value: "4+", label: "Países con aliados estratégicos" },
  { value: "3 días", label: "Récord de cierre de venta" },
];

export function StatsBar() {
  return (
    <section className="bg-gold py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 lg:px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl text-pine-deep sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-pine-deep/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}