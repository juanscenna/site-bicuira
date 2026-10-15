import { useParams } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'
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
  return <Layout project={project} />
}
