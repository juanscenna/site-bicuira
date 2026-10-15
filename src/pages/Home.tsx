import usePageMeta from '../components/usePageMeta'
import { homeSeo } from '../content/home'
import Hero from '../sections/Hero'
import Solutions from '../sections/Solutions'
import Manifesto from '../sections/Manifesto'
import HowWeWork from '../sections/HowWeWork'
import About from '../sections/About'
import Contact from '../sections/Contact'

// Página inicial: visão geral + 3 soluções + contato.
// Os detalhes de cada serviço e os cases ficam nas páginas próprias.
export default function Home() {
  usePageMeta(homeSeo.title, homeSeo.description)

  return (
    <>
      <Hero />
      <Solutions />
      <Manifesto />
      <HowWeWork />
      <About />
      <Contact />
    </>
  )
}
