import { apiBases } from './monitor-runtime.js'
import 'virtual:farm-core'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: () => import('./Dashboard.vue') },
    { path: '/server/:id', name: 'server', component: () => import('./ServerPage.vue') },
    { path: '/admin', beforeEnter(to) {
      const base = apiBases[Number(to.query.apiIndex)] || apiBases[0]
      location.assign(new URL('/admin#/admin', base))
      return false
    } },
    { path: '/:unmatched(.*)', redirect: '/' }
  ]
})
const { season, night } = window.estateStart
window.estatePoster = window.farmAsset(`assets/landscape/native-spring-estate/${season}-${night ? 'night' : 'day'}.webp`)
let preloaded = false
router.beforeEach(to => {
  if (preloaded || to.name !== 'dashboard') return
  preloaded = true
  const poster = document.createElement('link')
  poster.rel = 'preload'
  poster.as = 'image'
  poster.fetchPriority = 'high'
  poster.href = window.estatePoster
  document.head.append(poster)
})
router.onError(() => {
  const app = document.querySelector('#app')
  const error = document.createElement('p')
  error.setAttribute('role', 'alert')
  error.textContent = window.farmText('暂时无法读取节点。')
  app.prepend(error)
})
createApp(App).use(router).mount('#app')
