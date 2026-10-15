import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Controla a rolagem ao navegar:
// - trocou de página sem âncora → volta ao topo
// - link com âncora (ex.: /#projetos) → rola até a seção, mesmo vindo de outra página
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    // pequena espera para a página nova terminar de montar
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView()
    }, 60)
    return () => window.clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}
