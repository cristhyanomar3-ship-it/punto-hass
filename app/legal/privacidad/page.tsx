import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo Punto Hass recolecta, usa y protege los datos de sus clientes B2B.",
};

export default function PrivacidadPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <SectionReveal className="max-w-3xl">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
          Legal
        </p>
        <h1 className="mb-8 font-display text-3xl font-semibold text-primary md:text-4xl">
          Política de Privacidad
        </h1>

        <div className="flex flex-col gap-8 font-sans text-sm leading-relaxed text-text/80">
          <p>
            Última actualización: agosto de 2026. Esta política describe cómo Punto Hass
            recolecta, usa, almacena y protege los datos personales y comerciales de quienes
            solicitan una cotización o se contactan a través de este sitio.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              1. Qué datos recolectamos
            </h2>
            <p>
              Cuando completas el formulario de cotización recolectamos: nombre, nombre del
              negocio, tipo de negocio, volumen estimado semanal, frecuencia de pedido, mensaje
              opcional, y los metadatos técnicos habituales de una solicitud web (fecha y hora
              de envío). No solicitamos ni almacenamos datos de pago a través de este sitio.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              2. Para qué usamos tus datos
            </h2>
            <p>
              Usamos esta información exclusivamente para responder tu solicitud de cotización,
              coordinar despachos y dar seguimiento comercial a tu cuenta. No vendemos,
              arrendamos ni compartimos tus datos con terceros para fines de marketing ajenos a
              Punto Hass.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              3. Dónde se almacenan tus datos
            </h2>
            <p>
              Los datos enviados por el formulario de cotización se reciben directamente en los
              canales de contacto de Punto Hass (correo y WhatsApp) y no se almacenan en una
              base de datos pública ni se publican en el sitio.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              4. Tus derechos
            </h2>
            <p>
              De acuerdo con la Ley 19.628 sobre Protección de la Vida Privada de Chile, puedes
              solicitar en cualquier momento acceso, rectificación o eliminación de tus datos
              escribiendo a{" "}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent hover:underline">
                {CONTACT_INFO.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">
              5. Cookies y analítica
            </h2>
            <p>
              Este sitio no utiliza cookies de rastreo publicitario. Si en el futuro se
              incorpora analítica de uso, esta política se actualizará y se indicará la fecha de
              revisión al inicio de esta página.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-primary">Contacto</h2>
            <p>
              Ante cualquier duda sobre esta política, escríbenos a{" "}
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
