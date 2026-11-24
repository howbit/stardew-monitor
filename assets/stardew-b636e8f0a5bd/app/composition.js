'use strict';
const seasonNames = { spring: '春', summer: '夏', fall: '秋', autumn: '秋', winter: '冬' };
const seasonSelect = document.querySelector('#season-preview');
const modeButton = document.querySelector('#view-mode');
const seasonTime = document.querySelector('#season-time');
const sceneLabel = document.querySelector('#scene-label');
const heroArt = document.querySelector('.hero-art');
const returnLocalBtn = document.querySelector('#return-local');
const artMode = document.documentElement?.dataset?.cfsmMode === 'live' ? null : new URLSearchParams(location.search).get('art');
const previewPostcards = artMode === 'postcards';
const nativeFarm = artMode !== 'panorama' && !previewPostcards;
const signFace = document.querySelector('.site-sign-copy');
if (signFace) {
  const title = signFace.querySelector('strong');
  function fitSignTitle() {
    const maxSize = parseFloat(getComputedStyle(signFace).getPropertyValue('--sign-size'));
    for (let size = maxSize; size >= 1; size--) {
      title.style.fontSize = size + 'px';
      if (title.offsetHeight <= signFace.clientHeight && title.scrollWidth <= signFace.clientWidth) break;
    }
  }
  new ResizeObserver(fitSignTitle).observe(signFace);
  new MutationObserver(fitSignTitle).observe(title, {childList:true, characterData:true, subtree:true});
  document.fonts.ready.then(fitSignTitle);
}
const farmCrops = {
  spring: '草莓、花椰菜、防风草和土豆',
  summer: '蓝莓、甜瓜、番茄和玉米',
  fall: '南瓜、蔓越莓、茄子和葡萄',
  winter: '霜瓜、冬季采集作物和冬季纤维'
};
const postcardDescriptions = {
  'spring-day': '春日晨光里的花树、木农舍和两排草莓与春蔬',
  'summer-night': '夏夜海湾里的提灯栈桥和向岸边游来的月光水母'
};

const heroSources = heroArt ? {
  spring: { day: heroArt.dataset.springDaySrc, night: heroArt.dataset.springNightSrc },
  summer: { day: heroArt.dataset.summerDaySrc, night: heroArt.dataset.summerNightSrc },
  fall: { day: heroArt.dataset.fallDaySrc, night: heroArt.dataset.fallNightSrc },
  winter: { day: heroArt.dataset.winterDaySrc, night: heroArt.dataset.winterNightSrc }
} : {
  spring: { day: '/assets/stardew-b636e8f0a5bd/landscape/spring-layered-v6/hero-day.png', night: '/assets/stardew-b636e8f0a5bd/landscape/spring-layered-v6/hero-night.png' },
  summer: { day: '/assets/stardew-b636e8f0a5bd/landscape/summer-matched-v1/hero-day.png', night: '/assets/stardew-b636e8f0a5bd/landscape/summer-matched-v1/hero-night.png' },
  fall: { day: '/assets/stardew-b636e8f0a5bd/landscape/fall-matched-v1/hero-day.png', night: '/assets/stardew-b636e8f0a5bd/landscape/fall-matched-v1/hero-night.png' },
  winter: { day: '/assets/stardew-b636e8f0a5bd/landscape/winter-matched-v1/hero-day.png', night: '/assets/stardew-b636e8f0a5bd/landscape/winter-matched-v1/hero-night.png' }
};

const Core = typeof window !== 'undefined' ? window.StardewScene : null;
let activeServerId = null;
window.estateSelectedNode = () => activeServerId;

function paintLandscape(seasonKey, isNight) {
  const key = seasonKey + (isNight ? '-night' : '-day');
  const postcard = previewPostcards && postcardDescriptions[key];
  const root = postcard ? '/assets/stardew-b636e8f0a5bd/landscape/postcards-v1/' + key : '';
  if (nativeFarm) document.body.dataset.farmArt = 'native';
  else delete document.body.dataset.farmArt;
  if (!nativeFarm && !postcard && seasonKey === 'spring') {
    for (const rail of document.querySelectorAll('.hero-rail-repair image[data-href]')) {
      rail.setAttribute('href', rail.dataset.href);
      rail.removeAttribute('data-href');
    }
  }
  if (postcard) document.body.dataset.postcard = key;
  else delete document.body.dataset.postcard;
  if (heroArt) {
    const art = postcard ? { src: root + '/hero.png', alt: postcard } : resolveHeroSource(seasonKey, isNight);
    if (heroArt.getAttribute('src') !== art.src) heroArt.src = art.src;
    heroArt.alt = art.alt;
  }
  updateModularFooter(seasonKey, root, isNight);
}

function resolveHeroSource(seasonKey, isNight) {
  if (nativeFarm) {
    const season = Object.hasOwn(farmCrops, seasonKey) ? seasonKey : 'spring';
    return {
      src: `/assets/stardew-b636e8f0a5bd/landscape/native-spring-estate/${season}-${isNight ? 'night' : 'day'}.png`,
      alt: nodeText('{scene}农场，主宅、水井和两片祝尼魔农田位于画面中央，{crops}', {scene:nodeText(seasonNames[season]+(isNight ? '夜' : '日')),crops:nodeText(farmCrops[season])})
    };
  }
  const source = heroSources[seasonKey] || heroSources.spring;
  const season = seasonNames[seasonKey] || '春';
  return {
    src: isNight ? source.night : source.day,
    alt: isNight ? `${season}季低亮月色下的河谷、木桥与亮灯农舍` : `左侧河谷与木桥、右侧农舍院落的${season}季农场`
  };
}

let visitor = window.estateStart.visitor;
let phaseOverride = window.estateStart.demo ? window.estateStart.night : null;
let currentTime;
function syncSceneCopy() {
  window.cfsmAdapter?.expireSilentNodes?.();
  for (const el of document.querySelectorAll('[data-report]')) el.textContent = reportText(Number(el.dataset.report));
  const place = activeServerId === null ? visitor : window.cfsmAdapter.getServerLocation(activeServerId);
  currentTime = Core.resolveScene(place);
  const manual = seasonSelect.value !== 'auto';
  const season = manual ? seasonSelect.value : (currentTime.season === 'autumn' ? 'fall' : currentTime.season);
  const isNight = phaseOverride ?? (currentTime.phase === 'night');
  if (document.body.dataset.season !== season || document.querySelector('#seasonal-footer').dataset.season !== season) {
    window.applySeason(season, {persist:false});
  }
  window.setNightMode(isNight);
  paintLandscape(season, isNight);
  const city = visitor.city && (nodeText(visitor.city) + (visitor.source === '网络估算' ? nodeText('（网络定位）') : ''));
  const where = activeServerId === null ? [nodeText('本地场景'), city].filter(Boolean).join(' · ') :
    `${nodeText("服务器")} · ${nodeText(place.city)} ${activeServerId}`;
  sceneLabel.textContent = `${where} · ${nodeText(seasonNames[season]+(isNight ? "夜" : "日"))}`;
  const {hour, minute} = currentTime.local;
  document.querySelector('.time-sign strong').textContent = [hour,minute].map(n=>String(n).padStart(2,'0')).join(':');
  window.estateWeather.update(currentTime, season, manual, seasonNames[season], place.source);
  returnLocalBtn.style.display = activeServerId === null ? 'none' : 'inline-flex';
  for (const button of document.querySelectorAll('.farm-warp')) {
    const selected = button.dataset.node === activeServerId;
    button.setAttribute('aria-pressed', String(selected));
    button.closest('[data-id]').classList.toggle('scene-active', selected);
  }
}

function updateModularFooter(seasonKey, postcardRoot, isNight) {
  const sk = (seasonKey === 'auto') ? (document.body.dataset.season || 'spring') : (seasonKey || 'spring');
  const validSeason = (sk === 'autumn') ? 'fall' : sk;
  for (const [selector, side] of [['.flora-img', 'left'], ['.fence-img', 'right']]) {
    const img = document.querySelector(selector);
    if (img && nativeFarm) {
      const src = `/assets/stardew-b636e8f0a5bd/landscape/native-spring-estate/footer/${validSeason}-${isNight ? 'night' : 'day'}-${side}.png`;
      if (img.getAttribute('src') !== src) img.src = src;
      continue;
    }
    if (img && postcardRoot) {
      img.src = postcardRoot + '/footer-' + side + '.png';
      continue;
    }
    if (img) img.src = validSeason === 'spring'
      ? (side === 'right'
        ? '/assets/stardew-b636e8f0a5bd/landscape/spring-unified-footer-v2/footer-right.png'
        : '/assets/stardew-b636e8f0a5bd/landscape/spring-layered-v6/footer-left.png')
      : `/assets/stardew-b636e8f0a5bd/landscape/${validSeason}-matched-v1/footer-${side}.png`;
  }
}

seasonSelect.addEventListener('change', () => {
  if (seasonSelect.value === 'auto') phaseOverride = null;
  activeServerId = null;
  syncSceneCopy();
  if (seasonSelect.value === 'auto') locateVisitor();
});
modeButton.addEventListener('click', () => {
  const nextNight = !document.body.classList.contains('night');
  phaseOverride = nextNight === (currentTime.phase === 'night') ? null : nextNight;
  syncSceneCopy();
});
window.selectServerScene = function(serverId) {
  activeServerId = serverId;
  phaseOverride = null;
  seasonSelect.value = 'auto';
  syncSceneCopy();
};
window.resetServerScene = function() {
  activeServerId = null;
  phaseOverride = null;
  seasonSelect.value = 'auto';
  syncSceneCopy();
  locateVisitor();
};
returnLocalBtn.addEventListener('click', window.resetServerScene);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && activeServerId !== null && !document.querySelector('#stardew-modal.active')) {
    window.resetServerScene();
  }
});
let locationRequest = 0, locating = false;
async function locateVisitor(useDevice = false) {
  if (!useDevice && (visitor.latitude != null || locating)) return;
  locating = true;
  const attempt = ++locationRequest;
  const place = await window.estateWeather.locate(useDevice);
  if (attempt !== locationRequest) return;
  locating = false;
  if (place) {
    visitor = place;
    try { localStorage.setItem('estate-visitor', JSON.stringify({place, zone:Core.browserZone(), stamp:Date.now()})); } catch {}
    if (activeServerId === null) syncSceneCopy();
  }
}
document.querySelector('#farm-weather')?.addEventListener('click', () => {
  if (activeServerId === null && seasonSelect.value === 'auto') locateVisitor(true);
});
syncSceneCopy();
if (seasonSelect.value === 'auto') locateVisitor();
const clockTimer = setInterval(syncSceneCopy, 10000);
if (typeof clockTimer.unref === 'function') clockTimer.unref();

// 星谷风节点详情视窗 (Server Detail Modal · 遵循 CF-Server-Monitor /#/server/:id 规范)
(function initServerDetailModal() {
  let backdrop = document.querySelector('#stardew-modal');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'stardew-modal';
    backdrop.className = 'stardew-modal-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.innerHTML = `
      <div class="stardew-modal-dialog">
        <div class="stardew-modal-head">
          <div class="stardew-modal-title">
            <div class="stardew-modal-portrait"></div>
            <div class="stardew-modal-info">
              <h2 class="stardew-modal-name"></h2>
              <div class="stardew-modal-sub"></div>
            </div>
          </div>
          <button type="button" class="stardew-modal-close" aria-label="${nodeText('关闭详情视窗')}">✕</button>
        </div>
        <div class="stardew-modal-body"></div>
      </div>`;
    if (document.body.appendChild) {
      document.body.appendChild(backdrop);
    } else if (document.body.append) {
      document.body.append(backdrop);
    }
  }

  const dialog = backdrop.querySelector('.stardew-modal-dialog');
  const closeBtn = backdrop.querySelector('.stardew-modal-close');
  const portraitEl = backdrop.querySelector('.stardew-modal-portrait');
  const nameEl = backdrop.querySelector('.stardew-modal-name');
  const subEl = backdrop.querySelector('.stardew-modal-sub');
  const bodyEl = backdrop.querySelector('.stardew-modal-body');

  let detailRequest = 0;
  function closeModal() {
    detailRequest++;
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    if (location.hash && location.hash.startsWith('#/server/')) {
      location.hash = '#/';
    }
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) closeModal();
  });

  function renderSparklineSVG(points, color = '#527340', fillColor = 'rgba(82,115,64,0.18)') {
    if (!points || points.length < 2) return '';
    const w = 320, h = 56, p = 4;
    const maxVal = Math.max(10, Math.max(...points) * 1.2);
    const minVal = 0;
    const step = (w - p * 2) / (points.length - 1);
    const coords = points.map((v, i) => [
      (p + i * step).toFixed(1),
      (h - p - ((v - minVal) / (maxVal - minVal)) * (h - p * 2)).toFixed(1)
    ]);
    const pathD = `M ${coords.map(pt => pt.join(',')).join(' L ')}`;
    const areaD = `${pathD} L ${coords[coords.length - 1][0]},${h - p} L ${coords[0][0]},${h - p} Z`;
    return `
      <svg class="stardew-svg-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" shape-rendering="geometricPrecision">
        <path d="${areaD}" fill="${fillColor}" />
        <path d="${pathD}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>`;
  }

  async function openDetail(nodeId) {
    if (!window.cfsmAdapter) return;
    const request = ++detailRequest;
    const detail = await window.cfsmAdapter.getServerDetail(nodeId);
    if (!detail || request !== detailRequest) return;

    portraitEl.innerHTML = buildingMarkup(detail);
    nameEl.textContent = detail.id;
    subEl.innerHTML = `
      <span class="status ${detail.online ? '' : 'offline'}">${nodeText(detail.online ? '在线' : '离线')}</span>
      ${detail.ip ? `<span class="ip-tag">${escapeText(detail.ip)}</span>` : ''}
      <span>${nodeText('运行时长')} ${uptimeText(detail)}</span>
      ${detail.demo ? '<span>'+nodeText('示例数据')+'</span>' : '<span>'+reportText(detail.lastUpdated)+'</span>'}
      ${detail.price && detail.price !== '—' ? '<span>'+nodeText('计费')+' '+escapeText(detail.price)+'</span>' : ''}
      ${detail.expireDate && detail.expireDate !== '—' ? '<span>'+nodeText('到期')+' '+escapeText(detail.expireDate)+'</span>' : ''}
    `;

    const cap = (used,total) => used != null && total > 0 ? (used/1024).toFixed(1)+' / '+(total/1024).toFixed(1)+' GB' : '—';
    const io = detail.diskIo;
    const diskIoText = io && Number.isFinite(io.read_bps) && Number.isFinite(io.write_bps)
      ? nodeText('读')+' '+(io.read_bps/1048576).toFixed(1)+' MB/s · '+nodeText('写')+' '+(io.write_bps/1048576).toFixed(1)+' MB/s' : nodeText('未上报');
    const cpuPoints = (detail.history || []).map(h => h.cpu).filter(Number.isFinite);
    const ramPoints = (detail.history || []).map(h => h.ram).filter(Number.isFinite);
    const pingPills = detail.ping.map(([label,val]) => {
      const loss = detail.routeData?.[label]?.loss;
      return '<div class="stardew-ping-pill"><small>'+escapeText(label)+'</small><strong>'+
        (!detail.online ? '—' : val === null ? nodeText('超时') : escapeText(val)+' ms')+'</strong>'+
        (Number.isFinite(loss) ? '<small>'+nodeText('丢包')+' '+loss+'%</small>' : '')+'</div>';
    }).join('') || nodeText('线路未上报');

    let geoHtml = '';
    if (Core && detail.location) {
      try {
        const sceneState = Core.resolveScene(detail.location, new Date());
        const formatSun = (d) => d ? new Intl.DateTimeFormat(window.farmLocale || 'zh-CN', {
          timeZone: sceneState.timeZone,
          hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
        }).format(d) : '—';
        const localTimeStr = sceneState.now ? formatSun(sceneState.now) : '—';
        const sunStr = (sceneState.sunrise && sceneState.sunset)
          ? `🌅 ${formatSun(sceneState.sunrise)} · 🌇 ${formatSun(sceneState.sunset)}`
          : (sceneState.polar === 'polar-day' ? nodeText('极昼') : sceneState.polar === 'polar-night' ? nodeText('极夜') : '—');
        const coordsStr = sceneState.coordinates
          ? `${sceneState.coordinates.latitude > 0 ? sceneState.coordinates.latitude.toFixed(2) + '°N' : Math.abs(sceneState.coordinates.latitude).toFixed(2) + '°S'}, ${sceneState.coordinates.longitude > 0 ? sceneState.coordinates.longitude.toFixed(2) + '°E' : Math.abs(sceneState.coordinates.longitude).toFixed(2) + '°W'}`
          : nodeText('未配置');
        const phaseCn = sceneState.phase === 'night' ? '夜间' : '白天';
        const seasonCn = seasonNames[sceneState.season === 'autumn' ? 'fall' : sceneState.season] || '春';

        geoHtml = `
          <section class="stardew-box">
            <div class="stardew-box-title">${nodeText('机房天时与地理信息')}</div>
            <div class="stardew-grid-2">
              <div class="stardew-prop-row"><span>${nodeText('所在地区')}</span><strong>${escapeText(nodeText(detail.city || '地区未配置'))}${sceneState.timeZoneFallback ? '' : ' ('+escapeText(sceneState.timeZone)+')'}</strong></div>
              <div class="stardew-prop-row"><span>${nodeText('当地时间')}</span><strong>${sceneState.timeZoneFallback ? nodeText('时区未配置') : [localTimeStr, nodeText(seasonCn+'季'), sceneState.coordinates ? nodeText(phaseCn) : ''].filter(Boolean).join(' · ')}</strong></div>
              <div class="stardew-prop-row"><span>${nodeText('地理坐标')}</span><strong>${coordsStr}</strong></div>
              <div class="stardew-prop-row"><span>${nodeText('日出 / 日落')}</span><strong>${sceneState.timeZoneFallback ? '—' : sunStr}</strong></div>
            </div>
            <div style="margin-top:10px;text-align:right;">
              <button type="button" class="tool-button" id="teleport-scene-btn" style="cursor:pointer;">${nodeText('传送至节点农场')}</button>
            </div>
          </section>`;
      } catch (e) {}
    }

    bodyEl.innerHTML = `
      ${geoHtml}
      <section class="stardew-box">
        <div class="stardew-box-title">${nodeText('硬件配置与系统规格')}</div>
        <div class="stardew-grid-2">
          <div class="stardew-prop-row"><span>${nodeText('CPU 型号')}</span><strong title="${escapeText(detail.cpuModel)}">${escapeText(detail.cpuModel)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('核心架构')}</span><strong>${escapeText(nodeText('{n} 核',{n:detail.cores}))} · ${escapeText(detail.arch)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('操作系统')}</span><strong title="${escapeText(detail.os)}">${escapeText(detail.os)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('内核版本')}</span><strong title="${escapeText(detail.kernel)}">${escapeText(detail.kernel)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('连接统计')}</span><strong>TCP ${escapeText(detail.tcpConn)} · UDP ${escapeText(detail.udpConn)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('负载（1 / 5 / 15 分钟）')}</span><strong>${escapeText(detail.load?.join(" / "))}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('系统进程')}</span><strong>${escapeText(detail.processes)} ${nodeText('个进程')}</strong></div>
        </div>
      </section>

      <section class="stardew-box">
        <div class="stardew-box-title">${nodeText('内存与存储吞吐')}</div>
        <div class="stardew-grid-2">
          <div class="stardew-prop-row"><span>${nodeText('物理内存 (RAM)')}</span><strong>${cap(detail.ramUsedMB,detail.ramTotalMB)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('虚拟内存 (SWAP)')}</span><strong>${cap(detail.swapUsedMB,detail.swapTotalMB)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('主磁盘容量')}</span><strong>${cap(detail.diskUsedMB,detail.diskTotalMB)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('磁盘 IO 性能')}</span><strong>${diskIoText}</strong></div>
        </div>
      </section>

      <section class="stardew-box">
        <div class="stardew-box-title">${nodeText('实时网络与月度流量')}</div>
        <div class="stardew-grid-2">
          <div class="stardew-prop-row"><span>${nodeText('当前速率')}</span><strong>↓ ${escapeText(detail.netInSpeed)} · ↑ ${escapeText(detail.netOutSpeed)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('月度累计')}</span><strong>${nodeText('下载')} ${escapeText(detail.netRxTotal)} · ${nodeText('上传')} ${escapeText(detail.netTxTotal)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('月度配额')}</span><strong>${escapeText(detail.trafficLimit)}</strong></div>
          <div class="stardew-prop-row"><span>${nodeText('节点编号')}</span><strong>${escapeText(detail.rawId)}</strong></div>
        </div>
      </section>

      <section class="stardew-box">
        <div class="stardew-box-title">${nodeText('线路延迟与连通性')}</div>
        <div class="stardew-ping-row">${pingPills}</div>
      </section>

      ${cpuPoints.length || ramPoints.length ? `
      <section class="stardew-box">
        <div class="stardew-box-title">${nodeText('24 小时资源趋势波动')}</div>
        <div class="stardew-sparkline-row">
          <div class="stardew-sparkline-card">
            <div class="stardew-sparkline-head"><span>${nodeText('CPU 占用率 (24h)')}</span><strong>${nodeText('当前')}: ${cpuPoints.length ? cpuPoints.at(-1).toFixed(1)+'%' : '—'}</strong></div>
            ${renderSparklineSVG(cpuPoints, '#527340', 'rgba(82,115,64,0.18)')}
          </div>
          <div class="stardew-sparkline-card">
            <div class="stardew-sparkline-head"><span>${nodeText('内存 占用率 (24h)')}</span><strong>${nodeText('当前')}: ${ramPoints.length ? ramPoints.at(-1).toFixed(1)+'%' : '—'}</strong></div>
            ${renderSparklineSVG(ramPoints, '#e0a22c', 'rgba(224,162,44,0.18)')}
          </div>
        </div>
      </section>` : ''}
    `;

    const teleportBtn = bodyEl.querySelector('#teleport-scene-btn');
    if (teleportBtn) {
      teleportBtn.addEventListener('click', () => {
        if (typeof window.selectServerScene === 'function') {
          window.selectServerScene(detail.id);
        }
        closeModal();
      });
    }

    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
  }

  function handleHash() {
    const match = location.hash.match(/^#\/server\/(.+)$/);
    if (match) {
      openDetail(decodeURIComponent(match[1]));
    } else {
      closeModal();
    }
  }

  window.addEventListener('hashchange', handleHash);
  if (location.hash && location.hash.startsWith('#/server/')) {
    if (window.cfsmAdapter?.liveOnly && !window.cfsmAdapter.isLive) {
      const unsubscribe = window.cfsmAdapter.subscribe(state => {
        if (!state.isLive) return;
        unsubscribe();
        handleHash();
      });
    } else handleHash();
  }
})();
