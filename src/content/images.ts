// TODAS as imagens do site ficam listadas aqui.
//
// Para trocar uma imagem:
//   1. coloque o arquivo novo em public/images/... (ex.: public/images/surf/hero.webp)
//   2. troque o "src" abaixo por '/images/surf/hero.webp'
//   3. ajuste o "alt" (descrição para quem usa leitor de tela)
//
// isPlaceholder: true  → imagem provisória (foto ilustrativa ou espaço de captura).
// Isso é só um controle interno; nada aparece para o público.
//
// As fotos provisórias vêm do Unsplash (uso comercial permitido).

export type SiteImage = {
  src: string
  srcSet?: string // versões em tamanhos diferentes (o navegador escolhe a melhor)
  alt: string
  isPlaceholder?: boolean
  position?: string // ponto de foco do recorte, ex.: 'center', '30% 50%'
  // Só para espaços de captura sem arquivo: cor da composição da marca
  // que aparece no lugar (com a etiqueta "Captura em breve").
  tone?: CaptureTone
}

export type CaptureTone = 'restinga' | 'oceano' | 'sol' | 'areia' | 'lima'

// Etiqueta discreta mostrada nos espaços de captura ainda vazios
export const captureSoonLabel = 'Captura em breve'

// Espaço de captura vazio: aparece uma composição da marca no lugar.
// Para colocar a captura real, troque por: { ...local('/images/projects/nome'), alt: '...', isPlaceholder: false }
const capture = (alt: string, tone: CaptureTone): SiteImage => ({ src: '', alt, isPlaceholder: true, tone })

// Foto do Unsplash em dois tamanhos (800 e 1600 px de largura)
const unsplash = (id: string) => {
  const url = (w: number) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`
  return { src: url(1600), srcSet: `${url(800)} 800w, ${url(1600)} 1600w` }
}

// Foto local em WebP. Salve dois arquivos com o mesmo nome e o sufixo do tamanho:
//   public/images/surf/hero-800.webp e public/images/surf/hero-1600.webp
// e use: ...local('/images/surf/hero')
// Foto local em WebP quando a imagem original é menor que 1600 px:
// informa a largura real de cada arquivo (ex.: prints de celular com 780 px).
export const localSized = (path: string, small: number, large: number) => ({
  src: `${path}-1600.webp`,
  srcSet: `${path}-800.webp ${small}w, ${path}-1600.webp ${large}w`,
})

export const local = (path: string) => ({
  src: `${path}-1600.webp`,
  srcSet: `${path}-800.webp 800w, ${path}-1600.webp 1600w`,
})

// Vídeo de abertura (sem som, em loop). O poster aparece enquanto carrega
// e no lugar do vídeo para quem prefere menos movimento.
export type SiteVideo = { src: string; webm?: string; poster: string; alt: string }

export const videos = {
  homeHero: {
    src: '/videos/home-abertura.mp4',
    webm: '/videos/home-abertura.webm',
    poster: '/videos/home-abertura-poster.webp',
    alt: 'Vista aérea de uma praia movimentada, com pessoas jogando bola na areia molhada e o morro verde ao fundo',
  },
} satisfies Record<string, SiteVideo>

export const images = {
  // ── Fotografia costeira (atmosfera da marca) ──
  heroCoastal: {
    ...unsplash('1502680390469-be75c86b636f'),
    alt: 'Surfista deslizando em uma onda no fim de tarde',
    isPlaceholder: true,
    position: 'center',
  },
  oceanTexture: {
    ...unsplash('1505118380757-91f5f5632de0'),
    alt: 'Textura de água do mar com espuma',
    isPlaceholder: true,
  },
  // Seção "Sobre" da home (foto enviada pelo cliente)
  beachAerial: {
    src: '/images/home/piscina-natural.webp',
    alt: 'Piscina natural de água clara entre rochas, com uma pessoa nadando e um cachorro na água, e a praia ao fundo',
    position: '50% 60%',
  },
  waveBreaking: {
    ...unsplash('1500375592092-40eb2168fd21'),
    alt: 'Onda quebrando em água azul-esverdeada',
    isPlaceholder: true,
  },
  surfLifestyle: {
    ...unsplash('1455729552865-3658a5d39692'),
    alt: 'Pessoa caminhando na praia com prancha de surfe',
    isPlaceholder: true,
  },
  surfboards: {
    ...unsplash('1531722569936-825d3dd91b15'),
    alt: 'Pranchas de surfe apoiadas na areia',
    isPlaceholder: true,
  },
  oceanAerial: {
    ...unsplash('1468581264429-2548ef9eb732'),
    alt: 'Mar visto de cima, com faixas de espuma',
    isPlaceholder: true,
  },
  coastNature: {
    ...unsplash('1473116763249-2faaef81ccda'),
    alt: 'Costa com vegetação e mar ao fundo',
    isPlaceholder: true,
  },
}

// ── Espaços para as capturas reais dos projetos ──
// Hoje estão vazios (src: ''), então mostram uma composição da marca.
// Quando tiver as capturas, salve em public/images/projects/ (800 e 1600 px, WebP)
// e troque a linha por: nome: { ...local('/images/projects/arquivo'), alt: '...', isPlaceholder: false },
export const captures = {
  pousadaHome: {
    ...local('/images/projects/pousada-home'),
    alt: 'Página inicial do site da Pousada Sonhos do Rosa no computador, com a foto das cabanas, o título "Sua estadia na Praia do Rosa" e o botão de reservar pelo WhatsApp',
    isPlaceholder: false,
  },
  pousadaMobile: {
    ...localSized('/images/projects/pousada-mobile', 390, 780),
    alt: 'Site da Pousada Sonhos do Rosa no celular, com o título, o texto de apresentação e o botão de reservar pelo WhatsApp',
    isPlaceholder: false,
    position: 'top',
  },
  pousadaInternal: {
    ...local('/images/projects/pousada-acomodacoes'),
    alt: 'Seção Acomodações do site da Pousada Sonhos do Rosa, com três cartões de cabanas, fotos, características e o botão de consultar disponibilidade',
    isPlaceholder: false,
  },
  pousadaDetail: {
    ...localSized('/images/projects/pousada-detalhe', 520, 1040),
    alt: 'Detalhe do cartão "Cabana com Vista ao Jardim" no site da Pousada Sonhos do Rosa, com carrossel de fotos, etiquetas e botão verde de consulta',
    isPlaceholder: false,
  },

  reservasHome: {
    ...localSized('/images/projects/reservas-inicio', 390, 780),
    alt: 'Tela inicial do aplicativo de reservas no celular: título "Nova reserva", opção de preencher por mensagem e os campos do hóspede',
    isPlaceholder: false,
    position: 'top',
  },
  reservasDesktop: {
    ...local('/images/projects/reservas-computador'),
    alt: 'Aplicativo de reservas no computador: formulário "Nova reserva" à esquerda e o resumo da reserva à direita',
    isPlaceholder: false,
  },
  reservasForm: {
    ...localSized('/images/projects/reservas-formulario', 390, 780),
    alt: 'Formulário do aplicativo de reservas no celular, com datas de entrada e saída, pessoas, valor total e a escolha da acomodação',
    isPlaceholder: false,
    position: 'top',
  },
  reservasConfirm: {
    src: '/images/projects/reservas-confirmacao.webp',
    alt: 'Tela "Reserva registrada" do aplicativo, com o resumo da reserva e o aviso de que ela foi adicionada à planilha',
    isPlaceholder: false,
    position: 'top',
  },
  reservasSheet: {
    src: '/images/projects/reservas-planilha.webp',
    alt: 'Planilha de reservas no Google Sheets, com o calendário das acomodações e a linha da reserva registrada',
    isPlaceholder: false,
    position: 'top left',
  },

  agendaFlyer: {
    src: '/images/projects/agenda-flyer.webp',
    alt: 'Flyer de um show de rock com data, horário e nome da banda, como chega para a Agenda',
    isPlaceholder: false,
  },
  agendaUpload: {
    ...local('/images/projects/agenda-envio'),
    alt: 'Tela da Agenda de Todos Nós para adicionar um evento: área para arrastar a arte do evento e botão "Selecionar imagem"',
    isPlaceholder: false,
  },
  agendaExtracted: {
    src: '/images/projects/agenda-extraido.webp',
    alt: 'Tela da Agenda com o flyer enviado e a ficha do evento já preenchida pela inteligência artificial',
    isPlaceholder: false,
  },
  agendaReview: {
    src: '/images/projects/agenda-revisao.webp',
    alt: 'Ficha do evento para conferir e corrigir antes de adicionar à agenda',
    isPlaceholder: false,
    position: 'top',
  },
  agendaSheet: capture('Captura da planilha com os dados registrados', 'restinga'),

  // ── Bicuíra Fideliza: prints reais da apresentação comercial ──
  // Origem: juanscenna/bicuira-fideliza → comercial/apresentacao/img/
  // Os prints com dados usam dados fictícios de demonstração (a legenda aparece no site).
  fidelizaCadastroForm: {
    ...localSized('/images/fideliza/apresentacao/cadastro-form', 780, 780),
    alt: 'Tela de cadastro do Bicuíra Fideliza no celular, com os campos nome, celular e se a pessoa é moradora ou está de visita',
    isPlaceholder: false,
  },
  fidelizaCadastro: {
    ...localSized('/images/fideliza/apresentacao/cadastro-rosa-norte', 780, 780),
    alt: 'Página de cadastro do cartão fidelidade da Comida Caseira Rosa Norte no celular, com a chamada “Junte selos. Ganhe recompensas.”',
    isPlaceholder: false,
  },
  fidelizaCartao: {
    ...localSized('/images/fideliza/apresentacao/cartao-rosa-norte', 780, 780),
    alt: 'Cartão fidelidade da Comida Caseira Rosa Norte no celular, com 7 de 10 selos, aviso de quantos faltam para o prêmio e QR Code do cliente',
    isPlaceholder: false,
  },
  fidelizaPainelInicio: {
    ...localSized('/images/fideliza/apresentacao/painel-inicio', 800, 1600),
    alt: 'Painel do estabelecimento no computador, na tela de registrar visita, com busca pelo código do cartão, botão para escanear QR Code e resumo do dia',
    isPlaceholder: false,
  },
  fidelizaPainelMetricas: {
    ...localSized('/images/fideliza/apresentacao/painel-metricas', 800, 1600),
    alt: 'Tela de métricas do painel no computador, com clientes cadastrados, clientes que retornaram, taxa de retorno, gasto em visitas de retorno e ticket médio',
    isPlaceholder: false,
  },
  rosaNorteLogo: {
    ...localSized('/images/fideliza/apresentacao/rosa-norte-logo', 512, 512),
    alt: 'Logo da Comida Caseira Rosa Norte',
    isPlaceholder: false,
  },
  rosaNorteSalao: {
    ...localSized('/images/fideliza/apresentacao/rosa-norte-salao', 800, 1446),
    alt: 'Salão da Comida Caseira Rosa Norte, com mesas de madeira e luz do fim de tarde',
    isPlaceholder: false,
  },
} satisfies Record<string, SiteImage>


// Logotipos oficiais (public/brand/)
export const brand = {
  horizontal: '/brand/bicuira-logo-horizontal.png',
  principal: '/brand/bicuira-logo-principal.png',
  selo: '/brand/bicuira-selo.png',
  simbolo: '/brand/bicuira-simbolo.png',
  // versão clara oficial do símbolo (vem do material do Fideliza), para fundos escuros
  simboloAreia: '/brand/bicuira-simbolo-areia.png',
}
