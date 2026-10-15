import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  to: string
  className?: string
  children: ReactNode
  onClick?: () => void
  'aria-label'?: string
}

// Link que decide sozinho:
// - endereço externo (https://...) → abre em nova aba
// - endereço interno (/projetos/..., /#contato) → navegação do site
export default function SmartLink({ to, children, ...rest }: Props) {
  if (to.startsWith('http')) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    )
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}
