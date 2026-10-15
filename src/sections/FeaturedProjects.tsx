import Button from '../components/Button'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { PhoneFrame } from '../components/Frames'
import { ScribbleArrow, ScribbleCircle, WaveShape } from '../components/Doodles'
import { projectsIntro } from '../content/home'
import { projects, type Project } from '../content/projects'

// Portfólio editorial: cada projeto tem uma composição diferente.
// Se um projeto novo for adicionado em projects.ts, ele usa a composição "padrão".
export default function FeaturedProjects() {
  return (
    <section id="projetos" className="relative overflow-hidden py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="tag text-restinga">{projectsIntro.tag}</p>
            <h2 className="mt-5 text-huge text-restinga">{projectsIntro.title}</h2>
          </div>
          <p className="text-body md:col-span-4 md:mt-16">{projectsIntro.text}</p>
        </div>
      </div>

      <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
        {projects.map((project, i) => {
          if (i === 0) return <WideImage key={project.slug} project={project} index={i} />
          if (i === 1) return <PhoneStage key={project.slug} project={project} index={i} />
          return <SquareImage key={project.slug} project={project} index={i} />
        })}
      </div>
    </section>
  )
}

function Info({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <p className="tag text-restinga">
        Case {String(index + 1).padStart(2, '0')} — {project.category}
      </p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-carvao/70">{project.client}</p>
      <h3 className="mt-2 text-big text-carvao">{project.title}</h3>
      <p className="mt-5 max-w-md leading-relaxed">{project.summary}</p>
      <Button to={`/projetos/${project.slug}`} className="mt-8">
        Ver projeto
      </Button>
    </>
  )
}

// 01 — imagem larga sangrando à esquerda, texto sobreposto num recorte
function WideImage({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="relative md:grid md:grid-cols-12 md:items-end">
        <div className="relative pr-4 sm:pr-10 md:col-span-8 md:row-start-1 md:pr-0">
          <Photo image={project.cover} className="aspect-[4/3] rounded-r-[3rem] md:aspect-[16/10]" />
          <span
            aria-hidden="true"
            className="absolute -bottom-10 right-8 font-display text-[7rem] leading-none text-sol md:-right-6 md:text-[11rem]"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="relative mt-10 px-4 sm:px-6 md:col-span-5 md:col-start-8 md:row-start-1 md:-mb-20 md:mt-0 md:pl-0 lg:pr-10">
          <div className="bg-areia md:rounded-tl-[3rem] md:p-10 md:pb-0">
            <Info project={project} index={index} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

// 02 — celular sobre um bloco Oceano, texto do lado oposto
function PhoneStage({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="wrap grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5 md:col-start-2">
          <Info project={project} index={index} />
        </div>
        <div className="relative md:col-span-5 md:col-start-8">
          <div className="relative flex justify-center overflow-hidden rounded-[3rem] rounded-br-none bg-oceano px-6 pb-0 pt-12">
            <WaveShape className="absolute left-[-10%] top-8 w-[120%] text-areia/25" />
            <WaveShape className="absolute bottom-20 left-[-20%] w-[130%] text-restinga/40" />
            <PhoneFrame image={project.cover} className="relative w-[58%] max-w-[240px] translate-y-10" />
          </div>
          <ScribbleArrow className="absolute -left-16 top-1/2 hidden w-20 -scale-x-100 text-carvao md:block" />
        </div>
      </article>
    </Reveal>
  )
}

// 03 — imagem quadrada com selo, número gigante
function SquareImage({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="wrap grid gap-10 md:grid-cols-12 md:items-start">
        <div className="relative md:order-2 md:col-span-6 md:col-start-7">
          <Photo image={project.cover} className="aspect-square rounded-tl-[4rem]" />
          {project.highlight && (
            <p className="absolute -left-3 top-8 -rotate-6 bg-lima px-4 py-2 text-xs font-bold uppercase tracking-widest text-carvao md:-left-10">
              {project.highlight}
            </p>
          )}
        </div>
        <div className="relative md:order-1 md:col-span-5 md:pt-16">
          <span aria-hidden="true" className="relative inline-block font-display text-[7rem] leading-none text-restinga md:text-[10rem]">
            {String(index + 1).padStart(2, '0')}
            <ScribbleCircle className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-sol" />
          </span>
          <div className="mt-6">
            <Info project={project} index={index} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}
