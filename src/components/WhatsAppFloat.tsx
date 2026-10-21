import { useLocation } from 'react-router-dom'
import { findProject } from '../content/projects'
import { whatsappLabels, whatsappUrl, type WhatsappTopic } from '../content/site'

// Assunto da conversa conforme a página aberta:
// /sites, /automacao, /fideliza (e a apresentação) → o próprio serviço;
// página de case → o serviço do case; início e o resto → geral.
export function useWhatsappTopic(): WhatsappTopic {
  const { pathname } = useLocation()
  if (pathname.startsWith('/sites')) return 'sites'
  if (pathname.startsWith('/automacao')) return 'automacao'
  if (pathname.startsWith('/fideliza')) return 'fideliza'
  if (pathname.startsWith('/projetos/')) return findProject(pathname.split('/')[2])?.service ?? 'geral'
  return 'geral'
}

// Botão redondo fixo no canto inferior direito, em todas as páginas.
export default function WhatsAppFloat() {
  const url = whatsappUrl(useWhatsappTopic())
  if (!url) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${whatsappLabels.float} (abre em nova aba)`}
      title={whatsappLabels.float}
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-lima text-carvao shadow-lg shadow-carvao/20 ring-2 ring-carvao/10 transition-colors hover:bg-areia focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carvao md:bottom-6 md:right-6"
    >
      <WhatsAppIcon />
    </a>
  )
}

export function WhatsAppIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 0 1-1.44-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.46 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.03-1.18-5.89-3.34-8.04" />
    </svg>
  )
}
