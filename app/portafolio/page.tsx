import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = buildMetadata({
  title: "Portafolio",
  alternates: { canonical: "/portafolio" },
});

export default function PortafolioPage() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
          Portafolio
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
          Inventario activo, con criterio técnico verificado.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
          Propiedades actualizadas directamente desde nuestro sistema de
          gestión — locales e internacionales, en venta y arriendo.
        </p>

        <PortfolioGrid />
      </div>
    </section>
  );
}