import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Producto", href: "/#producto" },
  { label: "Contacto", href: "/contact" },
  { label: "Privacidad", href: "/privacy" },
  { label: "Términos", href: "/terms" },
  { label: "Eliminación de datos", href: "/data-deletion" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xl text-sm leading-6 text-steel">
              WhatsApp es el punto de entrada. ConsFlow organiza la operación que sucede después.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Enlaces del sitio">
              <h2 className="text-sm font-bold text-ink">Sitio</h2>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-steel">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="inline-flex min-h-11 items-center rounded-sm py-2 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="text-sm font-bold text-ink">Contacto</h2>
              <a className="mt-3 inline-flex min-h-11 items-center break-words rounded-sm py-2 text-sm font-semibold text-navy underline decoration-brand/30 underline-offset-4 hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-3 border-t border-line pt-5 text-xs leading-5 text-steel sm:flex-row sm:items-end sm:justify-between">
          <p>La integración utiliza la Cloud API de Meta. ConsFlow no está afiliado, patrocinado ni respaldado por WhatsApp LLC o Meta Platforms, Inc.</p>
          <p className="shrink-0">© {new Date().getFullYear()} ConsFlow.</p>
        </div>
      </div>
    </footer>
  );
}
