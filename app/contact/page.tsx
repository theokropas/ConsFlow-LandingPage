import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Solicitar demo | ConsFlow",
  description:
    "Solicitá una demo de ConsFlow para conocer cómo centralizar reclamos, consultas, documentos, unidades funcionales e historial operativo.",
  openGraph: {
    title: "Solicitar demo | ConsFlow",
    description:
      "Solicitá una demo de ConsFlow para conocer cómo centralizar reclamos, consultas, documentos, unidades funcionales e historial operativo.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,rgba(47,129,223,0.10),transparent_32%),linear-gradient(180deg,#f8fbfd,#eef6fb)] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-soft lg:p-10">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brandblue/10" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slateblue">Demo</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Solicitá una demo de ConsFlow</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Completá el formulario y te contactaremos para entender las necesidades de tu administradora y mostrarte cómo ConsFlow puede ayudarte a ordenar la atención diaria.
          </p>
          <div className="mt-8 rounded-2xl border border-sky-100 bg-calm p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">Contacto alternativo</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              También podés escribirnos a {" "}
              <a className="font-semibold text-slateblue underline decoration-slateblue/30 underline-offset-4 hover:text-ink" href="mailto:contacto@consflow.com.ar">
                contacto@consflow.com.ar
              </a>
              . Responderemos por este canal o por los medios de contacto que indiques en tu consulta.
            </p>
          </div>
        </section>

        <section aria-label="Formulario para solicitar demo">
          <ContactForm />
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Al enviar este formulario, aceptás que ConsFlow procese los datos ingresados para responder tu consulta y gestionar la solicitud de demo. Para más información, consultá nuestra {" "}
            <Link className="font-semibold text-slateblue underline decoration-slateblue/30 underline-offset-4 hover:text-ink" href="/privacy">
              Política de Privacidad
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
