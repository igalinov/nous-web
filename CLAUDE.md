# noüs — CLAUDE.md

Este fichero define el contexto permanente del proyecto noüs para Claude Code.
Léelo completo antes de cualquier acción. Es innegociable.
Antes de generar cualquier documento, código o copy — verificar que es
coherente con este fichero y con el brand bible.

---

## qué es noüs

noüs es una app móvil iOS que ayuda a profesionales a mantener su capacidad
de razonamiento y criterio propio en la era de la inteligencia artificial.
No es una app de productividad. No es un juego de puzzles.
Es la práctica diaria de la independencia cognitiva.

**El problema que resuelve:** cuanto más delegamos tareas de pensamiento a
herramientas de IA, más se atrofia nuestra capacidad de razonar de forma
independiente. noüs no es anti-IA. La IA es extraordinaria. noüs es el
complemento necesario — el entrenamiento cognitivo para la era de la IA.

**El founder:** CTO de Movimer World. Construye noüs como proyecto paralelo
porque lo vive en primera persona como usuario intensivo de IA. Nunca decir
que "dejó su trabajo". Nunca narrativa de founder a tiempo completo.

**Modelo de negocio:** freemium B2C → licencias B2B enterprise.

**Posicionamiento:** lujo silencioso. Soberanía cognitiva. Pro-IA, pro-pensamiento
propio. El Loro Piana de las apps cognitivas.

---

## la marca — reglas absolutas

### naming
- El nombre de la marca es siempre **noüs** — minúsculas, con diéresis
- Handle de Instagram: **@think.nous**
- Dominio real: **noüs.es** (Punycode: xn--nos-ioa.es)
- Email: **hola@xn--nos-ioa.es** (se muestra como hola@noüs.es)
- El dominio y el handle son infraestructura. La marca es noüs.
- Nunca escribir NOÜS, Noüs, Nous o nous sin diéresis en contexto de marca
- Excepción: variables de código, rutas de archivos, npm donde ü no es válida

### paleta de color — tokens exactos
```
--obsidian:      #0a0a0a
--fog:           #f5f4f0
--fog-mid:       #edecea
--ginger:        #BE5504
--ginger-light:  #FAEBD4
--ginger-dark:   #7A2E00
--ginger-mid:    #D4845A
--white:         #ffffff
--ink-2:         #555555
--ink-3:         #999999
--border:        rgba(10,10,10,0.09)
```

**Reglas de color:**
- Solo 4 colores de uso activo: obsidian, fog, ginger, ginger-light
- Ginger es el único acento — nunca añadir un segundo color de acento
- Nunca gradientes, nunca sombras decorativas, nunca blur como efecto visual
- El fondo siempre es fog (#f5f4f0) — nunca blanco puro en pantallas light
- En pantallas dark el fondo es siempre obsidian (#0a0a0a)
- Nunca añadir un cuarto color a la paleta por ningún motivo

### tipografía
```
--font-serif: 'DM Serif Display', Georgia, serif
--font-sans:  'DM Sans', system-ui, sans-serif
--font-mono:  'DM Mono', monospace
```

**Reglas tipográficas:**
- DM Serif Display: títulos hero, headings principales, frases clave,
  wordmark, frases del manifiesto
- DM Mono: métricas, eyebrows de sección, timestamps, datos, labels uppercase
- DM Sans: body, captions, UI general
- Todo el copy en **minúsculas** — incluyendo títulos
- Nunca Inter, nunca Roboto, nunca system-ui solo

### los 6 principios de diseño
1. negro sobre blanco roto — sin fondos saturados, sin gradientes
2. sin gamificación visible — cero confeti, cero estrellas, cero flames
3. una cosa por pantalla — un único propósito y una única acción posible
4. los datos como estética — las métricas cognitivas son el protagonista visual
5. presumible en público — cada pantalla puede verse en el metro sin vergüenza
6. tipografía como voz — serif para autoridad, mono para precisión

### tono de voz
- Directo sin ser brusco
- Filosófico sin ser pretencioso
- Preciso sin ser frío
- Pro-IA siempre — noüs complementa la IA, no la combate
- Sin emojis en ningún contexto
- Sin exclamaciones encadenadas
- Sin lenguaje de coach motivacional
- El copy siempre en minúsculas

Correcto: "buen razonamiento, marc." / "7 minutos. cada día."
Incorrecto: "¡¡Increíble!! 🎉" / "¡No rompas tu racha! 🔥"

---

## estado actual del proyecto — abril 2026

### infraestructura ✅ completada
- noüs.es live en Vercel — desplegado y funcionando
- Supabase — schema fase 1 y fase 2 ejecutados · 9 tablas activas
- Resend verificado — emails transaccionales funcionando
- Cloudflare gestionando DNS de noüs.es
- GitHub repositorio limpio — nous-web en main
- @think.nous registrado en Instagram
- CLAUDE.md sincronizado en el proyecto local

### web ✅ completada y refinada
- 3 páginas independientes: / · /manifiesto · /acceso-anticipado
- API route /api/waitlist — captura email + welcome email automático
- Stack: Next.js 14 + TypeScript + Supabase + Resend + Vercel
- Fix aplicado: maybeSingle() para evitar 406 en Supabase
- Fix aplicado: RESEND_FROM_EMAIL = hola@xn--nos-ioa.es
- Estética: obsidian full en las 3 páginas — diseño dark aprobado
- Logo SVG en nav implementado y funcionando — ver detalles en sección nav
- Web totalmente responsive — breakpoint 640px

### marketing ✅ definido
- Plan de marketing LinkedIn + Instagram completado
- 12 posts de LinkedIn escritos y listos para publicar
- 9 posts de Instagram definidos con especificaciones visuales
- Calendario editorial de 12 semanas
- Banco de contenido con 2 semanas de colchón preparado

### documentación ✅ completada
- Brand bible definitivo
- Plan de marketing v1.0
- Estrategia de engagement
- El Momento — 8 casos reales
- Documentación BBDD completa
- Tarjeta compartible aprobada
- Roadmap 3 meses

---

## próximos pasos — en orden de prioridad

### 1. marketing — esta semana
- Publicar el primer post de LinkedIn (12 posts listos, elegir el mejor)
- Tu novia: crear cuenta @think.nous y publicar los primeros 3 posts
- Tu novia: diseñar foto de perfil y 4 portadas de destacados en Figma
- Configurar nous.es como link en bio de Instagram

### 2. proyecto Xcode — próxima sesión
- Crear proyecto Xcode con estructura base SwiftUI
- Configurar tokens de color como extensión de Color
- Configurar tokens tipográficos como extensión de Font
- Añadir Supabase Swift SDK como dependencia
- Añadir RevenueCat como dependencia
- Añadir PostHog iOS SDK como dependencia
- Crear estructura de navegación base

### 3. BBDD — fase 3 pendiente
- Añadir tabla device_tokens cuando arranquen las push notifications
- Estructura: id, user_id (FK→profiles), token (text), platform ('ios'),
  created_at, updated_at

### 4. Apple Developer Program
- Registrarse en Apple Developer Program (99$/año)
- Configurar Sign in with Apple en Supabase
- Crear App ID para noüs en App Store Connect

---

## funcionalidad de la app — decisiones tomadas

### la sesión
- 4-5 ejercicios mixtos por sesión
- Tipos: opción múltiple + respuesta abierta según el ejercicio
- La app elige el área cognitiva automáticamente según las debilidades
  del usuario — el usuario no elige
- Duración variable según el usuario
- Free: 1 sesión diaria en el momento cognitivo elegido
- Premium: sesiones extra ilimitadas además de la diaria

### las 4 áreas cognitivas
- razonamiento crítico
- argumentación
- resistencia a sesgos
- velocidad de procesamiento

### generación de ejercicios
- Generados por la API de Claude en batch semanal por usuario
- 1 llamada a la API por semana por usuario — nunca por sesión
- Cacheados en Supabase tabla `exercises`
- 35 ejercicios por semana por usuario (5 áreas × 7 días)
- Las respuestas abiertas son evaluadas por IA en tiempo real (0-100)

### el noüs score
- Número de 0 a 100
- Se actualiza instantáneamente después de cada sesión
- Visible desde el día 1
- Puede bajar si el usuario no entrena
- Notificación de aviso a las 24h sin sesión antes de que baje

**Fórmula:**
```
noüs score = (agudeza × 0.40) + (criterio × 0.40) + (consistencia × 0.20)
```

**Las 3 dimensiones:**
- **agudeza** (40%) — precisión y velocidad de respuesta
- **criterio** (40%) — independencia del pensamiento, resistencia a
  respuestas obvias, pensamiento propio bajo presión
- **consistencia** (20%) — regularidad del entrenamiento sostenido
  en el tiempo. actúa como multiplicador del hábito.

**Presentación visual:**
- El número grande en DM Serif dentro del anillo circular con borde ginger
- Las 3 dimensiones visibles debajo con barras de progreso en ginger
- El anillo: fondo blanco, borde 4px ginger, arco decorativo ginger-light

### la pantalla de resultado
- noüs score actualizado con el anillo
- Comparativa con ayer
- Comparativa con la semana pasada
- Opción de compartir la tarjeta (solo aquí, no en ningún otro sitio)

### el percentil
- Compara al usuario con personas de su mismo sector profesional
  Y frecuencia de uso de IA
- Ambos datos recogidos en el onboarding
- Visible en estadísticas premium

### el resumen semanal
- Cada lunes
- Evolución de las 3 dimensiones durante la semana
- Mejor y peor área de la semana
- Percentil global y por segmento

### notificaciones — solo 2 tipos
1. **Momento cognitivo** — push en el momento elegido por el usuario
2. **Score en riesgo** — push a las 24h sin sesión avisando que el score puede bajar
- Nunca más notificaciones. Nunca.

### la tarjeta compartible
- Aparece solo después de completar la sesión diaria
- Siempre con identidad: foto de perfil + nombre completo
- El anillo del noüs score (diseño aprobado)
- Las 3 dimensiones con barras de progreso en ginger
- "piensa por ti mismo." + noüs.es
- Share sheet nativo de iOS — el usuario elige el destino
- Se registra en tabla `share_cards`

### el modelo freemium
- **Free:** 1 sesión/día + estadísticas básicas (score + progresión simple)
- **Premium:** sesiones extra ilimitadas + estadísticas avanzadas
  (desglose por área, percentil, comparativa segmento) + informe mensual

### el onboarding recoge
1. Momento cognitivo: 06 · 08 · 12 · 17
2. Sector profesional: tech, legal, salud, educación, finanzas, marketing, otro
3. Frecuencia de uso de IA: diario, semanal, ocasional, nunca

### login
- Principal: Sign in with Apple (Face ID)
- Fallback: email + contraseña
- Supabase Auth gestiona ambos

---

## dirección visual y copy — web

### arquitectura de páginas — decisión definitiva
Cada página tiene exactamente un trabajo. No mezclar:
- `/` — impacto de marca. hook. sin CTA.
- `/manifiesto` — convicción. el texto completo. sin eyebrow, sin CTA.
- `/acceso-anticipado` — captura. el formulario de waitlist.

### estética web aprobada
- Fondo: **obsidian (#0a0a0a)** en las 3 páginas — la web es enteramente dark
- El fog no se usa en la web — es exclusivo de pantallas light de la app iOS
- Sin footer con wordmark noüs — solo @think.nous y la frase de cierre
- Footer: rgba(255,255,255,0.50) — nunca ginger en el footer

### nav web — valores aprobados
- Logo: SVG vectorial (`public/logo.svg`) — no texto DM Serif
  - Desktop: 100px de alto
  - Móvil (< 640px): 56px de alto
  - Dark mode: `filter: invert(1)` — letras blancas sobre transparente
  - El SVG no tiene rectángulo de fondo — solo los trazos de las letras con `fill="currentColor"`
- Links "manifiesto" y "acceso anticipado": mismo color, nunca ginger
  - Activo: rgba(255,255,255,0.85)
  - Inactivo: rgba(255,255,255,0.40)
- Padding: 4px 40px desktop · 4px 20px móvil — barra estrecha
- Gap entre links: 32px desktop · 20px móvil
- Nunca noüs wordmark de texto en el footer web

### hero — copy y diseño definitivos y aprobados
```
H1 línea 1:  "delegar es fácil."          → color: #ffffff
H1 línea 2:  "pensar, cada vez menos."    → color: rgba(255,255,255,0.32)
subtítulo:   "siete minutos al día. para seguir siendo tú."
             → DM Serif · color: var(--ginger)
```
El degradado de opacidad en el H1 no es decorativo — el texto se desvanece
para reforzar visualmente el concepto de "cada vez menos". No cambiar.
Sin eyebrow. Sin CTA. El index es un momento de marca, no una página de conversión.

### /acceso-anticipado — copy aprobado
```
eyebrow:  "sé el primero en acceder."  → DM Mono · ginger
H1:       "está en camino."            → DM Serif · grande · blanco
```

### /manifiesto — reglas
- Empieza directamente con "hay personas que piensan." — sin eyebrow ni label
- Texto normal: rgba(255,255,255,0.85)
- Texto muted: rgba(255,255,255,0.30)
- Texto accent: var(--ginger)
- Bordes entre líneas: rgba(255,255,255,0.06)
- Termina en "piensa por ti mismo." en ginger — sin CTA a continuación

### uso del ginger en la web
Ginger está reservado exclusivamente para:
- Subtítulo del hero ("siete minutos al día. para seguir siendo tú.")
- Eyebrow de /acceso-anticipado
- Líneas accent del manifiesto ("¿hasta dónde estás dispuesto a delegar?", etc.)
- Enlace @think.nous en footer (único elemento)
Nunca ginger en links de nav. Nunca ginger en cuerpo de texto.

### copy web — reglas
- Minimizar repetición del nombre noüs dentro de una misma página
- Nunca `textTransform: uppercase` en copy — minúsculas siempre en CSS y en texto
- El nombre noüs aparece una sola vez por página: en el logo del nav

### responsive — decisiones aprobadas
- Breakpoint único: 640px
- Estrategia: inline styles para todo excepto responsive — clases CSS en globals.css
- Clases definidas: `.nav-wrap` `.nav-logo` `.nav-links` `.page-pad` `.section-pad` `.acceso-pad` `.footer-pad` `.hero-h1` `.acceso-h1`
- Padding lateral: 40px desktop → 20px móvil en todas las páginas
- Letter-spacing en H1: ajuste en móvil para evitar cortes de palabra
- Tamaños de fuente: ya usan `clamp()` — escalan solos sin clases adicionales

---

## dirección visual de la app iOS

### tokens de color en SwiftUI
```swift
Color.obsidian       // #0a0a0a
Color.fog            // #f5f4f0
Color.fogMid         // #edecea
Color.ginger         // #BE5504
Color.gingerLight    // #FAEBD4
Color.gingerDark     // #7A2E00
Color.inkSecondary   // #555555
Color.inkTertiary    // #999999
```

### tokens tipográficos en SwiftUI
```swift
Font.nousSerif(size:)   // DM Serif Display
Font.nousMono(size:)    // DM Mono
Font.nousSans(size:)    // DM Sans
```

### pantallas light (fondo fog)
- Background: Color.fog — nunca blanco puro
- Cards elevadas: white con border rgba(10,10,10,0.09)
- Texto principal: obsidian
- Texto secundario: inkSecondary
- Labels y metadata: inkTertiary
- Acento y métricas: ginger
- Cards informativas suaves: gingerLight con texto gingerDark

### pantallas dark (fondo obsidian)
- Background: Color.obsidian
- Elementos sutiles: rgba(255,255,255,0.05)
- Texto principal: blanco
- Texto secundario: rgba(255,255,255,0.35)
- Labels: rgba(255,255,255,0.28)
- Acento: ginger
- Estado seleccionado: rgba(190,85,4,0.16) con borde ginger
- CTAs primarios: background ginger, texto blanco

### CTAs y botones
- Pantallas light: background obsidian, texto blanco
- Pantallas dark: background ginger, texto blanco
- Border radius: 10–12pt
- Nunca outline como estilo de botón principal

### eyebrows de sección
- DM Mono, 9–10px, color ginger
- letter-spacing amplio, text-transform uppercase

### onboarding — dirección visual aprobada
- Fondo: obsidian
- Selección del momento cognitivo: hora en DM Mono grande (06, 08, 12, 17)
  como elemento tipográfico — sin iconos, sin emojis
- Hora inactiva: rgba(255,255,255,0.18)
- Hora activa: ginger (#BE5504)
- Opción seleccionada: rgba(190,85,4,0.16) con borde ginger
- Step dots: activo en ginger, inactivo en rgba(255,255,255,0.12)

### el anillo del noüs score
- Circular, fondo blanco
- Borde 4px ginger (#BE5504)
- Arco decorativo ginger-light con clip-path — no cierra el círculo
- El número en DM Serif Display, prominente, color obsidian
- Label "noüs score" en DM Mono, pequeño, color ink-3
- Nunca cambiar estos valores

### métricas y datos
- Siempre en DM Mono
- Color ginger sobre fondos light
- Barras de progreso siempre en ginger
- Gráficas de evolución: ginger-light → ginger-mid → ginger

---

## arquitectura técnica

### web (nous/web)
- Next.js 14, TypeScript
- CSS variables nativas — sin Tailwind, sin CSS Modules
- Deploy: Vercel — producción en noüs.es
- Supabase (DB + Auth), Resend (emails), PostHog (analytics)
- Fix crítico: usar maybeSingle() no single() en queries de existencia
- Fix crítico: RESEND_FROM_EMAIL debe ser hola@xn--nos-ioa.es en Vercel

### app iOS (nous/app)
- SwiftUI nativo, Xcode
- Supabase Swift SDK
- RevenueCat (suscripciones)
- PostHog iOS SDK (analytics)
- Sin storyboards — todo SwiftUI puro

### estructura de carpetas
```
nous/
  web/          ← Next.js (desplegado en noüs.es)
  app/          ← SwiftUI (por arrancar)
  brand/        ← documentos de marca
  CLAUDE.md     ← este fichero
```

---

## base de datos — estado actual

### ejecutadas ✅
- `waitlist` — emails lista de espera
- `profiles` — perfil de cada usuario (trigger auto-creación al registrarse)
- `nous_scores` — historial de scores
- `sessions` — sesiones completadas
- `exercises` — ejercicios generados por IA en batch semanal
- `exercise_responses` — respuestas del usuario
- `weekly_reports` — resúmenes semanales automáticos
- `share_cards` — tarjetas de score compartidas
- `notifications_log` — log de notificaciones push

### pendiente — fase 3
- `device_tokens` — necesaria para push notifications via APNs

### funciones ejecutadas
- `calculate_nous_score(agudeza, criterio, consistencia)` → numeric
  Fórmula: (agudeza × 0.40) + (criterio × 0.40) + (consistencia × 0.20)
  Usar siempre esta función — nunca calcular el score manualmente.
- `update_streak(user_id)` → void
  Lógica: ayer → streak+1 · hoy → sin cambio · antes → streak=1
- `handle_new_user()` → trigger (auto-creación de perfil)
- `handle_updated_at()` → trigger (actualiza updated_at en profiles)

### reglas de uso críticas
- Nunca calcular el score manualmente — siempre calculate_nous_score()
- Nunca insertar en exercises desde el cliente — solo service_role
- Nunca insertar en weekly_reports desde el cliente — solo service_role
- Nunca insertar en notifications_log desde el cliente — solo service_role
- `onboarded` en profiles controla qué pantalla ve el usuario al abrir la app
- `is_premium` en profiles controla el acceso a features premium

---

## stack de servicios

| Servicio | Uso | Estado |
|----------|-----|--------|
| Supabase | DB + Auth | ✅ activo |
| Resend | Emails transaccionales | ✅ verificado |
| Vercel | Deploy web | ✅ live en noüs.es |
| Cloudflare | DNS noüs.es | ✅ activo |
| RevenueCat | Suscripciones iOS | pendiente |
| PostHog | Analytics | pendiente |
| Anthropic API | Generación de ejercicios | pendiente |
| Apple Developer | App Store + Sign in with Apple | pendiente |

---

## convenciones de código

- TypeScript estricto — sin `any`, sin `// @ts-ignore`
- Comentarios en español
- Variables y funciones: camelCase en inglés
- Componentes: PascalCase
- Colores: siempre como variables CSS, nunca hex hardcodeado
- App Router de Next.js — no Pages Router
- `'use client'` solo cuando hay interactividad real
- API routes en `src/app/api/[nombre]/route.ts`
- Supabase: usar maybeSingle() para queries donde el resultado puede ser null

---

## lo que nunca debes hacer

En copy y narrativa:
- NOÜS, Noüs o NOUS en contexto de marca
- Decir que el founder dejó su trabajo — es CTO de Movimer World
- Narrativa anti-IA — noüs complementa la IA, no la combate
- Tono motivacional o de coach
- Exclamaciones encadenadas
- Comparar noüs con competidores
- "puntos", "estrellas", "racha" — el score no es gamificación

En diseño:
- Gradientes de ningún tipo
- Segundo color de acento
- Sombras decorativas
- Blur como efecto visual
- Emojis en cualquier componente
- Blanco puro como fondo de pantalla
- Tailwind o cualquier framework CSS externo
- Texto en mayúsculas en el copy — ni en CSS (textTransform) ni en el texto
- Ginger en links de nav web o en el footer web
- Repetir el nombre noüs más de una vez por página web
- Mezclar CTA con páginas de contenido — cada página tiene un solo trabajo

En código:
- Hex hardcodeado fuera de globals.css
- `any` en TypeScript
- `// @ts-ignore`
- `.single()` en Supabase cuando el resultado puede ser null — usar `.maybeSingle()`

---

## el manifiesto

hay personas que piensan.
y hay personas que delegan su pensamiento.
la diferencia no es la inteligencia.
es la práctica.

el cerebro es un músculo.
el único que no duele cuando se atrofia.
el único cuya pérdida no se nota
hasta que ya es demasiado tarde.

vivimos en la era de la delegación inteligente.
delegamos búsquedas.
delegamos resúmenes.
delegamos decisiones.
delegamos argumentos.
¿hasta dónde estás dispuesto a delegar?

no somos anti inteligencia artificial.
somos pro pensamiento propio.
la ia es una herramienta extraordinaria.
pero una herramienta no puede pensar por ti.
solo tú puedes hacer eso.
si no lo pierdes por el camino.

noüs no es una app.
es la decisión de no rendirte.
de que tus ideas sean tuyas.
de que tu criterio tenga nombre propio.
de que cuando alguien te pregunte tu opinión,
tengas una.

siete minutos al día.
no para ser más listo.
para seguir siendo tú.

piensa por ti mismo.

---

*CLAUDE.md · noüs · v3.2 · abril 2026*
*Solo contiene decisiones ya tomadas. No especular sobre funcionalidad no
definida. Actualizar cuando se tomen nuevas decisiones de producto o arquitectura.*