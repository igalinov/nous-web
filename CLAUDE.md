# noüs — CLAUDE.md

Este fichero define el contexto permanente del proyecto noüs para Claude Code.
Léelo completo antes de cualquier acción. Es innegociable.

---

## qué es noüs

noüs es una app móvil iOS que ayuda a profesionales a mantener su capacidad
de razonamiento y criterio propio en la era de la inteligencia artificial.
No es una app de productividad. No es un juego de puzzles.
Es la práctica diaria de la independencia cognitiva.

**El problema que resuelve:** cuanto más delegamos tareas de pensamiento a
herramientas de IA, más se atrofia nuestra capacidad de razonar de forma
independiente.

**Modelo de negocio:** freemium B2C → licencias B2B enterprise.

---

## la marca — reglas absolutas

### naming
- El nombre de la marca es siempre **noüs** — minúsculas, con diéresis
- Handle de Instagram: **@think.nous**
- Dominio: **noüs.es**
- Email: **hola@noüs.es**
- El dominio y el handle son infraestructura. La marca es noüs.
- Nunca escribir NOÜS, Noüs, Nous o nous sin diéresis en contexto de marca
- La única excepción: variables de código, rutas de archivos y nombres de
  paquetes npm donde la ü no es válida

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
- Sin emojis en ningún contexto
- Sin exclamaciones encadenadas
- Sin lenguaje de coach motivacional
- El copy siempre en minúsculas

Correcto: "buen razonamiento, marc." / "7 minutos. cada día."
Incorrecto: "¡¡Increíble!! 🎉" / "¡No rompas tu racha! 🔥"

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
2. **Score en riesgo** — push a las 24h sin sesión avisando que el
   score puede bajar
- Nunca más notificaciones. Nunca.

### la tarjeta compartible
- Aparece solo después de completar la sesión diaria
- Siempre con identidad: foto de perfil + nombre completo
- El anillo del noüs score (diseño aprobado)
- Las 3 dimensiones con barras de progreso
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
- Deploy: Vercel
- Supabase (DB + Auth), Resend (emails), PostHog (analytics)

### app iOS (nous/app)
- SwiftUI nativo, Xcode
- Supabase Swift SDK
- RevenueCat (suscripciones)
- PostHog iOS (analytics)
- Sin storyboards

### estructura de carpetas
```
nous/
  web/          ← Next.js
  app/          ← SwiftUI
  brand/        ← documentos de marca
  CLAUDE.md     ← este fichero
```

---

## base de datos — esquema

### fase 1 (ejecutada)
- `waitlist` — emails de lista de espera
- `profiles` — perfil de cada usuario

### fase 2 (pendiente de ejecutar)
- `nous_scores` — historial de scores
- `sessions` — sesiones completadas
- `exercises` — ejercicios generados por ia
- `exercise_responses` — respuestas del usuario
- `weekly_reports` — resúmenes semanales
- `share_cards` — registro de tarjetas compartidas
- `notifications_log` — log de notificaciones enviadas

**Función clave:** `calculate_nous_score(agudeza, criterio, consistencia)`
Fórmula: agudeza × 0.40 + criterio × 0.40 + consistencia × 0.20

---

## stack de servicios

| Servicio | Uso |
|----------|-----|
| Supabase | DB + Auth |
| Resend | Emails transaccionales |
| Vercel | Deploy web |
| RevenueCat | Suscripciones iOS |
| PostHog | Analytics |
| Anthropic API | Generación de ejercicios |

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

---

## lo que nunca debes hacer

En diseño:
- Gradientes de ningún tipo
- Segundo color de acento
- Sombras decorativas
- Blur como efecto visual
- Emojis en cualquier componente
- Blanco puro como fondo de pantalla
- Tailwind o cualquier framework CSS externo
- Texto en mayúsculas en el copy

En copy:
- NOÜS, Noüs o NOUS en contexto de marca
- Tono motivacional o de coach
- Exclamaciones encadenadas
- Comparar noüs con competidores
- "puntos", "estrellas", "racha" — el score no es gamificación

En código:
- Hex hardcodeado fuera de globals.css
- `any` en TypeScript
- `// @ts-ignore`

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

*CLAUDE.md · noüs · v2.0 · abril 2026*
*Solo contiene decisiones ya tomadas. No especular sobre funcionalidad no
definida. Actualizar cuando se tomen nuevas decisiones.*

---

## base de datos — documentación completa

### tablas fase 1 (ejecutadas)

**public.waitlist**
Emails de la lista de espera recogidos desde noüs.es.
Columnas: id (uuid PK), email (text unique), source (text, default 'noüs.es'), created_at (timestamptz)
RLS: INSERT anónimo permitido · SELECT solo service_role

**public.profiles**
Perfil completo de cada usuario. Se crea automáticamente via trigger al registrarse.
Columnas: id (uuid PK FK→auth.users), email, full_name, display_name, avatar_url,
auth_provider ('apple'|'email'), sector, ai_frequency, cognitive_moment ('06'|'08'|'12'|'17'),
from_waitlist (boolean), onboarded (boolean), is_premium (boolean), premium_since,
streak_days (integer), last_session_at, created_at, updated_at
RLS: SELECT/UPDATE solo el propio usuario · INSERT solo service_role (via trigger)

### tablas fase 2 (ejecutadas)

**public.nous_scores**
Historial completo de scores. Un registro por sesión completada.
Columnas: id, user_id (FK→profiles), score (0-100), agudeza (0-100), criterio (0-100),
consistencia (0-100), session_id (FK→sessions), score_delta, created_at
RLS: SELECT/INSERT solo el propio usuario

**public.sessions**
Cada sesión diaria o extra del usuario.
Columnas: id, user_id (FK→profiles), status ('in_progress'|'completed'|'abandoned'),
completed_at, cognitive_area ('razonamiento'|'argumentacion'|'sesgos'|'velocidad'),
exercises_total, exercises_correct, avg_response_time, accuracy_pct, is_extra (boolean), created_at
RLS: SELECT/INSERT/UPDATE solo el propio usuario

**public.exercises**
Banco de ejercicios generados por IA en batch semanal. 35 por usuario por semana.
Columnas: id, user_id (FK→profiles), cognitive_area, type ('multiple_choice'|'open_answer'),
difficulty (1-5), question, options (jsonb), correct_answer, context, week_start (date),
used (boolean), used_in_session (FK→sessions), generated_at
RLS: SELECT solo el propio usuario · INSERT solo service_role

**public.exercise_responses**
Respuesta del usuario a cada ejercicio de cada sesión.
Columnas: id, session_id (FK→sessions), exercise_id (FK→exercises), user_id (FK→profiles),
response (text), is_correct (boolean, null para open_answer), response_time (seconds),
ai_evaluation (0-100, solo open_answer), ai_insight (text), created_at
RLS: SELECT/INSERT solo el propio usuario

**public.weekly_reports**
Resumen semanal generado cada lunes automáticamente.
Columnas: id, user_id (FK→profiles), week_start (date), week_end (date),
score_start, score_end, score_delta, avg_agudeza, avg_criterio, avg_consistencia,
sessions_completed, sessions_possible (default 7), best_area, worst_area,
percentile_global, percentile_segment, weekly_insight, sent_at, created_at
Unique: (user_id, week_start)
RLS: SELECT solo el propio usuario · INSERT solo service_role

**public.share_cards**
Registro de tarjetas de score compartidas. Snapshot del score en el momento de compartir.
Columnas: id, user_id (FK→profiles), session_id (FK→sessions),
score, agudeza, criterio, consistencia, shared_to ('instagram'|'whatsapp'|'other'), created_at
RLS: SELECT/INSERT solo el propio usuario

**public.notifications_log**
Log de notificaciones push enviadas. Solo 3 tipos permitidos.
Columnas: id, user_id (FK→profiles), type ('cognitive_moment'|'score_at_risk'|'weekly_report'),
sent_at, opened (boolean)
RLS: SELECT solo el propio usuario · INSERT solo service_role

### tabla pendiente — fase 3

**public.device_tokens** (pendiente — añadir cuando se implementen push notifications)
Necesaria para enviar notificaciones push via APNs.
Columnas sugeridas: id, user_id (FK→profiles), token (text), platform ('ios'),
created_at, updated_at

### triggers

**on_auth_user_created** — AFTER INSERT ON auth.users
Llama a handle_new_user(). Crea el perfil automáticamente al registrarse.
Detecta si el email estaba en waitlist → from_waitlist = true.
Extrae display_name del nombre de Apple o del email como fallback.

**on_profiles_updated** — BEFORE UPDATE ON public.profiles
Llama a handle_updated_at(). Actualiza updated_at automáticamente en cada UPDATE.

### funciones

**calculate_nous_score(p_agudeza, p_criterio, p_consistencia) → numeric**
Fórmula oficial: (agudeza × 0.40) + (criterio × 0.40) + (consistencia × 0.20)
Llamar siempre esta función — nunca calcular el score manualmente en el código.

**update_streak(p_user_id) → void**
Actualiza streak_days y last_session_at al completar una sesión.
Lógica: last_session = ayer → streak+1 · last_session = hoy → sin cambio · antes de ayer → streak=1

### reglas de uso

- Nunca hardcodear el cálculo del score — usar siempre calculate_nous_score()
- Nunca insertar en exercises desde el cliente — solo service_role
- Nunca insertar en weekly_reports desde el cliente — solo service_role
- Nunca insertar en notifications_log desde el cliente — solo service_role
- El campo onboarded en profiles controla qué pantalla ve el usuario al abrir la app
- El campo is_premium en profiles controla el acceso a features premium
- Siempre usar cascade delete — si se borra un usuario, todos sus datos se borran