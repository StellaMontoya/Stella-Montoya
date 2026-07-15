"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, siteConfig } from "@/config/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-paper/95 backdrop-blur-sm border-b border-stone"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className={`font-display text-xl tracking-tight transition-colors ${
            scrolled || menuOpen ? "text-ink" : "text-paper"
          }`}
        >
          Stella Montoya
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-10 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors hover:text-gold ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors ${
              scrolled
                ? "border-pine text-pine hover:bg-pine hover:text-paper"
                : "border-paper text-paper hover:bg-paper hover:text-pine"
            }`}
          >
            Agenda una consulta
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            scrolled || menuOpen ? "text-ink" : "text-paper"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-stone bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-stone py-4 font-display text-2xl text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-6 border border-pine px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.14em] text-pine"
              >
                Agenda una consulta
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
