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
- Dominio: **nous.es**
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

## dirección visual de la app iOS

La funcionalidad de la app se definirá en documentos separados.
Lo que sigue es únicamente la dirección gráfica aprobada.

### tokens de color en SwiftUI
```swift
Color.obsidian      // #0a0a0a
Color.fog           // #f5f4f0
Color.fogMid        // #edecea
Color.ginger        // #BE5504
Color.gingerLight   // #FAEBD4
Color.gingerDark    // #7A2E00
Color.inkSecondary  // #555555
Color.inkTertiary   // #999999
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
- Elementos sutiles: rgba(255,255,255,0.05) — rgba(255,255,255,0.08)
- Texto principal: blanco
- Texto secundario: rgba(255,255,255,0.35)
- Labels: rgba(255,255,255,0.28)
- Acento: ginger
- Estado seleccionado: rgba(190,85,4,0.16) con borde ginger
- CTAs primarios en dark: background ginger, texto blanco

### CTAs y botones
- Pantallas light: background obsidian, texto blanco
- Pantallas dark: background ginger, texto blanco
- Border radius: 10–12pt
- Nunca outline como estilo de botón principal

### eyebrows de sección
- DM Mono, 9–10px, color ginger
- letter-spacing amplio, text-transform uppercase
- Ejemplo: "momento cognitivo", "sesión completada"

### onboarding — dirección visual aprobada
- Fondo: obsidian
- Selección del momento cognitivo: hora en DM Mono grande (06, 08, 12, 17)
  como elemento tipográfico — sin iconos, sin emojis
- Hora inactiva: rgba(255,255,255,0.18)
- Hora activa: ginger (#BE5504)
- Opción seleccionada: rgba(190,85,4,0.16) con borde ginger
- Step dots: activo en ginger, inactivo en rgba(255,255,255,0.12)

### métricas y datos
- Siempre en DM Mono
- Color ginger sobre fondos light
- Barras de progreso siempre en ginger
- Gráficas de evolución: escala ginger-light → ginger-mid → ginger

---

## arquitectura técnica

### web (nous/web)
- Next.js 14, TypeScript
- CSS variables nativas — sin Tailwind, sin CSS Modules
- Deploy: Vercel
- Supabase (DB + Auth), Resend (emails), PostHog (analytics)
- Estilos: objetos CSS inline o globals.css

### app iOS (nous/app)
- SwiftUI nativo, Xcode
- Supabase Swift SDK
- Sin storyboards
- Funcionalidad a definir por separado

### estructura de carpetas
```
nous/
  web/          ← Next.js
  app/          ← SwiftUI
  brand/        ← documentos de marca
  CLAUDE.md     ← este fichero
```

---

## convenciones de código

- TypeScript estricto — sin `any`, sin `// @ts-ignore`
- Comentarios en español
- Variables y funciones: camelCase en inglés
- Componentes: PascalCase
- Colores: siempre como variables CSS, nunca hex hardcodeado fuera de globals.css
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

En código:
- Hex hardcodeado fuera de globals.css
- `any` en TypeScript
- `// @ts-ignore`

---

## stack de servicios

| Servicio | Uso |
|----------|-----|
| Supabase | DB + Auth |
| Resend | Emails transaccionales |
| Vercel | Deploy web |
| PostHog | Analytics |

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

*CLAUDE.md · noüs · v1.1 · abril 2026*
*Solo contiene decisiones ya tomadas. No especular sobre funcionalidad no
definida. Actualizar cuando se tomen nuevas decisiones de diseño o arquitectura.*
