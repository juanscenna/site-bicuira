import Button from '../components/Button'
import Mark from '../components/Mark'
import Reveal from '../components/Reveal'
import { IconAutomacao, IconFideliza, IconSites } from '../components/Doodles'
import { solutionsIntro } from '../content/home'
import { inDevelopmentLabel, services, type ServiceId } from '../content/services'

// Três cards IGUAIS em tamanho e peso (como no wireframe).
// Cada um só muda a cor de destaque: Restinga, Oceano e Pôr do Sol.
const accent: Record<ServiceId, { top: string; body: string }> = {
  sites: { top: 'bg-restinga', body: 'bg-restinga/10' },
  automacao: { top: 'bg-oceano', body: 'bg-oceano/15' },
  fideliza: { top: 'bg-sol', body: 'bg-sol/15' },
}
const icons = { sites: IconSites, automacao: IconAutomacao, fideliza: IconFideliza }

export default function Solutions() {
  return (
    <section id="solucoes" className="relative pb-16 md:pb-24">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tag text-restinga">{solutionsIntro.tag}</p>
          <h2 className="mt-5 text-huge text-restinga">
            <Mark text={solutionsIntro.title} word={solutionsIntro.mark} />
          </h2>
          <p className="text-body mx-auto mt-6 max-w-xl">{solutionsIntro.text}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.id]
            const c = accent[service.id]
            return (
              <li key={service.id}>
                <Reveal delay={i * 80} className="h-full">
                  <article className={`flex h-full flex-col overflow-hidden rounded-[2rem] ${c.body}`}>
                    {/* faixa de cor com número e ícone (texto grande = contraste ok) */}
                    <div className={`flex items-center justify-between px-7 py-6 text-areia ${c.top}`}>
                      <span aria-hidden="true" className="font-display text-5xl leading-none">
                        {service.number}
                      </span>
                      <Icon className="h-11 w-11" />
                    </div>
                    <div className="flex flex-1 flex-col px-7 pb-7 pt-6 text-carvao">
                      <h3 className="text-mid">{service.name}</h3>
                      {service.inDevelopment && (
                        <p className="mt-3 self-start rounded-full bg-carvao px-3 py-1 text-[0.8125rem] font-bold uppercase tracking-wide text-areia">
                          {inDevelopmentLabel}
                        </p>
                      )}
                      <p className="mt-4 leading-relaxed">{service.card.description}</p>
                      <ul className="mt-5 space-y-1.5 text-[0.9375rem]">
                        {service.card.examples.map((ex) => (
                          <li key={ex} className="flex gap-3">
                            <span aria-hidden="true">—</span>
                            {ex}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-8">
                        <Button to={service.path}>{service.card.cta}</Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
