// Lista de projetos (cases).
//
// Para adicionar um projeto novo:
//   1. copie um dos blocos abaixo e preencha os textos;
//   2. adicione as imagens em src/content/images.ts;
//   3. pronto: ele aparece na página inicial, no rodapé e ganha página própria
//      em /projetos/<slug> (usando o layout padrão).
//
// Os três primeiros projetos têm páginas com layout próprio (src/pages/).

import { captures, type SiteImage } from './images'

export type GalleryItem = {
  image: SiteImage
  label: string // legenda curta (ex.: "Página inicial — desktop")
  frame: 'browser' | 'phone' | 'plain'
}

export type Project = {
  slug: string
  client: string
  title: string // nome do projeto
  category: string
  summary: string // descrição curta, usada na página inicial
  highlight?: string // etiqueta opcional sobre a imagem na página inicial
  cover: SiteImage
  seo: { title: string; description: string }
  hero: {
    title: string
    mark?: string // trecho do título destacado com traço à mão
    text: string
    externalLink?: { label: string; url: string }
    contactCta: string
  }
  challenge: { title: string; text: string }
  solution: { title: string; text: string; details?: string[] }
  tools?: string[]
  steps?: { name: string; text: string }[]
  benefits: string[]
  result?: { title: string; text: string; note: string }
  gallery: GalleryItem[]
  finalCta: { title: string; text: string; button: string }
}

export const projects: Project[] = [
  {
    slug: 'pousada-sonhos-do-rosa',
    client: 'Pousada Sonhos do Rosa',
    title: 'Site da Pousada Sonhos do Rosa',
    category: 'Desenvolvimento de site',
    summary:
      'Um site próprio para reunir as informações da pousada, que antes estavam espalhadas entre plataformas de hospedagem e redes sociais.',
    cover: captures.pousadaHome,
    seo: {
      title: 'Site da Pousada Sonhos do Rosa — Bicuíra Digital',
      description:
        'Case Bicuíra Sites: um site próprio para reunir as informações e apresentar a hospedagem da Pousada Sonhos do Rosa.',
    },
    hero: {
      title: 'Uma presença digital à altura da experiência da pousada.',
      mark: 'experiência',
      text: 'Um site próprio para reunir informações importantes, apresentar a hospedagem e facilitar a jornada de quem deseja conhecer a Pousada Sonhos do Rosa.',
      externalLink: { label: 'Visitar site', url: 'https://sonhosdorosa.lovable.app/' },
      contactCta: 'Quero um site para meu negócio',
    },
    challenge: {
      title: 'Informações espalhadas, experiência fragmentada.',
      text: 'A pousada precisava centralizar informações que estavam distribuídas entre plataformas de hospedagem e redes sociais. A proposta era criar um ambiente próprio para facilitar o acesso dos visitantes às informações do negócio.',
    },
    solution: {
      title: 'Um lugar para reunir as informações.',
      text: 'Desenvolvemos um site funcional e responsivo para organizar a apresentação da pousada e tornar a consulta das informações mais simples.',
    },
    benefits: [
      'Informações centralizadas',
      'Apresentação profissional da pousada',
      'Navegação organizada',
      'Facilidade para conhecer a hospedagem',
      'Acesso às informações relevantes para os visitantes',
    ],
    gallery: [
      { image: captures.pousadaHome, label: 'Página inicial — desktop', frame: 'browser' },
      { image: captures.pousadaMobile, label: 'Versão mobile', frame: 'phone' },
      { image: captures.pousadaInternal, label: 'Seções internas', frame: 'browser' },
      { image: captures.pousadaDetail, label: 'Detalhes da interface', frame: 'plain' },
    ],
    finalCta: {
      title: 'Seu negócio também merece uma presença digital melhor.',
      text: 'Vamos conversar sobre um site que faça sentido para a realidade da sua empresa.',
      button: 'Vamos conversar',
    },
  },
  {
    slug: 'automacao-reservas',
    client: 'Pousada Sonhos do Rosa',
    title: 'Automação de reservas',
    category: 'Automação de processos',
    summary:
      'Um aplicativo web com interface simples para registrar reservas direto na planilha Google Sheets que o proprietário já usava.',
    cover: captures.reservasHome,
    seo: {
      title: 'Automação de reservas — Bicuíra Digital',
      description:
        'Case Bicuíra Automação: uma interface prática para registrar reservas diretamente no Google Sheets.',
    },
    hero: {
      title: 'Reservas mais simples. Menos trabalho manual.',
      mark: 'mais simples',
      text: 'Uma interface prática para registrar reservas diretamente no Google Sheets, aproveitando a planilha que o cliente já utilizava.',
      contactCta: 'Quero automatizar um processo',
    },
    challenge: {
      title: 'Uma rotina que dependia de preenchimento manual.',
      text: 'O proprietário utilizava uma planilha Google Sheets para organizar as reservas, mas precisava preencher manualmente diversas células para registrar cada informação. O processo era trabalhoso e a estrutura da planilha tornava a entrada de dados pouco prática.',
    },
    solution: {
      title: 'Uma interface mais simples para um processo existente.',
      text: 'Desenvolvemos um aplicativo web que permite preencher os dados da reserva em uma interface simplificada e enviar as informações diretamente à planilha utilizada pelo proprietário.',
      details: [
        'Experiência semelhante a um chat, com campos para inserir as informações e confirmar o envio.',
        'Pode ser adicionado à tela inicial do iPhone pelo Safari.',
        'As informações vão para o Google Sheets, onde o proprietário confere os registros.',
      ],
    },
    tools: ['Lovable', 'Google Sheets'],
    steps: [
      { name: 'Acessar', text: 'O proprietário abre o aplicativo web.' },
      { name: 'Preencher', text: 'As informações da reserva são inseridas em uma interface simplificada.' },
      { name: 'Confirmar', text: 'O usuário confirma o envio dos dados.' },
      { name: 'Registrar', text: 'As informações são enviadas ao Google Sheets.' },
    ],
    benefits: [
      'Menos preenchimento manual de células',
      'Entrada de dados simplificada',
      'Aproveitamento da planilha já utilizada',
      'Menos tarefas repetitivas',
      'Processo mais prático para registrar reservas',
    ],
    gallery: [
      { image: captures.reservasHome, label: 'Tela inicial do aplicativo', frame: 'phone' },
      { image: captures.reservasForm, label: 'Interface de preenchimento', frame: 'phone' },
      { image: captures.reservasConfirm, label: 'Confirmação do registro', frame: 'phone' },
      { image: captures.reservasSheet, label: 'Planilha com os dados enviados', frame: 'browser' },
    ],
    finalCta: {
      title: 'Qual tarefa da sua rotina poderia ser mais simples?',
      text: 'Vamos entender seu processo e descobrir como a tecnologia pode ajudar.',
      button: 'Quero automatizar um processo',
    },
  },
  {
    slug: 'agenda-de-todos-nos',
    client: 'Agenda de Todos Nós',
    title: 'Agenda de Todos Nós',
    category: 'Inteligência artificial e automação',
    summary:
      'Um sistema que lê flyers de eventos com inteligência artificial, passa pela conferência de uma pessoa e organiza tudo no Google Sheets.',
    highlight: 'IA + revisão humana',
    cover: captures.agendaFlyer,
    seo: {
      title: 'Agenda de Todos Nós — Bicuíra Digital',
      description:
        'Case Bicuíra Automação: inteligência artificial para extrair informações de flyers de eventos, com revisão humana e registro no Google Sheets.',
    },
    hero: {
      title: 'Do cartaz à planilha, sem transcrever tudo manualmente.',
      mark: 'sem transcrever',
      text: 'Uma solução que utiliza inteligência artificial para extrair informações de flyers de eventos, permite a revisão humana e organiza os dados automaticamente no Google Sheets.',
      externalLink: { label: 'Visitar sistema', url: 'https://agendadetodosnos.lovable.app/' },
      contactCta: 'Quero automatizar meu negócio',
    },
    challenge: {
      title: 'Informações que precisavam ser digitadas uma por uma.',
      text: 'A Agenda de Todos Nós reúne e divulga eventos da região. Antes da automação, uma pessoa precisava transcrever manualmente as informações dos cartazes e flyers para uma planilha Google Sheets. O trabalho consumia horas, especialmente quando havia diversas imagens para processar.',
    },
    solution: {
      title: 'A inteligência artificial organiza. A pessoa confere.',
      text: 'Desenvolvemos um sistema web que recebe a imagem de um evento, utiliza inteligência artificial para identificar as informações e organiza os dados extraídos para revisão. Após a conferência e confirmação pelo usuário, o sistema envia os dados automaticamente para a planilha Google Sheets.',
    },
    tools: ['Lovable', 'Google Sheets', 'Inteligência artificial'],
    steps: [
      { name: 'Envio da imagem', text: 'O usuário envia o flyer pelo site.' },
      { name: 'Análise por IA', text: 'O sistema analisa a imagem e extrai as informações identificadas.' },
      { name: 'Revisão humana', text: 'O usuário confere e confirma os dados antes do registro.' },
      { name: 'Registro automático', text: 'As informações confirmadas são inseridas no Google Sheets.' },
    ],
    benefits: [],
    result: {
      title: 'Menos horas de transcrição. Mais tempo para outras tarefas.',
      text: 'Segundo o relato da operação, um processo que antes consumia horas para trabalhar com diversas imagens passou a levar menos de um minuto por imagem.',
      note: 'Resultado relatado por esta operação. Cada negócio tem uma realidade diferente.',
    },
    gallery: [
      { image: captures.agendaFlyer, label: 'Flyer original', frame: 'plain' },
      { image: captures.agendaUpload, label: 'Interface de envio', frame: 'browser' },
      { image: captures.agendaExtracted, label: 'Informações extraídas', frame: 'browser' },
      { image: captures.agendaReview, label: 'Etapa de revisão', frame: 'phone' },
      { image: captures.agendaSheet, label: 'Planilha com os dados registrados', frame: 'browser' },
    ],
    finalCta: {
      title: 'Seu negócio também tem tarefas que poderiam ser automatizadas?',
      text: 'Vamos entender como sua operação funciona e identificar oportunidades para simplificar o trabalho.',
      button: 'Quero automatizar meu negócio',
    },
  },
]

export function findProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

// Projeto anterior e próximo, na ordem da lista acima
export function neighbors(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i >= 0 && i < projects.length - 1 ? projects[i + 1] : undefined,
  }
}

// Textos fixos das páginas de projeto
export const projectLabels = {
  case: 'Case',
  challenge: 'O desafio',
  solution: 'A solução',
  howItWorks: 'Como funciona',
  benefits: 'Benefícios',
  gallery: 'Galeria',
  tools: 'Ferramentas',
  result: 'Resultado relatado pela operação',
  portfolio: 'Portfólio',
  back: 'Voltar aos projetos',
  viewProject: 'Ver projeto',
  prev: 'Projeto anterior',
  next: 'Próximo projeto',
  services: 'Serviços',
  servicesLink: 'Conheça nossos serviços',
  otherProjects: 'Outros projetos',
}
