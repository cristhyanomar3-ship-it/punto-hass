"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppButton";

const MESSAGE = "Hola Punto Hass, quiero cotizar palta Hass para mi negocio.";

/**
 * Botón flotante de WhatsApp, fijo en todas las páginas. Contacto directo
 * sin pasar por el formulario — para el comprador que ya decidió escribir.
 */
export function FloatingWhatsApp() {
  const href = `https://wa.me/${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-primary/25 transition-colors duration-200 ease-out hover:bg-[#a3692f] sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
