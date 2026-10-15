// Os três serviços da Bicuíra.
// "card" = texto curto da seção "Nossas soluções".
// "detail" = texto completo da seção "Serviços".

export type ServiceId = 'sites' | 'automacao' | 'fideliza'

export type Service = {
  id: ServiceId
  number: string
  name: string
  formLabel: string // nome que aparece no campo "Serviço de interesse"
  inDevelopment?: boolean
  card: {
    description: string
    examples: string[]
    cta: string
  }
  detail: {
    title: string
    description: string
    groups: { title?: string; items: string[] }[]
    note?: string
    cta: string
  }
}

export const services: Service[] = [
  {
    id: 'sites',
    number: '01',
    name: 'Bicuíra Sites',
    formLabel: 'Bicuíra Sites',
    card: {
      description:
        'Criamos sites que apresentam melhor seu negócio, organizam informações e facilitam o contato com seus clientes.',
      examples: ['Sites institucionais', 'Páginas comerciais', 'Cardápios digitais'],
      cta: 'Conhecer Sites',
    },
    detail: {
      title: 'Seu negócio merece uma presença digital à altura.',
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
    formLabel: 'Bicuíra Automação',
    card: {
      description:
        'Simplificamos tarefas repetitivas e conectamos ferramentas para tornar a rotina do seu negócio mais prática.',
      examples: ['Integrações', 'Automação de processos', 'Soluções com inteligência artificial'],
      cta: 'Conhecer Automação',
    },
    detail: {
      title: 'Menos tarefas repetitivas. Mais tempo para o que importa.',
      description:
        'Criamos soluções digitais que simplificam processos, conectam ferramentas e ajudam negócios a trabalhar melhor.',
      groups: [
        {
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
    formLabel: 'Bicuíra Fideliza',
    inDevelopment: true,
    card: {
      description:
        'Uma proposta de fidelização digital para incentivar os clientes a voltar e fortalecer o relacionamento com seu estabelecimento.',
      examples: ['Cartões digitais', 'Carimbos', 'Recompensas'],
      cta: 'Conhecer Fideliza',
    },
    detail: {
      title: 'Faça seus clientes terem mais motivos para voltar.',
      description:
        'Estamos desenvolvendo uma solução de fidelização digital para aproximar estabelecimentos de seus clientes e incentivar novas visitas.',
      groups: [
        {
          title: 'A proposta pode incluir',
          items: [
            'Cartão digital de fidelidade',
            'Registro de carimbos',
            'Recompensas e benefícios',
            'Comunicação para incentivar o retorno',
            'Mecanismos para fortalecer o relacionamento com clientes',
          ],
        },
      ],
      note: 'Os recursos ainda são uma proposta de produto e estão em validação.',
      cta: 'Tenho interesse no Fideliza',
    },
  },
]

// Opção extra do formulário
export const unsureOption = 'Ainda não sei qual solução preciso'

export const inDevelopmentLabel = 'Produto em desenvolvimento'
