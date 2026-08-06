import { Hero } from "@/components/Hero";
import { MaturityComparator } from "@/components/MaturityComparator";
import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedStat } from "@/components/AnimatedStat";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { WHY_STATS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
            El diferenciador
          </p>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
            No vendemos palta genérica. Vendemos el punto exacto.
          </h2>
          <p className="mt-4 font-sans text-base text-text/70">
            Elige el punto de maduración según lo que va a pasar en tu cocina — no al revés.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <MaturityComparator />
        </SectionReveal>
      </section>

      <section className="bg-primary py-24 text-secondary md:py-32">
        <div className="mx-auto max-w-content px-6">
          <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh">
              Por qué importa
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              El punto exacto no es un detalle — es el ahorro real.
            </h2>
          </SectionReveal>

          <div className="grid gap-10 sm:grid-cols-3">
            {WHY_STATS.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
            Confianza
          </p>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
            Cocinas que ya trabajan con nosotros
          </h2>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <Card>
                <p className="font-display text-lg italic text-primary/40">
                  [TESTIMONIO PENDIENTE]
                </p>
                <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-technical text-primary/30">
                  Nombre — Cargo, negocio
                </p>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary pb-24 pt-4 md:pb-32">
        <SectionReveal className="mx-auto max-w-content rounded-3xl bg-primary px-8 py-16 text-center text-secondary md:px-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Empieza con un pedido de prueba, no con un contrato.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base text-secondary/75">
            Evalúa consistencia en 2-3 entregas antes de comprometer volumen. Así decide un
            comprador serio.
          </p>
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
