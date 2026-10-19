import { useEffect, useRef, useState, type ReactNode } from 'react'

// Diz quando um elemento chegou na tela (uma vez só).
// early: dispara um pouco ANTES de aparecer (para o conteúdo nunca ficar "vazio")
// visible: dispara quando já está bem visível (para animações em sequência serem vistas)
export function useInView<T extends HTMLElement>(mode: 'early' | 'visible' = 'early') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const onScreen = mode === 'early' ? rect.top < window.innerHeight : rect.top < window.innerHeight * 0.85 && rect.bottom > 0
    if (!('IntersectionObserver' in window) || onScreen) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: mode === 'early' ? '0px 0px 15% 0px' : '0px 0px -15% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [mode])

  return { ref, inView }
}

// Suaviza a entrada do conteúdo quando ele chega na tela.
// - O que já está visível ao carregar aparece na hora.
// - from: de onde o bloco entra (de baixo, da esquerda ou da direita).
// - Com "reduzir movimento" no sistema, o CSS mostra tudo direto (index.css).
export default function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'bottom',
  mode = 'early',
}: {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right'
  mode?: 'early' | 'visible'
}) {
  const { ref, inView } = useInView<HTMLDivElement>(mode)
  const direction = from === 'left' ? 'reveal-left' : from === 'right' ? 'reveal-right' : ''

  return (
    <div
      ref={ref}
      className={`reveal ${direction} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${Math.min(delay, 900)}ms` : undefined }}
    >
      {children}
    </div>
  )
}
