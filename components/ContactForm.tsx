"use client";

import { FormEvent, useState } from "react";

type FormErrors = Partial<Record<"name" | "company" | "email" | "phone" | "buildings" | "units" | "message" | "consent", string>>;

const optInText =
  "Acepto que ConsFlow me contacte por WhatsApp, email o teléfono para responder mi consulta y enviarme información relacionada con sus servicios. Puedo solicitar dejar de recibir comunicaciones en cualquier momento.";

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: FormErrors = {};
    const email = String(formData.get("email") ?? "").trim();
    const consent = formData.get("consent") === "on";

    if (!String(formData.get("name") ?? "").trim()) nextErrors.name = "Ingresá tu nombre completo.";
    if (!String(formData.get("company") ?? "").trim()) nextErrors.company = "Ingresá el nombre de la administradora o empresa.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Ingresá un email válido.";
    if (!String(formData.get("phone") ?? "").trim()) nextErrors.phone = "Ingresá un teléfono de contacto.";
    if (!String(formData.get("buildings") ?? "").trim()) nextErrors.buildings = "Indicá la cantidad aproximada de edificios.";
    if (!String(formData.get("units") ?? "").trim()) nextErrors.units = "Indicá la cantidad aproximada de unidades funcionales.";
    if (!String(formData.get("message") ?? "").trim()) nextErrors.message = "Contanos brevemente qué necesitás resolver.";
    if (!consent) nextErrors.consent = "Debés aceptar el consentimiento para que podamos contactarte.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // TODO: Conectar este formulario al backend real de ConsFlow cuando exista un endpoint seguro documentado.
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-soft sm:p-8">
      {submitted ? (
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900" role="status">
          Gracias. En esta versión, el formulario valida los datos pero todavía no envía la solicitud. Para contacto real, escribinos a contacto@consflow.com.ar. Conectaremos este formulario al backend seguro de ConsFlow en la próxima etapa.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" name="name" error={errors.name} autoComplete="name" />
        <Field label="Administradora / empresa" name="company" error={errors.company} autoComplete="organization" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
        <Field label="Teléfono" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
        <Field label="Cantidad aproximada de edificios" name="buildings" type="number" min="0" error={errors.buildings} />
        <Field label="Cantidad aproximada de unidades funcionales" name="units" type="number" min="0" error={errors.units} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-ink shadow-sm transition placeholder:text-slate-400 focus:border-slateblue focus:outline focus:outline-2 focus:outline-slateblue/30"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-700">{errors.message}</p> : null}
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <label className="flex gap-3 text-sm leading-6 text-slate-700">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-slate-300 text-slateblue focus:ring-slateblue"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>{optInText}</span>
        </label>
        {errors.consent ? <p id="consent-error" className="mt-2 text-sm text-red-700">{errors.consent}</p> : null}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slateblue px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-premium focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-slateblue motion-reduce:hover:translate-y-0 sm:w-auto"
      >
        Enviar solicitud
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  min?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-ink shadow-sm transition placeholder:text-slate-400 focus:border-slateblue focus:outline focus:outline-2 focus:outline-slateblue/30"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? <p id={`${name}-error`} className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
