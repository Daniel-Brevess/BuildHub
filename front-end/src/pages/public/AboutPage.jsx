import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  AtSign,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  MessageSquare,
  Moon,
  Network,
  PanelsTopLeft,
  Route,
  SunMedium,
  Target,
  UsersRound,
} from 'lucide-react'
import logoBlack from '../../assets/logo1.png'
import { getInitialColorMode, persistColorMode } from './themeMode'

const themes = {
  dark: {
    background: '#07130F',
    backgroundAlt: '#10251B',
    surface: '#F4FFE1',
    surfaceDark: '#0E1E17',
    surfaceSoft: '#173327',
    card: '#11271D',
    border: 'rgba(244, 255, 225, 0.16)',
    text: '#F7FFE9',
    textMuted: '#B8C7B5',
    heading: '#F7FFE9',
    primary: '#D8FF35',
    primaryHover: '#E6FF6B',
    accent: '#F0B7FF',
    electric: '#C084FC',
    buttonText: '#07130F',
    nav: 'rgba(244, 255, 225, 0.88)',
    navText: '#07130F',
    shadow: 'rgba(0, 0, 0, 0.36)',
  },
  light: {
    background: '#F6FFE4',
    backgroundAlt: '#E5F8C5',
    surface: '#FFFFFF',
    surfaceDark: '#173327',
    surfaceSoft: '#ECF7DA',
    card: '#FFFFFF',
    border: 'rgba(7, 19, 15, 0.14)',
    text: '#132018',
    textMuted: '#5D6D62',
    heading: '#07130F',
    primary: '#B7EF24',
    primaryHover: '#A5DF15',
    accent: '#E9B6F6',
    electric: '#7C3AED',
    buttonText: '#07130F',
    nav: 'rgba(255, 255, 255, 0.9)',
    navText: '#07130F',
    shadow: 'rgba(7, 19, 15, 0.14)',
  },
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Daniel-Brevess/BuildHub',
    icon: GitBranch,
  },
  { name: 'Instagram', href: '#', icon: AtSign },
  { name: 'Discord', href: '#', icon: MessageSquare },
  { name: 'Developer LinkedIn', href: 'https://www.linkedin.com/', icon: ExternalLink },
]

const beliefs = [
  {
    icon: Target,
    title: 'Contexto antes de conexao',
    text: 'Nao basta conhecer gente. O projeto precisa mostrar fase, objetivo, roles e o tipo de energia que ele pede.',
  },
  {
    icon: UsersRound,
    title: 'Times nascem por encaixe',
    text: 'Uma boa equipe combina habilidades, interesse, disponibilidade e vontade de construir algo visivel.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Produto real vale mais que promessa',
    text: 'BuildHub favorece quem quer sair da conversa solta e transformar intencao em progresso concreto.',
  },
]

const manifestoCards = [
  ['Menos vitrine', 'Mais espaco para mostrar o que voce quer construir e onde precisa de ajuda.'],
  ['Menos sorte', 'Mais descoberta por contexto, skills, fase do projeto e complementaridade.'],
  ['Menos isolamento', 'Mais chance de encontrar pessoas que querem avancar junto, nao apenas reagir.'],
]

const builderTypes = [
  ['Developer', 'Encontra projetos com stack clara e oportunidade real de impacto.'],
  ['Designer', 'Entra cedo para transformar ideias soltas em experiencias usaveis.'],
  ['Founder', 'Abre a visao para pessoas que podem ajudar a tirar o produto do papel.'],
  ['Creator', 'Transforma audiencia, repertorio e ideias em construcao colaborativa.'],
]

function AuthForm({ type }) {
  const isLogin = type === 'login'

  return (
    <form
      className="absolute right-0 top-[calc(100%+0.9rem)] z-50 w-72 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--heading)] shadow-2xl shadow-[var(--shadow)] sm:w-80"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="text-lg font-black tracking-normal">
        {isLogin ? 'Entrar' : 'Criar conta'}
      </h2>
      <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
        {isLogin
          ? 'Acesse seu espaco BuildHub.'
          : 'Monte seu perfil de builder.'}
      </p>

      <div className="mt-4 grid gap-3">
        {!isLogin && (
          <>
            <label className="sr-only" htmlFor="about-signup-username">
              Username
            </label>
            <input
              autoComplete="username"
              className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
              id="about-signup-username"
              placeholder="Username"
              type="text"
            />
          </>
        )}

        <label className="sr-only" htmlFor={`about-${type}-email`}>
          Email
        </label>
        <input
          autoComplete="email"
          className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
          id={`about-${type}-email`}
          placeholder="Email"
          type="email"
        />

        <label className="sr-only" htmlFor={`about-${type}-password`}>
          Senha
        </label>
        <input
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
          id={`about-${type}-password`}
          placeholder="Senha"
          type="password"
        />

        {!isLogin && (
          <>
            <label className="sr-only" htmlFor="about-signup-confirm-password">
              Confirmar senha
            </label>
            <input
              autoComplete="new-password"
              className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
              id="about-signup-confirm-password"
              placeholder="Confirmar senha"
              type="password"
            />
          </>
        )}

        <button
          className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-[var(--primary)] px-4 text-sm font-black text-[var(--button-text)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
          type="submit"
        >
          {isLogin ? 'Entrar' : 'Criar conta'}
        </button>
      </div>
    </form>
  )
}

function Header({ activeAuthCard, isLightMode, setActiveAuthCard, setColorMode }) {
  const authMenuRef = useRef(null)

  useEffect(() => {
    if (!activeAuthCard) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (authMenuRef.current?.contains(event.target)) {
        return
      }

      setActiveAuthCard(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [activeAuthCard, setActiveAuthCard])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="relative mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-[var(--nav)] px-4 py-2 text-[var(--nav-text)] shadow-2xl shadow-[var(--shadow)] backdrop-blur-2xl sm:px-5"
        aria-label="Main navigation"
      >
        <a href="/" className="group inline-flex shrink-0 items-center">
          <img
            src={logoBlack}
            alt="BuildHub"
            className="h-11 w-11 rounded-full object-contain transition duration-300 group-hover:-translate-y-0.5 sm:h-12 sm:w-12"
          />
        </a>

        <div
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex"
          ref={authMenuRef}
        >
          <a
            href="/about"
            className="text-sm font-black transition hover:text-[var(--electric)]"
          >
            Sobre nós
          </a>
          <a
            href="/assinaturas"
            className="text-sm font-black transition hover:text-[var(--electric)]"
          >
            Assinaturas
          </a>
          {['login', 'signup'].map((type) => (
            <div className="relative" key={type}>
              <button
                aria-expanded={activeAuthCard === type}
                className="text-sm font-black transition hover:text-[var(--electric)]"
                onClick={() =>
                  setActiveAuthCard(activeAuthCard === type ? null : type)
                }
                type="button"
              >
                {type === 'login' ? 'Login' : 'Cadastro'}
              </button>

              {activeAuthCard === type && <AuthForm type={type} />}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--nav-text)] px-3 py-2 text-sm font-black text-[var(--surface)] transition hover:-translate-y-0.5">
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
            <span className="hidden sm:inline">{isLightMode ? 'Light' : 'Dark'}</span>
          </label>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--surface)] px-6 py-8 text-sm font-semibold text-[var(--button-text)] lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoBlack}
            alt="BuildHub"
            className="h-8 w-8 rounded-sm object-contain"
          />
          <p>Copyright (c) 2026 BuildHub. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                className="inline-flex items-center gap-2 transition hover:text-[var(--electric)]"
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
  )
}

function AboutPage() {
  const [colorMode, setColorMode] = useState(getInitialColorMode)
  const [activeAuthCard, setActiveAuthCard] = useState(null)
  const isLightMode = colorMode === 'light'
  const activeTheme = themes[colorMode]

  const handleColorModeChange = (nextColorMode) => {
    setColorMode(nextColorMode)
    persistColorMode(nextColorMode)
  }

  const themeStyles = {
    '--background': activeTheme.background,
    '--background-alt': activeTheme.backgroundAlt,
    '--surface': activeTheme.surface,
    '--surface-dark': activeTheme.surfaceDark,
    '--surface-soft': activeTheme.surfaceSoft,
    '--card': activeTheme.card,
    '--border': activeTheme.border,
    '--text': activeTheme.text,
    '--text-muted': activeTheme.textMuted,
    '--heading': activeTheme.heading,
    '--primary': activeTheme.primary,
    '--primary-hover': activeTheme.primaryHover,
    '--accent': activeTheme.accent,
    '--electric': activeTheme.electric,
    '--button-text': activeTheme.buttonText,
    '--nav': activeTheme.nav,
    '--nav-text': activeTheme.navText,
    '--shadow': activeTheme.shadow,
  }

  return (
    <main
      className="min-h-screen overflow-x-clip bg-[var(--background)] font-sans text-[var(--text)] transition-colors duration-500"
      style={themeStyles}
    >
      <Header
        activeAuthCard={activeAuthCard}
        isLightMode={isLightMode}
        setActiveAuthCard={setActiveAuthCard}
        setColorMode={handleColorModeChange}
      />

      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,var(--primary)_0,transparent_24%),radial-gradient(circle_at_88%_16%,var(--accent)_0,transparent_22%),linear-gradient(135deg,var(--background),var(--background-alt))] opacity-90" />
        <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-normal text-[var(--heading)] sm:text-7xl lg:text-8xl">
              A gente nao quer mais ideias morrendo sozinhas.
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[var(--text-muted)]">
              BuildHub nasceu para transformar colaboracao em algo mais pratico:
              projetos com contexto, pessoas com intencao e times que se formam
              ao redor de coisas reais.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-black text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:bg-[var(--primary-hover)]"
              >
                Entrar no BuildHub
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="/#preview"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 text-sm font-black text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1"
              >
                Ver preview
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-8 w-72 rotate-[-7deg] rounded-[2rem] bg-[var(--primary)] p-6 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] opacity-70">
                Antes
              </p>
              <h2 className="mt-4 text-4xl font-black leading-none">
                Ideia boa. Time inexistente.
              </h2>
            </div>

            <div className="absolute right-0 top-28 w-[min(92%,24rem)] rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)]">
              <div className="rounded-[1.5rem] bg-[var(--surface-dark)] p-5 text-white">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                  Depois
                </p>
                <h2 className="mt-4 text-4xl font-black leading-none">
                  Projeto claro. Pessoas certas.
                </h2>
                <div className="mt-6 grid gap-2">
                  {['Founder', 'Designer', 'Backend', 'Frontend'].map((role) => (
                    <div
                      className="flex items-center justify-between rounded-full bg-white/10 px-4 py-3 text-sm font-black"
                      key={role}
                    >
                      <span>{role}</span>
                      <span className="text-[var(--primary)]">matched</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-12 w-72 rotate-[5deg] rounded-[2rem] bg-[var(--accent)] p-5 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)]">
              <Network size={30} aria-hidden="true" />
              <p className="mt-5 text-2xl font-black leading-tight">
                O valor nao esta em conhecer todo mundo. Esta em encontrar o
                encaixe certo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-24 text-[var(--button-text)] lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#173327]">
              O que somos
            </p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] sm:text-7xl">
              Um mapa para quem quer construir com outras pessoas.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {manifestoCards.map(([title, text]) => (
              <article
                className="rounded-[2rem] bg-[var(--primary)] p-6 shadow-xl shadow-[var(--shadow)]"
                key={title}
              >
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm font-bold leading-6 opacity-75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--background-alt)] px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--electric)]">
              Para que viemos
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.98] text-[var(--heading)] sm:text-6xl">
              Grandes ideias nao deveriam depender de sorte para encontrar as
              pessoas certas.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[var(--text-muted)]">
              BuildHub existe para tirar builders do isolamento e transformar
              ideias em produtos colaborativos, com contexto antes de
              compromisso.
            </p>
          </div>

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl shadow-[var(--shadow)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--primary)]">
              Quem somos
            </p>
            <h3 className="mt-4 text-4xl font-black leading-tight text-[var(--heading)]">
              Um lugar para quem quer construir produtos reais, mas nao quer
              fazer isso sozinho.
            </h3>
            <p className="mt-5 text-base font-semibold leading-8 text-[var(--text-muted)]">
              Nossa missao e aproximar talentos, ideias e times em um ambiente
              onde colaboracao tem direcao e projetos tem chance real de ir ao
              mundo.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[var(--background)] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--electric)]">
              Como pensamos
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.98] text-[var(--heading)] sm:text-6xl">
              BuildHub e menos sobre networking e mais sobre contexto.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[var(--text-muted)]">
              A pagina de um projeto deve responder as perguntas que normalmente
              ficam perdidas em DMs: o que e, em que fase esta, quem falta e por
              que vale construir.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {beliefs.map((belief) => {
              const Icon = belief.icon

              return (
                <article
                  className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                  key={belief.title}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--button-text)]">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-black text-[var(--heading)]">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">
                    {belief.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--background-alt)] px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2.5rem] bg-[var(--accent)] p-8 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)]">
            <Route size={34} aria-hidden="true" />
            <h2 className="mt-8 text-5xl font-black leading-[0.95] sm:text-7xl">
              A visao: transformar colaboracao em um caminho claro.
            </h2>
            <p className="mt-6 max-w-2xl text-base font-bold leading-8 opacity-75">
              Queremos que um builder consiga sair de "tenho uma ideia" para
              "tenho um time tentando colocar isso no mundo" com menos atrito,
              menos ruido e mais direcao.
            </p>
          </div>

          <div className="grid gap-4">
            {builderTypes.map(([title, text], index) => (
              <article
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)]"
                key={title}
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-black text-[var(--button-text)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--heading)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-muted)]">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary)] px-6 py-24 text-[var(--button-text)] lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-[var(--surface)] p-8 shadow-2xl shadow-[var(--shadow)] lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] opacity-70">
              Proximo passo
            </p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] sm:text-7xl">
              Entre onde projetos e pessoas comecam a se encontrar.
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white/55 p-5">
            <div className="grid gap-3">
              {[
                'Mostre o que voce sabe construir',
                'Encontre projetos com contexto',
                'Monte times com complementaridade',
              ].map((item) => (
                <div
                  className="flex items-center gap-3 rounded-full bg-[var(--button-text)] px-4 py-3 text-sm font-black text-[var(--surface)]"
                  key={item}
                >
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {item}
                </div>
              ))}
              <a
                href="/cadastro"
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--button-text)] px-5 text-sm font-black text-[var(--surface)] transition hover:-translate-y-1"
              >
                Criar meu perfil
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage
