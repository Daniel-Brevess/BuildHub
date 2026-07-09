import { ArrowLeft, ArrowRight, LogIn } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logoBlack from '../../assets/logo1.png'
import { getInitialColorMode } from './themeMode'

const themes = {
  dark: {
    background: '#07130F',
    backgroundAlt: '#10251B',
    surface: '#F4FFE1',
    card: '#11271D',
    border: 'rgba(244, 255, 225, 0.16)',
    text: '#F7FFE9',
    textMuted: '#B8C7B5',
    heading: '#F7FFE9',
    primary: '#D8FF35',
    accent: '#F0B7FF',
    electric: '#C084FC',
    buttonText: '#07130F',
    shadow: 'rgba(0, 0, 0, 0.36)',
  },
  light: {
    background: '#F6FFE4',
    backgroundAlt: '#E5F8C5',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    border: 'rgba(7, 19, 15, 0.14)',
    text: '#132018',
    textMuted: '#5D6D62',
    heading: '#07130F',
    primary: '#B7EF24',
    accent: '#E9B6F6',
    electric: '#7C3AED',
    buttonText: '#07130F',
    shadow: 'rgba(7, 19, 15, 0.14)',
  },
}

function LoginPage() {
  const navigate = useNavigate()
  const activeTheme = themes[getInitialColorMode()]

  const themeStyles = {
    '--background': activeTheme.background,
    '--background-alt': activeTheme.backgroundAlt,
    '--surface': activeTheme.surface,
    '--card': activeTheme.card,
    '--border': activeTheme.border,
    '--text': activeTheme.text,
    '--text-muted': activeTheme.textMuted,
    '--heading': activeTheme.heading,
    '--primary': activeTheme.primary,
    '--accent': activeTheme.accent,
    '--electric': activeTheme.electric,
    '--button-text': activeTheme.buttonText,
    '--shadow': activeTheme.shadow,
  }

  return (
    <main
      className="min-h-screen overflow-x-clip bg-[var(--background)] font-sans text-[var(--text)]"
      style={themeStyles}
    >
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,var(--primary)_0,transparent_26%),radial-gradient(circle_at_84%_16%,var(--accent)_0,transparent_22%),linear-gradient(135deg,var(--background),var(--background-alt))] opacity-90" />
        <a
          aria-label="Voltar para landing page"
          className="absolute left-6 top-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 lg:left-10 lg:top-10"
          href="/"
        >
          <ArrowLeft size={22} aria-hidden="true" />
        </a>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_0.8fr]">
          <div>
            <img
              src={logoBlack}
              alt="BuildHub"
              className="h-14 w-14 rounded-full object-contain"
            />
            <h1 className="mt-6 max-w-4xl text-6xl font-black leading-[0.9] tracking-normal text-[var(--heading)] sm:text-7xl">
              Entre e continue construindo com pessoas certas.
            </h1>
            <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-[var(--text-muted)]">
              Acesse sua conta para acompanhar projetos, propostas e conversas
              dentro do BuildHub.
            </p>
          </div>

          <form
            className="rounded-[2.5rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl shadow-[var(--shadow)]"
            onSubmit={(event) => {
              event.preventDefault()
              navigate('/app/dashboard')
            }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--button-text)]">
              <LogIn size={26} aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-4xl font-black leading-none text-[var(--heading)]">
              Entrar
            </h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">
              Use seu email e senha para acessar sua conta.
            </p>

            <div className="mt-8 grid gap-4">
              <label className="sr-only" htmlFor="login-email-page">
                Email
              </label>
              <input
                autoComplete="email"
                className="min-h-12 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
                id="login-email-page"
                placeholder="Email"
                type="email"
              />

              <label className="sr-only" htmlFor="login-password-page">
                Senha
              </label>
              <input
                autoComplete="current-password"
                className="min-h-12 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
                id="login-password-page"
                placeholder="Senha"
                type="password"
              />

              <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-black text-[var(--button-text)] transition hover:-translate-y-1"
                type="submit"
              >
                Entrar
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-6 text-center text-sm font-bold text-[var(--text-muted)]">
              Ainda não tem conta?{' '}
              <a className="text-[var(--electric)]" href="/cadastro">
                Criar cadastro
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
