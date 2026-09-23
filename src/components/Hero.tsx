import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react'
import { areas, person, totalCourses } from '../data/content'
import { Portrait } from './Portrait'
import { Counter } from './Counter'
import { Button, Container, ease, fadeUp, stagger } from './ui'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120])

  const stats = [
    { value: <Counter to={person.years} prefix="+" />, label: 'años en Recursos Humanos' },
    { value: <Counter to={totalCourses} />, label: 'cursos en catálogo' },
    { value: <Counter to={areas.length} />, label: 'áreas de formación' },
  ]

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Fondo */}
      <motion.div style={{ y: blobY }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-sage-200/70 blur-3xl" />
        <div className="absolute top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-clay-300/35 blur-3xl" />
      </motion.div>
      <div className="grain pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Texto */}
        <motion.div initial="hidden" animate="show" variants={stagger(0.1)} className="order-2 lg:order-1">
          <motion.p variants={fadeUp} className="text-sm font-medium text-ink-700">
            <span className="font-semibold text-ink-900">{person.name}</span>
            <span className="mx-2 text-clay-500">·</span>
            {person.title}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-5 text-[2.6rem] leading-[1.02] font-medium tracking-tight text-balance text-ink-900 sm:text-6xl lg:text-[4.1rem]"
          >
            El desarrollo de las organizaciones comienza con el desarrollo de{' '}
            <span className="relative whitespace-nowrap italic text-clay-600">
              las personas
              <motion.svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-clay-400"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M2 14 C 80 4, 200 4, 298 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.9, ease }}
                />
              </motion.svg>
            </span>
            .
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink-700">
            Psicóloga Industrial con más de {person.years} años de experiencia en Recursos Humanos. Asesoro a
            departamentos de Gestión Humana y facilito programas de formación en habilidades blandas para empresas
            privadas e instituciones gubernamentales.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5" aria-label="Roles">
            <li className="inline-flex items-center gap-2 rounded-full border border-ink-800/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink-800 backdrop-blur">
              <Briefcase size={16} className="text-clay-500" aria-hidden />
              Asesora de Recursos Humanos
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-ink-800/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink-800 backdrop-blur">
              <GraduationCap size={16} className="text-clay-500" aria-hidden />
              {person.institutionShort}
            </li>
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">
              Solicitar una propuesta
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Button>
            <Button href="#formacion" variant="secondary">
              Ver catálogo de formación
            </Button>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-ink-800/10 pt-8"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-medium text-ink-900 sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-ink-600 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative order-1 mx-auto w-full max-w-[15rem] sm:max-w-xs lg:order-2 lg:max-w-[27rem]"
        >
          <div className="arch absolute -inset-3 -z-10 border border-ink-800/15" aria-hidden />
          <motion.div
            style={{ y: imgY }}
            className="arch aspect-[4/5] overflow-hidden shadow-2xl shadow-ink-900/25"
          >
            <Portrait priority className="h-full w-full" />
          </motion.div>

          {/* Insignias flotantes */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.8 }}
            className="absolute bottom-10 -left-10 sm:bottom-16 sm:-left-12"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl bg-white/90 px-4 py-3 shadow-xl shadow-ink-900/10 backdrop-blur"
            >
              <p className="font-display text-2xl leading-none font-semibold text-ink-900">+{person.years}</p>
              <p className="mt-1 text-xs text-ink-600">años de experiencia</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 1 }}
            className="absolute top-10 -right-12 sm:top-14 sm:-right-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-2.5 rounded-2xl bg-ink-800 px-4 py-3 text-sand-50 shadow-xl shadow-ink-900/25"
            >
              <GraduationCap size={20} className="text-clay-300" aria-hidden />
              <div>
                <p className="text-sm leading-none font-semibold">INFOTEP</p>
                <p className="mt-1 text-[11px] text-ink-100/75">Facilitadora</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
