import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Condiciones comerciales aplicables a las cotizaciones y pedidos de Punto Hass.",
};

export default function TerminosPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <SectionReveal className="max-w-3xl">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
          Legal
        </p>
        <h1 className="mb-8 font-display text-3xl font-semibold text-primary md:text-4xl">
          Términos y Condiciones
        </h1>

        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-text/80">
          <p>
            Última actualización: agosto de 2026. Al solicitar una cotización o realizar un
            pedido a Punto Hass, aceptas las condiciones descritas a continuación.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              1. Naturaleza del servicio
            </h2>
            <p>
              Punto Hass es un proveedor B2B de palta Hass chilena para restaurantes, sushis,
              hoteles y casinos. Este sitio no es una tienda de venta directa al consumidor
              final: los precios, volúmenes y condiciones se coordinan directamente entre Punto
              Hass y cada cliente comercial.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              2. Cotizaciones
            </h2>
            <p>
              El formulario de contacto genera una solicitud de cotización, no un pedido en
              firme. El pedido queda confirmado una vez que ambas partes acuerdan volumen, punto
              de maduración, precio y fecha de despacho.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              3. Pedido mínimo y volumen
            </h2>
            <p>
              El pedido mínimo es de 10 kg. Los volúmenes recurrentes se acuerdan según la
              frecuencia indicada por el cliente (semanal, quincenal o mensual) y pueden
              ajustarse de mutuo acuerdo entre despachos.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              4. Precios
            </h2>
            <p>
              Los precios se informan directamente al cliente al momento de cotizar y pueden
              variar según temporada, calibre y volumen. Este sitio no publica precios fijos.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              5. Garantía de reposición
            </h2>
            <p>
              Todo pedido está cubierto por la garantía descrita en nuestra{" "}
              <a href="/legal/politica-de-envios" className="text-accent hover:underline">
                Política de Envíos
              </a>
              : reposición o crédito sin costo si un lote llega en mal estado o en un punto de
              maduración distinto al solicitado, reportado dentro de 24 horas de la entrega.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              6. Uso del sitio
            </h2>
            <p>
              El contenido de este sitio (textos, identidad visual, fotografías de producto) es
              propiedad de Punto Hass y no puede reproducirse con fines comerciales sin
              autorización previa.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              7. Ley aplicable
            </h2>
            <p>
              Estas condiciones se rigen por las leyes de la República de Chile. Cualquier
              controversia se someterá a los tribunales competentes de Santiago.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">Contacto</h2>
            <p>
              Para consultas sobre estos términos, escríbenos a{" "}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent hover:underline">
                {CONTACT_INFO.email}
              </a>{" "}
              o al {CONTACT_INFO.phone}.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
