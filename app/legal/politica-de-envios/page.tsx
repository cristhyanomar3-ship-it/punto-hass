import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Envíos",
  description: "Zonas de cobertura, plazos de despacho y condiciones de entrega de Punto Hass.",
};

export default function PoliticaDeEnviosPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <SectionReveal className="max-w-3xl">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
          Legal
        </p>
        <h1 className="mb-8 font-display text-3xl font-semibold text-primary md:text-4xl">
          Política de Envíos
        </h1>

        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-text/80">
          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              1. Zona de cobertura
            </h2>
            <p>
              Despachamos en toda la {CONTACT_INFO.coverageArea}. Si tu negocio está fuera de
              esta zona, escríbenos — evaluamos coberturas puntuales según volumen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              2. Plazo de entrega
            </h2>
            <p>
              El plazo estándar de despacho es de {CONTACT_INFO.deliveryTime} desde la
              confirmación del pedido. El día y ventana horaria de entrega se coordina
              directamente contigo por WhatsApp o correo antes de cada despacho.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              3. Pedido mínimo
            </h2>
            <p>
              El pedido mínimo es de 10 kg. A partir de ese volumen puedes combinar los tres
              puntos de maduración (firme, medio, cremoso) según lo que necesite tu cocina.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              4. Recepción del pedido
            </h2>
            <p>
              Al recibir el despacho, te recomendamos revisar el lote frente al transportista o
              dentro de las horas siguientes a la entrega. Cualquier observación sobre calibre,
              cantidad o punto de maduración debe reportarse dentro de las 24 horas posteriores
              a la recepción para activar la garantía de reposición.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              5. Reposición o crédito por lote en mal estado
            </h2>
            <p>
              Si un lote llega en mal estado o en un punto de maduración distinto al
              solicitado, repórtalo dentro de las 24 horas siguientes a la entrega junto con una
              fotografía del lote. Punto Hass se compromete a reponer el lote en el despacho más
              próximo disponible, o a abonar su valor como crédito para tu siguiente pedido —
              tú eliges la opción. Esta garantía no tiene costo adicional para el cliente.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              6. Pedidos de prueba
            </h2>
            <p>
              No exigimos compromiso de volumen fijo desde el primer pedido. Puedes solicitar un
              lote de prueba y evaluar consistencia en 2 a 3 entregas antes de definir una
              frecuencia y volumen semanal.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">Contacto</h2>
            <p>
              Para coordinar un despacho o resolver una incidencia, escríbenos a{" "}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent hover:underline">
                {CONTACT_INFO.email}
              </a>{" "}
              o por WhatsApp al {CONTACT_INFO.phone}.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
