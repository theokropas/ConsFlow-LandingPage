import { LegalPageLayout } from "@/components/LegalPageLayout";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Política de Privacidad",
  description: "Versión inicial de la Política de Privacidad de ConsFlow, pendiente de revisión legal.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      subtitle="Esta versión inicial explica de forma general qué información puede tratar ConsFlow en la landing y en la operación del producto. No reemplaza una revisión legal profesional."
      updatedAt="26 de julio de 2026"
      draft
    >
      <h2>1. Responsable y estado de este documento</h2>
      <p>
        ConsFlow es la denominación comercial del proyecto. La identificación legal completa del responsable, su domicilio y la jurisdicción aplicable deberán incorporarse antes del uso definitivo de esta política. Para consultas de privacidad podés escribir a {" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>2. Información de la landing</h2>
      <p>Cuando solicitás una demo podemos recibir nombre, administradora o empresa, email, teléfono, cantidad aproximada de edificios, mensaje, autorización opcional de respuesta por WhatsApp y preferencia opcional de comunicaciones comerciales.</p>
      <p>Estos datos se utilizan para responder la consulta, coordinar una demostración y, únicamente si lo elegís, responder por WhatsApp o enviar comunicaciones comerciales.</p>

      <h2>3. Información tratada por el producto</h2>
      <p>Según la configuración acordada con cada administradora, ConsFlow puede relacionar:</p>
      <ul>
        <li>Edificios, unidades funcionales y personas relacionadas.</li>
        <li>Conversaciones y mensajes recibidos mediante WhatsApp.</li>
        <li>Reclamos, tickets, estados, responsables e historial de acciones.</li>
        <li>Documentos, deudas, expensas, proveedores y otra información operativa habilitada.</li>
      </ul>
      <p>La administradora cliente puede actuar como responsable de los datos que incorpora al servicio. La distribución de responsabilidades deberá definirse contractualmente.</p>

      <h2>4. WhatsApp, IA y proveedores técnicos</h2>
      <p>
        ConsFlow integra WhatsApp mediante la Cloud API de Meta y puede usar funciones de IA para generar respuestas. Cuando una consulta necesita criterio humano, puede ser derivada al equipo administrativo. La versión legal definitiva deberá identificar a Meta y al proveedor de IA, junto con sus condiciones de tratamiento.
      </p>
      <p>
        La landing se aloja actualmente en infraestructura de Vercel. Cuando el formulario de contacto está configurado, utiliza Resend para entregar la solicitud al buzón operativo de ConsFlow, actualmente provisto por Google Gmail, y Upstash para limitar intentos abusivos sin almacenar el contenido del formulario. La versión legal definitiva deberá detallar proveedores activos, ubicaciones, transferencias internacionales, conservación y condiciones contractuales aplicables.
      </p>

      <h2>5. Base y alcance del tratamiento</h2>
      <p>La respuesta a una solicitud de demo se basa en la gestión de una consulta precontractual. Las comunicaciones comerciales opcionales se basan en la elección expresa de la persona interesada y pueden interrumpirse en cualquier momento.</p>

      <h2>6. Conservación y seguridad</h2>
      <p>La versión definitiva deberá establecer plazos de conservación por categoría y medidas técnicas y organizativas verificadas. Ningún sistema puede garantizar seguridad absoluta.</p>

      <h2>7. Consultas, acceso y eliminación</h2>
      <p>
        Podés solicitar información, corrección o eliminación escribiendo a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Es posible que necesitemos verificar identidad, alcance y relación con la administradora correspondiente.
      </p>

      <h2>8. Revisión pendiente</h2>
      <p>Antes de retirar la condición de borrador deberán confirmarse la identidad legal del responsable, las bases jurídicas, los proveedores activos, las transferencias, los plazos y los procedimientos de atención de derechos.</p>
    </LegalPageLayout>
  );
}
