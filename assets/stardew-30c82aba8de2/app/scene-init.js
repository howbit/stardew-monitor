/* Resolve the initial camera subject before any seasonal art is requested. */
(() => {
  const core = window.StardewScene;
  const url = new URL(location.href);
  // Older preview bookmarks pinned even ordinary reloads to spring daytime.
  if (url.searchParams.has('season') || url.searchParams.has('night')) {
    url.searchParams.delete('season');
    url.searchParams.delete('night');
    history.replaceState(history.state, '', url);
  }
  const demo = /^(spring|summer|fall|winter)-(day|night)$/.exec(url.searchParams.get('demo') || '');
  const zone = core.browserZone();
  const cityZones = {
    'Asia/Hong_Kong':['香港',22.3,114.2], 'Asia/Macau':['澳门',22.2,113.5],
    'Asia/Singapore':['新加坡',1.4,103.8]
  };
  const city = cityZones[zone];
  let visitor = city ? {city:city[0], timeZone:zone, latitude:city[1], longitude:city[2], source:'时区城市'} :
    {city:'', timeZone:zone};
  try {
    const saved = JSON.parse(localStorage.getItem('estate-visitor') || 'null');
    if (saved && saved.zone === zone && Date.now() - saved.stamp < 3600000 && core.coordinates(saved.place) &&
        (!city || saved.place.source === '设备定位')) visitor = saved.place;
  } catch {}
  const state = core.resolveScene(visitor);
  const season = demo?.[1] || (state.season === 'autumn' ? 'fall' : state.season);
  const night = demo ? demo[2] === 'night' : state.phase === 'night';
  window.estateStart = {visitor, season, night, demo: Boolean(demo)};
  window.nodeFarmSprite = (id, windows = false) => '/assets/stardew-30c82aba8de2/ui/estate/'+(windows ? 'windows/' : '')+encodeURIComponent(id)+'.png';
})();
