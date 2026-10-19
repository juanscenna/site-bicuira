import { useEffect, useRef, useState } from 'react'
import { brand } from '../content/images'

// Cartão de fidelidade animado (mesmo esquema do cartão de demonstração do
// Bicuíra Fideliza, com a identidade da Bicuíra), em versão calma:
// - quando aparece na tela, ganha selos um a um (devagar e acelerando)
// - ao completar, dá uma volta e fica parado mostrando "Recompensa liberada!"
// - não fica se mexendo o tempo todo; com "reduzir movimento", aparece parado com 7 selos
// É uma ilustração da ideia (não é uma captura do sistema).
const META = 10
const ESPERA_MS = [1100, 950, 800, 650, 520, 420, 340, 280, 230, 210]

type Props = {
  label: string // "Cartão fidelidade"
  name: string // "Bicuíra Fideliza"
  reward: string // "Recompensa liberada!"
  back: string // texto do verso
  alt: string
  className?: string
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(m.matches)
    update()
    m.addEventListener('change', update)
    return () => m.removeEventListener('change', update)
  }, [])
  return reduced
}

export default function LoyaltyCard({ label, name, reward, back, alt, className = '' }: Props) {
  const reduced = useReducedMotion()
  const box = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(0)

  // só começa quando o cartão está visível na tela
  useEffect(() => {
    const el = box.current
    if (!el || !('IntersectionObserver' in window)) return setVisible(true)
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { rootMargin: '-10% 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !visible) return
    if (step >= META) return // completou: para e mostra a recompensa
    const t = window.setTimeout(() => setStep((s) => s + 1), ESPERA_MS[step])
    return () => window.clearTimeout(t)
  }, [reduced, visible, step])

  const stamps = reduced ? 7 : Math.min(step, META)
  const complete = !reduced && step >= META

  return (
    <div
      ref={box}
      role="img"
      aria-label={alt}
      className={`loyalty-card relative isolate mx-auto w-full max-w-[360px] py-4 [perspective:1100px] ${className}`}
    >
      {/* leve inclinação fixa em 3D (sem balançar) */}
      <div aria-hidden="true" className="relative [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(6deg)]">
        <div
          key={complete ? 'giro' : 'parado'}
          className={`relative aspect-[1.58/1] w-full [transform-style:preserve-3d] ${complete ? 'lc-spin' : ''}`}
        >
          {/* frente */}
          <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] border-[3px] border-lima bg-restinga p-4 shadow-[0_18px_36px_-22px_rgba(41,42,41,0.5)] [backface-visibility:hidden]">
            <div className="flex items-center gap-2">
              <img src={brand.selo} alt="" className="h-10 w-10 rounded-full bg-areia" />
              <div className="leading-none">
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-areia">{label}</p>
                <p className="mt-1 font-display text-lg leading-none text-lima">{name}</p>
              </div>
              <p className="ml-auto font-display text-2xl tabular-nums leading-none text-lima">
                {stamps}
                <span className="text-sm text-areia">/{META}</span>
              </p>
            </div>

            <ol className="mt-3 grid grid-cols-5 gap-2">
              {Array.from({ length: META }, (_, i) => {
                const done = i < stamps
                const fresh = !reduced && i === stamps - 1 && !complete
                return (
                  <li key={i} className="relative flex justify-center">
                    <span
                      className={`flex aspect-square w-full max-w-10 items-center justify-center rounded-full ${
                        done ? 'bg-areia shadow-[0_0_0_2px_#B4CD64]' : 'outline-dashed outline-2 outline-areia/30'
                      } ${fresh ? 'lc-stamp' : ''}`}
                    >
                      <img src={brand.simbolo} alt="" className={`w-[72%] ${done ? '' : 'opacity-20 grayscale'}`} />
                    </span>
                    {fresh && <span className="lc-spark absolute inset-0 m-auto h-6 w-6 rounded-full bg-lima" />}
                  </li>
                )
              })}
            </ol>

            {complete && (
              <p className="absolute inset-x-4 bottom-3 rounded-xl bg-lima py-1.5 text-center text-sm font-bold uppercase tracking-wide text-carvao">
                {reward}
              </p>
            )}

          </div>

          {/* verso (aparece no giro) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[1.6rem] border-[3px] border-lima bg-sol [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img src={brand.selo} alt="" className="h-24 w-24 rounded-full bg-areia p-1" />
            <p className="text-[1.2rem] font-bold uppercase tracking-[0.14em] text-areia">{back}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
