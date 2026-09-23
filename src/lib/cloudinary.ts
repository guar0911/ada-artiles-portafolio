/**
 * Inserta transformaciones de Cloudinary en una URL de entrega.
 *   https://res.cloudinary.com/demo/image/upload/v123/foto.jpg
 *   → https://res.cloudinary.com/demo/image/upload/w_800,c_fill,g_face,f_auto,q_auto/v123/foto.jpg
 * Si la URL no es de Cloudinary (o ya trae transformaciones), se devuelve tal cual.
 */
export function cloudinary(url: string, transforms: string): string {
  if (!url) return url
  const marker = '/upload/'
  const i = url.indexOf(marker)
  if (!url.includes('res.cloudinary.com') || i === -1) return url

  const rest = url.slice(i + marker.length)
  const firstSegment = rest.split('/')[0]
  // Si ya hay transformaciones (p. ej. "w_500,c_fill"), respetamos las del usuario.
  const isFile = rest.split('/').length === 1 // p. ej. ".../upload/ada_artiles.jpg"
  if (!isFile && /(^|,)[a-z]{1,3}_/.test(firstSegment) && !/^v\d+$/.test(firstSegment)) return url

  return `${url.slice(0, i + marker.length)}${transforms}/${rest}`
}

/** srcSet responsivo para un mismo recorte a distintos anchos. */
export function cloudinarySrcSet(url: string, base: string, widths: number[]): string | undefined {
  if (!url.includes('res.cloudinary.com')) return undefined
  if (cloudinary(url, base) === url) return undefined // ya trae transformaciones propias
  return widths.map((w) => `${cloudinary(url, `${base},w_${w}`)} ${w}w`).join(', ')
}
