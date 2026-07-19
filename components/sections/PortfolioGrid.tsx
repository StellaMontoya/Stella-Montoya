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

const PAGE_SIZE = 9;

export function PortfolioGrid() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const loadPage = async (skip: number) => {
    const res = await fetch(
      `/api/wasi-properties?skip=${skip}&take=${PAGE_SIZE}`
    );
    const data = await res.json();
    if (data.status !== "success") {
      setError(true);
      return;
    }
    setTotal(data.total ?? 0);
    setProperties((prev) =>
      skip === 0 ? data.properties : [...prev, ...data.properties]
    );
  };

  useEffect(() => {
    loadPage(0).finally(() => setLoading(false));
  }, []);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await loadPage(properties.length);
    setLoadingMore(false);
  };

  if (loading) {
    return (
      <p className="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-ink/50">
        Cargando propiedades...
      </p>
    );
  }

  if (error) {
    return (
      <p className="mt-12 text-sm text-ink/70">
        No fue posible cargar el portafolio en este momento. Escríbenos por{" "}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold"
        >
          WhatsApp
        </a>{" "}
        y te compartimos las opciones disponibles.
      </p>
    );
  }

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <motion.a
            key={property.id_property}
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % PAGE_SIZE) * 0.05 }}
            className="group overflow-hidden rounded-xl border-[3px] border-gold bg-pine shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-pine-deep">
              {property.main_image?.url_big ? (
                <img
                  src={property.main_image.url_big}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}
              {property.status_on_page_label === "Outstanding" && (
                <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-pine-deep">
                  Destacada
                </span>
              )}
            </div>
            <div className="p-5 text-paper">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold-soft">
                {property.city_label}
                {property.region_label ? `, ${property.region_label}` : ""}
              </p>
              <h3 className="mt-2 font-display text-base leading-snug">
                {property.title}
              </h3>
              <p className="mt-2 text-xs text-paper/70">
                {property.bedrooms} alcobas · {property.bathrooms} baños ·{" "}
                {property.area} {property.unit_area_label}
              </p>
              <p className="mt-3 font-display text-lg text-gold-soft">
                {property.for_sale === "true"
                  ? property.sale_price_label
                  : property.rent_price_label}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {properties.length < total && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="border border-ink/30 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-gold disabled:opacity-50"
          >
            {loadingMore ? "Cargando..." : "Cargar más propiedades"}
          </button>
        </div>
      )}
    </>
  );
}