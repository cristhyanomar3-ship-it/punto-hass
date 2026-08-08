"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

/**
 * Contador animado para datos técnicos ("% de merma reducida", etc).
 * Se anima una sola vez al entrar en viewport, usando spring en vez de
 * setInterval para que la animación quede fluida sin jank.
 *
 * Pensado para usarse sobre fondo verde Andes (bg-primary): el número usa
 * crema (texto claro sobre fondo oscuro cumple contraste AA), la etiqueta
 * usa verde pulpa como acento puntual, y la descripción usa crema atenuado
 * — nunca texto carbón ni cobre pequeño sobre fondo oscuro.
 */
export function AnimatedStat({ value, suffix = "", label, description }: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      }),
    [spring, suffix]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-1.5"
    >
      <p
        ref={ref}
        className="font-display text-5xl font-semibold leading-none text-secondary md:text-6xl"
      >
        0{suffix}
      </p>
      <p className="font-sans text-sm font-semibold uppercase leading-snug tracking-technical text-accent-fresh">
        {label}
      </p>
      {description && (
        <p className="font-sans text-base leading-snug text-secondary/80">{description}</p>
      )}
    </motion.div>
  );
}
