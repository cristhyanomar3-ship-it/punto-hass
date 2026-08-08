import Image from "next/image";

type LogoProps = {
  variant?: "mark" | "lockup";
  /** "on-cream": verde sobre crema (isotipo oficial). "on-green": crema sobre verde. */
  theme?: "on-cream" | "on-green";
  className?: string;
};

/**
 * Isotipo de Punto Hass: corte transversal de palta reducido a geometría —
 * un círculo por el fruto, una cumbre de dos picos por el carozo/origen andino.
 * Un solo color por aplicación, tal como define el manual de marca.
 *
 * "on-cream" usa el archivo oficial (public/logo/isotipo.png). "on-green" usa
 * la versión vectorial invertida — no tenemos un PNG oficial en esa variante.
 */
export function Logo({ variant = "lockup", theme = "on-cream", className = "" }: LogoProps) {
  const textColor = theme === "on-cream" ? "text-primary" : "text-secondary";

  const mark =
    theme === "on-cream" ? (
      <Image
        src="/logo/isotipo.png"
        alt="Isotipo Punto Hass"
        width={64}
        height={64}
        className="h-8 w-8 shrink-0 rounded-full"
        priority
      />
    ) : (
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8 shrink-0"
        role="img"
        aria-label="Isotipo Punto Hass"
      >
        <circle cx="24" cy="24" r="24" fill="#F2ECDD" />
        <path d="M13 31Q19 14 24 24Q29 14 35 31Z" fill="#2F4A3D" />
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
