import Button from '../components/Button'
import PageHero from '../components/PageHero'
import { ScribbleCircle } from '../components/Doodles'
import { hero } from '../content/home'
import { brand, videos } from '../content/images'
import { contactHref } from '../content/site'

// Abertura da página inicial (segue o wireframe):
// 1. imagem grande com o logo oficial no centro
// 2. logo abaixo, título, texto curto e os dois caminhos (conversar / ver soluções)
export default function Hero() {
  return (
    <>
      <PageHero video={videos.homeHero}>
        <div className="relative">
          {/* brilho claro atrás do logo para ele se destacar sobre a foto */}
          <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-areia/70 blur-3xl sm:-inset-14" />
          <img
            src={brand.principal}
            alt={hero.logoAlt}
            width={482}
            height={393}
            fetchPriority="high"
            className="relative w-[min(50vw,22rem)] drop-shadow-[0_6px_18px_rgba(41,42,41,0.35)] md:w-[26rem]"
          />
        </div>
      </PageHero>

      <section id="inicio" className="relative pb-16 pt-5 text-center md:pb-24 md:pt-14">
        <div className="wrap flex flex-col items-center">
          <p className="tag text-restinga">{hero.tag}</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.92] text-restinga">
            {hero.title.before}{' '}
            <span className="relative inline-block text-sol">
              {hero.title.highlight}
              <ScribbleCircle fromTop className="absolute -inset-x-[14%] -inset-y-[8%] h-[120%] w-[128%] text-carvao" />
            </span>{' '}
            <span className="whitespace-nowrap">{hero.title.after}</span>
          </h1>
          <p className="text-body mt-4 max-w-xl md:mt-6">{hero.text}</p>
          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:gap-6 md:mt-8">
            <Button to={contactHref()}>{hero.primaryCta}</Button>
            <Button to="/#solucoes" variant="text">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
