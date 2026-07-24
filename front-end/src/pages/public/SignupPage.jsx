import { CheckCircle2 } from 'lucide-react'
import AuthForm from './components/AuthForm'

function SignupPage() {
  return (
    <section className="px-5 pb-24 pt-32 sm:pt-36 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_0.82fr]">
        <div className="scroll-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
            Cadastro
          </p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-normal text-[var(--heading)] sm:text-7xl">
            Crie seu perfil e comece a construir com outras pessoas.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[var(--text-muted)]">
            Entre no BuildHub para publicar projetos, descobrir vagas e enviar
            propostas para times que precisam de pessoas como voce.
          </p>

          <div className="mt-10 grid max-w-xl gap-3">
            {['Perfil publico de builder', 'Projetos e roles abertas', 'Aplicacoes com contexto'].map(
              (item) => (
                <div
                  className="flex items-center gap-3 rounded-full border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--text-muted)]"
                  key={item}
                >
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <AuthForm mode="signup" variant="page" />
      </div>
    </section>
  )
}

export default SignupPage
