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

  // Número com DDI e DDD, só números. Ex.: '5548999999999'.
  // Se voltar para null, os botões de WhatsApp somem e os convites levam ao formulário (/#contato).
  whatsappNumber: '554896131754' as string | null,
  whatsappDisplay: '+55 48 9613-1754',

}

// Menu principal (header)
export const mainNav = [
  { label: 'Sites', to: '/sites' },
  { label: 'Automação', to: '/automacao' },
  { label: 'Fideliza', to: '/fideliza' },
  { label: 'Sobre', to: '/#sobre' },
]

// Botão de destaque do header (leva à conversa no WhatsApp; o destino vem de contactHref)
export const headerCta = { label: 'Vamos conversar' }

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

// Mensagem que já vem escrita no WhatsApp, conforme a página onde a pessoa clicou
export type WhatsappTopic = 'geral' | 'sites' | 'automacao' | 'fideliza'

export const whatsappMessages: Record<WhatsappTopic, string> = {
  geral: 'Olá! Vim pelo site da Bicuíra Digital e gostaria de saber como funciona o trabalho de vocês.',
  sites: 'Olá! Vim pelo site da Bicuíra Digital e gostaria de saber como funciona o Bicuíra Sites para o meu negócio.',
  automacao:
    'Olá! Vim pelo site da Bicuíra Digital e gostaria de saber como funciona o Bicuíra Automação. Tenho um processo que quero simplificar.',
  fideliza:
    'Olá! Vim pelo site da Bicuíra Digital e gostaria de saber como funciona o Bicuíra Fideliza. Tenho interesse em testar no meu estabelecimento.',
}

export const whatsappLabels = { float: 'Conversar no WhatsApp' }

export function whatsappUrl(topic: WhatsappTopic = 'geral') {
  if (!site.whatsappNumber) return null
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessages[topic])}`
}

// Destino dos botões de conversa: WhatsApp com a mensagem do assunto,
// ou o formulário da página inicial quando não houver número.
export function contactHref(topic: WhatsappTopic = 'geral') {
  return whatsappUrl(topic) ?? (topic === 'geral' ? '/#contato' : `/?servico=${topic}#contato`)
}
