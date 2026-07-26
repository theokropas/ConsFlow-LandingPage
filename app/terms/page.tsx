import { LegalPageLayout } from "@/components/LegalPageLayout";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Términos y Condiciones",
  description: "Versión inicial de los Términos y Condiciones de ConsFlow, pendiente de revisión legal.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Términos y Condiciones"
      subtitle="Estos términos describen de manera inicial el uso previsto de ConsFlow. Deben completarse y revisarse profesionalmente antes de formar parte de una relación contractual."
      updatedAt="26 de julio de 2026"
      draft
    >
      <h2>1. Estado e identificación</h2>
      <p>ConsFlow es la denominación comercial del proyecto. La identidad legal del proveedor, domicilio, ley aplicable y jurisdicción deberán incorporarse antes del uso definitivo de estos términos.</p>

      <h2>2. Descripción del servicio</h2>
      <p>ConsFlow es un CRM operativo para administradoras de consorcios. Puede relacionar conversaciones, edificios, unidades funcionales, personas, reclamos, tickets, documentos, estados e historial dentro de una misma operación.</p>

      <h2>3. WhatsApp e inteligencia artificial</h2>
      <p>
        ConsFlow integra WhatsApp mediante la Cloud API de Meta y puede recibir o responder mensajes mediante funciones de IA. La disponibilidad de WhatsApp depende de un servicio externo que ConsFlow no controla.
      </p>
      <p>ConsFlow es un producto independiente y no está afiliado, patrocinado ni respaldado por WhatsApp LLC o Meta Platforms, Inc.</p>

      <h2>4. Responsabilidades de la administradora</h2>
      <p>La administradora contratante deberá contar con autorización y base suficiente para incorporar y gestionar información de edificios, unidades, personas, conversaciones, reclamos y documentos. También será responsable de administrar usuarios, criterios de respuesta y decisiones operativas dentro de su organización.</p>

      <h2>5. Automatización e intervención humana</h2>
      <p>Nuestra IA responde consultas frecuentes y organiza información. Los casos que necesitan criterio se derivan al equipo administrativo.</p>

      <h2>6. Uso permitido</h2>
      <ul>
        <li>No utilizar el servicio para actividades ilegales, abusivas o que vulneren derechos.</li>
        <li>No ingresar información sin autorización suficiente.</li>
        <li>No intentar acceder a cuentas, datos o sistemas ajenos.</li>
        <li>No interferir con la disponibilidad o integridad del servicio.</li>
      </ul>

      <h2>7. Disponibilidad, soporte y cambios</h2>
      <p>Las condiciones de soporte, horarios, mantenimiento, suspensión, terminación y niveles de servicio deberán definirse en la propuesta o contrato correspondiente. El servicio puede cambiar para incorporar mejoras o responder a requisitos técnicos.</p>

      <h2>8. Privacidad y propiedad intelectual</h2>
      <p>El tratamiento de datos se describe en la Política de Privacidad. La marca, el software y los contenidos propios de ConsFlow pertenecen a sus titulares y no se transfieren por el uso del servicio.</p>

      <h2>9. Revisión pendiente</h2>
      <p>La versión definitiva deberá incluir límites de responsabilidad, condiciones comerciales, soporte, suspensión, terminación, identidad legal, ley aplicable y jurisdicción, con revisión de asesoría legal.</p>

      <h2>10. Contacto</h2>
      <p>Para consultas escribinos a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPageLayout>
  );
}
