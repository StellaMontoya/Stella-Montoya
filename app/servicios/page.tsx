"use client";

import { ServicesCarousel } from "@/components/sections/ServicesCarousel";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-32">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold">SERVICIOS</p>
          <h1 className="mt-4 font-display text-5xl text-pine">
            Asesoría inmobiliaria integral
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-ink/70 leading-relaxed">
            Más de 15 años orientando inversores, familias y emprendedores. Criterio técnico, transparencia y resultados verificables.
          </p>
        </div>

        <ServicesCarousel />
      </section>
    </main>
  );
}