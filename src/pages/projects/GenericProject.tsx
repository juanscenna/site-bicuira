import Button from '../../components/Button'
import Photo from '../../components/Photo'
import {
  Benefits,
  GalleryFigure,
  ProjectCta,
  ProjectLabel,
  ProjectNav,
  StoryBlock,
  Tools,
} from '../../components/project/ProjectParts'
import { projectLabels as L, type Project } from '../../content/projects'

// Layout padrão para projetos novos adicionados em projects.ts.
// Se quiser uma composição própria, crie uma página em src/pages/projects/
// e registre em src/pages/ProjectPage.tsx.
export default function GenericProject({ project }: { project: Project }) {
  return (
    <>
      <section className="wrap grid gap-12 pb-20 pt-12 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-7">
          <ProjectLabel project={project} />
          <h1 className="mt-8 text-huge text-restinga">{project.hero.title}</h1>
          <p className="text-body mt-8 max-w-lg">{project.hero.text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {project.hero.externalLink && (
              <Button to={project.hero.externalLink.url}>{project.hero.externalLink.label}</Button>
            )}
            <Button to="/#contato" variant="line">
              {project.hero.contactCta}
            </Button>
          </div>
        </div>
        <Photo image={project.cover} priority className="aspect-[4/5] rounded-tl-[4rem] md:col-span-5" />
      </section>

      <section className="wrap grid gap-12 pb-20 md:grid-cols-2">
        <StoryBlock label={L.challenge} title={project.challenge.title} text={project.challenge.text} />
        <div className="space-y-10">
          <StoryBlock label={L.solution} title={project.solution.title} text={project.solution.text} />
          <Tools tools={project.tools} />
        </div>
      </section>

      {project.benefits.length > 0 && (
        <section className="wrap pb-20">
          <h2 className="text-big text-restinga">{L.benefits}</h2>
          <div className="mt-8">
            <Benefits items={project.benefits} />
          </div>
        </section>
      )}

      <section className="wrap grid gap-6 pb-24 sm:grid-cols-2">
        {project.gallery.map((g) => (
          <GalleryFigure key={g.label} item={g} />
        ))}
      </section>

      <ProjectCta project={project} />
      <ProjectNav project={project} />
    </>
  )
}
