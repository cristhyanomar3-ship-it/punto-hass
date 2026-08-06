import { NextResponse } from "next/server";

interface QuoteRequestBody {
  name?: string;
  business?: string;
  businessType?: string;
  weeklyVolume?: string;
  frequency?: string;
  message?: string;
}

const REQUIRED_FIELDS: (keyof QuoteRequestBody)[] = [
  "name",
  "business",
  "businessType",
  "weeklyVolume",
  "frequency",
];

export async function POST(request: Request) {
  let body: QuoteRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !body[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Faltan campos obligatorios: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // TODO: integrar envío real de la solicitud de cotización.
  // Opción sugerida: Resend (https://resend.com) o Nodemailer vía SMTP.
  //
  // Ejemplo con Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "cotizaciones@puntohass.cl",
  //     to: "[COMPLETAR: email interno de ventas]",
  //     subject: `Nueva cotización — ${body.business}`,
  //     text: JSON.stringify(body, null, 2),
  //   });
  console.log("[Punto Hass] Nueva solicitud de cotización:", body);

  return NextResponse.json({ ok: true });
}
