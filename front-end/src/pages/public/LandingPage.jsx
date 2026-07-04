import { useEffect, useState } from 'react'
import {
  ArrowRight,
  AtSign,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Compass,
  ExternalLink,
  GitBranch,
  Layers3,
  MessageSquare,
  Moon,
  Rocket,
  Search,
  Sparkles,
  SunMedium,
  Target,
  UserPlus,
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
    accent: '#8B5CF6',
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
    accent: '#7C3AED',
    buttonText: '#FFFFFF',
    shadow: 'rgba(9, 9, 11, 0.10)',
    overlay: 'rgba(255, 255, 255, 0.58)',
  },
}

const painPoints = [
  'Ideias promissoras morrem porque falta time para executar.',
  'Builders querem projetos reais, mas encontram oportunidades espalhadas.',
  'Founders precisam de contexto, skills e comprometimento, não apenas likes.',
  'Networking aleatório raramente vira colaboração prática.',
]

const solutionCards = [
  {
    icon: BriefcaseBusiness,
    title: 'Publique projetos com contexto',
    text: 'Mostre objetivo, fase, stack, skills necessárias e tipo de colaboração.',
  },
  {
    icon: Search,
    title: 'Descubra oportunidades reais',
    text: 'Encontre ideias com espaço para contribuir e filtros por perfil, stack e estágio.',
  },
  {
    icon: UserPlus,
    title: 'Aplique ou convide builders',
    text: 'Crie conexões com intenção clara: projeto, função, disponibilidade e próximos passos.',
  },
  {
    icon: Layers3,
    title: 'Organize a construção',
    text: 'Centralize membros, progresso e decisões para o projeto não perder tração.',
  },
]

const audienceCards = [
  {
    icon: Code2,
    title: 'Developers',
    text: 'Encontre projetos com stack clara e construa evidência real de produto.',
  },
  {
    icon: WandSparkles,
    title: 'Designers',
    text: 'Entre cedo na visão, modele a experiência e colabore com quem executa.',
  },
  {
    icon: Target,
    title: 'Founders',
    text: 'Transforme uma ideia validada em um espaço onde o time certo pode se formar.',
  },
  {
    icon: UsersRound,
    title: 'Creators e builders',
    text: 'Saia do projeto solo e encontre pessoas complementares para tirar algo do papel.',
  },
]

const workflowSteps = [
  {
    icon: Search,
    title: 'Descubra ou publique',
    text: 'Comece por uma ideia, uma necessidade ou uma oportunidade aberta.',
  },
  {
    icon: Sparkles,
    title: 'Mostre seu contexto',
    text: 'Skills, interesses, disponibilidade e tipo de projeto que você quer construir.',
  },
  {
    icon: UserPlus,
    title: 'Aplique ou convide',
    text: 'Conecte pessoas pelo papel que cada uma pode exercer dentro do projeto.',
  },
  {
    icon: Rocket,
    title: 'Construa com direção',
    text: 'Use um workspace para manter time, progresso e próximos passos visíveis.',
  },
]

const benefits = [
  'Menos networking aleatório',
  'Mais projetos reais',
  'Times por contexto e skills',
  'Portfólio com colaboração real',
  'Mais chance de transformar ideia em produto',
]

const projectRows = [
  {
    title: 'AI design sprint',
    description: 'Precisa de React + product design',
    tags: ['React', 'UX', 'MVP'],
  },
  {
    title: 'Founder dashboard',
    description: 'Precisa de Java + PostgreSQL',
    tags: ['Java', 'Data', 'SaaS'],
  },
  {
    title: 'Creator workspace',
    description: 'Precisa de UX + integrações',
    tags: ['UX', 'API', 'Beta'],
  },
]

const previewCards = [
  {
    title: 'Feed de projetos',
    text: 'Oportunidades com fase, skills e intenção claras.',
  },
  {
    title: 'Perfil de builder',
    text: 'Skills, interesses e histórico de colaboração em um só lugar.',
  },
  {
    title: 'Área do time',
    text: 'Membros, progresso e próximos passos visíveis para todos.',
  },
]

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

const getGridSideClass = (index, total, columns = 2) => {
  if (columns === 2) {
    return index % 2 === 0 ? 'scroll-from-left' : 'scroll-from-right'
  }

  return index < Math.ceil(total / 2) ? 'scroll-from-left' : 'scroll-from-right'
}

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const getScrollDistance = () => {
  const viewportDistance = window.innerWidth * 0.18

  return clamp(viewportDistance, 140, 260)
}

function AuthForm({ type }) {
  const isLogin = type === 'login'

  return (
    <form
      className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl shadow-[var(--shadow)] sm:w-80"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="text-base font-bold text-[var(--heading)]">
        {isLogin ? 'Entrar' : 'Criar conta'}
      </h2>
      <p className="mt-1 text-sm text-[var(--muted)]">
        {isLogin
          ? 'Acesse sua conta BuildHub.'
          : 'Comece a montar seu perfil de builder.'}
      </p>

      <div className="mt-4 grid gap-3">
        {!isLogin && (
          <>
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
          </>
        )}

        <label className="sr-only" htmlFor={`${type}-email`}>
          Email
        </label>
        <input
          autoComplete="email"
          className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
          id={`${type}-email`}
          placeholder="Email"
          type="email"
        />

        <label className="sr-only" htmlFor={`${type}-password`}>
          Senha
        </label>
        <input
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
          id={`${type}-password`}
          placeholder="Senha"
          type="password"
        />

        {!isLogin && (
          <>
            <label className="sr-only" htmlFor="signup-confirm-password">
              Confirmar senha
            </label>
            <input
              autoComplete="new-password"
              className="min-h-11 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 text-sm font-medium text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--primary)]/10"
              id="signup-confirm-password"
              placeholder="Confirmar senha"
              type="password"
            />
          </>
        )}

        <button
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--primary)] px-4 text-sm font-bold text-[var(--button-text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
          type="submit"
        >
          {isLogin ? 'Entrar' : 'Criar conta'}
        </button>
      </div>
    </form>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-[var(--heading)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{text}</p>
    </div>
  )
}

function ProductMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 blur-2xl" />
      <div className="relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl shadow-[var(--shadow)]">
        <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--bg)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F7768E]" />
              <span className="h-3 w-3 rounded-full bg-[#E0AF68]" />
              <span className="h-3 w-3 rounded-full bg-[#9ECE6A]" />
            </div>
            <span className="text-xs font-semibold text-[var(--primary)]">
              BuildHub workspace
            </span>
          </div>

          <div className="grid gap-4 p-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-3">
              {projectRows.map((project) => (
                <article
                  className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                  key={project.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-[var(--heading)]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {project.description}
                      </p>
                    </div>
                    <span className="rounded-md bg-[var(--surface-soft)] px-2 py-1 text-xs font-bold text-[var(--accent)]">
                      Open
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-md border border-[var(--border)] px-2 py-1 text-xs font-semibold text-[var(--muted)]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-md border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--bg)] text-[var(--primary)]">
                  <Compass size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-[var(--heading)]">
                    Team fit
                  </h3>
                  <p className="text-sm text-[var(--muted)]">4 roles open</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {['Frontend', 'Product design', 'Backend', 'Growth'].map(
                  (role, index) => (
                    <div
                      className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm"
                      key={role}
                    >
                      <span className="font-semibold text-[var(--text)]">
                        {role}
                      </span>
                      <span className="text-[var(--muted)]">
                        {index + 1}/3
                      </span>
                    </div>
                  ),
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingPage() {
  const [colorMode, setColorMode] = useState('dark')
  const [activeAuthCard, setActiveAuthCard] = useState(null)
  const isLightMode = colorMode === 'light'
  const activeTheme = themes[colorMode]

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll('.scroll-side'))
    let animationFrame = null

    const updateScrollAnimations = () => {
      const viewportHeight = window.innerHeight
      const distance = getScrollDistance()
      const enterEnd = 0.2
      const exitStart = 0.78

      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const progress = clamp(
          (viewportHeight - rect.top) / (viewportHeight + rect.height),
          0,
          1,
        )
        const direction = element.classList.contains('scroll-from-left')
          ? -1
          : 1

        let opacity = 1
        let translateX = 0

        if (progress < enterEnd) {
          const phaseProgress = progress / enterEnd
          opacity = phaseProgress
          translateX = direction * distance * (1 - phaseProgress)
        } else if (progress > exitStart) {
          const phaseProgress = (progress - exitStart) / (1 - exitStart)
          opacity = 1 - phaseProgress
          translateX = direction * distance * phaseProgress
        }

        element.style.opacity = String(clamp(opacity, 0, 1))
        element.style.transform = `translateX(${translateX}px)`
      })
    }

    const requestScrollUpdate = () => {
      if (animationFrame) {
        return
      }

      animationFrame = window.requestAnimationFrame(() => {
        updateScrollAnimations()
        animationFrame = null
      })
    }

    updateScrollAnimations()
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
    window.addEventListener('resize', requestScrollUpdate)

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener('scroll', requestScrollUpdate)
      window.removeEventListener('resize', requestScrollUpdate)
    }
  }, [])

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
      className="min-h-screen overflow-x-clip scroll-smooth bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
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

            {['login', 'signup'].map((type) => (
              <div className="relative" key={type}>
                <button
                  aria-expanded={activeAuthCard === type}
                  className="text-sm font-semibold text-[var(--text)] transition hover:text-[var(--primary)]"
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
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="scroll-side scroll-hero scroll-from-left">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-xl shadow-[var(--shadow)]">
              <Sparkles size={16} aria-hidden="true" />
              Projetos reais precisam das pessoas certas
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-normal text-[var(--heading)] sm:text-6xl lg:text-7xl">
              Encontre pessoas certas para construir projetos reais.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              BuildHub conecta developers, designers, founders e creators para
              transformar ideias em produtos colaborativos, com contexto,
              intenção e um caminho claro para construir.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setActiveAuthCard('signup')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-bold text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              >
                Entrar no BuildHub
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--heading)]"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="scroll-side scroll-hero scroll-from-right">
            <ProductMockup />
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="O problema"
              title="Construir sozinho é o jeito mais comum de uma boa ideia parar."
              text="A maioria das pessoas não falha por falta de vontade. Falha por falta de contexto, time, direção e um lugar onde colaboração vire execução."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point, index) => (
              <article
                className={`scroll-side ${getGridSideClass(
                  index,
                  painPoints.length,
                )} rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]`}
                key={point}
                style={{ '--scroll-delay': `${index * 60}ms` }}
              >
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface-soft)] text-[var(--primary)]">
                  <span className="text-sm font-bold">0{index + 1}</span>
                </span>
                <p className="text-base font-semibold leading-7 text-[var(--heading)]">
                  {point}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="A solução"
              title="Um ponto de encontro para transformar intenção em equipe."
              text="BuildHub organiza a descoberta, o convite e a colaboração em torno de projetos reais, para que cada pessoa saiba onde pode contribuir e por que aquele time faz sentido."
            />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((card, index) => {
              const Icon = card.icon

              return (
                <article
                  className={`scroll-side ${getGridSideClass(
                    index,
                    solutionCards.length,
                    4,
                  )} rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]`}
                  key={card.title}
                  style={{ '--scroll-delay': `${index * 60}ms` }}
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
        id="about"
        className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="Para quem é"
              title="Cada perfil entra com uma força diferente. O projeto ganha quando elas se encontram."
              text="BuildHub foi pensado para quem quer construir, aprender com produtos reais e colaborar com pessoas complementares."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audienceCards.map((card, index) => {
              const Icon = card.icon

              return (
                <article
                  className={`scroll-side ${getGridSideClass(
                    index,
                    audienceCards.length,
                  )} rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]`}
                  key={card.title}
                  style={{ '--scroll-delay': `${index * 60}ms` }}
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
        id="how-it-works"
        className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44"
      >
        <div className="mx-auto max-w-7xl">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="Como funciona"
              title="Um fluxo simples para sair da ideia e chegar no time."
              text="A experiência foi desenhada para reduzir fricção: menos conversa solta, mais clareza sobre o que será construído e quem pode ajudar."
            />
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  className={`scroll-side ${getGridSideClass(
                    index,
                    workflowSteps.length,
                    4,
                  )} rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]`}
                  key={step.title}
                  style={{ '--scroll-delay': `${index * 60}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--surface-soft)] text-[var(--primary)]">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold text-[var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[var(--heading)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {step.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="Por que usar"
              title="O valor está em criar contexto antes de pedir comprometimento."
              text="Quando projeto, skill e intenção aparecem juntos, fica mais fácil formar times que realmente conseguem avançar."
            />
          </div>

          <div className="scroll-side scroll-from-right rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-[var(--shadow)]">
            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div
                  className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 py-3"
                  key={benefit}
                >
                  <CheckCircle2
                    className="shrink-0 text-[var(--primary)]"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-[var(--heading)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="Para que viemos"
              title="Grandes ideias não deveriam depender de sorte para encontrar as pessoas certas."
              text="Viemos para tornar a criação de produtos mais acessível, colaborativa e prática. Um lugar onde builders podem sair do isolamento e encontrar projetos com propósito, contexto e chance real de execução."
            />
          </div>

          <div className="scroll-side scroll-from-right rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-[var(--shadow)]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Quem somos
            </p>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-[var(--heading)]">
              BuildHub nasce para quem quer construir produtos reais, mas não
              quer fazer isso sozinho.
            </h3>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Somos uma plataforma em construção para aproximar talentos,
              ideias e times. Nossa missão é criar um ambiente onde colaboração
              tenha direção, projetos tenham contexto e builders encontrem
              oportunidades para criar algo que possa ir ao mundo.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-side scroll-from-left">
            <SectionIntro
              eyebrow="Preview"
              title="Uma plataforma que parece produto desde o primeiro contato."
              text="A experiência será centrada em descoberta, perfil, time e progresso. Tudo para transformar interesse em ação."
            />
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="scroll-side scroll-from-left">
              <ProductMockup />
            </div>

            <div className="grid gap-4">
              {previewCards.map((card, index) => (
                <article
                  className="scroll-side scroll-from-right rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                  key={card.title}
                  style={{ '--scroll-delay': `${index * 70}ms` }}
                >
                  <h3 className="text-lg font-bold text-[var(--heading)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 py-36 lg:px-10 lg:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-[var(--shadow)] md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="scroll-side scroll-from-left">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Comece agora
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-normal text-[var(--heading)] sm:text-5xl">
              Entre no BuildHub e encontre pessoas para construir com você.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Crie seu perfil, mostre suas skills e comece a se conectar com
              projetos, ideias e builders que querem transformar intenção em
              produto real.
            </p>
          </div>

          <div
            className="scroll-side scroll-from-right rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6"
          >
            <div className="mb-6 flex items-center gap-3">
              <div>
                <h3 className="text-xl font-bold text-[var(--heading)]">
                  Comece pelo seu perfil
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Mostre suas skills, encontre projetos e construa com contexto.
                </p>
              </div>
            </div>

            <div className="mb-5 grid gap-3">
              {[
                'Crie seu perfil de builder',
                'Publique ou descubra projetos',
                'Forme times com contexto',
              ].map((item) => (
                <div
                  className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                  key={item}
                >
                  <CheckCircle2
                    className="shrink-0 text-[var(--primary)]"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-[var(--heading)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setActiveAuthCard('signup')}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-5 text-sm font-bold text-[var(--button-text)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/20"
              >
                Entrar no BuildHub
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
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
