import { motion } from 'motion/react'
import { Award, Layers, Settings2, Sprout, Target, Users } from 'lucide-react'
import { methodology, valueProposition } from '../data/content'
import { Container, SectionHeading, ease, fadeUp, stagger } from './ui'

const iconMap = { award: Award, target: Target, users: Users, settings: Settings2, layers: Layers, sprout: Sprout }

export function ValueProposition() {
  return (
    <section id="propuesta" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Propuesta de valor"
          title={
            <>
              Formación que responde a <span className="italic text-clay-600">necesidades reales</span>
            </>
          }
          intro={valueProposition.intro}
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.08)}
          className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-ink-800/10 bg-ink-800/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {valueProposition.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.li
                key={item.text}
                variants={fadeUp}
                className="group relative bg-sand-50 p-8 transition-colors duration-300 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-800 text-sand-50 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="font-display text-sm text-ink-300">0{i + 1}</span>
                </div>
                <p className="mt-6 text-[17px] leading-snug font-medium text-ink-900">{item.text}</p>
              </motion.li>
            )
          })}
        </motion.ul>

        {/* Metodología */}
        <div id="metodologia" className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Metodología de formación"
            title={
              <>
                Aprender <span className="italic text-clay-600">haciendo</span>, reflexionando y compartiendo
              </>
            }
            intro={methodology.intro}
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger(0.07)}
            className="grid grid-cols-1 gap-3 self-center sm:grid-cols-2"
          >
            {methodology.steps.map((step, i) => (
              <motion.li
                key={step}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
                }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-2xl border border-ink-800/10 bg-white/70 px-5 py-4"
              >
                <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-sm font-semibold text-clay-600">
                  {i + 1}
                </span>
                <span className="font-medium text-ink-900">{step}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  )
}
