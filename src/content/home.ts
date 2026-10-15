// Textos das seções da página inicial.
// (Os serviços ficam em services.ts e os projetos em projects.ts.)

export const homeSeo = {
  title: 'Bicuíra Digital — Tecnologia com raiz local',
  description:
    'Sites, automações e soluções digitais para negócios de Garopaba, Praia do Rosa e região. Tecnologia prática, pensada para a realidade de cada negócio.',
}

export const hero = {
  tag: 'Garopaba · Praia do Rosa · SC',
  // Título "Tecnologia com raiz local." dividido em partes para a composição.
  // A palavra em "highlight" ganha o círculo desenhado à mão.
  title: { before: 'Tecnologia com', highlight: 'raiz', after: 'local.' },
  caption: 'Sites, automações e soluções digitais — feitos aqui, para negócios reais.',
  text: 'Criamos sites e soluções digitais que simplificam a rotina, conectam pessoas e ajudam negócios a crescer.',
  primaryCta: 'Vamos conversar sobre seu negócio',
  secondaryCta: 'Conheça nossos projetos',
}

export const solutionsIntro = {
  tag: 'Nossas soluções',
  title: 'Três caminhos para fazer seu negócio evoluir.',
  mark: 'evoluir', // trecho destacado com traço à mão (não altera o texto)
  text: 'Da presença digital à automação de processos e à fidelização de clientes, criamos soluções práticas para as necessidades de cada negócio.',
}

export const manifesto = {
  tag: 'Manifesto',
  title: ['Menos complicação.', 'Mais possibilidades.'],
  mark: 'possibilidades',
  paragraphs: [
    'Acreditamos que a tecnologia deve trabalhar a favor das pessoas.',
    'Por isso, criamos soluções práticas, pensadas para a realidade de cada negócio. Sem complicação desnecessária, sem fórmulas prontas e sem promessas vazias.',
    'Tecnologia com proximidade, liberdade para criar e vontade de crescer junto.',
  ],
}

export const projectsIntro = {
  tag: 'Projetos',
  title: 'Tecnologia aplicada a problemas reais.',
  mark: 'problemas reais',
  text: 'Cada projeto começa com um desafio. Nosso trabalho é entender o que precisa melhorar e construir uma solução que faça sentido na prática.',
}

export const servicesIntro = {
  tag: 'Serviços',
}

export const howWeWork = {
  tag: 'Como trabalhamos',
  title: 'Uma boa solução começa entendendo o problema.',
  mark: 'entendendo',
  steps: [
    { name: 'Entender', text: 'Conhecemos o negócio, a rotina e os desafios do cliente.' },
    { name: 'Identificar', text: 'Analisamos oportunidades para melhorar processos ou experiências.' },
    { name: 'Planejar', text: 'Definimos uma solução compatível com a necessidade, o orçamento e a realidade do negócio.' },
    { name: 'Desenvolver', text: 'Construímos, testamos e ajustamos a solução.' },
    { name: 'Entregar e acompanhar', text: 'Entregamos o projeto e realizamos o acompanhamento previsto no escopo contratado.' },
  ],
}

export const about = {
  tag: 'Sobre a Bicuíra',
  title: 'Tecnologia que entende de onde vem.',
  mark: 'de onde vem',
  paragraphs: [
    'A Bicuíra Digital nasceu da vontade de aproximar a tecnologia da realidade dos negócios.',
    'Com raízes locais e uma visão aberta para novas possibilidades, desenvolvemos soluções que respeitam a identidade de cada empresa e buscam tornar o trabalho mais simples.',
    'Acreditamos em relações verdadeiras, liberdade para criar e tecnologia que faça sentido na prática.',
    'Mais do que entregar ferramentas, queremos entender os desafios de cada negócio e construir soluções que permitam crescer juntos.',
  ],
  values: ['Proximidade', 'Transparência', 'Criatividade', 'Simplicidade'],
}

export const contact = {
  tag: 'Contato',
  title: 'Tem alguma coisa no seu negócio que poderia funcionar melhor?',
  mark: 'funcionar melhor',
  text: 'Conta para a gente o que você está buscando. Vamos entender sua necessidade e conversar sobre as possibilidades.',
  instagramLabel: 'Fale com a gente no Instagram',
  whatsappLabel: 'Chamar no WhatsApp',
  form: {
    title: 'Ou deixe uma mensagem',
    name: 'Nome',
    company: 'Empresa',
    service: 'Serviço de interesse',
    servicePlaceholder: 'Escolha uma opção',
    message: 'Mensagem',
    requiredNote: 'Campos com * são obrigatórios.',
    goInstagram: 'Ir para o Instagram',
    submit: 'Enviar mensagem',
    sending: 'Enviando…',
    errors: {
      name: 'Conta pra gente seu nome.',
      service: 'Escolha um serviço (ou "Ainda não sei").',
      message: 'Escreva uma mensagem com pelo menos 10 caracteres.',
    },
    // Aparece enquanto site.formEndpoint for null
    notReady:
      'Nosso formulário está chegando em breve. Enquanto isso, fale com a gente pelo Instagram.',
    success: 'Mensagem enviada! Vamos responder assim que possível.',
    failure: 'Não conseguimos enviar agora. Tente de novo ou fale com a gente pelo Instagram.',
  },
}

export const notFound = {
  title: 'Onda errada.',
  text: 'A página que você procurou não existe ou mudou de lugar.',
  button: 'Voltar para o início',
}
