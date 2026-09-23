import { ArrowUp } from 'lucide-react'
import { nav, person } from '../data/content'
import { Container } from './ui'

export function Footer() {
  return (
    <footer className="bg-ink-950 py-12 text-sand-50/70">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-sand-50">{person.name}</p>
          <p className="mt-1 text-sm">
            {person.title} · Asesora de Recursos Humanos · {person.institutionShort}
          </p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-sand-50">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#inicio"
          aria-label="Volver arriba"
          className="flex h-11 w-11 items-center justify-center self-start rounded-full border border-sand-50/15 transition-colors hover:bg-sand-50/10 md:self-auto"
        >
          <ArrowUp size={18} />
        </a>
      </Container>
      <Container className="mt-10 text-xs">
        <p className="border-t border-sand-50/10 pt-6">
          © {new Date().getFullYear()} {person.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  )
}
