import type { SiteImage } from '../content/images'
import Photo from './Photo'

// Molduras para mostrar capturas dos projetos.
// Enquanto não houver capturas reais, mostram uma foto ilustrativa
// (marcada como isPlaceholder em images.ts) — nunca uma tela falsa.

type Props = { image: SiteImage; className?: string; tone?: 'light' | 'dark' }

export function BrowserFrame({ image, className = '', tone = 'light' }: Props) {
  const bar = tone === 'light' ? 'bg-areia border-carvao/15' : 'bg-carvao border-areia/10'
  const dot = tone === 'light' ? 'bg-carvao/25' : 'bg-areia/30'
  return (
    <div className={`overflow-hidden rounded-xl border-2 border-carvao/80 bg-areia ${className}`}>
      <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${bar}`}>
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`ml-3 h-2.5 w-1/3 rounded-full ${dot}`} />
      </div>
      <Photo image={image} className="aspect-[16/10]" />
    </div>
  )
}

export function PhoneFrame({ image, className = '' }: Props) {
  return (
    <div className={`rounded-[2rem] border-[3px] border-carvao bg-carvao p-1.5 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <span className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-carvao" />
        <Photo image={image} className="aspect-[9/19]" />
      </div>
    </div>
  )
}

export function Framed({ image, frame, className = '' }: Props & { frame: 'browser' | 'phone' | 'plain' }) {
  if (frame === 'browser') return <BrowserFrame image={image} className={className} />
  if (frame === 'phone') return <PhoneFrame image={image} className={className} />
  return <Photo image={image} className={`aspect-[4/5] rounded-lg ${className}`} />
}
