import Reveal from '../components/Reveal'
import Mark from '../components/Mark'
import { Spark, WaveEdge, WaveLine } from '../components/Doodles'
import { manifesto } from '../content/home'

// Manifesto em bloco Pôr do Sol: título gigante em duas linhas desencontradas
// e texto em coluna estreita. Texto em tamanho grande para manter o contraste.
export default function Manifesto() {
  return (
    <section aria-labelledby="manifesto-titulo" className="relative">
      <WaveEdge className="-mb-px h-12 text-sol sm:h-20" />
      <div className="on-dark relative overflow-hidden bg-sol pb-20 pt-8 text-areia sm:pb-28">
        <div className="wrap">
          <p className="tag bg-carvao px-3 py-1.5 text-areia">{manifesto.tag}</p>
          <h2 id="manifesto-titulo" className="mt-8 text-[clamp(1.9rem,7.2vw,7.75rem)] leading-[0.92]">
            <span className="block">{manifesto.title[0]}</span>
            <span className="block md:pl-[10vw]">
              <Mark text={manifesto.title[1]} word={manifesto.mark} color="text-lima" />
            </span>
          </h2>

          <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
            <div className="hidden md:col-span-4 md:block">
              <Spark className="h-16 w-16 text-lima" />
            </div>
            <div className="space-y-6 text-2xl leading-snug md:col-span-7 md:col-start-6 md:text-[1.75rem]">
              {manifesto.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 120}>
                  <p className={i === 0 ? 'font-display text-[1.9rem] leading-tight md:text-[2.4rem]' : ''}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <WaveLine className="absolute bottom-8 left-0 h-6 w-full text-areia/40" waves={8} />
      </div>
      <WaveEdge flip className="-mt-px h-12 text-sol sm:h-20" />
    </section>
  )
}
