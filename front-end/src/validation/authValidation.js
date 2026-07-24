const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/

export function validateAuthValues(mode, values) {
  const errors = {}
  const isLogin = mode === 'login'

  if (!isLogin) {
    const name = values.name.trim()

    if (!name) {
      errors.name = 'Informe seu nome.'
    } else if (name.length < 2 || name.length > 80) {
      errors.name = 'O nome deve ter entre 2 e 80 caracteres.'
    }
  }

  if (!values.email.trim()) {
    errors.email = 'Informe seu email.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Informe um email valido.'
  }

  if (!values.password) {
    errors.password = 'Informe sua senha.'
  } else if (!isLogin && !PASSWORD_PATTERN.test(values.password)) {
    errors.password = 'Use maiuscula, minuscula, numero, caractere especial e minimo 6 caracteres.'
  }

  if (!isLogin) {
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirme sua senha.'
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'As senhas precisam ser iguais.'
    }
  }

  return errors
}

export function hasValidationErrors(errors) {
  return Object.keys(errors).length > 0
}
