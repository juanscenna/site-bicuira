import type { ReactNode } from 'react'
import type { SiteImage } from '../content/images'
import Photo from './Photo'
import { WaveEdge } from './Doodles'

// Abertura padrão de todas as páginas: imagem grande ocupando a largura
// da tela, com um elemento centralizado (logo, nome do serviço ou do case).
// Para trocar por vídeo no futuro, basta adaptar este componente.
export default function PageHero({ image, children }: { image: SiteImage; children: ReactNode }) {
  return (
    <section className="relative">
      <div className="relative h-[36svh] min-h-[14rem] overflow-hidden md:h-[70vh] md:max-h-[46rem] md:min-h-[28rem]">
        {/* a foto rola mais devagar que a página (profundidade) */}
        <div data-parallax="0.3" className="absolute inset-x-0 -top-[12%] h-[124%]">
          <Photo image={image} priority sizes="100vw" className="h-full w-full" />
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
