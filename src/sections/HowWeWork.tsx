import Reveal from '../components/Reveal'
import { WaveLine } from '../components/Doodles'
import { howWeWork } from '../content/home'

// Cinco etapas num percurso de onda: números gigantes que sobem e descem.
export default function HowWeWork() {
  return (
    <section id="como-trabalhamos" className="relative overflow-hidden bg-carvao py-20 text-areia on-dark md:py-28">
      <div className="wrap">
        <p className="tag text-lima">{howWeWork.tag}</p>
        <h2 className="mt-6 max-w-4xl text-huge">{howWeWork.title}</h2>

        <div className="relative mt-16 md:mt-24">
          {/* Linha de onda que liga as etapas (desktop) */}
          <WaveLine className="absolute left-0 top-[4.5rem] hidden h-24 w-full text-oceano lg:block" waves={5} />
          {/* Linha vertical (mobile) */}
          <span aria-hidden="true" className="absolute bottom-4 left-[1.1rem] top-4 w-[3px] bg-oceano lg:hidden" />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {howWeWork.steps.map((step, i) => (
              <li key={step.name} className={i % 2 === 1 ? 'lg:mt-24' : ''}>
                <Reveal delay={i * 100} className="relative pl-14 lg:pl-0">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-lima font-display text-carvao lg:hidden"
                  >
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="hidden font-display text-[8rem] leading-none text-sol lg:block">
                    {i + 1}
                  </span>
                  <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-lima lg:mt-2">{step.name}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-areia/90">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
