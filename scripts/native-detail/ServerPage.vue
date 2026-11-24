<script setup>
import { defineComponent, h, nextTick, onMounted, onUnmounted, provide, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ServerDetail from './ServerDetail.vue'
import { initFarmTheme } from './detail-theme.js'
import { apiBases, clearWorkerProof, configFor, requestWorker } from './monitor-runtime.js'
import { initConfig } from '@cfsm/utils/config'
import { setLanguage } from '@cfsm/utils/i18n'
import { VERSION, LAST_WORKERS_VERSION } from '@cfsm/utils/api'
import mainCss from '@cfsm/styles/main.css?inline'
import lightCss from '@cfsm/styles/light.css?inline'
import layoutCss from './layout.css?inline'

const route = useRoute()
const id = route.params.id
const base = apiBases[Number(route.query.apiIndex)] || apiBases[0]
const messages = window.farmText
const status = ref('正在读取节点数据')
const panel = ref(null)
const server = ref(null)
let alive = true
let pending = false
let config = null
const Content = defineComponent({
  setup() {
    provide('initialServer', server.value)
    provide('appConfig', config || {})
    return () => h(ServerDetail, {onReauth: () => { server.value = null; retry() }})
  }
})

const css = document.createElement('style')
css.textContent = mainCss + '\n' + lightCss + '\n' + layoutCss
document.head.append(css)
document.body.classList.add('farm-detail')
document.body.dataset.farmView = 'detail'
const stopTheme = initFarmTheme()

async function retry() {
  if (pending || !alive) return
  pending = true
  try {
    const [response, settings] = await Promise.all([
      requestWorker(base, '/api/server?id=' + encodeURIComponent(id)), configFor(base),
      initConfig(), setLanguage(window.farmLocale === 'zh-CN' ? 'zh' : window.farmLocale)
    ])
    if (!alive) return
    config = settings
    if (response.status === 401) return window.openMonitorLogin(base)
    if (response.status === 403) {
      clearWorkerProof(base)
      status.value = '节点详情需要登录或访问验证'
      await nextTick()
      if (alive) window.showMonitorAccess(panel.value, 'auth', {...config, verified: false}, base, retry)
      return
    }
    const data = response.ok ? await response.json() : null
    if (!alive) return
    if (!data || String(data.id) !== id) throw new Error('Node unavailable')
    VERSION.value = config?.version || ''
    LAST_WORKERS_VERSION.value = config?.last_workers_version || ''
    document.title = data.name + ' · ' + (config?.site_title || '星谷哨站')
    server.value = data
  } catch {
    if (alive) status.value = '节点不存在或暂时无法读取'
  } finally {
    pending = false
  }
}
onMounted(retry)
onUnmounted(() => {
  alive = false
  stopTheme()
  css.remove()
  document.body.classList.remove('farm-detail', 'light')
})
</script>

<template>
  <Content v-if="server" />
  <main v-else class="container detail-message">
    <RouterLink to="/" class="back-btn">{{ messages('返回') }}</RouterLink>
    <p role="status">{{ messages(status) }}</p>
    <div ref="panel" class="monitor-access" hidden></div>
  </main>
</template>
