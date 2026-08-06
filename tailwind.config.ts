import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F4A3D", // Verde Andes — logo, headers, fondos oscuros, botones principales
        secondary: "#F2ECDD", // Crema Cordillera — fondos, espacios en blanco
        accent: "#B4763B", // Cobre Andino — CTAs, links activos, detalles
        "accent-fresh": "#8FA33E", // Verde Pulpa — íconos y acentos puntuales, NUNCA dominante
        text: "#1C1C1A", // Carbón — texto de cuerpo sobre fondos claros
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        technical: "0.08em",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
