"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Service = {
  label: string;
  title: string;
  body: string;
  certified?: boolean;
};

const services: Service[] = [
  {
    label: "Avalúos",
    title: "Avalúos comerciales con metodología técnica",
    body: "Comparativo de mercado, método de ingresos y de costos — el mismo rigor que exige un banco, aplicado a cada inmueble.",
    certified: true,
  },
  {
    label: "Estudios de títulos",
    title: "Estudios de títulos y saneamiento",
    body: "Verificación jurídica completa: folios, gravámenes, medidas cautelares y tradición del inmueble.",
  },
  {
    label: "Promesas de compraventa",
    title: "Redacción de Promesas de compraventa",
    body: "Documentos privados estructurados con base en la normatividad colombiana vigente, con cláusulas de arras y condición resolutoria bien definidas.",
  },
  {
    label: "Marketing digital inmobiliario",
    title: "Marketing digital inmobiliario",
    body: "Estrategia de posicionamiento, campañas y contenido diseñadas para que cada inmueble llegue al inversionista correcto — local o internacional — no solo a más tráfico.",
    certified: true,
  },
  {
    label: "Inteligencia patrimonial con IA",
    title: "Criterio técnico potenciado por IA",
    body: "La inteligencia artificial fortalece mi capacidad de análisis, pero nunca reemplaza el juicio profesional. Cada recomendación integra experiencia, datos y tecnología para decisiones patrimoniales más precisas.",
    certified: true,
  },
];

export function ServicesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-pine py-10 text-paper lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-soft">
              Servicios
            </p>
            <h2 className="mt-4 max-w-xl font-display text-2xl leading-tight sm:text-3xl">
              Criterio técnico y respaldo verificable.
            </h2>
          </motion.div>

          <div className="flex items-stretch gap-3 self-stretch">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              disabled={!canScrollLeft}
              aria-label="Ver servicio anterior"
              className="flex w-12 items-center justify-center rounded-md border-2 border-paper/30 text-paper shadow-md transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-paper/30 disabled:hover:text-paper"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              disabled={!canScrollRight}
              aria-label="Ver siguiente servicio"
              className="flex w-12 items-center justify-center rounded-md border-2 border-paper/30 text-paper shadow-md transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-paper/30 disabled:hover:text-paper"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => (
            <div
              key={service.title}
              data-card
              className="w-[85%] flex-none snap-start rounded-lg border-2 border-gold/40 bg-pine-deep p-6 shadow-xl sm:w-[60%] lg:w-[31%]"
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gold-soft">
                  {service.label}
                </p>
                {service.certified && (
                  <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-pine-deep">
                    Certificado
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-display text-xl leading-snug">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/70 text-justify">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}