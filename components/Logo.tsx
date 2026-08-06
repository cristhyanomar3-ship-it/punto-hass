type LogoProps = {
  variant?: "mark" | "lockup";
  /** "on-cream": verde sobre crema. "on-green": crema sobre verde. */
  theme?: "on-cream" | "on-green";
  className?: string;
};

/**
 * Isotipo de Punto Hass: corte transversal de palta reducido a geometría —
 * un círculo por el fruto, una cumbre de dos picos por el carozo/origen andino.
 * Un solo color por aplicación, tal como define el manual de marca.
 */
export function Logo({ variant = "lockup", theme = "on-cream", className = "" }: LogoProps) {
  const circleFill = theme === "on-cream" ? "#2F4A3D" : "#F2ECDD";
  const peakFill = theme === "on-cream" ? "#F2ECDD" : "#2F4A3D";
  const textColor = theme === "on-cream" ? "text-primary" : "text-secondary";

  const mark = (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8 shrink-0"
      role="img"
      aria-label="Isotipo Punto Hass"
    >
      <circle cx="24" cy="24" r="24" fill={circleFill} />
      <path d="M13 31Q19 14 24 24Q29 14 35 31Z" fill={peakFill} />
    </svg>
  );

  if (variant === "mark") {
    return <span className={className}>{mark}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className={`font-display font-semibold tracking-tight text-lg ${textColor}`}>
        PUNTO HASS
      </span>
    </span>
  );
}
