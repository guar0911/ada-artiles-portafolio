import { motion } from 'motion/react'
import { Clock, Compass, Layers, Monitor, Presentation, Route } from 'lucide-react'
import { programs } from '../data/content'
import { Container, SectionHeading, ease, fadeUp, stagger } from './ui'

const formatIcons = [Presentation, Layers, Route]

export function Programs() {
  return (
    <section id="programas" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Diseño y adaptación de programas"
          title={
            <>
              Cada propuesta, <span className="italic text-clay-600">a la medida</span> de tu organización
            </>
          }
          intro={programs.intro}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.1)}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {programs.formats.map((f, i) => {
            const Icon = formatIcons[i]
            return (
              <motion.article
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="rounded-[1.75rem] border border-ink-800/10 bg-white/80 p-8"
              >
                <Icon size={28} className="text-clay-500" aria-hidden />
                <h3 className="font-display mt-6 text-xl font-medium text-ink-900">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-700">{f.text}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="mt-6 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink-700 lg:grid-cols-[1.4fr_1fr_1fr]"
        >
          <div className="bg-ink-800 p-8 text-sand-50">
            <div className="flex items-center gap-3">
              <Compass size={22} className="text-clay-300" aria-hidden />
              <h3 className="font-semibold">Se personaliza según</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {programs.customization.map((c) => (
                <li key={c} className="rounded-full border border-sand-50/15 px-3.5 py-1.5 text-sm text-sand-50/90">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink-800 p-8 text-sand-50">
            <div className="flex items-center gap-3">
              <Monitor size={22} className="text-clay-300" aria-hidden />
              <h3 className="font-semibold">Modalidad</h3>
            </div>
            <p className="font-display mt-5 text-2xl">{programs.modality}</p>
          </div>
          <div className="bg-ink-800 p-8 text-sand-50">
            <div className="flex items-center gap-3">
              <Clock size={22} className="text-clay-300" aria-hidden />
              <h3 className="font-semibold">Duración</h3>
            </div>
            <p className="mt-5 leading-relaxed text-ink-100/85">{programs.duration}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
