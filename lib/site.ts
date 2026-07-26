export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cons-flow-landing-page.vercel.app",
);

export const siteConfig = {
  name: "ConsFlow",
  email: "contacto.consflow@gmail.com",
  url: siteUrl,
  defaultTitle: "ConsFlow | CRM operativo con IA y WhatsApp para consorcios",
  description:
    "ConsFlow responde consultas frecuentes con IA y conecta mensajes, personas, unidades, reclamos y seguimiento para administradoras de consorcios.",
  navigation: [
    { label: "Producto", href: "/#producto" },
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Seguridad", href: "/#seguridad" },
  ],
} as const;
