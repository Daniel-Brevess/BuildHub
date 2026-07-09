import { ArrowLeft, BriefcaseBusiness, Search } from 'lucide-react'

const results = [
  {
    title: 'Frontend builder para dashboard B2B',
    type: 'Vaga',
    description:
      'Experiência com React, Tailwind e construção de interfaces de produto.',
  },
  {
    title: 'Founder CRM para validação de ideias',
    type: 'Projeto',
    description:
      'Produto em fase inicial procurando builders para backend, frontend e UX.',
  },
  {
    title: 'BuildHub mobile companion',
    type: 'Projeto',
    description:
      'App complementar para acompanhar propostas, conversas e convites.',
  },
]

function SearchPage() {
  const params = new URLSearchParams(window.location.search)
  const query = params.get('q') || 'projetos'

  return (
    <main className="min-h-screen overflow-x-clip bg-[#07130F] font-sans text-[#F7FFE9]">
      <section className="relative min-h-screen overflow-hidden px-6 py-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,#D8FF35_0,transparent_24%),radial-gradient(circle_at_86%_14%,#F0B7FF_0,transparent_20%),linear-gradient(135deg,#07130F,#10251B)] opacity-80" />

        <div className="relative mx-auto max-w-5xl">
          <a
            aria-label="Voltar para o dashboard"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F4FFE1] text-[#07130F] shadow-xl shadow-black/25 transition hover:-translate-y-1"
            href="/app/dashboard"
          >
            <ArrowLeft size={22} aria-hidden="true" />
          </a>

          <header className="mt-10 rounded-[2rem] border border-white/14 bg-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-[#D8FF35]">
              <Search size={24} aria-hidden="true" />
              <p className="text-sm font-black uppercase tracking-[0.18em]">
                Pesquisa
              </p>
            </div>
            <h1 className="mt-4 text-5xl font-black leading-none">
              Resultados para "{query}"
            </h1>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#B8C7B5]">
              Esta página ainda é estática, mas já define o comportamento da
              busca que nasce no dashboard.
            </p>
          </header>

          <section className="mt-6 grid gap-4">
            {results.map((result) => (
              <article
                className="rounded-[2rem] border border-white/14 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl"
                key={result.title}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-[#D8FF35] px-3 py-1 text-xs font-black text-[#07130F]">
                      {result.type}
                    </span>
                    <h2 className="mt-4 text-3xl font-black leading-tight">
                      {result.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-[#B8C7B5]">
                      {result.description}
                    </p>
                  </div>
                  <BriefcaseBusiness
                    className="shrink-0 text-[#F0B7FF]"
                    size={30}
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  )
}

export default SearchPage
