"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/marketing/useReducedMotion";

export function OperationalTransformation() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setStarted(true);
      setPhase(5);
      return;
    }

    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion || phase >= 5) return;
    const timer = window.setTimeout(() => setPhase((current) => Math.min(current + 1, 5)), phase === 0 ? 250 : 520);
    return () => window.clearTimeout(timer);
  }, [phase, reducedMotion, started]);

  return (
    <section ref={sectionRef} id="como-funciona" className="flow-section section-reveal px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20" data-phase={phase}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">Un mensaje deja de estar suelto.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-steel">ConsFlow lo relaciona con la operación que tu equipo ya necesita gestionar.</p>
        </div>

        <div className="transformation mt-8 lg:mt-10">
          <article className="transformation__source" data-active={phase >= 1}>
            <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
              <div>
                <p className="text-xs font-bold text-link">Entrada · WhatsApp</p>
                <h3 className="mt-1 font-display text-lg font-extrabold text-ink">Mensaje sin clasificar</h3>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7f7ee] text-xs font-extrabold text-[#147a55]">WA</span>
            </div>
            <p className="mt-5 rounded-xl rounded-tl-sm bg-white p-4 text-sm leading-6 text-ink shadow-[0_10px_30px_rgba(16,42,67,0.08)]">Hola, el ascensor del edificio no funciona.</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div><dt className="text-steel">Persona</dt><dd className="mt-1 font-bold text-[#8a99a6]">Sin asociar</dd></div>
              <div><dt className="text-steel">Seguimiento</dt><dd className="mt-1 font-bold text-[#8a99a6]">Sin crear</dd></div>
            </dl>
          </article>

          <div className="transformation__engine" aria-label="ConsFlow identifica y organiza el mensaje">
            <div className="transformation__line" aria-hidden="true"><span /></div>
            <div className="transformation__engine-label">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-[0.65rem] font-extrabold text-white">C</span>
              ConsFlow conecta
            </div>
            <ol className="transformation__nodes">
              {["Persona", "Edificio", "UF 4B", "Ascensores"].map((label, index) => (
                <li key={label} data-active={phase >= index + 2}>
                  <span aria-hidden="true" />{label}
                </li>
              ))}
            </ol>
          </div>

          <article className="transformation__result" data-active={phase >= 4}>
            <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
              <div>
                <p className="text-xs font-bold text-link">Ticket creado</p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-ink">Ascensor fuera de servicio</h3>
              </div>
              <span className="rounded-full bg-[#fff4d8] px-3 py-1.5 text-xs font-bold text-[#765100]">Prioridad urgente</span>
            </div>
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div><dt className="text-steel">Contexto</dt><dd className="mt-1 font-bold text-ink">San Martín · Piso 4 · Depto. B</dd></div>
              <div><dt className="text-steel">Categoría</dt><dd className="mt-1 font-bold text-ink">Ascensores</dd></div>
              <div><dt className="text-steel">Estado</dt><dd className="mt-1 font-bold text-navy">En curso</dd></div>
              <div><dt className="text-steel">Incidencia</dt><dd className="mt-1 font-bold text-ink">Sin incidencia</dd></div>
            </dl>
            <div className="transformation__history" data-active={phase >= 5}>
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              <p><strong>Auditoría actualizada.</strong> El cambio queda asociado al ticket y a la unidad.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
