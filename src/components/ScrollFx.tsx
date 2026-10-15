import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Movimentos ligados à rolagem (um único controle para o site inteiro).
// Marque os elementos com atributos e o CSS faz o resto (styles/index.css):
//   data-draw     → traço desenhado à mão que se desenha conforme a rolagem
//   data-wipe     → linha (ex.: onda) que se revela da esquerda para a direita
//   data-grow     → linha vertical que cresce de cima para baixo
//   data-parallax → imagem que se move mais devagar que a página (profundidade)
// Também atualiza --scroll (0 a 1) para a barra de progresso do topo.
// Com "reduzir movimento" no sistema, tudo aparece pronto e parado.
export default function ScrollFx() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    let frame = 0

    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const max = root.scrollHeight - vh
      root.style.setProperty('--scroll', String(max > 0 ? Math.min(window.scrollY / max, 1) : 0))

      document.querySelectorAll<HTMLElement | SVGElement>('[data-draw],[data-wipe],[data-grow]').forEach((el) => {
        if (reduce) return el.style.setProperty('--draw', '1')
        const top = el.getBoundingClientRect().top
        // começa quando o elemento entra pela base da tela e completa perto do meio
        const p = Math.min(Math.max((vh * 0.95 - top) / (vh * 0.45), 0), 1)
        el.style.setProperty('--draw', p.toFixed(3))
      })

      if (reduce) return
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const box = el.parentElement!.getBoundingClientRect()
        if (box.bottom < 0 || box.top > vh) return
        const speed = parseFloat(el.dataset.parallax || '0.2')
        el.style.transform = `translate3d(0, ${(-box.top * speed).toFixed(1)}px, 0)`
      })
    }

    const request = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    // de novo um pouco depois, quando imagens e fontes já mudaram a altura da página
    const late = window.setTimeout(update, 400)
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.clearTimeout(late)
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [pathname])

  return null
}
