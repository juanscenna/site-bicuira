# Bicuíra Digital — regras do projeto

Site institucional e comercial da Bicuíra Digital ("Tecnologia com raiz local.").
Vite + React + TypeScript + Tailwind + React Router. Sem backend. Deploy na Vercel.

## Comandos
- `npm install` — instala dependências
- `npm run dev` — ambiente local
- `npm run build` — checagem de tipos + build (precisa passar sem erros)

## Identidade (não alterar)
- Logotipos oficiais em `public/brand/` (extraídos do manual da marca; `bicuira-simbolo-areia.png` é a versão clara oficial do símbolo, vinda do material do Fideliza, para fundos escuros). Não redesenhar, não recriar em SVG, não inventar versões (ex.: versão branca não existe ainda — usar o logo colorido sobre fundos claros).
- Paleta (tokens no `tailwind.config.ts`) — não introduzir cores novas, só opacidades:
  - `restinga` #25433D · `sol` (Pôr do Sol) #C35E2F · `areia` #F2EBDD · `oceano` #4E889A · `carvao` #292A29 · `lima` #B4CD64
- Contraste: `sol` e `oceano` só servem para texto GRANDE (≥ 24px) ou elementos gráficos. Texto pequeno vai em `carvao`/`restinga` sobre claro, ou `areia`/`lima` sobre `restinga`/`carvao`. Botões não usam `sol`/`oceano`.
- Fontes: Baloo 2 ExtraBold (800) para títulos (`font-display`); Sora para o resto (`font-sans`).
- Direção visual: editorial, assimétrica, tipografia grande, fotografia costeira, rabiscos à mão (`components/Doodles.tsx`). Evitar cara de template, cards idênticos, gradientes roxo/azul, glassmorphism, sombras pesadas. Animações discretas e respeitando `prefers-reduced-motion`.

## Rotas e estrutura
- `/` — página inicial, enxuta: abertura (imagem grande + logo no centro), título, 3 soluções IGUAIS (cada uma com sua cor), Manifesto, Como trabalhamos, Sobre e Contato. Âncoras: `#inicio #solucoes #como-trabalhamos #sobre #contato`.
- `/sites`, `/automacao`, `/fideliza` — uma página por serviço (`pages/ServicePage.tsx`): mesma abertura da home (imagem + placa central), o que inclui, resumo dos cases com "Ver case completo" e CTA final. Fideliza não tem case e mostra o status "em desenvolvimento".
- `/projetos/pousada-sonhos-do-rosa`, `/projetos/automacao-reservas`, `/projetos/agenda-de-todos-nos` — página completa de cada case, com a mesma abertura, trilha (Início / Serviço / Case) e "voltar" para o serviço. Cada case pertence a um serviço (`service` em `projects.ts`).
- qualquer outra → 404
- Todas as páginas começam com `components/PageHero.tsx`.
- `/fideliza/apresentacao` — aba "Apresentação comercial" do Fideliza (`pages/ApresentacaoPage.tsx` + `sections/ApresentacaoFideliza.tsx`): 14 slides (A4 deitado no desktop, blocos empilhados no celular), textos em `content/apresentacao.ts` copiados da fonte `juanscenna/bicuira-fideliza → comercial/apresentacao/apresentacao.html` (não reescrever). PDF em `public/docs/`. As páginas do Fideliza têm abas (`components/FidelizaTabs.tsx`: Visão geral / Apresentação comercial) e a `/fideliza` tem um botão para a apresentação.
- `components/LoyaltyCard.tsx`: cartão de fidelidade animado (mesmo esquema do `CartaoDemo` do repositório do Fideliza, com a identidade da Bicuíra), em versão calma: carimba os selos uma vez ao aparecer, gira ao completar e fica parado. É ilustração, não captura.
- Slides da apresentação: altura natural (nunca proporção fixa com conteúdo cortado) e só uma entrada discreta por slide — sem animar item por item, sem contagem de números, sem faixas correndo.
- `vercel.json` (cleanUrls + rewrite para `index.html`). `ScrollManager` volta ao topo ao trocar de página e rola até a âncora quando há `#`.
- Pré-seleção do formulário: `/?servico=sites#contato` (ids: `sites`, `automacao`, `fideliza`).

## Onde fica cada coisa
- `src/content/` — TODOS os textos:
  - `site.ts` — nome, região, Instagram, `whatsappNumber` (null = sem botão), `formEndpoint` (null = formulário mostra aviso e aponta para o Instagram), menus
  - `home.ts` — textos das seções da página inicial
  - `services.ts` — os três serviços (card da home + página própria: `path`, `heroImage`, `seo`, `detail`) e `serviceLabels`
  - `projects.ts` — lista de cases (novo case = nova entrada com `service` + imagens; aparece na página do serviço e ganha página pelo `GenericProject`)
  - `images.ts` — TODAS as referências de imagem (`isPlaceholder: true` nas provisórias). `images` = fotos de atmosfera (com `srcSet` 800/1600; use `local('/images/...')` para WebP locais). `captures` = espaços das capturas reais dos projetos: com `src: ''` mostram uma composição da marca + "Captura em breve"; para ativar, troque por `{ ...local('/images/projects/x'), alt, isPlaceholder: false }`
- `src/sections/` — seções da home · `src/pages/` — páginas (Home, ServicePage, ProjectPage e layouts dos cases) · `src/components/` — peças reutilizáveis

## Outros detalhes
- Destaques à mão nos títulos: campo `mark` no conteúdo + componente `Mark` (não altera o texto).
- Animações (`Reveal`) nunca escondem conteúdo; tudo desligado com `prefers-reduced-motion`.
- `npm run build` roda `scripts/prerender-meta.mjs`, que gera um HTML por rota com metas Open Graph (imagens em `public/og/`). Endereço base em `site.url` (`site.ts`).
- Contraste: verificar 4.5:1 (texto normal) e 3:1 (≥ 24px ou ≥ 18,66px bold). Nenhum texto abaixo de 12px.

- Exceção de identidade: só o bloco do case Comida Caseira Rosa Norte (slide 9 da apresentação) usa a identidade do cliente (preto #0A0A0A, rosa #E8115A, amarelo #F2B315 e Montserrat 900 em `public/fonts/`).

## Fidelidade à realidade (obrigatório)
- Preservar os nomes corretos dos clientes e usar só os links reais fornecidos (`sonhosdorosa.lovable.app`, `agendadetodosnos.lovable.app`). A automação de reservas é de uso interno: sem link público.
- Bicuíra Fideliza é SEMPRE "Produto em desenvolvimento"; nunca apresentar recursos como prontos.
- Não inventar resultados, métricas, depoimentos, funcionalidades, preços, contatos, endereço, CNPJ, número de clientes, anos de experiência etc.
- Não atribuir tecnologias além das informadas (Lovable, Google Sheets, "inteligência artificial" sem citar fornecedor).
- O resultado da Agenda de Todos Nós é "relatado pela operação", nunca promessa.
- Não apresentar imagens ilustrativas ou molduras como capturas reais. Legendas da galeria só aparecem quando `isPlaceholder` é `false`. Nada de telas falsas.
- Se faltar informação, deixar espaço apropriado e avisar — não inventar.
- Apresentação do Fideliza: selo "Produto em desenvolvimento" no topo; case Rosa Norte é "piloto em andamento" sem resultados; prints com dados levam "Dados fictícios de demonstração"; números de mercado (HBR, Bain, Marketing Metrics) sempre com a nota de referência, não promessa.
