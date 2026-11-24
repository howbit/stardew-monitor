// Rebuild the standalone view using the checked-out CFSM 2.8.7 frontend and its lockfile.
import path from 'node:path'
import fs from 'node:fs/promises'
import {createRequire} from 'node:module'
import {fileURLToPath, pathToFileURL} from 'node:url'

const scripts = path.dirname(fileURLToPath(import.meta.url))
const upstream = path.resolve(scripts, '../tools/cfsm-howbit')
const output = path.resolve(scripts, '../reviews/05-composed/native-built')
const require = createRequire(path.join(upstream, 'package.json'))
const {build} = await import(pathToFileURL(require.resolve('vite', {paths: [upstream]})))
const {default: vue} = await import(pathToFileURL(require.resolve('@vitejs/plugin-vue')))

await build({
  root: upstream, configFile: false, publicDir: false,
  resolve: {alias: {
    '@cfsm': path.join(upstream, 'src/frontend'),
    'vue': path.join(upstream, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
    'vue-router': path.join(upstream, 'node_modules/vue-router/dist/vue-router.mjs'),
    'chart.js/auto': path.join(upstream, 'node_modules/chart.js/auto/auto.js')
  }},
  plugins: [{
    name: 'farm-detail', enforce: 'pre',
    transform(source, id) {
      if (id.endsWith('/styles/main.css')) return source.replace(/^@import url\('https:\/\/fonts\.googleapis\.com[^\n]+/m, '')
    }
  }, vue()],
  define: {'process.env.NODE_ENV': '"production"'},
  build: {
    outDir: output, emptyOutDir: false,
    lib: {entry: path.join(scripts, 'native-detail/entry.js'), formats: ['es'], fileName: () => 'detail.js', cssFileName: 'detail'},
    rollupOptions: {output: {inlineDynamicImports: true}},
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
