"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { MaturityLevel } from "@/lib/constants";

const PALETTE: Record<MaturityLevel, { flesh: string; rim: string; lines: number }> = {
  firme: { flesh: "#8FA33E", rim: "#5C6E2A", lines: 7 },
  medio: { flesh: "#A8B563", rim: "#6E7A3E", lines: 4 },
  cremoso: { flesh: "#D8CE9E", rim: "#B4763B", lines: 1 },
};

/**
 * Corte transversal ilustrado, geométrico — no foto de stock de palta partida.
 * La densidad de líneas concéntricas comunica firmeza; el color de pulpa
 * se aclara a medida que el punto avanza hacia cremoso.
 */
export function MaturityIllustration({ level }: { level: MaturityLevel }) {
  const { flesh, rim, lines } = PALETTE[level];

  return (
    <div className="relative aspect-square w-full max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        <motion.svg
          key={level}
          viewBox="0 0 200 200"
          className="h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="img"
          aria-label={`Ilustración de punto de maduración ${level}`}
        >
          <circle cx="100" cy="100" r="92" fill="#2F4A3D" />
          <circle cx="100" cy="100" r="78" fill={rim} />
          <circle cx="100" cy="100" r="66" fill={flesh} />
          {Array.from({ length: lines }).map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={58 - i * 7}
              fill="none"
              stroke="#2F4A3D"
              strokeOpacity={0.12}
              strokeWidth={1.5}
            />
          ))}
          <path d="M100 76L124 116H76L100 76Z" fill="#F2ECDD" />
        </motion.svg>
      </AnimatePresence>
    </div>
  );
}
