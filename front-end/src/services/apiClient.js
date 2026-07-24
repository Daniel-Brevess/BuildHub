const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const data = await parseResponse(response)

  if (!response.ok) {
    throw new Error(getErrorMessage(data))
  }

  return data
}

async function parseResponse(response) {
  const contentType = response.headers.get('content-type')

  if (!contentType?.includes('application/json')) {
    return null
  }

  return response.json()
}

function getErrorMessage(data) {
  return data?.message ?? data?.detail ?? data?.title ?? 'Nao foi possivel concluir a operacao.'
}
