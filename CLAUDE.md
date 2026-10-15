# Bicuíra Digital — regras do projeto

Site institucional e comercial da Bicuíra Digital ("Tecnologia com raiz local.").
Vite + React + TypeScript + Tailwind + React Router. Sem backend. Deploy na Vercel.

## Comandos
- `npm install` — instala dependências
- `npm run dev` — ambiente local
- `npm run build` — checagem de tipos + build (precisa passar sem erros)

## Identidade (não alterar)
- Logotipos oficiais em `public/brand/` (extraídos do manual da marca). Não redesenhar, não recriar em SVG, não inventar versões (ex.: versão branca não existe ainda — usar o logo colorido sobre fundos claros).
- Paleta (tokens no `tailwind.config.ts`) — não introduzir cores novas, só opacidades:
  - `restinga` #25433D · `sol` (Pôr do Sol) #C35E2F · `areia` #F2EBDD · `oceano` #4E889A · `carvao` #292A29 · `lima` #B4CD64
- Contraste: `sol` e `oceano` só servem para texto GRANDE (≥ 24px) ou elementos gráficos. Texto pequeno vai em `carvao`/`restinga` sobre claro, ou `areia`/`lima` sobre `restinga`/`carvao`. Botões não usam `sol`/`oceano`.
- Fontes: Baloo 2 ExtraBold (800) para títulos (`font-display`); Sora para o resto (`font-sans`).
- Direção visual: editorial, assimétrica, tipografia grande, fotografia costeira, rabiscos à mão (`components/Doodles.tsx`). Evitar cara de template, cards idênticos, gradientes roxo/azul, glassmorphism, sombras pesadas. Animações discretas e respeitando `prefers-reduced-motion`.

## Rotas
- `/` — página inicial (âncoras: `#inicio #solucoes #projetos #servicos #servico-sites #servico-automacao #servico-fideliza #como-trabalhamos #sobre #contato`)
- `/projetos/pousada-sonhos-do-rosa`, `/projetos/automacao-reservas`, `/projetos/agenda-de-todos-nos`
- qualquer outra → 404
- `vercel.json` reescreve tudo para `index.html`. `ScrollManager` volta ao topo ao trocar de página e rola até a âncora quando há `#`.
- Pré-seleção do formulário: `/?servico=sites#contato` (ids: `sites`, `automacao`, `fideliza`).

## Onde fica cada coisa
- `src/content/` — TODOS os textos:
  - `site.ts` — nome, região, Instagram, `whatsappNumber` (null = sem botão), `formEndpoint` (null = formulário mostra aviso e aponta para o Instagram), menus
  - `home.ts` — textos das seções da página inicial
  - `services.ts` — os três serviços (card + detalhe)
  - `projects.ts` — lista de cases (novo case = nova entrada + imagens; ganha página pelo `GenericProject`)
  - `images.ts` — TODAS as referências de imagem (`isPlaceholder: true` nas provisórias)
- `src/sections/` — seções da home · `src/pages/` — páginas · `src/components/` — peças reutilizáveis

## Fidelidade à realidade (obrigatório)
- Preservar os nomes corretos dos clientes e usar só os links reais fornecidos (`sonhosdorosa.lovable.app`, `agendadetodosnos.lovable.app`). A automação de reservas é de uso interno: sem link público.
- Bicuíra Fideliza é SEMPRE "Produto em desenvolvimento"; nunca apresentar recursos como prontos.
- Não inventar resultados, métricas, depoimentos, funcionalidades, preços, contatos, endereço, CNPJ, número de clientes, anos de experiência etc.
- Não atribuir tecnologias além das informadas (Lovable, Google Sheets, "inteligência artificial" sem citar fornecedor).
- O resultado da Agenda de Todos Nós é "relatado pela operação", nunca promessa.
- Não apresentar imagens ilustrativas ou molduras como capturas reais. Legendas da galeria só aparecem quando `isPlaceholder` é `false`. Nada de telas falsas.
- Se faltar informação, deixar espaço apropriado e avisar — não inventar.
