import { useEffect, useRef, useState } from 'react'
import { brand } from '../content/images'

// Cartão de fidelidade animado (mesmo esquema do cartão de demonstração do
// Bicuíra Fideliza, com a identidade da Bicuíra):
// - balança em 3D, com luzes atrás e um brilho passando
// - ganha selos um a um, começando devagar e acelerando
// - ao completar, dá uma volta inteira, mostra "Recompensa liberada!" e recomeça
// - fora da tela, pausa; com "reduzir movimento", fica parado com 7 selos
// É uma ilustração da ideia (não é uma captura do sistema).
const META = 10
const ESPERA_MS = [1100, 950, 800, 650, 520, 420, 340, 280, 230, 210]
const PAUSA_COMPLETO_MS = 3200

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

  // fora da tela: pausa tudo (economiza bateria e não pesa ao rolar)
  useEffect(() => {
    const el = box.current
    if (!el || !('IntersectionObserver' in window)) return setVisible(true)
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '100px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !visible) return
    const wait = step >= META ? PAUSA_COMPLETO_MS : ESPERA_MS[step]
    const t = window.setTimeout(() => setStep((s) => (s >= META ? 0 : s + 1)), wait)
    return () => window.clearTimeout(t)
  }, [reduced, visible, step])

  const stamps = reduced ? 7 : Math.min(step, META)
  const complete = !reduced && step >= META

  return (
    <div
      ref={box}
      role="img"
      aria-label={alt}
      className={`loyalty-card relative isolate mx-auto w-full max-w-[360px] py-8 [perspective:1100px] ${visible ? '' : 'is-paused'} ${className}`}
    >
      {/* luzes atrás do cartão (Lima e Pôr do Sol) */}
      <div aria-hidden="true" className="lc-glow absolute -inset-x-6 inset-y-0 bg-[radial-gradient(closest-side,rgba(180,205,100,0.55),rgba(180,205,100,0.18)_55%,transparent)]" />
      <div aria-hidden="true" className="lc-glow-2 absolute -right-6 -top-6 h-44 w-44 bg-[radial-gradient(closest-side,rgba(195,94,47,0.55),transparent)]" />

      <div aria-hidden="true" className="lc-sway relative [transform-style:preserve-3d]">
        <div
          key={complete ? 'giro' : 'parado'}
          className={`relative aspect-[1.58/1] w-full [transform-style:preserve-3d] ${complete ? 'lc-spin' : ''}`}
        >
          {/* frente */}
          <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] border-[3px] border-lima bg-restinga p-4 shadow-[0_24px_50px_-24px_rgba(41,42,41,0.55)] [backface-visibility:hidden]">
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
                        done ? 'bg-areia shadow-[0_0_0_2px_#B4CD64,0_0_14px_rgba(180,205,100,0.85)]' : 'outline-dashed outline-2 outline-areia/30'
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

            {/* brilho passando */}
            <div className="lc-shine pointer-events-none absolute inset-y-0 -left-full w-[300%] bg-[linear-gradient(115deg,transparent_42%,rgba(242,235,221,0.24)_49%,rgba(180,205,100,0.14)_51%,transparent_58%)]" />
          </div>

          {/* verso (aparece no giro) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[1.6rem] border-[3px] border-lima bg-sol [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img src={brand.selo} alt="" className="h-24 w-24 rounded-full bg-areia p-1" />
            <p className="text-[1.2rem] font-bold uppercase tracking-[0.14em] text-areia">{back}</p>
          </div>
        </div>
      </div>

      {/* sombra no "chão" */}
      <div aria-hidden="true" className="lc-floor mx-auto mt-6 h-4 w-3/4 bg-[radial-gradient(closest-side,rgba(41,42,41,0.45),transparent)]" />
    </div>
  )
}
