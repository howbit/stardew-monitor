import {createApp} from 'vue'
import {createRouter, createMemoryHistory} from 'vue-router'
import ServerDetail from './ServerDetail.vue'
import {initFarmTheme} from './detail-theme.js'
import {http, DEFAULT_REQUEST_TIMEOUT_MS} from '@cfsm/utils/http'
import {initConfig, getApiBases} from '@cfsm/utils/config'
import {setLanguage} from '@cfsm/utils/i18n'
import {VERSION, LAST_WORKERS_VERSION} from '@cfsm/utils/api'
import '@cfsm/styles/main.css'
import '@cfsm/styles/light.css'
import './layout.css'

const assetPage = new URL(location.href)
const packaged = document.documentElement.dataset.cfsmMode === 'live'
const home = new URL(packaged ? '../../' : './index.html', assetPage)
home.search = assetPage.search
if (packaged) home.searchParams.delete('stardew_v')
initFarmTheme(home)
const nodeRoute = assetPage.hash.slice(1)
const back = () => {
  const origin = JSON.parse(sessionStorage.getItem('farm-detail-origin') || 'null')
  if (origin?.hash === assetPage.hash && origin.page === home.pathname + home.search && history.length > 1) history.back()
  else location.replace(home.href + '#/')
}

function showMessage(message) {
  const panel = document.createElement('div')
  panel.className = 'container detail-message'
  const link = document.createElement('a')
  link.className = 'back-btn'
  link.href = home.href + '#/'
  link.textContent = window.farmText('返回')
  link.onclick = event => { event.preventDefault(); back() }
  const status = document.createElement('p')
  status.setAttribute('role', 'status')
  status.textContent = window.farmText(message)
  panel.append(link, status)
  document.querySelector('#app').replaceChildren(panel)
  return panel
}

// Only the local art review has fixture nodes. The distributed theme always uses the site API.
async function localExample(id) {
  if (packaged) return null
  const script = document.createElement('script')
  script.src = new URL('cfsm-adapter.js', assetPage).href
  await new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
    document.head.append(script)
  })
  const adapter = window.cfsmAdapter
  const node = adapter.getNodes().find(item => item.id === id && item.demo)
  if (!node) return null
  const d = adapter.getMockServerDetail(id, node)
  return {
    server: {id, name: id, region: d.location.regionCode, os: d.os, arch: d.arch,
      cpu: node.cpu, cpu_info: d.cpuModel, cpu_cores: d.cores, kernel_version: d.kernel,
      is_online: node.online, ram_used: d.ramUsedMB, ram_total: d.ramTotalMB, swap_used: d.swapUsedMB,
      swap_total: d.swapTotalMB, disk_used: d.diskUsedMB, disk_total: d.diskTotalMB,
      tcp_conn: d.tcpConn, udp_conn: d.udpConn, processes: d.processes, load_avg: node.load?.join(' '),
      expire_date: d.expireDate, last_updated: node.online ? Date.now() : null},
    history: hours => d.history.filter(point => point.ts >= Date.now() - hours * 3600000)
      .map(point => ({timestamp: new Date(point.ts).toISOString(), cpu: point.cpu}))
  }
}

let denied = false
let loading
let configData
function retry() {
  if (!loading) loading = start().catch(() => showMessage('节点不存在或暂时无法读取')).finally(() => { loading = null })
  return loading
}
async function start() {
  if (!/^\/server\/[^/?#]+(?:\?.*)?$/.test(nodeRoute)) return location.replace(home.href)
  history.replaceState(null, '', home.pathname + home.search + assetPage.hash)
  const id = decodeURIComponent(nodeRoute.slice('/server/'.length).split('?')[0])
  await initConfig()
  const options = {autoRedirect: false, timeoutMs: DEFAULT_REQUEST_TIMEOUT_MS}
  showMessage('正在读取节点数据')
  const [status, config] = await Promise.all([
    http.getByIndex('/api/server?id=' + encodeURIComponent(id), 0, options),
    configData ? {data: configData} : http.getByIndex('/api/config', 0, options).catch(() => ({})),
    setLanguage(window.farmLocale === 'zh-CN' ? 'zh' : window.farmLocale)
  ])
  configData = config.data
  if (status.status === 401) {
    window.openMonitorLogin(getApiBases()[0])
    return
  }
  const demo = !status.data?.id && ![401, 403].includes(status.status) ? await localExample(id) : null
  const server = demo?.server || status.data
  if (!server || String(server.id) !== id) {
    denied = [401, 403].includes(status.status)
    const panel = showMessage(denied ? '节点详情需要登录或访问验证' : '节点不存在或暂时无法读取')
    if (denied) {
      localStorage.removeItem('turnstile_verified')
      configData = configData && {...configData, verified: false}
      const actions = document.createElement('div')
      actions.className = 'monitor-access'
      panel.append(actions)
      const base = getApiBases()[0] || location.origin
      const policy = configData || await fetch(base + '/api/config', {cache:'no-store', signal:AbortSignal.timeout(15000)})
        .then(response => response.ok ? response.json() : null).catch(() => null)
      window.showMonitorAccess(actions, 'auth', policy, base, retry)
    }
    return
  }
  denied = false
  const runtimeConfig = configData || {}
  VERSION.value = runtimeConfig.version || ''
  LAST_WORKERS_VERSION.value = runtimeConfig.last_workers_version || ''
  document.title = server.name + ' · ' + (runtimeConfig.site_title || document.title)
  const router = createRouter({history: createMemoryHistory(), routes: [
    {path: '/server/:id', component: ServerDetail},
    {path: '/', component: {}, beforeEnter() { back(); return false }},
    {path: '/admin', component: {}, beforeEnter() { location.assign('/admin#/admin'); return false }}
  ]})
  await router.push(nodeRoute)
  const app = createApp(ServerDetail)
  app.use(router)
  app.provide('initialServer', server)
  app.provide('appConfig', runtimeConfig)
  app.provide('demoHistory', demo?.history || null)
  app.mount('#app')
}
window.addEventListener('hashchange', () => location.reload())
window.addEventListener('storage', event => {
  if (denied && ['jwt_token','turnstile_verified'].includes(event.key) && event.newValue) retry()
})
document.addEventListener('visibilitychange', () => {
  if (denied && !document.hidden) retry()
})
retry()
