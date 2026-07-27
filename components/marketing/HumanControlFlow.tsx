"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "@/components/marketing/useReducedMotion";

export function HumanControlFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setActive(true);
      return;
    }
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setActive(true);
      observer.disconnect();
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="seguridad" className="human-section border-b border-line px-4 py-20 sm:px-6 lg:px-8 lg:py-32" data-active={active}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">Automatización donde ayuda. Personas donde importa.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-steel">La IA responde consultas frecuentes y organiza cada caso. Tu equipo conserva la revisión, la decisión y el seguimiento.</p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
            <Link href="/terms" className="human-link">Términos y privacidad</Link>
          </div>
        </div>

        <div className="human-flow" aria-label="Flujo de automatización y control humano">
          <div className="human-flow__auto">
            <p className="human-flow__label">CAPA AUTOMÁTICA</p>
            <div className="human-flow__sequence">
              {["Identifica", "Clasifica", "Responde o crea", "Registra"].map((item, index) => <span key={item} style={{ "--flow-index": index } as CSSProperties}>{item}</span>)}
            </div>
          </div>
          <div className="human-flow__branch" aria-hidden="true"><span /></div>
          <div className="human-flow__outcomes">
            <article>
              <p className="human-flow__label">CONSULTA FRECUENTE</p>
              <h3>Respuesta con contexto</h3>
              <p>La información disponible ayuda a responder sin perder el vínculo con la unidad.</p>
              <span className="human-flow__state">Registro actualizado</span>
            </article>
            <article className="is-human">
              <p className="human-flow__label">REQUIERE CRITERIO</p>
              <h3>Interviene el equipo</h3>
              <p>El caso se deriva con edificio, unidad, prioridad y actividad relacionada.</p>
              <span className="human-flow__state"><span aria-hidden="true">AD</span> Administración</span>
            </article>
          </div>
          <div className="human-flow__trace">
            <div><span>Organización</span><strong>Contexto separado por administradora</strong></div>
            <div><span>Acceso</span><strong>Usuarios internos autorizados</strong></div>
            <div><span>Trazabilidad</span><strong>Estados, prioridades y auditoría</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
