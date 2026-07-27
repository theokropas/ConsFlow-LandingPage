"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ContactErrors, MARKETING_OPT_IN_TEXT, validateContactInput } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const submissionIdRef = useRef("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const input = Object.fromEntries(formData.entries());
    const validation = validateContactInput(input);

    setStatus("idle");
    setServerMessage("");
    setErrors(validation.errors);

    if (Object.keys(validation.errors).length > 0) {
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    if (!submissionIdRef.current) submissionIdRef.current = crypto.randomUUID();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validation.data,
          whatsappContact: formData.get("whatsappContact") === "on",
          marketing: formData.get("marketing") === "on",
          submissionId: submissionIdRef.current,
        }),
      });
      const result = await response.json() as { message?: string; errors?: ContactErrors };

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setServerMessage(result.message ?? "No pudimos enviar la solicitud.");
        setStatus("error");
        requestAnimationFrame(() => errorSummaryRef.current?.focus());
        return;
      }

      form.reset();
      submissionIdRef.current = "";
      setErrors({});
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setServerMessage(`No pudimos enviar la solicitud. Intentá nuevamente o escribinos a ${siteConfig.email}.`);
      setStatus("error");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  const errorEntries = Object.entries(errors).filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <form
      action="/api/contact"
      method="post"
      noValidate
      onSubmit={handleSubmit}
      className="contact-form rounded-2xl border border-line bg-white p-5 sm:p-8"
      data-status={status}
      aria-busy={status === "submitting"}
    >
      <div aria-live="polite" aria-atomic="true">
        {status === "success" ? (
          <div ref={successRef} tabIndex={-1} className="form-status-enter mb-6 rounded-xl border border-[#9ad3bc] bg-[#edf8f3] p-4 text-sm leading-6 text-[#0e5c40] focus:outline focus:outline-2 focus:outline-[#147a55]" role="status">
            Recibimos tu solicitud. Te contactaremos por el email o teléfono que indicaste.
          </div>
        ) : null}
      </div>

      {(errorEntries.length > 0 || status === "error") ? (
        <div ref={errorSummaryRef} tabIndex={-1} className="form-status-enter mb-6 rounded-xl border border-[#efb3ad] bg-[#fff4f2] p-4 text-sm text-[#8f1d14] focus:outline focus:outline-2 focus:outline-[#b42318]" role="alert" aria-live="assertive">
          <p className="font-bold">{status === "error" ? "No pudimos enviar la solicitud todavía." : "Revisá los campos indicados."}</p>
          {serverMessage ? <p className="mt-1 leading-6">{serverMessage}</p> : null}
          {errorEntries.length > 0 ? (
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {errorEntries.map(([field, message]) => (
                <li key={field}><a className="underline underline-offset-2" href={`#${field === "contact" ? "email" : field}`}>{message}</a></li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="name" error={errors.name} autoComplete="name" maxLength={100} required />
        <Field label="Administradora o empresa" name="company" error={errors.company} autoComplete="organization" maxLength={120} required />
        <Field label="Email" hint="Email o teléfono: completá al menos uno." name="email" type="email" error={errors.email ?? errors.contact} autoComplete="email" inputMode="email" maxLength={254} spellCheck={false} />
        <Field label="Teléfono" hint="Podés incluir característica y código de país." name="phone" type="tel" error={errors.phone ?? errors.contact} autoComplete="tel" inputMode="tel" maxLength={30} />
        <Field label="Cantidad aproximada de edificios" hint="Opcional. No hace falta que sea exacto." name="buildings" type="number" error={errors.buildings} inputMode="numeric" min="0" max="100000" />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-bold text-ink">Mensaje <span className="font-normal text-steel">(opcional)</span></label>
        <p id="message-hint" className="mt-1 text-xs leading-5 text-steel">¿Qué parte de la atención diaria querés ordenar primero?</p>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1500}
          autoComplete="off"
          className="mt-2 w-full rounded-xl border border-[#a9b7c3] bg-white px-4 py-3 text-ink shadow-sm transition-[border-color,box-shadow] duration-150 placeholder:text-steel focus:border-brand focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm font-semibold text-[#9f2118]">{errors.message}</p> : null}
      </div>

      <div className="pointer-events-none absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-canvas p-4 text-sm leading-6 text-steel">
        <p>
          Usaremos estos datos para responder tu consulta y coordinar una demostración por email o llamada. Si lo autorizás, también podremos responder por WhatsApp. Este tratamiento es necesario para gestionar tu solicitud. Consultá nuestros {" "}
          <Link className="font-bold text-navy underline decoration-brand/30 underline-offset-4 hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" href="/terms">Términos y criterios de privacidad</Link>.
        </p>
        <p className="mt-3 text-xs leading-5">El envío genera un identificador técnico y usa temporalmente un hash de la IP para evitar duplicados y abuso. No utilizamos cookies de analítica o publicidad.</p>
        <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3 border-t border-line pt-4 text-ink">
          <input name="whatsappContact" type="checkbox" className="mt-1 h-5 w-5 shrink-0 rounded border-line text-brand focus:ring-brand" />
          <span>Autorizo a ConsFlow a responder esta solicitud por WhatsApp al número informado. <span className="text-steel">Opcional.</span></span>
        </label>
        <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3 border-t border-line pt-4 text-ink">
          <input name="marketing" type="checkbox" className="mt-1 h-5 w-5 shrink-0 rounded border-line text-brand focus:ring-brand" />
          <span>{MARKETING_OPT_IN_TEXT} <span className="text-steel">Opcional.</span></span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="form-submit mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-navy px-6 py-3 text-base font-bold text-white hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-wait disabled:bg-steel sm:w-auto"
      >
        {status === "submitting" ? <span className="submit-progress" aria-hidden="true"><i /><i /><i /></span> : null}
        {status === "submitting" ? "Enviando solicitud…" : "Solicitar una demo"}
      </button>
    </form>
  );
}

function Field({
  label,
  hint,
  name,
  type = "text",
  error,
  autoComplete,
  min,
  max,
  maxLength,
  inputMode,
  spellCheck,
  required = false,
}: {
  label: string;
  hint?: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  min?: string;
  max?: string;
  maxLength?: number;
  inputMode?: "email" | "tel" | "numeric";
  spellCheck?: boolean;
  required?: boolean;
}) {
  const describedBy = [hint ? `${name}-hint` : "", error ? `${name}-error` : ""].filter(Boolean).join(" ") || undefined;

  return (
    <div className={name === "buildings" ? "sm:col-span-2" : undefined}>
      <label htmlFor={name} className="block text-sm font-bold text-ink">
        {label} {required ? <span className="text-[#9f2118]" aria-hidden="true">*</span> : null}
      </label>
      {hint ? <p id={`${name}-hint`} className="mt-1 text-xs leading-5 text-steel">{hint}</p> : null}
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        max={max}
        step={type === "number" ? "1" : undefined}
        maxLength={maxLength}
        required={required}
        autoComplete={autoComplete ?? "off"}
        inputMode={inputMode}
        spellCheck={spellCheck}
        className="mt-2 min-h-12 w-full rounded-xl border border-[#a9b7c3] bg-white px-4 py-3 text-ink shadow-sm transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />
      {error ? <p id={`${name}-error`} className="mt-2 text-sm font-semibold text-[#9f2118]">{error}</p> : null}
    </div>
  );
}
