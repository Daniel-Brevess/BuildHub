import { useState } from 'react'
import { ArrowRight, LogIn, UserPlus } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, persistAuthUser, registerUser } from '../../../services/authService'
import { hasValidationErrors, validateAuthValues } from '../../../validation/authValidation'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function AuthForm({ mode, variant = 'compact', className = '', onSuccess }) {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isLogin = mode === 'login'
  const isPage = variant === 'page'
  const Icon = isLogin ? LogIn : UserPlus

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))
  }

  const handleBlur = (event) => {
    const nextTouched = {
      ...touched,
      [event.target.name]: true,
    }

    setTouched(nextTouched)
    setErrors(validateAuthValues(mode, values))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'idle', message: '' })

    const nextErrors = validateAuthValues(mode, values)
    setErrors(nextErrors)
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    })

    if (hasValidationErrors(nextErrors)) {
      return
    }

    setIsSubmitting(true)

    try {
      const user = isLogin
        ? await loginUser({
            email: values.email,
            password: values.password,
          })
        : await registerUser({
            name: values.name,
            email: values.email,
            password: values.password,
          })

      persistAuthUser(user)
      setStatus({ type: 'success', message: user.message })
      onSuccess?.(user)
      navigate('/app/dashboard')
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formClassName = isPage
    ? `scroll-reveal rounded-[2.5rem] border border-transparent bg-[var(--inverted)] p-6 text-[var(--button-text)] shadow-2xl shadow-[var(--shadow)] ${className}`
    : `absolute right-0 top-[calc(100%+0.75rem)] z-50 w-72 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 text-[var(--text)] shadow-2xl shadow-[var(--shadow)] sm:w-80 ${className}`

  const inputClassName = isPage
    ? 'min-h-12 rounded-2xl border border-[var(--form-border)] bg-white/10 px-4 text-sm font-medium text-[var(--button-text)] outline-none transition placeholder:text-[var(--button-text)]/50 focus:border-[var(--button-text)]'
    : 'min-h-11 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm font-medium outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--text)]'

  const errorClassName = isPage
    ? 'px-1 text-xs font-medium leading-5 text-red-200'
    : 'px-1 text-xs font-medium leading-5 text-red-500'

  const buttonClassName = isPage
    ? 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--button-text)] px-5 text-sm font-semibold text-[var(--inverted)] transition hover:opacity-86 disabled:cursor-not-allowed disabled:opacity-60'
    : 'inline-flex min-h-11 items-center justify-center rounded-2xl bg-[var(--inverted)] px-4 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--inverted-soft)] disabled:cursor-not-allowed disabled:opacity-60'

  const getFieldError = (fieldName) => (touched[fieldName] ? errors[fieldName] : '')
  const renderFieldError = (fieldName) => {
    const fieldError = getFieldError(fieldName)

    if (!fieldError) {
      return null
    }

    return (
      <span className={errorClassName} id={`${variant}-${mode}-${fieldName}-error`}>
        {fieldError}
      </span>
    )
  }

  return (
    <form className={formClassName.trim()} onSubmit={handleSubmit}>
      {isPage && (
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--button-text)] text-[var(--inverted)]">
          <Icon size={26} aria-hidden="true" />
        </span>
      )}

      <h2 className={isPage ? 'mt-6 text-4xl font-semibold leading-none' : 'text-base font-semibold tracking-normal'}>
        {isLogin ? 'Entrar' : 'Criar conta'}
      </h2>
      <p className={isPage ? 'mt-3 text-sm font-medium leading-6 opacity-70' : 'mt-1 text-sm font-medium text-[var(--text-soft)]'}>
        {isLogin ? 'Use seu email e senha para acessar sua conta.' : 'Monte seu primeiro acesso para explorar projetos reais.'}
      </p>

      <div className={isPage ? 'mt-8 grid gap-4' : 'mt-4 grid gap-3'}>
        {!isLogin && (
          <>
            <label className="sr-only" htmlFor={`${variant}-signup-name`}>
              Nome
            </label>
            <input
              aria-describedby={`${variant}-${mode}-name-error`}
              aria-invalid={Boolean(getFieldError('name'))}
              autoComplete="name"
              className={inputClassName}
              id={`${variant}-signup-name`}
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Nome"
              type="text"
              value={values.name}
            />
            {renderFieldError('name')}
          </>
        )}

        <label className="sr-only" htmlFor={`${variant}-${mode}-email`}>
          Email
        </label>
        <input
          aria-describedby={`${variant}-${mode}-email-error`}
          aria-invalid={Boolean(getFieldError('email'))}
          autoComplete="email"
          className={inputClassName}
          id={`${variant}-${mode}-email`}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={values.email}
        />
        {renderFieldError('email')}

        <label className="sr-only" htmlFor={`${variant}-${mode}-password`}>
          Senha
        </label>
        <input
          aria-describedby={`${variant}-${mode}-password-error`}
          aria-invalid={Boolean(getFieldError('password'))}
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          className={inputClassName}
          id={`${variant}-${mode}-password`}
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Senha"
          type="password"
          value={values.password}
        />
        {renderFieldError('password')}

        {!isLogin && (
          <>
            <label className="sr-only" htmlFor={`${variant}-signup-confirm-password`}>
              Confirmar senha
            </label>
            <input
              aria-describedby={`${variant}-${mode}-confirmPassword-error`}
              aria-invalid={Boolean(getFieldError('confirmPassword'))}
              autoComplete="new-password"
              className={inputClassName}
              id={`${variant}-signup-confirm-password`}
              name="confirmPassword"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Confirmar senha"
              type="password"
              value={values.confirmPassword}
            />
            {renderFieldError('confirmPassword')}
          </>
        )}

        {status.message && (
          <p
            className={`text-sm font-medium ${
              status.type === 'error'
                ? isPage
                  ? 'text-red-200'
                  : 'text-red-500'
                : isPage
                  ? 'text-emerald-200'
                  : 'text-emerald-600'
            }`}
            role="status"
          >
            {status.message}
          </p>
        )}

        <button className={buttonClassName} disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Enviando...' : isLogin ? 'Entrar' : 'Criar conta'}
          {isPage && <ArrowRight size={18} aria-hidden="true" />}
        </button>
      </div>

      {isPage && (
        <p className="mt-6 text-center text-sm font-medium opacity-70">
          {isLogin ? 'Ainda nao tem conta?' : 'Ja tem conta?'}{' '}
          <Link
            className="font-semibold text-[var(--button-text)]"
            to={isLogin ? '/cadastro' : '/login'}
          >
            {isLogin ? 'Criar cadastro' : 'Entrar'}
          </Link>
        </p>
      )}
    </form>
  )
}

export default AuthForm
