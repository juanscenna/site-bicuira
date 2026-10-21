import Button from '../../components/Button'
import Photo from '../../components/Photo'
import Reveal from '../../components/Reveal'
import Mark from '../../components/Mark'
import { BrowserFrame, PhoneFrame } from '../../components/Frames'
import { ScribbleArrow, Sun, WaveShape } from '../../components/Doodles'
import {
  Benefits,
  GalleryFigure,
  ProjectCta,
  ProjectNav,
  StoryBlock,
} from '../../components/project/ProjectParts'
import { captures, images } from '../../content/images'
import { projectLabels as L, type Project } from '../../content/projects'
import { contactHref } from '../../content/site'

// Site da Pousada Sonhos do Rosa
// Ênfase: apresentação visual, fotografia e interface do site.
export default function PousadaSite({ project }: { project: Project }) {
  const [g1, g2, g3, g4] = project.gallery

  return (
    <>
      {/* Hero: título grande e uma composição de foto + molduras */}
      <section className="relative overflow-hidden pb-16">
        <div className="wrap pt-6 md:pt-10">
          <h1 className="max-w-6xl text-huge text-restinga">
              <Mark text={project.hero.title} word={project.hero.mark} color="text-sol" />
            </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="text-body md:col-span-5">{project.hero.text}</p>
            <div className="flex flex-wrap gap-4 md:col-span-6 md:col-start-7 md:justify-end">
              {project.hero.externalLink && (
                <Button to={project.hero.externalLink.url}>{project.hero.externalLink.label}</Button>
              )}
              <Button to={contactHref(project.service)} variant="text">
                {project.hero.contactCta}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-16 md:mt-24">
          <Photo image={images.coastNature} priority className="h-[22rem] w-full sm:h-[30rem] md:h-[40rem]" />
          <Sun className="absolute -top-10 right-[8%] w-24 text-sol md:w-36" />
          <div className="wrap relative -mt-40 grid grid-cols-12 items-end gap-4 sm:-mt-56 md:-mt-80">
            <BrowserFrame image={project.cover} className="col-span-12 sm:col-span-9 md:col-span-8" />
            <PhoneFrame
              image={captures.pousadaMobile}
              className="col-span-5 col-start-8 -mt-24 sm:col-span-3 sm:col-start-auto sm:mt-0 md:col-span-2 md:-mb-12"
            />
          </div>
        </div>
      </section>

      {/* Desafio e solução: dois blocos que se sobrepõem */}
      <section className="relative py-20 md:py-28">
        <div className="wrap grid gap-8 xl:grid-cols-12">
          <Reveal className="xl:col-span-6">
            <div className="rounded-[2.5rem] rounded-br-none bg-sol/15 p-6 sm:p-12">
              <StoryBlock label={L.challenge} title={project.challenge.title} text={project.challenge.text} />
            </div>
          </Reveal>
          <Reveal className="xl:col-span-6 xl:-ml-16 xl:mt-40" delay={150}>
            <div className="on-dark relative rounded-[2.5rem] rounded-tl-none bg-restinga p-6 text-areia sm:p-12">
              <ScribbleArrow className="absolute -left-14 -top-14 hidden w-24 rotate-[30deg] text-carvao xl:block" />
              <StoryBlock label={L.solution} title={project.solution.title} text={project.solution.text} dark />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Galeria editorial */}
      <section aria-labelledby="galeria" className="relative overflow-hidden pb-20 md:pb-28">
        <div className="wrap">
          <h2 id="galeria" className="tag text-restinga">
            {L.gallery}
          </h2>
          <div className="mt-10 grid grid-cols-12 gap-4 md:gap-6">
            {g1 && <GalleryFigure item={g1} className="col-span-12 md:col-span-8" />}
            {g2 && <GalleryFigure item={g2} className="col-span-6 col-start-4 md:col-span-3 md:col-start-10 md:mt-24" />}
            {g3 && <GalleryFigure item={g3} className="col-span-12 md:col-span-6 md:col-start-2 md:-mt-10" />}
            {g4 && <GalleryFigure item={g4} className="col-span-8 col-start-5 md:col-span-4 md:col-start-8 md:mt-10" />}
          </div>
        </div>
        <WaveShape className="absolute -bottom-6 left-[-10%] w-[60%] text-oceano/40" />
      </section>

      {/* Benefícios */}
      <section aria-labelledby="beneficios" className="pb-24">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <h2 id="beneficios" className="text-big text-restinga md:col-span-4">
            {L.benefits}
          </h2>
          <div className="md:col-span-8">
            <Benefits items={project.benefits} />
          </div>
        </div>
      </section>

      <ProjectCta project={project} />
      <ProjectNav project={project} />
    </>
  )
}
