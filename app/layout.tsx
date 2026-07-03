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
    "Centralizá reclamos, consultas, documentos, unidades funcionales e historial de conversaciones en una sola plataforma para administradoras de consorcios.",
  openGraph: {
    type: "website",
    siteName: "ConsFlow",
    title: "ConsFlow | CRM con WhatsApp para administradoras de consorcios",
    description:
      "Centralizá reclamos, consultas, documentos, unidades funcionales e historial de conversaciones en una sola plataforma para administradoras de consorcios.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className="min-h-screen font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
