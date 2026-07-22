import { ArrowRight, CheckCircle2 } from 'lucide-react'

const beliefs = [
  ['Contexto antes de conexao', 'O projeto precisa mostrar fase, objetivo, roles e energia antes da primeira conversa.'],
  ['Times nascem por encaixe', 'Uma boa equipe combina habilidade, interesse, disponibilidade e vontade de construir.'],
  ['Produto real vale mais', 'BuildHub favorece quem quer transformar intencao em progresso visivel.'],
]

const builderTypes = [
  ['Developer', 'Encontra projetos com stack clara e oportunidade real de impacto.'],
  ['Designer', 'Entra cedo para transformar ideias em experiencias usaveis.'],
  ['Founder', 'Abre a visao para pessoas que podem ajudar a tirar o produto do papel.'],
]

function AboutPage() {
  return (
    <>
      <section className="px-5 pb-24 pt-32 sm:pt-36 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Sobre o BuildHub
            </p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-normal text-[var(--heading)] sm:text-7xl lg:text-8xl">
              A gente nao quer mais ideias morrendo sozinhas.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[var(--text-muted)]">
              BuildHub existe para aproximar pessoas, ideias e times em uma
              experiencia onde colaboracao tem direcao e projetos tem chance
              real de sair do papel.
            </p>
          </div>

          <div className="scroll-reveal rounded-[2.5rem] bg-[var(--inverted)] p-8 text-[var(--button-text)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
              Manifesto
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-none sm:text-5xl">
              Menos vitrine. Mais contexto. Mais construcao.
            </h2>
            <div className="mt-10 grid gap-3">
              {['Menos sorte', 'Menos isolamento', 'Mais encaixe'].map((item) => (
                <div
                  className="flex items-center gap-3 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white/80"
                  key={item}
                >
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--background-alt)] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Como pensamos
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--heading)] sm:text-6xl">
              BuildHub e menos sobre networking e mais sobre contexto.
            </h2>
          </div>

          <div className="grid divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {beliefs.map(([title, text]) => (
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

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {builderTypes.map(([title, text], index) => (
            <article
              className="scroll-reveal rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl shadow-[var(--shadow)]"
              key={title}
            >
              <span className="text-sm font-semibold text-[var(--text-soft)]">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-2xl font-semibold text-[var(--heading)]">
                {title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-[var(--text-muted)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-20 lg:px-8">
        <div className="scroll-reveal mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--heading)] sm:text-6xl">
            Entre onde projetos e pessoas comecam a se encontrar.
          </h2>
          <a
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--inverted)] px-6 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--inverted-soft)]"
            href="/cadastro"
          >
            Criar perfil
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}

export default AboutPage
