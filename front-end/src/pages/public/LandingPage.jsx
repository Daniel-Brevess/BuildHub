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
  tokyoDark: {
    name: 'Tokyo Night',
    background: '#0F111A',
    surface: '#1A1B26',
    surfaceSoft: '#202334',
    border: '#292E42',
    text: '#C0CAF5',
    textMuted: '#A9B1D6',
    heading: '#FFFFFF',
    primary: '#7AA2F7',
    primaryHover: '#8DB0FF',
    accent: '#BB9AF7',
    buttonText: '#0F111A',
    shadow: 'rgba(0, 0, 0, 0.34)',
    overlay: 'rgba(15, 17, 26, 0.74)',
  },
  tokyoLight: {
    name: 'Tokyo Morning',
    background: '#F7F8FC',
    surface: '#FFFFFF',
    surfaceSoft: '#EEF2FA',
    border: '#DDE2F0',
    text: '#1F2335',
    textMuted: '#5F687D',
    heading: '#111827',
    primary: '#3D59A1',
    primaryHover: '#2F477F',
    accent: '#7C3AED',
    buttonText: '#FFFFFF',
    shadow: 'rgba(31, 35, 53, 0.12)',
    overlay: 'rgba(247, 248, 252, 0.76)',
  },
  premiumDark: {
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
    overlay: 'rgba(0, 0, 0, 0.76)',
  },
  premiumLight: {
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
    overlay: 'rgba(255, 255, 255, 0.78)',
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
  const [designSystem, setDesignSystem] = useState('tokyo')
  const [colorMode, setColorMode] = useState('dark')
  const isLightMode = colorMode === 'light'
  const activeTheme = themes[`${designSystem}${isLightMode ? 'Light' : 'Dark'}`]

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

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden rounded-md border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm shadow-[var(--shadow)] sm:flex">
              {['tokyo', 'premium'].map((system) => (
                <button
                  className={`rounded px-3 py-1.5 text-sm font-semibold capitalize transition hover:text-[var(--heading)] ${
                    designSystem === system
                      ? 'bg-[var(--surface-soft)] text-[var(--heading)]'
                      : 'text-[var(--muted)]'
                  }`}
                  key={system}
                  onClick={() => setDesignSystem(system)}
                  type="button"
                >
                  {system}
                </button>
              ))}
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

            <a
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--heading)]"
            >
              About us
            </a>
            <a
              href="#waitlist"
              className="rounded-md bg-[var(--heading)] px-4 py-2 text-sm font-bold text-[var(--bg)] shadow-lg shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-[var(--button-text)]"
            >
              enter to waiting list
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_92%,var(--border)_92%,var(--border)_93%,transparent_93%),linear-gradient(0deg,transparent_0,transparent_92%,var(--border)_92%,var(--border)_93%,transparent_93%)] bg-[length:72px_72px] opacity-20" />
        <div className="scroll-fade-up relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
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

          <div className="relative">
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
        <div className="scroll-fade-up mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
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
            {productCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--primary)]"
                  key={card.title}
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
        <div className="scroll-fade-up mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
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
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-[var(--shadow)]"
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

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold text-[var(--heading)]">
                Which design direction do you prefer?
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {['Premium design', 'Tokyo design', 'Both'].map((option) => (
                  <label
                    className="flex cursor-pointer items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-soft)]"
                    key={option}
                  >
                    <input
                      className="h-3.5 w-3.5 border-[var(--border)] accent-[var(--primary)]"
                      name="design-preference"
                      type="radio"
                      value={option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
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
