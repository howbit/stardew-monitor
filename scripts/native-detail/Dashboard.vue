<script setup>
import { onMounted, watch } from 'vue'
import { mountDashboard } from 'virtual:dashboard-controls'
import { apiBases, configFor } from './monitor-runtime.js'

const props = defineProps({ active: Boolean })
const title = document.title
const homeAsset = window.farmAsset
const { season, night } = window.estateStart
const poster = window.estatePoster
const adminHref = (apiBases[0] === location.origin ? '' : apiBases[0]) + '/admin#/admin'
let setVisible

async function activate() {
  const config = await configFor(apiBases[0]).catch(() => null)
  if (!props.active) return
  window.applyFarmSiteConfig(config)
  document.title = config?.site_title || title
  if (setVisible) return setVisible(true)
  document.body.dataset.farmView = 'home'
  document.body.dataset.season = season
  document.body.classList.toggle('night', night)
  setVisible = mountDashboard()
  const stored = sessionStorage.getItem('farm-detail-origin')
  sessionStorage.removeItem('farm-detail-origin')
  if (stored) {
    const state = JSON.parse(stored)
    const apply = () => {
      if (state.scene) window.restoreDetailScene?.(state.scene)
      const region = [...document.querySelectorAll('.region-tab')].find(el => el.dataset.region === state.region)
      region?.click()
      const search = document.querySelector('#search')
      if (search && state.search) {
        search.value = state.search
        search.dispatchEvent(new Event('input'))
      }
      requestAnimationFrame(() => window.scrollTo(0, state.scroll || 0))
    }
    if (state.scene?.server && !window.cfsmAdapter.getNodes().some(node => node.rawId === state.scene.server)) {
      const unsubscribe = window.cfsmAdapter.subscribe(() => { unsubscribe(); apply() })
    } else apply()
  }
}
onMounted(activate)
watch(() => props.active, active => {
  if (active) activate()
  else setVisible?.(false)
}, {flush: 'post'})
</script>

<template>
  <div data-dashboard-template></div>
</template>
