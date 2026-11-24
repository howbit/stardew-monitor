'use strict';
const arrowArt = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" aria-hidden="true" shape-rendering="crispEdges"><path fill="#547747" d="M2 0h1v1h1v1h1v1H3v7H1V3H0V2h1V1h1z"/><path fill="#52838c" d="M7 4h2v7h1v1H9v1H8v1H7v-1H6v-1H5v-1h2z"/></svg>';
const entries = [
  { key:'realtime', label:'实时流量', icon:'farm-computer', value:'487.5', unit:'MB/s', detail:'↑ 107.8　↓ 379.7 MB/s', alt:'原版农场电脑，配上下行箭头' },
  { key:'total', label:'全部节点', icon:'scarecrow', value:'6', alt:'原版稻草人' },
  { key:'online', label:'在线', icon:'seedling', value:'5', alt:'舒展的青苗' },
  { key:'offline', label:'离线', icon:'wilted-plant', value:'1', alt:'卷叶下垂的枯萎株' }
];

function renderStats(currentStats) {
  for (const row of document.querySelectorAll('[data-stats]')) {
    const assetRoot = row.dataset.assetRoot || 'assets';
    row.setAttribute('aria-label', '服务器统计');
    row.innerHTML = entries.map(e => {
      const val = currentStats && currentStats[e.key] !== undefined ? currentStats[e.key] : e.value;
      const unit = e.key === 'realtime' ? currentStats?.realtimeUnit ?? e.unit : e.unit;
      const detail = e.key === 'realtime' ? currentStats?.realtimeDetail ?? e.detail : e.detail;
      return `<div class="stat ${e.key}"><div class="stat-icon"><img class="${e.icon}" src="${assetRoot}/${e.icon}.png" alt="${e.alt}">${e.key==='realtime'?`<span class="transfer-arrows">${arrowArt}</span>`:''}</div><div class="stat-copy"><div class="stat-label">${e.label}</div><div class="stat-value"><strong>${val}</strong>${unit?`<span class="unit">${unit}</span>`:''}</div>${detail?`<div class="flow-breakdown">${detail}</div>`:''}</div></div>`;
    }).join('');
  }
  for (const element of document.querySelectorAll('[data-arrows]')) element.innerHTML = arrowArt;
}

window.updateStats = function (statsData) {
  renderStats(statsData);
};

renderStats(window.cfsmAdapter?.getStats());
