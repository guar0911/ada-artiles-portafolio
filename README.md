# Portafolio — Ada Artiles Espinal

Landing page de portafolio para **Ada Artiles Espinal**, Psicóloga Industrial, asesora de departamentos de Recursos Humanos y facilitadora del INFOTEP.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Motion (`motion/react`) · lucide-react

## Empezar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera /dist listo para publicar
npm run preview   # sirve /dist localmente
```

## Agregar la foto (Cloudinary)

Abre `src/data/content.ts` y pega la URL en `PHOTO_URL`:

```ts
export const PHOTO_URL = 'https://res.cloudinary.com/TU_CLOUD/image/upload/v1712345678/ada-artiles.jpg'
```

La página inserta sola las transformaciones de Cloudinary (`c_fill,g_face,ar_4:5,f_auto,q_auto` + anchos responsivos), así que la foto se recorta centrada en la cara y se sirve en WebP/AVIF. Si la URL ya trae transformaciones propias, se respetan. Mientras `PHOTO_URL` esté vacía (o si la imagen falla), se muestra un monograma "AA".

Para la vista previa al compartir en redes, descomenta la etiqueta `og:image` en `index.html`.

## Editar contenido

Todo el texto (perfil, roles, enfoque, propuesta de valor, metodología, 37 cursos en 8 áreas, programas y contacto) está en **`src/data/content.ts`**. Los componentes solo leen de ahí.

## Estructura

```
src/
├─ data/content.ts        ← contenido + PHOTO_URL
├─ lib/cloudinary.ts      ← helper de transformaciones
└─ components/
   ├─ Navbar.tsx          menú fijo, sección activa, barra de progreso, menú móvil
   ├─ Hero.tsx            titular, retrato en arco con parallax, contadores
   ├─ Roles.tsx           Asesora de RR.HH. + Facilitadora INFOTEP (destacados)
   ├─ Profile.tsx         perfil profesional, propósito, cita
   ├─ Approach.tsx        Conocer · Saber hacer · Saber ser
   ├─ ValueProposition.tsx propuesta de valor + metodología
   ├─ Catalog.tsx         catálogo por área (pestañas) y vista resumida
   ├─ Programs.tsx        formatos, personalización, modalidad y duración
   ├─ Contact.tsx         datos de contacto + formulario (abre el correo)
   └─ Footer.tsx
```

## Notas

- El formulario no necesita backend: arma el mensaje y abre el cliente de correo del visitante con `mailto:`. Si luego quieres recibir envíos directamente, se puede conectar a Formspree, Resend o similar.
- Las animaciones respetan la preferencia del sistema "reducir movimiento".
- Publicación sugerida: Vercel, Netlify o Cloudflare Pages (comando `npm run build`, carpeta `dist`).
