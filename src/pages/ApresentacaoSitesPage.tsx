import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import SitesTabs from '../components/SitesTabs'
import PageHero, { HeroLogo } from '../components/PageHero'
import usePageMeta from '../components/usePageMeta'
import { WaveEdge } from '../components/Doodles'
import { brand } from '../content/images'
import { apresentacaoSites } from '../content/apresentacaoSites'
import { findService, serviceLabels } from '../content/services'
import ApresentacaoSites from '../sections/ApresentacaoSites'
import { contactHref } from '../content/site'

// Aba "Apresentação comercial" do Bicuíra Sites: /sites/apresentacao
export default function ApresentacaoSitesPage() {
  const p = apresentacaoSites.page
  const service = findService('sites')
  usePageMeta(p.seo.title, p.seo.description)

  return (
    <>
      <PageHero image={service.heroImage}>
        <HeroLogo src={brand.sites} alt={service.name}>
          <p className="rounded-full bg-carvao px-3 py-1 text-[0.8125rem] font-bold uppercase tracking-wide text-areia">{p.breadcrumb}</p>
        </HeroLogo>
      </PageHero>

      <div className="wrap flex flex-col items-center gap-4 pt-6">
        <Breadcrumb items={[{ label: serviceLabels.home, to: '/' }, { label: service.name, to: service.path }, { label: p.breadcrumb }]} />
        <SitesTabs />
      </div>

      <ApresentacaoSites />

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
