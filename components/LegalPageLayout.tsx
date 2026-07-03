import Link from "next/link";

export function LegalPageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,rgba(47,129,223,0.10),transparent_34%),linear-gradient(180deg,#f8fbfd,#eef6fb)] px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-soft sm:p-10">
        <Link className="text-sm font-medium text-slateblue hover:text-ink focus:outline focus:outline-2 focus:outline-slateblue" href="/">
          ← Volver al inicio
        </Link>
        <header className="mt-8 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slateblue">ConsFlow</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{subtitle}</p>
        </header>
        <div className="legal-content mt-8">
          {children}
        </div>
      </article>
    </div>
  );
}
