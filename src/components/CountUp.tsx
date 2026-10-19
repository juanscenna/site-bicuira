import { useEffect, useState } from 'react'
import { useInView } from './Reveal'

// Conta do zero até os números de um texto quando ele aparece na tela.
// Ex.: "5 a 25×" → anima 0→5 e 0→25, mantendo o resto do texto.
// Leitores de tela recebem o texto final; com "reduzir movimento", aparece direto o valor final.
export default function CountUp({ value, className = '', duration = 1400 }: { value: string; className?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>('visible')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setProgress(1)
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setProgress(1 - Math.pow(1 - t, 3)) // desacelera no fim
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, duration])

  const shown = value.replace(/\d+/g, (n) => String(Math.round(Number(n) * progress)))

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}
