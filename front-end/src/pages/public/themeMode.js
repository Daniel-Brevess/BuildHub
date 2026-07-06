const COLOR_MODE_STORAGE_KEY = 'buildhub-color-mode'

export function getInitialColorMode() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  try {
    const storedMode = window.localStorage.getItem(COLOR_MODE_STORAGE_KEY)

    return storedMode === 'light' || storedMode === 'dark' ? storedMode : 'dark'
  } catch {
    return 'dark'
  }
}

export function persistColorMode(colorMode) {
  try {
    window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, colorMode)
  } catch {
    // Ignore storage failures and keep the in-memory theme working.
  }
}
