---
name: ConsFlow
description: Sistema editorial-operativo para ordenar la atención de administradoras de consorcios.
colors:
  operation-blue: "#1F7DD6"
  readable-blue: "#145F9F"
  control-navy: "#102A43"
  deep-ink: "#0C1B2A"
  steel-text: "#526474"
  quiet-canvas: "#F5F7F8"
  white: "#FFFFFF"
  rule: "#D7E0E6"
  soft-blue: "#EAF3FB"
  error: "#B42318"
  success: "#147A55"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
  interfaceCompact:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "8px"
  field: "12px"
  surface: "16px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.control-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
---

# Design System: ConsFlow

## 1. Overview

**Creative North Star: "La línea operativa"**

ConsFlow se siente como el lugar donde una administradora puede seguir un caso desde su entrada hasta su resolución: información legible, relaciones visibles y decisiones claras. Una línea azul conecta mensaje, persona, unidad, reclamo, prioridad e historial.

La interfaz rechaza la gramática de plantilla SaaS genérica. No usa tarjetas como respuesta automática, no convierte cada título en una etiqueta en mayúsculas y no presenta decoración tecnológica como evidencia de producto.

**Key Characteristics:**

- Composición asimétrica que vuelve a una columna estricta en mobile.
- Mucho espacio negativo, con densidad concentrada dentro de las vistas de producto.
- Un único sistema claro, desde la landing hasta las vistas de producto.
- Aplicación basada en el shell y los módulos del frontend real.
- Movimiento breve y motivado, nunca permanente.

## 2. Colors

La paleta combina neutros fríos con un azul de marca reservado para conexiones, foco y estados importantes.

### Primary

- **Azul operativo:** comunica selección, vínculo y avance.
- **Azul legible:** se usa cuando el azul cumple una función textual sobre fondos claros.
- **Azul control:** sostiene botones principales y jerarquía operativa.

### Neutral

- **Tinta profunda:** texto principal y títulos.
- **Acero:** texto secundario con contraste AA.
- **Lienzo silencioso:** fondo general frío y sin apariencia de papel beige.
- **Regla:** divisores y límites estructurales de un píxel.
- **Blanco:** superficies de lectura y campos.

### Named Rules

**The Connection Rule.** El azul brillante representa relaciones o estados activos; no se usa como decoración dispersa.

**The Light Workspace Rule.** La landing y el producto comparten superficies claras, bordes fríos y jerarquía azul.

**The Product Canvas Rule.** Las vistas reproducen el shell claro, la navegación y el vocabulario del frontend real.

### Themes

- **Claro:** canvas frío, superficies blancas y azul operativo reservado para vínculos y acciones.
- La apariencia es única y consistente con el frontend del producto.

## 3. Typography

**Display Font:** Manrope con fallback Arial y sans-serif.
**Body Font:** Geist con fallback Arial y sans-serif.

**Character:** una sola familia de construcción clara y seria. El contraste surge de escala, peso y espacio, no de mezclar voces tipográficas parecidas.

### Hierarchy

- **Display** (700, escala fluida, 1.04): propuesta principal, máximo tres líneas en mobile y dos o tres en desktop según ancho.
- **Headline** (700, escala fluida, 1.1): ideas centrales de sección, siempre alineadas a izquierda.
- **Title** (650, 1.125-1.5rem, 1.3): áreas, pasos y estados.
- **Body** (400, 1rem, 1.7): lectura continua limitada a 68 caracteres.
- **Label** (700, 0.8125rem): estados y controles; mayúsculas únicamente cuando el lenguaje operativo lo justifica.

### Named Rules

**The Left Edge Rule.** Los encabezados de sección se alinean a izquierda; el centro se reserva para mensajes breves que realmente cierran una narrativa.

## 4. Elevation

El sistema es plano por defecto. La profundidad proviene de capas tonales y bordes; una sombra ambiental muy discreta se reserva para el panel principal del producto y el menú mobile.

### Named Rules

**The Structural Elevation Rule.** Si una sombra no explica que una superficie está por encima de otra, se elimina.

## 5. Components

### Buttons

- **Shape:** pill reservada para controles interactivos.
- **Primary:** azul control con texto blanco y altura mínima de 44 px.
- **Hover / Focus:** cambio tonal en 160 ms, foco exterior visible y compresión activa a 0.98.
- **Secondary:** fondo blanco, borde fino y texto tinta.

### Cards / Containers

- **Corner Style:** radio moderado de 16 px.
- **Background:** blanco o azul suave según jerarquía.
- **Shadow Strategy:** sin sombra salvo panel de producto y navegación mobile.
- **Border:** regla fría de 1 px.
- **Internal Padding:** entre 16 y 32 px según densidad.

### Inputs / Fields

- **Style:** fondo blanco, borde frío, radio de 12 px y label siempre visible.
- **Focus:** borde azul operativo y anillo exterior de alto contraste.
- **Error / Disabled:** mensaje textual asociado; el color nunca es el único indicador.

### Navigation

- Compacta, con marca legible una sola vez, enlaces de 44 px y CTA consistente. El menú mobile es un panel real con Escape, gestión de foco y bloqueo de scroll.

### Product Preview

- Una miniinterfaz funcional y accesible que reutiliza el shell y las pantallas fieles al frontend actual. La demo del hero se reproduce una vez, puede pausarse o repetirse y termina en Auditoría.

## 6. Motion

El movimiento explica relaciones, confirma una interacción o evita cambios bruscos. No se usa para mantener elementos flotando ni para decorar superficies estáticas.

- **Press:** 140 ms, compresión a 0.98.
- **Hover:** 170 ms, color, borde y transform únicamente.
- **Menú:** 260 ms con `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Cambio de panel:** 340 ms con `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Revelado narrativo:** 520 ms con `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Secuencia principal:** cuatro vistas durante aproximadamente 6.3 segundos, sin loop automático.
- **Scroll:** `IntersectionObserver` para iniciar una vez y scroll-driven CSS solo como mejora progresiva.
- **Reduced motion:** estado final inmediato, sin desplazamientos ni secuencias.

## 7. Do's and Don'ts

### Do:

- **Do** mostrar la relación entre conversación, persona, unidad, edificio, ticket e historial.
- **Do** usar reglas, conectores y cambios de estado como material visual.
- **Do** limitar cada sección a una idea nueva y verificable.
- **Do** mantener estados de carga, error y éxito reales en el formulario.

### Don't:

- **Don't** parecer una plantilla SaaS genérica, una web de chatbot, un producto cripto o una interfaz de inteligencia artificial genérica.
- **Don't** usar grillas interminables de tarjetas, gradientes luminosos, blobs o glassmorphism decorativo.
- **Don't** presentar dashboards ficticios, métricas, clientes, testimonios o certificaciones como prueba.
- **Don't** animar contenido de forma permanente ni ocultar overflow para disimular errores responsive.
