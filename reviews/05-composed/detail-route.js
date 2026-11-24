(() => {
  const script = new URL(document.currentScript.src);
  const asset = new URL('native-detail.html', script);
  const revision = script.searchParams.get('stardew_v');
  const isDetail = () => /^#\/server\/[^/?#]+(?:\?.*)?$/.test(location.hash);
  function enter(fromHome) {
    if (!isDetail()) return;
    if (fromHome) {
      sessionStorage.setItem('farm-detail-origin', JSON.stringify({
        hash: location.hash, page: location.pathname + location.search, y: scrollY,
        scene: window.farmDetailScene?.(),
        search: document.querySelector('#search')?.value || '',
        region: document.querySelector('.region-tab.active')?.dataset.region,
        routes: typeof chosenRoutes !== 'undefined' ? Array.from(chosenRoutes) : []
      }));
    }
    asset.search = location.search;
    if (revision) asset.searchParams.set('stardew_v', revision);
    asset.hash = location.hash;
    location.replace(asset.href);
  }
  window.addEventListener('hashchange', event => enter(!new URL(event.oldURL).hash.startsWith('#/server/')));
  window.addEventListener('pageshow', () => {
    if (isDetail()) return;
    const saved = JSON.parse(sessionStorage.getItem('farm-detail-origin') || 'null');
    if (!saved || saved.page !== location.pathname + location.search) return;
    sessionStorage.removeItem('farm-detail-origin');
    if (saved.scene) window.restoreDetailScene?.(saved.scene);
    if (typeof chosenRoutes !== 'undefined') {
      for (const [node, route] of saved.routes || []) chosenRoutes.set(node, route);
    }
    function restoreRegion() {
      const region = Array.from(document.querySelectorAll('.region-tab')).find(el => el.dataset.region === saved.region);
      region?.click();
    }
    restoreRegion();
    const search = document.querySelector('#search');
    if (search && search.value !== saved.search) {
      search.value = saved.search;
      search.dispatchEvent(new Event('input'));
    }
    function restore() { window.scrollTo({top: saved.y, behavior: 'instant'}); }
    restore();
    if (!document.querySelector('#cards article') && window.cfsmAdapter) {
      const unsubscribe = window.cfsmAdapter.subscribe(() => {
        unsubscribe();
        restoreRegion();
        requestAnimationFrame(restore);
      });
    }
  });
  enter(false);
})();
