import Link from "next/link";
import { navItems, siteConfig } from "@/config/nav";
import { HorizonLine } from "@/components/ui/HorizonLine";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-pine-deep text-paper">
      <HorizonLine
        tone="gold"
        className="absolute inset-x-0 top-0 h-16 w-full opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">{siteConfig.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              {siteConfig.tagline}. Asesoría técnica, honesta y sin presión de
              venta en el Valle de Aburrá.
            </p>
            <div className="mt-6 flex gap-5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/70">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                TikTok
              </a>
            </div>
          </div>

          <nav aria-label="Navegación de pie de página">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-gold">
              Navegación
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-gold">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/80">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-gold">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-paper/60">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            Portafolio de inventario gestionado por{" "}
            <span className="text-paper/70">Luzes Inmobiliarias</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
