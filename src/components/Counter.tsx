import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

/** Número que cuenta hasta `to` la primera vez que entra en pantalla. */
export function Counter({ to, prefix = '', suffix = '', duration = 1.6 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || !inView) return
    if (reduce) {
      node.textContent = `${prefix}${to}${suffix}`
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = `${prefix}${Math.round(v)}${suffix}`),
    })
    return () => controls.stop()
  }, [inView, to, prefix, suffix, duration, reduce])

  return (
    <span ref={ref} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}0{suffix}
    </span>
  )
}
