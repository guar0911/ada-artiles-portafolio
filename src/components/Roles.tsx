import { motion } from 'motion/react'
import { ArrowRight, Briefcase, Check, GraduationCap, Landmark, Building2 } from 'lucide-react'
import { roles } from '../data/content'
import { Container, SectionHeading, ease } from './ui'

const icons = { asesora: Briefcase, facilitadora: GraduationCap } as const
const targets = { asesora: '#contacto', facilitadora: '#formacion' } as const

export function Roles() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Servicios"
            title={
              <>
                Dos roles, un mismo propósito: <span className="italic text-clay-600">desarrollar personas</span>
              </>
            }
            intro="Desde la asesoría estratégica a departamentos de Recursos Humanos hasta el aula de formación, cada intervención conecta la teoría con la realidad de tu organización."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="flex shrink-0 gap-3 text-sm text-ink-700"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Building2 size={16} className="text-ink-600" aria-hidden /> Sector privado
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Landmark size={16} className="text-ink-600" aria-hidden /> Gobierno
            </span>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {roles.map((role, i) => {
            const Icon = icons[role.id]
            const dark = i === 0
            return (
              <motion.article
                key={role.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10 ${
                  dark
                    ? 'bg-ink-800 text-sand-50 shadow-2xl shadow-ink-900/20'
                    : 'border border-ink-800/10 bg-white/80 text-ink-900 shadow-xl shadow-ink-900/5'
                }`}
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    dark ? 'bg-ink-600/60 opacity-70' : 'bg-sage-200 opacity-60'
                  }`}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      dark ? 'bg-sand-50/10 text-clay-300' : 'bg-clay-500/10 text-clay-600'
                    }`}
                  >
                    <Icon size={26} aria-hidden />
                  </span>
                  <span
                    className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? 'text-ink-100/60' : 'text-ink-600'}`}
                  >
                    {role.eyebrow}
                  </span>
                </div>

                <h3 className="font-display relative mt-8 text-2xl leading-tight font-medium sm:text-3xl">{role.title}</h3>
                <p className={`relative mt-4 leading-relaxed ${dark ? 'text-ink-100/80' : 'text-ink-700'}`}>{role.lead}</p>

                <ul className="relative mt-8 space-y-3.5">
                  {role.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-snug">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          dark ? 'bg-clay-500 text-white' : 'bg-ink-800 text-sand-50'
                        }`}
                      >
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      <span className={dark ? 'text-sand-50/90' : 'text-ink-800'}>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-10">
                  <a
                    href={targets[role.id]}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      dark ? 'text-clay-300 hover:text-clay-400' : 'text-clay-600 hover:text-clay-500'
                    }`}
                  >
                    {role.cta}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

      </Container>
    </section>
  )
}
