import { Fragment, type ReactNode } from 'react'
import type { SlideTitle as Title } from '../../content/apresentacao'
import type { SiteImage } from '../../content/images'
import { brand } from '../../content/images'
import Reveal from '../../components/Reveal'

// Peças comuns dos slides da apresentação do Fideliza.

// Texto com marcação simples: **negrito** e ~~riscado~~
export function Rich({ text, strongClass = '' }: { text: string; strongClass?: string }) {
  const parts = text.split(/(\*\*.+?\*\*|~~.+?~~)/g)
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('**')) return <strong key={i} className={strongClass}>{p.slice(2, -2)}</strong>
        if (p.startsWith('~~')) return <s key={i}>{p.slice(2, -2)}</s>
        return <Fragment key={i}>{p}</Fragment>
      })}
    </>
  )
}

const tone = { sol: 'text-sol', lima: 'text-lima', oceano: 'text-oceano' }

export function SlideTitle({ title, className = '' }: { title: Title; className?: string }) {
  return (
    <h3 className={`font-display text-[clamp(1.75rem,3.1vw,2.6rem)] leading-[1.02] ${className}`}>
      {title.text}
      {title.highlight && <span className={title.color ? tone[title.color] : ''}>{title.highlight}</span>}
      {title.after}
    </h3>
  )
}

// Moldura de um slide: proporção de A4 deitado no desktop, bloco livre no celular.
// Cabeçalho (etiqueta + título), corpo e rodapé com o símbolo da marca e o número.
export function Slide({
  n,
  dark = false,
  tag,
  title,
  footnote,
  children,
  bare = false,
  className = '',
}: {
  n: number
  dark?: boolean
  tag?: string
  title?: Title
  footnote?: string
  children: ReactNode
  bare?: boolean // sem cabeçalho/rodapé (capa, case e contato)
  className?: string
}) {
  const base = dark ? 'on-dark bg-restinga text-areia' : 'border-2 border-restinga/15 bg-areia text-carvao'
  return (
    <Reveal mode="visible">
      <article
        aria-label={`Slide ${String(n).padStart(2, '0')}`}
        className={`slide mx-auto flex w-full flex-col overflow-hidden rounded-[1.75rem] lg:aspect-[297/210] lg:w-[min(100%,calc(84vh*1.414))] ${base} ${
          bare ? '' : 'px-5 pt-8 sm:px-10 lg:px-[5.5%] lg:pt-[4%]'
        } ${className}`}
      >
        {bare ? (
          children
        ) : (
          <>
            <header>
              {tag && <p className={`tag ${dark ? 'text-lima' : 'text-restinga'}`}>{tag}</p>}
              {title && <SlideTitle title={title} className={`mt-3 ${dark ? 'text-areia' : 'text-restinga'}`} />}
            </header>
            <div className="flex flex-1 flex-col justify-center py-8 lg:py-[3%]">{children}</div>
            <SlideFooter n={n} dark={dark} note={footnote} />
          </>
        )}
      </article>
    </Reveal>
  )
}

export function SlideFooter({ n, dark = false, note }: { n: number; dark?: boolean; note?: string }) {
  return (
    <footer
      className={`flex min-h-[3.5rem] items-center gap-4 border-t py-3 ${dark ? 'border-areia/20' : 'border-restinga/15'}`}
    >
      <img src={dark ? brand.simboloAreia : brand.simbolo} alt="" aria-hidden="true" className="h-6 w-auto shrink-0" />
      {note && <p className={`text-[0.75rem] leading-snug ${dark ? 'text-areia/90' : 'text-carvao'}`}>{note}</p>}
      <span aria-hidden="true" className={`ml-auto text-[0.75rem] font-semibold ${dark ? 'text-areia' : 'text-restinga'}`}>
        {String(n).padStart(2, '0')}
      </span>
    </footer>
  )
}

// Print do sistema numa moldura de celular ou computador (sem sombra)
export function Shot({
  image,
  frame,
  label,
  demoLabel,
  border = 'border-carvao',
  labelClass = '',
  sizes,
}: {
  image: SiteImage
  frame: 'phone' | 'pc'
  label?: string
  demoLabel?: string // "Dados fictícios de demonstração" nos prints com dados
  border?: string
  labelClass?: string
  sizes?: string
}) {
  const img = (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes ?? (frame === 'phone' ? '(min-width: 1024px) 14vw, 45vw' : '(min-width: 1024px) 45vw, 100vw')}
      alt={image.alt}
      width={frame === 'phone' ? 780 : 1600}
      height={frame === 'phone' ? 1328 : 1000}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full"
    />
  )
  return (
    <figure>
      {frame === 'phone' ? (
        <div className={`overflow-hidden rounded-[1.4rem] border-[5px] bg-carvao ${border}`}>{img}</div>
      ) : (
        <div className={`overflow-hidden rounded-lg border-[5px] bg-carvao ${border}`}>
          <div aria-hidden="true" className="flex h-3 items-center gap-1 px-1">
            <span className="h-1.5 w-1.5 rounded-full bg-areia/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-areia/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-areia/40" />
          </div>
          {img}
        </div>
      )}
      {(label || demoLabel) && (
        <figcaption className={`mt-2 text-center text-[0.75rem] font-semibold leading-snug ${labelClass}`}>
          {label}
          {label && demoLabel && <br />}
          {demoLabel && <span className="font-normal">{demoLabel}</span>}
        </figcaption>
      )}
    </figure>
  )
}
