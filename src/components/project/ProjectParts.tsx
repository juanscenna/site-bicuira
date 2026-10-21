// Peças reutilizadas nas páginas de projeto.
// Cada página monta sua própria composição com elas.

import { Link } from 'react-router-dom'
import Button from '../Button'
import { Framed } from '../Frames'
import { ScribbleUnderline, WaveEdge } from '../Doodles'
import { neighbors, projectLabels as L, projects, type Project } from '../../content/projects'
import { findService } from '../../content/services'
import { contactHref } from '../../content/site'

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
            <Button to={contactHref(project.service)} color="lima" className="mt-8">
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

// Galeria dos cases: fundo neutro para o print aparecer, telas grandes e retas,
// numeradas e na ordem do processo (computador ocupa meia largura, celular e recorte menos). Tocar abre o print em tamanho real.
export function CaseGallery({ project }: { project: Project }) {
  const items = project.gallery.map((g, i) => ({ ...g, n: String(i + 1).padStart(2, '0') }))

  const figure = (g: (typeof items)[number], width: string) => (
    <figure key={g.label} className={width}>
      {g.image.isPlaceholder ? (
        <Framed image={g.image} frame={g.frame} />
      ) : (
        <a
          href={g.image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carvao"
        >
          <Framed image={g.image} frame={g.frame} />
          <span className="sr-only"> (abre a imagem em tamanho real em nova aba)</span>
        </a>
      )}
      {!g.image.isPlaceholder && (
        <figcaption className="mt-4 flex items-baseline gap-3 text-[0.9375rem] font-medium text-carvao">
          <span className="font-display text-lg leading-none text-restinga">{g.n}</span>
          {g.label}
        </figcaption>
      )}
    </figure>
  )

  return (
    <section aria-labelledby="galeria" className="py-16 md:py-24">
      <div className="wrap">
        <div className="rounded-[2.5rem] bg-restinga/[0.07] px-5 py-10 sm:px-10 md:px-14 md:py-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="galeria" className="text-big text-restinga">
              {L.gallery}
            </h2>
            <p className="text-sm text-carvao/80">{L.galleryHint}</p>
          </div>
          <div className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-12">
            {items.map((g) =>
              figure(
                g,
                g.frame === 'browser'
                  ? 'w-full lg:w-[calc(50%-1.25rem)]'
                  : g.frame === 'phone'
                    ? 'w-[min(70vw,15rem)]'
                    : 'w-[min(80vw,19rem)]',
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
