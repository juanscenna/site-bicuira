import { useParams } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'
import Breadcrumb from '../components/Breadcrumb'
import PageHero, { HeroPlate } from '../components/PageHero'
import { findService, serviceLabels } from '../content/services'
import { findProject, type Project } from '../content/projects'
import NotFound from './NotFound'
import PousadaSite from './projects/PousadaSite'
import Reservas from './projects/Reservas'
import Agenda from './projects/Agenda'
import GenericProject from './projects/GenericProject'

// Páginas com layout próprio. Projetos novos usam o GenericProject.
const layouts: Record<string, (props: { project: Project }) => JSX.Element> = {
  'pousada-sonhos-do-rosa': PousadaSite,
  'automacao-reservas': Reservas,
  'agenda-de-todos-nos': Agenda,
}

export default function ProjectPage() {
  const { slug = '' } = useParams()
  const project = findProject(slug)
  if (!project) return <NotFound />
  return <ProjectWithMeta project={project} />
}

function ProjectWithMeta({ project }: { project: Project }) {
  usePageMeta(project.seo.title, project.seo.description)
  const Layout = layouts[project.slug] ?? GenericProject
  const service = findService(project.service)
  return (
    <>
      {/* Abertura padrão do site: imagem grande + placa central */}
      <PageHero image={project.heroImage} soft>
        <HeroPlate>
          <p className="tag text-restinga">{project.category}</p>
          <p className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] leading-none text-restinga">{project.client}</p>
        </HeroPlate>
      </PageHero>
      <div className="wrap pt-4">
        <Breadcrumb
          align="left"
          items={[{ label: serviceLabels.home, to: '/' }, { label: service.name, to: service.path }, { label: project.title }]}
        />
      </div>
      <Layout project={project} />
    </>
  )
}
