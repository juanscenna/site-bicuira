import { useEffect, useRef, useState, type ReactNode } from 'react'

// Suaviza a entrada do conteúdo quando ele chega na tela.
// - O que já está visível ao carregar aparece na hora.
// - O observador dispara um pouco ANTES do bloco entrar (rootMargin positivo),
//   então o conteúdo nunca fica "vazio" enquanto a pessoa rola.
// - Com "reduzir movimento" no sistema, o CSS mostra tudo direto (index.css).
export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window) || el.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px 15% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${Math.min(delay, 200)}ms` : undefined }}
    >
      {children}
    </div>
  )
}
