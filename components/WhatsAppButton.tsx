import { CONTACT_INFO } from "@/lib/constants";

const DEFAULT_MESSAGE =
  "Hola Punto Hass, quiero cotizar palta Hass para mi negocio.";

function buildWaLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(message)}`;
}

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: "solid" | "outline-light" | "outline-dark";
  className?: string;
}

/**
 * Botón "Contactar ahora" — abre WhatsApp con un mensaje precargado.
 * Se usa junto a los botones "Cotizar ahora" como vía de contacto directo,
 * sin pasar por el formulario.
 */
export function WhatsAppButton({
  label = "Contactar ahora",
  message,
  variant = "outline-dark",
  className = "",
}: WhatsAppButtonProps) {
  const variantClasses: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
    solid: "bg-accent text-white hover:bg-[#a3692f]",
    "outline-light":
      "border border-secondary/40 text-secondary hover:bg-secondary hover:text-primary",
    "outline-dark": "border border-primary/25 text-primary hover:bg-primary hover:text-secondary",
  };

  return (
    <a
      href={buildWaLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.28 1.65 6.06L4 29l8.18-2.14a12.9 12.9 0 0 0 3.84.58h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.37 22.65 3 16.02 3Zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-4.85 1.27 1.3-4.74-.24-.39a9.86 9.86 0 0 1-1.52-5.27C5.29 9.5 10.13 4.9 16.02 4.9c2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 6.98c0 5.85-4.85 10.62-10.91 10.62Zm5.98-7.95c-.33-.16-1.94-.96-2.24-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.86-1.63-1.93-1.82-2.25-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.16 1.13-1.16 2.75s1.19 3.19 1.36 3.41c.16.22 2.34 3.57 5.67 5.01.79.34 1.41.55 1.89.7.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.22-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  );
}
