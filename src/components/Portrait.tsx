import { useState } from 'react'
import { PHOTO_URL, person } from '../data/content'
import { cloudinary, cloudinarySrcSet } from '../lib/cloudinary'

const BASE = 'c_fill,g_face,ar_4:5,f_auto,q_auto'

/**
 * Foto de Ada desde Cloudinary (recorte centrado en la cara, formato y calidad automáticos).
 * Si no hay URL o la imagen falla, muestra un monograma con la misma forma.
 */
export function Portrait({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false)
  const hasPhoto = PHOTO_URL.trim() !== '' && !failed

  if (!hasPhoto) {
    return (
      <div
        role="img"
        aria-label={`Retrato de ${person.name}`}
        className={`relative flex items-center justify-center overflow-hidden bg-linear-to-br from-ink-700 via-ink-800 to-ink-950 ${className}`}
      >
        <div className="absolute inset-0 grain opacity-60" aria-hidden />
        <div
          className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-ink-300/25 blur-3xl"
          aria-hidden
        />
        <span className="font-display relative text-7xl text-sand-100/90 italic sm:text-8xl">{person.initials}</span>
      </div>
    )
  }

  return (
    <img
      src={cloudinary(PHOTO_URL, `${BASE},w_900`)}
      srcSet={cloudinarySrcSet(PHOTO_URL, BASE, [480, 720, 900, 1200])}
      sizes="(min-width: 1024px) 440px, (min-width: 640px) 60vw, 85vw"
      alt={`Retrato de ${person.name}, ${person.title}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
