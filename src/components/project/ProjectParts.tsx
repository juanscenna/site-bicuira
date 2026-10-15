// Peças reutilizadas nas páginas de projeto.
// Cada página monta sua própria composição com elas.

import { Link } from 'react-router-dom'
import Button from '../Button'
import { Framed } from '../Frames'
import { ScribbleUnderline, WaveEdge } from '../Doodles'
import { neighbors, projectLabels as L, projects, type GalleryItem, type Project } from '../../content/projects'
import { findService } from '../../content/services'

// Etiqueta do topo: "Case 01 — Desenvolvimento de site · Pousada Sonhos do Rosa"
export function ProjectLabel({ project, dark = false }: { project: Project; dark?: boolean }) {
  const index = projects.findIndex((p) => p.slug === project.slug) + 1
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${dark ? 'text-lima' : 'text-restinga'}`}>
      <p className="tag">
        {L.case} {String(index).padStart(2, '0')} — {project.category}
      </p>
      <p className={`text-sm font-semibold ${dark ? 'text-areia/85' : 'text-carvao/75'}`}>{project.client}</p>
    </div>
  )
}

// Lista de ferramentas usadas
export function Tools({ tools, dark = false }: { tools?: string[]; dark?: boolean }) {
  if (!tools?.length) return null
  return (
    <div>
      <p className={`tag ${dark ? 'text-lima' : 'text-restinga'}`}>{L.tools}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tools.map((t) => (
          <li
            key={t}
            className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold ${
              dark ? 'border-areia/60 text-areia' : 'border-carvao text-carvao'
            }`}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Item da galeria. A legenda só aparece quando a imagem é uma captura real
// (isPlaceholder: false), para não apresentar foto ilustrativa como captura.
export function GalleryFigure({ item, className = '' }: { item: GalleryItem; className?: string }) {
  return (
    <figure className={className}>
      <Framed image={item.image} frame={item.frame} />
      {!item.image.isPlaceholder && <figcaption className="mt-3 text-sm text-carvao/75">{item.label}</figcaption>}
    </figure>
  )
}

// Lista de benefícios com traço desenhado
export function Benefits({ items, dark = false, columns = 2 }: { items: string[]; dark?: boolean; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-10 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((b, i) => (
        <li key={b} className={`flex items-baseline gap-4 border-b-2 py-4 ${dark ? 'border-areia/20' : 'border-carvao/10'}`}>
          <span className={`font-display text-xl ${dark ? 'text-lima' : 'text-restinga'}`}>{String(i + 1).padStart(2, '0')}</span>
          <span className="text-lg font-medium">{b}</span>
        </li>
      ))}
    </ul>
  )
}

// CTA final de cada projeto
export function ProjectCta({ project }: { project: Project }) {
  const { finalCta } = project
  return (
    <section aria-labelledby="cta-final" className="relative">
      <WaveEdge className="-mb-px h-12 text-restinga sm:h-20" />
      <div className="on-dark bg-restinga py-20 text-areia md:py-28">
        <div className="wrap grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 id="cta-final" className="text-big">
              {finalCta.title}
            </h2>
            <ScribbleUnderline className="mt-4 h-5 w-56 text-lima" />
          </div>
          <div className="md:col-span-4">
            <p className="text-body">{finalCta.text}</p>
            <Button to={`/?servico=${project.service}#contato`} color="lima" className="mt-8">
              {finalCta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Navegação entre projetos (fica logo abaixo do CTA final)
export function ProjectNav({ project }: { project: Project }) {
  const { prev, next } = neighbors(project.slug)
  const service = findService(project.service)
  const link = 'group block rounded-2xl border-2 border-carvao/15 p-6 transition-colors hover:border-carvao'

  return (
    <nav aria-label={L.otherProjects} className="bg-restinga pb-16 text-carvao">
      <div className="wrap">
        <div className="grid gap-4 rounded-[2rem] bg-areia p-4 sm:p-6 lg:grid-cols-3">
          <Link to={service.path} className={link}>
            <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-restinga">{L.portfolio}</span>
            <span className="mt-2 block font-display text-2xl">
              ← {L.back} {service.name}
            </span>
          </Link>

          {prev ? (
            <Link to={`/projetos/${prev.slug}`} className={link}>
              <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-restinga">{L.prev}</span>
              <span className="mt-2 block font-display text-2xl">← {prev.title}</span>
            </Link>
          ) : (
            <span className="hidden lg:block" />
          )}

          {next ? (
            <Link to={`/projetos/${next.slug}`} className={`${link} lg:text-right`}>
              <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-restinga">{L.next}</span>
              <span className="mt-2 block font-display text-2xl">{next.title} →</span>
            </Link>
          ) : (
            <Link to="/#solucoes" className={`${link} lg:text-right`}>
              <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-restinga">{L.services}</span>
              <span className="mt-2 block font-display text-2xl">{L.servicesLink} →</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

// Bloco de título + texto usado em "O desafio" e "A solução"
export function StoryBlock({
  label,
  title,
  text,
  dark = false,
}: {
  label: string
  title: string
  text: string
  dark?: boolean
}) {
  return (
    <div>
      <p className={`tag ${dark ? 'text-lima' : 'text-restinga'}`}>{label}</p>
      <h2 className="mt-5 text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.02]">{title}</h2>
      <p className="text-body mt-6 max-w-xl">{text}</p>
    </div>
  )
}
