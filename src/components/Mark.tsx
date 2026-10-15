import { useEffect, useRef, useState } from 'react'
import { ScribbleCircle, ScribbleUnderline } from './Doodles'

// Destaca 1 trecho de um título com um traço desenhado à mão
// (sublinhado ou círculo), que se desenha quando aparece na tela.
// O texto não muda: se "word" não estiver em "text", mostra o texto puro.
type Props = {
  text: string
  word?: string
  kind?: 'underline' | 'circle'
  color?: string // classe de cor do traço, ex.: 'text-sol'
}

export default function Mark({ text, word, kind = 'underline', color = 'text-sol' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setDrawn(true)
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const at = word ? text.indexOf(word) : -1
  if (!word || at < 0) return <>{text}</>

  const Stroke = kind === 'circle' ? ScribbleCircle : ScribbleUnderline
  const strokePos =
    kind === 'circle'
      ? 'absolute -inset-x-[10%] -inset-y-[12%] h-[124%] w-[120%]'
      : 'absolute -bottom-[0.12em] left-0 h-[0.28em] w-full'

  return (
    <>
      {text.slice(0, at)}
      <span ref={ref} className="relative inline-block whitespace-nowrap">
        {word}
        <Stroke className={`mark-line ${drawn ? 'is-drawn' : ''} pointer-events-none ${strokePos} ${color}`} />
      </span>
      {text.slice(at + word.length)}
    </>
  )
}
