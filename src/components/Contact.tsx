import { useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Copy, Mail, Phone, Send } from 'lucide-react'
import { person } from '../data/content'
import { Container, ease, fadeUp, stagger } from './ui'

const services = ['Asesoría a departamento de RR.HH.', 'Formación / capacitación', 'Ambos servicios'] as const
const modalities = ['Presencial', 'Virtual', 'Por definir'] as const

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [service, setService] = useState<(typeof services)[number]>(services[1])
  const [modality, setModality] = useState<(typeof modalities)[number]>(modalities[0])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${person.email}`
    }
  }

  // Sin backend: arma el correo y abre el cliente de email del visitante.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('nombre') ?? '').trim()
    const org = String(data.get('organizacion') ?? '').trim()
    const message = String(data.get('mensaje') ?? '').trim()
    const subject = `Solicitud de propuesta — ${service}${org ? ` · ${org}` : ''}`
    const body = [
      `Hola, Ada:`,
      ``,
      message || 'Me gustaría recibir información sobre sus servicios.',
      ``,
      `— Servicio de interés: ${service}`,
      `— Modalidad: ${modality}`,
      `— Organización: ${org || 'N/D'}`,
      ``,
      `Saludos,`,
      name,
    ].join('\n')
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink-900 py-20 text-sand-50 sm:py-28">
      <div className="grain pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-ink-600/50 blur-3xl" aria-hidden />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger(0.1)}>
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-clay-300 uppercase"
          >
            <span className="h-px w-8 bg-clay-300" aria-hidden />
            Contacto
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl leading-[1.08] font-medium text-balance sm:text-5xl">
            Conversemos sobre el desarrollo de <span className="italic text-clay-300">tu equipo</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-relaxed text-ink-100/80">
            Cuéntame qué necesita tu organización y preparo una propuesta de asesoría o formación a la medida.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <p className="font-display text-xl">{person.shortName}</p>
            <p className="mt-1 text-sm text-ink-300">
              {person.institutionShort} | {person.title}
            </p>
            <p className="text-sm text-ink-300">{person.specialty}</p>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 space-y-3">
            <li className="flex items-center gap-3">
              <a
                href={`mailto:${person.email}`}
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-sand-50/10 bg-sand-50/5 px-5 py-4 transition-colors hover:bg-sand-50/10"
              >
                <Mail size={20} className="text-clay-300" aria-hidden />
                <span>
                  <span className="block text-xs text-ink-300">Correo electrónico</span>
                  <span className="font-medium break-all">{person.email}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copiar correo"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sand-50/10 bg-sand-50/5 transition-colors hover:bg-sand-50/10"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span key="ok" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                      <Check size={18} className="text-sage-400" />
                    </motion.span>
                  ) : (
                    <motion.span key="copy" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                      <Copy size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
            {person.phones.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="flex items-center gap-4 rounded-2xl border border-sand-50/10 bg-sand-50/5 px-5 py-4 transition-colors hover:bg-sand-50/10"
                >
                  <Phone size={20} className="text-clay-300" aria-hidden />
                  <span>
                    <span className="block text-xs text-ink-300">Teléfono</span>
                    <span className="font-medium">{p.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="rounded-[2rem] bg-sand-50 p-6 text-ink-900 shadow-2xl shadow-black/30 sm:p-10"
        >
          <h3 className="font-display text-2xl font-medium">Solicitar una propuesta</h3>
          <p className="mt-2 text-sm text-ink-600">Al enviar se abrirá tu correo con el mensaje listo.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="nombre" required autoComplete="name" />
            <Field label="Organización" name="organizacion" autoComplete="organization" />
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink-800">Servicio de interés</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((s) => (
                <Chip key={s} active={service === s} onClick={() => setService(s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink-800">Modalidad</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {modalities.map((m) => (
                <Chip key={m} active={modality === m} onClick={() => setModality(m)}>
                  {m}
                </Chip>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block">
            <span className="text-sm font-medium text-ink-800">Mensaje</span>
            <textarea
              name="mensaje"
              rows={4}
              placeholder="Ej.: Buscamos fortalecer el liderazgo de nuestros supervisores…"
              className="mt-2 w-full resize-none rounded-2xl border border-ink-800/15 bg-white px-4 py-3 text-[15px] outline-none placeholder:text-ink-300 focus:border-clay-500 focus:ring-4 focus:ring-clay-500/15"
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 py-4 font-semibold text-white shadow-lg shadow-clay-600/25 transition-colors hover:bg-clay-600"
          >
            Enviar solicitud
            <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
          </motion.button>
        </motion.form>
      </Container>
    </section>
  )
}

function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-ink-800/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-clay-500 focus:ring-4 focus:ring-clay-500/15"
      />
    </label>
  )
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active ? 'border-ink-800 bg-ink-800 text-sand-50' : 'border-ink-800/15 bg-white text-ink-700 hover:border-ink-800/40'
      }`}
    >
      {children}
    </button>
  )
}
