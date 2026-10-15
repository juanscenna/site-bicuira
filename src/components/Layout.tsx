import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollManager from './ScrollManager'
import ScrollFx from './ScrollFx'

// Estrutura comum a todas as páginas: header, conteúdo e footer.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <ScrollFx />
      <a
        href="#conteudo"
        className="sr-only z-[100] rounded-full bg-carvao px-5 py-3 text-sm font-semibold text-areia focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
