"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

/**
 * Wrapper de scroll-reveal: fade + translateY sutil al entrar en viewport.
 * whileInView con `once` evita relayout al hacer scroll hacia arriba/abajo.
 */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: SectionRevealProps) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
