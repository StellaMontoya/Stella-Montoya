type HorizonLineProps = {
  className?: string;
  tone?: "gold" | "pine";
};

/**
 * Silueta estilizada del perfil montañoso del Valle de Aburrá, remate
 * visual del Hero y del Footer. Es el elemento de firma de la marca:
 * geografía real de Antioquia, no un ornamento genérico.
 */
export function HorizonLine({ className = "", tone = "gold" }: HorizonLineProps) {
  const stroke = tone === "gold" ? "var(--gold)" : "var(--pine)";

  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 140 L120 90 L200 118 L300 55 L360 100 L460 40 L540 95 L620 70 L700 110 L780 60 L880 100 L960 48 L1040 92 L1140 65 L1220 105 L1320 78 L1440 118 L1440 160 L0 160 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* pequeñas marcas de edificaciones sobre la línea, sugiriendo la ciudad en el valle */}
      <g stroke={stroke} strokeWidth="1.5" opacity="0.6">
        <path d="M640 110 L640 88 L656 88 L656 110" fill="none" />
        <path d="M820 100 L820 78 L834 78 L834 100" fill="none" />
        <path d="M1000 92 L1000 74 L1012 74 L1012 92" fill="none" />
      </g>
    </svg>
  );
}
