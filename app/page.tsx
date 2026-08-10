import { Hero } from "@/components/Hero";
import { MaturityComparator } from "@/components/MaturityComparator";
import { ProductGallery } from "@/components/ProductGallery";
import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedStat } from "@/components/AnimatedStat";
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

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
              La fruta real
            </p>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              Así es la palta que recibe tu cocina
            </h2>
            <p className="mt-4 font-sans text-base text-text/70">
              Sin fotos de stock — este es el calibre y el corte real que despachamos.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ProductGallery />
          </SectionReveal>
        </div>
      </section>

      <section className="bg-primary py-16 text-secondary md:py-20">
        <div className="mx-auto max-w-content px-6">
          <SectionReveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh">
              Por qué importa
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              El punto exacto no es un detalle — es el ahorro real.
            </h2>
          </SectionReveal>

          <div className="grid gap-8 sm:grid-cols-3">
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

      <section className="bg-secondary px-6 py-24 md:py-32">
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
