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
import AuthForm from './components/AuthForm'

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

                {activeAuthCard === type && (
                  <AuthForm mode={type} onSuccess={() => setActiveAuthCard(null)} />
                )}
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

      <footer className="mt-8 rounded-t-[2.5rem] border-t border-[var(--form-border)] bg-[var(--inverted)] px-5 pb-12 pt-20 text-sm font-medium text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)] lg:px-8 lg:pb-14 lg:pt-24">
        <div className="mx-auto flex min-h-44 max-w-7xl flex-col justify-between gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <img
                  src={logoBlack}
                  alt="BuildHub"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-base font-semibold">
                  BuildHub
                </span>
              </div>
              <p className="mt-5 text-base font-medium leading-7 opacity-70">
                Um lugar mais simples para encontrar pessoas certas e construir
                projetos reais.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--form-border)] bg-[var(--button-text)]/10 px-4 py-2 text-[var(--button-text)]/75 transition hover:text-[var(--button-text)]"
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

          <div className="border-t border-[var(--form-border)] pt-6">
            <p className="opacity-70">Copyright (c) 2026 BuildHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default LandingPage
