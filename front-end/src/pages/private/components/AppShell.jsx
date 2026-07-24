import { Home, LayoutDashboard, MessageCircle, Search, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const navigationItems = [
  {
    label: 'Dashboard',
    href: '/app/dashboard',
    icon: LayoutDashboard,
    id: 'dashboard',
  },
  {
    label: 'Pesquisa',
    href: '/app/pesquisa',
    icon: Search,
    id: 'search',
  },
  {
    label: 'Perfil',
    href: '/app/perfil',
    icon: UserRound,
    id: 'profile',
  },
]

function AppShell({ activeItem, eyebrow, title, subtitle, action, children }) {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans text-zinc-950">
      <div className="mx-auto grid min-h-screen max-w-[1500px] gap-5 px-4 py-4 sm:px-5 lg:grid-cols-[82px_1fr] lg:px-6">
        <aside className="order-2 flex items-center justify-between rounded-[2rem] border border-zinc-200 bg-white px-3 py-3 shadow-sm lg:order-1 lg:min-h-[calc(100vh-2rem)] lg:flex-col lg:py-5">
          <Link
            aria-label="Voltar para a landing page"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:bg-zinc-800"
            to="/"
          >
            <Home size={19} aria-hidden="true" />
          </Link>

          <nav className="flex items-center gap-2 lg:flex-col" aria-label="Private navigation">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.id

              return (
                <Link
                  aria-label={item.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm transition ${
                    isActive
                      ? 'border-zinc-950 bg-zinc-950 text-white'
                      : 'border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950'
                  }`}
                  key={item.id}
                  to={item.href}
                >
                  <Icon size={18} aria-hidden="true" />
                </Link>
              )
            })}
          </nav>

          <button
            aria-label="Conversas"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950"
            type="button"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </button>
        </aside>

        <section className="order-1 min-w-0 lg:order-2">
          <header className="flex flex-col gap-5 rounded-[2rem] border border-zinc-200 bg-white px-5 py-5 shadow-sm sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                {eyebrow}
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-none tracking-normal text-zinc-950 sm:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-zinc-500 sm:text-base">
                  {subtitle}
                </p>
              )}
            </div>

            {action}
          </header>

          <div className="mt-5">{children}</div>
        </section>
      </div>
    </main>
  )
}

export default AppShell
