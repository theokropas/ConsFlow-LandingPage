import Link from "next/link";

export function LegalPageLayout({
  title,
  subtitle,
  updatedAt,
  draft = false,
  children,
}: {
  title: string;
  subtitle: string;
  updatedAt: string;
  draft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <article className="mx-auto max-w-3xl">
        <Link className="inline-flex min-h-11 items-center rounded-md text-sm font-bold text-navy hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" href="/">
          <span aria-hidden="true">←</span><span className="ml-2">Volver al inicio</span>
        </Link>
        <header className="mt-8 border-b border-line pb-8">
          {draft ? <p className="mb-5 inline-flex rounded-full border border-[#e4bd73] bg-[#fff8e8] px-3 py-1.5 text-xs font-bold text-[#75510b]">Versión inicial pendiente de revisión legal</p> : null}
          <h1 className="text-4xl font-extrabold tracking-[-0.035em] text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-steel">{subtitle}</p>
          <p className="mt-4 text-sm text-steel">Última actualización: {updatedAt}</p>
        </header>
        <div className="legal-content mt-8">{children}</div>
      </article>
    </div>
  );
}
