import { ArrowRight, CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Gratuito',
    eyebrow: 'Para testar o valor',
    price: 'R$0',
    description:
      'Ideal para conhecer a plataforma, publicar o primeiro projeto e validar se o BuildHub faz sentido para voce.',
    features: [
      '1 projeto ativo',
      'Ate 2 vagas abertas',
      '5 propostas por mes',
      'Mensagens a partir de propostas',
      'Perfil publico basico',
    ],
    action: 'Comecar gratis',
    featured: false,
  },
  {
    name: 'BuildHub Plus',
    eyebrow: 'Para usar sem limites',
    price: 'R$10',
    description:
      'Para builders que querem publicar, aplicar e formar conexoes sem bater em limites durante o mes.',
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
  return (
    <>
      <section className="px-5 pb-24 pt-32 sm:pt-36 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="scroll-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Assinaturas
            </p>
            <h1 className="mt-5 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-normal text-[var(--heading)] sm:text-7xl">
              Dois jeitos de construir no BuildHub.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[var(--text-muted)]">
              Comece gratis para sentir o produto. Assine o Plus quando quiser
              remover limites e usar a plataforma como ferramenta principal.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                className={`scroll-reveal flex h-full flex-col rounded-[2.5rem] border p-6 shadow-2xl shadow-[var(--shadow)] ${
                  plan.featured
                    ? 'border-transparent bg-[var(--inverted)] text-[var(--button-text)]'
                    : 'border-[var(--border)] bg-[var(--card)] text-[var(--text)]'
                }`}
                key={plan.name}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                    plan.featured ? 'opacity-60' : 'text-[var(--text-soft)]'
                  }`}
                >
                  {plan.eyebrow}
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-none">
                  {plan.name}
                </h2>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-6xl font-semibold leading-none">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-sm font-semibold opacity-70">
                    /mes
                  </span>
                </div>
                <p className="mt-5 text-sm font-medium leading-6 opacity-75">
                  {plan.description}
                </p>

                <div className="mb-8 mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <div
                      className={`flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-semibold ${
                        plan.featured
                          ? 'border-white/15 text-white/80'
                          : 'border-[var(--border)] text-[var(--text-muted)]'
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
                  className={`mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-[var(--button-text)] text-[var(--inverted)] hover:bg-white/86'
                      : 'bg-[var(--inverted)] text-[var(--button-text)] hover:bg-[var(--inverted-soft)]'
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
    </>
  )
}

export default SubscriptionsPage
