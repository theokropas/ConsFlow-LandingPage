import Link from "next/link";
import { HeroFlowDemo } from "@/components/marketing/HeroFlowDemo";
import { HumanControlFlow } from "@/components/marketing/HumanControlFlow";
import { OperationalTransformation } from "@/components/marketing/OperationalTransformation";
import { ProductAreas } from "@/components/marketing/ProductAreas";
import { ProductExplorer } from "@/components/marketing/ProductExplorer";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "ConsFlow | CRM operativo con IA y WhatsApp para consorcios",
  description:
    "ConsFlow responde consultas frecuentes con IA y conecta mensajes, personas, unidades, reclamos y seguimiento para administradoras de consorcios.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <section className="hero-shell relative isolate overflow-hidden border-b border-line bg-white">
        <span data-header-sentinel className="absolute left-0 top-0 h-px w-px" aria-hidden="true" />
        <div className="hero-shell__field" aria-hidden="true" />
        <div className="hero-shell__lines" aria-hidden="true" />
        <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="hero-sequence relative z-10 max-w-[54rem]">
            <p className="text-sm font-bold text-link">CRM operativo con IA y WhatsApp para administradoras de consorcios</p>
            <h1 className="mt-5 font-display text-[clamp(2.55rem,5.8vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-ink">
              ConsFlow, tu consorcio en orden.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-steel sm:text-xl">
              Con IA respondemos consultas frecuentes por WhatsApp. Cuando un caso requiere gestión, ConsFlow lo conecta con el edificio, la unidad, el reclamo y la actividad del equipo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">Solicitar una demo</Link>
              <Link href="#producto" className="button-secondary">Conocer el producto</Link>
            </div>
          </div>

          <div className="hero-demo-wrap relative z-10 mt-12 lg:mt-16"><HeroFlowDemo /></div>
        </div>
      </section>

      <OperationalTransformation />

      <section id="producto" className="section-reveal border-y border-line bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">Una operación. Cuatro áreas conectadas.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">Comunicación, gestión, seguimiento e información operativa con el mismo contexto.</p>
          </div>
          <div className="mt-12 lg:mt-16"><ProductAreas /></div>
        </div>
      </section>

      <section id="explorador" className="explorer-section section-reveal px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">Entrá al centro de la operación.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">Explorá cómo ConsFlow reúne prioridades, reclamos, unidades, documentos y actividad.</p>
          </div>
          <div className="mt-12 lg:mt-16"><ProductExplorer /></div>
        </div>
      </section>

      <HumanControlFlow />

      <section className="use-cases-section border-b border-line px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <h2 className="max-w-[15ch] font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">Para equipos que administran contexto, no solo mensajes.</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-steel">ConsFlow está pensado para el trabajo diario de administradoras chicas y medianas.</p>
          </div>
          <ul className="use-cases-list">
            {[
              ["WhatsApp concentra la atención", "Ordená conversaciones sin separar el mensaje del edificio y la unidad."],
              ["El contexto se pierde entre personas", "Dejá disponibles unidades, estados y actividad para todo el equipo."],
              ["Los reclamos cambian de manos", "Seguí cada caso con prioridad e historial, aunque intervengan varias personas."],
              ["Las consultas frecuentes ocupan tiempo", "Automatizá lo repetitivo y derivá lo que necesita criterio humano."],
            ].map(([situation, outcome]) => (
              <li key={situation}>
                <span aria-hidden="true" />
                <h3>{situation}</h3>
                <p>{outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing-section section-reveal overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 border-t-2 border-ink pt-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-[16ch] font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">Dejá de administrar conversaciones sueltas.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-steel">Conocé cómo ConsFlow puede ordenar la atención y el seguimiento diario de tu administradora.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="button-primary">Solicitar una demo</Link>
              <a className="email-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>

          <div className="closing-flow" aria-label="Un mensaje convertido en una tarea completada">
            <div className="closing-flow__message">
              <span>Mensaje</span>
              <p>El ascensor sigue sin funcionar.</p>
            </div>
            <div className="closing-flow__path" aria-hidden="true"><span /></div>
            <div className="closing-flow__task">
              <div><span>Reclamo</span><strong>Ascensor · UF 4B</strong></div>
              <span className="closing-flow__done">En curso</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
