# Site da Bicuíra Digital

Tecnologia com raiz local.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Onde mudar as coisas

Tudo o que você vai querer mudar fica na pasta `src/content/`:

| Quero mudar…                         | Arquivo                       |
| ------------------------------------ | ----------------------------- |
| Instagram, WhatsApp, formulário      | `src/content/site.ts`         |
| Textos da página inicial             | `src/content/home.ts`         |
| Textos dos serviços                  | `src/content/services.ts`     |
| Projetos (cases)                     | `src/content/projects.ts`     |
| Fotos e capturas                     | `src/content/images.ts`       |

### Ativar o WhatsApp
Em `site.ts`, troque `whatsappNumber: null` pelo número só com dígitos, com país e DDD. Ex.: `'5548999999999'`.
O botão aparece sozinho no header e no contato.

### Ativar o formulário
Crie um formulário gratuito no [Formspree](https://formspree.io), copie o endereço (ex.: `https://formspree.io/f/abcdwxyz`) e cole em `formEndpoint` no `site.ts`.

### Trocar uma imagem
1. Coloque o arquivo em `public/images/...` (ex.: `public/images/projects/pousada-home.webp`).
2. Em `images.ts`, troque o `src` por `'/images/projects/pousada-home.webp'`, ajuste o `alt` e mude `isPlaceholder` para `false`.

### Adicionar um projeto novo
Copie um dos blocos em `projects.ts`, preencha os textos e as imagens. Ele aparece na página inicial, no rodapé e ganha página em `/projetos/<slug>`.

## Publicar na Vercel

1. Entre em [vercel.com](https://vercel.com) com sua conta do GitHub.
2. **Add New → Project** e escolha o repositório `site-bicuira`.
3. A Vercel reconhece o Vite sozinha (Build: `npm run build`, pasta: `dist`). Clique em **Deploy**.
4. Cada push na branch principal publica de novo automaticamente.

O arquivo `vercel.json` faz as páginas funcionarem quando abertas direto pelo endereço.
