import { motion } from 'motion/react'
import { BookOpen, HeartHandshake, Wrench } from 'lucide-react'
import { learningApproach, person } from '../data/content'
import { Container, SectionHeading, ease } from './ui'

const icons = [BookOpen, Wrench, HeartHandshake]

export function Approach() {
  return (
    <section id="enfoque" className="relative overflow-hidden bg-ink-900 py-20 text-sand-50 sm:py-28">
      <div className="grain pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-ink-600/40 blur-3xl" aria-hidden />

      <Container className="relative">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Enfoque de aprendizaje"
          title={
            <>
              Del conocimiento a la acción, <span className="italic text-clay-300">de la acción al ser</span>
            </>
          }
          intro="Cada programa integra tres dimensiones del aprendizaje para que lo aprendido se traduzca en cambios reales en el trabajo y en las relaciones."
        />

        <div className="relative mt-16">
          {/* Línea conectora (escritorio) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease }}
            className="absolute top-10 right-[16%] left-[16%] hidden h-px origin-left bg-linear-to-r from-clay-400/0 via-clay-400/70 to-clay-400/0 md:block"
            aria-hidden
          />

          <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {learningApproach.map((step, i) => {
              const Icon = icons[i]
              return (
                <motion.li
                  key={step.key}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.18 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-sand-50/15 bg-ink-800 shadow-lg shadow-black/20">
                    <Icon size={28} className="text-clay-300" aria-hidden />
                    <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-clay-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-7 text-2xl font-medium uppercase tracking-wide sm:text-[1.7rem]">{step.key}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-ink-100/75">{step.text}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto mt-20 max-w-3xl border-t border-sand-50/10 pt-12 text-center"
        >
          <blockquote className="font-display text-2xl leading-snug text-sand-50 italic sm:text-3xl">
            “{person.mainQuote}”
          </blockquote>
          <figcaption className="mt-5 text-sm tracking-wide text-ink-300">— {person.name}</figcaption>
        </motion.figure>
      </Container>
    </section>
  )
}
