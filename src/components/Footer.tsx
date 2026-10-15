import { Link } from 'react-router-dom'
import { footerNav, site } from '../content/site'
import { projects } from '../content/projects'
import { brand } from '../content/images'
import { WaveEdge } from './Doodles'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto">
      <WaveEdge className="-mb-px h-10 text-restinga/10 sm:h-16" />
      <div className="bg-restinga/10 text-carvao">
        <div className="wrap grid gap-12 pb-10 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/#inicio" aria-label="Bicuíra Digital — página inicial" className="inline-block">
              <img src={brand.principal} alt="Bicuíra Digital" width={482} height={393} loading="lazy" className="h-32 w-auto sm:h-36" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-carvao/80">
              {site.footerText}
            </p>
            <p className="mt-4 text-sm font-medium text-restinga">{site.region}</p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="tag mb-4 font-sans text-sol">Navegação</h2>
              <ul className="space-y-2 text-sm">
                {footerNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-sol hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="tag mb-4 font-sans text-sol">Projetos</h2>
              <ul className="space-y-2 text-sm">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/projetos/${p.slug}`} className="hover:text-sol hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="tag mb-4 font-sans text-sol">Contato</h2>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-sol"
              >
                Instagram {site.instagram.handle}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
          </nav>
        </div>

        {/* Frase gigante cortada na base */}
        <div className="overflow-hidden" aria-hidden="true">
          <p className="wrap translate-y-[18%] select-none whitespace-nowrap font-display text-[clamp(2rem,7.4vw,8.5rem)] leading-none text-restinga">
            Tecnologia com raiz local.
          </p>
        </div>
        <div className="bg-restinga text-areia">
          <div className="wrap flex flex-col gap-2 py-5 text-xs sm:flex-row sm:justify-between">
            <p>© {year} {site.name}. Todos os direitos reservados.</p>
            <p>{site.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
