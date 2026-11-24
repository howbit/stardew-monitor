(() => {
  'use strict';
  const query = new URLSearchParams(location.search);
  if (query.get('art') !== 'postcards') return;

  const hero = document.querySelector('.farm-hero');
  const scene = hero.querySelector('.hero-scene');
  const poster = scene.querySelector('.hero-art');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const assetRoot = '../../assets/landscape/postcards-v1/summer-night/motion/';
  const water = new Image();
  const sheet = new Image();
  const canvas = document.createElement('canvas');
  const toggle = document.createElement('button');
  water.className = 'bay-water';
  water.alt = '';
  water.width = 976;
  water.height = 310;
  water.hidden = true;
  canvas.className = 'bay-swimmers';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.width = 712;
  canvas.height = 155;
  canvas.hidden = true;
  toggle.type = 'button';
  toggle.className = 'bay-motion-toggle';
  toggle.hidden = true;
  scene.append(water, canvas);
  hero.append(toggle);

  // x/y/w/h in the authored sheet, followed by the registration point on the bell.
  const poses = [
    [34, 79, 108, 86, 68, 25],
    [208, 77, 120, 91, 72, 27],
    [383, 73, 130, 98, 78, 31],
    [568, 75, 123, 95, 71, 29]
  ];
  const pulse = [0, 1, 2, 2, 3, 1];
  const swimmers = [
    { start: .12, speed: 1.00, scale: 1.02, offset: 0 },
    { start: .32, speed: .93, scale: .89, offset: -9 },
    { start: .51, speed: 1.05, scale: .95, offset: 2 },
    { start: .67, speed: .99, scale: .86, offset: -4 },
    { start: .77, speed: .96, scale: .91, offset: 3 },
    { start: .86, speed: 1.06, scale: .97, offset: 0 },
    { start: .94, speed: .92, scale: .82, offset: 1 }
  ];
  // These ten strips sample the actual warm reflection below the outer piling.
  const glints = [[682,605,58,3],[677,615,57,3],[684,628,30,3],[674,635,72,4],
    [686,648,44,4],[678,656,66,3],[672,668,78,4],[661,683,56,3],
    [666,692,71,4],[684,717,50,4]];
  let context;
  let assets = 'idle';
  let enabled = query.get('motion') !== 'still';
  let inView = false;
  let timer = null;
  let elapsed = 0;
  let previous = null;

  function paint(time) {
    context.clearRect(624, 414, 1424, 310);
    if (poster.complete && poster.naturalWidth === 2172) {
      for (const [x,y,width,height] of glints) {
        const wave = time * 1.9 + y * .31;
        const cut = Math.round(width * (.47 + Math.sin(wave * .53) * .16));
        const slide = Math.round(3 * Math.sin(wave));
        context.drawImage(poster, x + slide,y,cut,height, x,y,cut,height);
        context.drawImage(poster, x + cut - slide,y,width - cut,height, x + cut,y,width - cut,height);
      }
    }
    for (const jelly of swimmers) {
      const depth = (jelly.start + time / 142) % 1;
      const near = 1 - depth;
      const phase = time * 2.4 * jelly.speed + jelly.start * 19;
      const [sx,sy,sw,sh,anchorX,anchorY] = poses[pulse[Math.floor(phase) % pulse.length]];
      const size = (5 + 139 * near ** 1.85) * jelly.scale / 112;
      const x = 1085 + 940 * depth + 3.5 * near * Math.sin(phase * .48);
      const y = 426 + 251 * near ** 1.65 + jelly.offset + 3.4 * near * Math.sin(phase * .66);
      // A jelly passes into or out of the moonlit water rather than popping at the loop seam.
      const fade = Math.min(1, depth / .055, near / .055);
      context.globalAlpha = fade * (.69 + .27 * near);
      context.drawImage(sheet, sx,sy,sw,sh, Math.round(x - anchorX * size),
        Math.round(y - anchorY * size), Math.max(2, Math.round(sw * size)), Math.max(2, Math.round(sh * size)));
    }
    context.globalAlpha = 1;
  }

  function tick() {
    const now = performance.now();
    if (previous !== null) elapsed += Math.min(now - previous, 250) / 1000;
    previous = now;
    paint(elapsed);
    water.hidden = false;
    canvas.hidden = false;
    timer = setTimeout(tick, 1000 / 16);
  }

  function stop() {
    clearTimeout(timer);
    timer = null;
    previous = null;
  }

  function load() {
    assets = 'loading';
    water.src = assetRoot + 'open-water.webp';
    sheet.src = assetRoot + 'moon-jelly.webp';
    Promise.all([water.decode(), sheet.decode()]).then(() => {
      context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas 2D unavailable');
      context.setTransform(.5, 0, 0, .5, -312, -207);
      context.imageSmoothingEnabled = false;
      assets = 'ready';
    }).catch(() => { assets = 'failed'; }).finally(sync);
  }

  function sync() {
    const summer = document.body.dataset.postcard === 'summer-night';
    const available = summer && !reduced.matches;
    const active = available && enabled && assets !== 'failed';
    toggle.hidden = !available;
    const label = assets === 'failed' ? '重试动景' : enabled ? '查看静帧' : '开启动景';
    toggle.textContent = label;
    toggle.title = label;

    if (!active || !inView || document.hidden) {
      stop();
      if (!active) water.hidden = canvas.hidden = true;
      if (!summer) elapsed = 0;
      return;
    }
    if (assets === 'idle') load();
    if (assets === 'ready' && timer === null) tick();
  }

  toggle.addEventListener('click', () => {
    if (assets === 'failed') {
      assets = 'idle';
      enabled = true;
    } else {
      enabled = !enabled;
    }
    sync();
  });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting && entry.intersectionRatio >= .12;
    sync();
  }, { threshold: [0, .12] }).observe(hero);
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['data-postcard'] });
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  addEventListener('pagehide', stop);
  addEventListener('pageshow', sync);
  sync();
})();
