import { NextResponse } from "next/server";
import { CONTACT_FORM_VERSION, MARKETING_OPT_IN_TEXT, validateContactInput } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

const resendEndpoint = "https://api.resend.com/emails";
const maxBodyBytes = 20_000;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

class PayloadTooLargeError extends Error {}

function allowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin === "null") return false;
  const requestOrigin = new URL(request.url).origin;
  const forwardedHost = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const forwardedProtocol = request.headers.get("x-forwarded-proto") || new URL(request.url).protocol.replace(":", "");
  const forwardedOrigin = forwardedHost ? `${forwardedProtocol}://${forwardedHost}` : "";
  return origin === requestOrigin || origin === forwardedOrigin || origin === siteConfig.url.origin;
}

async function rateLimitKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const source = forwardedFor || realIp || "unknown";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(source));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function exceedsLocalRateLimit(key: string) {
  const now = Date.now();
  for (const [entryKey, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(entryKey);
  }

  if (rateLimitStore.size >= 1000 && !rateLimitStore.has(key)) {
    const oldestKey = rateLimitStore.keys().next().value as string | undefined;
    if (oldestKey) rateLimitStore.delete(oldestKey);
  }

  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMaxRequests;
}

async function rateLimitStatus(key: string): Promise<"allowed" | "blocked" | "unavailable"> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    if (process.env.NODE_ENV === "production") return "unavailable";
    return exceedsLocalRateLimit(key) ? "blocked" : "allowed";
  }

  try {
    const response = await fetch(`${redisUrl.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${redisToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", `consflow:contact:${key}`],
        ["EXPIRE", `consflow:contact:${key}`, String(rateLimitWindowMs / 1000), "NX"],
      ]),
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return "unavailable";
    const result = await response.json() as Array<{ result?: number }>;
    const count = Number(result[0]?.result ?? Number.NaN);
    if (!Number.isFinite(count)) return "unavailable";
    return count > rateLimitMaxRequests ? "blocked" : "allowed";
  } catch {
    return "unavailable";
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function readLimitedBody(request: Request) {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > maxBodyBytes) {
      await reader.cancel();
      throw new PayloadTooLargeError();
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(body);
}

async function requestPayload(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") ?? "";
  const body = await readLimitedBody(request);

  if (contentType.includes("application/json")) {
    const payload: unknown = JSON.parse(body);
    return payload && typeof payload === "object" && !Array.isArray(payload)
      ? payload as Record<string, unknown>
      : {};
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(body));
  }

  throw new TypeError("Unsupported content type");
}

export async function POST(request: Request) {
  if (!allowedOrigin(request)) {
    return NextResponse.json({ message: "Origen de solicitud no permitido." }, { status: 403 });
  }

  const limiter = await rateLimitStatus(await rateLimitKey(request));
  if (limiter === "unavailable") {
    return NextResponse.json(
      { message: "El formulario no está disponible temporalmente. Escribinos por email o intentá más tarde." },
      { status: 503 },
    );
  }
  if (limiter === "blocked") {
    return NextResponse.json(
      { message: "Recibimos demasiados intentos. Esperá unos minutos antes de volver a probar." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxBodyBytes) {
    return NextResponse.json({ message: "La solicitud es demasiado extensa." }, { status: 413 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await requestPayload(request);
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return NextResponse.json({ message: "La solicitud es demasiado extensa." }, { status: 413 });
    }
    return NextResponse.json({ message: "No pudimos interpretar la solicitud." }, { status: 400 });
  }

  const { data, errors } = validateContactInput(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Revisá los campos indicados.", errors }, { status: 400 });
  }

  // Return a generic response to bots without sending or disclosing the trap.
  if (data.website) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { message: `El formulario todavía no está configurado. Escribinos a ${siteConfig.email}.` },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toISOString();
  const submissionId = data.submissionId || crypto.randomUUID();
  const buildings = data.buildings === null ? "No indicado" : String(data.buildings);
  const contactPreference = [data.email && "email", data.phone && "teléfono"].filter(Boolean).join(" y ");
  const text = [
    "Nueva solicitud de demo de ConsFlow",
    "",
    `Nombre: ${data.name}`,
    `Administradora o empresa: ${data.company}`,
    `Email: ${data.email || "No indicado"}`,
    `Teléfono: ${data.phone || "No indicado"}`,
    `Edificios aproximados: ${buildings}`,
    `Mensaje: ${data.message || "Sin mensaje"}`,
    `Medio disponible para responder: ${contactPreference}`,
    `Contacto por WhatsApp para esta solicitud: ${data.whatsappContact ? "Autorizado" : "No autorizado"}`,
    `Comunicaciones comerciales opcionales: ${data.marketing ? "Aceptadas" : "No aceptadas"}`,
    `Texto de autorización comercial: ${MARKETING_OPT_IN_TEXT}`,
    `Versión del formulario: ${CONTACT_FORM_VERSION}`,
    `Fecha UTC: ${submittedAt}`,
  ].join("\n");

  const html = `
    <h1>Nueva solicitud de demo de ConsFlow</h1>
    <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Administradora o empresa:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email || "No indicado")}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(data.phone || "No indicado")}</p>
    <p><strong>Edificios aproximados:</strong> ${escapeHtml(buildings)}</p>
    <p><strong>Mensaje:</strong><br>${escapeHtml(data.message || "Sin mensaje").replace(/\n/g, "<br>")}</p>
    <hr>
    <p><strong>Medio disponible para responder:</strong> ${escapeHtml(contactPreference)}</p>
    <p><strong>Contacto por WhatsApp para esta solicitud:</strong> ${data.whatsappContact ? "Autorizado" : "No autorizado"}</p>
    <p><strong>Comunicaciones comerciales opcionales:</strong> ${data.marketing ? "Aceptadas" : "No aceptadas"}</p>
    <p><strong>Texto de autorización comercial:</strong> ${escapeHtml(MARKETING_OPT_IN_TEXT)}</p>
    <p><strong>Versión del formulario:</strong> ${CONTACT_FORM_VERSION}</p>
    <p><strong>Fecha UTC:</strong> ${submittedAt}</p>
  `;

  try {
    const response = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": submissionId,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [siteConfig.email],
        subject: "Nueva solicitud de demo de ConsFlow",
        reply_to: data.email || undefined,
        text,
        html,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("Resend contact submission failed", { status: response.status });
      return NextResponse.json(
        { message: `No pudimos enviar la solicitud. Intentá nuevamente o escribinos a ${siteConfig.email}.` },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact submission request failed", { name: error instanceof Error ? error.name : "UnknownError" });
    return NextResponse.json(
      { message: `No pudimos enviar la solicitud. Intentá nuevamente o escribinos a ${siteConfig.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
