import Button from '../components/Button'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import Mark from '../components/Mark'
import { PhoneFrame } from '../components/Frames'
import { ScribbleArrow, ScribbleCircle, WaveShape } from '../components/Doodles'
import { projectsIntro } from '../content/home'
import { projectLabels, projects, type Project } from '../content/projects'

// Portfólio editorial: cada projeto tem uma composição diferente.
// Se um projeto novo for adicionado em projects.ts, ele usa a composição "padrão".
export default function FeaturedProjects() {
  return (
    <section id="projetos" className="relative overflow-hidden py-16 md:py-24">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="tag text-restinga">{projectsIntro.tag}</p>
            <h2 className="mt-5 text-huge text-restinga">
              <Mark text={projectsIntro.title} word={projectsIntro.mark} />
            </h2>
          </div>
          <p className="text-body md:col-span-4 md:mt-16">{projectsIntro.text}</p>
        </div>
      </div>

      <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
        {projects.map((project, i) => {
          if (i === 0) return <WideImage key={project.slug} project={project} index={i} />
          if (i === 1) return <PhoneStage key={project.slug} project={project} index={i} />
          return <SquareImage key={project.slug} project={project} index={i} />
        })}
      </div>
    </section>
  )
}

// O botão varia por case: sólido, link sublinhado ou Lima, para não repetir o mesmo bloco
function Info({ project, index, cta = 'solid' }: { project: Project; index: number; cta?: 'solid' | 'text' | 'lima' }) {
  return (
    <>
      <p className="tag text-restinga">
        Case {String(index + 1).padStart(2, '0')} — {project.category}
      </p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-carvao/80">{project.client}</p>
      <h3 className="mt-2 text-big text-carvao">{project.title}</h3>
      <p className="mt-5 max-w-md leading-relaxed">{project.summary}</p>
      <Button
        to={`/projetos/${project.slug}`}
        variant={cta === 'text' ? 'text' : 'solid'}
        color={cta === 'lima' ? 'lima' : 'carvao'}
        className="mt-8"
      >
        {projectLabels.viewProject}
      </Button>
    </>
  )
}

// 01 — imagem larga sangrando à esquerda, texto sobreposto num recorte
function WideImage({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="case relative xl:grid xl:grid-cols-12 xl:items-end">
        <div className="relative pr-4 sm:pr-10 lg:pr-[20%] xl:col-span-7 xl:col-start-1 xl:row-start-1 xl:pr-0">
          <Photo image={project.cover} sizes="(min-width: 1280px) 58vw, 90vw" className="aspect-[4/3] rounded-r-[3rem] md:aspect-[16/9]" />
          <span
            aria-hidden="true"
            className="absolute -bottom-10 right-8 font-display text-[7rem] leading-none text-sol md:text-[10rem] xl:-right-6"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="wrap relative mt-12 xl:col-span-5 xl:col-start-7 xl:row-start-1 xl:-mb-16 xl:mt-0 xl:min-w-[22rem] xl:pl-0">
          <div className="max-w-xl bg-areia xl:rounded-tl-[3rem] xl:p-10 xl:pb-0">
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
      <article className="case wrap grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="max-w-xl lg:col-span-5 lg:col-start-1 lg:min-w-[18rem] xl:col-start-2">
          <Info project={project} index={index} cta="text" />
        </div>
        <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:col-start-7 lg:max-w-none xl:col-span-5 xl:col-start-8">
          <div className="relative flex justify-center overflow-hidden rounded-[3rem] rounded-br-none bg-oceano px-6 pb-0 pt-12">
            <WaveShape className="absolute left-[-10%] top-8 w-[120%] text-areia/25" />
            <WaveShape className="absolute bottom-20 left-[-20%] w-[130%] text-restinga/40" />
            <PhoneFrame image={project.cover} className="relative w-[58%] max-w-[240px] translate-y-10" />
          </div>
          <ScribbleArrow className="absolute -left-16 top-1/2 hidden w-20 -scale-x-100 text-carvao lg:block" />
        </div>
      </article>
    </Reveal>
  )
}

// 03 — imagem quadrada com selo, número gigante
function SquareImage({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="case wrap grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="relative lg:order-2 lg:col-span-6 lg:col-start-7">
          <Photo image={project.cover} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] rounded-tl-[4rem] lg:aspect-square" />
          {project.highlight && (
            <p className="absolute -left-3 top-8 -rotate-6 bg-lima px-4 py-2 text-[0.8125rem] font-bold uppercase tracking-wider text-carvao lg:-left-10">
              {project.highlight}
            </p>
          )}
        </div>
        <div className="relative max-w-xl lg:order-1 lg:col-span-5 lg:min-w-[18rem] lg:pt-16">
          <span aria-hidden="true" className="relative inline-block font-display text-[7rem] leading-none text-restinga md:text-[10rem]">
            {String(index + 1).padStart(2, '0')}
            <ScribbleCircle className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-sol" />
          </span>
          <div className="mt-6">
            <Info project={project} index={index} cta="lima" />
          </div>
        </div>
      </article>
    </Reveal>
  )
}
