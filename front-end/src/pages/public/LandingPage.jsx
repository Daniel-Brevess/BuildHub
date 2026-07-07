import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  AtSign,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  MessageSquare,
  Moon,
  Search,
  SunMedium,
  Target,
  UserPlus,
  UsersRound,
  WandSparkles,
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
    nav: 'rgba(244, 255, 225, 0.76)',
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
    nav: 'rgba(255, 255, 255, 0.78)',
    navText: '#07130F',
    shadow: 'rgba(7, 19, 15, 0.14)',
  },
}

const painPoints = [
  'Ideias boas param porque falta time para executar.',
  'Builders querem desafios reais, não tarefas soltas.',
  'Founders precisam de contexto, skills e compromisso.',
  'Networking aleatório raramente vira produto no ar.',
]

const solutionCards = [
  {
    icon: BriefcaseBusiness,
    title: 'Publique projetos',
    text: 'Mostre objetivo, fase, stack, roles abertas e o tipo de colaboração que faz sentido.',
  },
  {
    icon: Search,
    title: 'Descubra oportunidades',
    text: 'Encontre projetos com contexto claro, filtros por skills e espaço real para contribuir.',
  },
  {
    icon: UserPlus,
    title: 'Aplique ou convide',
    text: 'Conecte pessoas pelo papel que podem exercer, não por conversa solta.',
  },
  {
    icon: Layers3,
    title: 'Construa com direção',
    text: 'Centralize equipe, progresso e próximos passos para o projeto não perder tração.',
  },
]

const audienceCards = [
  {
    icon: Code2,
    title: 'Developers',
    text: 'Construa experiência real com produto, stack clara e colaboração visível.',
  },
  {
    icon: WandSparkles,
    title: 'Designers',
    text: 'Entre cedo na visão, modele a experiência e trabalhe com quem executa.',
  },
  {
    icon: Target,
    title: 'Founders',
    text: 'Transforme uma ideia validada em um projeto onde o time certo pode se formar.',
  },
  {
    icon: UsersRound,
    title: 'Creators e builders',
    text: 'Saia do isolamento e encontre pessoas complementares para tirar algo do papel.',
  },
]

const workflowSteps = [
  ['Idea', 'Publique ou encontre uma oportunidade com objetivo claro.'],
  ['Team', 'Mostre skills, interesses e disponibilidade para colaborar.'],
  ['Workspace', 'Aplique, convide pessoas e organize o time inicial.'],
  ['Launch', 'Acompanhe progresso e mantenha o produto em movimento.'],
]

const projectRows = [
  {
    title: 'AI design sprint',
    description: 'React + product design',
    tags: ['React', 'UX', 'MVP'],
    status: '4 roles',
  },
  {
    title: 'Founder dashboard',
    description: 'Java + PostgreSQL',
    tags: ['Java', 'Data', 'SaaS'],
    status: '2 roles',
  },
  {
    title: 'Creator workspace',
    description: 'UX + integrations',
    tags: ['UX', 'API', 'Beta'],
    status: '3 roles',
  },
]

const previewCards = [
  ['Project feed', 'Oportunidades com fase, skills e intenção claras.'],
  ['Builder profile', 'Skills, interesses e histórico de colaboração em destaque.'],
  ['Team room', 'Roles, membros e próximos passos visíveis para todos.'],
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

function AuthForm({ type }) {
  const isLogin = type === 'login'

  return (
    <form
      className="absolute right-0 top-[calc(100%+0.9rem)] z-50 w-72 rounded-3xl border border-white/40 bg-[var(--nav)] p-4 text-[var(--nav-text)] shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl backdrop-saturate-150 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.28),0_18px_56px_var(--shadow)] sm:w-80"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="text-lg font-black tracking-normal">
        {isLogin ? 'Entrar' : 'Criar conta'}
      </h2>
      <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
        {isLogin
          ? 'Acesse seu espaço BuildHub.'
          : 'Monte seu perfil de builder.'}
      </p>

      <div className="mt-4 grid gap-3">
        {!isLogin && (
          <>
            <label className="sr-only" htmlFor="signup-username">
              Username
            </label>
            <input
              autoComplete="username"
              className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
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
          className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
          id={`${type}-email`}
          placeholder="Email"
          type="email"
        />

        <label className="sr-only" htmlFor={`${type}-password`}>
          Senha
        </label>
        <input
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
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
              className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-bold outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/20"
              id="signup-confirm-password"
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

function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--electric)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-normal text-[var(--heading)] sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-lg font-semibold leading-8 text-[var(--text-muted)]">
        {text}
      </p>
    </div>
  )
}

function ProductMockup() {
  return (
    <div className="relative min-h-[520px]">
      <div className="absolute left-6 top-6 h-72 w-56 rotate-[-8deg] rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--heading)] shadow-2xl shadow-[var(--shadow)]">
        <div className="h-full rounded-[1.4rem] bg-[var(--primary)] p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-dark)] text-[var(--primary)]">
              <Code2 size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-black">Nina.dev</p>
              <p className="text-xs font-bold opacity-70">Frontend builder</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {['React', 'Design systems', 'Open to MVPs'].map((item) => (
              <div
                className="rounded-full bg-[var(--surface-dark)] px-4 py-3 text-sm font-black text-[var(--surface)]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-[min(92%,34rem)] rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--heading)] shadow-2xl shadow-[var(--shadow)]">
        <div className="rounded-[1.5rem] bg-[var(--surface-dark)] p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]">
              Project feed
            </span>
            <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-black text-[var(--button-text)]">
              Live
            </span>
          </div>

          <div className="mt-4 grid gap-3">
            {projectRows.map((project) => (
              <article
                className="rounded-3xl border border-white/10 bg-white/8 p-4 transition hover:-translate-y-1 hover:bg-white/12"
                key={project.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-black">{project.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-white/64">
                      {project.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-black text-[var(--button-text)]">
                    {project.status}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-white/72"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-10 w-72 rotate-[5deg] rounded-[2rem] border border-[var(--border)] bg-[var(--accent)] p-5 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)]">
        <p className="text-sm font-black uppercase tracking-[0.16em]">
          Team room
        </p>
        <h3 className="mt-3 text-2xl font-black leading-none">
          7 builders matched
        </h3>
        <div className="mt-5 grid gap-2">
          {['Product design', 'Backend', 'Growth'].map((role) => (
            <div
              className="flex items-center justify-between rounded-full bg-white/50 px-4 py-2 text-sm font-black"
              key={role}
            >
              <span>{role}</span>
              <span>open</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LandingPage() {
  const [colorMode, setColorMode] = useState(getInitialColorMode)
  const [activeAuthCard, setActiveAuthCard] = useState(null)
  const authMenuRef = useRef(null)
  const isLightMode = colorMode === 'light'
  const activeTheme = themes[colorMode]

  const handleColorModeChange = (nextColorMode) => {
    setColorMode(nextColorMode)
    persistColorMode(nextColorMode)
  }

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
  }, [activeAuthCard])

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
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          className="relative mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-[var(--nav)] px-4 py-2 text-[var(--nav-text)] shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl backdrop-saturate-150 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.28),0_18px_56px_var(--shadow)] sm:px-5"
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
                onChange={() =>
                  handleColorModeChange(isLightMode ? 'dark' : 'light')
                }
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

      <section
        id="home"
        className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36 lg:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,var(--primary)_0,transparent_25%),radial-gradient(circle_at_85%_10%,var(--accent)_0,transparent_22%),linear-gradient(135deg,var(--background),var(--background-alt))] opacity-90" />
        <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-normal text-[var(--heading)] sm:text-7xl lg:text-8xl">
              Encontre pessoas certas para construir projetos reais.
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[var(--text-muted)]">
              BuildHub conecta developers, designers, founders e creators para
              transformar ideias em produtos colaborativos com contexto,
              energia e direção.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-black text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/30"
              >
                Entrar no BuildHub
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 text-sm font-black text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1"
              >
                Conhecer o BuildHub
              </a>
            </div>
          </div>

          <ProductMockup />
        </div>
      </section>

      <section
        className="bg-[var(--surface)] px-6 py-24 text-[var(--button-text)] lg:px-10"
        style={{
          '--button-text': '#07130F',
          '--electric': '#173327',
          '--heading': '#07130F',
          '--text-muted': '#173327',
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="O problema"
            title="Construir sozinho é o jeito mais comum de uma boa ideia parar."
            text="A maior fricção não é vontade. É encontrar contexto, time e direção antes da energia acabar."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point, index) => (
              <article
                className="rounded-[2rem] bg-[var(--primary)] p-6 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1"
                key={point}
              >
                <span className="text-sm font-black opacity-70">0{index + 1}</span>
                <p className="mt-5 text-2xl font-black leading-tight">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="A solução"
            title="Um ponto de encontro para transformar intenção em equipe."
            text="BuildHub organiza descoberta, convite e colaboração para que cada pessoa saiba onde pode contribuir."
            center
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                  key={card.title}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--button-text)]">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-black text-[var(--heading)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">
                    {card.text}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="mt-10 grid gap-3 rounded-[2rem] bg-[var(--surface)] p-4 text-[var(--button-text)] shadow-xl shadow-[var(--shadow)] md:grid-cols-4">
            {workflowSteps.map(([title, text], index) => (
              <div className="rounded-[1.5rem] bg-white/55 p-5" key={title}>
                <span className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                  Step 0{index + 1}
                </span>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-bold opacity-70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[var(--background-alt)] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Para quem é"
            title="Cada perfil entra com uma força diferente. O projeto ganha quando elas se encontram."
            text="BuildHub foi pensado para quem quer construir, aprender com produtos reais e colaborar com pessoas complementares."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {audienceCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:bg-[var(--surface-soft)]"
                  key={card.title}
                >
                  <Icon
                    className="text-[var(--primary)]"
                    size={30}
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 text-2xl font-black text-[var(--heading)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">
                    {card.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="preview"
        className="bg-[var(--background-alt)] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Preview"
            title="Mockups vivos para uma plataforma feita por builders."
            text="A experiência gira em torno de projeto, perfil, time e progresso. Tudo com cara de produto desde o primeiro contato."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <ProductMockup />
            <div className="grid gap-4">
              {previewCards.map(([title, text]) => (
                <article
                  className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-1"
                  key={title}
                >
                  <h3 className="text-2xl font-black text-[var(--heading)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary)] px-6 py-24 text-[var(--button-text)] lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-[var(--surface)] p-8 shadow-2xl shadow-[var(--shadow)] lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] opacity-70">
              Comece agora
            </p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] sm:text-7xl">
              Entre no BuildHub e encontre pessoas para construir com você.
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white/55 p-5">
            <div className="grid gap-3">
              {[
                'Crie seu perfil de builder',
                'Publique ou descubra projetos',
                'Forme times com contexto',
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
                Entrar no BuildHub
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  )
}

export default LandingPage
