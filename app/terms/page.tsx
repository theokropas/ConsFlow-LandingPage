import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones | ConsFlow",
  description:
    "Términos y Condiciones iniciales de ConsFlow para el acceso y uso de la plataforma SaaS/CRM para administradoras de consorcios.",
  openGraph: {
    title: "Términos y Condiciones | ConsFlow",
    description:
      "Términos y Condiciones iniciales de ConsFlow para el acceso y uso de la plataforma SaaS/CRM para administradoras de consorcios.",
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Términos y Condiciones"
      subtitle="Estos términos regulan de manera inicial el acceso y uso de ConsFlow como plataforma SaaS/CRM para administradoras de consorcios."
    >
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        Nota: esta es una versión inicial informativa y debe ser revisada por asesoría legal antes de su uso definitivo en producción.
      </p>

      <h2>1. Aceptación</h2>
      <p>
        Al acceder o utilizar ConsFlow, la persona usuaria o entidad contratante acepta estos Términos y Condiciones. Si no está de acuerdo, debe abstenerse de utilizar el servicio.
      </p>

      <h2>2. Descripción del servicio</h2>
      <p>
        ConsFlow es una plataforma SaaS/CRM para administradoras de consorcios que centraliza comunicaciones, reclamos, tickets, documentos, unidades funcionales e historial operativo. La plataforma puede incluir funciones de asistencia y automatización para consultas frecuentes, manteniendo la posibilidad de intervención humana.
      </p>

      <h2>3. Uso permitido</h2>
      <p>Las personas usuarias se comprometen a utilizar ConsFlow de forma lícita, responsable y conforme a estos términos. No está permitido:</p>
      <ul>
        <li>Usar la plataforma para fines ilegales, abusivos o contrarios a derechos de terceros.</li>
        <li>Ingresar información falsa, engañosa o no autorizada.</li>
        <li>Intentar acceder a cuentas, datos o sistemas sin autorización.</li>
        <li>Interferir con la seguridad, disponibilidad o integridad del servicio.</li>
      </ul>

      <h2>4. Responsabilidades de la administradora</h2>
      <p>
        La administradora o entidad contratante es responsable de contar con autorización suficiente para cargar, gestionar y tratar datos de vecinos, propietarios, unidades funcionales, edificios, reclamos, documentos y demás información operativa dentro de la plataforma.
      </p>

      <h2>5. Automatización y control humano</h2>
      <p>
        Las respuestas automáticas ayudan con consultas frecuentes. Los casos sensibles pueden ser derivados a un administrador humano. ConsFlow no reemplaza el criterio profesional de la administradora.
      </p>

      <h2>6. Disponibilidad y cambios</h2>
      <p>
        ConsFlow puede realizar mejoras, mantenimiento o cambios en el servicio. Se procurará mantener la disponibilidad de la plataforma, sin prometer operación ininterrumpida o libre de errores.
      </p>

      <h2>7. Propiedad intelectual</h2>
      <p>
        La marca, el diseño, el software y los contenidos propios de ConsFlow pertenecen a sus titulares. El uso del servicio no otorga derechos de propiedad intelectual salvo los permisos necesarios para utilizar la plataforma conforme a estos términos.
      </p>

      <h2>8. Privacidad</h2>
      <p>
        El tratamiento de datos personales se rige por la Política de Privacidad disponible en este sitio. Para consultas podés escribir a {" "}
        <a href="mailto:contacto@consflow.com.ar">contacto@consflow.com.ar</a>.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para consultas sobre estos términos, escribinos a <a href="mailto:contacto@consflow.com.ar">contacto@consflow.com.ar</a>.
      </p>
    </LegalPageLayout>
  );
}
