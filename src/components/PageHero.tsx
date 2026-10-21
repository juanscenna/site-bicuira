import { useEffect, useRef, type ReactNode } from 'react'
import type { SiteImage, SiteVideo } from '../content/images'
import Photo from './Photo'
import { WaveEdge } from './Doodles'

// Abertura padrão de todas as páginas: imagem grande ocupando a largura
// da tela, com um elemento centralizado (logo, nome do serviço ou do case).
// Com "video", o vídeo (sem som, em loop) entra no lugar da imagem.
// soft: desfoca e escurece de leve a imagem (prints de projeto atrás da placa)
type Props = { image?: SiteImage; video?: SiteVideo; soft?: boolean; children: ReactNode }

export default function PageHero({ image, video, soft = false, children }: Props) {
  return (
    <section className="relative">
      <div className="relative h-[44svh] min-h-[18rem] overflow-hidden md:h-[70vh] md:max-h-[46rem] md:min-h-[28rem]">
        {/* a foto rola mais devagar que a página (profundidade) */}
        <div data-parallax="0.3" className="absolute inset-x-0 -top-[12%] h-[124%]">
          {video ? (
            <HeroVideo video={video} />
          ) : (
            image && <Photo image={image} priority sizes="100vw" className={`h-full w-full ${soft ? 'scale-105 blur-[3px]' : ''}`} />
          )}
        </div>
        {/* leve escurecimento nas bordas para o elemento central se destacar */}
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(41,42,41,0.35)_100%)]" />
        {soft && <div aria-hidden="true" className="absolute inset-0 bg-restinga/45" />}
        <div className="absolute inset-0 flex items-center justify-center px-4">{children}</div>
      </div>
      {/* onda na base: a próxima seção "sobe" sobre a imagem */}
      <WaveEdge className="absolute -bottom-px left-0 h-8 text-areia sm:h-14" />
    </section>
  )
}

// Placa clara centralizada (usada nas páginas de serviço e de case)
export function HeroPlate({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-w-[90vw] flex-col items-center gap-3 rounded-[2rem] bg-areia/95 px-7 py-6 text-center shadow-[0_10px_40px_-12px_rgba(41,42,41,0.45)] sm:px-10 sm:py-8">
      {children}
    </div>
  )
}

// Vídeo de fundo: começa sozinho, sem som e em loop.
// Com "reduzir movimento" ligado no aparelho, fica parado no primeiro quadro (poster).
function HeroVideo({ video }: { video: SiteVideo }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) el.pause()
    else el.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      poster={video.poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={video.alt}
      className="h-full w-full bg-oceano object-cover"
    >
      {video.webm && <source src={video.webm} type="video/webm" />}
      <source src={video.src} type="video/mp4" />
    </video>
  )
}

// Logo no centro da abertura (home e páginas de serviço), com um halo claro e suave
export function HeroLogo({ src, alt, children }: { src: string; alt: string; children?: ReactNode }) {
  return (
    <div className="relative flex flex-col items-center gap-3">
      <div
        aria-hidden="true"
        className="absolute -inset-x-[30%] -inset-y-[35%] bg-[radial-gradient(closest-side,rgba(242,235,221,0.72),rgba(242,235,221,0.35)_55%,rgba(242,235,221,0)_100%)]"
      />
      <img
        src={src}
        alt={alt}
        width={482}
        height={393}
        fetchPriority="high"
        className="relative w-[min(48vw,18rem)] md:w-[24rem]"
      />
      {children && <div className="relative">{children}</div>}
    </div>
  )
}
