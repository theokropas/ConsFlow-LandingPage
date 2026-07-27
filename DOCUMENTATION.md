# ConsFlow Landing

## Desarrollo

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

El proyecto no incluye actualmente ESLint, por lo que no existe `npm run lint`.

## Apariencia y movimiento

La landing utiliza un único tema claro, alineado con el workspace actual de ConsFlow. No persiste preferencias visuales ni altera la apariencia según el sistema operativo.

Las secuencias usan CSS, `IntersectionObserver` y timers locales. No se agregó una dependencia de animación. `prefers-reduced-motion` muestra directamente el estado final del hero y de los flujos narrativos.

## Formulario de contacto

`POST /api/contact` valida los datos en el servidor y entrega la solicitud mediante la API de Resend. El destinatario está fijado en `contacto.consflow@gmail.com`.

Variables necesarias:

```dotenv
NEXT_PUBLIC_SITE_URL=https://cons-flow-landing-page.vercel.app
RESEND_API_KEY=
CONTACT_FROM_EMAIL=ConsFlow <contacto@tu-dominio-verificado.com>
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

`CONTACT_FROM_EMAIL` debe usar un dominio verificado en Resend. Si falta configuración o Resend rechaza la entrega, el formulario muestra un error real y conserva los datos ingresados. El estado de éxito aparece únicamente después de una respuesta satisfactoria del proveedor.

El Route Handler valida origen, limita el body a 20 KB, usa honeypot y establece timeout e idempotencia estable para Resend. En producción exige Upstash para aplicar un rate limit durable y compartido; durante desarrollo utiliza un límite local acotado. Vercel Firewall puede añadirse como una segunda capa.

## Contenido legal

`/terms` reúne los términos, condiciones y criterios de privacidad en una versión inicial pendiente de revisión profesional, con metadata `noindex, nofollow`. Antes de producción definitiva deben completarse la identidad legal, jurisdicción, proveedores, transferencias, plazos y condiciones contractuales.

## Vistas de producto

Las vistas de la home reproducen la arquitectura y el vocabulario del frontend actual: shell, navegación, selector de edificio, Inicio, Reclamos, Unidades, Documentos y Auditoría. Los casos visibles sirven para explicar el flujo operativo y no se usan como métricas o prueba comercial.
