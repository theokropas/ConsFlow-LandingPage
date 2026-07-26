# ConsFlow Landing — Guía antes de modificar la página actual

Este archivo debe leerse antes de tocar la landing actual de ConsFlow.

La idea no es rehacer todo desde cero. La landing ya tiene una base buena, pero necesita más vida, más identidad visual, mejores animaciones, mejor integración del logo y una sensación más premium/profesional.

---

## 1. Contexto del producto

ConsFlow es un SaaS/CRM para administradoras de consorcios.

No es simplemente “un bot”.  
El bot de WhatsApp es una capa del producto, pero el núcleo de ConsFlow es un sistema operativo para administradoras.

ConsFlow centraliza:

- Edificios
- Unidades funcionales
- Vecinos / inquilinos / propietarios
- Conversaciones de WhatsApp
- Reclamos y tickets
- Historial por unidad, vecino y edificio
- Mensajes, documentos y contexto operativo

La landing debe transmitir que ConsFlow ayuda a una administradora a ordenar el caos diario.

---

## 2. Personalidad visual que debe transmitir

La página debe sentirse:

- Profesional
- Moderna
- Confiable
- Clara
- Operativa
- Premium, pero no fría
- Tecnológica, pero no exageradamente “IA genérica”
- Humana, porque trata con vecinos, reclamos y administradoras reales

Evitar que parezca:

- Una landing SaaS genérica
- Una plantilla de Vercel sin identidad
- Un dashboard falso sin intención
- Una web de “bot de WhatsApp” común
- Una web infantil o demasiado colorida
- Una página con animaciones puestas porque sí

---

## 3. Objetivo principal de esta mejora

Mejorar la landing actual para que tenga más impacto visual y más identidad, sin destruir lo que ya está bien.

Prioridades:

1. Integrar correctamente el logo ubicado en `ConsFlow-Landing-Page/images`.
2. Mejorar el hero para que sea más memorable.
3. Hacer que el mensaje principal se entienda más rápido.
4. Agregar animaciones y microinteracciones con buen gusto.
5. Mejorar jerarquía visual, espaciado, ritmo y secciones.
6. Reforzar confianza, claridad y valor de negocio.
7. Mantener performance, accesibilidad y responsive.
8. No reescribir todo el proyecto desde cero.

---

## 4. Skills instaladas / recomendadas para usar

Usar estas skills si están disponibles:

- `vercel-react-best-practices`
- `web-design-guidelines`
- `vercel-optimize`
- `vercel-react-view-transitions`
- `writing-guidelines`

Aplicarlas con criterio.  
No hay que sobreoptimizar ni meter complejidad innecesaria.

---

## 5. Reglas de implementación

### No hacer

- No rehacer todo desde cero.
- No cambiar el stack.
- No romper el diseño responsive.
- No agregar librerías pesadas sin justificación.
- No meter animaciones excesivas.
- No usar efectos que perjudiquen performance.
- No ignorar accesibilidad.
- No dejar texto genérico tipo “Transform your workflow with AI”.
- No hardcodear rutas frágiles si se puede evitar.
- No borrar contenido útil sin reemplazarlo por algo mejor.

### Sí hacer

- Revisar primero la estructura actual del proyecto.
- Entender qué componentes existen.
- Preservar lo que ya funciona.
- Mejorar de forma incremental.
- Integrar el logo de manera prolija.
- Mejorar copy y diseño al mismo tiempo.
- Usar animaciones suaves y con propósito.
- Verificar mobile.
- Cuidar Lighthouse/performance.
- Mantener código limpio y mantenible.

---

## 6. Dirección de copywriting

La landing debe explicar ConsFlow con claridad.

Mensajes importantes:

- “Ordená todos los reclamos, mensajes y vecinos de tus edificios en un solo lugar.”
- “WhatsApp sigue siendo el canal principal, pero ahora con historial, contexto y control.”
- “Cada conversación queda asociada al vecino, unidad funcional y edificio correcto.”
- “Menos mensajes perdidos, menos reclamos desordenados, más seguimiento.”
- “Un CRM operativo pensado para administradoras de consorcios.”

Evitar copy demasiado exagerado como:

- “Revolucioná la industria con IA”
- “Automatización mágica”
- “El futuro de los consorcios”
- “Aumentá 1000% tu productividad”

El tono debe ser concreto, confiable y directo.

---

## 7. Diseño del hero

El hero debe ser la sección más fuerte.

Debe responder rápido:

1. Qué es ConsFlow.
2. Para quién es.
3. Qué problema resuelve.
4. Por qué importa.

Ideas visuales posibles:

- Mockup de inbox/admin de ConsFlow.
- Tarjetas flotantes de reclamos, WhatsApp, edificio, unidad funcional.
- Una línea visual que conecte “WhatsApp → ConsFlow → Ticket/Historial”.
- Animación sutil de mensajes entrando y ordenándose.
- Indicadores de estado: “Abierto”, “En proceso”, “Resuelto”.
- Un visual de edificios/unidades/conversaciones centralizadas.

No hacer un hero vacío con solo texto y gradiente.

---

## 8. Animaciones

Agregar animaciones, pero con buen gusto.

Buenas animaciones:

- Entrada suave de secciones al hacer scroll.
- Hover states en cards y botones.
- Microinteracciones en CTAs.
- Tarjetas que aparecen con delay leve.
- Movimiento sutil en elementos decorativos.
- Transiciones suaves entre estados.

Malas animaciones:

- Demasiado rebote.
- Movimiento constante que distrae.
- Efectos tipo videojuego.
- Animaciones que hacen lenta la página.
- Parallax excesivo.
- Cosas que marean en mobile.

Respetar `prefers-reduced-motion`.

---

## 9. Logo

El logo está en:

`ConsFlow-Landing-Page/images`

Antes de modificar:

- Buscar el archivo correcto del logo.
- Revisar formato, tamaño y fondo.
- Integrarlo en navbar/footer/hero si corresponde.
- No deformarlo.
- No pixelarlo.
- No usarlo en exceso.

Si hay varios logos, elegir el más limpio para navbar y uno más grande si sirve para el hero/footer.

---

## 10. Secciones que deberían sentirse fuertes

La landing idealmente debe tener secciones como:

1. Navbar claro con logo y CTA.
2. Hero fuerte.
3. Problema actual de las administradoras.
4. Cómo ConsFlow ordena el caos.
5. Beneficios concretos.
6. Flujo WhatsApp → CRM → Ticket/Historial.
7. Funcionalidades principales.
8. Confianza / seguridad / control.
9. CTA final.

No hace falta agregar todas si la página actual ya tiene otra estructura, pero sí reforzar el relato.

---

## 11. Seguridad y confianza

Aunque sea landing, debe transmitir confianza.

Cuidar:

- No exponer datos reales.
- No usar nombres/teléfonos reales en mocks.
- No usar información sensible.
- No mostrar tokens, claves o URLs privadas.
- No romper buenas prácticas de frontend.
- No meter dependencias raras.

Los mocks pueden usar ejemplos ficticios:

- Edificio San Martín
- UF 4B
- Reclamo: “No funciona el ascensor”
- Estado: “En proceso”
- Vecino: “María G.”
- Canal: “WhatsApp”

---

## 12. Performance

La landing debe cargar rápido.

Cuidar:

- Imágenes optimizadas.
- No agregar paquetes pesados innecesarios.
- Evitar animaciones costosas.
- Evitar demasiados componentes client-side.
- Usar server components cuando corresponda.
- Revisar bundle size si se agregan librerías.
- Mantener buen rendimiento mobile.

---

## 13. Accesibilidad

Verificar:

- Contraste suficiente.
- Botones con texto claro.
- Navegación usable.
- Buen tamaño de fuente en mobile.
- Estados hover/focus.
- Imágenes con alt cuando corresponda.
- No depender solo del color para comunicar estados.
- Respeto de `prefers-reduced-motion`.

---

## 14. Responsive

La landing debe verse bien en:

- Mobile chico
- Mobile grande
- Tablet
- Desktop

Especial atención a:

- Navbar mobile
- Hero
- Mockups/tarjetas flotantes
- CTAs
- Cards en grilla
- Espaciado vertical
- Tamaños de texto

---

## 15. Checklist antes de terminar

Antes de finalizar, revisar:

- [ ] El logo está integrado correctamente.
- [ ] El hero se entiende en menos de 5 segundos.
- [ ] La página tiene más identidad que antes.
- [ ] Las animaciones son sutiles y útiles.
- [ ] El copy está más claro y menos genérico.
- [ ] No se rompió responsive.
- [ ] No se agregaron dependencias innecesarias.
- [ ] No hay errores de consola.
- [ ] No hay secretos ni datos reales expuestos.
- [ ] El código sigue siendo mantenible.
- [ ] Se corrió lint/build si está disponible.
- [ ] Se explicó qué se modificó.

---

## 16. Prompt recomendado para OpenCode

Usar este prompt antes de modificar:

```text
Read `ANTES_DE_MODIFICAR_LANDING.md` before making any changes.

Use the available frontend skills, especially:
- vercel-react-best-practices
- web-design-guidelines
- vercel-optimize
- vercel-react-view-transitions
- writing-guidelines

Improve the current ConsFlow landing page without rewriting it from scratch.

The page already has a good base, but it needs more life, stronger identity, tasteful animations, better logo integration, stronger copy, and a more premium/trustworthy feeling.

First inspect the existing code, assets, structure, and current UI.
Then make targeted improvements.

Focus on:
- integrating the logo from the images folder
- improving the hero section
- making the page feel less generic
- adding subtle animations and microinteractions
- improving copy clarity
- improving visual hierarchy
- preserving responsive behavior
- keeping performance high
- keeping accessibility strong
- following Vercel/React/Next.js best practices

Do not:
- rewrite the entire project
- add heavy dependencies without justification
- make the design childish
- use fake sensitive data
- break mobile
- ignore accessibility
- overuse animations

After implementation:
- run lint/build if available
- check the UI visually
- summarize what changed
- mention any remaining risks or follow-up improvements
```
