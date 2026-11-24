<script setup>
import { nextTick, shallowRef, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const dashboard = shallowRef(null)
watch(router.currentRoute, route => {
  if (route.name === 'dashboard') dashboard.value = route.matched[0].components.default
}, { immediate: true, flush: 'sync' })

let homeScroll = 0
router.beforeEach((to, from) => {
  if (from.name === 'dashboard' && to.name !== 'dashboard') {
    homeScroll = window.scrollY
    sessionStorage.setItem('farm-detail-origin', JSON.stringify({
      hash: '#' + to.fullPath, scene: window.farmDetailScene?.(),
      scroll: homeScroll, search: document.querySelector('#search')?.value || '',
      region: document.querySelector('.region-tab.active')?.dataset.region
    }))
  }
})
router.afterEach(async (to, from, failure) => {
  if (failure) return
  await nextTick()
  if (to.name !== from.name) window.scrollTo(0, to.name === 'dashboard' ? homeScroll : 0)
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component v-if="dashboard" :is="dashboard" v-show="route.name === 'dashboard'"
      :active="route.name === 'dashboard'" />
    <component v-if="route.name === 'server'" :is="Component" :key="route.fullPath" />
  </RouterView>
</template>
