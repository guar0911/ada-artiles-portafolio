import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { nav, person } from '../data/content'
import { ease } from './ui'

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Resalta la sección visible en el menú.
  useEffect(() => {
    const ids = ['inicio', ...nav.map((n) => n.href.slice(1))]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Bloquea el scroll con el menú móvil abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled || open ? 'bg-sand-50/85 shadow-[0_1px_0_rgba(22,48,47,0.08)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Principal">
          <a href="#inicio" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-ink-800 text-sm text-sand-50 italic transition-transform group-hover:rotate-[-8deg]">
              {person.initials}
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-ink-900">{person.shortName}</span>
              <span className="block text-[11px] tracking-wide text-ink-600">Recursos Humanos · Formación</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-ink-800/[0.07]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-clay-600/20 transition-colors hover:bg-clay-600 sm:inline-flex"
            >
              Solicitar propuesta
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-800/5 lg:hidden"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        <motion.div className="h-[2px] origin-left bg-clay-500" style={{ scaleX: progress }} aria-hidden />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-sand-50/95 px-4 pb-10 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
              className="flex flex-col pt-4"
            >
              {nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { ease } } }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b border-ink-800/10 py-4 text-3xl text-ink-900"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-clay-500 py-4 text-base font-semibold text-white"
            >
              Solicitar propuesta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
