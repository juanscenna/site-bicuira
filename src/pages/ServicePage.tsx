import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import Mark from '../components/Mark'
import PageHero, { HeroPlate } from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import usePageMeta from '../components/usePageMeta'
import FidelizaTabs from '../components/FidelizaTabs'
import LoyaltyCard from '../components/LoyaltyCard'
import { apresentacao } from '../content/apresentacao'
import { IconAutomacao, IconFideliza, IconSites, ScribbleUnderline, WaveEdge } from '../components/Doodles'
import { projectsOf } from '../content/projects'
import { inDevelopmentLabel, serviceLabels as L, services, type Service } from '../content/services'

const icons = { sites: IconSites, automacao: IconAutomacao, fideliza: IconFideliza }
const iconColor = { sites: 'text-restinga', automacao: 'text-oceano', fideliza: 'text-sol' }

// Página de um serviço (Sites, Automação, Fideliza).
// Jornada: abertura → o que é → o que pode incluir → cases (resumo) → conversar.
export default function ServicePage({ service }: { service: Service }) {
  usePageMeta(service.seo.title, service.seo.description)
  const d = service.detail
  const cases = projectsOf(service.id)
  const Icon = icons[service.id]
  const contactLink = `/?servico=${service.id}#contato`

  return (
    <>
      <PageHero image={service.heroImage}>
        <HeroPlate>
          <Icon className={`h-12 w-12 ${iconColor[service.id]}`} />
          <p className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none text-restinga">{service.name}</p>
          {service.inDevelopment && (
            <p className="rounded-full bg-carvao px-3 py-1 text-[0.8125rem] font-bold uppercase tracking-wide text-areia">
              {inDevelopmentLabel}
            </p>
          )}
        </HeroPlate>
      </PageHero>

      {/* Título + informação (mesmo padrão da página inicial) */}
      <section className="pb-14 pt-6 text-center md:pb-20 md:pt-10">
        <div className="wrap flex flex-col items-center">
          <Breadcrumb items={[{ label: L.home, to: '/' }, { label: service.name }]} />
          {service.id === 'fideliza' && (
            <div className="mt-3">
              <FidelizaTabs />
            </div>
          )}
          <p className="tag mt-4 text-restinga">
            {L.serviceTag} {service.number}
          </p>
          <h1 className="mt-5 max-w-5xl text-[clamp(2.3rem,5.4vw,4.5rem)] leading-[0.98] text-restinga">
            <Mark text={d.title} word={d.mark} />
          </h1>
          <p className="text-body mt-6 max-w-xl">{d.description}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Button to={contactLink}>{d.cta}</Button>
            {cases.length > 0 && (
              <Button to="#cases" variant="text">
                {L.seeCases}
              </Button>
            )}
            {service.id === 'fideliza' && (
              <Button to={apresentacao.page.path} variant="text">
                {apresentacao.section.jump}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* O que pode incluir */}
      <section aria-labelledby="inclui" className="pb-16 md:pb-24">
        <div className="wrap">
          <div className="rounded-[2.5rem] bg-restinga/10 px-6 py-10 sm:px-10 md:px-14 md:py-14">
            <h2 id="inclui" className="text-big text-restinga">
              {L.include}
            </h2>
            <div className={`mt-8 grid gap-10 ${d.groups.length > 1 ? 'lg:grid-cols-2' : ''}`}>
              {d.groups.map((g, gi) => (
                <Reveal key={gi}>
                  {g.title && <h3 className="font-sans text-lg font-semibold">{g.title}</h3>}
                  <ul className={`mt-4 grid gap-x-8 sm:grid-cols-2 ${d.groups.length === 1 ? 'lg:grid-cols-3' : ''}`}>
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-3 border-b border-carvao/15 py-3">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sol" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            {d.note && !service.inDevelopment && <p className="mt-8 max-w-2xl font-medium">{d.note}</p>}
          </div>
        </div>
      </section>

      {/* Cases: resumo + botão para a página completa */}
      {cases.length > 0 && (
        <section id="cases" aria-labelledby="cases-titulo" className="pb-16 md:pb-24">
          <div className="wrap">
            <div className="text-center">
              <p className="tag text-restinga">{L.casesTag}</p>
              <h2 id="cases-titulo" className="mt-4 text-big text-restinga">
                {L.casesTitle}
              </h2>
              <ScribbleUnderline className="mx-auto mt-2 h-4 w-40 text-sol" />
            </div>
            <ul className="mt-12 space-y-10 md:space-y-14">
              {cases.map((p, i) => (
                <li key={p.slug}>
                  <Reveal>
                    <article className="case grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                      <Link
                        to={`/projetos/${p.slug}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        className={`block overflow-hidden rounded-[2rem] ${i % 2 ? 'lg:order-2' : ''}`}
                      >
                        <Photo image={p.cover} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/10]" />
                      </Link>
                      <div>
                        <p className="tag text-restinga">{p.category}</p>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-carvao/80">{p.client}</p>
                        <h3 className="mt-2 text-mid text-carvao">{p.title}</h3>
                        <p className="mt-4 max-w-lg leading-relaxed">{p.summary}</p>
                        <Button to={`/projetos/${p.slug}`} className="mt-7">
                          {L.viewCase}
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Fideliza: sem cases, mostra o status do produto */}
      {service.inDevelopment && (
        <section aria-labelledby="status" className="pb-16 md:pb-24">
          <div className="wrap">
            <div className="mx-auto max-w-3xl rounded-[2rem] border-[3px] border-dashed border-sol px-6 py-10 text-center sm:px-12">
              <p className="mx-auto w-fit rounded-full bg-carvao px-3 py-1 text-[0.8125rem] font-bold uppercase tracking-wide text-areia">
                {inDevelopmentLabel}
              </p>
              <h2 id="status" className="mt-5 text-mid text-carvao">
                {L.statusTitle}
              </h2>
              <p className="text-body mt-4">{d.note}</p>
            </div>

            {/* Cartão animado + botão para a apresentação comercial */}
            <div className="on-dark mt-10 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-restinga px-6 py-10 text-areia sm:px-10 lg:grid-cols-2 lg:px-14">
              <div className="text-center lg:text-left">
                <h2 className="text-big">{apresentacao.page.teaser.title}</h2>
                <p className="text-body mt-4 max-w-md lg:mx-0 mx-auto">{apresentacao.page.teaser.text}</p>
                <Button to={apresentacao.page.path} color="lima" className="mt-7">
                  {apresentacao.page.teaser.button}
                </Button>
              </div>
              <LoyaltyCard {...apresentacao.capa.card} />
            </div>
          </div>
        </section>
      )}

      {/* Conversar */}
      <section aria-labelledby="cta-servico" className="relative">
        <WaveEdge className="-mb-px h-12 text-restinga sm:h-20" />
        <div className="on-dark bg-restinga pb-12 pt-8 text-areia md:pb-16">
          <div className="wrap text-center">
            <h2 id="cta-servico" className="mx-auto max-w-3xl text-big">
              {L.finalTitle}
            </h2>
            <p className="text-body mx-auto mt-5 max-w-xl">{L.finalText}</p>
            <Button to={contactLink} color="lima" className="mt-8">
              {d.cta}
            </Button>

            {/* Outras soluções: continua a jornada sem voltar ao início */}
            <div className="mt-14 border-t border-areia/20 pt-10">
              <p className="tag text-lima">{L.otherServices}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {services
                  .filter((s) => s.id !== service.id)
                  .map((s) => (
                    <li key={s.id}>
                      <Link
                        to={s.path}
                        className="group flex min-h-[64px] items-center justify-between rounded-2xl bg-areia px-6 py-4 text-left text-carvao transition-colors hover:bg-lima"
                      >
                        <span className="font-display text-2xl">{s.name}</span>
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
