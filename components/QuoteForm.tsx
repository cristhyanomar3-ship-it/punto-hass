"use client";

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS_TYPES, FREQUENCY_OPTIONS } from "@/lib/constants";

interface FormState {
  name: string;
  business: string;
  businessType: string;
  weeklyVolume: string;
  frequency: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  business: "",
  businessType: "",
  weeklyVolume: "",
  frequency: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validateField(field: keyof FormState, value: string): string | undefined {
  switch (field) {
    case "name":
      return value.trim().length < 2 ? "Ingresa tu nombre completo." : undefined;
    case "business":
      return value.trim().length < 2 ? "Ingresa el nombre de tu negocio." : undefined;
    case "businessType":
      return value ? undefined : "Selecciona el tipo de negocio.";
    case "weeklyVolume":
      return value.trim().length === 0 ? "Indica un volumen estimado, aunque sea aproximado." : undefined;
    case "frequency":
      return value ? undefined : "Selecciona una frecuencia de pedido.";
    default:
      return undefined;
  }
}

export function QuoteForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormState, value) }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormState, value) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: Errors = {};
    (Object.keys(values) as (keyof FormState)[]).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) nextErrors[field] = error;
    });
    setErrors(nextErrors);
    setTouched({
      name: true,
      business: true,
      businessType: true,
      weeklyVolume: true,
      frequency: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setValues(INITIAL_STATE);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 font-sans text-sm text-text outline-none transition-colors duration-200 ease-out focus:border-accent ${
      errors[field] && touched[field] ? "border-red-400" : "border-primary/15"
    }`;

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="rounded-2xl border border-accent-fresh/30 bg-white p-8 text-center"
      >
        <p className="font-display text-2xl font-semibold text-primary">
          Recibimos tu solicitud
        </p>
        <p className="mt-3 font-sans text-sm text-text/70">
          Te contactaremos a la brevedad para coordinar tu cotización y, si quieres, un pedido
          de prueba.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-sans text-sm font-semibold text-accent underline underline-offset-4"
        >
          Enviar otra solicitud
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre"
          name="name"
          value={values.name}
          error={touched.name ? errors.name : undefined}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses("name")}
          autoComplete="name"
        />
        <Field
          label="Negocio"
          name="business"
          value={values.business}
          error={touched.business ? errors.business : undefined}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses("business")}
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="businessType" className="mb-1.5 block font-sans text-sm font-medium text-primary">
            Tipo de negocio
          </label>
          <select
            id="businessType"
            name="businessType"
            value={values.businessType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses("businessType")}
          >
            <option value="">Selecciona una opción</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <FieldError error={touched.businessType ? errors.businessType : undefined} />
        </div>

        <div>
          <label htmlFor="frequency" className="mb-1.5 block font-sans text-sm font-medium text-primary">
            Frecuencia de pedido
          </label>
          <select
            id="frequency"
            name="frequency"
            value={values.frequency}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses("frequency")}
          >
            <option value="">Selecciona una opción</option>
            {FREQUENCY_OPTIONS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
          <FieldError error={touched.frequency ? errors.frequency : undefined} />
        </div>
      </div>

      <Field
        label="Volumen estimado semanal (kg)"
        name="weeklyVolume"
        value={values.weeklyVolume}
        error={touched.weeklyVolume ? errors.weeklyVolume : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        className={inputClasses("weeklyVolume")}
        placeholder="Ej. 50 kg / semana"
      />

      <div>
        <label htmlFor="message" className="mb-1.5 block font-sans text-sm font-medium text-primary">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Cuéntanos para qué uso necesitas el punto de maduración."
          className={inputClasses("message")}
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="font-sans text-sm text-red-500"
          >
            No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos directamente.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-sans text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-[#a3692f] disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Solicitar cotización"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  className,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  className: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-sans text-sm font-medium text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      <FieldError error={error} />
    </div>
  );
}

function FieldError({ error }: { error?: string }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 font-sans text-xs text-red-500"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
