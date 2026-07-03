import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Card, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
  description:
    "Centralizá reclamos, consultas, documentos, unidades funcionales e historial de conversaciones en una sola plataforma para administradoras de consorcios.",
  openGraph: {
    title: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
    description:
      "Centralizá reclamos, consultas, documentos, unidades funcionales e historial de conversaciones en una sola plataforma para administradoras de consorcios.",
  },
};

const problemCards = [
  ["WhatsApps desordenados", "Mensajes importantes quedan mezclados con conversaciones operativas, sin criterios claros de prioridad."],
  ["Reclamos difíciles de seguir", "Es complejo saber qué casos están abiertos, quién tomó intervención y qué respuesta se dio."],
  ["Consultas repetidas", "El equipo responde una y otra vez preguntas frecuentes que podrían estar mejor organizadas."],
  ["Documentos dispersos", "Reglamentos, comprobantes, expensas y comunicaciones se distribuyen por distintos canales."],
  ["Falta de historial por unidad", "La información queda asociada a chats sueltos y no a unidades funcionales o edificios."],
  ["Poca visibilidad operativa", "Sin trazabilidad, resulta difícil medir carga de trabajo, pendientes y tiempos de respuesta."],
];

const modules = [
  ["Inbox centralizado", "Un espacio de trabajo para ordenar conversaciones entrantes y consultas del día a día."],
  ["Reclamos y tickets", "Registro de casos con estado, responsable, prioridad y seguimiento operativo."],
  ["Historial por unidad funcional", "Contexto reunido por edificio, unidad, vecino y conversación para responder con más claridad."],
  ["Gestión de documentos", "Organización de documentos frecuentes para facilitar su consulta y envío responsable."],
  ["Automatización de consultas frecuentes", "Asistencia para clasificar y responder preguntas habituales sin perder control humano."],
  ["Trazabilidad y auditoría", "Registro de interacciones y acciones para entender qué pasó y quién intervino."],
  ["Gestión por edificio", "Segmentación de información y casos por consorcio para equipos que administran varias propiedades."],
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
      <section className="hero-reveal relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(47,129,223,0.14),transparent_28rem),radial-gradient(circle_at_90%_5%,rgba(31,58,95,0.12),transparent_24rem),linear-gradient(180deg,#ffffff_0%,#eef6fb_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute left-6 top-20 hidden h-24 w-24 rounded-full border border-sky-200/70 bg-white/50 blur-[1px] lg:block pulse-soft" aria-hidden="true" />
        <div className="absolute bottom-12 right-10 hidden h-32 w-32 rounded-full bg-sky-200/20 blur-2xl lg:block" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-3 py-2 pr-4 text-sm font-medium text-slateblue shadow-sm backdrop-blur">
              <BrandLogo size="sm" priority />
              <span>Plataforma operativa para administradoras de consorcios</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              El CRM con WhatsApp para administradoras de consorcios
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              Centralizá reclamos, consultas, documentos, unidades funcionales e historial de conversaciones en una sola plataforma.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Diseñado para administradoras que necesitan ordenar la atención diaria, mejorar la trazabilidad y mantener control humano sobre los casos sensibles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="group inline-flex items-center justify-center rounded-full bg-slateblue px-6 py-3 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-ink hover:shadow-premium focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-slateblue motion-reduce:hover:translate-y-0" href="/contact">
                Solicitar una demo <span className="ml-2 transition group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-base font-semibold text-ink shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slateblue hover:text-slateblue hover:shadow-soft focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-slateblue motion-reduce:hover:translate-y-0" href="#como-funciona">
                Ver cómo funciona
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {[
                "Inbox centralizado",
                "Tickets con responsables",
                "Historial por unidad",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brandblue" aria-hidden="true" />{item}
                </div>
              ))}
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <Section
        id="problema"
        eyebrow="Problema"
        title="La atención diaria de una administradora no debería depender de mensajes sueltos"
        intro="Cuando los reclamos, consultas y documentos se gestionan en conversaciones dispersas, es difícil saber qué está pendiente, quién respondió y qué historial tiene cada unidad."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map(([title, text]) => (
            <Card key={title} title={title}>{text}</Card>
          ))}
        </div>
      </Section>

      <Section id="solucion" eyebrow="Solución" title="ConsFlow centraliza la operación de atención y gestión de reclamos" className="bg-white">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-calm to-white p-8 shadow-soft">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brandblue/10" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slateblue">Operación conectada</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              ConsFlow reúne conversaciones, reclamos, unidades funcionales, documentos e historial en una plataforma pensada para el trabajo diario de una administradora.
            </p>
          </div>
          <ul className="grid gap-4 text-slate-700 sm:grid-cols-2">
            {[
              "Centralizá los canales de atención en un flujo operativo claro.",
              "Convertí consultas y reclamos en casos con seguimiento.",
              "Asociá información relevante a edificios y unidades funcionales.",
              "Mantené registro de conversaciones, respuestas y acciones del equipo.",
              "Ordená documentos frecuentes para reducir búsquedas manuales.",
              "Usá automatización como asistencia, no como reemplazo de la gestión humana.",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-soft motion-reduce:hover:translate-y-0"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brandblue" aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="como-funciona" eyebrow="Cómo funciona" title="Un flujo simple para ordenar la atención diaria">
        <div className="grid gap-5 lg:grid-cols-5">
          {[
            ["1", "Ingresan consultas y reclamos", "El equipo recibe comunicaciones y las organiza dentro de un inbox operativo."],
            ["2", "Se clasifican por edificio y unidad", "Cada caso puede asociarse al contexto necesario para evitar perder historial."],
            ["3", "Se crean tickets y responsables", "Los reclamos se registran con estado y seguimiento para ordenar prioridades."],
            ["4", "Se asisten consultas frecuentes", "Las respuestas automáticas ayudan con consultas frecuentes. Los casos sensibles pueden ser derivados a un administrador humano."],
            ["5", "Queda trazabilidad", "El historial permite revisar conversaciones, documentos y acciones realizadas."],
          ].map(([number, title, text]) => (
            <article key={number} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-premium motion-reduce:hover:translate-y-0">
              <span className="absolute left-10 top-10 h-full w-px bg-gradient-to-b from-sky-100 to-transparent lg:left-auto lg:right-6 lg:top-6 lg:h-px lg:w-20" aria-hidden="true" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slateblue to-brandblue text-sm font-bold text-white shadow-sm">{number}</span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="modulos" eyebrow="Módulos" title="Módulos pensados para la operación de una administradora" className="bg-white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([title, text]) => <Card key={title} title={title}>{text}</Card>)}
        </div>
      </Section>

      <Section title="Más orden para tu equipo, mejor atención para los vecinos">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition hover:shadow-premium">
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Menos dependencia de chats personales o conversaciones dispersas.",
              "Más claridad sobre pendientes, responsables y estado de cada reclamo.",
              "Mejor contexto para responder consultas de vecinos y propietarios.",
              "Documentación más accesible para el equipo autorizado.",
              "Historial operativo para revisar decisiones y comunicaciones.",
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
              "Accesos controlados para usuarios autorizados.",
              "Historial y trazabilidad de conversaciones y casos.",
              "Tratamiento responsable de datos personales ingresados en la plataforma.",
              "No venta de datos personales.",
              "Criterios de minimización: usar la información necesaria para operar el servicio.",
              "Buenas prácticas frontend: sin secretos expuestos ni tracking invasivo en esta landing.",
            ].map((item) => <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-soft motion-reduce:hover:translate-y-0">{item}</li>)}
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
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:shadow-premium">
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
              Conocé cómo ConsFlow puede ayudarte a centralizar reclamos, consultas, documentos e historial operativo en un entorno profesional.
            </p>
            <Link className="group mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slateblue shadow-soft transition hover:-translate-y-1 hover:bg-calm hover:shadow-premium focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white motion-reduce:hover:translate-y-0" href="/contact">
              Solicitar demo <span className="ml-2 transition group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DashboardMockup() {
  return (
    <div className="float-soft relative rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-premium backdrop-blur" aria-label="Vista ilustrativa del panel ConsFlow">
      <div className="absolute -right-6 -top-6 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slateblue shadow-soft" aria-hidden="true">
        24 casos ordenados
      </div>
      <div className="absolute -bottom-5 left-8 hidden rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-semibold text-emerald-800 shadow-soft sm:block" aria-hidden="true">
        SLA en seguimiento
      </div>
      <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-calm/60 p-4">
        <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slateblue">Inbox operativo</p>
            <p className="mt-1 text-lg font-bold text-ink">Reclamos y consultas</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">En seguimiento</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {["Filtración en palier", "Consulta de expensas", "Solicitud de reglamento"].map((item, index) => (
              <div key={item} className={`rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-sm motion-reduce:hover:translate-y-0 ${index === 0 ? "border-slateblue bg-white shadow-sm" : "border-slate-200 bg-white/75"}`}>
                <div className="mb-3 flex items-center justify-between">
                  <span className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-brandblue" : "bg-slate-300"}`} aria-hidden="true" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">#{1248 + index}</span>
                </div>
                <p className="text-sm font-semibold text-ink">{item}</p>
                <p className="mt-1 text-xs text-slate-500">Edificio Norte · Unidad {index + 3}B</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">Ticket #1248</p>
              <span className="rounded-full bg-calm px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-slateblue">Alta prioridad</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">Reclamo registrado, asignado y vinculado al historial de la unidad funcional.</p>
            <div className="mt-5 space-y-3">
              {["Estado: abierto", "Responsable: administración", "Documento vinculado: acta de mantenimiento"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-calm px-4 py-3 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-brandblue" aria-hidden="true" />{item}</div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slateblue">Trazabilidad</p>
              <div className="mt-3 flex items-center gap-2" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-brandblue" />
                <span className="h-px flex-1 bg-sky-200" />
                <span className="h-2 w-2 rounded-full bg-brandblue" />
                <span className="h-px flex-1 bg-sky-200" />
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
