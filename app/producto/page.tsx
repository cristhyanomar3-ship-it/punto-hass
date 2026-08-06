import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { MaturityComparator } from "@/components/MaturityComparator";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Nuestra palta — Puntos de maduración",
  description:
    "Los 3 puntos de maduración de Punto Hass: firme, medio y cremoso. Ficha técnica, calibre, origen y proceso de selección.",
};

const SPECS = [
  { label: "Calibre", value: "16–18 y 20–22" },
  { label: "Origen", value: "Valles de Chile central, cordillera de los Andes" },
  { label: "Estándar", value: "Selección para uso de cocina, no solo exportación" },
  { label: "Zonas de despacho", value: "[COMPLETAR: zonas de cobertura reales]" },
];

export default function ProductoPage() {
  return (
    <>
      <section className="bg-primary px-6 py-20 text-secondary md:py-28">
        <SectionReveal className="mx-auto max-w-content">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh">
            Producto
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Un mismo fruto, tres puntos distintos — según lo que tu cocina va a hacer con él.
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-secondary/75">
            No clasificamos la palta por &ldquo;calidad de exportación&rdquo;. La clasificamos por punto de
            maduración, porque eso es lo que determina si sirve para tu uso o se convierte en
            merma.
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <SectionReveal>
          <MaturityComparator />
        </SectionReveal>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <SectionReveal className="mb-14 max-w-2xl">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
              Ficha técnica
            </p>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              Los datos que necesita tu jefe de compras
            </h2>
          </SectionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {SPECS.map((spec, i) => (
              <SectionReveal key={spec.label} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-4 rounded-xl border border-primary/10 bg-secondary px-6 py-5">
                  <span className="font-sans text-xs font-medium uppercase tracking-technical text-primary/60">
                    {spec.label}
                  </span>
                  <span className="text-right font-sans text-sm font-medium text-text">
                    {spec.value}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <SectionReveal className="mb-14 max-w-2xl">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
            Proceso
          </p>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
            Selección y control de calidad
          </h2>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          <SectionReveal>
            <Card eyebrow="01 — Clasificación por punto">
              <p className="font-sans text-sm leading-relaxed text-text/80">
                Cada lote se clasifica por firmeza antes de despacho, no solo por calibre. El
                punto que pediste es el punto que sale de bodega.
              </p>
            </Card>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Card eyebrow="02 — Ventana de despacho">
              <p className="font-sans text-sm leading-relaxed text-text/80">
                Se despacha dentro de la ventana de días que corresponde a cada punto, para que
                llegue a tu cocina lista para usarse — no a madurar en tu bodega.
              </p>
            </Card>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Card eyebrow="03 — Verificación de lote">
              <p className="font-sans text-sm leading-relaxed text-text/80">
                Muestreo de firmeza antes de cerrar cada despacho. Si un lote no cumple el punto
                solicitado, no sale.
              </p>
            </Card>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-secondary px-6 pb-24 md:pb-32">
        <SectionReveal className="mx-auto max-w-content rounded-3xl bg-primary px-8 py-16 text-center text-secondary md:px-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            ¿Listo para pedir el punto exacto que necesitas?
          </h2>
          <div className="mt-8">
            <Button href="/contacto" variant="primary">
              Cotizar ahora
            </Button>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
