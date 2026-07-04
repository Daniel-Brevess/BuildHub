import { useState } from 'react'
import {
  ArrowRight,
  AtSign,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  MessageSquare,
  Moon,
  ShieldCheck,
  SunMedium,
  UsersRound,
  WandSparkles,
} from 'lucide-react'
import logoLight from '../../assets/logo1.png'
import logoDark from '../../assets/logo2.png'

const themes = {
  dark: {
    name: 'Premium Dark',
    background: '#000000',
    surface: '#0A0A0A',
    surfaceSoft: '#111111',
    border: '#1F1F1F',
    text: '#FFFFFF',
    textMuted: '#A1A1AA',
    heading: '#FFFFFF',
    primary: '#3B82F6',
    primaryHover: '#60A5FA',
    accent: '#3B82F6',
    buttonText: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.44)',
    overlay: 'rgba(0, 0, 0, 0.52)',
  },
  light: {
    name: 'Premium Light',
    background: '#FFFFFF',
    surface: '#FAFAFA',
    surfaceSoft: '#F4F4F5',
    border: '#E4E4E7',
    text: '#09090B',
    textMuted: '#71717A',
    heading: '#09090B',
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    accent: '#2563EB',
    buttonText: '#FFFFFF',
    shadow: 'rgba(9, 9, 11, 0.10)',
    overlay: 'rgba(255, 255, 255, 0.58)',
  },
}

const productCards = [
  {
    icon: Code2,
    title: 'Developers',
    text: 'Find ideas that need hands-on engineering and ship with a focused team.',
  },
  {
    icon: Layers3,
    title: 'Designers',
    text: 'Join products early, shape the experience, and work with builders who move.',
  },
  {
    icon: UsersRound,
    title: 'Founders',
    text: 'Turn a validated idea into a project space where the right people can gather.',
  },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Daniel-Brevess/BuildHub', icon: GitBranch },
  { name: 'Instagram', href: '#', icon: AtSign },
  { name: 'Discord', href: '#', icon: MessageSquare },
  { name: 'Developer LinkedIn', href: 'https://www.linkedin.com/', icon: ExternalLink },
]

function LandingPage() {
  const [colorMode, setColorMode] = useState('dark')
  const [activeAuthCard, setActiveAuthCard] = useState(null)
  const isLightMode = colorMode === 'light'
  const activeTheme = themes[colorMode]

  const themeStyles = {
    '--bg': activeTheme.background,
    '--surface': activeTheme.surface,
    '--surface-soft': activeTheme.surfaceSoft,
    '--border': activeTheme.border,
    '--text': activeTheme.text,
    '--muted': activeTheme.textMuted,
    '--heading': activeTheme.heading,
    '--primary': activeTheme.primary,
    '--primary-hover': activeTheme.primaryHover,
    '--accent': activeTheme.accent,
    '--button-text': activeTheme.buttonText,
    '--shadow': activeTheme.shadow,
    '--overlay': activeTheme.overlay,
  }

  return (
    <main
      className="min-h-screen scroll-smooth bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
      style={themeStyles}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--overlay)] shadow-lg shadow-[var(--shadow)] backdrop-blur-xl transition-colors duration-500">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="group inline-flex items-center text-[var(--heading)]"
          >
            <img
              src={isLightMode ? logoLight : logoDark}
              alt="BuildHub"
              className="h-14 w-14 rounded-md object-contain transition duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow-lg sm:h-16 sm:w-16"
            />
          </a>

          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="#about"
              className="hidden text-sm font-semibold text-[var(--text)] transition hover:text-[var(--primary)] md:inline-flex"
            >
              About us
            </a>

            <div className="relative">
              <button
                aria-expanded={activeAuthCard === 'login'}
                className="text-sm font-semibold text-[var(--text)] transition hover:text-[var(--primary)]"
                onClick={() =>
                  setActiveAuthCard(activeAuthCard === 'login' ? null : 'login')
                }
                type="button"
              >
                Login
              </button>

              {activeAuthCard === 'login' && (
                <form
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl shadow-[var(--shadow)] sm:w-80"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <h2 className="text-base font-bold text-[var(--heading)]">
                    Entrar
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Acesse sua conta BuildHub.
                  </p>

                  <div className="mt-4 grid gap-3">
                    <label className="sr-only" htmlFor="login-email">
                      Email
                    </label>
                    <input
                      autoComplete="email"
                      className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
                      id="login-email"
                      placeholder="Email"
                      type="email"
                    />

                    <label className="sr-only" htmlFor="login-password">
                      Senha
                    </label>
                    <input
                      autoComplete="current-password"
                      className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
                      id="login-password"
                      placeholder="Senha"
                      type="password"
                    />

                    <button
                      className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--primary)] px-4 text-sm font-bold text-[var(--button-text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
                      type="submit"
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="relative">
              <button
                aria-expanded={activeAuthCard === 'signup'}
                className="text-sm font-semibold text-[var(--text)] transition hover:text-[var(--primary)]"
                onClick={() =>
                  setActiveAuthCard(
                    activeAuthCard === 'signup' ? null : 'signup',
                  )
                }
                type="button"
              >
                Cadastro
              </button>

              {activeAuthCard === 'signup' && (
                <form
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl shadow-[var(--shadow)] sm:w-80"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <h2 className="text-base font-bold text-[var(--heading)]">
                    Criar conta
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Comece a montar seu perfil de builder.
                  </p>

                  <div className="mt-4 grid gap-3">
                    <label className="sr-only" htmlFor="signup-username">
                      Username
                    </label>
                    <input
                      autoComplete="username"
                      className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
                      id="signup-username"
                      placeholder="Username"
                      type="text"
                    />

                    <label className="sr-only" htmlFor="signup-email">
                      Email
                    </label>
                    <input
                      autoComplete="email"
                      className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
                      id="signup-email"
                      placeholder="Email"
                      type="email"
                    />

                    <label className="sr-only" htmlFor="signup-password">
                      Senha
                    </label>
                    <input
                      autoComplete="new-password"
                      className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
                      id="signup-password"
                      placeholder="Senha"
                      type="password"
                    />

                    <label
                      className="sr-only"
                      htmlFor="signup-confirm-password"
                    >
                      Confirmar senha
                    </label>
                    <input
                      autoComplete="new-password"
                      className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
                      id="signup-confirm-password"
                      placeholder="Confirmar senha"
                      type="password"
                    />

                    <button
                      className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--primary)] px-4 text-sm font-bold text-[var(--button-text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
                      type="submit"
                    >
                      Criar conta
                    </button>
                  </div>
                </form>
              )}
            </div>

            <label className="hidden cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)] shadow-sm shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] sm:inline-flex">
              <input
                checked={isLightMode}
                className="sr-only"
                onChange={() => setColorMode(isLightMode ? 'dark' : 'light')}
                type="checkbox"
              />
              {isLightMode ? (
                <SunMedium size={16} aria-hidden="true" />
              ) : (
                <Moon size={16} aria-hidden="true" />
              )}
              {isLightMode ? 'Light' : 'Dark'}
            </label>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_92%,var(--border)_92%,var(--border)_93%,transparent_93%),linear-gradient(0deg,transparent_0,transparent_92%,var(--border)_92%,var(--border)_93%,transparent_93%)] bg-[length:72px_72px] opacity-20" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="scroll-side scroll-hero scroll-from-left">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-xl shadow-[var(--shadow)]">
              <WandSparkles size={16} aria-hidden="true" />
              Product builders, together
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-normal text-[var(--heading)] sm:text-6xl lg:text-7xl">
              Build the team before the product loses momentum.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              BuildHub connects developers, designers, founders, and creators
              around real projects so they can discover ideas, form teams, and
              build together.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-bold text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              >
                Join the waitlist
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--heading)]"
              >
                Learn about BuildHub
              </a>
            </div>
          </div>

          <div className="scroll-side scroll-hero scroll-from-right relative">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl shadow-[var(--shadow)] transition hover:-translate-y-1">
              <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--bg)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#F7768E]" />
                    <span className="h-3 w-3 rounded-full bg-[#E0AF68]" />
                    <span className="h-3 w-3 rounded-full bg-[#9ECE6A]" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--primary)]">
                    Project Feed
                  </span>
                </div>

                <div className="grid gap-4 p-4">
                  {[
                    ['AI design sprint', 'Needs React + product design'],
                    ['Founder dashboard', 'Needs Java + PostgreSQL'],
                    ['Creator workspace', 'Needs UX + integrations'],
                  ].map(([title, description]) => (
                    <article
                      className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                      key={title}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-base font-bold text-[var(--heading)]">
                            {title}
                          </h2>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {description}
                          </p>
                        </div>
                        <span className="rounded-md bg-[var(--surface-soft)] px-2 py-1 text-xs font-bold text-[var(--accent)]">
                          Open
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-screen items-center px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="scroll-side scroll-from-left">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              About us
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-normal text-[var(--heading)] sm:text-5xl">
              A meeting point for people who want to create products together.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              BuildHub is planned as a platform where builders can publish
              projects, discover opportunities, request to join teams, and keep
              the work organized through project dashboards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {productCards.map((card, index) => {
              const Icon = card.icon

              return (
                <article
                  className="scroll-side scroll-from-right rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                  key={card.title}
                  style={{ '--scroll-delay': `${index * 70}ms` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--surface-soft)] text-[var(--accent)]">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[var(--heading)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {card.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="flex min-h-screen items-center px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="scroll-side scroll-from-left">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Waitlist
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-normal text-[var(--heading)] sm:text-5xl">
              Be first in line when BuildHub opens for builders.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Join the first group of users who want to find projects, form
              teams, and build with people who complement their skills.
            </p>
          </div>

          <form
            className="scroll-side scroll-from-right rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-[var(--shadow)]"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--surface-soft)] text-[var(--primary)]">
                <ShieldCheck size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[var(--heading)]">
                  Enter the waiting list
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Get notified when the first version is ready.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="waitlist-email">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                placeholder="you@example.com"
                className="min-h-12 flex-1 rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 text-sm font-medium text-[var(--heading)] shadow-inner outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-5 text-sm font-bold text-[var(--button-text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/20"
              >
                Join now
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[var(--surface)] px-6 py-8 text-sm text-[var(--muted)] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={isLightMode ? logoLight : logoDark}
              alt="BuildHub"
              className="h-8 w-8 rounded-sm object-contain"
            />
            <p>Copyright (c) 2026 BuildHub. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="font-semibold text-[var(--text)] transition hover:text-[var(--primary)]"
            >
              About us
            </a>
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  className="inline-flex items-center gap-2 font-semibold text-[var(--text)] transition hover:text-[var(--primary)]"
                  href={link.href}
                  key={link.name}
                  rel="noreferrer"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Icon size={16} aria-hidden="true" />
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      </footer>
    </main>
  )
}

export default LandingPage
