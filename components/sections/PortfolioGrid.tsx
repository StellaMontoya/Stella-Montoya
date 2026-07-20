"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/nav";

type Property = {
  id_property: number;
  title: string;
  city_label: string;
  region_label: string;
  for_sale: string;
  for_rent: string;
  sale_price_label: string;
  rent_price_label: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  unit_area_label: string;
  status_on_page_label: string;
  main_image?: { url_big?: string; url?: string };
};

const BATCH_SIZE = 50;

function isDestacada(property: Property) {
  return property.status_on_page_label === "Outstanding";
}

export function PortfolioGrid() {
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let skip = 0;
      let total = Infinity;
      let collected: Property[] = [];
      try {
        while (collected.length < total) {
          const res = await fetch(`/api/wasi-properties?skip=${skip}&take=${BATCH_SIZE}`);
          const data = await res.json();
          if (data.status !== "success") {
            setError(true);
            return;
          }
          total = data.total ?? data.properties.length;
          collected = [...collected, ...data.properties];
          skip += BATCH_SIZE;
          if (data.properties.length === 0) break;
        }
        setAllProperties(collected);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const destacadas = allProperties.filter(isDestacada);
  const otras = allProperties.filter((p) => !isDestacada(p));
  const visibleProperties = showAll || destacadas.length === 0 ? allProperties : destacadas;

  if (loading) {
    return <p className="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-ink/50">Cargando propiedades...</p>;
  }

  if (error) {
    return (
      <p className="mt-12 text-sm text-ink/70">
        No fue posible cargar el portafolio en este momento. Escríbenos por{" "}
        <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">WhatsApp</a>{" "}
        y te compartimos las opciones disponibles.
      </p>
    );
  }

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProperties.map((property, index) => (
          <motion.a key={property.id_property}
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % BATCH_SIZE) * 0.05 }}
            className="group overflow-hidden rounded-xl border-[3px] border-gold bg-pine shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.06)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-pine-deep">
              {property.main_image?.url_big ? (
                <img src={property.main_image.url_big} alt={property.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : null}
              {isDestacada(property) && (
                <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-pine-deep">Destacada</span>
              )}
            </div>
            <div className="p-5 text-paper">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold-soft">
                {property.city_label}{property.region_label ? `, ${property.region_label}` : ""}
              </p>
              <h3 className="mt-2 font-display text-base leading-snug">{property.title}</h3>
              <p className="mt-2 text-xs text-paper/70">
                {property.bedrooms} alcobas · {property.bathrooms} baños · {property.area} {property.unit_area_label}
              </p>
              <p className="mt-3 font-display text-lg text-gold-soft">
                {property.for_sale === "true" ? property.sale_price_label : property.rent_price_label}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {!showAll && destacadas.length > 0 && otras.length > 0 && (
        <div className="mt-12 flex justify-center">
          <button type="button" onClick={() => setShowAll(true)} className="border border-ink/30 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-gold">
            Cargar más propiedades
          </button>
        </div>
      )}
    </>
  );
}