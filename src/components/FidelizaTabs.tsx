import { Link, useLocation } from 'react-router-dom'
import { apresentacao } from '../content/apresentacao'
import { findService } from '../content/services'

// Abas do Bicuíra Fideliza: "Visão geral" (/fideliza) e "Apresentação comercial"
export default function FidelizaTabs() {
  const { pathname } = useLocation()
  const t = apresentacao.page.tabs
  const tabs = [
    { label: t.overview, to: findService('fideliza').path },
    { label: t.presentation, to: apresentacao.page.path },
  ]
  return (
    <nav aria-label={t.label} className="flex justify-center">
      <ul className="inline-flex gap-1 rounded-full bg-restinga/10 p-1">
        {tabs.map((tab) => {
          const current = pathname === tab.to
          return (
            <li key={tab.to}>
              <Link
                to={tab.to}
                aria-current={current ? 'page' : undefined}
                className={`inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold transition-colors sm:px-5 ${
                  current ? 'bg-restinga text-areia' : 'text-restinga hover:bg-restinga/10'
                }`}
              >
                {tab.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
