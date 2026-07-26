import { LegalPageLayout } from "@/components/LegalPageLayout";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Eliminación de Datos",
  description: "Procedimiento para solicitar revisión, corrección o eliminación de datos asociados a ConsFlow.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <LegalPageLayout
      title="Eliminación de Datos"
      subtitle="Conocé cómo solicitar la revisión o eliminación de datos personales asociados a ConsFlow."
      updatedAt="26 de julio de 2026"
    >
      <h2>Cómo iniciar una solicitud</h2>
      <p>
        Escribinos a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> con el asunto “Solicitud de eliminación de datos”.
      </p>

      <h2>Información necesaria</h2>
      <p>Incluí solamente la información necesaria para identificar el alcance del pedido:</p>
      <ul>
        <li>Nombre y medio de contacto.</li>
        <li>Email o número asociado a WhatsApp.</li>
        <li>Administradora, edificio y unidad funcional, cuando corresponda.</li>
        <li>Descripción de los datos que querés revisar, corregir o eliminar.</li>
      </ul>
      <p>No envíes contraseñas, credenciales ni documentación sensible que no sea necesaria.</p>

      <h2>Revisión de la solicitud</h2>
      <p>La solicitud será revisada y respondida conforme a la normativa aplicable. Podemos pedir información adicional para verificar identidad y evitar la eliminación de datos de otra persona.</p>
      <p>Cuando la información sea gestionada por una administradora cliente, el proceso puede requerir coordinación con esa administradora.</p>

      <h2>Conservación limitada</h2>
      <p>Cierta información puede conservarse cuando exista una obligación legal, contractual, contable, de seguridad o de resolución de disputas. En ese caso informaremos el alcance posible de la eliminación o restricción.</p>
    </LegalPageLayout>
  );
}
