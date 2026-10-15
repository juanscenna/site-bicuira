import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mainNav, whatsappUrl } from '../content/site'
import { brand } from '../content/images'
import { WaveLine } from './Doodles'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)
  const firstLink = useRef<HTMLAnchorElement>(null)
  const whatsapp = whatsappUrl()

  // Fecha o menu ao trocar de página/seção
  useEffect(() => setOpen(false), [location.key])

  // Sombra/linha só depois de rolar um pouco
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu mobile: Esc fecha, trava a rolagem do fundo e cuida do foco
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    // O resto da página fica "inativo" enquanto o menu está aberto (o Tab não sai do menu)
    const behind = [document.getElementById('conteudo'), document.getElementById('rodape')]
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    behind.forEach((el) => el?.setAttribute('inert', ''))
    firstLink.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      behind.forEach((el) => el?.removeAttribute('inert'))
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 bg-areia transition-[border-color] duration-300 ${
        scrolled ? 'border-b-2 border-carvao/10' : 'border-b-2 border-transparent'
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link to="/#inicio" className="relative z-[60] flex min-h-[48px] shrink-0 items-center" aria-label="Bicuíra Digital — página inicial">
          <img src={brand.horizontal} alt="Bicuíra Digital" width={875} height={214} className="h-10 w-auto sm:h-11" />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="relative inline-flex min-h-[44px] items-center underline-offset-[6px] hover:underline hover:decoration-sol hover:decoration-2">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {whatsapp && (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-full border-2 border-restinga px-4 text-sm font-semibold text-restinga hover:bg-restinga hover:text-areia"
            >
              WhatsApp<span className="sr-only"> (abre em nova aba)</span>
            </a>
          )}
          <Link
            to="/#contato"
            className="inline-flex min-h-[44px] items-center rounded-full bg-carvao px-5 text-sm font-semibold text-areia transition-colors hover:bg-restinga"
          >
            Vamos conversar
          </Link>
        </div>

        {/* Botão do menu (mobile) */}
        <button
          ref={menuButton}
          type="button"
          className="relative z-[60] inline-flex h-12 w-12 items-center justify-center md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-4 w-7">
            <span className={`absolute left-0 h-[3px] w-7 rounded bg-carvao transition-transform ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-[3px] w-5 rounded bg-carvao transition-opacity ${open ? 'opacity-0' : 'top-1.5'}`} />
            <span className={`absolute left-0 h-[3px] w-7 rounded bg-carvao transition-transform ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      {/* Menu em tela cheia (mobile) */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-[55] flex flex-col bg-areia px-4 pb-10 pt-28 md:hidden ${open ? '' : 'hidden'}`}
      >
        <nav aria-label="Menu mobile">
          <ul className="space-y-1">
            {mainNav.map((item, i) => (
              <li key={item.to}>
                <Link
                  ref={i === 0 ? firstLink : undefined}
                  to={item.to}
                  className="flex items-baseline gap-4 py-2 font-display text-[3.2rem] leading-none text-restinga"
                >
                  <span aria-hidden="true" className="font-sans text-sm font-semibold text-restinga">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <WaveLine className="my-8 h-6 w-full text-oceano" waves={5} />
        <div className="mt-auto flex flex-col gap-3">
          <Link
            to="/#contato"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-carvao px-6 font-semibold text-areia"
          >
            Vamos conversar
          </Link>
          {whatsapp && (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-restinga px-6 font-semibold text-restinga"
            >
              WhatsApp<span className="sr-only"> (abre em nova aba)</span>
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
