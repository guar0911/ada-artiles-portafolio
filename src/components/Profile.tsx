import { motion } from 'motion/react'
import { Quote } from 'lucide-react'
import { person, profile } from '../data/content'
import { Portrait } from './Portrait'
import { Container, Reveal, SectionHeading, ease, fadeUp, stagger } from './ui'

export function Profile() {
  return (
    <section id="perfil" className="relative overflow-hidden bg-sand-50 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Columna izquierda: retrato + datos clave */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="relative mx-auto max-w-xs lg:mx-0">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-ink-900/15">
                <Portrait className="h-full w-full" />
              </div>
              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-[2rem] bg-sage-200" aria-hidden />
            </div>
          </Reveal>

          <motion.dl
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger(0.07)}
            className="mx-auto mt-12 grid max-w-xs grid-cols-2 gap-x-6 gap-y-6 lg:mx-0 lg:max-w-none"
          >
            {profile.highlights.map((h) => (
              <motion.div key={h.label} variants={fadeUp} className="border-l-2 border-clay-400 pl-4">
                <dt className="text-[11px] font-semibold tracking-[0.18em] text-ink-600 uppercase">{h.label}</dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">{h.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* Columna derecha: biografía */}
        <div>
          <SectionHeading
            eyebrow="Perfil profesional"
            title={
              <>
                Más de tres décadas acompañando a <span className="italic text-clay-600">personas, equipos y organizaciones</span>
              </>
            }
          />

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-700">
            {profile.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-pretty">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-3xl bg-ink-800 p-8 text-sand-50 sm:p-10">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-ink-600/70 blur-3xl" aria-hidden />
              <p className="relative text-xs font-semibold tracking-[0.2em] text-clay-300 uppercase">
                Propósito como facilitadora
              </p>
              <p className="font-display relative mt-4 text-xl leading-snug sm:text-2xl">{profile.purpose}</p>
            </div>
          </Reveal>

          <motion.figure
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="mt-12 flex gap-5"
          >
            <Quote size={36} className="shrink-0 text-clay-400" aria-hidden />
            <div>
              <blockquote className="font-display text-xl leading-snug text-ink-900 italic sm:text-2xl">
                {person.facilitatorQuote}
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-600">— {person.shortName}</figcaption>
            </div>
          </motion.figure>
        </div>
      </Container>
    </section>
  )
}
