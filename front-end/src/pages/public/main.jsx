import { ArrowRight, CheckCircle2 } from 'lucide-react'

const projectRows = [
  ['01', 'Founder CRM', 'Java, React, PostgreSQL'],
  ['02', 'Design sprint OS', 'Product, UX, front-end'],
  ['03', 'Creator workspace', 'API, community, launch'],
]

const principles = [
  ['Contexto primeiro', 'Projeto, fase, stack e papeis visiveis antes da conversa.'],
  ['Menos ruido', 'Uma experiencia mais limpa para escolher onde construir.'],
  ['Time certo', 'Match por complementaridade, nao por networking aleatorio.'],
]

function ProductPreview() {
  return (
    <div className="scroll-reveal relative rounded-[2.5rem] border border-[var(--border)] bg-[var(--card)] p-3 shadow-2xl shadow-[var(--shadow)]">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--background-alt)] p-5">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
              Project feed
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--heading)]">
              Opportunities with context.
            </h2>
          </div>
          <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">
            Live
          </span>
        </div>

        <div className="grid divide-y divide-[var(--border)]">
          {projectRows.map(([number, title, description]) => (
            <article
              className="group grid gap-4 py-6 transition hover:px-3 md:grid-cols-[64px_1fr_auto]"
              key={title}
            >
              <span className="text-sm font-semibold text-[var(--text-soft)]">
                {number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[var(--heading)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--text-soft)]">
                  {description}
                </p>
              </div>
              <ArrowRight
                className="text-[var(--text-soft)] transition group-hover:translate-x-1 group-hover:text-[var(--text)]"
                size={18}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function Main() {
  return (
    <>
      <section
        id="home"
        className="relative px-5 pb-24 pt-28 sm:pt-32 lg:px-8"
      >
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Build with the right people
            </p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-normal text-[var(--heading)] sm:text-7xl lg:text-8xl">
              Projetos reais pedem pessoas certas.
            </h1>

            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[var(--text-muted)]">
              BuildHub organiza descoberta, contexto e colaboracao para formar
              times sem transformar a experiencia em barulho.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/cadastro"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--inverted)] px-6 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--inverted-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--text)] focus:ring-offset-2"
              >
                Entrar no BuildHub
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#preview"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] px-6 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface)]"
              >
                Ver produto
              </a>
            </div>
          </div>

          <ProductPreview />
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--background-alt)] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Menos interface, mais decisao
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--heading)] sm:text-6xl">
              O produto deve respirar antes de pedir atencao.
            </h2>
          </div>

          <div className="grid divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {principles.map(([title, text]) => (
              <article
                className="scroll-reveal grid gap-4 py-7 md:grid-cols-[0.42fr_1fr]"
                key={title}
              >
                <h3 className="text-lg font-semibold text-[var(--heading)]">
                  {title}
                </h3>
                <p className="max-w-xl text-base font-medium leading-7 text-[var(--text-muted)]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preview" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Preview
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--heading)] sm:text-6xl">
              Uma plataforma premium precisa parecer inevitavel, nao cheia.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <ProductPreview />

            <aside className="scroll-reveal flex flex-col justify-between rounded-[2.5rem] bg-[var(--inverted)] p-8 text-[var(--button-text)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                  New direction
                </p>
                <h3 className="mt-5 text-4xl font-semibold leading-none sm:text-5xl">
                  Branco, preto e silencio visual.
                </h3>
              </div>
              <div className="mt-12 grid gap-3">
                {['Light-first', 'No glass', 'Zinc 50-950', 'Scroll reveal'].map(
                  (item) => (
                    <div
                      className="flex items-center gap-3 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white/80"
                      key={item}
                    >
                      <CheckCircle2 size={17} aria-hidden="true" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-8">
        <div className="scroll-reveal mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Comece agora
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[var(--heading)] sm:text-6xl">
              Encontre um projeto com contexto. Entre com precisao.
            </h2>
          </div>

          <a
            href="/cadastro"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--inverted)] px-6 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--inverted-soft)]"
          >
            Criar perfil
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}

export default Main
