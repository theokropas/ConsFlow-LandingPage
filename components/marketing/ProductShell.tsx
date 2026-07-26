import Image from "next/image";
import {
  AlertTriangle,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronsLeft,
  ClipboardList,
  Home,
  ReceiptText,
  ScrollText,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

export type ProductModule = "dashboard" | "buildings" | "units" | "persons" | "providers" | "tickets" | "expenses" | "issues" | "audit" | "bot" | "settings";

type NavigationItem = {
  id: ProductModule;
  label: string;
  icon: LucideIcon;
};

const operationItems: NavigationItem[] = [
  { id: "dashboard", label: "Inicio", icon: BarChart3 },
  { id: "buildings", label: "Edificios", icon: Building2 },
  { id: "units", label: "Unidades", icon: Home },
  { id: "persons", label: "Personas", icon: Users },
  { id: "providers", label: "Proveedores", icon: BriefcaseBusiness },
  { id: "tickets", label: "Reclamos", icon: ClipboardList },
  { id: "expenses", label: "Expensas", icon: ReceiptText },
  { id: "issues", label: "Incidencias", icon: AlertTriangle },
];

const systemItems: NavigationItem[] = [
  { id: "audit", label: "Auditoría", icon: ScrollText },
  { id: "bot", label: "Bot y comunicaciones", icon: Bot },
  { id: "settings", label: "Configuración", icon: Settings },
];

const modulesWithBuildingContext = new Set<ProductModule>(["dashboard", "units", "persons", "tickets", "expenses", "issues", "bot"]);

export function ProductShell({ active, children }: { active: ProductModule; children: ReactNode }) {
  return (
    <div className="product-shell" data-module={active}>
      <aside className="product-shell__sidebar" aria-label="Navegación de ConsFlow">
        <div className="product-shell__brand">
          <Image src="/images/consflow-light-mark.png" alt="" width={32} height={32} />
          <span><strong>ConsFlow</strong><small>Gestión consorcial</small></span>
        </div>
        <ShellNavigation label="Operación" items={operationItems} active={active} />
        <ShellNavigation label="Sistema" items={systemItems} active={active} />
      </aside>

      <div className="product-shell__workspace">
        <div className="product-shell__header">
          <span className="product-shell__collapse" aria-hidden="true"><ChevronsLeft /></span>
          {modulesWithBuildingContext.has(active) ? (
            <span className="product-shell__building">
              <Building2 aria-hidden="true" />
              <span><small>Edificio</small><strong>Edificio San Martín</strong></span>
              <ChevronDown aria-hidden="true" />
            </span>
          ) : null}
        </div>
        <div className="product-shell__main">{children}</div>
      </div>
    </div>
  );
}

function ShellNavigation({ label, items, active }: { label: string; items: NavigationItem[]; active: ProductModule }) {
  return (
    <div className="product-shell__navigation">
      <p>{label}</p>
      <ul>
        {items.map(({ id, label: itemLabel, icon: Icon }) => (
          <li key={id} data-active={active === id}>
            <Icon aria-hidden="true" />
            <span>{itemLabel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
