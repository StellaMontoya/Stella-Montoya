import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/config/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gold text-paper">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] w-full bg-[#D9D8D5]"
      />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/logo-blanco.png"
              alt="Stella Montoya"
              width={180}
              height={87}
              className="mx-auto h-auto w-40 lg:mx-0"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper">
              Criterio técnico y transparencia en cada decisión
              patrimonial.
            </p>
            <div className="mt-6 flex gap-5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine-deep"
              >
                Instagram
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine-deep"
              >
                TikTok
              </a>
            </div>
          </div>

          <nav aria-label="Navegación de pie de página">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-pine-deep">
              Navegación
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper hover:text-pine-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-pine-deep">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-pine-deep">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-pine-deep">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-paper">
                Cobertura nacional e internacional
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/30 pt-6 text-xs text-paper sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            Portafolio de inventario gestionado por{" "}
            <span className="text-paper">Luzes Inmobiliarias</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}