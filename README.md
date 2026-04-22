# noüs — web

Landing page con lista de espera. Next.js 14 + Supabase + Resend + Vercel.

## setup local

```bash
npm install
cp .env.local.example .env.local
# rellena las variables de entorno
npm run dev
```

## variables de entorno necesarias

### Supabase
1. Crea proyecto en supabase.com
2. Ve a SQL Editor y ejecuta:
```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamptz default now(),
  source text default 'nous.es'
);

-- Solo inserciones anónimas, sin lectura
alter table waitlist enable row level security;
create policy "insert only" on waitlist for insert to anon with check (true);
```
3. Copia la URL y la anon key en `.env.local`

### Resend
1. Crea cuenta en resend.com
2. Verifica el dominio nous.es (añade los DNS records que te indican)
3. Crea una API key
4. Cópiala en `.env.local`

## deploy en Vercel

```bash
# Instala Vercel CLI si no lo tienes
npm i -g vercel

# Deploy
vercel

# Añade las variables de entorno en vercel.com/[proyecto]/settings/environment-variables
```

## estructura

```
src/
  app/
    page.tsx          — landing completa
    layout.tsx        — metadata y fuentes
    globals.css       — tokens de color y tipografía
    api/
      waitlist/
        route.ts      — POST /api/waitlist — captura email + envía welcome email
  components/
    WaitlistForm.tsx  — formulario con estados (idle/loading/success/error)
```

## brand tokens

```css
--obsidian: #0a0a0a   /* color primario */
--fog: #f5f4f0        /* fondo principal */
--fog-mid: #edecea    /* fondo secundario */
--ginger: #BE5504     /* acento */
--ginger-light: #FAEBD4
--font-serif: DM Serif Display
--font-sans: DM Sans
--font-mono: DM Mono
```
