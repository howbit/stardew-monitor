(() => {
  'use strict';
  const names = {clear:'晴', cloud:'多云', fog:'雾', rain:'雨', storm:'雷雨', snow:'雪', wind:'风'};
  const seasonal = {spring:['wind','clear','rain','clear'], summer:['clear','storm','clear','rain'],
    fall:['wind','clear','rain','wind'], winter:['snow','clear','snow','clear']};
  const memory = new Map();
  let display;
  const inFlight = new Set();
  const label = document.querySelector('#season-time');
  const temperature = document.querySelector('#farm-temperature');
  const button = document.querySelector('#farm-weather');
  const viewport = document.querySelector('.hero-viewport');
  const veil = document.createElement('div');
  veil.className = 'farm-weather-layer';
  veil.setAttribute('aria-hidden', 'true');
  viewport.append(veil);
  for (let i = 0; i < 30; i++) {
    const flake = document.createElement('i');
    flake.style.left = ((i * 37 + 11) % 103) + '%';
    flake.style.setProperty('--delay', -(i * .791 % 6) + 's');
    flake.style.setProperty('--speed', String(.85 + (i % 7) * .09));
    veil.append(flake);
  }
  function condition(code) {
    if (code === 0 || code === 1) return 'clear';
    if (code === 2 || code === 3) return 'cloud';
    if ([45,48].includes(code)) return 'fog';
    if ([71,73,75,77,85,86].includes(code)) return 'snow';
    if ([95,96,99].includes(code)) return 'storm';
    if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(code)) return 'rain';
    return null;
  }
  const fresh = 15*60000;
  function cached(key) {
    if (memory.has(key)) return memory.get(key);
    try {
      const saved = JSON.parse(localStorage.getItem('estate-weather:' + key));
      if (saved && names[saved.kind] && Date.now()-saved.at < 86400000) memory.set(key,saved);
    } catch {}
    return memory.get(key);
  }
  async function json(url) {
    const response = await fetch(url, {signal: AbortSignal.timeout(8000), credentials:'omit'});
    if (!response.ok) throw new Error('Weather request ' + response.status);
    return response.json();
  }
  async function refresh(key) {
    if (inFlight.has(key)) return;
    inFlight.add(key);
    const [lat,lon] = key.split(',');
    try {
      const result = await json('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+
        '&current=weather_code,temperature_2m&temperature_unit=celsius&timeformat=unixtime');
      const kind = condition(result.current?.weather_code);
      if (!kind) throw new Error('Unknown weather');
      const sample = {kind, temperature:Number.isFinite(result.current.temperature_2m) ? result.current.temperature_2m : null, at:Date.now()};
      memory.set(key,sample);
      try { localStorage.setItem('estate-weather:'+key,JSON.stringify(sample)); } catch {}
    } catch {
      memory.set(key, {...cached(key), retry:Date.now()+120000});
    } finally {
      inFlight.delete(key);
      if (display?.key === key) paint();
    }
  }
  function paint() {
    const {key, manual, game, prefix, city} = display;
    const sample = key && cached(key);
    const hasSample = sample?.kind && Date.now()-sample.at < 86400000;
    const kind = hasSample ? sample.kind : game;
    const source = hasSample ? (Date.now()-sample.at < fresh ? '实况' : '最近天气') :
      (manual ? '游戏天气' : '季节天气');
    document.body.dataset.weather = kind;
    document.body.dataset.weatherSource = source;
    label.textContent = prefix + ' · ' + names[kind] + (hasSample ? (source === '最近天气' ? ' 缓存' : '') : ' 模拟');
    const celsius = hasSample ? sample.temperature : manual ? display.gameTemperature : null;
    temperature.textContent = Number.isFinite(celsius) ? Math.round(celsius) + '°C' : '—°C';
    if (hasSample) temperature.href = 'https://open-meteo.com/en/licence';
    else temperature.removeAttribute('href');
    temperature.title = manual ? '季节场景的模拟气温' : hasSample ? source + '气温 · 天气数据来自 Open-Meteo' : '暂未取得当地气温';
    temperature.setAttribute('aria-label', temperature.textContent + '，' + temperature.title);
    button.title = [city,display.origin,source,names[kind],temperature.textContent,hasSample ? 'Open-Meteo' : '',display.local ? '点击使用设备定位' : ''].filter(Boolean).join(' · ');
    button.setAttribute('aria-label',button.title);
    button.parentElement.title = button.title;
    button.disabled = !display.local;
  }
  function update(state, season, manual, prefix, origin) {
    const p = state.coordinates;
    const key = !manual && p ? p.latitude.toFixed(1) + ',' + p.longitude.toFixed(1) : '';
    const choices = seasonal[season];
    const game = choices[(state.local.day + state.local.month) % choices.length];
    const gameTemperature = {spring:18,summer:28,fall:16,winter:-2}[season]
      - (document.body.classList.contains('night') ? 6 : 0) - ({rain:3,storm:4,snow:2,wind:1}[game] || 0);
    display = {key, manual, game, gameTemperature, prefix, city:state.city, origin: manual ? '' : origin, local:!manual && !window.estateSelectedNode?.()};
    paint();
    const sample = key && cached(key);
    if (key && !(Date.now()-sample?.at < fresh && Object.hasOwn(sample,'temperature')) && !(sample?.retry > Date.now())) refresh(key);
  }
  async function locate(device) {
    const zone = window.StardewScene.browserZone();
    try {
      let permission = 'prompt';
      if (!device && navigator.permissions) {
        try { permission = (await navigator.permissions.query({name:'geolocation'})).state; } catch {}
      }
      if ((device || permission === 'granted') && navigator.geolocation) {
        try {
          const pos = await new Promise((ok,fail)=>navigator.geolocation.getCurrentPosition(ok,fail,
            {enableHighAccuracy:false,maximumAge:900000,timeout:7000}));
          return {city:'设备所在地', source:'设备定位', timeZone:zone, latitude:+pos.coords.latitude.toFixed(1), longitude:+pos.coords.longitude.toFixed(1)};
        } catch { /* A city-level network location can still supply local weather. */ }
      }
      const ip = await json('https://get.geojs.io/v1/ip/geo.json');
      const point = window.StardewScene.coordinates(ip);
      if (point) return {city:ip.city || '网络所在地', source:'网络估算', timeZone:window.StardewScene.canonicalZone(ip.timezone)||zone,
        latitude:+point.latitude.toFixed(1), longitude:+point.longitude.toFixed(1)};
    } catch {}
    return null;
  }
  window.estateWeather = {update, locate};
})();
