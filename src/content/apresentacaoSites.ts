// Apresentação comercial do Bicuíra Sites (aba da página /sites).
// Mesma apresentação usada na reunião com pousadas: quem somos, o case
// Pousada Sonhos do Rosa, o que entra no site básico e as condições.
// Condições definidas pela Bicuíra (não alterar sem confirmar). Sem valores no site.
//
// Títulos: { text, highlight, color } → "highlight" aparece na cor indicada.

import type { SlideTitle } from './apresentacao'
import { captures } from './images'

const caseUrl = 'https://sonhosdorosa.lovable.app/'

export const apresentacaoSites = {
  // Página própria da apresentação: /sites/apresentacao
  page: {
    path: '/sites/apresentacao',
    seo: {
      title: 'Apresentação comercial — Bicuíra Sites | Bicuíra Digital',
      description:
        'Apresentação comercial do Bicuíra Sites para pousadas: o case Pousada Sonhos do Rosa, o que entra no site básico, prazo e condições.',
    },
    breadcrumb: 'Apresentação comercial',
    tabs: { overview: 'Visão geral', presentation: 'Apresentação comercial', label: 'Seções do Bicuíra Sites' },
    jump: 'Ver apresentação comercial',
    section: {
      tag: 'Apresentação comercial',
      title: 'Bicuíra Sites · Site para pousadas',
      note: 'Como funciona o site básico, o case da Pousada Sonhos do Rosa e as condições.',
    },
    final: { title: 'Vamos alinhar o site da sua pousada?', text: 'Conte como a pousada recebe o hóspede hoje e a gente monta o escopo junto.', button: 'Quero um site para minha pousada' },
  },

  // 01 · Capa
  capa: {
    tag: 'Bicuíra Sites · para pousadas',
    title: 'Tudo sobre a sua pousada, em um lugar só.',
    text: 'Um site que reúne quartos, localização e informações, e leva o hóspede direto para a conversa no WhatsApp.',
  },

  // 02 · Quem é a Bicuíra
  quemSomos: {
    tag: 'Quem é a Bicuíra',
    title: { text: 'Tecnologia com ', highlight: 'raiz local.', color: 'lima' } as SlideTitle,
    text: 'Criamos sites, automações e ferramentas para negócios do nosso jeito: perto de quem atende, com linguagem simples.',
    pills: [
      { label: 'Sites', tone: 'sol' },
      { label: 'Automação', tone: 'oceano' },
      { label: 'Fideliza · em desenvolvimento', tone: 'lima' },
    ] as { label: string; tone: 'sol' | 'oceano' | 'lima' }[],
  },

  // 03 · Case em destaque
  caseDestaque: {
    tag: 'Case real · Pousada Sonhos do Rosa',
    title: { text: 'Tudo que estava espalhado, agora em ', highlight: 'um só lugar.', color: 'lima' } as SlideTitle,
    pc: captures.pousadaHome,
    phone: captures.pousadaMobile,
    link: { label: 'Ver o site ao vivo', url: caseUrl },
  },

  // 04 · Galeria do case
  galeria: {
    tag: 'Case real · Pousada Sonhos do Rosa',
    title: { text: 'Cada parte da pousada, na ', highlight: 'mesma casa.', color: 'lima' } as SlideTitle,
    shots: [
      { image: captures.pousadaHome, label: 'Página inicial' },
      { image: captures.pousadaInternal, label: 'Acomodações' },
      { image: captures.pousadaDetail, label: 'Detalhes da pousada' },
    ],
  },

  // 05 · Antes e depois
  antesDepois: {
    tag: 'O problema',
    title: { text: 'Antes e depois da pousada.' } as SlideTitle,
    before: {
      title: 'Antes',
      text: 'Informações espalhadas entre plataformas de hospedagem e redes sociais. O hóspede precisa procurar em vários lugares.',
    },
    after: {
      title: 'Depois',
      text: 'Um site próprio, com quartos, localização e informações reunidos em uma página, e o botão direto para o WhatsApp.',
    },
  },

  // 06 · O que entregamos
  entrega: {
    tag: 'O que entregamos',
    title: { text: 'Sua pousada inteira, em ', highlight: 'um endereço só.', color: 'lima' } as SlideTitle,
    text: 'Quartos, localização e informações numa única rolagem, com um botão que leva o hóspede direto para a conversa no WhatsApp da pousada.',
    items: [
      'Apresentação da pousada e identidade visual',
      'Quartos, localização e informações úteis, na mesma página',
      'Botão que abre a conversa no WhatsApp comercial da pousada',
    ],
  },

  // 07 · Na prática
  pratica: {
    tag: 'Na prática',
    title: { text: 'Do primeiro acesso à conversa.' } as SlideTitle,
    steps: [
      'O hóspede entra no site e vê tudo na mesma página.',
      'Encontra quartos, localização e informações sem procurar.',
      'Toca no botão e cai direto na conversa com a pousada no WhatsApp.',
    ],
  },

  // 08 · O site não faz reserva
  reserva: {
    tag: 'Importante',
    title: 'O site não faz reserva.',
    text: 'A reserva acontece na conversa com a pousada, no WhatsApp. O site apresenta a pousada e leva o hóspede até esse contato.',
    note: 'Reserva online, painel e integrações não estão no básico. Entram à parte, se a pousada precisar.',
  },

  // 09 · Como criamos
  criacao: {
    tag: 'Como criamos o site',
    title: { text: 'Do primeiro papo ao ar, em ', highlight: 'quatro etapas.', color: 'sol' } as SlideTitle,
    steps: [
      'Conversa para entender a pousada e como ela recebe o hóspede hoje.',
      'Identidade visual aplicada, com cores, tipografia e fotos da pousada.',
      'Página montada com quartos, localização, informações e o botão do WhatsApp.',
      'Revisão com você, ajustes e publicação. Hospedagem e domínio no ar.',
    ],
  },

  // 10 · Entregável e condições
  condicoes: {
    tag: 'Entregável e condições',
    title: { text: 'Tudo combinado desde o início.' } as SlideTitle,
    entregavel: {
      title: 'O que você recebe',
      items: [
        'Site de uma página com apresentação, quartos, localização, fotos e informações',
        'Identidade visual da pousada aplicada',
        'Botão para o WhatsApp comercial',
        'Versão para celular e computador',
        'Domínio .com.br registrado e site publicado',
      ],
      note: 'Fotos e informações são enviadas pela pousada.',
    },
    prazo: { title: 'Prazo', big: '10 dias úteis', text: 'a partir do recebimento das fotos e informações.' },
    manutencao: {
      title: 'Depois de publicado',
      items: [
        'Hospedagem e domínio no ar',
        'Até 2 ajustes de texto ou foto por mês',
        'Páginas novas e mudanças maiores combinadas à parte',
      ],
    },
  },
}
