"use client";

import { KeyboardEvent, useId, useRef, useState } from "react";
import { ProductScreen, type ProductScreenId } from "@/components/marketing/ProductScreens";
import { ProductShell, type ProductModule } from "@/components/marketing/ProductShell";

const explorerItems = [
  { id: "dashboard", label: "Inicio", module: "dashboard" },
  { id: "tickets", label: "Reclamos", module: "tickets" },
  { id: "units", label: "Unidades", module: "units" },
  { id: "documents", label: "Documentos", module: "bot" },
  { id: "audit", label: "Auditoría", module: "audit" },
] as const satisfies ReadonlyArray<{ id: ProductScreenId; label: string; module: ProductModule }>;

export function ProductExplorer() {
  const [activeId, setActiveId] = useState<ProductScreenId>("dashboard");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = useId();
  const activeIndex = explorerItems.findIndex((item) => item.id === activeId);
  const active = explorerItems[activeIndex];

  function activate(index: number) {
    const next = explorerItems[index];
    setActiveId(next.id);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      activate((index + 1) % explorerItems.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      activate((index - 1 + explorerItems.length) % explorerItems.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      activate(0);
    } else if (event.key === "End") {
      event.preventDefault();
      activate(explorerItems.length - 1);
    }
  }

  return (
    <figure className="product-explorer">
      <div className="product-explorer__tabs" role="tablist" aria-label="Explorar ConsFlow">
        {explorerItems.map((item, index) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`${idPrefix}-${item.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${idPrefix}-${item.id}-panel`}
              tabIndex={selected ? 0 : -1}
              data-active={selected}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>0{index + 1}</span>{item.label}
            </button>
          );
        })}
      </div>
      <div
        key={active.id}
        id={`${idPrefix}-${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-${active.id}-tab`}
        className="product-explorer__frame product-screen-enter"
      >
        <ProductShell active={active.module}><ProductScreen id={active.id} /></ProductShell>
      </div>
    </figure>
  );
}
