// Informações gerais, links e contatos da Bicuíra Digital.
// Para mudar um contato ou link, altere somente este arquivo.

export const site = {
  name: 'Bicuíra Digital',
  // Endereço público do site (usado nas prévias de link do WhatsApp/Instagram).
  // Quando tiver domínio próprio, troque aqui (ex.: 'https://bicuiradigital.com.br').
  url: 'https://site-bicuira.vercel.app',
  slogan: 'Tecnologia com raiz local.',
  region: 'Garopaba, Praia do Rosa e região — Santa Catarina',
  footerText: 'Sites, automações e soluções digitais para negócios que querem trabalhar melhor.',

  instagram: {
    handle: '@bicuiradigital',
    url: 'https://www.instagram.com/bicuiradigital/',
  },

  // Coloque o número com DDI e DDD, só números. Ex.: '5548999999999'.
  // Enquanto for null, o botão de WhatsApp não aparece no site.
  whatsappNumber: null as string | null,

  // Endereço do serviço que vai receber o formulário (ex.: Formspree).
  // Ex.: 'https://formspree.io/f/abcdwxyz'.
  // Enquanto for null, o formulário mostra um aviso e indica o Instagram.
  formEndpoint: null as string | null,
}

// Menu principal (header)
export const mainNav = [
  { label: 'Sites', to: '/sites' },
  { label: 'Automação', to: '/automacao' },
  { label: 'Fideliza', to: '/fideliza' },
  { label: 'Sobre', to: '/#sobre' },
]

// Botão de destaque do header (leva ao contato)
export const headerCta = { label: 'Vamos conversar', to: '/#contato' }

// Links do rodapé
export const footerNav = [
  { label: 'Início', to: '/' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Como trabalhamos', to: '/#como-trabalhamos' },
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Contato', to: '/#contato' },
]

// Títulos das colunas do rodapé
export const footerLabels = { nav: 'Navegação', services: 'Serviços', projects: 'Cases', contact: 'Contato' }

export function whatsappUrl() {
  return site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : null
}
