import { Link } from 'react-router-dom'

// Trilha "Início / Automação / Agenda de Todos Nós" — mostra onde a pessoa está
export default function Breadcrumb({ items, align = 'center' }: { items: { label: string; to?: string }[]; align?: 'center' | 'left' }) {
  return (
    <nav aria-label="Você está em" className="text-sm">
      <ol className={`flex flex-wrap items-center ${align === 'center' ? 'justify-center' : ''} gap-x-2 gap-y-1 text-carvao/80`}>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.to ? (
              <Link to={item.to} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-restinga">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
