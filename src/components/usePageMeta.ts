import { useEffect } from 'react'

// Define o título da aba e a descrição (meta description) de cada página.
export default function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])
}
