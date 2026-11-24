(function () {
  'use strict';
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
  ].map(([id, scene, title]) => [id, { scene, title, file: `/assets/stardew-bb8ad0bbdf18/music/${id}.ogg` }]));
  const storageKey = 'cfsm_scene_music_v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch {}
  // A fixed level prevents a hidden legacy volume preference from leaving music muted.
  const initialVolume = .4;
  function remember() {
    try { localStorage.setItem(storageKey, JSON.stringify({ enabled: player.enabled })); } catch {}
  }
  const player = new window.SceneMusicPlayer({
    tracks,
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
      const suffix = { off: '配乐待播放', blocked: '点击继续播放', loading: playing ? `正在切换至${tracks[desired].scene}` : '正在载入', error: '加载失败，点击重试', playing: '正在播放' }[status];
      current.textContent = track ? track.title : '随季节与昼夜切换';
      current.title = current.textContent;
      if (statusLabel) statusLabel.textContent = `${track?.scene || '场景'} · ${suffix}`;
      const actionLabel = { off: '播放配乐', blocked: '继续播放', loading: '取消播放', error: '重试配乐', playing: '暂停配乐' }[status];
      toggle.setAttribute('aria-label', actionLabel);
      toggle.title = actionLabel;
      toggle.setAttribute('aria-pressed', String(status === 'playing' || status === 'loading'));
      control.dataset.state = status;
      control.dataset.track = desired || '';
      control.dataset.playing = playing || '';
    }
  });
  toggle.addEventListener('click', () => {
    if (player.enabled && ['playing', 'loading'].includes(player.status)) player.disable();
    else player.enable();
    remember();
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
  document.addEventListener('click', unlock, true);
  document.addEventListener('keydown', unlock, true);
  if (saved.enabled !== false) player.enable();
})();
