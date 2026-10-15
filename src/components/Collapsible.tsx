import { useId, useState, type ReactNode } from 'react'
import { detailsToggle } from '../content/services'

// No celular, mostra o conteúdo recolhido com um botão "Ver o que pode incluir".
// A partir de 768px fica sempre aberto. O conteúdo está sempre no HTML.
export default function Collapsible({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 px-5 text-sm font-semibold md:hidden ${
          dark ? 'border-areia/70 text-areia' : 'border-carvao text-carvao'
        }`}
      >
        {open ? detailsToggle.close : detailsToggle.open}
        <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      <div id={id} className={`${open ? 'block' : 'hidden'} md:block`}>
        {children}
      </div>
    </>
  )
}
