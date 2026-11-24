(() => {
  'use strict';
  const host = document.querySelector('.hero-scene');
  if (!host || document.body.dataset.farmArt !== 'native') return;
  // The reference crop spans the farmhouse, well, both obelisks and both fields.
  // Coordinates are in unpadded game pixels, shared by posters, sprites and hit targets.
  const focus = {x: 776, y: 220, width: 672, height: 456};
  const map = {width: 1728, height: 464, padX: 256, padY: 96};
  const artWidth = map.width + 2 * map.padX, artHeight = map.height + 2 * map.padY;
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
      h / (2 * Math.min(focus.y + map.padY, artHeight - focus.y - map.padY)));
    const target = Math.min(maxZoom, Math.max(w / map.width, h / map.height));
    const whole = Math.max(1, Math.round(target));
    const zoom = whole >= minZoom && whole <= maxZoom && Math.abs(whole-target) <= target*0.16
      ? whole : Math.max(minZoom, Math.min(target, maxZoom));
    const px = Math.round(w/2 - focus.x*zoom), py = Math.round(h/2 - focus.y*zoom);
    const cssX = box.width/w, cssY = box.height/h;
    camera.frame = {w, h, zoom, px, py, cssX, cssY};
    // Set the fallback image before assets decode; switching seasons never moves the camera.
    for (const [name, value] of Object.entries({
      x: (px - map.padX*zoom)*cssX, y: (py - map.padY*zoom)*cssY,
      width: artWidth*zoom*cssX, height: artHeight*zoom*cssY
    })) host.style.setProperty('--estate-' + name, value + 'px');
    host.dispatchEvent(new Event('estatecamera'));
  }
  new ResizeObserver(measure).observe(host);
  function watchDpr() {
    matchMedia('(resolution: ' + window.devicePixelRatio + 'dppx)')
      .addEventListener('change', () => { watchDpr(); measure(); }, {once: true});
  }
  watchDpr();
  measure();
})();
