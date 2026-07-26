"use client";

import { useEffect, useState } from "react";
import { MessageCircleMore } from "lucide-react";
import { ProductScreen, type ProductScreenId } from "@/components/marketing/ProductScreens";
import { ProductShell, type ProductModule } from "@/components/marketing/ProductShell";
import { useReducedMotion } from "@/components/marketing/useReducedMotion";

const journey = [
  { label: "Inicio", module: "dashboard", screen: "dashboard", detail: "La prioridad aparece en el centro operativo." },
  { label: "Reclamo", module: "tickets", screen: "tickets", detail: "El ticket reúne estado, urgencia y unidad." },
  { label: "Unidad", module: "units", screen: "units", detail: "El caso conserva su contexto operativo." },
  { label: "Auditoría", module: "audit", screen: "audit", detail: "Cada cambio queda registrado." },
] as const satisfies ReadonlyArray<{ label: string; module: ProductModule; screen: ProductScreenId; detail: string }>;

export function HeroFlowDemo() {
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const current = journey[step];

  useEffect(() => {
    if (reducedMotion) {
      setStep(journey.length - 1);
      setPlaying(false);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    if (!playing || step >= journey.length - 1) return;
    const timer = window.setTimeout(() => setStep((value) => Math.min(value + 1, journey.length - 1)), 2100);
    return () => window.clearTimeout(timer);
  }, [playing, reducedMotion, step]);

  useEffect(() => {
    if (step === journey.length - 1) setPlaying(false);
  }, [step]);

  function selectStep(index: number) {
    setStep(index);
    setPlaying(false);
  }

  return (
    <figure className="hero-product" aria-labelledby="hero-product-title">
      <div className="hero-product__story">
        <div className="hero-product__message">
          <MessageCircleMore aria-hidden="true" />
          <span><small>WhatsApp · nueva prioridad</small><strong>“El ascensor no funciona.”</strong></span>
        </div>
        <div className="hero-product__journey" role="group" aria-label="Recorrido de la prioridad">
          {journey.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={index === step}
              className="hero-product__stage"
              data-active={index === step}
              data-complete={index < step}
              onClick={() => selectStep(index)}
            >
              <span>{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-product__frame">
        <ProductShell active={current.module}>
          <div key={current.screen} className="product-screen-enter"><ProductScreen id={current.screen} focus /></div>
        </ProductShell>
      </div>

      <div className="hero-product__controls">
        <p id="hero-product-title"><strong>{current.label}.</strong> {current.detail}</p>
      </div>
      <figcaption className="sr-only">ConsFlow responde con inteligencia artificial las consultas frecuentes. Una prioridad que requiere gestión aparece en Inicio, se organiza como reclamo, se vincula a una unidad y queda registrada en Auditoría.</figcaption>
    </figure>
  );
}
