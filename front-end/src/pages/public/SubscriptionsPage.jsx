import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
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

const plans = [
  {
    name: 'Gratuito',
    eyebrow: 'Para testar o valor',
    price: 'R$0',
    description:
      'Ideal para conhecer a plataforma, publicar o primeiro projeto e validar se o BuildHub faz sentido para você.',
    features: [
      '1 projeto ativo',
      'Até 2 vagas abertas',
      '5 propostas por mês',
      'Mensagens a partir de propostas',
      'Perfil público básico',
    ],
    action: 'Começar grátis',
    featured: false,
  },
  {
    name: 'BuildHub Plus',
    eyebrow: 'Para usar sem limites',
    price: 'R$10',
    description:
      'Para builders que querem publicar, aplicar e formar conexões sem bater em limites durante o mês.',
    features: [
      'Projetos ilimitados',
      'Vagas ilimitadas',
      'Propostas ilimitadas',
      'Alertas de oportunidades',
      'Analytics simples de projetos',
      'Destaque leve no perfil',
    ],
    action: 'Assinar Plus',
    featured: true,
  },
]

function SubscriptionsPage() {
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

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--electric)]">
              Assinaturas
            </p>
            <h1 className="mt-4 max-w-4xl text-6xl font-black leading-[0.9] tracking-normal text-[var(--heading)] sm:text-7xl">
              Dois jeitos de construir no BuildHub.
            </h1>
            <p className="mt-7 max-w-xl text-xl font-bold leading-8 text-[var(--text-muted)]">
              Comece grátis para sentir o produto. Assine o Plus quando quiser
              remover limites e usar a plataforma como ferramenta principal.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                className={`flex h-full flex-col rounded-[2.5rem] border p-6 shadow-2xl shadow-[var(--shadow)] ${
                  plan.featured
                    ? 'border-transparent bg-[var(--primary)] text-[var(--button-text)]'
                    : 'border-[var(--border)] bg-[var(--card)] text-[var(--text)]'
                }`}
                key={plan.name}
              >
                <p
                  className={`text-sm font-black uppercase tracking-[0.18em] ${
                    plan.featured ? 'opacity-70' : 'text-[var(--electric)]'
                  }`}
                >
                  {plan.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-black leading-none">
                  {plan.name}
                </h2>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black leading-none">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-sm font-black opacity-70">
                    /mês
                  </span>
                </div>
                <p className="mt-5 text-sm font-bold leading-6 opacity-75">
                  {plan.description}
                </p>

                <div className="mb-8 mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <div
                      className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-black ${
                        plan.featured
                          ? 'bg-[var(--button-text)] text-[var(--surface)]'
                          : 'bg-[var(--surface)] text-[var(--button-text)]'
                      }`}
                      key={feature}
                    >
                      <CheckCircle2 size={18} aria-hidden="true" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="/cadastro"
                  className={`mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition hover:-translate-y-1 ${
                    plan.featured
                      ? 'bg-[var(--button-text)] text-[var(--surface)]'
                      : 'bg-[var(--primary)] text-[var(--button-text)]'
                  }`}
                >
                  {plan.action}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SubscriptionsPage
