import Reveal from '../components/Reveal'
import Mark from '../components/Mark'
import { WaveLine } from '../components/Doodles'
import { howWeWork } from '../content/home'

// Cinco etapas em sequência.
// Desktop: leitura da esquerda para a direita; a onda passa ACIMA dos números,
// ligando um marcador de cada etapa (nada cruza números ou textos).
// Celular: lista vertical com uma linha lateral ligando os marcadores.
export default function HowWeWork() {
  return (
    <section id="como-trabalhamos" className="on-dark relative overflow-hidden bg-carvao pb-20 pt-16 text-areia md:pb-24 md:pt-24 lg:pb-40">
      <div className="wrap">
        <p className="tag text-lima">{howWeWork.tag}</p>
        <h2 className="mt-6 max-w-5xl text-huge">
          <Mark text={howWeWork.title} word={howWeWork.mark} color="text-lima" />
        </h2>

        <div className="relative mt-14 md:mt-20">
          {/* Percurso em onda (desktop): fica na faixa dos marcadores */}
          <WaveLine wipe className="absolute inset-x-0 top-0 hidden h-6 w-full text-oceano lg:block" waves={5} />
          {/* Linha lateral (celular/tablet) */}
          <span aria-hidden="true" data-grow className="absolute bottom-6 left-[1.1rem] top-6 w-[3px] rounded bg-oceano lg:hidden" />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-8">
            {howWeWork.steps.map((step, i) => (
              <li key={step.name}>
                <Reveal delay={i * 80} className="relative pl-14 lg:pl-0 lg:pt-12">
                  {/* marcador sobre a linha */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-carvao bg-lima font-display text-carvao lg:-top-1.5 lg:h-9 lg:w-9"
                  >
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="hidden font-display text-[5.5rem] leading-none text-sol lg:block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-lima lg:mt-3">{step.name}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-areia">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
