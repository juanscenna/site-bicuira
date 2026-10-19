// Apresentação comercial do Bicuíra Fideliza (seção #apresentacao da página /fideliza).
// Textos copiados de juanscenna/bicuira-fideliza → comercial/apresentacao/apresentacao.html.
// Não reescreva: se a apresentação mudar, atualize aqui.
//
// Marcação simples nos textos:  **negrito**
// Títulos: { text, highlight, color } → "highlight" aparece na cor indicada.
//
// Ajustes feitos a pedido (placeholders da fonte):
//   [PRAZO]     → "a combinar"
//   [SOBRENOME] → removido (fica só "Samuel")

import { captures } from './images'

export type Tone = 'sol' | 'lima' | 'oceano'
export type SlideTitle = { text: string; highlight?: string; after?: string; color?: Tone }
export type IconName =
  | 'pin' | 'users' | 'check' | 'logout' | 'card' | 'eyeOff' | 'qr' | 'userPlus' | 'phone' | 'circleCheck'
  | 'gift' | 'repeat' | 'wallet' | 'bell' | 'search' | 'pencil' | 'chart' | 'clock' | 'coffee' | 'chat'
  | 'palette' | 'rocket' | 'instagram' | 'globe' | 'user' | 'utensils' | 'glass' | 'bed'

export const apresentacao = {
  // Cabeçalho da seção no site
  section: {
    tag: 'Apresentação comercial',
    title: 'Bicuíra Fideliza · Apresentação comercial',
    note: 'Os recursos ainda são uma proposta de produto e estão em validação.',
    download: 'Baixar apresentação em PDF',
    downloadInfo: 'PDF · 14 páginas · 1 MB',
    pdf: '/docs/Bicuira-Fideliza-Apresentacao.pdf',
    jump: 'Ver apresentação comercial',
  },

  // Página própria da apresentação: /fideliza/apresentacao
  page: {
    path: '/fideliza/apresentacao',
    seo: {
      title: 'Apresentação comercial — Bicuíra Fideliza | Bicuíra Digital',
      description:
        'Apresentação comercial do Bicuíra Fideliza: como funciona o cartão fidelidade no celular, planos, condição de piloto e o case Comida Caseira Rosa Norte. Produto em desenvolvimento.',
    },
    breadcrumb: 'Apresentação comercial',
    // abas no topo das páginas do Fideliza
    tabs: { overview: 'Visão geral', presentation: 'Apresentação comercial', label: 'Seções do Bicuíra Fideliza' },
    // botão na página /fideliza
    teaser: {
      title: 'Veja a apresentação comercial',
      text: 'Como funciona, o que o cliente e o dono veem, planos, condição de piloto e o case Comida Caseira Rosa Norte.',
      button: 'Abrir apresentação comercial',
    },
    final: { title: 'Gostou do que viu?', text: 'Fale com a gente e conte como funciona o seu negócio.', button: 'Tenho interesse no Fideliza' },
  },

  // 01 · Capa
  capa: {
    title: ['Bicuíra', 'Fideliza'],
    tagline: 'Fidelidade digital com raiz local.',
    text: 'O cartão fidelidade no celular do seu cliente, para pousadas, bares e restaurantes de Garopaba, Praia do Rosa e Imbituba.',
    // rótulos do cartão animado (ilustração, não é captura do sistema)
    card: {
      label: 'Cartão fidelidade',
      name: 'Bicuíra Fideliza',
      reward: 'Recompensa liberada!',
      back: 'Tecnologia com raiz local',
      alt: 'Ilustração animada de um cartão fidelidade ganhando selos até liberar a recompensa',
    },
  },

  // 02 · Quem somos
  quemSomos: {
    tag: 'Quem somos',
    title: { text: 'Tecnologia com raiz local.' } as SlideTitle,
    text: 'A **Bicuíra Digital** nasceu entre o morro, o mar e o pôr do sol daqui. Criamos tecnologia para quem vive do turismo e da comunidade: pousadas, bares e restaurantes da nossa região.',
    items: [
      { icon: 'pin', text: 'Garopaba · Praia do Rosa · Imbituba' },
      { icon: 'users', text: 'Atendimento perto, de quem conhece a temporada' },
      { icon: 'check', text: 'Sites, automação e fidelização' },
    ] as { icon: IconName; text: string }[],
  },

  // 03 · O problema
  problema: {
    tag: 'O problema',
    title: { text: 'O cliente gostou. Mas ', highlight: 'ele volta?', color: 'sol' } as SlideTitle,
    cards: [
      { icon: 'logout', title: 'Vem uma vez e some', text: 'Muita gente aparece, gosta e não volta. E você nem fica sabendo quem era.' },
      { icon: 'card', title: 'O cartão de papel se perde', text: 'Fica na carteira, molha na praia, esquece em casa. Os carimbos somem junto.' },
      { icon: 'eyeOff', title: 'Você não vê quem retorna', text: 'Sem registro, não dá para saber quem é fiel, quanto gasta ou quando parou de vir.' },
    ] as { icon: IconName; title: string; text: string }[],
  },

  // 04 · Por que fidelizar (os números contam do zero ao valor)
  porQue: {
    tag: 'Por que fidelizar',
    title: { text: 'Quem já conhece a casa ', highlight: 'vale mais.', color: 'lima' } as SlideTitle,
    stats: [
      { value: '5 a 25×', text: 'mais caro **conquistar um cliente novo** do que manter quem já vem.', source: 'Harvard Business Review, 2014' },
      { value: '60 a 70%', text: 'de chance de vender de novo para **quem já é cliente**. Para um desconhecido: 5 a 20%.', source: 'Marketing Metrics (Farris et al.)' },
      { value: '+5%', text: 'de clientes que ficam pode significar **25% a 95%** a mais de lucro.', source: 'Bain & Company (F. Reichheld)' },
    ],
    closing: 'Fidelizar é **valorizar quem já é seu**: o morador de toda semana, o turista de todo verão.',
    footnote: 'Estudos de mercado gerais, citados como referência. Não são promessa de resultado.',
  },

  // 05 · Como funciona
  comoFunciona: {
    tag: 'Como funciona',
    title: { text: 'Cinco passos. ', highlight: 'Nenhum aplicativo.', color: 'sol' } as SlideTitle,
    stepLabel: 'Passo',
    steps: [
      { icon: 'qr', title: 'Escaneia o QR', text: 'Na mesa, no balcão ou na recepção.' },
      { icon: 'userPlus', title: 'Cadastro rápido', text: 'Só nome e celular, em uns 30 segundos.' },
      { icon: 'phone', title: 'Cartão no celular', text: 'No navegador e no Google Wallet.' },
      { icon: 'circleCheck', title: 'Selo a cada visita', text: 'Mostra o código, a equipe registra.' },
      { icon: 'gift', title: 'Recompensa', text: 'Completou, ganha o prêmio que você definiu.' },
    ] as { icon: IconName; title: string; text: string }[],
    banner: '**Um QR só:** cria o cartão de quem é novo e abre direto o cartão de quem já tem.',
  },

  // 06 · Para o cliente
  paraCliente: {
    tag: 'Para o cliente',
    title: { text: 'Simples do ', highlight: 'outro lado do balcão.', color: 'lima' } as SlideTitle,
    items: [
      { icon: 'phone', text: 'Sem aplicativo: abre no navegador' },
      { icon: 'wallet', text: 'Guarda no Google Wallet*' },
      { icon: 'circleCheck', text: 'Vê os selos e quanto falta para o prêmio' },
      { icon: 'bell', text: 'Recebe avisos com o nome e a logo da casa' },
      { icon: 'repeat', text: 'Na próxima visita, o QR abre direto o cartão' },
    ] as { icon: IconName; text: string }[],
    footnote: '* Após a liberação do Google para o estabelecimento.',
    shots: [
      { image: captures.fidelizaCadastroForm, label: 'Cadastro' },
      { image: captures.fidelizaCartao, label: 'Cartão' },
    ],
  },

  // 07 · Para o dono
  paraDono: {
    tag: 'Para o dono',
    title: { text: 'Registrar uma visita leva ', highlight: 'segundos.', color: 'sol' } as SlideTitle,
    shot: captures.fidelizaPainelInicio,
    items: [
      { icon: 'search', title: 'Busca por código ou QR', text: 'Digita o código ou escaneia com a câmera.' },
      { icon: 'circleCheck', title: 'Visita e valor', text: 'O selo entra sozinho quando bate a regra.' },
      { icon: 'pencil', title: 'Corrige e remove', text: 'Errou? Ajusta ou retira, com histórico.' },
      { icon: 'gift', title: 'Entrega a recompensa', text: 'Um toque e o cartão recomeça.' },
    ] as { icon: IconName; title: string; text: string }[],
  },

  // 08 · Métricas
  metricas: {
    tag: 'O que você enxerga',
    title: { text: 'Conhecer ', highlight: 'quem volta.', color: 'sol' } as SlideTitle,
    shot: captures.fidelizaPainelMetricas,
    items: [
      { icon: 'repeat', title: 'Clientes que retornaram', text: 'Quem voltou e com que frequência.' },
      { icon: 'chart', title: 'Gasto registrado', text: 'Total e ticket médio das visitas de retorno.' },
      { icon: 'clock', title: 'Clientes inativos', text: 'Quem sumiu, para um “sentimos sua falta”.' },
      { icon: 'users', title: 'Morador × turista', text: 'Métricas separadas por plano.' },
    ] as { icon: IconName; title: string; text: string }[],
    footnote: 'Valores registrados no painel pelo operador, não faturamento do restaurante.',
  },

  // 09 · Case (identidade do cliente: Comida Caseira Rosa Norte)
  caseRosa: {
    sticker: 'Case · piloto em andamento',
    title: { text: 'Comida Caseira ', highlight: 'Rosa Norte' },
    text: 'Uma identidade inteira criada para eles: página, cartão, selos e painel.',
    logo: captures.rosaNorteLogo,
    shots: [
      // demo: print com dados → mostra "Dados fictícios de demonstração"
      { image: captures.fidelizaCadastro, label: 'Cadastro', frame: 'phone' as const, demo: false },
      { image: captures.fidelizaCartao, label: 'Selos com a logo', frame: 'phone' as const, demo: true },
      { image: captures.fidelizaPainelInicio, label: 'Painel do dono', frame: 'pc' as const, demo: true },
    ],
    numbers: { label: 'Números do piloto', text: 'Resultados em breve' },
    testimonial: { label: 'Depoimento', text: '“Resultados em breve.”' },
    features: ['2 planos: morador e turista', 'Google Wallet', 'Avisos no celular', 'QR único'],
    strip: ['Cartão fidelidade', 'Junte selos', 'Ganhe recompensas', 'Rosa Norte', 'Comida caseira', 'Cartão fidelidade'],
  },

  // 10 · Para cada negócio
  negocios: {
    tag: 'Feito para o seu negócio',
    title: { text: 'A cara da sua casa. ', highlight: 'A regra do seu jeito.', color: 'oceano' } as SlideTitle,
    cards: [
      { icon: 'utensils', name: 'Restaurante', goal: 10, filled: 7, rule: '10 almoços = 1 prato grátis', text: 'Plano morador para quem vem toda semana e plano turista mais curto para a temporada.' },
      { icon: 'glass', name: 'Bar', goal: 8, filled: 5, rule: '8 visitas = 1 drink da casa', text: 'Gasto mínimo por visita e aviso de “happy hour hoje” para quem já vem.' },
      { icon: 'bed', name: 'Pousada', goal: 3, filled: 2, rule: '3 estadias = late checkout', text: 'Lembrete para o hóspede da última temporada voltar na próxima.' },
    ] as { icon: IconName; name: string; goal: number; filled: number; rule: string; text: string }[],
    footnote: 'Exemplos ilustrativos: meta de selos, recompensa e gasto mínimo são definidos por você.',
  },

  // 11 · Planos
  planos: {
    tag: 'Planos e preços',
    title: { text: 'Escolha o tamanho certo.' } as SlideTitle,
    recommended: '★ Recomendado',
    perMonth: '/mês',
    plans: [
      {
        name: 'Essencial', price: '39,99', setup: '490', featured: false,
        items: ['Cadastro com sua logo e cores', 'Cartão com selos (navegador e Google Wallet, após liberação do Google)', '1 plano de fidelidade', 'Painel: registro, correção e resgate', 'Avisos automáticos: selo faltando e recompensa disponível', 'Métricas básicas', 'QR Code para impressão', 'Suporte por e-mail em até 2 dias úteis'],
      },
      {
        name: 'Profissional', price: '99', setup: '990', featured: true,
        items: ['Tudo do Essencial', '2 planos: morador e turista', 'Troca de plano pelo painel', 'Dashboard completo separado por plano', 'Mensagens personalizadas com limite de frequência', 'Aviso de “sentimos sua falta”', '1 display e 1 adesivo impressos', 'Suporte por WhatsApp em até 1 dia útil', '1 ajuste de identidade por trimestre'],
      },
      {
        name: 'Premium', price: '349', setup: '1.990', featured: false,
        items: ['Tudo do Profissional', 'Página com design exclusivo', 'Ajustes ilimitados no primeiro mês', 'Treinamento presencial ou por vídeo', '2 displays e 3 adesivos', 'Suporte no mesmo dia útil'],
      },
    ],
    // linhas abaixo do preço (fonte: "+ R$ 1 por selo · implantação R$ {setup}")
    perStamp: '+ R$ 1 por selo',
    setup: (value: string) => `implantação R$ ${value}`,
    footnote: 'Apple Wallet: adicional sob consulta, a partir de R$ 300 de implantação. Não incluído nos planos.',
  },

  // 12 · Piloto (a conta monta em etapas)
  piloto: {
    tag: 'Condição de piloto · 3 meses',
    title: { text: 'Menos que ', highlight: 'um café por dia.', color: 'lima' } as SlideTitle,
    conta: [
      { label: 'Mensalidade', value: 'R$ 99', unit: 'por mês' },
      { op: '÷' },
      { label: 'Dias no mês', value: '30', unit: 'dias' },
      { op: '=' },
      { label: 'Por dia', value: 'R$ 3,30', unit: 'por dia', highlight: true },
      { op: '<' },
      { icon: 'coffee', value: '1 cafezinho', unit: 'no balcão' },
    ] as { label?: string; value?: string; unit?: string; op?: string; highlight?: boolean; icon?: IconName }[],
    cards: [
      { icon: 'circleCheck', title: '+ R$ 1 por selo', text: 'Só paga quando o cliente **voltou e consumiu**. Numa conta de R$ 50, é 2%.' },
      { icon: 'repeat', title: '2 visitas pagam o mês', text: 'Com uma conta média de R$ 50, duas visitas de retorno já cobrem os R$ 99.' },
      { icon: 'gift', title: 'Implantação R$ 299', text: 'No lugar de ~~R$ 990~~. Recursos do plano Profissional por 3 meses.', featured: true },
    ] as { icon: IconName; title: string; text: string; featured?: boolean }[],
    footnote: 'Exemplo com conta média de R$ 50. Simulação ilustrativa, não é promessa de faturamento.',
  },

  // 13 · Implantação
  implantacao: {
    tag: 'Implantação e próximos passos',
    title: { text: 'Do ', highlight: 'sim', after: ' ao primeiro selo.', color: 'sol' } as SlideTitle,
    stepLabel: 'Passo',
    steps: [
      { icon: 'chat', title: 'Conversa', text: 'Meta de selos, recompensa, gasto mínimo e planos.' },
      { icon: 'palette', title: 'Identidade', text: 'Página e cartão com a cara da sua casa.' },
      { icon: 'chart', title: 'Painel', text: 'Acesso do dono e da equipe configurado.' },
      { icon: 'qr', title: 'Treino e QR', text: 'Equipe treinada e material impresso.' },
      { icon: 'rocket', title: 'Lançamento', text: 'Primeiros cartões e acompanhamento de perto.' },
    ] as { icon: IconName; title: string; text: string }[],
    deadline: { label: 'Prazo', text: 'a combinar após a aprovação da identidade' },
  },

  // 14 · Contato
  contato: {
    title: { text: 'Vamos fidelizar ', highlight: 'quem já é seu?', color: 'lima' } as SlideTitle,
    items: [
      { icon: 'instagram', text: '@bicuiradigital', href: 'https://www.instagram.com/bicuiradigital/' },
      { icon: 'globe', text: 'site-bicuira.vercel.app' },
      { icon: 'user', text: 'Samuel' },
    ] as { icon: IconName; text: string; href?: string }[],
    tagline: 'Tecnologia com raiz local',
  },
}
