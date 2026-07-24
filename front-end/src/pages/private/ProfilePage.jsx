import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  MapPin,
  MessageSquare,
  Plus,
  UserPlus,
} from 'lucide-react'
import AppShell from './components/AppShell'

const profile = {
  name: 'Daniel Breves',
  username: '@danielbuilder',
  role: 'Full-stack developer',
  location: 'Brasil',
  status: 'Disponivel para colaborar',
  bio: 'Construindo produtos web com foco em comunidades, projetos reais e experiencias que ajudam pessoas a sairem da ideia para o produto.',
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
    description: 'Mini CRM para founders acompanharem ideias, validacoes e contatos.',
    status: 'Ideia aberta',
    roles: ['Backend', 'UX researcher'],
  },
]

const stats = [
  ['Projetos', '2'],
  ['Propostas', '14'],
  ['Conexoes', '8'],
]

function ProfilePage() {
  const action = (
    <div className="flex flex-wrap gap-3">
      <button
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
        type="button"
      >
        <MessageSquare size={17} aria-hidden="true" />
        Conversar
      </button>
      <button
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
        type="button"
      >
        <ExternalLink size={17} aria-hidden="true" />
        GitHub
      </button>
    </div>
  )

  return (
    <AppShell
      activeItem="profile"
      action={action}
      eyebrow="Perfil"
      subtitle="Uma visao clara sobre quem voce e, o que construiu e onde quer colaborar."
      title="Perfil de builder."
    >
      <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
        <aside className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="rounded-[1.75rem] bg-zinc-950 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-semibold text-zinc-950">
                  DB
                </div>
                <div>
                  <h2 className="text-3xl font-semibold leading-none">{profile.name}</h2>
                  <p className="mt-2 text-sm font-medium text-zinc-400">{profile.username}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-200">
                Plus
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-zinc-200">
                <Code2 size={18} aria-hidden="true" />
                {profile.role}
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-zinc-200">
                <MapPin size={18} aria-hidden="true" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-zinc-200">
                <CheckCircle2 size={18} aria-hidden="true" />
                {profile.status}
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm font-medium leading-7 text-zinc-500">{profile.bio}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                className="rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-600"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map(([label, value]) => (
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 text-center" key={label}>
                <p className="text-3xl font-semibold text-zinc-950">{value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="grid gap-5">
          <section className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Projetos ativos
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-none text-zinc-950">
                  Onde Daniel quer construir agora.
                </h2>
              </div>
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                type="button"
              >
                <Plus size={17} aria-hidden="true" />
                Novo projeto
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              {projects.map((project) => (
                <article
                  className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-300 hover:bg-white"
                  key={project.title}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <BriefcaseBusiness size={20} aria-hidden="true" />
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-zinc-500">
                        {project.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-500">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.roles.map((role) => (
                      <span
                        className="rounded-full bg-zinc-950 px-3 py-2 text-xs font-semibold text-white"
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

          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
              <Layers3 className="text-zinc-500" size={26} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold text-zinc-950">
                Interesses de colaboracao
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    className="rounded-full bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-600"
                    key={interest}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-5 text-white shadow-sm">
              <UserPlus size={26} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold">Aberto para</h2>
              <div className="mt-5 grid gap-3">
                {[
                  'MVPs com stack Java + React',
                  'Projetos de comunidade',
                  'Founders procurando builder tecnico',
                ].map((item) => (
                  <div
                    className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-zinc-200"
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
    </AppShell>
  )
}

export default ProfilePage
