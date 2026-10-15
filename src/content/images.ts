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
export const local = (path: string) => ({
  src: `${path}-1600.webp`,
  srcSet: `${path}-800.webp 800w, ${path}-1600.webp 1600w`,
})

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
  beachAerial: {
    ...unsplash('1519046904884-53103b34b206'),
    alt: 'Vista do alto de uma praia com ondas chegando na areia',
    isPlaceholder: true,
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
  pousadaHome: capture('Captura da página inicial do site da Pousada Sonhos do Rosa (desktop)', 'oceano'),
  pousadaMobile: capture('Captura do site da Pousada Sonhos do Rosa no celular', 'restinga'),
  pousadaInternal: capture('Captura de uma seção interna do site da Pousada Sonhos do Rosa', 'sol'),
  pousadaDetail: capture('Detalhe da interface do site da Pousada Sonhos do Rosa', 'areia'),

  reservasHome: capture('Captura da tela inicial do aplicativo de reservas', 'restinga'),
  reservasForm: capture('Captura da interface de preenchimento da reserva', 'oceano'),
  reservasConfirm: capture('Captura da confirmação do registro da reserva', 'lima'),
  reservasSheet: capture('Captura da planilha com os dados enviados', 'areia'),

  agendaFlyer: capture('Flyer original de um evento', 'sol'),
  agendaUpload: capture('Captura da interface de envio da imagem', 'oceano'),
  agendaExtracted: capture('Captura das informações extraídas do flyer', 'areia'),
  agendaReview: capture('Captura da etapa de revisão humana', 'lima'),
  agendaSheet: capture('Captura da planilha com os dados registrados', 'restinga'),
} satisfies Record<string, SiteImage>


// Logotipos oficiais (public/brand/)
export const brand = {
  horizontal: '/brand/bicuira-logo-horizontal.png',
  principal: '/brand/bicuira-logo-principal.png',
  selo: '/brand/bicuira-selo.png',
  simbolo: '/brand/bicuira-simbolo.png',
}
