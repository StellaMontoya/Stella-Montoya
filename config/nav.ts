export const siteConfig = {
  name: "Stella Montoya",
    description:
    "Inteligencia Patrimonial Inmobiliaria en el Valle de Aburrá: avalúos, estudios de títulos, análisis de mercado y estrategia patrimonial, con criterio técnico y transparencia absoluta.",
  url: "https://stellamontoya.com",
  locale: "es_CO",
  phoneDisplay: "+57 310 879 1852",
  phoneHref: "+573108791852",
  whatsapp: "https://wa.me/573108791852",
  email: "luzesinmobiliaria@gmail.com",
  portfolioUrl: "https://luzesinmobiliarias.com/",
  instagram: "https://www.instagram.com/stellamontoya_inmobiliaria",
  tiktok: "https://www.tiktok.com/@stellamontoyainmobiliari",
  location: "Valle de Aburrá · Oriente Antioqueño · Alcance Internacional",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];
