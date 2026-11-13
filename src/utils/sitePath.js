// Путь к страницам с учётом base Vite (локально /, на GitHub Pages /nezavisimost/).
export function sitePath(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (!path || path === '/') return `${base}/`
  if (/^(?:https?:|mailto:|tel:|#|\/\/)/i.test(path)) return path
  return `${base}/${path.replace(/^\/+/, '')}`
}
