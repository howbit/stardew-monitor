(() => {
  'use strict';
  const host = document.querySelector('.hero-scene');
  if (!host || document.body.dataset.farmArt !== 'native') return;
  // The reference crop spans the farmhouse, well, both obelisks and both fields.
  // Coordinates are in unpadded game pixels, shared by posters, sprites and hit targets.
  const focus = {x: 776, y: 220, width: 672, height: 456};
  const map = {width: 1728, height: 464, padX: 256, north: 272, south: 96};
  const artWidth = map.width + 2 * map.padX, artHeight = map.height + map.north + map.south;
  const hero = host.closest('.farm-hero');
  const signs = [...hero.querySelectorAll('.site-sign,.time-sign')];
  const music = hero.querySelector('.scene-music');
  const caption = music.querySelector('.music-track-copy');
  const symbol = music.querySelector('.music-symbol');
  // Left, right and first opaque roof row, in the same world space as the field paths.
  const roofs = [[225,337,10], [494,639,11], [752,800,71], [961,1070,15],
    [1191,1239,21], [1267,1379,45], [1425,1522,43]];
  const fieldBottom = 448;
  const camera = window.estateCamera = {frame: null};
  function measure() {
    const box = host.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    const w = Math.round(box.right * dpr) - Math.round(box.left * dpr);
    const h = Math.round(box.bottom * dpr) - Math.round(box.top * dpr);
    if (!w || !h) return;
    let maxZoom = Math.min(w / focus.width, h / focus.height);
    const hud = getComputedStyle(host);
    const roofGap = parseFloat(hud.getPropertyValue('--pasture-roof-gap'));
    if (roofGap > 0) {
      // The coop and barn silhouettes begin at world rows 43 and 45.
      const boardBottom = parseFloat(hud.getPropertyValue('--board-top')) + parseFloat(hud.getPropertyValue('--board-height'));
      const clearance = (boardBottom + roofGap) * h / box.height;
      maxZoom = Math.min(maxZoom, (h / 2 - clearance) / (focus.y - 43));
    }
    const minZoom = Math.max(w / (2 * Math.min(focus.x + map.padX, artWidth - focus.x - map.padX)),
      h / (2 * Math.min(focus.y + map.north, map.height + map.south - focus.y)));
    const target = Math.min(maxZoom, Math.max(w / map.width, h / map.height));
    const whole = Math.max(1, Math.round(target));
    let zoom = whole >= minZoom && whole <= maxZoom && Math.abs(whole-target) <= target*0.16
      ? whole : Math.max(minZoom, Math.min(target, maxZoom));
    const cssX = box.width/w, cssY = box.height/h;
    const boards = signs.map(sign => sign.getBoundingClientRect());
    const song = caption.getBoundingClientRect();
    const icon = symbol.getBoundingClientRect();
    const wrapped = song.top >= boards[0].bottom - 1;
    const songWidth = Math.min(248, music.getBoundingClientRect().width);
    const center = box.left + box.width/2;
    // A two-row header sits in its own glade. In a single row check only the
    // roofs actually beneath a board, the song title, or the painted play symbol.
    const overlays = wrapped ? [{left:box.left, right:box.right, bottom:song.bottom, gap:8}] :
      [...boards, {left:center-songWidth/2, right:center+songWidth/2, bottom:song.bottom, gap:3},
        {left:icon.left, right:icon.right, bottom:icon.bottom, gap:2}];
    let px, py;
    for (;;) {
      px = Math.round(w/2 - focus.x*zoom);
      py = Math.round(h/2 - focus.y*zoom);
      let fitZoom = zoom;
      for (const overlay of overlays) {
        const left = (overlay.left-box.left)/cssX, right = (overlay.right-box.left)/cssX;
        const clear = (overlay.bottom-box.top+(overlay.gap ?? 8))/cssY;
        for (const [x1,x2,top] of roofs) {
          if (px+x2*zoom < left || px+x1*zoom > right) continue;
          py = Math.max(py, Math.ceil(clear-top*zoom));
          fitZoom = Math.min(fitZoom, (h-clear-3/cssY)/(fieldBottom-top));
        }
      }
      if (fitZoom >= zoom || fitZoom <= 0) break;
      zoom = fitZoom;
    }
    camera.frame = {w, h, zoom, px, py, cssX, cssY};
    // Set the fallback image before assets decode; switching seasons never moves the camera.
    for (const [name, value] of Object.entries({
      x: (px - map.padX*zoom)*cssX, y: (py - map.north*zoom)*cssY,
      width: artWidth*zoom*cssX, height: artHeight*zoom*cssY
    })) host.style.setProperty('--estate-' + name, value + 'px');
    host.dispatchEvent(new Event('estatecamera'));
  }
  const observer = new ResizeObserver(measure);
  for (const element of [host, music, ...signs]) observer.observe(element);
  function watchDpr() {
    matchMedia('(resolution: ' + window.devicePixelRatio + 'dppx)')
      .addEventListener('change', () => { watchDpr(); measure(); }, {once: true});
  }
  watchDpr();
  measure();
})();
