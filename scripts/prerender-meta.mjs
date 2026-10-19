// Roda depois do build. Cria um HTML para cada página com título, descrição
// e imagem de compartilhamento próprios, para a prévia de link funcionar no
// WhatsApp/Instagram (eles não executam JavaScript).
// Os textos vêm de src/content/ — não precisa editar este arquivo.
import { build } from 'esbuild'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const { outputFiles } = await build({
  stdin: {
    contents: `
      export { homeSeo } from './src/content/home.ts'
      export { projects } from './src/content/projects.ts'
      export { services } from './src/content/services.ts'
      export { apresentacao } from './src/content/apresentacao.ts'
      export { site } from './src/content/site.ts'`,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
})
const { apresentacao, homeSeo, projects, services, site } = await import(
  'data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64')
)

const template = readFileSync('dist/index.html', 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page({ title, description, path, image }) {
  const url = site.url + path
  return template
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${site.url}/og/${image}.png`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
}

writeFileSync('dist/index.html', page({ ...homeSeo, path: '/', image: 'home' }))
// Páginas sem imagem própria em public/og/ usam a imagem da página inicial
const ogImage = (name) => {
  try {
    readFileSync(`public/og/${name}.png`)
    return name
  } catch {
    return 'home'
  }
}

for (const s of services) {
  const name = s.path.slice(1)
  writeFileSync(`dist/${name}.html`, page({ ...s.seo, path: s.path, image: ogImage(name) }))
}

// aba "Apresentação comercial" do Fideliza (/fideliza/apresentacao)
mkdirSync('dist/fideliza', { recursive: true })
writeFileSync('dist/fideliza/apresentacao.html', page({ ...apresentacao.page.seo, path: apresentacao.page.path, image: ogImage('fideliza') }))

mkdirSync('dist/projetos', { recursive: true })
for (const p of projects) {
  writeFileSync(`dist/projetos/${p.slug}.html`, page({ ...p.seo, path: `/projetos/${p.slug}`, image: ogImage(p.slug) }))
}
console.log(`Metas geradas para ${services.length + projects.length + 2} páginas.`)
