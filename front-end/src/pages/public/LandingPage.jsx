import { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  AtSign,
  ExternalLink,
  GitBranch,
  MessageSquare,
  Moon,
  SunMedium,
} from 'lucide-react'
import logoBlack from '../../assets/logo1.png'
import { getInitialColorMode, persistColorMode } from './themeMode'

const themes = {
  light: {
    background: '#FFFFFF',
    backgroundAlt: '#FAFAFA',
    surface: '#F4F4F5',
    surfaceStrong: '#E4E4E7',
    card: '#FFFFFF',
    inverted: '#09090B',
    invertedSoft: '#18181B',
    border: '#E4E4E7',
    borderStrong: '#D4D4D8',
    text: '#09090B',
    textMuted: '#52525B',
    textSoft: '#71717A',
    heading: '#09090B',
    buttonText: '#FFFFFF',
    nav: '#FFFFFF',
    navText: '#09090B',
    formBorder: 'rgba(255, 255, 255, 0.18)',
    shadow: 'rgba(9, 9, 11, 0.08)',
  },
  dark: {
    background: '#09090B',
    backgroundAlt: '#18181B',
    surface: '#27272A',
    surfaceStrong: '#3F3F46',
    card: '#18181B',
    inverted: '#FAFAFA',
    invertedSoft: '#F4F4F5',
    border: '#27272A',
    borderStrong: '#3F3F46',
    text: '#FAFAFA',
    textMuted: '#D4D4D8',
    textSoft: '#A1A1AA',
    heading: '#FFFFFF',
    buttonText: '#09090B',
    nav: '#09090B',
    navText: '#FAFAFA',
    formBorder: 'rgba(9, 9, 11, 0.18)',
    shadow: 'rgba(0, 0, 0, 0.24)',
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

function AuthForm({ type }) {
  const isLogin = type === 'login'

  return (
    <form
      className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 text-[var(--text)] shadow-2xl shadow-[var(--shadow)] sm:w-80"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="text-base font-semibold tracking-normal">
        {isLogin ? 'Entrar' : 'Criar conta'}
      </h2>
      <p className="mt-1 text-sm font-medium text-[var(--text-soft)]">
        {isLogin ? 'Acesse seu espaco BuildHub.' : 'Monte seu perfil de builder.'}
      </p>

      <div className="mt-4 grid gap-3">
        {!isLogin && (
          <>
            <label className="sr-only" htmlFor="signup-username">
              Username
            </label>
            <input
              autoComplete="username"
              className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-medium outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--text)]"
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
          className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-medium outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--text)]"
          id={`${type}-email`}
          placeholder="Email"
          type="email"
        />

        <label className="sr-only" htmlFor={`${type}-password`}>
          Senha
        </label>
        <input
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-medium outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--text)]"
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
              className="min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-medium outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--text)]"
              id="signup-confirm-password"
              placeholder="Confirmar senha"
              type="password"
            />
          </>
        )}

        <button
          className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-[var(--inverted)] px-4 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--inverted-soft)]"
          type="submit"
        >
          {isLogin ? 'Entrar' : 'Criar conta'}
        </button>
      </div>
    </form>
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
    '--surface-strong': activeTheme.surfaceStrong,
    '--card': activeTheme.card,
    '--inverted': activeTheme.inverted,
    '--inverted-soft': activeTheme.invertedSoft,
    '--border': activeTheme.border,
    '--border-strong': activeTheme.borderStrong,
    '--text': activeTheme.text,
    '--text-muted': activeTheme.textMuted,
    '--text-soft': activeTheme.textSoft,
    '--heading': activeTheme.heading,
    '--button-text': activeTheme.buttonText,
    '--nav': activeTheme.nav,
    '--nav-text': activeTheme.navText,
    '--form-border': activeTheme.formBorder,
    '--shadow': activeTheme.shadow,
  }

  return (
    <main
      className="min-h-screen overflow-x-clip bg-[var(--background)] font-sans text-[var(--text)] transition-colors duration-500"
      style={themeStyles}
    >
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          className="relative mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4 rounded-full border border-[var(--border)] bg-[var(--nav)]/82 px-4 py-2 text-[var(--nav-text)] shadow-2xl shadow-[var(--shadow)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 sm:px-5"
          aria-label="Main navigation"
        >
          <Link to="/" className="group inline-flex shrink-0 items-center gap-3">
            <img
              src={logoBlack}
              alt="BuildHub"
              className="h-9 w-9 object-contain transition duration-300 group-hover:-translate-y-0.5"
            />
            <span className="text-sm font-semibold">BuildHub</span>
          </Link>

          <div
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
            ref={authMenuRef}
          >
            <Link
              to="/about"
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
            >
              Sobre
            </Link>
            <Link
              to="/assinaturas"
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
            >
              Assinaturas
            </Link>
            {['login', 'signup'].map((type) => (
              <div className="relative" key={type}>
                <button
                  aria-expanded={activeAuthCard === type}
                  className="rounded-full px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
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

          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm font-semibold transition hover:border-[var(--border-strong)]">
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
        </nav>
      </header>

      <Outlet />

      <footer className="bg-[var(--background)] px-5 py-8 text-sm font-medium text-[var(--text-muted)] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoBlack}
              alt="BuildHub"
              className="h-8 w-8 object-contain"
            />
            <p>Copyright (c) 2026 BuildHub. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  className="inline-flex items-center gap-2 transition hover:text-[var(--text)]"
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
