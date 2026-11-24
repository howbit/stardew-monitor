(() => {
  'use strict';

  const host = document.querySelector('.hero-scene');
  if (!host || !window.estateCamera || document.body.dataset.farmArt !== 'native') return;
  const root = new URL('/assets/stardew-3640241ac13d/landscape/native-spring-estate/', document.currentScript.src);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const width = 1728, height = 464;
  const world = document.createElement('div');
  world.className = 'estate-world';
  world.setAttribute('role', 'group');
  world.setAttribute('aria-label', nodeText('{scene}互动农场',{scene:nodeText('春日')}));
  world.hidden = true;
  const terrainCanvas = document.createElement('canvas');
  terrainCanvas.setAttribute('aria-hidden', 'true');
  const terrainCtx = terrainCanvas.getContext('2d', {alpha: false});
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  const ctx = canvas.getContext('2d');
  if (!ctx || !terrainCtx) return;
  const hits = document.createElement('div');
  hits.className = 'estate-hit-layer';
  const status = document.createElement('span');
  status.className = 'estate-status';
  status.setAttribute('role', 'status');
  world.append(terrainCanvas, canvas, hits, status);
  host.append(world);

  let data, atlas, groundImage, pondLine, pondButton, visible = true;
  let actors = [], particles = [], now = 0, nextBubble = 0.9, lastFrame, raf = 0;
  let selected = null, bounds;
  const bundles = new Map();
  const dayNames = {spring: '春日', summer: '夏日', fall: '秋日', winter: '冬日'};
  function seasonKey() {
    const season = document.body.dataset.season;
    return document.body.dataset.farmArt === 'native' && !document.body.classList.contains('night') &&
      Object.hasOwn(dayNames, season) ? season : null;
  }

  function fit() {
    const frame = window.estateCamera.frame;
    if (!frame || !groundImage || world.hidden) return;
    const {w: screenW, h: screenH, zoom, px, py, cssX, cssY} = frame;
    bounds = {left: -px/zoom, right: (screenW-px)/zoom, top: -py/zoom, bottom: (screenH-py)/zoom};
    for (const layer of [terrainCanvas, canvas]) {
      if (layer.width !== screenW) layer.width = screenW;
      if (layer.height !== screenH) layer.height = screenH;
    }
    // Resizing a canvas resets both its sampling mode and its transform.
    for (const layer of [terrainCtx, ctx]) {
      layer.imageSmoothingEnabled = false;
      layer.setTransform(zoom, 0, 0, zoom, px, py);
    }
    terrainCtx.drawImage(groundImage, -data.origin[0], -data.origin[1]);
    hits.style.transform = 'matrix(' + [zoom*cssX, 0, 0, zoom*cssY, px*cssX, py*cssY].join(',') + ')';
    if (data.pond) {
      const pond = data.pond;
      const [, , pondW, pondH] = data.boxes[pond.frames[0]];
      pondButton.hidden = pond.x + pondW <= bounds.left || pond.x >= bounds.right ||
        pond.y + pondH <= bounds.top || pond.y >= bounds.bottom;
    }
    render();
  }
  host.addEventListener('estatecamera', fit);

  function screenPoint(event) {
    const box = hits.getBoundingClientRect();
    return {x: (event.clientX - box.left) * width / box.width,
      y: (event.clientY - box.top) * height / box.height};
  }

  function inWater(x, y) {
    const pond = data.pond;
    const span = pond.rows[Math.floor(y - pond.y)];
    return span?.length === 2 && x >= pond.x + span[0] && x <= pond.x + span[1];
  }

  function shoreOutline(pond) {
    const left = [], right = [];
    pond.rows.forEach(([a, b], row) => {
      if (a === undefined) return;
      left.push([a, row]);
      right.push([b + 1, row]);
    });
    return left.concat(right.reverse());
  }

  function button(label, className) {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = className;
    element.setAttribute('aria-label', label);
    hits.append(element);
    return element;
  }

  function addPond() {
    const pond = data.pond;
    const [, , w, h] = data.boxes[pond.frames[0]];
    const outline = shoreOutline(pond);
    pondLine = new Path2D();
    outline.forEach(([x, y], index) => {
      if (index) pondLine.lineTo(pond.x + x, pond.y + y);
      else pondLine.moveTo(pond.x + x, pond.y + y);
    });
    pondLine.closePath();
    const surface = pondButton = button(nodeText('轻点池水，泛起涟漪'), 'estate-pond');
    Object.assign(surface.style, {left: pond.x + 'px', top: pond.y + 'px',
      width: w + 'px', height: h + 'px',
      clipPath: 'polygon(' + outline.map(([x, y]) => x + 'px ' + y + 'px').join(',') + ')'});
    surface.addEventListener('click', event => {
      if (world.hidden) return;
      const {x, y} = event.detail ? screenPoint(event) : {x: 1464, y: 337};
      if (inWater(x, y)) {
        emit('wake', x, y, 38, 1.05, 0.8);
        emit('bubble', x, y - 2, 24, 0.75, 0.95);
        status.textContent = nodeText('池水泛起一圈涟漪。');
        run();
      }
    });
  }

  function makeAnimal([kind, name, speed, route], index) {
    const size = data.boxes[data.sheets[kind]][2] / (kind === 'horse' ? 7 : 4);
    const hit = button(nodeText('抚摸{animal}',{animal:nodeText(name)}), 'estate-animal');
    const [x, y] = route[0];
    const a = {kind, name, speed, route, size, hit, x, y, target: 1, heading: ['cat','dog','horse'].includes(kind) ? 1 : 0,
      wait: index === 10 ? 0.2 : (index % 4) * 0.27, walking: false, stride: index * 0.28,
      wet: kind === 'Duck' && inWater(x, y), wakeAt: 0.7 + index * 0.09, lovedAt: -10};
    hit.style.width = size + 'px';
    hit.style.height = (size === 16 ? 19 : 28) + 'px';
    function pet() {
      if (!hit.isConnected || world.hidden || now - a.lovedAt < 2) return;
      a.lovedAt = now;
      a.wait = 1.4;
      a.walking = false;
      status.textContent = nodeText('{animal}感受到了你的抚摸。',{animal:nodeText(name)});
      run();
    }
    let hover;
    hit.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') hover = setTimeout(pet, 230);
    });
    hit.addEventListener('pointerleave', () => clearTimeout(hover));
    hit.addEventListener('click', pet);
    return a;
  }

  function emit(type, x, y, size, life, opacity) {
    if (particles.length >= 32) particles.shift();
    particles.push({type, x, y, size, life, opacity, birth: now});
  }

  function walk(a, dt) {
    a.walking = false;
    if (a.wait > 0) {
      a.wait -= dt;
      return;
    }
    const [tx, ty] = a.route[a.target];
    const dx = tx - a.x, dy = ty - a.y, distance = Math.hypot(dx, dy);
    const step = Math.min(distance, dt * a.speed * (a.wet ? 0.8 : 1));
    if (distance) {
      a.x += dx * step / distance;
      a.y += dy * step / distance;
      a.heading = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2);
      a.stride += step / (a.size === 16 ? 2.7 : 3.3);
      a.walking = true;
    }
    if (a.kind === 'Duck') {
      const wet = inWater(a.x, a.y);
      if (wet !== a.wet) {
        emit('splash', a.x, a.y, 24, 0.55, 0.85);
        emit('wake', a.x, a.y, 34, 1.1, 0.7);
      }
      a.wet = wet;
      if (wet && now >= a.wakeAt && distance) {
        emit('wake', a.x - dx / distance * 5, a.y - dy / distance * 5 - 2, 22, 1.2, 0.48);
        a.wakeAt = now + 0.82;
      }
    }
    if (step === distance) {
      a.target = (a.target + 1) % a.route.length;
      a.wait = a.wet ? 0.15 + Math.random() * 0.75 : 0.45 + Math.random() * 1.9;
    }
  }

  function blit(id, x, y, w, h) {
    const [sx, sy, sw, sh] = data.boxes[id];
    ctx.drawImage(atlas, sx, sy, sw, sh, Math.round(x), Math.round(y), w ?? sw, h ?? sh);
  }

  function animalFrame(a) {
    let row = a.heading;
    let frame = a.walking ? Math.floor(a.stride) % 4 : 0;
    let flip = false;
    const pet = a.kind === 'cat' || a.kind === 'dog';
    if (a.size === 32 && !pet && row === 3) { row = 1; flip = true; }
    if (a.kind === 'horse') {
      // The mount has six stride frames after its standing pose in each row.
      frame = a.walking ? 1 + Math.floor(a.stride) % 6 : 0;
    } else if (!a.walking && pet && (a.wait > 0.45 || now - a.lovedAt < 1.4)) {
      row = 4;
      frame = 3;
    } else if (!a.walking && !pet && !a.wet && a.wait > 0.4) {
      row = 4;
      frame = Math.floor(now * 2) % 4;
    }
    if (a.wet) row += 7;
    return {row, frame, flip};
  }

  function drawAnimal(a) {
    const x = Math.round(a.x), foot = Math.round(a.y);
    const [sx, sy] = data.boxes[data.sheets[a.kind]];
    const {row, frame, flip} = animalFrame(a);
    const n = a.size;
    if (a.wet) {
      const [wx, wy, sw, sh] = data.boxes[data.effects.swim];
      const wf = Math.floor(now * 4) % (sw / sh);
      ctx.drawImage(atlas, wx + wf * sh, wy, sh, sh, x - 8, foot - 9, 16, 12);
    }
    ctx.save();
    ctx.translate(x, foot);
    if (flip) ctx.scale(-1, 1);
    ctx.drawImage(atlas, sx + frame * n, sy + row * n, n, n, -n / 2, -n + (a.wet ? 2 : 0), n, n);
    ctx.restore();
    a.hit.hidden = x + n/2 <= bounds.left || x - n/2 >= bounds.right || foot <= bounds.top || foot - n >= bounds.bottom;
    const position = 'translate(' + (x - n / 2) + 'px,' + (foot - (n === 16 ? 18 : 27)) + 'px)';
    if (a.hit.style.transform !== position) a.hit.style.transform = position;
  }

  function advance(dt) {
    now += dt;
    if (reduced.matches) return;
    actors.forEach(a => walk(a, dt));
    if (data.pond && now >= nextBubble) {
      const x = 1407 + Math.random() * 82, y = 310 + Math.random() * 41;
      emit('bubble', x, y, 29, 1.1, 0.9);
      emit('wake', x, y + 1, 22, 1.5, 0.4);
      nextBubble = now + 1.8 + Math.random() * 2.3;
    }
  }

  function drawWater() {
    const pond = data.pond;
    const phase = reduced.matches ? 0 : Math.floor(now * 2.3) % pond.frames.length;
    blit(pond.frames[phase], pond.x, pond.y);
    particles = particles.filter(p => now - p.birth < p.life);
    ctx.save();
    ctx.clip(pondLine);
    for (const p of particles) {
      const ratio = (now - p.birth) / p.life;
      const frames = data.effects[p.type];
      ctx.globalAlpha = p.opacity * (1 - 0.5 * ratio);
      const h = p.type === 'splash' ? p.size : Math.round(p.size * 0.66);
      blit(frames[Math.floor(ratio * frames.length)], p.x - p.size / 2, p.y - h / 2, p.size, h);
    }
    ctx.restore();
  }

  function render() {
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    if (data.pond) drawWater();
    // Merge two foot-sorted lists so grass covers hooves and never covers heads
    // of animals standing in front of it. The terrain image stays cached below.
    const ordered = actors.slice().sort((a, b) => a.y - b.y);
    let i = 0;
    for (const [x, foot, id] of data.plants) {
      while (i < ordered.length && ordered[i].y < foot) drawAnimal(ordered[i++]);
      const [, , w, h] = data.boxes[id];
      blit(id, x - Math.floor(w / 2), foot - h);
    }
    while (i < ordered.length) drawAnimal(ordered[i++]);
  }

  function tick(time) {
    if (lastFrame === undefined || time - lastFrame >= 48) {
      advance(lastFrame === undefined ? 0 : Math.min((time - lastFrame) / 1000, 0.12));
      render();
      lastFrame = time;
    }
    // An explicit gesture can still show a short response in reduced-motion mode.
    const responding = particles.length || actors.some(a => now - a.lovedAt < 2.05);
    if (reduced.matches && !responding) { raf = 0; lastFrame = undefined; }
    else raf = requestAnimationFrame(tick);
  }

  function run() {
    if (!world.hidden && visible && !document.hidden && !raf) raf = requestAnimationFrame(tick);
  }
  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
    lastFrame = undefined;
  }
  async function loadImage(name, folder) {
    const img = new Image();
    img.src = new URL(name, folder).href;
    await img.decode();
    return img;
  }

  function load(season) {
    if (!bundles.has(season)) {
      const folder = season === 'spring' ? root : new URL(season + '/', root);
      const bundle = Promise.all([
        fetch(new URL('scene.json', folder)).then(response => {
          if (!response.ok) throw new Error('Farm scene: ' + response.status);
          return response.json();
        }),
        loadImage('sprites.png', folder), loadImage('ground.png', folder)
      ]).catch(error => { bundles.delete(season); throw error; });
      bundles.set(season, bundle);
    }
    return bundles.get(season);
  }

  async function sync() {
    const key = seasonKey();
    if (key !== selected) {
      selected = key;
      world.hidden = true;
      stop();
      if (!key) return;
      try {
        const bundle = await load(key);
        if (selected !== key || key !== seasonKey() || !world.hidden) return;
        [data, atlas, groundImage] = bundle;
        hits.replaceChildren();
        status.textContent = '';
        particles = [];
        now = 0;
        nextBubble = 0.9;
        if (data.pond) addPond();
        actors = data.animals.map(makeAnimal);
        world.setAttribute('aria-label', nodeText('{scene}互动农场',{scene:nodeText(dayNames[key])}));
        world.hidden = false;
        fit();
      } catch (error) {
        if (selected === key) selected = null;
        console.warn('农场暂时显示静态画面。', error);
        return;
      }
    }
    if (visible && !document.hidden) run(); else stop();
  }
  new MutationObserver(sync).observe(document.body, {attributes: true,
    attributeFilter: ['class', 'data-season', 'data-farm-art']});
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) run(); else stop();
  }).observe(host);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  sync();
})();
