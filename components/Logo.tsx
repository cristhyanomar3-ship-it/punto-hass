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
 * Ambas variantes usan el archivo oficial: "on-cream" es el PNG original
 * (verde sobre crema), "on-green" es su inversión exacta de color
 * (public/logo/isotipo-on-green.png, generada por swap de canal desde el
 * mismo archivo — mismo trazo, mismos colores de marca invertidos).
 */
export function Logo({ variant = "lockup", theme = "on-cream", className = "" }: LogoProps) {
  const textColor = theme === "on-cream" ? "text-primary" : "text-secondary";
  const src = theme === "on-cream" ? "/logo/isotipo.png" : "/logo/isotipo-on-green.png";

  const mark = (
    <Image
      src={src}
      alt="Isotipo Punto Hass"
      width={64}
      height={64}
      className="h-8 w-8 shrink-0 rounded-full"
      priority
    />
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
