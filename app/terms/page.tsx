import { LegalPageLayout } from "@/components/LegalPageLayout";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Términos, Condiciones y Privacidad",
  description: "Versión inicial de los Términos, Condiciones y criterios de privacidad de ConsFlow, pendiente de revisión legal.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Términos, Condiciones y Privacidad"
      subtitle="Este documento describe de manera inicial el uso previsto de ConsFlow y el tratamiento general de la información. Debe completarse y revisarse profesionalmente antes de formar parte de una relación contractual."
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

      <h2>8. Datos que recopilamos en la landing y cómo los usamos</h2>
      <p>Cuando enviás el formulario de demo recopilamos los siguientes datos:</p>
      <ul>
        <li><strong>Nombre:</strong> para identificar a la persona que realiza la consulta.</li>
        <li><strong>Administradora o empresa:</strong> para comprender qué organización representa y preparar una demostración relevante.</li>
        <li><strong>Email y/o teléfono:</strong> para responder la solicitud y coordinar la demostración. Es obligatorio informar al menos uno de los dos.</li>
        <li><strong>Cantidad aproximada de edificios, si la informás:</strong> para estimar la escala operativa y adaptar la conversación comercial.</li>
        <li><strong>Mensaje, si lo escribís:</strong> para conocer la necesidad, consulta o parte de la operación que buscás ordenar.</li>
        <li><strong>Preferencia de contacto por WhatsApp:</strong> para registrar si autorizaste que respondamos esa solicitud por WhatsApp.</li>
        <li><strong>Preferencia de comunicaciones comerciales:</strong> para registrar si aceptaste recibir novedades por email, teléfono o WhatsApp. Si no la marcás, no usamos los datos con esa finalidad.</li>
      </ul>
      <p>El formulario también genera un identificador aleatorio de envío y registra la fecha, la versión del formulario y el texto de las autorizaciones mostrado al momento de enviar. Estos datos se usan para evitar envíos duplicados y conservar trazabilidad sobre la solicitud y las preferencias elegidas.</p>

      <h2>9. Datos técnicos y prevención de abuso</h2>
      <ul>
        <li><strong>Dirección IP:</strong> se lee de forma transitoria, se transforma mediante SHA-256 y se utiliza únicamente para limitar intentos abusivos. Upstash recibe el hash y un contador, no el contenido del formulario; ese contador vence después de diez minutos.</li>
        <li><strong>Metadatos de la solicitud:</strong> origen, host, protocolo, tipo y tamaño del contenido se verifican para rechazar solicitudes externas, incompatibles o excesivas. La aplicación no los incorpora al email de contacto.</li>
        <li><strong>Campo técnico antispam:</strong> el formulario contiene un campo oculto destinado a detectar envíos automatizados. No requiere información de una persona usuaria.</li>
      </ul>
      <p>Actualmente la landing no instala cookies de analítica o publicidad, no usa herramientas de seguimiento de comportamiento y no guarda preferencias en almacenamiento local del navegador. La infraestructura de alojamiento puede generar registros técnicos necesarios para seguridad, diagnóstico y disponibilidad.</p>

      <h2>10. Entrega y conservación de las solicitudes de demo</h2>
      <p>ConsFlow no guarda actualmente una base de datos propia con el contenido del formulario. La solicitud se envía mediante Resend al buzón operativo de ConsFlow provisto por Google Gmail. Resend procesa los campos del formulario, el identificador de envío y el email de respuesta para entregar el mensaje; Gmail conserva la copia recibida para permitir la atención y seguimiento comercial.</p>
      <p>El contador antifraude de Upstash vence a los diez minutos. Las solicitudes recibidas por email se conservan mientras sean necesarias para responder, coordinar la demo, mantener el seguimiento comercial autorizado o cumplir obligaciones aplicables. La versión legal definitiva deberá establecer un plazo máximo y documentar las configuraciones de conservación de cada proveedor.</p>

      <h2>11. Datos que puede tratar el producto y cómo se usan</h2>
      <p>Según la configuración y la información incorporada por cada administradora, ConsFlow puede tratar:</p>
      <ul>
        <li><strong>Organización y usuarios internos:</strong> nombre de la organización, identidad y email de usuarios, permisos, sesiones y actividad; se usan para controlar el acceso, separar organizaciones y atribuir acciones.</li>
        <li><strong>Edificios:</strong> nombre, dirección, localidad, provincia y estado; se usan para organizar la operación por consorcio.</li>
        <li><strong>Unidades funcionales:</strong> piso, departamento, código y estado; se usan para ubicar personas, conversaciones, reclamos y saldos en su contexto correcto.</li>
        <li><strong>Personas relacionadas:</strong> nombre, teléfono, email, rol y vínculos con edificios o unidades; se usan para identificar contactos y asociar cada interacción con la unidad correspondiente.</li>
        <li><strong>WhatsApp y comunicaciones:</strong> número, datos de perfil disponibles en el canal, contenido de mensajes, archivos, fechas y estado de la conversación; se usan para recibir consultas, generar respuestas con IA o derivarlas al equipo.</li>
        <li><strong>Reclamos e incidencias:</strong> título, descripción, categoría, prioridad, estado, persona, unidad, edificio, fechas e historial; se usan para crear tickets, ordenar prioridades y seguir cada caso.</li>
        <li><strong>Documentos:</strong> nombre, contenido, archivo, alcance y estado de procesamiento; se usan como información operativa y, cuando corresponda, como fuente para respuestas.</li>
        <li><strong>Expensas y saldos:</strong> período, fechas, moneda, importe, estado y unidad relacionada; se usan para mostrar el contexto administrativo de cada unidad.</li>
        <li><strong>Proveedores:</strong> identidad, contacto, categoría y servicios relacionados; se usan para mantener referencias operativas del consorcio.</li>
        <li><strong>Auditoría:</strong> acciones realizadas por usuarios o por el sistema, entidad afectada, fecha y detalle del cambio; se usa para seguridad, diagnóstico y trazabilidad.</li>
        <li><strong>Resultados de automatización:</strong> clasificaciones, asociaciones y respuestas generadas; se usan para atender consultas frecuentes y entregar al equipo los casos que requieren criterio humano.</li>
      </ul>
      <p>La administradora cliente puede actuar como responsable de los datos que incorpora al servicio. Deberá contar con autorización o base suficiente para tratarlos. ConsFlow no utiliza estos datos para vender perfiles ni para publicidad comportamental de terceros.</p>

      <h2>12. Proveedores y destinatarios técnicos</h2>
      <ul>
        <li><strong>Vercel:</strong> aloja y entrega la landing y sus funciones de servidor.</li>
        <li><strong>Resend:</strong> transporta las solicitudes de demo desde el formulario.</li>
        <li><strong>Google Gmail:</strong> aloja el buzón que recibe y conserva las solicitudes.</li>
        <li><strong>Upstash:</strong> conserva temporalmente el hash y contador usados para limitar abusos.</li>
        <li><strong>Meta:</strong> procesa las comunicaciones realizadas mediante la Cloud API de WhatsApp.</li>
        <li><strong>Proveedor de IA:</strong> puede recibir el mensaje y el contexto estrictamente necesarios para clasificar una consulta o generar una respuesta. Su identidad y condiciones deberán confirmarse en la versión definitiva.</li>
      </ul>
      <p>Estos proveedores pueden procesar información desde otras jurisdicciones según su infraestructura y contratos. La versión definitiva deberá identificar ubicaciones, transferencias internacionales, subencargados y garantías aplicables.</p>

      <h2>13. Finalidades y decisiones humanas</h2>
      <p>Los datos se usan para prestar y asegurar el servicio, responder consultas, organizar la operación, relacionar mensajes con su contexto, generar respuestas frecuentes, derivar casos, mantener historial, brindar soporte y cumplir obligaciones. La IA puede asistir en respuestas y clasificación, pero los casos que requieren criterio se derivan al equipo administrativo. No se informa actualmente una decisión exclusivamente automatizada que produzca efectos legales sobre una persona.</p>

      <h2>14. Conservación y seguridad</h2>
      <p>Los plazos de los datos operativos deberán definirse con cada administradora según la categoría, finalidad y obligaciones aplicables. Se aplican controles de acceso, separación por organización, validación de solicitudes, límites de tamaño, prevención de abuso y trazabilidad. Ningún sistema puede garantizar seguridad absoluta y la versión definitiva deberá documentar medidas y plazos verificados.</p>

      <h2>15. Propiedad intelectual</h2>
      <p>La marca, el software y los contenidos propios de ConsFlow pertenecen a sus titulares y no se transfieren por el uso del servicio.</p>

      <h2>16. Revisión pendiente</h2>
      <p>La versión definitiva deberá incluir límites de responsabilidad, condiciones comerciales, soporte, suspensión, terminación, identidad legal, bases jurídicas, proveedores activos, transferencias, plazos, ley aplicable y jurisdicción, con revisión de asesoría legal.</p>

      <h2>17. Contacto</h2>
      <p>Para consultas escribinos a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPageLayout>
  );
}
