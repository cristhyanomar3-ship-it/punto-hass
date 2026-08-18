import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre Punto Hass",
  description:
    "Por qué existe Punto Hass, qué la diferencia de un proveedor genérico de palta Hass, y nuestro compromiso de servicio.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-primary px-6 py-20 text-secondary md:py-28">
        <SectionReveal className="mx-auto max-w-content">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh">
            Nosotros
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Existimos porque &ldquo;calidad de exportación&rdquo; no le dice nada a un chef.
          </h1>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <SectionReveal>
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
              El problema que vimos
            </p>
            <h2 className="mb-5 font-display text-2xl font-semibold text-primary md:text-3xl">
              Todos los proveedores compiten en lo mismo
            </h2>
            <p className="font-sans text-base leading-relaxed text-text/80">
              Precio, plazo de despacho y una frase que se repite en toda la industria:
              &ldquo;calidad de exportación&rdquo;. Ese lenguaje es intercambiable entre cualquier
              competidor — no le dice al chef si esa palta sirve para el corte de sushi que
              tiene que hacer en dos horas.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
              Nuestra respuesta
            </p>
            <h2 className="mb-5 font-display text-2xl font-semibold text-primary md:text-3xl">
              Vender el punto, no solo el fruto
            </h2>
            <p className="font-sans text-base leading-relaxed text-text/80">
              Punto Hass nace para resolver un problema operativo concreto: cocinas que
              descartan palta porque llegó en el punto equivocado para el uso que necesitaban.
              Clasificamos y despachamos por punto de maduración — firme, medio o cremoso —
              para que cada caja llegue lista para lo que vas a hacer con ella.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <SectionReveal className="mb-14 max-w-2xl">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
              Compromiso de servicio
            </p>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              Lo que puedes esperar de nosotros
            </h2>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <SectionReveal>
              <Card eyebrow="Consistencia">
                <p className="font-sans text-sm leading-relaxed text-text/80">
                  El mismo punto de maduración, pedido tras pedido — sin sorpresas al abrir la
                  caja.
                </p>
              </Card>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <Card eyebrow="Plazos de entrega">
                <p className="font-sans text-sm leading-relaxed text-text/80">
                  2 a 3 días hábiles desde la confirmación del pedido, en toda la Región
                  Metropolitana de Santiago.
                </p>
              </Card>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <Card eyebrow="Respuesta ante incidencias">
                <p className="font-sans text-sm leading-relaxed text-text/80">
                  Si un lote llega en mal estado o en un punto distinto al solicitado, avísanos
                  dentro de 24 horas con una foto y lo reponemos en el siguiente despacho o lo
                  abonamos a tu próxima compra.
                </p>
              </Card>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 pb-24 md:pb-32">
        <SectionReveal className="mx-auto max-w-content rounded-3xl bg-primary px-8 py-16 text-center text-secondary md:px-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Conversemos sobre el punto que necesita tu cocina
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contacto" variant="primary">
              Cotizar ahora
            </Button>
            <WhatsAppButton variant="outline-light" />
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
