import { useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  MessageCircle,
  Search,
  Send,
  UserRound,
  X,
} from 'lucide-react'
import AppShell from './components/AppShell'

const opportunities = [
  {
    id: 1,
    type: 'Projeto',
    title: 'BuildHub mobile companion',
    description: 'App complementar para acompanhar propostas, conversas e convites de projetos em tempo real.',
    owner: 'Marina Costa',
    status: 'MVP aberto',
    collaboration: 'Equity / portfolio',
    skills: ['React Native', 'UX', 'Spring Boot'],
    slots: '2 vagas',
  },
  {
    id: 2,
    type: 'Vaga',
    title: 'Frontend builder para dashboard B2B',
    description: 'Produto SaaS em validacao procurando alguem para transformar prototipo em experiencia navegavel.',
    owner: 'Rafael Nunes',
    status: 'Aplicacoes abertas',
    collaboration: 'Freela',
    skills: ['React', 'Tailwind', 'Design system'],
    slots: '1 vaga',
  },
  {
    id: 3,
    type: 'Projeto',
    title: 'Founder CRM para validacao de ideias',
    description: 'Ferramenta leve para founders organizarem hipoteses, entrevistas e proximos passos.',
    owner: 'Daniel Breves',
    status: 'Ideia estruturada',
    collaboration: 'Estudo / portfolio',
    skills: ['Java', 'PostgreSQL', 'Product'],
    slots: '3 vagas',
  },
]

const conversations = [
  {
    name: 'Marina Costa',
    preview: 'Gostei da sua proposta para o app mobile.',
    time: '12 min',
  },
  {
    name: 'Rafael Nunes',
    preview: 'Posso te mandar o escopo do dashboard hoje.',
    time: '1 h',
  },
  {
    name: 'Lia Martins',
    preview: 'Vamos alinhar expectativa de colaboracao?',
    time: 'Ontem',
  },
]

const metrics = [
  ['Projetos salvos', '3'],
  ['Conversas abertas', '2'],
  ['Propostas enviadas', '14'],
]

function DashboardPage() {
  const [isConversationsOpen, setIsConversationsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event) {
    event.preventDefault()

    const normalizedSearch = searchTerm.trim()
    if (!normalizedSearch) return

    window.location.href = `/app/pesquisa?q=${encodeURIComponent(normalizedSearch)}`
  }

  const searchAction = (
    <form
      className="flex min-h-12 w-full items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-zinc-950 lg:max-w-md"
      onSubmit={handleSearch}
    >
      <Search size={18} aria-hidden="true" />
      <label className="sr-only" htmlFor="dashboard-search">
        Pesquisar projetos e vagas
      </label>
      <input
        className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
        id="dashboard-search"
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Projetos, vagas ou skills"
        type="search"
        value={searchTerm}
      />
      <button
        aria-label="Pesquisar"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:bg-zinc-800"
        type="submit"
      >
        <Send size={15} aria-hidden="true" />
      </button>
    </form>
  )

  return (
    <AppShell
      activeItem="dashboard"
      action={searchAction}
      eyebrow="Dashboard"
      subtitle="Acompanhe oportunidades, conversas e sinais importantes sem sair do fluxo."
      title="O que vale sua atencao agora."
    >
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <section className="grid gap-4">
          {opportunities.map((item) => (
            <article
              className="group rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              key={item.id}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">
                      {item.type}
                    </span>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-500">
                      {item.status}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>

                <button
                  aria-label={`Ver detalhes de ${item.title}`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-950 transition group-hover:translate-x-1 group-hover:border-zinc-950 group-hover:bg-zinc-950 group-hover:text-white"
                  type="button"
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    className="rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-600"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3 border-t border-zinc-100 pt-5 text-sm font-medium text-zinc-500 sm:grid-cols-3">
                <span className="inline-flex items-center gap-2">
                  <UserRound size={16} aria-hidden="true" />
                  {item.owner}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness size={16} aria-hidden="true" />
                  {item.collaboration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item.slots}
                </span>
              </div>
            </article>
          ))}
        </section>

        <aside className="grid gap-5">
          <section className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-5 text-white shadow-sm">
            <Code2 size={24} aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold leading-none">
              Continue de onde parou.
            </h2>
            <p className="mt-4 text-sm font-medium leading-6 text-zinc-400">
              Voce tem oportunidades salvas e conversas esperando resposta.
            </p>
          </section>

          <section className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Resumo
            </h2>
            <div className="mt-5 grid gap-3">
              {metrics.map(([label, value]) => (
                <div
                  className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                  key={label}
                >
                  <span className="text-sm font-medium text-zinc-500">{label}</span>
                  <span className="text-2xl font-semibold text-zinc-950">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock3 className="text-zinc-500" size={21} aria-hidden="true" />
              <h2 className="text-lg font-semibold text-zinc-950">Atividade recente</h2>
            </div>
            <div className="mt-5 grid gap-2">
              {['Nova vaga em React', 'Proposta visualizada', 'Perfil recebeu visita'].map((activity) => (
                <div
                  className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-600"
                  key={activity}
                >
                  {activity}
                </div>
              ))}
            </div>
          </section>

          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            onClick={() => setIsConversationsOpen(true)}
            type="button"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Abrir conversas
          </button>
        </aside>
      </div>

      {isConversationsOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/30 backdrop-blur-sm">
          <aside className="ml-auto flex h-full w-full max-w-md flex-col border-l border-zinc-200 bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Conversas
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Mensagens abertas</h2>
              </div>
              <button
                aria-label="Fechar conversas"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-950 transition hover:bg-zinc-100"
                onClick={() => setIsConversationsOpen(false)}
                type="button"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 grid gap-3">
              {conversations.map((conversation) => (
                <button
                  className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-4 text-left transition hover:border-zinc-300 hover:bg-white"
                  key={conversation.name}
                  type="button"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold">{conversation.name}</span>
                    <span className="text-xs font-medium text-zinc-500">{conversation.time}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-500">
                    {conversation.preview}
                  </p>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </AppShell>
  )
}

export default DashboardPage
