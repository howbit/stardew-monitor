const configured = document.querySelector('meta[name="apiBase"]')?.content || location.origin
export const apiBases = [...new Set(configured.split(',').map(base => base.trim().replace(/\/+$/, '')).filter(Boolean))]
const configs = new Map()
const policies = new Map()
const optionWrites = new Map()
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
  if (turnstileEnabled(policies.get(base)) && proof) headers['X-Turnstile-Verified'] = proof
  return headers
}
export function turnstileEnabled(config) {
  return [true, 'true', 1].includes(config?.turnstile_enabled)
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
export async function requestWorker(base, path, init = {}) {
  await configFor(base)
  return fetch(base + path, { ...options, ...init, headers: {...workerHeaders(base), ...init.headers}, signal: AbortSignal.timeout(15000) })
}
async function requireResponse(response) {
  const data = await response.json().catch(() => null)
  if (response.ok && data !== null) return data
  throw Object.assign(new Error(data?.message || data?.error || String(response.status)),
    {status: response.status, code: data?.code || response.status})
}
export async function workerHistory(base, id, hours) {
  const query = new URLSearchParams({id, hours})
  const data = await requireResponse(await requestWorker(base, '/api/history/all?' + query))
  return Array.isArray(data) ? data : []
}
export function configFor(base) {
  if (!configs.has(base)) {
    const token = workerToken(base)
    const headers = token ? { Authorization: 'Bearer ' + token } : {}
    const promise = fetch(base + '/api/config', {...options, headers, signal: AbortSignal.timeout(15000)})
      .then(requireResponse).then(config => {
        policies.set(base, config)
        return config
      })
    configs.set(base, promise)
    promise.catch(() => { if (configs.get(base) === promise) configs.delete(base) })
  }
  return configs.get(base)
}

export async function verifyWorker(base, token) {
  const config = await configFor(base)
  const headers = { ...workerHeaders(base), 'X-Turnstile-Token': token }
  delete headers['X-Turnstile-Verified']
  const result = await requireResponse(await fetch(base + '/api/config', {...options, headers, signal: AbortSignal.timeout(15000)}))
  if (result.verified !== true || !result.turnstile_verified) throw new Error('Turnstile verification failed')
  rememberWorkerProof(base, result.turnstile_verified)
  Object.assign(config, result)
}

export function saveWorkerBuilding(base, id, building) {
  const previous = optionWrites.get(base) || Promise.resolve()
  const pending = previous.catch(() => {}).then(async () => {
    const config = await configFor(base)
    const saved = config.theme_options || {}
    const buildings = { ...saved.stardew_buildings }
    if (building === null) delete buildings[id]
    else buildings[id] = building
    const result = await requireResponse(await requestWorker(base, '/api/theme_options', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme_options: { ...saved, stardew_buildings: buildings } })
    }))
    config.theme_options = result.theme_options
    return config.theme_options
  })
  optionWrites.set(base, pending)
  const clear = () => { if (optionWrites.get(base) === pending) optionWrites.delete(base) }
  pending.then(clear, clear)
  return pending
}

window.farmWorkers = { apiBases, configFor, requestWorker, workerHeaders, workerToken, clearWorkerProof, rememberWorkerProof,
  clearWorkerToken, turnstileEnabled, verifyWorker, saveWorkerBuilding }
