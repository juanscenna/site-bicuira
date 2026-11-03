import { Link, useLocation } from 'react-router-dom'

// Abas de um serviço: "Visão geral" e "Apresentação comercial"
export default function ServiceTabs({
  label,
  tabs,
}: {
  label: string
  tabs: { label: string; to: string }[]
}) {
  const { pathname } = useLocation()
  return (
    <nav aria-label={label} className="flex justify-center">
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
