import { useState } from 'react'
import type { SiteImage } from '../content/images'
import { WaveShape } from './Doodles'
import CaptureArt from './CaptureArt'

type Props = {
  image: SiteImage
  className?: string // tamanho/proporção do bloco (ex.: 'aspect-[4/5]')
  fit?: 'cover' | 'contain'
  priority?: boolean // true só na imagem principal do topo da página
  sizes?: string // largura que a imagem ocupa na tela (ajuda a escolher o tamanho certo)
}

// Imagem padrão do site.
// - ocupa todo o bloco (cover) ou aparece inteira (contain)
// - carrega só quando chega perto da tela (lazy), exceto se priority
// - enquanto carrega (ou se falhar), aparece um fundo da marca, nunca um bloco vazio
export default function Photo({ image, className = '', fit = 'cover', priority = false, sizes = '100vw' }: Props) {
  const [failed, setFailed] = useState(false)

  // Espaço de captura ainda sem arquivo → composição da marca
  if (!image.src) return <CaptureArt image={image} className={className} />

  return (
    <div className={`relative overflow-hidden bg-oceano ${className}`}>
      {/* fundo da marca: aparece enquanto a foto carrega */}
      <div aria-hidden="true" className="absolute inset-0">
        <WaveShape className="absolute bottom-[18%] left-[-10%] w-[120%] text-restinga/50" />
        <WaveShape className="absolute bottom-[4%] left-[-20%] w-[120%] text-areia/25" />
      </div>
      {failed ? (
        <span role="img" aria-label={image.alt} className="absolute inset-0" />
      ) : (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.srcSet ? sizes : undefined}
          alt={image.alt}
          width={1600}
          height={1067}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`photo-img relative h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
          style={{ objectPosition: image.position ?? 'center' }}
        />
      )}
    </div>
  )
}
