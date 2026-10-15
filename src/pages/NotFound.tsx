import Button from '../components/Button'
import { Sun, WaveShape, ScribbleUnderline } from '../components/Doodles'
import usePageMeta from '../components/usePageMeta'
import { notFound } from '../content/home'

export default function NotFound() {
  usePageMeta('Página não encontrada — Bicuíra Digital', notFound.text)

  return (
    <section className="relative overflow-hidden">
      <Sun className="absolute -right-16 top-10 w-56 text-sol sm:w-80" />
      <div className="wrap relative py-24 sm:py-36">
        <p className="tag text-sol">Erro 404</p>
        <h1 className="mt-6 max-w-3xl text-giant text-restinga">
          {notFound.title}
        </h1>
        <ScribbleUnderline draw className="mt-2 h-5 w-64 text-oceano" />
        <p className="text-body mt-8 max-w-md">{notFound.text}</p>
        <Button to="/" className="mt-10">
          {notFound.button}
        </Button>
      </div>
      <WaveShape className="relative -mb-4 h-24 w-[140%] -translate-x-[10%] text-oceano" />
    </section>
  )
}
