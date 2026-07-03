export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-reveal px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slateblue">{eyebrow}</p> : null}
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-premium motion-reduce:hover:translate-y-0">
      <span className="absolute right-5 top-5 h-10 w-10 rounded-full bg-gradient-to-br from-sky-100 to-white opacity-80 transition group-hover:scale-110" aria-hidden="true" />
      <span className="mb-5 block h-1.5 w-12 rounded-full bg-gradient-to-r from-slateblue to-brandblue" aria-hidden="true" />
      <h3 className="relative text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </article>
  );
}
