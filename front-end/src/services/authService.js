import { apiRequest } from './apiClient'

const AUTH_USER_STORAGE_KEY = 'buildhub.auth.user'

export function registerUser(payload) {
  return apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function loginUser(payload) {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function persistAuthUser(user) {
  localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user))
}
