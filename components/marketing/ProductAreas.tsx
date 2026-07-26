"use client";

import { KeyboardEvent, ReactNode, useId, useRef, useState } from "react";

const areas = [
  {
    id: "comunicacion",
    title: "Comunicación",
    description: "La IA responde lo frecuente y deriva lo que necesita gestión.",
    detail: "ConsFlow responde consultas frecuentes por WhatsApp con la información disponible. Cuando hace falta criterio, entrega el caso al equipo con contexto.",
  },
  {
    id: "gestion",
    title: "Gestión de consorcios",
    description: "Edificios, unidades y personas relacionados.",
    detail: "Cada unidad conserva sus vínculos con titulares, inquilinos, ocupantes y la información del edificio.",
  },
  {
    id: "seguimiento",
    title: "Reclamos y seguimiento",
    description: "Cada caso avanza con estado y prioridad.",
    detail: "Categorías, prioridades, unidades relacionadas e historial vuelven visible qué está pendiente y qué pasó antes.",
  },
  {
    id: "informacion",
    title: "Información operativa",
    description: "Documentos, expensas y proveedores a mano.",
    detail: "Los módulos operativos se consultan con el edificio y la unidad correctos como contexto.",
  },
] as const;

type AreaId = (typeof areas)[number]["id"];

export function ProductAreas() {
  const [activeArea, setActiveArea] = useState<AreaId>("comunicacion");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = useId();
  const activeIndex = areas.findIndex((area) => area.id === activeArea);
  const active = areas[activeIndex];

  function activate(index: number) {
    const next = areas[index];
    setActiveArea(next.id);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      activate((index + 1) % areas.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      activate((index - 1 + areas.length) % areas.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      activate(0);
    } else if (event.key === "End") {
      event.preventDefault();
      activate(areas.length - 1);
    }
  }

  return (
    <div className="areas-switcher">
      <div className="areas-switcher__tabs" role="tablist" aria-label="Áreas de ConsFlow">
        {areas.map((area, index) => {
          const selected = area.id === activeArea;
          return (
            <button
              key={area.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`${idPrefix}-${area.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${idPrefix}-${area.id}-panel`}
              tabIndex={selected ? 0 : -1}
              className="areas-switcher__tab"
              data-active={selected}
              onClick={() => setActiveArea(area.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="areas-switcher__index">0{index + 1}</span>
              <span>
                <strong>{area.title}</strong>
                <small>{area.description}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        id={`${idPrefix}-${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-${active.id}-tab`}
        className="areas-switcher__panel preview-panel-enter"
      >
        <div className="areas-switcher__copy">
          <p className="text-sm font-bold text-link">{active.title}</p>
          <h3 className="mt-3 max-w-lg font-display text-2xl font-extrabold tracking-[-0.025em] text-ink sm:text-3xl">{active.description}</h3>
          <p className="mt-4 max-w-lg text-base leading-7 text-steel">{active.detail}</p>
        </div>
        <div className="areas-switcher__preview">
          <div className="areas-switcher__previewbar">
            <span>ConsFlow</span>
            <span>{active.title}</span>
          </div>
          {activeArea === "comunicacion" ? <AttentionView /> : null}
          {activeArea === "gestion" ? <ManagementView /> : null}
          {activeArea === "seguimiento" ? <OperationView /> : null}
          {activeArea === "informacion" ? <InformationView /> : null}
        </div>
      </div>
    </div>
  );
}

function PreviewRow({ leading, title, meta, trailing }: { leading: string; title: string; meta: string; trailing?: ReactNode }) {
  return (
    <div className="preview-row">
      <span className="preview-row__leading" aria-hidden="true">{leading}</span>
      <span className="min-w-0"><strong className="block truncate text-ink">{title}</strong><small className="mt-0.5 block truncate text-steel">{meta}</small></span>
      {trailing ? <span className="ml-auto shrink-0">{trailing}</span> : null}
    </div>
  );
}

function AttentionView() {
  return (
    <div className="area-view area-view--attention">
      <div className="border-r border-line p-3">
        <p className="area-view__label">BOT Y COMUNICACIONES</p>
        <div className="mt-3 space-y-1.5">
          <PreviewRow leading="MG" title="Ascensor detenido" meta="San Martín · UF 4B" trailing={<span className="area-view__dot" />} />
          <PreviewRow leading="JL" title="Consulta de expensas" meta="Belgrano · UF 2A" />
          <PreviewRow leading="AR" title="Documento solicitado" meta="Rivadavia · UF 6C" />
        </div>
      </div>
      <div className="p-4">
        <p className="area-view__label">CONTEXTO DE LA CONSULTA</p>
        <p className="mt-4 max-w-sm rounded-xl rounded-tl-sm bg-softblue p-3 text-xs leading-5 text-ink">El ascensor sigue sin funcionar. ¿Tienen una actualización?</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {["Persona identificada", "UF 4B", "Edificio San Martín"].map((item) => <span key={item} className="area-view__fact">{item}</span>)}
        </div>
        <p className="mt-4 text-xs font-semibold leading-5 text-link">Caso derivado al equipo con el contexto disponible.</p>
      </div>
    </div>
  );
}

function ManagementView() {
  return (
    <div className="area-view area-view--management p-4">
      <div className="area-view__building">
        <p className="area-view__label">EDIFICIO SELECCIONADO</p>
        <h4>Edificio San Martín</h4>
        <p>Av. San Martín · Ciudad Autónoma de Buenos Aires</p>
      </div>
      <div className="area-view__relations">
        <div className="area-view__unit">
          <span>UNIDAD FUNCIONAL</span>
          <strong>Piso 4 · Depto. B</strong>
          <small>Activa · contexto disponible</small>
        </div>
        <div className="area-view__relation-line" aria-hidden="true"><span /></div>
        <div className="space-y-2">
          <PreviewRow leading="TI" title="Titular de la unidad" meta="Titular · contacto disponible" trailing={<span className="screen-status">Activo</span>} />
          <PreviewRow leading="IN" title="Vecino identificado" meta="Inquilino/a · conversación vinculada" trailing={<span className="screen-status">Activo</span>} />
        </div>
      </div>
    </div>
  );
}

function OperationView() {
  return (
    <div className="area-view p-4">
      <div className="flex items-center justify-between gap-3">
        <div><p className="area-view__label">RECLAMOS</p><p className="mt-1 text-sm font-bold text-ink">Seguimiento operativo</p></div>
        <span className="rounded-lg bg-brand px-2.5 py-1.5 text-[0.65rem] font-bold text-white">Nuevo ticket</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        <div className="area-table-row area-table-row--header"><span>Reclamo</span><span>Prioridad</span><span>Estado</span></div>
        <div className="area-table-row"><span><strong>Ascensor fuera de servicio</strong><small>San Martín · UF 4B</small></span><span className="font-bold text-[#9a5700]">Urgente</span><span className="area-state-shift">En curso</span></div>
        <div className="area-table-row"><span><strong>Humedad en dormitorio</strong><small>Belgrano · UF 2A</small></span><span>Media</span><span>Abierto</span></div>
        <div className="area-table-row"><span><strong>Luz de palier</strong><small>Rivadavia · Piso 6</small></span><span>Baja</span><span>Resuelto</span></div>
      </div>
    </div>
  );
}

function InformationView() {
  return (
    <div className="area-view p-4">
      <div className="flex items-center justify-between gap-3">
        <div><p className="area-view__label">INFORMACIÓN DEL EDIFICIO</p><p className="mt-1 text-sm font-bold text-ink">San Martín</p></div>
        <span className="text-[0.62rem] font-bold text-steel">Contexto compartido</span>
      </div>
      <div className="information-modules mt-4">
        <div><span>Documento</span><strong>Protocolo de ascensores</strong><small>Disponible</small></div>
        <div><span>Expensas</span><strong>Último período registrado</strong><small>Pendientes por revisar</small></div>
        <div><span>Proveedor</span><strong>Servicio técnico</strong><small>Categoría · Ascensores</small></div>
      </div>
      <p className="mt-4 border-t border-line pt-4 text-[0.68rem] leading-5 text-steel">La información se consulta por organización, edificio y unidad funcional.</p>
    </div>
  );
}
