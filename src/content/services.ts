import { images, type SiteImage } from './images'

// Os três serviços da Bicuíra.
// "card" = texto curto da seção "Nossas soluções".
// "detail" = texto completo da seção "Serviços".

export type ServiceId = 'sites' | 'automacao' | 'fideliza'

export type Service = {
  id: ServiceId
  number: string
  name: string
  path: string // endereço da página do serviço
  heroImage: SiteImage // foto do topo da página do serviço
  seo: { title: string; description: string }
  formLabel: string // nome que aparece no campo "Serviço de interesse"
  inDevelopment?: boolean
  card: {
    description: string
    examples: string[]
    cta: string
  }
  detail: {
    title: string
    mark?: string // trecho do título destacado com traço à mão
    description: string
    groups: { title?: string; items: string[] }[]
    note?: string
    steps?: { title: string; items: string[] } // passo a passo numerado ("Como funciona")
    status?: { title: string; text: string } // produto em desenvolvimento: em que pé está
    join?: { title: string } // título do convite final (no lugar do padrão)
    cta: string
  }
}

export const services: Service[] = [
  {
    id: 'sites',
    number: '01',
    name: 'Bicuíra Sites',
    path: '/sites',
    heroImage: images.coastNature,
    seo: {
      title: 'Bicuíra Sites — Sites para negócios locais | Bicuíra Digital',
      description:
        'Sites que apresentam melhor seu negócio, organizam informações e facilitam o contato com seus clientes. Pousadas, hospedagens, bares, restaurantes e negócios locais.',
    },
    formLabel: 'Bicuíra Sites',
    card: {
      description:
        'Criamos sites que apresentam melhor seu negócio, organizam informações e facilitam o contato com seus clientes.',
      examples: ['Sites institucionais', 'Páginas comerciais', 'Cardápios digitais'],
      cta: 'Conhecer Sites',
    },
    detail: {
      title: 'Seu negócio merece uma presença digital à altura.',
      mark: 'à altura',
      description:
        'Criamos sites que apresentam melhor seu negócio, organizam informações e facilitam a vida de quem chega até ele.',
      groups: [
        {
          title: 'Para pousadas e hospedagens, os projetos podem incluir',
          items: [
            'Apresentação da pousada',
            'Informações sobre acomodações',
            'Características e comodidades',
            'Localização',
            'Informações úteis para hóspedes',
            'Galeria de fotografias',
            'Canais de contato',
            'Caminhos para solicitar reservas, conforme o projeto',
          ],
        },
        {
          title: 'Para bares e restaurantes',
          items: [
            'Apresentação do estabelecimento',
            'Informações gerais',
            'Cardápios visuais',
            'Localização',
            'Horários e contatos',
            'Informações úteis para os clientes',
          ],
        },
      ],
      note: 'Os recursos são definidos conforme a necessidade de cada cliente.',
      cta: 'Quero um site para meu negócio',
    },
  },
  {
    id: 'automacao',
    number: '02',
    name: 'Bicuíra Automação',
    path: '/automacao',
    heroImage: images.oceanTexture,
    seo: {
      title: 'Bicuíra Automação — Menos tarefas repetitivas | Bicuíra Digital',
      description:
        'Soluções digitais que simplificam processos, conectam ferramentas e ajudam negócios a trabalhar melhor, incluindo aplicações de inteligência artificial.',
    },
    formLabel: 'Bicuíra Automação',
    card: {
      description:
        'Simplificamos tarefas repetitivas e conectamos ferramentas para tornar a rotina do seu negócio mais prática.',
      examples: ['Integrações', 'Automação de processos', 'Soluções com inteligência artificial'],
      cta: 'Conhecer Automação',
    },
    detail: {
      title: 'Menos tarefas repetitivas. Mais tempo para o que importa.',
      mark: 'o que importa',
      description:
        'Criamos soluções digitais que simplificam processos, conectam ferramentas e ajudam negócios a trabalhar melhor.',
      groups: [
        {
          title: 'O que podemos fazer',
          items: [
            'Automatização de tarefas manuais',
            'Integração entre ferramentas',
            'Organização de informações',
            'Entrada automatizada de dados',
            'Simplificação de fluxos de trabalho',
            'Soluções de atendimento',
            'Aplicações de inteligência artificial em processos',
          ],
        },
      ],
      note: 'Cada processo é analisado antes, para entender o que faz sentido automatizar.',
      cta: 'Quero simplificar um processo',
    },
  },
  {
    id: 'fideliza',
    number: '03',
    name: 'Bicuíra Fideliza',
    path: '/fideliza',
    heroImage: images.surfboards, // foto de atmosfera provisória (isPlaceholder: true)
    seo: {
      title: 'Bicuíra Fideliza — Produto em desenvolvimento | Bicuíra Digital',
      description:
        'Cartão de fidelidade digital para restaurantes e bares. Produto em desenvolvimento, em fase de teste com um estabelecimento piloto.',
    },
    formLabel: 'Bicuíra Fideliza',
    inDevelopment: true,
    card: {
      description: 'Um cartão de fidelidade digital para restaurantes e bares, feito para o cliente voltar.',
      examples: ['Cartão web', 'Carimbos', 'Resgates'],
      cta: 'Conhecer Fideliza',
    },
    detail: {
      title: 'Bicuíra Fideliza',
      mark: 'Fideliza',
      description: 'Um cartão de fidelidade digital para restaurantes e bares, feito para o cliente voltar.',
      groups: [],
      steps: {
        title: 'Como funciona',
        items: [
          'O cliente escaneia o QR Code do estabelecimento.',
          'Cadastra-se em poucos segundos e recebe o cartão no celular.',
          'Cada visita vira um carimbo. Ao completar, há um resgate.',
          'O dono acompanha tudo em um painel simples.',
        ],
      },
      status: {
        title: 'Em fase de teste',
        text: 'Estamos validando o cartão com um estabelecimento piloto. Os recursos ainda estão sendo testados e ajustados.',
      },
      join: { title: 'Quer testar com o seu estabelecimento?' },
      cta: 'Quero entrar na lista',
    },
  },
]

// Opção extra do formulário
export const unsureOption = 'Ainda não sei qual solução preciso'

export const inDevelopmentLabel = 'Produto em desenvolvimento'

// Botão que abre as listas de serviços no celular
export const detailsToggle = { open: 'Ver o que pode incluir', close: 'Mostrar menos' }

// Textos fixos das páginas de serviço
export const serviceLabels = {
  home: 'Início',
  serviceTag: 'Serviço',
  include: 'O que pode incluir',
  casesTag: 'Cases',
  casesTitle: 'Projetos reais com esta solução',
  viewCase: 'Ver case completo',
  seeCases: 'Ver os cases',
  statusTitle: 'Em que pé está',
  illustration: 'Ilustração do cartão. Não é uma captura do sistema.',
  otherServices: 'Conheça também',
  finalTitle: 'Vamos conversar sobre o seu negócio?',
  finalText: 'Conta para a gente o que você precisa. A gente entende sua realidade e mostra as possibilidades.',
}

export function findService(id: ServiceId) {
  return services.find((s) => s.id === id)!
}
