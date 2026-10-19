import { brand } from '../content/images'
import { useInView } from './Reveal'

// Cartão de fidelidade animado: quando aparece na tela, os selos são
// "carimbados" um a um e o último espaço mostra o prêmio.
// É uma ilustração da ideia (não é uma captura do sistema).
// Com "reduzir movimento", aparece direto com todos os selos.
type Props = { label: string; name: string; alt: string; total?: number; className?: string }

export default function LoyaltyCard({ label, name, alt, total = 10, className = '' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>('visible')

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className={`loyalty ${inView ? 'is-stamping' : ''} w-full max-w-sm -rotate-2 rounded-[1.75rem] bg-areia p-5 text-carvao sm:p-7 ${className}`}
    >
      <div aria-hidden="true" className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-restinga">{label}</p>
          <p className="font-display text-2xl leading-tight text-restinga">{name}</p>
        </div>
        <img src={brand.simbolo} alt="" width={206} height={113} className="h-8 w-auto" />
      </div>

      <ul aria-hidden="true" className="mt-5 grid grid-cols-5 gap-2.5 sm:gap-3">
        {Array.from({ length: total }).map((_, i) => {
          const last = i === total - 1
          return (
            <li key={i} className="relative aspect-square rounded-full border-2 border-dashed border-oceano/70">
              <span
                className={`stamp absolute inset-[-2px] flex items-center justify-center rounded-full ${last ? 'bg-sol' : 'bg-lima'}`}
                style={{ ['--i' as string]: i }}
              >
                {last ? (
                  // presente (prêmio)
                  <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="#F2EBDD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
                  </svg>
                ) : (
                  <img src={brand.simbolo} alt="" className="w-3/4" />
                )}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
