import Link from "next/link";
import { Logo } from "./Logo";
import {
  NAV_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  LEGAL_LINKS,
  BRAND_PROMISE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <Logo theme="on-green" />
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-secondary/70">
            {BRAND_PROMISE}
          </p>
        </div>

        <div>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-technical text-secondary/50">
            Navegación
          </p>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-secondary/85 transition-colors duration-200 ease-out hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-technical text-secondary/50">
            Contacto
          </p>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-secondary/85">
            <li>
              Tel / WhatsApp:{" "}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 ease-out hover:text-accent"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="transition-colors duration-200 ease-out hover:text-accent"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="text-secondary/60">{CONTACT_INFO.address}</li>
          </ul>
          <div className="mt-5 flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                className="font-sans text-sm text-secondary/85 transition-colors duration-200 ease-out hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-technical text-secondary/50">
            Legal
          </p>
          <ul className="flex flex-col gap-2.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-secondary/85 transition-colors duration-200 ease-out hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary/10">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-6 font-sans text-xs text-secondary/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Punto Hass. Todos los derechos reservados.</p>
          <p>Proveedor B2B de palta Hass — Chile</p>
        </div>
      </div>
    </footer>
  );
}
