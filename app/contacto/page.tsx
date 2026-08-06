import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { QuoteForm } from "@/components/QuoteForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto y cotización",
  description:
    "Solicita una cotización de palta Hass en el punto de maduración exacto que necesita tu cocina. Respuesta directa, sin vueltas.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-primary px-6 py-20 text-secondary md:py-28">
        <SectionReveal className="mx-auto max-w-content">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh">
            Contacto
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Cuéntanos qué necesita tu cocina y te cotizamos el punto exacto.
          </h1>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <SectionReveal>
            <div className="rounded-2xl border border-primary/10 bg-white p-8 md:p-10">
              <QuoteForm />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="flex flex-col gap-10">
            <div>
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
                Contacto directo
              </p>
              <ul className="flex flex-col gap-2 font-sans text-base text-text/80">
                <li>Teléfono / WhatsApp: {CONTACT_INFO.phone}</li>
                <li>Email: {CONTACT_INFO.email}</li>
              </ul>
            </div>

            <div>
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
                Zona de cobertura
              </p>
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-primary/25 bg-secondary font-sans text-sm text-primary/50">
                [MAPA DE COBERTURA PENDIENTE]
              </div>
              <p className="mt-3 font-sans text-sm text-text/60">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div>
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
                Cómo funciona el primer pedido
              </p>
              <p className="font-sans text-sm leading-relaxed text-text/80">
                Recibimos tu solicitud, coordinamos un pedido de prueba con el punto de
                maduración que necesitas, y evaluamos juntos consistencia en las primeras
                entregas antes de comprometer un volumen fijo.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
