(function () {
  'use strict';
  const t = window.farmText || (key => key);
  const control = document.querySelector('.scene-music');
  const toggle = document.querySelector('#music-toggle');
  const current = document.querySelector('#music-current');
  const statusLabel = document.querySelector('#music-status');
  if (!control || !window.SceneMusicPlayer) return;
  const tracks = Object.fromEntries([
    ['spring-day', '春日', "Spring (It's A Big World Outside)"],
    ['spring-night', '春夜', "Starwatcher (Maru's Theme)"],
    ['summer-day', '夏日', "Summer (Nature's Crescendo)"],
    ['summer-night', '夏夜', 'Dance Of The Moonlight Jellies'],
    ['fall-day', '秋日', 'Fall (The Smell Of Mushroom)'],
    ['fall-night', '秋夜', "Fall (Raven's Descent)"],
    ['winter-day', '冬日', 'Winter (The Wind Can Be Still)'],
    ['winter-night', '冬夜', 'Night Market']
  ].map(([id, scene, title]) => [id, { scene, title, file: window.farmAsset?.(`../../assets/music/${id}.ogg`) ?? `../../assets/music/${id}.ogg` }]));
  const storageKey = 'cfsm_scene_music_v1';
  const positionKey = 'cfsm_scene_music_position_v1';
  let saved = {};
  let resumePoint;
  try { saved = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch {}
  try { resumePoint = JSON.parse(sessionStorage.getItem(positionKey)); } catch {}
  let manuallyPaused = saved.enabled === false;
  let homeVisible = true;
  // A fixed level prevents a hidden legacy volume preference from leaving music muted.
  const initialVolume = .4;
  function setPreference(paused) {
    manuallyPaused = paused;
    try { localStorage.setItem(storageKey, JSON.stringify({ enabled: !paused })); } catch {}
    if (paused) player.disable();
    else player.enable();
  }
  const player = new window.SceneMusicPlayer({
    tracks,
    resumePoint,
    volume: initialVolume,
    fade: 3,
    createContext: () => new (window.AudioContext || window.webkitAudioContext)(),
    fetchAudio: async url => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Audio: ${response.status}`);
      return response.arrayBuffer();
    },
    onState({ status, desired, playing }) {
      // During loading the outgoing track is still audible; label the actual playing music.
      const track = tracks[status === 'loading' && playing ? playing : desired];
      const suffix = { off: manuallyPaused ? '已暂停' : '配乐待播放', blocked: '轻点页面继续播放', loading: playing ? t('正在切换至{scene}',{scene:t(tracks[desired].scene)}) : '正在载入', error: '加载失败，点击重试', playing: '正在播放' }[status];
      current.textContent = track ? track.title : t('随季节与昼夜切换');
      current.title = current.textContent;
      if (statusLabel) statusLabel.textContent = `${t(track?.scene || '场景')} · ${t(suffix)}`;
      const actionLabel = { off: '播放配乐', blocked: '继续播放', loading: '取消播放', error: '重试配乐', playing: '暂停配乐' }[status];
      toggle.setAttribute('aria-label', t(actionLabel));
      toggle.title = t(actionLabel);
      toggle.setAttribute('aria-pressed', String(status === 'playing' || status === 'loading'));
      control.dataset.state = status;
      control.dataset.track = desired || '';
      control.dataset.playing = playing || '';
    }
  });
  toggle.addEventListener('click', () => {
    setPreference(player.enabled && ['playing', 'loading'].includes(player.status));
  });
  function syncScene() {
    const season = document.body.dataset.season === 'autumn' ? 'fall' : document.body.dataset.season;
    player.setScene(`${season || 'spring'}-${document.body.classList.contains('night') ? 'night' : 'day'}`);
  }
  // Follow the scene that is actually painted (manual, visitor or server location).
  // A single observer batch combines season + phase; identical states never restart music.
  new MutationObserver(syncScene).observe(document.body, { attributes: true, attributeFilter: ['data-season', 'class'] });
  syncScene();
  // Resume a browser-blocked first visit in the first trusted gesture.
  function unlock(event) {
    if (event.isTrusted && player.enabled && player.status === 'blocked' && !toggle.contains(event.target)) player.enable();
  }
  document.addEventListener('pointerup', unlock, true);
  document.addEventListener('click', unlock, true);
  document.addEventListener('keydown', unlock, true);
  function savePosition() {
    const point = player.playbackPoint();
    if (point) {
      try { sessionStorage.setItem(positionKey, JSON.stringify(point)); } catch {}
    }
  }
  window.addEventListener('pagehide', savePosition);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) savePosition();
  });
  function restorePause() {
    try {
      if (JSON.parse(localStorage.getItem(storageKey))?.enabled === false && !manuallyPaused) {
        manuallyPaused = true;
        player.disable();
      }
    } catch {}
  }
  window.addEventListener('pageshow', restorePause);
  window.addEventListener('storage', event => { if (event.key === storageKey) restorePause(); });
  window.addEventListener('farm-home-visibility', event => {
    homeVisible = event.detail;
    if (!homeVisible) {
      savePosition();
      player.disable();
    } else if (!manuallyPaused) player.enable();
  });
  if (!manuallyPaused && homeVisible) player.enable();
})();
