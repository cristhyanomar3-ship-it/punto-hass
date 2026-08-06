"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MATURITY_POINTS, type MaturityLevel } from "@/lib/constants";
import { MaturityIllustration } from "./MaturityIllustration";

/**
 * Componente central del sitio: comparador de los 3 puntos de maduración.
 * Funciona con click/foco (no solo hover) para que sea usable en mobile
 * y accesible por teclado — el diferenciador de marca no puede depender
 * de un mouse.
 */
export function MaturityComparator() {
  const [active, setActive] = useState<MaturityLevel>("firme");
  const point = MATURITY_POINTS.find((p) => p.id === active)!;

  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
      <MaturityIllustration level={active} />

      <div>
        <div
          role="tablist"
          aria-label="Puntos de maduración"
          className="mb-8 flex gap-2 rounded-full bg-white p-1.5"
        >
          {MATURITY_POINTS.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={active === p.id}
              onMouseEnter={() => setActive(p.id)}
              onFocus={() => setActive(p.id)}
              onClick={() => setActive(p.id)}
              className={`relative flex-1 rounded-full px-4 py-2.5 font-sans text-sm font-semibold transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                active === p.id ? "text-white" : "text-primary hover:text-accent"
              }`}
            >
              {active === p.id && (
                <motion.span
                  layoutId="maturity-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
              <span className="relative z-10">{p.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-technical text-accent">
              {point.subtitle}
            </p>
            <h3 className="mb-4 font-display text-3xl font-semibold text-primary">
              {point.label}
            </h3>
            <p className="mb-6 font-sans text-base leading-relaxed text-text/80">
              {point.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {point.usage.map((u) => (
                <li
                  key={u}
                  className="rounded-full border border-primary/15 bg-white px-3.5 py-1.5 font-sans text-xs font-medium uppercase tracking-wide text-primary"
                >
                  {u}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
