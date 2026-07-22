import { ArrowRight, CheckCircle2, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

function SignupPage() {
  return (
    <section className="px-5 pb-24 pt-32 sm:pt-36 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_0.82fr]">
        <div className="scroll-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
            Cadastro
          </p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-normal text-[var(--heading)] sm:text-7xl">
            Crie seu perfil e comece a construir com outras pessoas.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[var(--text-muted)]">
            Entre no BuildHub para publicar projetos, descobrir vagas e enviar
            propostas para times que precisam de pessoas como voce.
          </p>

          <div className="mt-10 grid max-w-xl gap-3">
            {['Perfil publico de builder', 'Projetos e roles abertas', 'Aplicacoes com contexto'].map(
              (item) => (
                <div
                  className="flex items-center gap-3 rounded-full border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--text-muted)]"
                  key={item}
                >
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <form
          className="scroll-reveal rounded-[2.5rem] border border-transparent bg-[var(--inverted)] p-6 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)]"
          onSubmit={(event) => event.preventDefault()}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--button-text)] text-[var(--inverted)]">
            <UserPlus size={26} aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-none">
            Criar conta
          </h2>
          <p className="mt-3 text-sm font-medium leading-6 opacity-70">
            Monte seu primeiro acesso para comecar a explorar projetos reais.
          </p>

          <div className="mt-8 grid gap-4">
            <label className="sr-only" htmlFor="signup-username-page">
              Username
            </label>
            <input
              autoComplete="username"
              className="min-h-12 rounded-2xl border border-[var(--form-border)] bg-white/10 px-4 text-sm font-medium text-[var(--button-text)] outline-none transition placeholder:text-[var(--button-text)]/50 focus:border-[var(--button-text)]"
              id="signup-username-page"
              placeholder="Username"
              type="text"
            />

            <label className="sr-only" htmlFor="signup-email-page">
              Email
            </label>
            <input
              autoComplete="email"
              className="min-h-12 rounded-2xl border border-[var(--form-border)] bg-white/10 px-4 text-sm font-medium text-[var(--button-text)] outline-none transition placeholder:text-[var(--button-text)]/50 focus:border-[var(--button-text)]"
              id="signup-email-page"
              placeholder="Email"
              type="email"
            />

            <label className="sr-only" htmlFor="signup-password-page">
              Senha
            </label>
            <input
              autoComplete="new-password"
              className="min-h-12 rounded-2xl border border-[var(--form-border)] bg-white/10 px-4 text-sm font-medium text-[var(--button-text)] outline-none transition placeholder:text-[var(--button-text)]/50 focus:border-[var(--button-text)]"
              id="signup-password-page"
              placeholder="Senha"
              type="password"
            />

            <label className="sr-only" htmlFor="signup-confirm-page">
              Confirmar senha
            </label>
            <input
              autoComplete="new-password"
              className="min-h-12 rounded-2xl border border-[var(--form-border)] bg-white/10 px-4 text-sm font-medium text-[var(--button-text)] outline-none transition placeholder:text-[var(--button-text)]/50 focus:border-[var(--button-text)]"
              id="signup-confirm-page"
              placeholder="Confirmar senha"
              type="password"
            />

            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--button-text)] px-5 text-sm font-semibold text-[var(--inverted)] transition hover:opacity-86"
              type="submit"
            >
              Criar conta
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-6 text-center text-sm font-medium opacity-70">
            Ja tem conta?{' '}
            <Link className="font-semibold text-[var(--button-text)]" to="/login">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default SignupPage
