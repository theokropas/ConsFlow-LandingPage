import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ClipboardList,
  DoorOpen,
  FileText,
  Search,
  UserRound,
  WalletCards,
} from "lucide-react";
import type { ReactNode } from "react";

export type ProductScreenId = "dashboard" | "tickets" | "units" | "documents" | "audit";

export function ProductScreen({ id, focus = false }: { id: ProductScreenId; focus?: boolean }) {
  if (id === "tickets") return <TicketsScreen focus={focus} />;
  if (id === "units") return <UnitsScreen focus={focus} />;
  if (id === "documents") return <DocumentsScreen />;
  if (id === "audit") return <AuditScreen focus={focus} />;
  return <DashboardScreen focus={focus} />;
}

function DashboardScreen({ focus }: { focus: boolean }) {
  const metrics = [
    ["18", "Unidades activas", "1 sin personas vinculadas", DoorOpen],
    ["7", "Reclamos abiertos", "1 urgente · 2 demorados", ClipboardList],
    ["3", "Unidades con saldo", "4 saldos no pagados", WalletCards],
    ["1", "Sin personas vinculadas", "1 sin inquilino registrado", UserRound],
  ] as const;

  return (
    <div className="cf-screen cf-dashboard">
      <section className="cf-building-card">
        <div>
          <p className="cf-eyebrow">Inicio · Centro operativo</p>
          <h3>Edificio San Martín</h3>
          <span>Av. San Martín 1240 · Ciudad Autónoma de Buenos Aires</span>
        </div>
        <div className="cf-attention-count">
          <strong>3</strong><span>temas requieren atención</span><em>Revisar prioridades <ArrowRight /></em>
        </div>
      </section>

      <div className="cf-section-heading"><h4>Resumen operativo</h4><span>Actualizado hoy, 09:42</span></div>
      <div className="cf-metrics">
        {metrics.map(([value, label, detail, Icon]) => (
          <article key={label}><Icon aria-hidden="true" /><strong>{value}</strong><h5>{label}</h5><p>{detail}</p></article>
        ))}
      </div>

      <div className="cf-dashboard-grid">
        <ScreenCard title="Requiere atención" icon={<AlertTriangle />}>
          <ScreenRow focus={focus} title="Ascensor fuera de servicio" detail="Piso 4 · Depto. B" badges={["Prioridad urgente", "Sin actualización hace 48 h"]} />
          <ScreenRow title="Humedad en dormitorio" detail="Piso 2 · Depto. A" badges={["Prioridad alta"]} />
        </ScreenCard>
        <ScreenCard title="Acciones rápidas">
          <ScreenRow title="Gestionar reclamos" detail="Estado, prioridad y contexto" />
          <ScreenRow title="Ver auditoría" detail="Actividad de la organización" />
        </ScreenCard>
      </div>
    </div>
  );
}

function TicketsScreen({ focus }: { focus: boolean }) {
  return (
    <div className="cf-screen">
      <ScreenHeader title="Reclamos" description="Tickets de Edificio San Martín." action="Nuevo ticket" />
      <div className="cf-ticket-totals">
        {["12|Total", "4|Abiertos", "3|En curso", "4|Resueltos", "1|Cerrados"].map((item) => {
          const [value, label] = item.split("|");
          return <div key={label}><span>{label}</span><strong>{value}</strong></div>;
        })}
      </div>
      <div className="cf-filter-card">
        <span className="cf-search"><Search /> Título, descripción o persona</span>
        <span>Todos los estados</span><span>Todas las prioridades</span><span>Todas las categorías</span>
      </div>
      <div className="cf-table cf-ticket-table">
        <div className="cf-table__row is-header"><span>Reclamo</span><span>Unidad</span><span>Estado</span><span>Prioridad</span><span>Actualizado</span></div>
        <TicketRow focus={focus} title="Ascensor fuera de servicio" unit="Piso 4 · Depto. B" status="En curso" priority="Urgente" date="Hoy, 09:42" />
        <TicketRow title="Humedad en dormitorio" unit="Piso 2 · Depto. A" status="Abierto" priority="Alta" date="Ayer, 17:10" />
        <TicketRow title="Luz de palier" unit="General" status="Resuelto" priority="Baja" date="24 jul" />
      </div>
    </div>
  );
}

function UnitsScreen({ focus }: { focus: boolean }) {
  return (
    <div className="cf-screen">
      <div className="cf-back"><ArrowLeft /> Volver a Unidades</div>
      <ScreenHeader eyebrow="Detalle de unidad" title="Piso 4 · Depto. B" description="Edificio San Martín · UF 4B" action="Editar unidad" />
      <section className="cf-context-card">
        <div><p className="cf-eyebrow">Contexto</p><strong>Edificio San Martín</strong><span>Piso: 4 · Departamento: B · Código: UF 4B</span></div>
        <em>Unidad activa</em>
      </section>
      <div className="cf-unit-summaries">
        <SummaryCard icon={<WalletCards />} label="Saldos pendientes" value="1" />
        <SummaryCard icon={<CalendarDays />} label="Último período registrado" value="2026-07" />
        <SummaryCard icon={<AlertTriangle />} label="Saldos vencidos" value="0" />
      </div>
      <div className="cf-unit-grid">
        <ScreenCard title="Personas asociadas" icon={<UserRound />}>
          <ScreenRow title="María González" detail="Inquilina · vínculo activo" badges={["Contacto disponible"]} />
        </ScreenCard>
        <ScreenCard title="Reclamos relacionados" icon={<ClipboardList />}>
          <ScreenRow focus={focus} title="Ascensor fuera de servicio" detail="Creado el 24 jul 2026" badges={["En curso", "Prioridad urgente"]} />
        </ScreenCard>
      </div>
    </div>
  );
}

function DocumentsScreen() {
  return (
    <div className="cf-screen">
      <ScreenHeader eyebrow="Bot y comunicaciones" title="Documentos" description="Contenido disponible para respuestas automatizadas." action="Nuevo documento" />
      <div className="cf-filter-card"><span>Todos los alcances</span><span>Edificio San Martín</span><span>Todos los estados</span></div>
      <div className="cf-document-grid">
        <DocumentCard title="Protocolo de ascensores" scope="Edificio San Martín" detail="Actualizado el 23 jul 2026" />
        <DocumentCard title="Preguntas frecuentes de expensas" scope="Organización" detail="Actualizado el 18 jul 2026" />
        <DocumentCard title="Reglamento de copropiedad" scope="Edificio San Martín" detail="Actualizado el 02 jul 2026" />
      </div>
    </div>
  );
}

function AuditScreen({ focus }: { focus: boolean }) {
  return (
    <div className="cf-screen">
      <ScreenHeader eyebrow="Trazabilidad" title="Auditoría" description="Actividad registrada en toda la organización." />
      <div className="cf-filter-card"><span className="cf-search"><Search /> Buscar actividad</span><span>Todas las acciones</span><span>Todas las entidades</span></div>
      <div className="cf-table cf-audit-table">
        <div className="cf-table__row is-header"><span>Fecha</span><span>Acción</span><span>Entidad</span><span>Actor</span><span>Información</span></div>
        <AuditRow focus={focus} date="Hoy, 09:42" action="Estado actualizado" entity="Reclamo" actor="Administración" info="Ascensor · En curso" />
        <AuditRow date="Hoy, 09:39" action="Unidad vinculada" entity="Reclamo" actor="Sistema" info="Piso 4 · Depto. B" />
        <AuditRow date="Hoy, 09:38" action="Ticket creado" entity="Reclamo" actor="Sistema" info="Prioridad urgente" />
      </div>
    </div>
  );
}

function ScreenHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: string }) {
  return (
    <div className="cf-page-header">
      <div>{eyebrow ? <p className="cf-eyebrow">{eyebrow}</p> : null}<h3>{title}</h3><span>{description}</span></div>
      {action ? <em>{action}</em> : null}
    </div>
  );
}

function ScreenCard({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }) {
  return <section className="cf-card"><h4>{icon}{title}</h4><div>{children}</div></section>;
}

function ScreenRow({ title, detail, badges = [], focus = false }: { title: string; detail: string; badges?: string[]; focus?: boolean }) {
  return (
    <div className="cf-list-row" data-focus={focus}>
      <span className="cf-list-row__icon"><ClipboardList /></span>
      <span className="cf-list-row__content"><strong>{title}</strong><small>{detail}</small>{badges.length ? <span>{badges.map((badge) => <em key={badge}>{badge}</em>)}</span> : null}</span>
      <ArrowRight className="cf-list-row__arrow" />
    </div>
  );
}

function SummaryCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <article className="cf-summary-card"><span>{icon}</span><small>{label}</small><strong>{value}</strong></article>;
}

function TicketRow({ title, unit, status, priority, date, focus = false }: { title: string; unit: string; status: string; priority: string; date: string; focus?: boolean }) {
  return <div className="cf-table__row" data-focus={focus}><strong>{title}</strong><span>{unit}</span><em>{status}</em><em data-priority={priority}>{priority}</em><span>{date}</span></div>;
}

function AuditRow({ date, action, entity, actor, info, focus = false }: { date: string; action: string; entity: string; actor: string; info: string; focus?: boolean }) {
  return <div className="cf-table__row" data-focus={focus}><span>{date}</span><strong>{action}</strong><span>{entity}</span><span>{actor}</span><span>{info}</span></div>;
}

function DocumentCard({ title, scope, detail }: { title: string; scope: string; detail: string }) {
  return <article className="cf-document"><span><FileText aria-hidden="true" /></span><strong>{title}</strong><p>Alcance · {scope}</p><small>{detail}</small><em>Disponible</em></article>;
}
