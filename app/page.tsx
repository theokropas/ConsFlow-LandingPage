import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Card, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
  description:
    "Ordená WhatsApp, edificios, unidades funcionales, vecinos, reclamos, documentos y trazabilidad en un CRM operativo para administradoras de consorcios.",
  openGraph: {
    title: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
    description:
      "Ordená WhatsApp, edificios, unidades funcionales, vecinos, reclamos, documentos y trazabilidad en un CRM operativo para administradoras de consorcios.",
  },
};

const heroChips = ["WhatsApp con contexto", "Tickets con estado", "Historial por unidad"];

const problemCards = [
  ["WhatsApps desordenados", "Mensajes importantes quedan mezclados con conversaciones del día a día, sin prioridad ni contexto administrativo."],
  ["Reclamos difíciles de seguir", "Cada reclamo necesita estado, edificio, unidad y seguimiento. Si queda en un chat, se vuelve frágil."],
  ["Deudas sin contexto", "Las expensas y saldos pendientes deben entenderse por unidad funcional, incluso cuando cambian los ocupantes."],
  ["Documentos dispersos", "Reglamentos, comprobantes, PDFs y comunicaciones se distribuyen por canales distintos y se vuelven difíciles de encontrar."],
  ["Falta de historial por unidad", "La memoria operativa de una administradora no puede depender de quién atendió el último mensaje."],
  ["Poca visibilidad operativa", "Sin un panel claro, cuesta ver reclamos demorados, deudas vencidas y temas que requieren atención."],
];

const modules = [
  ["Panel por consorcio activo", "Cambiá el foco de trabajo por edificio y mirá pendientes, reclamos, unidades y deudas en contexto."],
  ["Reclamos y consultas", "Registrá solicitudes con estado, tipo, prioridad y vínculo a edificio, unidad y persona relacionada."],
  ["Unidades funcionales", "Mantené la información organizada por unidad, propietario, inquilino, autorizado o encargado."],
  ["Deudas y expensas", "Seguimiento operativo de saldos por unidad funcional para que el historial no dependa del ocupante de turno."],
  ["Proveedores y categorías", "Ordená rubros, proveedores y categorías de reclamos para responder con más criterio operativo."],
  ["FAQs y documentos", "Prepará respuestas frecuentes y documentos del edificio para reducir consultas repetidas."],
  ["Auditoría administrativa", "Trazabilidad de acciones y cambios para entender qué pasó, cuándo y sobre qué entidad."],
  ["Automatización asistida", "Ayuda para consultas frecuentes, con derivación humana cuando el caso requiere criterio administrativo."],
];

const productTruths = [
  ["El edificio como tablero", "Cada consorcio concentra sus unidades, reclamos, deudas, documentos y prioridades."],
  ["La unidad como historial", "La deuda y los antecedentes se ordenan por unidad funcional, no por chats o personas sueltas."],
  ["El reclamo como caso", "Cada consulta puede convertirse en un ticket con estado, prioridad y seguimiento visible."],
  ["La auditoría como respaldo", "Las acciones relevantes quedan pensadas para ser revisables por el equipo administrativo."],
];

const audiences = [
  ["Administradoras chicas", "Equipos que quieren profesionalizar la atención sin sumar complejidad innecesaria."],
  ["Administradoras medianas", "Operaciones que necesitan ordenar reclamos, unidades y documentación por edificio."],
  ["Equipos con alto volumen de WhatsApp", "Administraciones que reciben muchas consultas diarias y necesitan priorizar mejor."],
  ["Administraciones que buscan trazabilidad", "Organizaciones que quieren reducir dependencia de chats personales y mejorar el seguimiento."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero-reveal relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(47,129,223,0.18),transparent_28rem),radial-gradient(circle_at_88%_8%,rgba(16,32,51,0.12),transparent_24rem),linear-gradient(180deg,#ffffff_0%,#eef6fb_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(31,58,95,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(31,58,95,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" aria-hidden="true" />
        <div className="pulse-soft absolute left-6 top-20 hidden h-24 w-24 rounded-full border border-sky-200/70 bg-white/50 blur-[1px] lg:block" aria-hidden="true" />
        <div className="absolute bottom-12 right-10 hidden h-32 w-32 rounded-full bg-sky-200/20 blur-2xl lg:block" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-3 py-2 pr-4 text-sm font-medium text-slateblue shadow-sm backdrop-blur">
              <BrandLogo size="sm" priority />
              <span className="min-w-0 truncate">Backoffice operativo para administradoras de consorcios</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
              El CRM con WhatsApp para administradoras de consorcios
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              Centralizá reclamos, consultas, documentos, unidades funcionales e historial de conversaciones en una sola plataforma.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              WhatsApp sigue siendo el canal principal, pero ahora cada conversación puede quedar asociada al vecino, unidad funcional y edificio correcto.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Menos mensajes perdidos, menos reclamos desordenados y más seguimiento para el equipo administrativo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="group inline-flex items-center justify-center rounded-full bg-slateblue px-6 py-3 text-base font-semibold text-white shadow-soft transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-ink hover:shadow-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slateblue motion-reduce:hover:translate-y-0" href="/contact">
                Solicitar una demo <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-base font-semibold text-ink shadow-sm transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-1 hover:border-slateblue hover:text-slateblue hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slateblue motion-reduce:hover:translate-y-0" href="#como-funciona">
                Ver cómo funciona
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {heroChips.map((item, index) => (
                <div key={item} className={`stagger-in stagger-${index + 1} rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-sm backdrop-blur`}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brandblue" aria-hidden="true" />{item}
                </div>
              ))}
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <Section
        id="producto"
        eyebrow="Identidad de producto"
        title="Una administradora no necesita otro chat: necesita una cabina de control"
        intro="ConsFlow está pensado desde la lógica real de una administración: edificios, unidades funcionales, vecinos, deudas, reclamos, proveedores, documentos y acciones que necesitan quedar ordenadas."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productTruths.map(([title, text]) => <Card key={title} title={title}>{text}</Card>)}
        </div>
      </Section>

      <Section
        id="problema"
        eyebrow="Problema"
        title="La atención diaria de una administradora no debería depender de mensajes sueltos"
        intro="Cuando los reclamos, deudas, documentos y consultas viven en conversaciones dispersas, el equipo pierde contexto: qué unidad corresponde, qué edificio está afectado, qué está vencido y qué requiere seguimiento."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map(([title, text]) => (
            <Card key={title} title={title}>{text}</Card>
          ))}
        </div>
      </Section>

      <Section id="solucion" eyebrow="Solución" title="ConsFlow convierte la atención diaria en operación trazable" className="bg-white">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-calm to-white p-8 shadow-soft">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brandblue/10" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slateblue">Orden administrativo real</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              ConsFlow reúne conversaciones, reclamos, unidades funcionales, deudas, proveedores, documentos e historial en una plataforma pensada para el trabajo diario de una administradora.
            </p>
            <div className="mt-6 rounded-2xl border border-white/80 bg-white/70 p-4 text-sm leading-6 text-slate-600 shadow-sm">
              La lógica es simple: cada cosa tiene lugar. Un reclamo pertenece a un edificio y una unidad; una deuda queda asociada a la unidad; una acción deja rastro para el equipo.
            </div>
          </div>
          <ul className="grid gap-4 text-slate-700 sm:grid-cols-2">
            {[
              "Visualizá pendientes por consorcio activo antes de que escalen.",
              "Convertí consultas y reclamos en casos con estado y prioridad.",
              "Asociá vecinos, propietarios e inquilinos a unidades funcionales.",
              "Separá deuda, unidad y ocupante para conservar contexto histórico.",
              "Ordená proveedores, categorías, FAQs y documentos frecuentes.",
              "Usá automatización como asistencia, no como reemplazo de la gestión humana.",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-soft motion-reduce:hover:translate-y-0"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brandblue" aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="como-funciona" eyebrow="Cómo funciona" title="Del mensaje aislado al caso administrable">
        <div className="grid gap-5 lg:grid-cols-5">
          {[
            ["1", "Elegís el consorcio activo", "El equipo trabaja con el edificio correcto y ve pendientes relevantes para ese contexto."],
            ["2", "Ubicás la unidad", "La consulta se vincula con unidad funcional, persona relacionada y antecedentes operativos."],
            ["3", "Registrás el caso", "El reclamo o consulta queda como ticket con estado, tipo, prioridad y seguimiento."],
            ["4", "Respondés con asistencia", "Las respuestas automáticas ayudan con consultas frecuentes. Los casos sensibles pueden ser derivados a un administrador humano."],
            ["5", "Dejás trazabilidad", "Las acciones, documentos y cambios quedan pensados para ser consultados por el equipo."],
          ].map(([number, title, text]) => (
            <article key={number} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-premium motion-reduce:hover:translate-y-0">
              <span className="absolute left-10 top-10 h-full w-px bg-gradient-to-b from-sky-100 to-transparent lg:left-auto lg:right-6 lg:top-6 lg:h-px lg:w-20" aria-hidden="true" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slateblue to-brandblue text-sm font-bold text-white shadow-sm">{number}</span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="modulos" eyebrow="Módulos" title="Módulos que hablan el idioma de una administradora" className="bg-white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([title, text]) => <Card key={title} title={title}>{text}</Card>)}
        </div>
      </Section>

      <Section title="Más calma operativa para tu equipo, más claridad para los vecinos">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-premium">
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Menos dependencia de chats personales o conversaciones dispersas.",
              "Más claridad sobre pendientes, prioridad y estado de cada reclamo.",
              "Mejor contexto para responder consultas de vecinos y propietarios.",
              "Deudas y expensas observadas desde la unidad funcional.",
              "Historial operativo para revisar decisiones, cambios y comunicaciones.",
              "Atención más consistente sin perder criterio humano en casos sensibles.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-slate-700"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brandblue" aria-hidden="true" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="seguridad"
        eyebrow="Seguridad y privacidad"
        title="Seguridad, privacidad y trazabilidad desde el diseño"
        intro="ConsFlow está pensado para tratar la información operativa de administradoras con criterios de acceso controlado, registro de acciones y uso responsable de datos."
        className="bg-white"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="grid gap-4 text-slate-700 sm:grid-cols-2">
            {[
              "Diseño preparado para accesos controlados de usuarios autorizados.",
              "Historial y trazabilidad de acciones, conversaciones y casos.",
              "Tratamiento responsable de datos personales ingresados en la plataforma.",
              "No venta de datos personales.",
              "Criterios de minimización: usar la información necesaria para operar el servicio.",
              "Buenas prácticas frontend: sin secretos expuestos ni tracking invasivo en esta landing.",
            ].map((item) => <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-soft motion-reduce:hover:translate-y-0">{item}</li>)}
          </ul>
          <aside className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-calm via-white to-white p-8 text-slate-700 shadow-soft">
            <span className="absolute right-6 top-6 h-16 w-16 rounded-full border border-brandblue/20" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-ink">Transparencia para usuarios</h3>
            <p className="mt-4 leading-7">Podés consultar nuestras políticas públicas y los canales para solicitar eliminación de datos.</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link className="font-semibold text-slateblue underline decoration-slateblue/30 underline-offset-4 hover:text-ink" href="/privacy">Ver Política de Privacidad</Link>
              <Link className="font-semibold text-slateblue underline decoration-slateblue/30 underline-offset-4 hover:text-ink" href="/data-deletion">Solicitar eliminación de datos</Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section title="Automatización útil, sin perder control humano">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft transition-shadow duration-300 hover:shadow-premium">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-calm text-slateblue" aria-hidden="true">
            <span className="h-6 w-6 rounded-full border-2 border-current border-r-transparent" />
          </div>
          <p className="text-xl leading-8 text-slate-700">
            Las respuestas automáticas ayudan con consultas frecuentes. Los casos sensibles pueden ser derivados a un administrador humano.
          </p>
          <p className="mt-5 text-base leading-7 text-slate-600">
            ConsFlow no reemplaza la gestión de la administradora. La plataforma ayuda a ordenar, clasificar y asistir la atención diaria, manteniendo la posibilidad de intervención humana cuando el caso lo requiere.
          </p>
        </div>
      </Section>

      <Section title="Para quién es ConsFlow" className="bg-white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([title, text]) => <Card key={title} title={title}>{text}</Card>)}
        </div>
      </Section>

      <section className="section-reveal px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slateblue via-[#244b7c] to-brandblue p-8 text-center text-white shadow-premium sm:p-12">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-xl" aria-hidden="true" />
          <div className="absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ordená la atención diaria de tu administradora con ConsFlow</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-100">
              Conocé cómo ConsFlow puede ayudarte a convertir reclamos, deudas, consultas, documentos y unidades funcionales en una operación más clara y trazable.
            </p>
            <Link className="group mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slateblue shadow-soft transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-calm hover:shadow-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:hover:translate-y-0" href="/contact">
              Solicitar demo <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DashboardMockup() {
  return (
    <div className="float-soft relative min-w-0 rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-premium backdrop-blur sm:p-4" aria-label="Vista ilustrativa del panel operativo ConsFlow">
      <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slateblue shadow-soft sm:block" aria-hidden="true">
        Consorcio activo
      </div>
      <div className="absolute -bottom-5 left-8 hidden rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-semibold text-emerald-800 shadow-soft sm:block" aria-hidden="true">
        Auditoría visible
      </div>
      <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-calm/60 p-4">
        <div className="mb-4 grid gap-2 text-xs font-semibold text-slate-600 sm:grid-cols-[1fr_40px_1fr_40px_1fr] sm:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm">WhatsApp</div>
          <div className="flow-line hidden h-px rounded-full bg-sky-100 sm:block" aria-hidden="true" />
          <div className="rounded-2xl border border-slateblue/20 bg-slateblue px-3 py-3 text-white shadow-sm">ConsFlow</div>
          <div className="flow-line hidden h-px rounded-full bg-sky-100 sm:block" aria-hidden="true" />
          <div className="rounded-2xl border border-emerald-100 bg-white px-3 py-3 text-emerald-800 shadow-sm">Ticket + historial</div>
        </div>
        <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slateblue">Edificio seleccionado</p>
            <p className="mt-1 truncate text-lg font-bold text-ink">Edificio San Martín</p>
          </div>
          <span className="ml-3 shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 shadow-sm">3 prioridades</span>
        </div>
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          {[
            ["8", "Unidades con saldo"],
            ["12", "Reclamos abiertos"],
            ["4", "Documentos activos"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-soft motion-reduce:hover:translate-y-0">
              <p className="text-lg font-bold tabular-nums text-ink">{value}</p>
              <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {[
              ["Deudas vencidas", "5 unidades con saldo pendiente", "bg-rose-500"],
              ["Reclamos demorados", "2 casos siguen abiertos", "bg-amber-500"],
              ["Unidades sin inquilino", "Revisar datos del edificio", "bg-sky-500"],
            ].map(([item, detail, color], index) => (
              <div key={item} className={`rounded-2xl border p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-sm motion-reduce:hover:translate-y-0 ${index === 0 ? "border-slateblue bg-white shadow-sm" : "border-slate-200 bg-white/75"}`}>
                <div className="mb-3 flex items-center justify-between">
                  <span className={`h-2.5 w-2.5 rounded-full ${color}`} aria-hidden="true" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">Seguimiento</span>
                </div>
                <p className="text-sm font-semibold text-ink">{item}</p>
                <p className="mt-1 text-xs text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">UF 4B</p>
              <span className="rounded-full bg-calm px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-slateblue">Historial operativo</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">La deuda queda asociada a la unidad funcional y los reclamos se consultan con contexto del edificio.</p>
            <div className="mt-5 space-y-3">
              {["Consulta: expensas de junio", "Ticket: no funciona el ascensor", "Contexto: vecino y unidad asociados"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-calm px-4 py-3 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-brandblue" aria-hidden="true" />{item}</div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slateblue">Última actividad</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">Estado cambiado a “En proceso” · documento revisado · acción registrada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
