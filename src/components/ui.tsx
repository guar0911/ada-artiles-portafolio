import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

export const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/** Aparece suavemente al entrar en pantalla. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
      }}
    >
      {children}
    </Tag>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

type HeadingProps = {
  eyebrow: string
  title: ReactNode
  intro?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'light' }: HeadingProps) {
  const center = align === 'center'
  const dark = tone === 'dark'
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger(0.1)}
      className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}
    >
      <motion.p
        variants={fadeUp}
        className={`mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? 'text-clay-300' : 'text-clay-600'
        }`}
      >
        <span className={`h-px w-8 ${dark ? 'bg-clay-300' : 'bg-clay-500'}`} aria-hidden />
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-sand-50' : 'text-ink-900'
        }`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? 'text-ink-100/80' : 'text-ink-700'}`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const styles = {
    primary: 'bg-ink-800 text-sand-50 hover:bg-ink-900 shadow-lg shadow-ink-900/15',
    secondary: 'border border-ink-800/20 text-ink-800 hover:border-ink-800/50 hover:bg-white/60',
    light: 'bg-sand-50 text-ink-900 hover:bg-white shadow-lg shadow-black/20',
  }[variant]
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </motion.a>
  )
}
