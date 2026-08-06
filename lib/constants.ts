export const SITE_URL = "https://puntohass.cl"; // TODO: reemplazar con dominio real

export const SITE_NAME = "Punto Hass";

export const BRAND_PROMISE =
  "Palta Hass chilena en el punto exacto que tu cocina necesita.";

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type MaturityLevel = "firme" | "medio" | "cremoso";

export interface MaturityPoint {
  id: MaturityLevel;
  label: string;
  subtitle: string;
  description: string;
  usage: string[];
  firmness: number; // 0-100, usado para la ilustración e indicador visual
}

export const MATURITY_POINTS: MaturityPoint[] = [
  {
    id: "firme",
    label: "Firme",
    subtitle: "Para sushi y corte",
    description:
      "Pulpa consistente al corte, sin deformarse en la lámina. Aguanta manipulación en línea de producción sin oxidarse antes de servicio.",
    usage: ["Sushi y rolls", "Corte en láminas", "Montaje en tabla"],
    firmness: 85,
  },
  {
    id: "medio",
    label: "Medio",
    subtitle: "Para servicio de barra",
    description:
      "Cede al corte pero mantiene forma en el plato. El punto de mayor margen de uso: entra tanto a barra como a cocina caliente.",
    usage: ["Ensaladas y bowls", "Barra fría", "Guarniciones"],
    firmness: 55,
  },
  {
    id: "cremoso",
    label: "Cremoso",
    subtitle: "Para salsas y guacamole",
    description:
      "Pulpa blanda, lista para machacar o procesar sin fibra. Rinde parejo en salsas, cremas y guacamole de servicio inmediato.",
    usage: ["Guacamole", "Salsas y cremas", "Untables"],
    firmness: 20,
  },
];

export interface WhyStat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const WHY_STATS: WhyStat[] = [
  {
    value: 32, // TODO: reemplazar con dato real
    suffix: "%",
    label: "Menos merma reportada",
    description:
      "Cocinas que dejan de descartar palta que llegó en el punto equivocado para su uso.",
  },
  {
    value: 15, // TODO: reemplazar con dato real
    suffix: " MIN",
    label: "Menos tiempo de prep por caja",
    description: "Al no tener que esperar a que la fruta madure en cocina.",
  },
  {
    value: 3, // TODO: reemplazar con dato real
    suffix: "",
    label: "Entregas para validar consistencia",
    description: "El mismo punto, semana a semana, medible desde el primer pedido de prueba.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuál es el pedido mínimo?",
    answer:
      "[COMPLETAR: definir pedido mínimo real, ej. cajas de 10 kg]. Trabajamos con volúmenes pensados para cocina, no para retail — el mínimo se ajusta según zona de despacho.",
  },
  {
    question:
      "¿Cómo garantizan que el punto de maduración sea el correcto para mi uso?",
    answer:
      "Cada pedido se etiqueta según el punto solicitado (firme, medio o cremoso) y se despacha en la ventana de días que corresponde a ese punto. No enviamos palta \"genérica de exportación\": el punto se define contigo antes del primer despacho, según si vas a cortar, servir en barra o procesar en salsa.",
  },
  {
    question: "¿Qué pasa si un lote llega en mal estado?",
    answer:
      "[DEFINIR SLA REAL: política de reposición/crédito]. La regla base es simple: si el punto de maduración no corresponde a lo pedido, se reemplaza o se acredita — no es problema tuyo administrar un error nuestro.",
  },
  {
    question: "¿Cuáles son las zonas y tiempos de despacho?",
    answer:
      "[COMPLETAR: zonas de cobertura y plazos de entrega reales por zona].",
  },
  {
    question:
      "¿Puedo pedir un lote de prueba antes de comprometerme a un volumen fijo?",
    answer:
      "Sí. Así es como recomendamos empezar: un pedido chico, evaluar consistencia en 2-3 entregas, y recién ahí definir un volumen fijo semanal. No pedimos compromiso de contrato para la primera compra.",
  },
  {
    question:
      "¿Qué diferencia a Punto Hass de otros proveedores de palta Hass en Chile?",
    answer:
      "La mayoría de los proveedores compite en precio y \"calidad de exportación\" — un lenguaje que no dice para qué está lista la fruta. Punto Hass vende el punto de maduración exacto para cada uso: firme para sushi y corte, medio para barra, cremoso para salsas. Eso se traduce en menos merma, menos tiempo de preparación y el mismo resultado semana a semana.",
  },
];

export const BUSINESS_TYPES = [
  { value: "sushi", label: "Sushi" },
  { value: "restaurante", label: "Restaurante" },
  { value: "hotel", label: "Hotel" },
  { value: "casino", label: "Casino" },
  { value: "otro", label: "Otro" },
] as const;

export const FREQUENCY_OPTIONS = [
  { value: "semanal", label: "Semanal" },
  { value: "quincenal", label: "Quincenal" },
  { value: "mensual", label: "Mensual" },
  { value: "puntual", label: "Pedido puntual / de prueba" },
] as const;

export const CONTACT_INFO = {
  phone: "[COMPLETAR]",
  whatsapp: "[COMPLETAR]",
  email: "[COMPLETAR]",
  address: "[COMPLETAR]",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" }, // TODO: reemplazar con dato real
  { label: "LinkedIn", href: "#" }, // TODO: reemplazar con dato real
];
