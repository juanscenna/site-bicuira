import { brand } from '../content/images'
import { apresentacao as A } from '../content/apresentacao'
import { inDevelopmentLabel } from '../content/services'
import LoyaltyCard from '../components/LoyaltyCard'
import { WaveLine } from '../components/Doodles'
import { Icon, IconBadge } from './fideliza/Icons'
import { Rich, Shot, Slide, SlideFooter, SlideTitle } from './fideliza/SlideParts'

// Apresentação comercial do Bicuíra Fideliza, dentro da página /fideliza.
// Um slide por vez (A4 deitado no desktop, blocos empilhados no celular).
// Textos em src/content/apresentacao.ts; prints em src/content/images.ts (captures).
const demo = 'Dados fictícios de demonstração'

export default function ApresentacaoFideliza() {
  const s = A.section
  return (
    <section id="apresentacao" aria-labelledby="apresentacao-titulo" className="pb-16 pt-6 md:pb-24 md:pt-10">
      <div className="wrap">
        {/* Cabeçalho da seção: selo de desenvolvimento + download do PDF */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto w-fit rounded-full bg-carvao px-3 py-1 text-[0.8125rem] font-bold uppercase tracking-wide text-areia">
            {inDevelopmentLabel}
          </p>
          <p className="tag mt-6 text-restinga">{s.tag}</p>
          <h1 id="apresentacao-titulo" className="mt-4 text-big text-restinga">
            {s.title}
          </h1>
          <p className="text-body mx-auto mt-4 max-w-xl">{s.note}</p>
          <a
            href={s.pdf}
            download
            className="group mt-7 inline-flex min-h-[48px] items-center gap-3 rounded-full border-2 border-carvao px-6 py-3 text-sm font-semibold text-carvao transition-colors hover:bg-carvao hover:text-areia"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
            </svg>
            {s.download}
            <span className="font-normal opacity-80">({s.downloadInfo})</span>
          </a>
        </div>

        <div className="mt-12 space-y-8 md:mt-16 md:space-y-14">
          <Capa />
          <QuemSomos />
          <Problema />
          <PorQue />
          <ComoFunciona />
          <ParaCliente />
          <ParaDono />
          <Metricas />
          <CaseRosaNorte />
          <Negocios />
          <Planos />
          <Piloto />
          <Implantacao />
          <Contato />
        </div>
      </div>
    </section>
  )
}

// 01 · Capa — com o cartão animado (selos sendo carimbados)
function Capa() {
  const c = A.capa
  return (
    <Slide n={1} dark bare>
      <div className="grid flex-1 items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.25fr_1fr] lg:px-[6%]">
        <div>
          <img src={brand.selo} alt="Bicuíra Digital" width={283} height={283} className="w-20 rounded-full bg-areia p-1 sm:w-24" />
          <p className="mt-7 font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] text-areia">
            {c.title[0]}
            <br />
            <span className="text-lima">{c.title[1]}</span>
          </p>
          <p className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.9rem)] leading-tight">{c.tagline}</p>
          <WaveLine className="mt-4 h-4 w-40 text-lima" waves={3} />
          <p className="mt-6 max-w-md text-base leading-relaxed text-areia/90 sm:text-lg">{c.text}</p>
        </div>
        <div className="flex justify-center">
          <LoyaltyCard {...c.card} />
        </div>
      </div>
    </Slide>
  )
}

// 02 · Quem somos
function QuemSomos() {
  const c = A.quemSomos
  return (
    <Slide n={2} tag={c.tag} title={c.title}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed">
            <Rich text={c.text} />
          </p>
          <ul className="mt-8 grid gap-4">
            {c.items.map((it) => (
              <li key={it.text}>
                <div className="flex items-center gap-4">
                  <IconBadge name={it.icon} size="sm" />
                  <span>{it.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img src={brand.principal} alt="Bicuíra Digital" width={482} height={393} loading="lazy" className="w-56 sm:w-72 lg:w-full lg:max-w-[22rem]" />
        </div>
      </div>
    </Slide>
  )
}

// 03 · O problema
function Problema() {
  const c = A.problema
  return (
    <Slide n={3} tag={c.tag} title={c.title}>
      <ul className="grid gap-5 lg:grid-cols-3">
        {c.cards.map((card) => (
          <li key={card.title}>
            <div className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-[1.25rem] bg-restinga/[0.07] p-6">
                <IconBadge name={card.icon} />
                <h4 className="font-display text-xl leading-tight text-restinga">{card.title}</h4>
                <p className="leading-relaxed">{card.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// 04 · Por que fidelizar — números contam do zero ao valor
function PorQue() {
  const c = A.porQue
  return (
    <Slide n={4} dark tag={c.tag} title={c.title} footnote={c.footnote}>
      <ul className="grid gap-5 lg:grid-cols-3">
        {c.stats.map((st) => (
          <li key={st.value}>
            <div className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-[1.25rem] border-2 border-lima p-6">
                <p className="whitespace-nowrap font-display text-[clamp(2.6rem,4.4vw,3.6rem)] leading-none text-lima">
                  {st.value}
                </p>
                <p className="leading-relaxed">
                  <Rich text={st.text} />
                </p>
                <p className="mt-auto text-[0.8125rem] text-areia/90">{st.source}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-lg">
        <Rich text={c.closing} strongClass="text-lima" />
      </p>
    </Slide>
  )
}

// 05 · Como funciona — passos em sequência ligados por uma linha que se desenha
function ComoFunciona() {
  const c = A.comoFunciona
  return (
    <Slide n={5} tag={c.tag} title={c.title}>
      <div className="relative">
        {/* linha que liga os passos: horizontal no desktop, vertical no celular */}
        <div className="absolute left-[10%] right-[10%] top-6 hidden lg:block">
          <WaveLine className="h-3 w-full text-oceano" waves={6} />
        </div>
        <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-[2px] bg-oceano lg:hidden" />
        <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-5 lg:text-center">
          {c.steps.map((st, i) => (
            <li key={st.title}>
              <div className="flex gap-4 lg:flex-col lg:items-center lg:gap-0">
                <IconBadge name={st.icon} accent={i === c.steps.length - 1} />
                <div>
                  <p className={`text-[0.8125rem] font-bold uppercase tracking-wider lg:mt-4 ${i === c.steps.length - 1 ? 'text-carvao' : 'text-restinga'}`}>
                    {c.stepLabel} {i + 1}
                  </p>
                  <h4 className="mt-1 font-display text-xl leading-tight text-restinga">{st.title}</h4>
                  <p className="mt-1 text-[0.9375rem] leading-snug">{st.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <p className="on-dark mt-8 flex items-center justify-center gap-4 rounded-[1.25rem] bg-restinga px-6 py-4 text-areia">
          <IconBadge name="repeat" dark size="sm" />
          <span>
            <Rich text={c.banner} strongClass="text-lima" />
          </span>
        </p>
      </div>
    </Slide>
  )
}

// 06 · Para o cliente — prints entram pela lateral
function ParaCliente() {
  const c = A.paraCliente
  return (
    <Slide n={6} dark tag={c.tag} title={c.title}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <ul className="grid gap-4">
            {c.items.map((it) => (
              <li key={it.text}>
                <div className="flex items-center gap-4">
                  <IconBadge name={it.icon} dark size="sm" />
                  <span>{it.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.8125rem] text-areia/90">{c.footnote}</p>
        </div>
        <div className="flex justify-center gap-5">
          {c.shots.map((sh, i) => (
            <div key={sh.label} className="w-[44%] max-w-[12rem]">
              <Shot image={sh.image} frame="phone" label={sh.label} demoLabel={i === 1 ? demo : undefined} />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}

// 07 · Para o dono
function ParaDono() {
  const c = A.paraDono
  return (
    <Slide n={7} tag={c.tag} title={c.title}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <Shot image={c.shot} frame="pc" demoLabel={demo} />
        </div>
        <ItemList items={c.items} />
      </div>
    </Slide>
  )
}

// 08 · Métricas
function Metricas() {
  const c = A.metricas
  return (
    <Slide n={8} tag={c.tag} title={c.title} footnote={c.footnote}>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">
        <div className="order-2 lg:order-1">
          <ItemList items={c.items} />
        </div>
        <div className="order-1 lg:order-2">
          <Shot image={c.shot} frame="pc" demoLabel={demo} />
        </div>
      </div>
    </Slide>
  )
}

function ItemList({ items }: { items: { icon: Parameters<typeof IconBadge>[0]['name']; title: string; text: string }[] }) {
  return (
    <ul className="grid gap-5">
      {items.map((it) => (
        <li key={it.title}>
          <div className="flex items-start gap-4">
            <IconBadge name={it.icon} size="sm" />
            <div>
              <h4 className="font-display text-lg leading-tight text-restinga">{it.title}</h4>
              <p className="text-[0.9375rem] leading-snug">{it.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

// 09 · Case Rosa Norte — identidade do cliente (preto, rosa, amarelo e Montserrat 900)
const rosa = { pink: '#E8115A', yellow: '#F2B315', black: '#0A0A0A', cream: '#F3EEE5' }
const rosaFont = "font-['RosaNorte'] font-black uppercase"

function CaseRosaNorte() {
  const c = A.caseRosa
  return (
    <Slide n={9} bare>
      <div style={{ background: rosa.black, color: rosa.cream }} className="flex flex-1 flex-col">
        <div className="flex flex-col gap-5 px-6 pt-8 sm:flex-row sm:items-center sm:px-10 lg:px-[5.5%] lg:pt-[3.5%]">
          <img
            src={c.logo.src}
            alt={c.logo.alt}
            width={512}
            height={512}
            loading="lazy"
            className="h-24 w-24 shrink-0 rounded-full border-[5px]"
            style={{ borderColor: rosa.pink }}
          />
          <div>
            <span className={`inline-block rounded-md px-3 py-1 text-[0.75rem] tracking-[0.08em] ${rosaFont}`} style={{ background: rosa.pink, color: '#FFFFFF' }}>
              {c.sticker}
            </span>
            <h3 className={`mt-3 text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[0.95] ${rosaFont}`}>
              {c.title.text}
              <span style={{ color: rosa.pink }}>{c.title.highlight}</span>
            </h3>
            <p className="mt-2 font-semibold">{c.text}</p>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-6 px-6 py-8 sm:px-10 lg:grid-cols-[repeat(2,minmax(0,0.9fr))_minmax(0,2fr)_minmax(0,1.1fr)] lg:px-[5.5%]">
          <div className="grid grid-cols-2 gap-5 lg:contents">
            {c.shots
              .filter((sh) => sh.frame === 'phone')
              .map((sh) => (
                <div key={sh.label}>
                  <Shot
                    image={sh.image}
                    frame="phone"
                    label={sh.label}
                    demoLabel={sh.demo ? demo : undefined}
                    border="border-[#E8115A]"
                    labelClass={`!font-['RosaNorte'] uppercase text-[#F2B315]`}
                  />
                </div>
              ))}
          </div>
          {c.shots
            .filter((sh) => sh.frame === 'pc')
            .map((sh) => (
              <div key={sh.label}>
                <Shot image={sh.image} frame="pc" label={sh.label} demoLabel={demo} border="border-[#E8115A]" labelClass={`!font-['RosaNorte'] uppercase text-[#F2B315]`} />
              </div>
            ))}
          <div className="grid gap-4">
            <div className="rounded-[1.1rem] p-5" style={{ background: rosa.yellow, color: rosa.black }}>
              <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.12em]">{c.numbers.label}</p>
              <p className={`mt-2 text-xl leading-none ${rosaFont}`}>{c.numbers.text}</p>
            </div>
            <div className="rounded-[1.1rem] p-5" style={{ background: rosa.pink, color: '#FFFFFF' }}>
              <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.12em]">{c.testimonial.label}</p>
              <p className="mt-2 italic">{c.testimonial.text}</p>
            </div>
            <ul className="rounded-[1.1rem] border p-4 text-[0.8125rem] leading-relaxed" style={{ borderColor: 'rgba(243,238,229,.35)' }}>
              {c.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* faixa como na identidade deles */}
        <div aria-hidden="true" className="overflow-hidden py-3" style={{ background: rosa.yellow }}>
          <div className="flex w-max gap-5 whitespace-nowrap">
            {[...c.strip, ...c.strip].map((t, i) => (
              <span key={i} className="flex items-center gap-5">
                <span className={`text-sm ${rosaFont}`} style={{ color: rosa.black }}>
                  {t}
                </span>
                <span style={{ color: rosa.pink }}>●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}

// 10 · Para cada negócio
function Negocios() {
  const c = A.negocios
  return (
    <Slide n={10} tag={c.tag} title={c.title} footnote={c.footnote}>
      <ul className="grid gap-5 lg:grid-cols-3">
        {c.cards.map((card) => (
          <li key={card.name}>
            <div className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-[1.25rem] bg-restinga/[0.07] p-6">
                <div className="flex items-center gap-3">
                  <IconBadge name={card.icon} />
                  <p className="font-display text-2xl text-restinga">{card.name}</p>
                </div>
                <div aria-hidden="true" className="grid w-fit grid-cols-5 gap-2 py-2">
                  {Array.from({ length: card.goal }).map((_, k) => (
                    <span key={k} className={`h-7 w-7 rounded-full ${k < card.filled ? 'bg-lima' : 'border-2 border-dashed border-oceano'}`} />
                  ))}
                </div>
                <h4 className="font-display text-lg leading-tight text-restinga">{card.rule}</h4>
                <p className="text-[0.9375rem] leading-snug">{card.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// 11 · Planos — o Profissional é o destaque
function Planos() {
  const c = A.planos
  return (
    <Slide n={11} tag={c.tag} title={c.title} footnote={c.footnote}>
      <ul className="grid items-stretch gap-5 lg:grid-cols-3">
        {c.plans.map((p) => (
          <li key={p.name}>
            <div className="h-full">
              <div
                className={`flex h-full flex-col rounded-[1.25rem] p-6 ${
                  p.featured ? 'on-dark bg-restinga text-areia outline outline-4 outline-lima' : 'bg-restinga/[0.07] text-carvao'
                }`}
              >
                <p className={`h-5 text-[0.75rem] font-bold uppercase tracking-[0.12em] ${p.featured ? 'text-lima' : ''}`}>
                  {p.featured ? c.recommended : ''}
                </p>
                <h4 className={`font-display text-2xl ${p.featured ? 'text-lima' : 'text-restinga'}`}>{p.name}</h4>
                <p className="mt-1 font-display text-4xl leading-none">
                  R$ {p.price}
                  <span className="font-sans text-[0.8125rem] font-semibold">{c.perMonth}</span>
                </p>
                <p className="mt-2 text-[0.8125rem] leading-snug">
                  {c.perStamp}
                  <br />
                  {c.setup(p.setup)}
                </p>
                <ul className={`mt-4 grid gap-2 border-t pt-4 ${p.featured ? 'border-areia/20' : 'border-restinga/15'}`}>
                  {p.items.map((it, k) => (
                    <li key={it} className={`flex gap-2 text-[0.8125rem] leading-snug ${k === 0 && p.name !== 'Essencial' ? 'font-bold' : ''}`}>
                      <Icon name="check" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${p.featured ? 'text-lima' : 'text-restinga'}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// Junta cada sinal (÷ = <) com o bloco que vem depois dele
type ContaItem = (typeof A.piloto.conta)[number]
function pairs(items: ContaItem[]) {
  const out: [string | undefined, ContaItem][] = []
  let op: string | undefined
  for (const it of items) {
    if (it.op) op = it.op
    else {
      out.push([op, it])
      op = undefined
    }
  }
  return out
}

// 12 · Piloto — a conta R$ 99 ÷ 30 = R$ 3,30, com o R$ 3,30 em lima
function Piloto() {
  const c = A.piloto
  return (
    <Slide n={12} dark tag={c.tag} title={c.title} footnote={c.footnote}>
      {/* cada sinal fica junto do bloco seguinte, para a conta não quebrar no meio */}
      <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:gap-x-4">
        {pairs(c.conta).map(([op, b], i) => (
          <li key={i} className="flex items-center gap-3 sm:gap-4">
            {op && (
              <span aria-hidden="true" className="font-display text-3xl text-lima sm:text-4xl">
                {op}
              </span>
            )}
            <div
              className={`rounded-[1.1rem] border-2 px-3 py-3 text-center sm:min-w-[9rem] sm:px-5 sm:py-4 ${
                b.highlight ? 'border-lima bg-lima text-restinga' : 'border-areia/35 bg-restinga'
              }`}
            >
              {b.icon && <IconBadge name={b.icon} dark size="sm" />}
              {b.label && (
                <p className={`text-[0.75rem] font-bold uppercase tracking-[0.12em] ${b.highlight ? 'text-restinga' : 'text-lima'}`}>{b.label}</p>
              )}
              <p
                className={`mt-1 whitespace-nowrap font-display leading-none ${
                  b.highlight ? 'text-4xl sm:text-5xl' : b.icon ? 'mt-2 text-xl sm:text-2xl' : 'text-3xl sm:text-4xl'
                }`}
              >
                {b.value}
              </p>
              <p className="mt-1 text-[0.8125rem]">{b.unit}</p>
            </div>
          </li>
        ))}
      </ol>
      {/* a operação completa, para leitores de tela */}
      <p className="sr-only">R$ 99 por mês dividido por 30 dias é igual a R$ 3,30 por dia, menos que 1 cafezinho no balcão.</p>

      <ul className="mt-8 grid gap-5 lg:grid-cols-3">
        {c.cards.map((card) => (
          <li key={card.title}>
            <div className="h-full">
              <div
                className={`flex h-full flex-col gap-2 rounded-[1.25rem] p-5 ${
                  card.featured ? 'bg-lima text-restinga' : 'border-2 border-lima'
                }`}
              >
                <IconBadge name={card.icon} dark={!card.featured} size="sm" />
                <h4 className={`font-display text-lg ${card.featured ? 'text-restinga' : 'text-areia'}`}>{card.title}</h4>
                <p className="text-[0.875rem] leading-snug">
                  <Rich text={card.text} />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

// 13 · Implantação
function Implantacao() {
  const c = A.implantacao
  return (
    <Slide n={13} tag={c.tag} title={c.title}>
      <div className="relative">
        <div className="absolute left-[10%] right-[10%] top-6 hidden lg:block">
          <WaveLine className="h-3 w-full text-oceano" waves={6} />
        </div>
        <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-[2px] bg-oceano lg:hidden" />
        <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-5 lg:text-center">
          {c.steps.map((st, i) => (
            <li key={st.title}>
              <div className="flex gap-4 lg:flex-col lg:items-center lg:gap-0">
                <IconBadge name={st.icon} />
                <div>
                  <p className="text-[0.8125rem] font-bold uppercase tracking-wider text-restinga lg:mt-4">
                    {c.stepLabel} {i + 1}
                  </p>
                  <h4 className="mt-1 font-display text-xl leading-tight text-restinga">{st.title}</h4>
                  <p className="mt-1 text-[0.9375rem] leading-snug">{st.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-8 flex justify-center">
        <p className="on-dark inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-[2rem] bg-restinga px-6 py-3 text-center text-areia">
          <span className="font-display text-lg text-lima">{c.deadline.label}</span>
          <span>{c.deadline.text}</span>
        </p>
      </div>
    </Slide>
  )
}

// 14 · Contato
function Contato() {
  const c = A.contato
  return (
    <Slide n={14} dark bare>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
        <img src={brand.selo} alt="Bicuíra Digital" width={283} height={283} loading="lazy" className="w-28 rounded-full bg-areia p-2 sm:w-36" />
        <SlideTitle title={c.title} className="mt-7 !text-[clamp(2rem,4vw,3.25rem)] text-areia" />
        <WaveLine className="mx-auto mt-4 h-4 w-40 text-lima" waves={3} />
        <ul className="mt-8 grid w-full max-w-3xl gap-6 sm:grid-cols-3">
          {c.items.map((it) => (
            <li key={it.text}>
              <div className="flex flex-col items-center gap-3">
                <IconBadge name={it.icon} dark />
                {it.href ? (
                  <a href={it.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center underline decoration-lima decoration-2 underline-offset-4">
                    {it.text}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                ) : (
                  <span className="inline-flex min-h-[44px] items-center">{it.text}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[0.8125rem] font-bold uppercase tracking-[0.16em] text-lima">{c.tagline}</p>
      </div>
      <div className="px-6 sm:px-10 lg:px-[5.5%]">
        <SlideFooter n={14} dark />
      </div>
    </Slide>
  )
}
