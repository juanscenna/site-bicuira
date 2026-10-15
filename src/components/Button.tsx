import type { ReactNode } from 'react'
import SmartLink from './SmartLink'

// Estilos de botão do site.
// solid  → botão cheio (ação principal)
// line   → só contorno (ação secundária)
// text   → link com seta
type Variant = 'solid' | 'line' | 'text'
// Obs.: Pôr do Sol e Oceano não têm contraste suficiente para texto pequeno,
// por isso não são usados como cor de botão.
type Color = 'carvao' | 'restinga' | 'areia' | 'lima'

const solid: Record<Color, string> = {
  carvao: 'bg-carvao text-areia hover:bg-restinga',
  restinga: 'bg-restinga text-areia hover:bg-carvao',
  areia: 'bg-areia text-carvao hover:bg-lima',
  lima: 'bg-lima text-carvao hover:bg-areia',
}

const line: Record<Color, string> = {
  carvao: 'border-carvao text-carvao hover:bg-carvao hover:text-areia',
  restinga: 'border-restinga text-restinga hover:bg-restinga hover:text-areia',
  areia: 'border-areia text-areia hover:bg-areia hover:text-carvao',
  lima: 'border-lima text-lima hover:bg-lima hover:text-carvao',
}

type Props = {
  to: string
  children: ReactNode
  variant?: Variant
  color?: Color
  className?: string
}

export default function Button({ to, children, variant = 'solid', color = 'carvao', className = '' }: Props) {
  const base =
    'group inline-flex min-h-[48px] items-center gap-3 font-sans text-sm font-semibold transition-colors duration-300'

  let style = ''
  if (variant === 'solid') style = `rounded-full px-6 py-3 ${solid[color]}`
  if (variant === 'line') style = `rounded-full border-2 px-6 py-3 ${line[color]}`
  if (variant === 'text') style = 'underline decoration-2 underline-offset-[6px] hover:decoration-lima'

  return (
    <SmartLink to={to} className={`${base} ${style} ${className}`}>
      <span>{children}</span>
      <Arrow />
    </SmartLink>
  )
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12.5c5-.6 11-.4 17-.5M14 6l6 6-6 6" />
    </svg>
  )
}
