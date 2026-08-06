"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
}

/**
 * Card estándar con hover rico: leve scale, cambio de fondo y
 * subrayado en cobre animado — reutilizada en producto, FAQ y nosotros.
 */
export function Card({ children, className = "", eyebrow }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-8 transition-colors duration-300 ease-out hover:bg-secondary ${className}`}
    >
      <span className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-technical text-accent">
          {eyebrow}
        </p>
      )}
      {children}
    </motion.div>
  );
}
