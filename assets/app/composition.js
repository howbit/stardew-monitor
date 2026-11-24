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
  spring: { day: '/assets/landscape/spring-layered-v6/hero-day.png', night: '/assets/landscape/spring-layered-v6/hero-night.png' },
  summer: { day: '/assets/landscape/summer-matched-v1/hero-day.png', night: '/assets/landscape/summer-matched-v1/hero-night.png' },
  fall: { day: '/assets/landscape/fall-matched-v1/hero-day.png', night: '/assets/landscape/fall-matched-v1/hero-night.png' },
  winter: { day: '/assets/landscape/winter-matched-v1/hero-day.png', night: '/assets/landscape/winter-matched-v1/hero-night.png' }
};

const Core = typeof window !== 'undefined' ? window.StardewScene : null;
let activeServerId = null;
window.estateSelectedNode = () => activeServerId;

function paintLandscape(seasonKey, isNight) {
  const key = seasonKey + (isNight ? '-night' : '-day');
  const postcard = previewPostcards && postcardDescriptions[key];
  const root = postcard ? '/assets/landscape/postcards-v1/' + key : '';
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
      src: farmAsset(`/assets/landscape/native-spring-estate/${season}-${isNight ? 'night' : 'day'}.png`),
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
const scenePlace = () => activeServerId === null ? visitor : window.cfsmAdapter.getServerLocation(activeServerId);
window.farmDetailScene = () => ({place:scenePlace(), phaseOverride, server:activeServerId, season:seasonSelect.value});
window.restoreDetailScene = scene => {
  activeServerId = scene.server;
  seasonSelect.value = scene.season;
  phaseOverride = scene.phaseOverride;
  syncSceneCopy();
};
let currentTime;
function syncSceneCopy() {
  for (const el of document.querySelectorAll('[data-report]')) el.textContent = reportText(Number(el.dataset.report));
  const place = scenePlace();
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
    `${nodeText("服务器")} · ${nodeText(place.city)} ${window.cfsmAdapter.getNodes().find(node => (node.rawId ?? node.id) === activeServerId)?.id || ''}`;
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
      const src = farmAsset(`/assets/landscape/native-spring-estate/footer/${validSeason}-${isNight ? 'night' : 'day'}-${side}.png`);
      if (img.getAttribute('src') !== src) img.src = src;
      continue;
    }
    if (img && postcardRoot) {
      img.src = postcardRoot + '/footer-' + side + '.png';
      continue;
    }
    if (img) img.src = validSeason === 'spring'
      ? (side === 'right'
        ? '/assets/landscape/spring-unified-footer-v2/footer-right.png'
        : '/assets/landscape/spring-layered-v6/footer-left.png')
      : `/assets/landscape/${validSeason}-matched-v1/footer-${side}.png`;
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
  if (event.key === 'Escape' && activeServerId !== null) {
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
