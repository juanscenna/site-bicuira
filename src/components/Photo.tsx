import { useState } from 'react'
import type { SiteImage } from '../content/images'
import { WaveShape } from './Doodles'

type Props = {
  image: SiteImage
  className?: string // tamanho/proporção do bloco (ex.: 'aspect-[4/5]')
  fit?: 'cover' | 'contain'
  priority?: boolean // true só na imagem principal do topo da página
}

// Imagem padrão do site.
// - ocupa todo o bloco (cover) ou aparece inteira (contain)
// - carrega só quando chega perto da tela (lazy), exceto se priority
// - se a imagem não carregar, mostra um bloco da marca no lugar
export default function Photo({ image, className = '', fit = 'cover', priority = false }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div role="img" aria-label={image.alt} className={`relative overflow-hidden bg-oceano ${className}`}>
        <WaveShape className="absolute bottom-[18%] left-[-10%] w-[120%] text-restinga/60" />
        <WaveShape className="absolute bottom-[6%] left-[-20%] w-[120%] text-areia/30" />
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-restinga/10 ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
        style={{ objectPosition: image.position ?? 'center' }}
      />
    </div>
  )
}
