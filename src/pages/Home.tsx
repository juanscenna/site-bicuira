import usePageMeta from '../components/usePageMeta'
import { homeSeo } from '../content/home'
import Hero from '../sections/Hero'
import Solutions from '../sections/Solutions'
import Manifesto from '../sections/Manifesto'
import FeaturedProjects from '../sections/FeaturedProjects'
import Services from '../sections/Services'
import HowWeWork from '../sections/HowWeWork'
import About from '../sections/About'
import Contact from '../sections/Contact'

// Página inicial: as seções aparecem nesta ordem.
export default function Home() {
  usePageMeta(homeSeo.title, homeSeo.description)

  return (
    <>
      <Hero />
      <Solutions />
      <Manifesto />
      <FeaturedProjects />
      <Services />
      <HowWeWork />
      <About />
      <Contact />
    </>
  )
}
