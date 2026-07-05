import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Eliminación de Datos | ConsFlow",
  description: "Instrucciones para solicitar la eliminación de datos personales vinculados a ConsFlow.",
  openGraph: {
    title: "Eliminación de Datos | ConsFlow",
    description: "Instrucciones para solicitar la eliminación de datos personales vinculados a ConsFlow.",
  },
};

export default function DataDeletionPage() {
  return (
    <LegalPageLayout
      title="Eliminación de Datos"
      subtitle="Conocé cómo solicitar la eliminación de datos personales asociados a ConsFlow."
    >
      <h2>Solicitud de eliminación</h2>
      <p>
        Si querés solicitar la eliminación de datos personales asociados a ConsFlow, escribinos a {" "}
        <a href="mailto:contacto.consflow@gmail.com">contacto.consflow@gmail.com</a> con el asunto “Solicitud de eliminación de datos”.
      </p>

      <h2>Datos requeridos para procesar la solicitud</h2>
      <p>Para poder identificar la información correspondiente, incluí en tu mensaje:</p>
      <ul>
        <li>Nombre completo.</li>
        <li>Email o teléfono utilizado para contactar o usar ConsFlow.</li>
        <li>Administradora, empresa, edificio o unidad funcional vinculada, si corresponde.</li>
        <li>Descripción breve de los datos que solicitás eliminar.</li>
        <li>Medio de contacto para responder la solicitud.</li>
      </ul>

      <h2>Plazo estimado</h2>
      <p>
        Revisaremos la solicitud y responderemos en un plazo estimado de hasta 10 días hábiles desde la recepción de la información necesaria para verificar identidad y alcance del pedido.
      </p>

      <h2>Aclaración importante</h2>
      <p>
        Es posible que ciertos datos deban conservarse durante un período adicional cuando exista una obligación legal, contractual, contable, de seguridad o de resolución de disputas. En esos casos, informaremos el alcance de la eliminación o restricción aplicable.
      </p>
    </LegalPageLayout>
  );
}
