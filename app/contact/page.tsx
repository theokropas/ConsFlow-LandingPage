import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Solicitar una demo",
  description: "Conocé cómo ConsFlow conecta WhatsApp con la operación y el seguimiento de tu administradora.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <section className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold text-link">Demo de ConsFlow</p>
          <h1 className="mt-4 max-w-[12ch] text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl">Veamos cómo trabaja tu administradora.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-steel">
            Contanos lo esencial. Te mostramos cómo ConsFlow conecta cada conversación con el trabajo que sigue.
          </p>
          <div className="mt-9 border-y border-line py-5">
            <p className="text-sm font-bold text-ink">En la demostración podemos revisar:</p>
            <ul className="mt-4 space-y-3 text-sm text-steel">
              {[
                "Cómo entra y se organiza una conversación.",
                "Cómo se relacionan edificio, unidad y persona.",
                "Cómo continúa un caso dentro del equipo.",
              ].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <p className="mt-6 text-sm leading-6 text-steel">
            También podés escribirnos a {" "}
            <a className="break-words font-bold text-navy underline decoration-brand/30 underline-offset-4 hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </section>
        <section aria-label="Formulario para solicitar una demo">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
