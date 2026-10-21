import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { contact } from '../content/home'
import { services, unsureOption } from '../content/services'
import { site } from '../content/site'

type Fields = { nome: string; empresa: string; servico: string; mensagem: string }
type Errors = Partial<Record<keyof Fields, string>>

const texts = contact.form
const options = [...services.map((s) => s.formLabel), unsureOption]

function validate(f: Fields): Errors {
  const errors: Errors = {}
  if (f.nome.trim().length < 2) errors.nome = texts.errors.name
  if (!f.servico) errors.servico = texts.errors.service
  if (f.mensagem.trim().length < 10) errors.mensagem = texts.errors.message
  return errors
}

// Formulário de contato: não guarda nada no site. Ao enviar, abre o WhatsApp
// com a mensagem já montada a partir dos campos (a pessoa só aperta enviar lá).
export default function ContactForm() {
  const [params] = useSearchParams()
  const [fields, setFields] = useState<Fields>({ nome: '', empresa: '', servico: '', mensagem: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  // Pré-seleciona o serviço quando o link vem de um botão (ex.: /?servico=sites#contato)
  const fromLink = params.get('servico')
  useEffect(() => {
    const service = services.find((s) => s.id === fromLink)
    if (service) setFields((f) => ({ ...f, servico: service.formLabel }))
  }, [fromLink])

  function update(name: keyof Fields, value: string) {
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // leva o foco para o primeiro campo com erro
      const first = Object.keys(found)[0]
      document.getElementById(`campo-${first}`)?.focus()
      return
    }

    const text = [
      `Olá! Sou ${fields.nome.trim()}${fields.empresa.trim() ? `, da ${fields.empresa.trim()}` : ''}.`,
      `Interesse: ${fields.servico}.`,
      '',
      fields.mensagem.trim(),
    ].join('\n')
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const input =
    'mt-2 block w-full rounded-lg border-2 bg-areia px-4 py-3 text-carvao placeholder:text-carvao/50 focus:border-restinga focus:outline-none focus-visible:outline-[3px] focus-visible:outline-sol'
  const border = (name: keyof Fields) => (errors[name] ? 'border-sol' : 'border-carvao/20')

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-[2rem] rounded-tr-none bg-areia p-6 text-carvao sm:p-10">
      <h3 className="text-mid text-restinga">{texts.title}</h3>
      <p className="mt-2 text-sm text-carvao/75">{texts.requiredNote}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label={texts.name} name="nome" error={errors.nome} required>
          <input
            id="campo-nome"
            name="nome"
            autoComplete="name"
            value={fields.nome}
            onChange={(e) => update('nome', e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? 'erro-nome' : undefined}
            className={`${input} ${border('nome')}`}
          />
        </Field>
        <Field label={texts.company} name="empresa">
          <input
            id="campo-empresa"
            name="empresa"
            autoComplete="organization"
            value={fields.empresa}
            onChange={(e) => update('empresa', e.target.value)}
            className={`${input} ${border('empresa')}`}
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field label={texts.service} name="servico" error={errors.servico} required>
          <select
            id="campo-servico"
            name="servico"
            value={fields.servico}
            onChange={(e) => update('servico', e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.servico}
            aria-describedby={errors.servico ? 'erro-servico' : undefined}
            className={`${input} ${border('servico')} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23292A29' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">{texts.servicePlaceholder}</option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label={texts.message} name="mensagem" error={errors.mensagem} required>
          <textarea
            id="campo-mensagem"
            name="mensagem"
            rows={5}
            value={fields.mensagem}
            onChange={(e) => update('mensagem', e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? 'erro-mensagem' : undefined}
            className={`${input} ${border('mensagem')} resize-y`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-carvao px-8 font-semibold text-areia transition-colors hover:bg-restinga disabled:opacity-60 sm:w-auto"
      >
        {texts.submit}
      </button>

      <div aria-live="polite" className="mt-6">
        {sent && <p className="rounded-xl bg-lima p-5 font-medium">{texts.success}</p>}
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string
  name: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={`campo-${name}`} className="text-sm font-semibold">
        {label}
        {required && (
          <span aria-hidden="true" className="text-restinga">
            {' '}*
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`erro-${name}`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-carvao">
          <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-carvao text-[0.75rem] font-bold text-areia">
            !
          </span>
          {error}
        </p>
      )}
    </div>
  )
}
