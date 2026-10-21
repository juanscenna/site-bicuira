import Button from '../../components/Button'
import Photo from '../../components/Photo'
import Reveal from '../../components/Reveal'
import Mark from '../../components/Mark'
import { ScribbleCircle, Spark, WaveEdge } from '../../components/Doodles'
import SheetGraphic from '../../components/project/SheetGraphic'
import {
  CaseGallery,
  ProjectCta,
  ProjectNav,
  StoryBlock,
  Tools,
} from '../../components/project/ProjectParts'
import { captures } from '../../content/images'
import { projectLabels as L, type Project } from '../../content/projects'
import { contactHref } from '../../content/site'

// Agenda de Todos Nós
// Ênfase: a sequência imagem → extração → revisão humana → planilha.
// A etapa de revisão humana (3ª) recebe destaque visual.
const REVIEW_STEP = 2

export default function Agenda({ project }: { project: Project }) {
  const steps = project.steps ?? []

  return (
    <>
      {/* Hero escuro com "cartazes" empilhados */}
      <section className="on-dark relative overflow-hidden bg-carvao pb-24 text-areia md:pb-32">
        <div className="wrap grid gap-14 pt-12 md:grid-cols-12 md:pt-20">
          <div className="relative z-10 md:col-span-7">
            <h1 className="text-huge">
              <Mark text={project.hero.title} word={project.hero.mark} color="text-lima" />
            </h1>
            <p className="text-body mt-8 max-w-lg text-areia/90">{project.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              {project.hero.externalLink && (
                <Button to={project.hero.externalLink.url} color="lima">
                  {project.hero.externalLink.label}
                </Button>
              )}
              <Button to={contactHref(project.service)} variant="text">
                {project.hero.contactCta}
              </Button>
            </div>
          </div>

          <div className="relative h-[22rem] sm:h-[28rem] md:col-span-5 md:h-auto">
            <Photo image={captures.agendaUpload} className="absolute left-[4%] top-4 aspect-[3/4] w-[52%] -rotate-6 rounded-md border-4 border-areia" />
            <Photo image={captures.agendaFlyer} className="absolute right-[6%] top-20 aspect-[4/5] w-[40%] max-w-[17.5rem] rotate-3 rounded-md border-4 border-areia" />
            <span className="absolute right-0 top-0 rotate-3 bg-lima px-4 py-2 text-[0.8125rem] font-bold uppercase tracking-wider text-carvao">
              {project.highlight}
            </span>
          </div>
        </div>
      </section>

      {/* Desafio */}
      <section className="relative py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <StoryBlock label={L.challenge} title={project.challenge.title} text={project.challenge.text} />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-20">
            <SheetGraphic rows={7} cols={4} className="rotate-2" />
          </div>
        </div>
      </section>

      {/* Solução + sequência */}
      <section aria-labelledby="como-funciona" className="relative">
        <WaveEdge className="-mb-px h-12 text-restinga/10 sm:h-20" />
        <div className="overflow-hidden bg-restinga/10 pb-20 pt-8 md:pb-28">
          <div className="wrap">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <StoryBlock label={L.solution} title={project.solution.title} text={project.solution.text} />
              </div>
              <div className="md:col-span-4 md:col-start-9 md:pt-16">
                <Tools tools={project.tools} />
              </div>
            </div>

            <h2 id="como-funciona" className="mt-20 text-big text-restinga">
              {L.howItWorks}
            </h2>
            <ol className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center">
              {steps.map((step, i) => {
                const isReview = i === REVIEW_STEP
                return (
                  <li key={step.name} className={isReview ? 'lg:flex-[1.5]' : 'lg:flex-1'}>
                    <Reveal delay={i * 120}>
                      {isReview ? (
                        <div className="relative -rotate-1 rounded-[2rem] bg-lima p-8 text-carvao md:p-10">
                          <Spark className="absolute -right-4 -top-6 h-12 w-12 text-sol" />
                          <span className="relative inline-block font-display text-6xl">
                            {String(i + 1).padStart(2, '0')}
                            <ScribbleCircle className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] text-carvao" />
                          </span>
                          <h3 className="mt-6 font-display text-3xl">{step.name}</h3>
                          <p className="mt-2 text-lg font-medium leading-relaxed">{step.text}</p>
                        </div>
                      ) : (
                        <div className="rounded-[1.5rem] border-2 border-carvao/20 bg-areia p-6">
                          <span className="font-display text-4xl text-restinga">{String(i + 1).padStart(2, '0')}</span>
                          <h3 className="mt-3 font-sans text-base font-bold uppercase tracking-wider">{step.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                        </div>
                      )}
                    </Reveal>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Resultado relatado */}
      {project.result && (
        <section aria-labelledby="resultado" className="relative">
          <div className="on-dark bg-sol py-20 text-areia md:py-28">
            <div className="wrap grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="tag bg-carvao px-3 py-1.5 text-areia">{L.result}</p>
                <h2 id="resultado" className="mt-8 text-big">
                  {project.result.title}
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-9 md:pt-24">
                <p className="text-2xl leading-snug">{project.result.text}</p>
                <p className="mt-6 inline-block bg-areia px-3 py-2 text-sm font-semibold text-carvao">{project.result.note}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <CaseGallery project={project} />

      <ProjectCta project={project} />
      <ProjectNav project={project} />
    </>
  )
}
