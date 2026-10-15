import Button from '../../components/Button'
import Reveal from '../../components/Reveal'
import Mark from '../../components/Mark'
import { PhoneFrame } from '../../components/Frames'
import { ScribbleArrow, WaveEdge, WaveLine } from '../../components/Doodles'
import SheetGraphic from '../../components/project/SheetGraphic'
import {
  Benefits,
  GalleryFigure,
  ProjectCta,
  ProjectNav,
  StoryBlock,
  Tools,
} from '../../components/project/ProjectParts'
import { projectLabels as L, type Project } from '../../content/projects'

// Automação de reservas
// Ênfase: o fluxo operacional (celular → planilha) e a integração com o Google Sheets.
export default function Reservas({ project }: { project: Project }) {
  return (
    <>
      {/* Hero: texto à esquerda, diagrama celular → planilha à direita */}
      <section className="relative overflow-hidden pb-20 md:pb-28">
        <div className="wrap grid gap-14 pt-6 md:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98] text-restinga">
              <Mark text={project.hero.title} word={project.hero.mark} color="text-sol" />
            </h1>
            <p className="text-body mt-8 max-w-lg">{project.hero.text}</p>
            <Button to={`/?servico=${project.service}#contato`} className="mt-10">
              {project.hero.contactCta}
            </Button>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto flex max-w-lg items-center gap-2 rounded-[3rem] bg-oceano p-6 sm:p-10">
              <PhoneFrame image={project.cover} className="w-[38%] shrink-0" />
              <ScribbleArrow draw className="w-[18%] shrink-0 text-areia" />
              <div className="flex-1">
                <SheetGraphic rows={6} cols={3} filled={[4]} />
                <p className="mx-auto mt-3 w-fit rounded-full bg-areia px-3 py-1 text-center text-sm font-bold text-carvao">Google Sheets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafio: muitas células para preencher à mão */}
      <section className="relative pb-20 md:pb-28">
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="order-2 md:order-1 md:col-span-5">
            <SheetGraphic rows={8} cols={5} className="-rotate-2" />
          </Reveal>
          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <StoryBlock label={L.challenge} title={project.challenge.title} text={project.challenge.text} />
          </div>
        </div>
      </section>

      {/* Solução: os detalhes aparecem como uma conversa */}
      <section className="relative">
        <WaveEdge className="-mb-px h-12 text-oceano sm:h-20" />
        <div className="bg-oceano pb-20 pt-6 md:pb-28">
          <div className="wrap grid gap-12 md:grid-cols-12">
            <div className="rounded-[2rem] bg-areia p-8 sm:p-10 md:col-span-6">
              <StoryBlock label={L.solution} title={project.solution.title} text={project.solution.text} />
              <div className="mt-8">
                <Tools tools={project.tools} />
              </div>
            </div>
            <ul className="flex flex-col justify-center gap-4 md:col-span-5 md:col-start-8">
              {project.solution.details?.map((d, i) => (
                <li key={d}>
                  <Reveal
                    delay={i * 150}
                    className={`max-w-sm rounded-3xl px-6 py-4 text-base font-medium ${
                      i % 2 === 0 ? 'rounded-bl-none bg-areia text-carvao' : 'ml-auto rounded-br-none bg-carvao text-areia'
                    }`}
                  >
                    {d}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <WaveEdge flip className="-mt-px h-12 text-oceano sm:h-20" />
      </section>

      {/* Como funciona: quatro etapas em linha */}
      <section aria-labelledby="como-funciona" className="py-20 md:py-28">
        <div className="wrap">
          <h2 id="como-funciona" className="text-big text-restinga">
            {L.howItWorks}
          </h2>
          <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <WaveLine className="absolute left-0 top-10 hidden h-8 w-full text-oceano lg:block" waves={8} />
            {project.steps?.map((step, i) => (
              <li key={step.name} className="relative">
                <Reveal delay={i * 120} className="h-full">
                  <div
                    className={`h-full rounded-[2rem] p-5 sm:p-7 ${
                      i === (project.steps?.length ?? 0) - 1 ? 'bg-lima text-carvao' : 'border-2 border-carvao bg-areia'
                    }`}
                  >
                    <span className="font-display text-4xl text-restinga sm:text-5xl">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-4 font-sans text-lg font-bold uppercase tracking-wider">{step.name}</h3>
                    <p className="mt-2 leading-relaxed">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefícios + galeria */}
      <section aria-labelledby="beneficios" className="pb-24">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="beneficios" className="text-big text-restinga">
              {L.benefits}
            </h2>
            <div className="mt-8">
              <Benefits items={project.benefits} columns={1} />
            </div>
          </div>
          <div className="max-w-md lg:col-span-5 lg:col-start-8 lg:max-w-none">
            <h2 className="tag text-restinga">{L.gallery}</h2>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.gallery
                .filter((g) => g.frame === 'phone')
                .map((g, i) => (
                  <GalleryFigure key={g.label} item={g} className={i === 1 ? 'mt-10' : ''} />
                ))}
            </div>
            {project.gallery
              .filter((g) => g.frame !== 'phone')
              .map((g) => (
                <GalleryFigure key={g.label} item={g} className="mt-6" />
              ))}
          </div>
        </div>
      </section>

      <ProjectCta project={project} />
      <ProjectNav project={project} />
    </>
  )
}
