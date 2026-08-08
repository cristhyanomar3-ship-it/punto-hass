"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const IMAGES: GalleryImage[] = [
  {
    src: "/images/producto-corte.jpg",
    alt: "Palta Hass entera y en corte transversal mostrando pulpa y carozo",
    caption: "Corte real — pulpa y carozo",
  },
  {
    src: "/images/producto-mitades.jpg",
    alt: "Dos mitades de palta Hass, una con carozo y otra deshuesada",
    caption: "Mitades — con y sin carozo",
  },
  {
    src: "/images/producto-detalle.jpg",
    alt: "Paltas Hass enteras agrupadas mostrando calibre y piel",
    caption: "Calibre y piel — lote real",
  },
];

/**
 * Galería con fotos reales del producto (no stock) — para que el comprador
 * vea la fruta tal como llega, no una ilustración.
 */
export function ProductGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {IMAGES.map((img, i) => (
        <motion.figure
          key={img.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
          whileHover={{ scale: 1.02 }}
          className="group overflow-hidden rounded-2xl border border-primary/10 bg-white"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          <figcaption className="border-t border-primary/10 px-4 py-3 font-sans text-xs font-medium uppercase tracking-technical text-primary/70">
            {img.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
