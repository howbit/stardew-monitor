const configured = document.querySelector('meta[name="apiBase"]')?.content || location.origin
export const apiBases = [...new Set(configured.split(',').map(base => base.trim().replace(/\/+$/, '')).filter(Boolean))]
const configs = new Map()
const options = { cache: 'no-store', credentials: 'include' }

function storageKey(name, base) {
  return name + (base === location.origin ? '' : ':' + base)
}
export function workerToken(base) {
  return localStorage.getItem(storageKey('jwt_token', base)) ||
    (base === location.origin ? localStorage.getItem('cfsm_jwt') : null)
}
export function workerHeaders(base) {
  const headers = {}
  const token = workerToken(base)
  const proof = localStorage.getItem(storageKey('turnstile_verified', base))
  if (token) headers.Authorization = 'Bearer ' + token
  if (proof) headers['X-Turnstile-Verified'] = proof
  return headers
}
export function clearWorkerProof(base) {
  localStorage.removeItem(storageKey('turnstile_verified', base))
}
export function rememberWorkerProof(base, proof) {
  if (proof) localStorage.setItem(storageKey('turnstile_verified', base), proof)
}
export function clearWorkerToken(base) {
  localStorage.removeItem(storageKey('jwt_token', base))
  if (base === location.origin) localStorage.removeItem('cfsm_jwt')
}
export function requestWorker(base, path) {
  return fetch(base + path, { ...options, headers: workerHeaders(base), signal: AbortSignal.timeout(15000) })
}
export async function workerHistory(base, id, hours) {
  const query = new URLSearchParams({id, hours})
  const response = await requestWorker(base, '/api/history/all?' + query)
  const data = await response.json()
  if (response.ok) return Array.isArray(data) ? data : []
  throw Object.assign(new Error(data?.message || data?.error || String(response.status)),
    {status: response.status, code: data?.code || response.status})
}
export function configFor(base) {
  if (!configs.has(base)) {
    const promise = requestWorker(base, '/api/config').then(async response => {
      if (response.status !== 403) return response.ok ? response.json() : null
      clearWorkerProof(base)
      const retry = await requestWorker(base, '/api/config')
      return retry.ok ? retry.json() : null
    }).catch(() => null)
    configs.set(base, promise)
    promise.then(config => { if (!config && configs.get(base) === promise) configs.delete(base) })
  }
  return configs.get(base)
}

window.farmWorkers = { apiBases, configFor, workerHeaders, workerToken, clearWorkerProof, rememberWorkerProof, clearWorkerToken }
