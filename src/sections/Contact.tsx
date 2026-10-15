import { Sun, WaveEdge, WaveShape } from '../components/Doodles'
import { contact } from '../content/home'
import { site, whatsappUrl } from '../content/site'
import ContactForm from './ContactForm'

export default function Contact() {
  const whatsapp = whatsappUrl()

  return (
    <section id="contato" className="relative">
      <WaveEdge className="-mb-px h-12 text-restinga sm:h-20" />
      <div className="on-dark relative overflow-hidden bg-restinga pb-20 pt-8 text-areia md:pb-28">
        <Sun className="absolute -right-20 top-10 hidden w-96 text-sol/90 lg:block" />
        <div className="wrap relative grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="tag text-lima">{contact.tag}</p>
            <h2 className="mt-6 text-big">{contact.title}</h2>
            <p className="text-body mt-8 max-w-md">{contact.text}</p>

            {/* Instagram: canal principal por enquanto */}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 block max-w-md rounded-[2rem] rounded-tl-none bg-lima p-6 text-carvao transition-colors hover:bg-areia sm:p-8"
            >
              <span className="text-[0.8125rem] font-bold uppercase tracking-wider">{contact.instagramLabel}</span>
              <span className="mt-2 flex items-center justify-between gap-4 font-display text-[clamp(1.9rem,5vw,3rem)] leading-none">
                {site.instagram.handle}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-2">
                  →
                </span>
              </span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>

            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[48px] items-center rounded-full border-2 border-areia px-6 font-semibold hover:bg-areia hover:text-carvao"
              >
                {contact.whatsappLabel}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            )}

            <WaveShape className="mt-14 hidden w-64 text-oceano lg:block" />
          </div>

          <div className="lg:col-span-6 lg:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
