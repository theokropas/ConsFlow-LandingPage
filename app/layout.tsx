import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.consflow.com.ar"),
  title: {
    default: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
    template: "%s",
  },
  description:
    "ConsFlow ordena WhatsApp, reclamos, unidades funcionales, vecinos, documentos y trazabilidad en un CRM operativo para administradoras de consorcios.",
  openGraph: {
    type: "website",
    siteName: "ConsFlow",
    title: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
    description:
      "ConsFlow ordena WhatsApp, reclamos, unidades funcionales, vecinos, documentos y trazabilidad en un CRM operativo para administradoras de consorcios.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-premium focus:outline focus:outline-2 focus:outline-slateblue">
          Saltar al contenido principal
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="contenido" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
