import { ImageResponse } from "next/og";

export const alt = "ConsFlow, del mensaje al seguimiento operativo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f5f7f8",
        color: "#0c1b2a",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        padding: "64px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ alignItems: "center", display: "flex", fontSize: 30, fontWeight: 800, gap: 14 }}>
          <div style={{ background: "#1f7dd6", borderRadius: 5, display: "flex", height: 34, width: 10 }} />
          ConsFlow
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div style={{ color: "#145f9f", fontSize: 24, fontWeight: 700 }}>CRM operativo para administradoras de consorcios</div>
          <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.03, marginTop: 22 }}>
            Del mensaje al seguimiento operativo.
          </div>
        </div>
        <div style={{ color: "#526474", display: "flex", fontSize: 19, gap: 20 }}>
          <span>Conversación</span><span>→</span><span>Contexto</span><span>→</span><span>Ticket</span><span>→</span><span>Historial</span>
        </div>
      </div>
      <div style={{ alignSelf: "center", background: "#ffffff", border: "1px solid #d7e0e6", borderRadius: 22, display: "flex", flexDirection: "column", marginLeft: 48, padding: 28, width: 330 }}>
          <div style={{ color: "#145f9f", fontSize: 14, fontWeight: 700 }}>INICIO · CENTRO OPERATIVO</div>
         <div style={{ color: "#526474", fontSize: 16, marginTop: 8 }}>Edificio San Martín · UF 4B</div>
         <div style={{ fontSize: 25, fontWeight: 800, marginTop: 18 }}>Ascensor fuera de servicio</div>
        <div style={{ alignItems: "center", display: "flex", gap: 10, marginTop: 28 }}>
          <div style={{ background: "#1f7dd6", borderRadius: 999, height: 11, width: 11 }} />
          <span style={{ color: "#102a43", fontSize: 18, fontWeight: 700 }}>Prioridad urgente</span>
        </div>
        <div style={{ borderTop: "1px solid #d7e0e6", color: "#526474", fontSize: 16, lineHeight: 1.45, marginTop: 26, paddingTop: 20 }}>
          Reclamo, unidad y actividad dentro del mismo contexto.
        </div>
      </div>
    </div>,
    size,
  );
}
