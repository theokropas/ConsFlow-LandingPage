import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Contacto", href: "/contact" },
  { label: "Política de Privacidad", href: "/privacy" },
  { label: "Términos y Condiciones", href: "/terms" },
  { label: "Eliminación de Datos", href: "/data-deletion" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandLogo size="md" />
            <span>
              <span className="block text-lg font-bold text-ink">ConsFlow</span>
              <span className="text-xs font-medium text-slate-500">Orden operativo para administradoras</span>
            </span>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            ConsFlow es una plataforma SaaS/CRM para administradoras de consorcios que centraliza comunicaciones, reclamos,
            tickets, documentos, unidades funcionales e historial operativo.
          </p>
        </div>
        <nav aria-label="Links legales y de sitio">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Secciones</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-ink focus:outline focus:outline-2 focus:outline-slateblue" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Contacto</h2>
          <p className="mt-4 text-sm text-slate-600">
            <a className="transition hover:text-ink focus:outline focus:outline-2 focus:outline-slateblue" href="mailto:theokropas1@gmail.com">
              theokropas1@gmail.com
            </a>
            <span className="mx-2 text-slate-400">/</span>
            <a className="transition hover:text-ink focus:outline focus:outline-2 focus:outline-slateblue" href="mailto:ramakwon07@gmail.com">
              ramakwon07@gmail.com
            </a>
          </p>
          <p className="mt-6 text-xs leading-5 text-slate-500">
            ConsFlow no está afiliado, patrocinado ni respaldado por WhatsApp LLC o Meta Platforms, Inc.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ConsFlow. Todos los derechos reservados.
      </div>
    </footer>
  );
}
