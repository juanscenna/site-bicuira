import ServiceTabs from './ServiceTabs'
import { apresentacao } from '../content/apresentacao'
import { findService } from '../content/services'

// Abas do Bicuíra Fideliza: "Visão geral" (/fideliza) e "Apresentação comercial"
export default function FidelizaTabs() {
  const t = apresentacao.page.tabs
  return (
    <ServiceTabs
      label={t.label}
      tabs={[
        { label: t.overview, to: findService('fideliza').path },
        { label: t.presentation, to: apresentacao.page.path },
      ]}
    />
  )
}
