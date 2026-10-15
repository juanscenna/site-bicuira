import Button from '../components/Button'
import Photo from '../components/Photo'
import { ScribbleArrow, ScribbleCircle, Sun, WaveShape } from '../components/Doodles'
import { hero } from '../content/home'
import { images } from '../content/images'

// Abertura da página inicial: título gigante à esquerda,
// foto de surf sangrando para a borda direita, sol e onda da marca.
export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 md:pb-28">
      {/* Imagem: no desktop ocupa a lateral direita até a borda da tela */}
      <div className="relative mx-4 mt-6 sm:mx-6 md:absolute md:inset-y-0 md:right-0 md:mx-0 md:mt-0 md:w-[40%] md:pb-28">
        <Photo
          image={images.heroCoastal}
          priority
          className="aspect-[4/5] rounded-[2.5rem] sm:aspect-[16/10] md:aspect-auto md:h-full md:rounded-none md:rounded-bl-[6rem]"
        />
        <Sun className="absolute -top-6 right-6 w-24 text-sol sm:w-32 md:-left-16 md:right-auto md:top-auto md:bottom-[42%] md:w-40" />
        <WaveShape className="absolute -bottom-8 -left-6 w-[110%] text-oceano md:-left-24 md:bottom-16 md:w-[90%]" />
      </div>

      <div className="wrap relative">
        <div className="relative z-10 pt-14 md:w-[56%] md:pt-20 lg:w-[60%] lg:pt-24">
          <p className="tag text-restinga">{hero.tag}</p>

          <h1 className="mt-6 text-[clamp(3.4rem,14.5vw,5rem)] leading-[0.86] text-restinga md:text-[9.5vw] lg:text-giant">
            {hero.title.before}{' '}
            <span className="relative inline-block text-sol">
              {hero.title.highlight}
              <ScribbleCircle draw className="absolute -inset-x-[14%] -inset-y-[8%] h-[120%] w-[128%] text-carvao" />
            </span>{' '}
            <span className="whitespace-nowrap">{hero.title.after}</span>
          </h1>

          <div className="mt-10 flex items-end gap-6 md:mt-14">
            <p className="text-body max-w-md">{hero.text}</p>
            <ScribbleArrow draw className="hidden w-24 shrink-0 rotate-[20deg] text-oceano lg:block" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button to="/#contato" color="carvao">
              {hero.primaryCta}
            </Button>
            <Button to="/#projetos" variant="text">
              {hero.secondaryCta}
            </Button>
          </div>

          <p className="mt-14 max-w-xs border-l-2 border-lima pl-4 text-xs leading-relaxed text-carvao/75">
            {hero.caption}
          </p>
        </div>
      </div>
    </section>
  )
}
