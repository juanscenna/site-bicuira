import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import Mark from '../components/Mark'
import { Hill } from '../components/Doodles'
import { about } from '../content/home'
import { brand, images } from '../content/images'
import { site } from '../content/site'

// Sobre: foto costeira forte sangrando à direita e subindo sobre a seção anterior.
export default function About() {
  return (
    <section id="sobre" className="relative pb-16 md:pb-24">
      <div className="grid lg:grid-cols-12">
        <div className="order-2 px-4 pt-14 sm:px-6 lg:order-1 lg:col-span-6 lg:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] lg:pr-12 lg:pt-24">
          <p className="tag text-restinga">{about.tag}</p>
          <h2 className="mt-6 text-big text-restinga">
            <Mark text={about.title} word={about.mark} />
          </h2>
          <div className="mt-10 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={i === 0 ? 'text-xl font-semibold leading-snug' : 'text-body'}>{p}</p>
              </Reveal>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {about.values.map((v) => (
              <li key={v} className="rounded-full bg-restinga px-4 py-2 text-sm font-medium text-areia">
                {v}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold text-restinga">{site.region}</p>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-6 lg:-mt-28">
          <Photo image={images.beachAerial} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[44rem] lg:rounded-bl-[8rem]" />
          <Hill className="absolute -bottom-px left-0 h-20 w-2/3 text-areia lg:hidden" />
          <img
            src={brand.selo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={283}
            height={283}
            className="absolute -left-6 bottom-10 hidden w-36 rotate-[-10deg] rounded-full bg-areia p-2 lg:-left-16 lg:block lg:w-44"
          />
        </div>
      </div>
    </section>
  )
}
