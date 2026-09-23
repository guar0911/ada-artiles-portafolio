import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { areas, totalCourses } from '../data/content'
import { Container, SectionHeading, ease } from './ui'

type View = 'detalle' | 'resumen'

export function Catalog() {
  const [activeId, setActiveId] = useState(areas[0].id)
  const [view, setView] = useState<View>('detalle')
  const active = areas.find((a) => a.id === activeId)!

  return (
    <section id="formacion" className="relative bg-sand-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Portafolio de formación"
            title={
              <>
                Habilidades blandas y <span className="italic text-clay-600">gestión humana</span>
              </>
            }
            intro={`${totalCourses} cursos organizados en ${areas.length} áreas. Pueden impartirse como talleres independientes, programas modulares o rutas de formación adaptadas a cada organización.`}
          />

          {/* Selector de vista */}
          <div className="inline-flex shrink-0 self-start rounded-full border border-ink-800/10 bg-white p-1 lg:self-auto" role="tablist" aria-label="Vista del catálogo">
            {(
              [
                ['detalle', 'Por área'],
                ['resumen', 'Catálogo resumido'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={view === id}
                onClick={() => setView(id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  view === id ? 'text-sand-50' : 'text-ink-700 hover:text-ink-900'
                }`}
              >
                {view === id && (
                  <motion.span
                    layoutId="view-pill"
                    className="absolute inset-0 rounded-full bg-ink-800"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {view === 'detalle' ? (
            <motion.div
              key="detalle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease }}
              className="mt-14 grid gap-8 lg:grid-cols-[20rem_1fr] lg:gap-12"
            >
              {/* Lista de áreas */}
              <LayoutGroup id="areas">
                <div
                  role="tablist"
                  aria-label="Áreas de formación"
                  className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
                >
                  {areas.map((area) => {
                    const isActive = area.id === activeId
                    return (
                      <button
                        key={area.id}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="area-panel"
                        onClick={() => setActiveId(area.id)}
                        className={`relative flex shrink-0 snap-start items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors lg:py-3.5 ${
                          isActive ? 'text-sand-50' : 'bg-white text-ink-800 hover:bg-white/60 lg:bg-transparent'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="area-pill"
                            className="absolute inset-0 rounded-2xl bg-ink-800 shadow-lg shadow-ink-900/15"
                            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                          />
                        )}
                        <span
                          className={`font-display relative shrink-0 text-sm lg:w-10 ${isActive ? 'text-clay-300' : 'text-clay-600'}`}
                        >
                          {area.numeral}
                        </span>
                        <span className="relative text-sm font-medium whitespace-nowrap lg:whitespace-normal">
                          <span className="lg:hidden">{area.short}</span>
                          <span className="hidden lg:inline">{area.title}</span>
                        </span>
                        <span
                          className={`relative ml-auto rounded-full px-2 py-0.5 text-xs ${
                            isActive ? 'bg-sand-50/15 text-sand-50' : 'bg-ink-800/5 text-ink-600'
                          }`}
                        >
                          {area.courses.length}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </LayoutGroup>

              {/* Cursos del área activa */}
              <div id="area-panel" role="tabpanel" aria-live="polite" className="min-h-[24rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <div className="mb-6 flex items-baseline gap-4">
                      <span className="font-display text-5xl text-clay-500/40 italic">{active.numeral}</span>
                      <h3 className="font-display text-2xl font-medium text-ink-900 sm:text-3xl">{active.title}</h3>
                    </div>

                    <ul className="grid gap-4 sm:grid-cols-2">
                      {active.courses.map((course, i) => (
                        <motion.li
                          key={course.name}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, ease, delay: 0.05 + i * 0.06 }}
                          className="group rounded-2xl border border-ink-800/10 bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink-900/5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-[17px] leading-snug font-semibold text-ink-900">{course.name}</h4>
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay-400 transition-transform duration-300 group-hover:scale-150" aria-hidden />
                          </div>
                          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{course.description}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="resumen"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease }}
              className="mt-14 overflow-hidden rounded-[2rem] border border-ink-800/10 bg-white"
            >
              {areas.map((area, i) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="grid gap-4 border-b border-ink-800/10 p-6 last:border-b-0 sm:p-8 md:grid-cols-[18rem_1fr] md:gap-10"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display w-10 shrink-0 text-clay-500">{area.numeral}</span>
                    <h3 className="text-sm font-semibold tracking-wide text-ink-900 uppercase">{area.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {area.courses.map((c) => (
                      <li key={c.name} className="rounded-full bg-sand-100 px-3.5 py-1.5 text-sm text-ink-800">
                        {c.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-clay-500/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-ink-800">
            ¿Necesitas combinar varios cursos o crear una ruta para tu equipo? Diseñamos el programa según tus objetivos.
          </p>
          <a
            href="#contacto"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
          >
            Solicitar programa a la medida
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  )
}
