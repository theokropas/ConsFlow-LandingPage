export const CONTACT_FORM_VERSION = "2026-07-26";
export const MARKETING_OPT_IN_TEXT =
  "Quiero recibir novedades y comunicaciones comerciales de ConsFlow por email, teléfono o WhatsApp. Puedo retirar esta autorización en cualquier momento.";

export type ContactField = "name" | "company" | "email" | "phone" | "buildings" | "message";

export type ContactErrors = Partial<Record<ContactField | "contact", string>>;

export type ContactSubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  buildings: number | null;
  message: string;
  whatsappContact: boolean;
  marketing: boolean;
  website: string;
  submissionId: string;
};

export type ContactValidation = {
  data: ContactSubmission;
  errors: ContactErrors;
};

const limits = {
  name: 100,
  company: 120,
  email: 254,
  phone: 30,
  message: 1500,
  website: 200,
};

function textValue(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength + 1) : "";
}

export function validateContactInput(input: Record<string, unknown>): ContactValidation {
  const name = textValue(input.name, limits.name);
  const company = textValue(input.company, limits.company);
  const email = textValue(input.email, limits.email).toLowerCase();
  const phone = textValue(input.phone, limits.phone);
  const buildingsValue = textValue(input.buildings, 8);
  const message = textValue(input.message, limits.message);
  const website = textValue(input.website, limits.website);
  const submissionId = textValue(input.submissionId, 64);
  const whatsappContact = input.whatsappContact === true || input.whatsappContact === "true" || input.whatsappContact === "on";
  const marketing = input.marketing === true || input.marketing === "true" || input.marketing === "on";
  const errors: ContactErrors = {};

  if (!name) errors.name = "Ingresá tu nombre.";
  else if (name.length > limits.name) errors.name = `Usá hasta ${limits.name} caracteres.`;
  else if (/[\u0000-\u001F\u007F]/.test(name)) errors.name = "El nombre contiene caracteres no permitidos.";

  if (!company) errors.company = "Ingresá el nombre de la administradora o empresa.";
  else if (company.length > limits.company) errors.company = `Usá hasta ${limits.company} caracteres.`;
  else if (/[\u0000-\u001F\u007F]/.test(company)) errors.company = "El nombre de la empresa contiene caracteres no permitidos.";

  if (email && (email.length > limits.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    errors.email = "Ingresá un email válido o dejá el campo vacío.";
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phone && (!/^\+?[\d\s().-]+$/.test(phone) || phoneDigits.length < 6 || phoneDigits.length > 18)) {
    errors.phone = "Ingresá un teléfono válido o dejá el campo vacío.";
  }
  if (whatsappContact && !phone) errors.phone = "Ingresá un teléfono para que podamos responderte por WhatsApp.";

  if (!email && !phone) errors.contact = "Ingresá al menos un email o un teléfono para que podamos responderte.";

  let buildings: number | null = null;
  if (buildingsValue) {
    const parsedBuildings = Number(buildingsValue);
    if (!Number.isInteger(parsedBuildings) || parsedBuildings < 0 || parsedBuildings > 100000) {
      errors.buildings = "Ingresá una cantidad entera igual o mayor que cero.";
    } else {
      buildings = parsedBuildings;
    }
  }

  if (message.length > limits.message) errors.message = `Usá hasta ${limits.message} caracteres.`;
  if (submissionId && !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId)) {
    errors.contact = "No pudimos validar el identificador de la solicitud. Recargá la página e intentá nuevamente.";
  }

  return {
    data: { name, company, email, phone, buildings, message, whatsappContact, marketing, website, submissionId },
    errors,
  };
}
