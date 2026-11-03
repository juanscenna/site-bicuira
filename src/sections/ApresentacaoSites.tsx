import { brand } from '../content/images'
import { apresentacaoSites as A } from '../content/apresentacaoSites'
import { WaveLine } from '../components/Doodles'
import { Shot, Slide } from './fideliza/SlideParts'

// Apresentação comercial do Bicuíra Sites, na aba /sites/apresentacao.
// Mesmas peças da apresentação do Fideliza (moldura, rodapé, prints).
// Textos em src/content/apresentacaoSites.ts; prints reais do case em captures.

export default function ApresentacaoSites() {
  const s = A.page.section
  return (
    <section id="apresentacao" aria-labelledby="apresentacao-titulo" className="pb-16 pt-6 md:pb-24 md:pt-10">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tag text-restinga">{s.tag}</p>
          <h1 id="apresentacao-titulo" className="mt-4 text-big text-restinga">
            {s.title}
          </h1>
          <p className="text-body mx-auto mt-4 max-w-xl">{s.note}</p>
        </div>

        <div className="mt-12 space-y-8 md:mt-16 md:space-y-14">
          <Capa />
          <QuemSomos />
          <CaseDestaque />
          <Galeria />
          <AntesDepois />
          <Entrega />
          <Pratica />
          <Reserva />
          <Criacao />
          <Investimento />
          <Condicoes />
        </div>
      </div>
    </section>
  )
}

// Marcador redondo em lima (listas)
function Dot({ className = 'bg-lima' }: { className?: string }) {
  return <span aria-hidden="true" className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${className}`} />
}

// Anéis decorativos no estilo do Fideliza
function Ring({ className }: { className: string }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute rounded-full border-[3px] border-lima/35 ${className}`} />
}

// 01 · Capa
function Capa() {
  const c = A.capa
  return (
    <Slide n={1} dark bare>
      <div className="relative flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 lg:px-[7%] lg:py-20">
        <Ring className="-right-24 -top-24 h-80 w-80" />
        <Ring className="-bottom-16 right-32 h-44 w-44" />
        <img src={brand.simboloAreia} alt="Bicuíra Digital" width={411} height={215} className="h-auto w-24 sm:w-32" />
        <p className="tag mt-8 text-lima">{c.tag}</p>
        <p className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-areia">{c.title}</p>
        <WaveLine className="mt-5 h-4 w-40 text-lima" waves={3} />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-areia/90 sm:text-xl">{c.text}</p>
      </div>
    </Slide>
  )
}

// 02 · Quem é a Bicuíra
function QuemSomos() {
  const c = A.quemSomos
  const tone = { sol: 'bg-sol text-areia', oceano: 'bg-oceano text-areia', lima: 'bg-lima text-restinga' }
  return (
    <Slide n={2} tag={c.tag} title={c.title}>
      <p className="max-w-3xl text-lg leading-relaxed sm:text-2xl">{c.text}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {c.pills.map((p) => (
          <li key={p.label} className={`rounded-full px-6 py-3 font-display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-none ${tone[p.tone]}`}>
            {p.label}
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// 03 · Case em destaque: computador + celular sobrepostos
function CaseDestaque() {
  const c = A.caseDestaque
  return (
    <Slide n={3} dark tag={c.tag} title={c.title}>
      <div className="relative mx-auto w-full max-w-4xl pb-6 sm:pb-10">
        <div className="w-[82%] -rotate-2">
          <Shot image={c.pc} frame="pc" sizes="(min-width: 1024px) 50vw, 80vw" />
        </div>
        <div className="absolute bottom-0 right-0 w-[24%] rotate-3">
          <Shot image={c.phone} frame="phone" sizes="(min-width: 1024px) 14vw, 24vw" />
        </div>
      </div>
      <a
        href={c.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-lima px-7 py-3 text-base font-bold text-restinga transition-colors hover:bg-areia"
      >
        {c.link.label} <span aria-hidden="true">→</span>
      </a>
    </Slide>
  )
}

// 04 · Galeria: três prints reais do site
function Galeria() {
  const c = A.galeria
  return (
    <Slide n={4} dark tag={c.tag} title={c.title}>
      <ul className="grid gap-5 sm:grid-cols-3">
        {c.shots.map((s) => (
          <li key={s.label}>
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-[5px] border-carvao bg-carvao">
                <img
                  src={s.image.src}
                  srcSet={s.image.srcSet}
                  sizes="(min-width: 640px) 30vw, 100vw"
                  alt={s.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-sm font-semibold text-areia/90">{s.label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// 05 · Antes e depois (texto, sem telas ilustrativas)
function AntesDepois() {
  const c = A.antesDepois
  return (
    <Slide n={5} tag={c.tag} title={c.title}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[1.25rem] border-2 border-dashed border-carvao bg-white/60 p-7">
          <p className="font-display text-4xl text-carvao">{c.before.title}</p>
          <p className="mt-3 text-base leading-relaxed sm:text-lg">{c.before.text}</p>
        </div>
        <div className="on-dark rounded-[1.25rem] bg-restinga p-7 text-areia">
          <p className="font-display text-4xl text-lima">{c.after.title}</p>
          <p className="mt-3 text-base leading-relaxed sm:text-lg">{c.after.text}</p>
        </div>
      </div>
    </Slide>
  )
}

// 06 · O que entregamos
function Entrega() {
  const c = A.entrega
  return (
    <Slide n={6} dark tag={c.tag} title={c.title}>
      <p className="max-w-3xl text-lg leading-relaxed text-areia/90 sm:text-xl">{c.text}</p>
      <ul className="mt-6 grid max-w-3xl gap-1">
        {c.items.map((it) => (
          <li key={it} className="flex gap-3 border-t border-areia/20 py-3 text-base sm:text-lg">
            <Dot />
            {it}
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// 07 · Na prática: três passos até o WhatsApp
function Pratica() {
  const c = A.pratica
  return (
    <Slide n={7} tag={c.tag} title={c.title}>
      <ol className="grid gap-4 md:grid-cols-3">
        {c.steps.map((st, i) => {
          const last = i === c.steps.length - 1
          return (
            <li
              key={st}
              className={`rounded-[1.25rem] border-2 p-6 ${last ? 'border-lima bg-lima text-restinga' : 'border-restinga bg-white/60'}`}
            >
              <span className={`font-display text-5xl leading-none ${last ? 'text-restinga' : 'text-sol'}`}>{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-3 text-base leading-relaxed sm:text-lg">{st}</p>
            </li>
          )
        })}
      </ol>
    </Slide>
  )
}

// 08 · O site não faz reserva
function Reserva() {
  const c = A.reserva
  return (
    <Slide n={8} dark tag={c.tag}>
      <p className="font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.92] text-areia">{c.title}</p>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-2xl">{c.text}</p>
      <p className="mt-6 max-w-3xl text-base text-areia/90">{c.note}</p>
    </Slide>
  )
}

// 09 · Como criamos
function Criacao() {
  const c = A.criacao
  return (
    <Slide n={9} tag={c.tag} title={c.title}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.steps.map((st, i) => (
          <li key={st} className="on-dark flex flex-col justify-between gap-6 rounded-[1.25rem] bg-restinga p-6 text-areia">
            <span className="font-display text-6xl leading-none text-lima">{String(i + 1).padStart(2, '0')}</span>
            <p className="text-base leading-relaxed">{st}</p>
          </li>
        ))}
      </ol>
    </Slide>
  )
}

// 10 · Investimento
function Investimento() {
  const c = A.investimento
  return (
    <Slide n={10} dark tag={c.tag}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-lima">{c.price}</p>
          <p className="mt-3 text-lg sm:text-2xl">{c.priceNote}</p>
          <p className="mt-6 text-base sm:text-lg">
            <strong className="text-lima">{c.monthly}</strong> {c.monthlyNote}
          </p>
        </div>
        <div className="rounded-[1.5rem] border-2 border-areia/25 p-7">
          <p className="tag text-lima">{c.boxTitle}</p>
          <ul className="mt-4 grid gap-1">
            {c.items.map((it) => (
              <li key={it} className="flex gap-3 border-t border-areia/20 py-3 text-base sm:text-lg">
                <Dot />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  )
}

// 11 · Entregável e condições
function Condicoes() {
  const c = A.condicoes
  const card = 'rounded-[1.25rem] border-2 border-restinga bg-white/60 p-6'
  const head = 'font-display text-2xl leading-tight text-restinga'
  const big = 'mt-2 whitespace-nowrap font-display text-[clamp(2rem,3vw,2.6rem)] leading-none text-sol'
  return (
    <Slide n={11} tag={c.tag} title={c.title}>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className={`${card} lg:row-span-2`}>
          <p className={head}>{c.entregavel.title}</p>
          <ul className="mt-3 grid gap-2">
            {c.entregavel.items.map((it) => (
              <li key={it} className="flex gap-3 text-base leading-snug">
                <Dot />
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-restinga">{c.entregavel.note}</p>
        </div>
        <div className={card}>
          <p className={head}>{c.prazo.title}</p>
          <p className={big}>{c.prazo.big}</p>
          <p className="mt-2 text-base">{c.prazo.text}</p>
        </div>
        <div className={card}>
          <p className={head}>{c.pagamento.title}</p>
          <p className={big}>{c.pagamento.big}</p>
          <p className="mt-2 text-base">{c.pagamento.text}</p>
        </div>
        <div className="on-dark rounded-[1.25rem] bg-restinga p-6 text-areia lg:col-span-2">
          <p className="font-display text-2xl leading-tight text-lima">{c.mensalidade.title}</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-6">
            {c.mensalidade.items.map((it) => (
              <li key={it} className="flex gap-3 text-base leading-snug">
                <Dot />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  )
}
