// Elementos gráficos "desenhados à mão" e formas orgânicas da marca.
// Todos são decorativos (aria-hidden) e herdam a cor via "currentColor".

type P = { className?: string; draw?: boolean }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

// Círculo rabiscado em volta de uma palavra
export function ScribbleCircle({ className = '', draw }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 120" preserveAspectRatio="none" className={`${draw ? 'draw' : ''} ${className}`}>
      <path
        {...stroke}
        strokeWidth="4"
        d="M160 10C240 6 294 30 290 62c-4 34-74 52-148 50C66 110 8 92 12 58 16 26 84 8 170 14c32 2 62 10 82 20"
      />
    </svg>
  )
}

// Sublinhado ondulado
export function ScribbleUnderline({ className = '', draw }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className={`${draw ? 'draw' : ''} ${className}`}>
      <path {...stroke} strokeWidth="4" d="M4 16C60 4 110 22 160 12s100-6 136 2" />
    </svg>
  )
}

// Seta curva desenhada
export function ScribbleArrow({ className = '', draw }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 80" className={`${draw ? 'draw' : ''} ${className}`}>
      <path {...stroke} strokeWidth="3.5" d="M6 70C28 24 66 10 106 22" />
      <path {...stroke} strokeWidth="3.5" d="M90 9l17 13-15 15" />
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
export function WaveLine({ className = '', waves = 6 }: { className?: string; waves?: number }) {
  const w = 100
  let d = `M0 20`
  for (let i = 0; i < waves; i++) d += ` q${w / 4} -16 ${w / 2} 0 t${w / 2} 0`
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${waves * w} 40`} preserveAspectRatio="none" className={className}>
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

// ── Ícones dos serviços (mesma família: traço 2.5, cantos arredondados) ──

export function IconSites({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>
      <g {...stroke} strokeWidth="2.5">
        <path d="M6 10c0-2 1-3 3-3h30c2 0 3 1 3 3v24c0 2-1 3-3 3H9c-2 0-3-1-3-3z" />
        <path d="M6 15h36" />
        <circle cx="11" cy="11" r="0.6" />
        <circle cx="15" cy="11" r="0.6" />
        <path d="M12 30c4-4 8-4 12 0s8 4 12 0" />
        <path d="M29 22a4 4 0 1 0 0.1 0" />
      </g>
    </svg>
  )
}

export function IconAutomacao({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>
      <g {...stroke} strokeWidth="2.5">
        <circle cx="11" cy="14" r="5" />
        <circle cx="37" cy="34" r="5" />
        <path d="M16 14c10 0 6 20 16 20" />
        <path d="M28 30l4 4-4 4" />
        <path d="M30 10h10M35 5v10" />
      </g>
    </svg>
  )
}

export function IconFideliza({ className = '' }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>
      <g {...stroke} strokeWidth="2.5">
        <path d="M6 13c0-2 1-3 3-3h30c2 0 3 1 3 3v22c0 2-1 3-3 3H9c-2 0-3-1-3-3z" />
        <circle cx="15" cy="20" r="3.2" />
        <circle cx="24" cy="20" r="3.2" />
        <circle cx="33" cy="20" r="3.2" />
        <circle cx="15" cy="29" r="3.2" />
        <path d="M22 29h12" strokeDasharray="1 4" />
      </g>
    </svg>
  )
}
