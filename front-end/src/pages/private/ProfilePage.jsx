import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  MapPin,
  MessageSquare,
  Plus,
  Sparkles,
  UserPlus,
} from 'lucide-react'

const profile = {
  name: 'Daniel Breves',
  username: '@danielbuilder',
  role: 'Full-stack developer',
  location: 'Brasil',
  status: 'Disponível para colaborar',
  bio: 'Construindo produtos web com foco em comunidades, projetos reais e experiências que ajudam pessoas a saírem da ideia para o produto.',
  skills: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Product thinking'],
  interests: ['SaaS', 'Comunidades', 'Marketplaces', 'Ferramentas para builders'],
}

const projects = [
  {
    title: 'BuildHub',
    description: 'Plataforma para formar equipes em torno de projetos reais.',
    status: 'MVP em desenho',
    roles: ['Product designer', 'Frontend builder'],
  },
  {
    title: 'Founder CRM',
    description: 'Mini CRM para founders acompanharem ideias, validações e contatos.',
    status: 'Ideia aberta',
    roles: ['Backend', 'UX researcher'],
  },
]

const stats = [
  ['Projetos', '2'],
  ['Propostas', '14'],
  ['Conexões', '8'],
]

function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#07130F] font-sans text-[#F7FFE9]">
      <section className="relative overflow-hidden px-6 py-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,#D8FF35_0,transparent_24%),radial-gradient(circle_at_92%_12%,#F0B7FF_0,transparent_20%),linear-gradient(135deg,#07130F,#10251B)] opacity-90" />

        <div className="relative mx-auto max-w-7xl">
          <header className="flex items-center justify-between">
            <a
              aria-label="Voltar para landing page"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-[#F4FFE1]/75 text-[#07130F] shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1"
              href="/"
            >
              <ArrowLeft size={22} aria-hidden="true" />
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white/80 backdrop-blur-xl sm:flex">
              <Sparkles size={16} aria-hidden="true" />
              Static profile preview
            </div>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <aside className="rounded-[2.5rem] border border-white/14 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-[#D8FF35] p-5 text-[#07130F]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#07130F] text-3xl font-black text-[#D8FF35]">
                      DB
                    </div>
                    <div>
                      <h1 className="text-3xl font-black leading-none">
                        {profile.name}
                      </h1>
                      <p className="mt-2 text-sm font-black opacity-70">
                        {profile.username}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#07130F] px-3 py-1 text-xs font-black text-[#F4FFE1]">
                    Plus
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-3 rounded-full bg-white/50 px-4 py-3 text-sm font-black">
                    <Code2 size={18} aria-hidden="true" />
                    {profile.role}
                  </div>
                  <div className="flex items-center gap-3 rounded-full bg-white/50 px-4 py-3 text-sm font-black">
                    <MapPin size={18} aria-hidden="true" />
                    {profile.location}
                  </div>
                  <div className="flex items-center gap-3 rounded-full bg-white/50 px-4 py-3 text-sm font-black">
                    <CheckCircle2 size={18} aria-hidden="true" />
                    {profile.status}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base font-semibold leading-8 text-[#B8C7B5]">
                {profile.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    className="rounded-full border border-white/14 bg-white/8 px-3 py-2 text-xs font-black text-white/80"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map(([label, value]) => (
                  <div
                    className="rounded-3xl border border-white/14 bg-white/8 p-4 text-center"
                    key={label}
                  >
                    <p className="text-3xl font-black text-white">{value}</p>
                    <p className="mt-1 text-xs font-bold text-[#B8C7B5]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8FF35] px-5 text-sm font-black text-[#07130F] transition hover:-translate-y-1"
                  type="button"
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  Conversar
                </button>
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 text-sm font-black text-white transition hover:-translate-y-1"
                  type="button"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  GitHub
                </button>
              </div>
            </aside>

            <div className="grid gap-6">
              <section className="rounded-[2.5rem] border border-white/14 bg-[#F4FFE1] p-6 text-[#07130F] shadow-2xl shadow-black/30">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] opacity-60">
                      Projetos ativos
                    </p>
                    <h2 className="mt-3 text-4xl font-black leading-none">
                      Onde Daniel quer construir agora.
                    </h2>
                  </div>
                  <button
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#07130F] px-5 text-sm font-black text-[#F4FFE1] transition hover:-translate-y-1"
                    type="button"
                  >
                    <Plus size={18} aria-hidden="true" />
                    Novo projeto
                  </button>
                </div>

                <div className="mt-8 grid gap-4">
                  {projects.map((project) => (
                    <article
                      className="rounded-[2rem] bg-white/70 p-5 shadow-xl shadow-black/5"
                      key={project.title}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <BriefcaseBusiness size={22} aria-hidden="true" />
                            <h3 className="text-2xl font-black">
                              {project.title}
                            </h3>
                          </div>
                          <p className="mt-3 max-w-2xl text-sm font-bold leading-6 opacity-70">
                            {project.description}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#F0B7FF] px-3 py-1 text-xs font-black">
                          {project.status}
                        </span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.roles.map((role) => (
                          <span
                            className="rounded-full bg-[#07130F] px-3 py-2 text-xs font-black text-[#F4FFE1]"
                            key={role}
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-[2.5rem] border border-white/14 bg-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
                  <Layers3 className="text-[#D8FF35]" size={30} aria-hidden="true" />
                  <h2 className="mt-5 text-3xl font-black">
                    Interesses de colaboração
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <span
                        className="rounded-full bg-white/10 px-4 py-3 text-sm font-black text-white/84"
                        key={interest}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2.5rem] border border-white/14 bg-[#F0B7FF] p-6 text-[#07130F] shadow-2xl shadow-black/25">
                  <UserPlus size={30} aria-hidden="true" />
                  <h2 className="mt-5 text-3xl font-black">Aberto para</h2>
                  <div className="mt-5 grid gap-3">
                    {[
                      'MVPs com stack Java + React',
                      'Projetos de comunidade',
                      'Founders procurando builder técnico',
                    ].map((item) => (
                      <div
                        className="flex items-center justify-between rounded-full bg-white/50 px-4 py-3 text-sm font-black"
                        key={item}
                      >
                        <span>{item}</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProfilePage
