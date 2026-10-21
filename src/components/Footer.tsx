import { Link } from 'react-router-dom'
import { footerLabels, footerNav, site, whatsappUrl } from '../content/site'
import { services } from '../content/services'
import { projects } from '../content/projects'
import { brand } from '../content/images'
import { WaveEdge } from './Doodles'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="rodape" className="relative mt-auto">
      <div className="bg-restinga/10 text-carvao">
        <WaveEdge flip className="h-10 text-areia sm:h-16" />
        <div className="wrap grid gap-12 pb-10 pt-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" aria-label="Bicuíra Digital — página inicial" className="inline-block">
              <img src={brand.principal} alt="Bicuíra Digital" width={482} height={393} loading="lazy" className="h-24 w-auto sm:h-32 md:h-36" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-carvao/80">
              {site.footerText}
            </p>
            <p className="mt-4 text-sm font-medium text-restinga">{site.region}</p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-8">
            <FooterColumn title={footerLabels.nav} links={footerNav} />
            <FooterColumn title={footerLabels.services} links={services.map((s) => ({ label: s.name, to: s.path }))} />
            <FooterColumn title={footerLabels.projects} links={projects.map((p) => ({ label: p.title, to: `/projetos/${p.slug}` }))} />
            <div>
              <h2 className="tag mb-4 font-sans text-restinga">{footerLabels.contact}</h2>
              {whatsappUrl() && (
                <p>
                  <a
                    href={whatsappUrl()!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center whitespace-nowrap text-sm font-semibold underline decoration-2 underline-offset-4 hover:decoration-sol"
                  >
                    {site.whatsappDisplay}
                    <span className="sr-only"> (WhatsApp, abre em nova aba)</span>
                  </a>
                </p>
              )}
              <p>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-sm font-semibold underline decoration-2 underline-offset-4 hover:decoration-sol"
                >
                  {site.instagram.handle}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </p>
            </div>
          </nav>
        </div>

        {/* Frase grande, inteira, apoiada sobre a barra de copyright */}
        <p
          aria-hidden="true"
          className="wrap select-none whitespace-nowrap pb-[0.08em] font-display text-[clamp(1.5rem,6.4vw,7.5rem)] leading-[1.05] text-restinga"
        >
          {site.slogan}
        </p>
        <div className="bg-restinga text-areia">
          <div className="wrap flex flex-col gap-2 py-5 text-[0.8125rem] sm:flex-row sm:justify-between">
            <p>© {year} {site.name}. Todos os direitos reservados.</p>
            <p>{site.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h2 className="tag mb-4 font-sans text-restinga">{title}</h2>
      <ul className="text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline hover:decoration-sol hover:decoration-2">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
