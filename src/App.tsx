import { MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Roles } from './components/Roles'
import { Profile } from './components/Profile'
import { Approach } from './components/Approach'
import { ValueProposition } from './components/ValueProposition'
import { Catalog } from './components/Catalog'
import { Programs } from './components/Programs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    // Respeta la preferencia del sistema "reducir movimiento".
    <MotionConfig reducedMotion="user">
      <a
        href="#servicios"
        className="sr-only z-[60] rounded-full bg-ink-800 px-4 py-2 text-sand-50 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Roles />
        <Profile />
        <Approach />
        <ValueProposition />
        <Catalog />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
