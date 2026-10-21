import { useEffect, useRef, type ReactNode } from 'react'
import type { SiteImage, SiteVideo } from '../content/images'
import Photo from './Photo'
import { WaveEdge } from './Doodles'

// Abertura padrão de todas as páginas: imagem grande ocupando a largura
// da tela, com um elemento centralizado (logo, nome do serviço ou do case).
// Com "video", o vídeo (sem som, em loop) entra no lugar da imagem.
type Props = { image?: SiteImage; video?: SiteVideo; children: ReactNode }

export default function PageHero({ image, video, children }: Props) {
  return (
    <section className="relative">
      <div className="relative h-[36svh] min-h-[14rem] overflow-hidden md:h-[70vh] md:max-h-[46rem] md:min-h-[28rem]">
        {/* a foto rola mais devagar que a página (profundidade) */}
        <div data-parallax="0.3" className="absolute inset-x-0 -top-[12%] h-[124%]">
          {video ? (
            <HeroVideo video={video} />
          ) : (
            image && <Photo image={image} priority sizes="100vw" className="h-full w-full" />
          )}
        </div>
        {/* leve escurecimento nas bordas para o elemento central se destacar */}
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(41,42,41,0.35)_100%)]" />
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
