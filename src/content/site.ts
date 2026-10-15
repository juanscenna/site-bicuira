// Informações gerais, links e contatos da Bicuíra Digital.
// Para mudar um contato ou link, altere somente este arquivo.

export const site = {
  name: 'Bicuíra Digital',
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
  { label: 'Início', to: '/#inicio' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Projetos', to: '/#projetos' },
  { label: 'Sobre', to: '/#sobre' },
]

// Links do rodapé
export const footerNav = [
  { label: 'Início', to: '/#inicio' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Projetos', to: '/#projetos' },
  { label: 'Serviços', to: '/#servicos' },
  { label: 'Sobre', to: '/#sobre' },
]

export function whatsappUrl() {
  return site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : null
}
