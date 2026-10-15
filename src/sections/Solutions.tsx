import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Mark from '../components/Mark'
import { IconAutomacao, IconFideliza, IconSites } from '../components/Doodles'
import { solutionsIntro } from '../content/home'
import { inDevelopmentLabel, services, type ServiceId } from '../content/services'

// Visual de cada card: cada solução tem cor, tamanho e posição próprios.
const look: Record<ServiceId, { place: string; box: string; number: string; icon: string; link: string }> = {
  sites: {
    place: 'lg:col-span-5',
    box: 'on-dark bg-restinga text-areia lg:min-h-[34rem]',
    number: 'text-lima',
    icon: 'text-lima',
    link: 'text-areia decoration-lima',
  },
  automacao: {
    place: 'lg:col-span-4 lg:mt-28',
    box: 'border-2 border-oceano bg-areia text-carvao',
    number: 'text-oceano',
    icon: 'text-oceano',
    link: 'text-carvao decoration-oceano',
  },
  fideliza: {
    place: 'lg:col-span-3 lg:mt-12',
    box: 'bg-sol/15 text-carvao',
    number: 'text-sol',
    icon: 'text-sol',
    link: 'text-carvao decoration-sol',
  },
}

const icons = { sites: IconSites, automacao: IconAutomacao, fideliza: IconFideliza }

export default function Solutions() {
  return (
    <section id="solucoes" className="relative py-14 md:py-20">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="tag text-restinga">{solutionsIntro.tag}</p>
            <h2 className="mt-5 text-huge text-restinga">
              <Mark text={solutionsIntro.title} word={solutionsIntro.mark} />
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
                        <p className="text-body">{solutionsIntro.text}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-5">
          {services.map((service, i) => {
            const style = look[service.id]
            const Icon = icons[service.id]
            return (
              <Reveal key={service.id} delay={i * 120} className={style.place}>
                <article className={`relative flex h-full flex-col rounded-tr-[3rem] p-7 sm:p-9 ${style.box}`}>
                  <div className="flex items-start justify-between">
                    <span className={`font-display text-[4.5rem] leading-none sm:text-[5.5rem] ${style.number}`}>
                      {service.number}
                    </span>
                    <Icon className={`h-12 w-12 ${style.icon}`} />
                  </div>

                  {service.inDevelopment && (
                    <p className="mt-4 inline-block -rotate-3 self-start border-2 border-sol px-3 py-1.5 text-[0.8125rem] font-bold uppercase leading-tight tracking-wide">
                      {inDevelopmentLabel}
                    </p>
                  )}

                  <h3 className="mt-6 text-mid uppercase">{service.name}</h3>
                  <p className="mt-4 leading-relaxed">{service.card.description}</p>

                  <ul className="mt-6 space-y-1.5 text-sm">
                    {service.card.examples.map((ex) => (
                      <li key={ex} className="flex gap-3">
                        <span aria-hidden="true">—</span>
                        {ex}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/#servico-${service.id}`}
                    className={`mt-auto inline-flex min-h-[48px] items-end pt-8 text-sm font-semibold underline decoration-2 underline-offset-[6px] ${style.link}`}
                  >
                    {service.card.cta} →
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
