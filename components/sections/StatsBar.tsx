"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: 15, suffix: "+", label: "Años de trayectoria" },
  { target: 4, suffix: "+", label: "Países con aliados estratégicos" },
  { target: 3, suffix: " días", label: "Récord de cierre de venta" },
];

function Counter({ target, suffix, prefix }: Stat) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2400;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <p ref={ref} className="font-display text-4xl text-pine-deep sm:text-5xl">
      {prefix}
      {value}
      {suffix}
    </p>
  );
}

export function StatsBar() {
  return (
    <section className="bg-gold py-6">
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
            <Counter {...stat} />
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-pine-deep/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}