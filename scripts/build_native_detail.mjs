// Build the Vue application using the pinned CFSM components and its lockfile.
import path from 'node:path'
import fs from 'node:fs/promises'
import {createRequire} from 'node:module'
import {fileURLToPath, pathToFileURL} from 'node:url'

const scripts = path.dirname(fileURLToPath(import.meta.url))
const upstream = path.resolve(scripts, '../tools/cfsm-howbit')
const output = path.resolve(scripts, '../reviews/05-composed/native-built/spa')
const root = path.resolve(scripts, '..')
const review = 'reviews/05-composed/'
const require = createRequire(path.join(upstream, 'package.json'))
const {build} = await import(pathToFileURL(require.resolve('vite', {paths: [upstream]})))
const {default: vue} = await import(pathToFileURL(require.resolve('@vitejs/plugin-vue')))
const coreScripts = [
  'scene/vendor/suncalc.js', 'scene/zone-hints.js', 'scene/scene-core.js',
  ...['theme-language', 'visitor-access', 'scene-init', 'cfsm-adapter'].map(name => review + name + '.js')
]
const dashboardScripts = [
  'reviews/01-stats/stats.js', 'reviews/04-nodes/review.js',
  ...['house-picker', 'estate-weather', 'estate-camera', 'composition', 'estate-life', 'music-engine', 'music']
    .map(name => review + name + '.js')
]
async function bundle(files) {
  const scripts = await Promise.all(files.map(file => fs.readFile(path.join(root, file), 'utf8')))
  return scripts.join('\n;\n')
    .replaceAll('../../assets/ui/os-icons/', '/os-icons/')
    .replaceAll('../../assets/', 'assets/')
}

await build({
  root: upstream, configFile: false, publicDir: false,
  base: './',
  resolve: {alias: {
    '@cfsm': path.join(upstream, 'src/frontend'),
    'vue': path.join(upstream, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
    'vue-router': path.join(upstream, 'node_modules/vue-router/dist/vue-router.mjs'),
    'chart.js/auto': path.join(upstream, 'node_modules/chart.js/auto/auto.js')
  }},
  plugins: [{
    name: 'farm-theme', enforce: 'pre',
    generateBundle(_, bundle) {
      const chunks = Object.values(bundle).filter(item => item.type === 'chunk')
      const entry = chunks.find(item => item.isEntry).fileName
      this.emitFile({type: 'asset', fileName: 'build-files.json',
        source: JSON.stringify({entry, chunks: chunks.map(item => item.fileName).sort()})})
    },
    resolveId(id) {
      if (id === 'virtual:farm-core' || id === 'virtual:dashboard-controls') return '\0' + id
    },
    async load(id) {
      if (id === '\0virtual:farm-core') return bundle(coreScripts)
      if (id === '\0virtual:dashboard-controls') return `
        export function mountDashboard() {
          window.bindFarmLanguage();
          ${await bundle(dashboardScripts)}
          window.cfsmAdapter.activate();
          return visible => {
            if (visible) document.body.dataset.farmView = 'home';
            window.dispatchEvent(new CustomEvent('farm-home-visibility', {detail: visible}));
            if (visible) window.cfsmAdapter.activate();
            else window.cfsmAdapter.deactivate();
          };
        }
      `
    },
    async transform(source, rawId) {
      const id = rawId.split('?')[0].replaceAll('\\', '/')
      if (id.endsWith('/styles/main.css')) return source
        .replace(/^@import url\('https:\/\/fonts\.googleapis\.com[^\n]+/m, '')
        .replace(/^\s*background: url\('\/mikus\/sakura\.png'\)[^\n]+/m, '')
      if (id.endsWith('/src/frontend/utils/api.js')) {
        return source.replace('const token = getJwtToken()', 'const token = handlers.authToken ? handlers.authToken() : getJwtToken()')
      }
      if (id.endsWith('/native-detail/Dashboard.vue') && !rawId.includes('?')) {
        const html = await fs.readFile(path.join(root, review, 'index.html'), 'utf8')
        const markup = html.match(/<main class="page-shell">[\s\S]*?<\/main>/)[0]
          .replace(/<script[\s\S]*?<\/script>/g, '')
          .replace(/<svg class="hero-rail-repair"[\s\S]*?<\/svg>/, '')
          .replace(/<div class="crop-layer"[^>]*><\/div>/g, '')
          .replace(/ data-(spring|summer|fall|winter)-(day|night)-src="[^"]*"/g, '')
          .replace('class="hero-art"', 'class="hero-art" :src="poster"')
          .replace('src="../../assets/ui/estate/title.png"', ':src="homeAsset(\'assets/ui/estate/title.png\')"')
          .replace('<strong>星谷哨站</strong>', '<strong>{{ title }}</strong>')
          .replace('href="/admin#/admin"', ':href="adminHref"')
          .replace('data-asset-root="../01-stats/assets"', 'data-asset-root="assets/stats"')
          .replace('星谷哨站完整页面预览', '星谷哨站监控面板')
        return source.replace('<div data-dashboard-template></div>', () => markup)
      }
    }
  }, vue({template: {transformAssetUrls: false}})],
  define: {'process.env.NODE_ENV': '"production"'},
  build: {
    outDir: output, emptyOutDir: true,
    rollupOptions: {
      input: path.join(scripts, 'native-detail/main.js'),
      output: {entryFileNames: 'app-[hash].js', chunkFileNames: '[name]-[hash].js'}
    },
    minify: 'esbuild'
  }
})
const notices = []
for (const dir of ['', 'node_modules/vue', 'node_modules/vue-router', 'node_modules/chart.js',
  'node_modules/@kurkle/color', 'node_modules/@vue/runtime-dom', 'node_modules/@vue/runtime-core',
  'node_modules/@vue/reactivity', 'node_modules/@vue/shared']) {
  const folder = path.join(upstream, dir)
  const file = (await fs.readdir(folder)).find(name => /^license(?:\.md|\.txt)?$/i.test(name))
  notices.push((dir || 'CF-Server-Monitor') + '\n' + await fs.readFile(path.join(folder, file), 'utf8'))
}
await fs.writeFile(path.join(output, 'LICENSES.txt'), notices.join('\n\n'))
