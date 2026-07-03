import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { label: "Problema", href: "/#problema" },
  { label: "Solución", href: "/#solucion" },
  { label: "Módulos", href: "/#modulos" },
  { label: "Seguridad", href: "/#seguridad" },
  { label: "Contacto", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 shadow-[0_10px_30px_rgba(16,32,51,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-md focus:outline focus:outline-2 focus:outline-slateblue">
          <BrandLogo size="sm" priority />
          <span>
            <span className="block text-lg font-bold tracking-tight text-ink transition group-hover:text-slateblue">ConsFlow</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">CRM para consorcios</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md transition hover:-translate-y-0.5 hover:text-ink focus:outline focus:outline-2 focus:outline-slateblue motion-reduce:hover:translate-y-0">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center rounded-full bg-slateblue px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-premium focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-slateblue motion-reduce:hover:translate-y-0"
        >
          Solicitar demo <span className="ml-1 transition group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
