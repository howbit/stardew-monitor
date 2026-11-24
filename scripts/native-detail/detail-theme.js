import {onUnmounted} from 'vue'

const listeners = new Set()
let place, override

function refresh() {
  const night = override ?? (window.StardewScene.resolveScene(place).phase === 'night')
  if (document.body.classList.contains(night ? 'night' : 'light')) return
  document.body.classList.toggle('light', !night)
  document.body.classList.toggle('night', night)
  listeners.forEach(callback => callback())
}

export function initFarmTheme(home) {
  const origin = JSON.parse(sessionStorage.getItem('farm-detail-origin') || 'null')
  const scene = origin?.hash === location.hash && origin.page === home.pathname + home.search ? origin.scene : null
  place = scene?.place ?? window.estateStart.visitor
  override = scene ? scene.phaseOverride : (window.estateStart.demo ? window.estateStart.night : null)
  refresh()
  window.setInterval(refresh, 30000)
  window.addEventListener('pageshow', refresh)
}

export function onFarmThemeChange(callback) {
  listeners.add(callback)
  onUnmounted(() => listeners.delete(callback))
}
