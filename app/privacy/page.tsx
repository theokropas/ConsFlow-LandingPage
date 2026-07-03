import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | ConsFlow",
  description:
    "Política de Privacidad inicial de ConsFlow: tratamiento de datos personales, finalidades, seguridad, derechos y canales de contacto.",
  openGraph: {
    title: "Política de Privacidad | ConsFlow",
    description:
      "Política de Privacidad inicial de ConsFlow: tratamiento de datos personales, finalidades, seguridad, derechos y canales de contacto.",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      subtitle="Esta Política de Privacidad describe cómo ConsFlow trata datos personales vinculados a consultas comerciales, solicitudes de demo y uso de la plataforma."
    >
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        Nota: esta es una versión inicial informativa y debe ser revisada por asesoría legal antes de su uso definitivo en producción.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        ConsFlow es una plataforma SaaS/CRM para administradoras de consorcios. Para consultas vinculadas a privacidad podés escribir a {" "}
        <a href="mailto:theokropas1@gmail.com">theokropas1@gmail.com</a> o <a href="mailto:ramakwon07@gmail.com">ramakwon07@gmail.com</a>.
      </p>

      <h2>2. Datos que podemos tratar</h2>
      <p>Podemos tratar datos ingresados voluntariamente en formularios o durante el uso de la plataforma, incluyendo:</p>
      <ul>
        <li>Nombre, email, teléfono y datos de contacto.</li>
        <li>Nombre de administradora, empresa o consorcio.</li>
        <li>Cantidad aproximada de edificios y unidades funcionales.</li>
        <li>Mensajes, consultas, reclamos, tickets, documentos e historial operativo.</li>
        <li>Datos necesarios para identificar edificios, unidades funcionales, vecinos, propietarios o usuarios autorizados.</li>
      </ul>

      <h2>3. Finalidades</h2>
      <p>Los datos se pueden utilizar para:</p>
      <ul>
        <li>Responder consultas y gestionar solicitudes de demo.</li>
        <li>Prestar, mantener y mejorar los servicios de ConsFlow.</li>
        <li>Centralizar comunicaciones, reclamos, tickets, documentos e historial operativo.</li>
        <li>Dar soporte técnico y administrativo a usuarios autorizados.</li>
        <li>Cumplir obligaciones legales o requerimientos válidos de autoridad competente.</li>
      </ul>

      <h2>4. Base de tratamiento</h2>
      <p>
        El tratamiento puede basarse en el consentimiento de la persona usuaria, la ejecución de una relación contractual o precontractual, intereses legítimos vinculados a la operación segura del servicio y el cumplimiento de obligaciones legales aplicables.
      </p>

      <h2>5. Comunicación de datos</h2>
      <p>
        ConsFlow no vende datos personales. Los datos pueden ser compartidos únicamente con proveedores técnicos necesarios para operar el servicio, con usuarios autorizados por la administradora correspondiente o cuando exista una obligación legal aplicable.
      </p>

      <h2>6. Seguridad</h2>
      <p>
        ConsFlow adopta medidas razonables para proteger la información, incluyendo criterios de acceso controlado, trazabilidad y buenas prácticas de desarrollo. Ningún sistema es completamente infalible, por lo que la seguridad también depende del uso responsable de credenciales y accesos por parte de los usuarios.
      </p>

      <h2>7. Conservación</h2>
      <p>
        Los datos se conservan durante el tiempo necesario para cumplir las finalidades indicadas, atender obligaciones legales, resolver disputas o mantener registros operativos razonables según corresponda.
      </p>

      <h2>8. Derechos de las personas</h2>
      <p>
        Podés solicitar acceso, rectificación, actualización o eliminación de tus datos personales escribiendo a {" "}
        <a href="mailto:theokropas1@gmail.com">theokropas1@gmail.com</a> o <a href="mailto:ramakwon07@gmail.com">ramakwon07@gmail.com</a>. Es posible que solicitemos información adicional para verificar identidad y alcance de la solicitud.
      </p>

      <h2>9. Cambios en esta política</h2>
      <p>
        ConsFlow puede actualizar esta Política de Privacidad para reflejar cambios del servicio, legales o de seguridad. La versión vigente estará disponible en esta página.
      </p>
    </LegalPageLayout>
  );
}
