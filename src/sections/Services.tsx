import Button from '../components/Button'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { IconAutomacao, IconFideliza, IconSites, WaveEdge, WaveLine } from '../components/Doodles'
import { servicesIntro } from '../content/home'
import { images } from '../content/images'
import { inDevelopmentLabel, services, type Service } from '../content/services'

// Link para o contato já com o serviço escolhido no formulário
const contactLink = (s: Service) => `/?servico=${s.id}#contato`

export default function Services() {
  const [sites, automacao, fideliza] = services

  return (
    <section id="servicos" aria-label={servicesIntro.tag} className="relative">
      <SitesBlock service={sites} />
      <AutomacaoBlock service={automacao} />
      <FidelizaBlock service={fideliza} />
    </section>
  )
}

function Label({ service, dark = false }: { service: Service; dark?: boolean }) {
  return (
    <p className={`tag ${dark ? 'text-lima' : 'text-restinga'}`}>
      {servicesIntro.tag} · {service.number} — {service.name}
    </p>
  )
}

// Sites: bloco Restinga, duas listas lado a lado
function SitesBlock({ service }: { service: Service }) {
  const d = service.detail
  return (
    <div id="servico-sites">
      <WaveEdge className="-mb-px h-12 text-restinga sm:h-20" />
      <div className="on-dark bg-restinga pb-20 pt-8 text-areia md:pb-28">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Label service={service} dark />
              <h2 className="mt-6 text-huge">{d.title}</h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-14">
              <IconSites className="h-14 w-14 text-lima" />
              <p className="text-body mt-6">{d.description}</p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            {d.groups.map((g, gi) => (
              <Reveal key={gi} delay={gi * 120} className={gi === 1 ? 'md:mt-20' : ''}>
                <h3 className="font-sans text-lg font-semibold">{g.title}</h3>
                <ol className="mt-6 border-t border-areia/25">
                  {g.items.map((item, i) => (
                    <li key={item} className="flex gap-5 border-b border-areia/25 py-3">
                      <span className="w-6 shrink-0 font-display text-lima">{String(i + 1).padStart(2, '0')}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm italic text-areia/85">{d.note}</p>
            <Button to={contactLink(service)} color="lima">
              {d.cta}
            </Button>
          </div>
        </div>
      </div>
      <WaveEdge flip className="-mt-px h-12 text-restinga sm:h-20" />
    </div>
  )
}

// Automação: foto de textura de água na esquerda, lista em "fluxo" na direita
function AutomacaoBlock({ service }: { service: Service }) {
  const d = service.detail
  return (
    <div id="servico-automacao" className="py-20 md:py-28">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="relative md:col-span-4">
          <Photo image={images.oceanTexture} className="aspect-[3/4] rounded-b-full md:sticky md:top-28" />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Label service={service} />
          <h2 className="mt-6 text-huge text-restinga">{d.title}</h2>
          <div className="mt-8 flex items-start gap-5">
            <IconAutomacao className="h-12 w-12 shrink-0 text-oceano" />
            <p className="text-body">{d.description}</p>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
            {d.groups[0].items.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                <span className="rounded-full border-2 border-oceano px-4 py-2 text-sm font-medium">{item}</span>
                {i < d.groups[0].items.length - 1 && <WaveLine className="h-3 w-8 text-oceano" waves={1} />}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-lg border-l-4 border-lima pl-4 text-sm">{d.note}</p>
          <Button to={contactLink(service)} className="mt-10">
            {d.cta}
          </Button>
        </div>
      </div>
    </div>
  )
}

// Fideliza: visual de "cartão de fidelidade", sempre marcado como em desenvolvimento
function FidelizaBlock({ service }: { service: Service }) {
  const d = service.detail
  return (
    <div id="servico-fideliza" className="pb-20 md:pb-28">
      <div className="wrap">
        <div className="relative rounded-[2.5rem] border-[3px] border-dashed border-sol bg-sol/10 px-6 py-12 sm:px-12 md:px-16 md:py-16">
          <p className="absolute -top-5 right-6 rotate-3 bg-carvao px-4 py-2 text-xs font-bold uppercase tracking-widest text-areia sm:right-12">
            {inDevelopmentLabel}
          </p>

          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <Label service={service} />
              <h2 className="mt-6 text-big text-carvao">{d.title}</h2>
              <p className="text-body mt-6">{d.description}</p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <IconFideliza className="h-12 w-12 text-sol" />
              <h3 className="mt-4 font-sans text-lg font-semibold">{d.groups[0].title}</h3>
              <ul className="mt-5 space-y-3">
                {d.groups[0].items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-sol" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t-2 border-dashed border-sol/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm font-semibold">{d.note}</p>
            <Button to={contactLink(service)}>{d.cta}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
