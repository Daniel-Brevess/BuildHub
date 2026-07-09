import { useState } from 'react'
import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Code2,
  LayoutDashboard,
  MessageCircle,
  Search,
  Send,
  UserRound,
  X,
} from 'lucide-react'

const opportunities = [
  {
    id: 1,
    type: 'Projeto',
    title: 'BuildHub mobile companion',
    description:
      'App complementar para acompanhar propostas, conversas e convites de projetos em tempo real.',
    owner: 'Marina Costa',
    status: 'MVP aberto',
    collaboration: 'Equity / portfólio',
    skills: ['React Native', 'UX', 'Spring Boot'],
    slots: '2 vagas',
    tone: 'bg-[#D8FF35] text-[#07130F]',
  },
  {
    id: 2,
    type: 'Vaga',
    title: 'Frontend builder para dashboard B2B',
    description:
      'Produto SaaS em validação procurando alguém para transformar protótipo em experiência navegável.',
    owner: 'Rafael Nunes',
    status: 'Aplicações abertas',
    collaboration: 'Freela',
    skills: ['React', 'Tailwind', 'Design system'],
    slots: '1 vaga',
    tone: 'bg-[#F0B7FF] text-[#07130F]',
  },
  {
    id: 3,
    type: 'Projeto',
    title: 'Founder CRM para validação de ideias',
    description:
      'Ferramenta leve para founders organizarem hipóteses, entrevistas, aprendizados e próximos passos.',
    owner: 'Daniel Breves',
    status: 'Ideia estruturada',
    collaboration: 'Estudo / portfólio',
    skills: ['Java', 'PostgreSQL', 'Product'],
    slots: '3 vagas',
    tone: 'bg-[#F4FFE1] text-[#07130F]',
  },
  {
    id: 4,
    type: 'Vaga',
    title: 'Product designer para marketplace nichado',
    description:
      'Projeto inicial precisa de ajuda para mapear jornada, wireframes e identidade das primeiras telas.',
    owner: 'Lia Martins',
    status: 'Conversando com builders',
    collaboration: 'A combinar',
    skills: ['UX research', 'Figma', 'Brand'],
    slots: '1 vaga',
    tone: 'bg-white text-[#07130F]',
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
    preview: 'Vamos alinhar expectativa de colaboração?',
    time: 'Ontem',
  },
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

  return (
    <main className="min-h-screen overflow-x-clip bg-[#07130F] font-sans text-[#F7FFE9]">
      <section className="relative min-h-screen overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,#D8FF35_0,transparent_24%),radial-gradient(circle_at_86%_8%,#F0B7FF_0,transparent_20%),linear-gradient(135deg,#07130F,#10251B)] opacity-80" />

        <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-[88px_1fr]">
          <aside className="order-2 flex items-center justify-center gap-3 rounded-[2rem] border border-white/14 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl lg:order-1 lg:min-h-[calc(100vh-2.5rem)] lg:flex-col lg:justify-start lg:py-6">
            <a
              aria-label="Ir para o dashboard"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D8FF35] text-[#07130F] shadow-xl shadow-black/20 transition hover:-translate-y-1 lg:h-[52px] lg:w-[52px]"
              href="/app/dashboard"
            >
              <LayoutDashboard size={21} aria-hidden="true" />
            </a>
            <a
              aria-label="Ir para o perfil"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-white/18 lg:h-[52px] lg:w-[52px]"
              href="/app/perfil"
            >
              <UserRound size={21} aria-hidden="true" />
            </a>
            <button
              aria-label="Abrir conversas"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-white/18 lg:h-[52px] lg:w-[52px]"
              onClick={() => setIsConversationsOpen(true)}
              type="button"
            >
              <MessageCircle size={21} aria-hidden="true" />
            </button>
            <button
              aria-label="Ver vagas aplicadas"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-white/18 lg:h-[52px] lg:w-[52px]"
              type="button"
            >
              <ClipboardCheck size={21} aria-hidden="true" />
            </button>
          </aside>

          <div className="order-1 min-w-0 lg:order-2">
            <header className="rounded-[2rem] border border-white/14 bg-white/10 px-5 py-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D8FF35]">
                    Dashboard
                  </p>
                  <h1 className="mt-2 text-4xl font-black leading-none sm:text-5xl">
                    Olá, Daniel!
                  </h1>
                </div>

                <form
                  className="flex min-h-14 w-full items-center gap-3 rounded-full border border-white/14 bg-[#F4FFE1] px-4 text-[#07130F] shadow-xl shadow-black/10 lg:max-w-xl"
                  onSubmit={handleSearch}
                >
                  <Search size={21} aria-hidden="true" />
                  <label className="sr-only" htmlFor="dashboard-search">
                    Pesquisar projetos e vagas
                  </label>
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm font-black outline-none placeholder:text-[#07130F]/55"
                    id="dashboard-search"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Pesquisar projetos, vagas ou skills"
                    type="search"
                    value={searchTerm}
                  />
                  <button
                    aria-label="Pesquisar"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#07130F] text-[#F4FFE1] transition hover:scale-105"
                    type="submit"
                  >
                    <Send size={17} aria-hidden="true" />
                  </button>
                </form>
              </div>
            </header>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_320px]">
              <section className="grid gap-4">
                {opportunities.map((item) => (
                  <article
                    className="group rounded-[2rem] border border-white/14 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/14 sm:p-5"
                    key={item.id}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-black ${item.tone}`}
                          >
                            {item.type}
                          </span>
                          <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs font-bold text-white/70">
                            {item.status}
                          </span>
                        </div>
                        <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
                          {item.title}
                        </h2>
                        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-[#B8C7B5]">
                          {item.description}
                        </p>
                      </div>

                      <button
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4FFE1] text-[#07130F] transition group-hover:translate-x-1"
                        type="button"
                        aria-label={`Ver detalhes de ${item.title}`}
                      >
                        <ChevronRight size={22} aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          className="rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white/80"
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm font-bold text-[#B8C7B5] sm:grid-cols-3">
                      <span className="inline-flex items-center gap-2">
                        <UserRound size={17} aria-hidden="true" />
                        {item.owner}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <BriefcaseBusiness size={17} aria-hidden="true" />
                        {item.collaboration}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 size={17} aria-hidden="true" />
                        {item.slots}
                      </span>
                    </div>
                  </article>
                ))}
              </section>

              <aside className="hidden gap-5 xl:grid">
                <section className="rounded-[2rem] border border-white/14 bg-[#D8FF35] p-5 text-[#07130F] shadow-2xl shadow-black/20">
                  <Code2 size={28} aria-hidden="true" />
                  <h2 className="mt-5 text-3xl font-black leading-none">
                    Continue de onde parou.
                  </h2>
                  <p className="mt-4 text-sm font-bold leading-6 opacity-75">
                    Você tem 3 oportunidades salvas e 2 conversas esperando
                    resposta.
                  </p>
                </section>

                <section className="rounded-[2rem] border border-white/14 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <Clock3 className="text-[#D8FF35]" size={24} aria-hidden="true" />
                    <h2 className="text-xl font-black">Atividade recente</h2>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {['Nova vaga em React', 'Proposta visualizada', 'Perfil recebeu visita'].map(
                      (activity) => (
                        <div
                          className="rounded-2xl bg-white/8 px-4 py-3 text-sm font-bold text-white/75"
                          key={activity}
                        >
                          {activity}
                        </div>
                      ),
                    )}
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>

        {isConversationsOpen && (
          <div className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm">
            <aside className="ml-auto flex h-full w-full max-w-md flex-col border-l border-white/14 bg-[#07130F]/95 p-5 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D8FF35]">
                    Conversas
                  </p>
                  <h2 className="mt-2 text-3xl font-black">Mensagens abertas</h2>
                </div>
                <button
                  aria-label="Fechar conversas"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/18"
                  onClick={() => setIsConversationsOpen(false)}
                  type="button"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 grid gap-3">
                {conversations.map((conversation) => (
                  <button
                    className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 text-left transition hover:bg-white/14"
                    key={conversation.name}
                    type="button"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-black">{conversation.name}</span>
                      <span className="text-xs font-bold text-[#B8C7B5]">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#B8C7B5]">
                      {conversation.preview}
                    </p>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}

export default DashboardPage
