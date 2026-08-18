import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Pedido mínimo, punto de maduración garantizado, zonas de despacho y pedidos de prueba — todo lo que un comprador B2B necesita saber antes de pedir a Punto Hass.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-primary px-6 py-20 text-secondary md:py-28">
        <SectionReveal className="mx-auto max-w-content">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh">
            Preguntas frecuentes
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Lo que un comprador serio pregunta antes del primer pedido
          </h1>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <SectionReveal>
          <FaqAccordion items={FAQ_ITEMS} />
        </SectionReveal>
      </section>

      <section className="bg-secondary px-6 pb-24 md:pb-32">
        <SectionReveal className="mx-auto max-w-content rounded-3xl bg-primary px-8 py-16 text-center text-secondary md:px-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            ¿Alguna pregunta que no está aquí?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base text-secondary/75">
            Escríbenos directamente y te respondemos con datos concretos, no con evasivas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contacto" variant="primary">
              Contactar
            </Button>
            <WhatsAppButton variant="outline-light" />
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
