import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import FidelizaTabs from '../components/FidelizaTabs'
import PageHero, { HeroPlate } from '../components/PageHero'
import usePageMeta from '../components/usePageMeta'
import { IconFideliza, WaveEdge } from '../components/Doodles'
import { apresentacao } from '../content/apresentacao'
import { findService, serviceLabels } from '../content/services'
import ApresentacaoFideliza from '../sections/ApresentacaoFideliza'
import { contactHref } from '../content/site'

// Aba "Apresentação comercial" do Bicuíra Fideliza: /fideliza/apresentacao
export default function ApresentacaoPage() {
  const p = apresentacao.page
  const service = findService('fideliza')
  usePageMeta(p.seo.title, p.seo.description)

  return (
    <>
      <PageHero image={service.heroImage}>
        <HeroPlate>
          <IconFideliza className="h-12 w-12 text-sol" />
          <p className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none text-restinga">{service.name}</p>
          <p className="tag text-restinga">{p.breadcrumb}</p>
        </HeroPlate>
      </PageHero>

      <div className="wrap flex flex-col items-center gap-4 pt-6">
        <Breadcrumb items={[{ label: serviceLabels.home, to: '/' }, { label: service.name, to: service.path }, { label: p.breadcrumb }]} />
        <FidelizaTabs />
      </div>

      <ApresentacaoFideliza />

      {/* fechamento: conversar */}
      <section aria-labelledby="cta-apresentacao" className="relative">
        <WaveEdge className="-mb-px h-12 text-restinga sm:h-20" />
        <div className="on-dark bg-restinga pb-14 pt-8 text-center text-areia md:pb-20">
          <div className="wrap">
            <h2 id="cta-apresentacao" className="mx-auto max-w-3xl text-big">
              {p.final.title}
            </h2>
            <p className="text-body mx-auto mt-4 max-w-xl">{p.final.text}</p>
            <Button to={contactHref(service.id)} color="lima" className="mt-8">
              {p.final.button}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
