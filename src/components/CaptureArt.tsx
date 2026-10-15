import { captureSoonLabel, type CaptureTone, type SiteImage } from '../content/images'

// Composição da marca (morro, sol, onda) usada nos espaços de captura
// enquanto não há a captura real. Não imita nenhuma tela dos sistemas.
const palette: Record<CaptureTone, { bg: string; hill: string; sun: string; wave: string; lines: string }> = {
  restinga: { bg: '#25433D', hill: '#4E889A', sun: '#C35E2F', wave: '#B4CD64', lines: '#F2EBDD' },
  oceano: { bg: '#4E889A', hill: '#25433D', sun: '#C35E2F', wave: '#F2EBDD', lines: '#F2EBDD' },
  sol: { bg: '#C35E2F', hill: '#25433D', sun: '#F2EBDD', wave: '#4E889A', lines: '#292A29' },
  areia: { bg: '#F2EBDD', hill: '#25433D', sun: '#C35E2F', wave: '#4E889A', lines: '#292A29' },
  lima: { bg: '#B4CD64', hill: '#25433D', sun: '#C35E2F', wave: '#4E889A', lines: '#292A29' },
}

export default function CaptureArt({ image, className = '' }: { image: SiteImage; className?: string }) {
  const c = palette[image.tone ?? 'oceano']
  return (
    <div role="img" aria-label={`${image.alt} — ${captureSoonLabel.toLowerCase()}`} className={`capture relative overflow-hidden ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMax slice"
        className="photo-img absolute inset-0 h-full w-full"
      >
        <rect width="400" height="300" fill={c.bg} />
        {/* Areia sobre Areia some: escurece levemente com Restinga a 8% */}
        {image.tone === 'areia' && <rect width="400" height="300" fill="#25433D" fillOpacity="0.08" />}
        {/* linhas-guia discretas, como um caderno de layout */}
        <g stroke={c.lines} strokeOpacity="0.14" strokeWidth="1">
          {[60, 120, 180, 240, 300, 360].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="300" />
          ))}
          {[50, 100, 150].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} />
          ))}
        </g>
        <path fill={c.sun} d="M262 58c26 1 44 20 44 46 0 25-19 46-46 46s-46-20-46-46c1-28 22-47 48-46z" />
        <path fill={c.hill} d="M-20 300C10 236 92 140 190 142c80 2 122 70 174 104 18 12 40 30 56 54z" />
        <path
          fill={c.wave}
          d="M-10 262c42-26 102-32 162-16s120 26 170 10c24-8 56-18 70-10 10 8-12 26-44 34-60 16-120 4-176-10s-104-8-144 8c-18 6-56-4-38-16z"
        />
      </svg>
      <span aria-hidden="true" className="capture-chip absolute bottom-3 left-3 whitespace-nowrap rounded-full bg-areia px-3 py-1 text-[0.8rem] font-semibold text-carvao">
        {captureSoonLabel}
      </span>
    </div>
  )
}
