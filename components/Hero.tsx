"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";
import { BRAND_PROMISE } from "@/lib/constants";

/**
 * Hero con parallax sutil: la capa de fondo (cordillera geométrica abstracta)
 * se mueve a menor velocidad que el texto al hacer scroll.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[92vh] min-h-[560px] overflow-hidden bg-primary">
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden>
        <MountainLayer />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-content flex-col justify-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 font-sans text-xs font-medium uppercase tracking-technical text-accent-fresh"
        >
          Proveedor B2B · Sushi · Restaurantes · Hoteles · Casinos
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-secondary sm:text-5xl md:text-6xl"
        >
          Palta Hass chilena en el punto exacto que tu cocina necesita.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-lg font-sans text-base leading-relaxed text-secondary/75 md:text-lg"
        >
          Firme para sushi y corte. Media para servicio de barra. Cremosa para salsas y
          guacamole. Menos merma, menos tiempo de prep, el mismo resultado semana a semana.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contacto" variant="primary">
            Cotizar ahora
          </Button>
          <Button
            href="/producto"
            variant="outline"
            className="!border-secondary/40 !text-secondary hover:!bg-secondary hover:!text-primary"
          >
            Ver puntos de maduración
          </Button>
        </motion.div>
        <span className="sr-only">{BRAND_PROMISE}</span>
      </motion.div>
    </div>
  );
}

function MountainLayer() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMax slice"
      className="h-[130%] w-full"
      aria-hidden
    >
      <polygon points="0,800 0,520 260,300 520,480 780,220 1040,440 1200,300 1200,800" fill="#28402F" />
      <polygon points="0,800 0,620 300,420 600,600 900,360 1200,540 1200,800" fill="#233829" />
      <polygon points="120,800 120,700 420,600 720,720 1020,620 1200,700 1200,800" fill="#1D2F23" />
    </svg>
  );
}
