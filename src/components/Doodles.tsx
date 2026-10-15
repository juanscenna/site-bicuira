// Elementos gráficos "desenhados à mão" e formas orgânicas da marca.
// Todos são decorativos (aria-hidden) e herdam a cor via "currentColor".

type P = { className?: string; fromTop?: boolean }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

// Rabiscos (círculo, sublinhado, seta): se desenham conforme a rolagem (ScrollFx).
// pathLength=1 deixa o traço com comprimento 1 para o CSS controlar o desenho.

// Círculo rabiscado em volta de uma palavra
export function ScribbleCircle({ className = '', fromTop }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 120" preserveAspectRatio="none" data-draw={fromTop ? 'top' : ''} className={className}>
      <path
        {...stroke}
        strokeWidth="4"
        d="M160 10C240 6 294 30 290 62c-4 34-74 52-148 50C66 110 8 92 12 58 16 26 84 8 170 14c32 2 62 10 82 20"
      />
    </svg>
  )
}

// Sublinhado ondulado
export function ScribbleUnderline({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" data-draw className={className}>
      <path pathLength={1} {...stroke} strokeWidth="4" d="M4 16C60 4 110 22 160 12s100-6 136 2" />
    </svg>
  )
}

// Seta curva desenhada
export function ScribbleArrow({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 80" data-draw className={className}>
      <path pathLength={1} {...stroke} strokeWidth="3.5" d="M6 70C28 24 66 10 106 22" />
      <path pathLength={1} {...stroke} strokeWidth="3.5" d="M90 9l17 13-15 15" />
    </svg>
  )
}

// Estrelinha / brilho de marcação
export function Spark({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={className}>
      <path {...stroke} strokeWidth="3" d="M20 4v10M20 26v10M4 20h10M26 20h10M9 9l6 6M25 25l6 6M31 9l-6 6M9 31l6-6" />
    </svg>
  )
}

// Linha de onda contínua (usada em percursos e divisões)
export function WaveLine({ className = '', waves = 6, wipe = false }: { className?: string; waves?: number; wipe?: boolean }) {
  const w = 100
  let d = `M0 20`
  for (let i = 0; i < waves; i++) d += ` q${w / 4} -16 ${w / 2} 0 t${w / 2} 0`
  return (
    <svg aria-hidden="true" data-wipe={wipe || undefined} viewBox={`0 0 ${waves * w} 40`} preserveAspectRatio="none" className={className}>
      <path {...stroke} strokeWidth="3" vectorEffect="non-scaling-stroke" d={d} />
    </svg>
  )
}

// ── Formas da marca (morro, sol, onda) ──

export function Sun({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={className}>
      <path fill="currentColor" d="M52 4c26 1 44 20 44 46 0 25-19 46-46 46S4 76 4 50C5 22 26 3 52 4z" />
    </svg>
  )
}

export function Hill({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 200" preserveAspectRatio="none" className={className}>
      <path fill="currentColor" d="M0 200C30 140 110 40 205 42c78 2 120 70 170 104 18 12 25 30 25 54z" />
    </svg>
  )
}

export function WaveShape({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 70" preserveAspectRatio="none" className={className}>
      <path
        fill="currentColor"
        d="M8 46C50 20 110 14 170 30s120 26 170 10c24-8 50-16 56-8 6 10-20 26-52 34-60 16-120 4-176-10S60 46 20 62C4 68-6 56 8 46z"
      />
    </svg>
  )
}

// Borda ondulada entre seções. A cor é a da seção que "sobe".
export function WaveEdge({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block w-full ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <path fill="currentColor" d="M0 44C180 8 360 0 560 26s380 52 600 30c120-12 200-30 280-40v80H0z" />
    </svg>
  )
}

// ── Ícones dos serviços ──
// Traço fino (1.25), poucos elementos e cantos arredondados, como o desenho da marca.
const thin = { ...stroke, strokeWidth: 1.25 }

// Sites: janela de navegador com uma onda
export function IconSites({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <g {...thin}>
        <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
        <path d="M3 8.5h18" />
        <path d="M7 15c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0" />
      </g>
    </svg>
  )
}

// Automação: dois pontos ligados por um caminho suave
export function IconAutomacao({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <g {...thin}>
        <circle cx="6" cy="7" r="2.25" />
        <circle cx="18" cy="17" r="2.25" />
        <path d="M8.25 7.2c5.5.3 2 9.6 7.5 9.6" />
      </g>
    </svg>
  )
}

// Fideliza: cartão com carimbos (o último ainda por preencher)
export function IconFideliza({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <g {...thin}>
        <rect x="3" y="6" width="18" height="12" rx="2.5" />
        <circle cx="8" cy="12" r="1.6" />
        <circle cx="12" cy="12" r="1.6" />
        <circle cx="16" cy="12" r="1.6" strokeDasharray="1.2 1.4" />
      </g>
    </svg>
  )
}
