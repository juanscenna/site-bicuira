import ServiceTabs from './ServiceTabs'
import { apresentacaoSites } from '../content/apresentacaoSites'
import { findService } from '../content/services'

// Abas do Bicuíra Sites: "Visão geral" (/sites) e "Apresentação comercial"
export default function SitesTabs() {
  const t = apresentacaoSites.page.tabs
  return (
    <ServiceTabs
      label={t.label}
      tabs={[
        { label: t.overview, to: findService('sites').path },
        { label: t.presentation, to: apresentacaoSites.page.path },
      ]}
    />
  )
}
